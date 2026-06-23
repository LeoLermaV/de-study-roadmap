import { useState, useMemo } from 'react'
import { ChevronDown, Search, Settings, Moon, Sun } from 'lucide-react'
import type { Phase, Topic } from '../types'
import { useProgress } from '../hooks/useProgress'
import { TopicRow } from './TopicRow'
import { ProgressBar } from './ProgressBar'
import faviconUrl from '/favicon.svg'

const SETTINGS_ID = '__settings__'

const phaseStyling: Record<string, { dot: string }> = {
  'Foundations': { dot: 'bg-accent-purple' },
  'Data Concepts': { dot: 'bg-accent-purple' },
  'Data Storage': { dot: 'bg-accent-sky' },
  'Data Processing': { dot: 'bg-accent-orange' },
  'Orchestration & Cloud': { dot: 'bg-accent-teal' },
  'Streaming & Advanced': { dot: 'bg-accent-green' },
}

interface SidebarProps {
  phases: Phase[]
  selectedTopicId: string | null
  allTopics: Topic[]
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  onSelectTopic: (topicId: string) => void
}

export function Sidebar({
  phases,
  selectedTopicId,
  allTopics,
  theme,
  onToggleTheme,
  onSelectTopic,
}: SidebarProps) {
  const { getStatus, getDoneCount } = useProgress()
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedPhases, setExpandedPhases] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(phases.map((_, i) => [i, true])),
  )

  const filteredPhases = useMemo(() => {
    if (!searchQuery.trim()) return phases
    const q = searchQuery.toLowerCase()
    return phases
      .map((phase) => ({
        ...phase,
        topics: phase.topics.filter(
          (t) =>
            t.title.toLowerCase().includes(q) ||
            t.why.toLowerCase().includes(q),
        ),
      }))
      .filter((p) => p.topics.length > 0)
  }, [phases, searchQuery])

  const togglePhase = (idx: number) => {
    setExpandedPhases((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <aside className="w-full bg-canvas border-r border-hairline flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-hairline">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center overflow-hidden">
              <img src={faviconUrl} className="w-5 h-5" alt="" />
            </div>
            <h1 className="text-[17px] font-bold text-ink tracking-[-0.125px]">
              DA Roadmap
            </h1>
          </div>
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-md text-ink-faint hover:text-ink-secondary hover:bg-canvas-soft transition-colors"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink-faint" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics..."
            className="w-full pl-8 pr-3 py-[6px] text-[15px] bg-canvas-soft border border-hairline rounded-xs text-ink placeholder:text-ink-faint outline-none focus:border-primary/50 focus:shadow-notion transition-all"
          />
        </div>
      </div>

      <ProgressBar
        getDoneCount={getDoneCount}
        allTopics={allTopics}
      />

      <nav className="flex-1 overflow-y-auto py-2">
        {filteredPhases.map((phase, idx) => {
          const doneCount = getDoneCount(phase.topics)
          const totalCount = phase.topics.length
          const isExpanded = expandedPhases[idx] ?? true
          const dotColor = phaseStyling[phase.title]?.dot ?? 'bg-ink-faint'

          return (
            <div key={phase.title} className="mb-0.5">
              <button
                onClick={() => togglePhase(idx)}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-ink-muted uppercase tracking-[0.05em] hover:text-ink-secondary transition-colors"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 text-ink-faint transition-transform duration-200 ${isExpanded ? '' : '-rotate-90'}`}
                />
                <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} />
                <span className="truncate">{phase.title}</span>
                <span className="ml-auto text-ink-faint/50 text-[12px] font-medium normal-case tracking-normal">
                  {doneCount}/{totalCount}
                </span>
              </button>

              {isExpanded && (
                <div className="pb-1">
                  {phase.topics.map((topic) => (
                    <TopicRow
                      key={topic.id}
                      topic={topic}
                      status={getStatus(topic.id)}
                      isSelected={selectedTopicId === topic.id}
                      onClick={() => onSelectTopic(topic.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Settings link */}
      <div className="border-t border-hairline px-2 py-1">
        <button
          onClick={() => onSelectTopic(SETTINGS_ID)}
          className={`
            w-full flex items-center gap-3 px-3 py-[10px] text-left text-[15px]
            transition-all duration-150 rounded-sm
            ${selectedTopicId === SETTINGS_ID
              ? 'bg-primary/[0.06] text-ink font-semibold'
              : 'text-ink-secondary hover:bg-canvas-soft/70'
            }
          `}
        >
          <Settings className="w-4 h-4 shrink-0 text-ink-faint/50" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  )
}
