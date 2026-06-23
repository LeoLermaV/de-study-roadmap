import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Topic, TopicStatus, UserProgress } from '../types'

const STORAGE_KEY = 'de-roadmap-progress'

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
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const getStatus = useCallback(
    (topicId: string): TopicStatus => {
      return progress[topicId]?.status ?? 'not-started'
    },
    [progress],
  )

  const setStatus = useCallback((topicId: string, status: TopicStatus) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        status,
        notes: prev[topicId]?.notes ?? '',
        ...(status === 'in-progress' && !prev[topicId]?.startedAt
          ? { startedAt: Date.now() }
          : {}),
        ...(status === 'done' ? { completedAt: Date.now() } : {}),
      },
    }))
  }, [])

  const getNotes = useCallback(
    (topicId: string): string => {
      return progress[topicId]?.notes ?? ''
    },
    [progress],
  )

  const setNotes = useCallback((topicId: string, notes: string) => {
    setProgress((prev) => ({
      ...prev,
      [topicId]: {
        ...prev[topicId],
        status: prev[topicId]?.status ?? 'not-started',
        notes,
      },
    }))
  }, [])

  const getDoneCount = useCallback(
    (topics: Topic[]): number => {
      return topics.filter((t) => progress[t.id]?.status === 'done').length
    },
    [progress],
  )

  const getInProgressCount = useCallback(
    (topics: Topic[]): number => {
      return topics.filter((t) => progress[t.id]?.status === 'in-progress').length
    },
    [progress],
  )

  const exportProgress = useCallback((): string => {
    return JSON.stringify(progress, null, 2)
  }, [progress])

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

  const value = useMemo(
    () => ({
      progress,
      getStatus,
      setStatus,
      getNotes,
      setNotes,
      getDoneCount,
      getInProgressCount,
      exportProgress,
      importProgress,
    }),
    [progress, getStatus, setStatus, getNotes, setNotes, getDoneCount, getInProgressCount, exportProgress, importProgress],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within a ProgressProvider')
  return ctx
}
