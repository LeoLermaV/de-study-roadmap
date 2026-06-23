import { Circle, CircleCheck, CircleDot, Wrench, FlaskConical } from 'lucide-react'
import type { Topic, TopicStatus } from '../types'

interface TopicRowProps {
  topic: Topic
  status: TopicStatus
  isSelected: boolean
  onClick: () => void
}

const statusConfig = {
  'not-started': { icon: Circle, label: 'Not started' },
  'in-progress': { icon: CircleDot, label: 'In progress' },
  done: { icon: CircleCheck, label: 'Done' },
}

const typeBadge = {
  theory: null,
  project: { label: 'Project', icon: FlaskConical, color: 'text-accent-teal bg-accent-teal/10' },
  setup: { label: 'Setup', icon: Wrench, color: 'text-accent-orange bg-accent-orange/10' },
}

export function TopicRow({ topic, status, isSelected, onClick }: TopicRowProps) {
  const cfg = statusConfig[status]
  const Icon = cfg.icon
  const badge = typeBadge[topic.type]

  return (
    <button
      onClick={onClick}
      className={`
        relative w-full flex items-center gap-3 px-4 py-[10px] text-left text-[15px]
        transition-all duration-150 rounded-sm
        ${isSelected
          ? 'bg-primary/[0.06] text-ink font-semibold'
          : 'text-ink-secondary hover:bg-canvas-soft/70'
        }
        ${status === 'done' ? 'opacity-50' : ''}
      `}
    >
      {/* Active indicator — Notion's blue left bar */}
      {isSelected && (
        <span className="absolute left-0 top-[6px] bottom-[6px] w-[3px] bg-primary rounded-r-full" />
      )}

      <Icon className={`w-4 h-4 shrink-0 ${
        status === 'done'
          ? 'text-accent-green'
          : status === 'in-progress'
          ? 'text-primary'
          : 'text-ink-faint/50'
      }`} />

      <span className="truncate">{topic.title}</span>

      {badge && (
        <span className={`ml-auto shrink-0 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-medium ${badge.color}`}>
          <badge.icon className="w-3 h-3" />
          {badge.label}
        </span>
      )}

      {status === 'in-progress' && (
        <span className="ml-auto w-[6px] h-[6px] rounded-full bg-primary shrink-0" />
      )}
    </button>
  )
}
