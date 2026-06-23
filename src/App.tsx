import { useState, useCallback, useRef, useEffect } from 'react'
import { phases, allTopics } from './data/roadmap'
import { ProgressProvider, useProgress } from './hooks/useProgress'
import { useTheme } from './hooks/useTheme'
import { Sidebar } from './components/Sidebar'
import { TopicDetail } from './components/TopicDetail'
import { SettingsModal } from './components/SettingsModal'

const WIDTH_KEY = 'de-roadmap-sidebar-width'
const MIN_WIDTH = 240
const MAX_WIDTH = 560
const DEFAULT_WIDTH = 320

function loadWidth(): number {
  const stored = localStorage.getItem(WIDTH_KEY)
  if (stored) {
    const n = parseInt(stored, 10)
    if (n >= MIN_WIDTH && n <= MAX_WIDTH) return n
  }
  return DEFAULT_WIDTH
}

export default function App() {
  return (
    <ProgressProvider>
      <AppContent />
    </ProgressProvider>
  )
}

function AppContent() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [mobileTopicOpen, setMobileTopicOpen] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(loadWidth)
  const isResizing = useRef(false)
  const { exportProgress, importProgress } = useProgress()
  const { theme, toggle: toggleTheme } = useTheme()

  const selectedTopic = selectedTopicId
    ? allTopics.find((t) => t.id === selectedTopicId) ?? null
    : null

  const handleSelectTopic = useCallback((topicId: string) => {
    setSelectedTopicId(topicId)
    setMobileTopicOpen(true)
  }, [])

  const handleBack = useCallback(() => {
    setMobileTopicOpen(false)
  }, [])

  const handleMouseDown = useCallback(() => {
    isResizing.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return
      setSidebarWidth(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, e.clientX)))
    }

    const handleMouseUp = () => {
      if (!isResizing.current) return
      isResizing.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
      setSidebarWidth((w) => {
        localStorage.setItem(WIDTH_KEY, String(w))
        return w
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className="h-dvh flex overflow-hidden bg-canvas-soft">
      <div
        className={`${mobileTopicOpen ? 'hidden' : 'flex'} md:flex shrink-0`}
        style={{ width: sidebarWidth }}
      >
        <Sidebar
          phases={phases}
          selectedTopicId={selectedTopicId}
          allTopics={allTopics}
          theme={theme}
          onToggleTheme={toggleTheme}
          onSelectTopic={handleSelectTopic}
          onOpenSettings={() => setSettingsOpen(true)}
        />
      </div>

      {/* Resize handle */}
      <div
        onMouseDown={handleMouseDown}
        className={`hidden md:block shrink-0 w-[5px] cursor-col-resize hover:bg-primary/30 active:bg-primary/50 transition-colors relative z-10 ${
          mobileTopicOpen ? 'hidden' : ''
        }`}
      />

      <div className={`${!mobileTopicOpen && selectedTopic ? 'hidden' : 'flex'} md:flex flex-1 min-w-0`}>
        <TopicDetail
          topic={selectedTopic}
          onBack={handleBack}
        />
      </div>

      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        onExport={exportProgress}
        onImport={importProgress}
      />
    </div>
  )
}
