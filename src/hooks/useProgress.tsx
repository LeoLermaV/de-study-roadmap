import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import type { Topic, TopicStatus, UserProgress } from '../types'

const STORAGE_KEY = 'de-roadmap-progress'
const GIST_TOKEN_KEY = 'de-roadmap-gist-token'
const GIST_ID_KEY = 'de-roadmap-gist-id'
const GIST_FILE = 'de-roadmap-progress.json'
const GIST_DESCRIPTION = 'Data Analytics Roadmap — study progress'
const GIST_API = 'https://api.github.com/gists'

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(progress: UserProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

interface ProgressContextValue {
  progress: UserProgress
  getStatus: (topicId: string) => TopicStatus
  setStatus: (topicId: string, status: TopicStatus) => void
  getNotes: (topicId: string) => string
  setNotes: (topicId: string, notes: string) => void
  getDoneCount: (topics: Topic[]) => number
  getInProgressCount: (topics: Topic[]) => number
  exportProgress: () => string
  importProgress: (json: string) => boolean
  gistToken: string
  setGistToken: (token: string) => void
  saveToGist: () => Promise<string>
  loadFromGist: () => Promise<string>
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(loadProgress)
  const [gistToken, setGistTokenState] = useState(() => localStorage.getItem(GIST_TOKEN_KEY) ?? '')
  const gistIdRef = useRef(localStorage.getItem(GIST_ID_KEY))

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  useEffect(() => {
    localStorage.setItem(GIST_TOKEN_KEY, gistToken)
  }, [gistToken])

  const getStatus = useCallback(
    (topicId: string): TopicStatus => progress[topicId]?.status ?? 'not-started',
    [progress],
  )

  const setStatus = useCallback((topicId: string, status: TopicStatus) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        status,
        notes: prev[topicId]?.notes ?? '',
        ...(status === 'in-progress' && !prev[topicId]?.startedAt ? { startedAt: Date.now() } : {}),
        ...(status === 'done' ? { completedAt: Date.now() } : {}),
      },
    }))
  }, [])

  const getNotes = useCallback(
    (topicId: string): string => progress[topicId]?.notes ?? '',
    [progress],
  )

  const setNotes = useCallback((topicId: string, notes: string) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: { ...prev[topicId], status: prev[topicId]?.status ?? 'not-started', notes },
    }))
  }, [])

  const getDoneCount = useCallback(
    (topics: Topic[]): number => topics.filter((t) => progress[t.id]?.status === 'done').length,
    [progress],
  )

  const getInProgressCount = useCallback(
    (topics: Topic[]): number => topics.filter((t) => progress[t.id]?.status === 'in-progress').length,
    [progress],
  )

  const exportProgress = useCallback((): string => JSON.stringify(progress, null, 2), [progress])

  const importProgress = useCallback((json: string): boolean => {
    try {
      const data = JSON.parse(json) as UserProgress
      const valid = Object.values(data).every(
        (v) =>
          typeof v === 'object' &&
          ['not-started', 'in-progress', 'done'].includes(v.status) &&
          typeof v.notes === 'string',
      )
      if (!valid) return false
      setProgress(data)
      return true
    } catch {
      return false
    }
  }, [])

  const setGistToken = useCallback((token: string) => {
    setGistTokenState(token)
  }, [])

  const gistHeaders = useCallback(() => ({
    'Content-Type': 'application/json',
    Authorization: `token ${gistToken}`,
    Accept: 'application/vnd.github.v3+json',
  }), [gistToken])

  const saveToGist = useCallback(async (): Promise<string> => {
    const content = JSON.stringify(progress, null, 2)
    const gistId = gistIdRef.current

    if (gistId) {
      const res = await fetch(`${GIST_API}/${gistId}`, {
        method: 'PATCH',
        headers: gistHeaders(),
        body: JSON.stringify({ files: { [GIST_FILE]: { content } } }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.message ?? `HTTP ${res.status}`)
      }
      return 'saved'
    }

    const res = await fetch(GIST_API, {
      method: 'POST',
      headers: gistHeaders(),
      body: JSON.stringify({
        description: GIST_DESCRIPTION,
        public: false,
        files: { [GIST_FILE]: { content } },
      }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body?.message ?? `HTTP ${res.status}`)
    }
    const data = await res.json()
    gistIdRef.current = data.id
    localStorage.setItem(GIST_ID_KEY, data.id)
    return 'created'
  }, [progress, gistHeaders])

  const loadFromGist = useCallback(async (): Promise<string> => {
    const gistId = gistIdRef.current
    if (!gistId) throw new Error('No Gist ID found. Save to Gist first.')

    const res = await fetch(`${GIST_API}/${gistId}`, {
      headers: gistHeaders(),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body?.message ?? `HTTP ${res.status}`)
    }
    const data = await res.json()
    const fileContent: string | undefined = data?.files?.[GIST_FILE]?.content
    if (!fileContent) throw new Error('Progress file not found in Gist')

    const parsed = JSON.parse(fileContent) as UserProgress
    const valid = Object.values(parsed).every(
      (v) =>
        typeof v === 'object' &&
        ['not-started', 'in-progress', 'done'].includes(v.status) &&
        typeof v.notes === 'string',
    )
    if (!valid) throw new Error('Invalid progress data in Gist')

    setProgress(parsed)
    return 'loaded'
  }, [gistHeaders])

  const value = useMemo(
    () => ({
      progress, getStatus, setStatus, getNotes, setNotes, getDoneCount, getInProgressCount,
      exportProgress, importProgress, gistToken, setGistToken, saveToGist, loadFromGist,
    }),
    [progress, getStatus, setStatus, getNotes, setNotes, getDoneCount, getInProgressCount,
      exportProgress, importProgress, gistToken, setGistToken, saveToGist, loadFromGist],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider')
  return ctx
}
