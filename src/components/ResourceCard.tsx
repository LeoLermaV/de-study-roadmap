import { ExternalLink, Video, FileText, Gamepad2, GraduationCap, BookOpen, Star, Bookmark } from 'lucide-react'
import type { Resource, ResourceType } from '../types'

interface ResourceCardProps {
  resource: Resource
}

const typeConfig: Record<ResourceType, { icon: typeof Video; label: string; dot: string }> = {
  video: { icon: Video, label: 'Video', dot: 'bg-accent-orange' },
  article: { icon: FileText, label: 'Article', dot: 'bg-accent-sky' },
  interactive: { icon: Gamepad2, label: 'Interactive', dot: 'bg-accent-purple' },
  course: { icon: GraduationCap, label: 'Course', dot: 'bg-accent-teal' },
  documentation: { icon: BookOpen, label: 'Docs', dot: 'bg-ink-faint' },
}

const priorityConfig = {
  'must-read': { icon: Star, label: 'Must read', color: 'text-accent-orange bg-accent-orange/10' },
  'skim': { icon: Bookmark, label: 'Skim', color: 'text-ink-faint bg-canvas-soft' },
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const cfg = typeConfig[resource.type]
  const Icon = cfg.icon
  const prio = resource.priority ? priorityConfig[resource.priority] : null
  const PrioIcon = prio?.icon

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 p-4 rounded-lg bg-surface border border-hairline hover:border-primary/20 hover:shadow-notion transition-all duration-200"
    >
      <div className="shrink-0 mt-0.5">
        <Icon className="w-4 h-4 text-ink-faint group-hover:text-primary transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[15px] font-medium text-ink group-hover:text-primary transition-colors truncate leading-snug">
            {resource.title}
          </span>
          <ExternalLink className="w-3 h-3 text-ink-faint shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-[6px] h-[6px] rounded-full ${cfg.dot}`} />
          <span className="text-[12px] font-medium text-ink-faint">
            {cfg.label}
          </span>
          {!resource.free && (
            <span className="text-[12px] font-medium text-accent-orange ml-1">Paid</span>
          )}
          {prio && PrioIcon && (
            <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-medium ml-1 ${prio.color}`}>
              <PrioIcon className="w-3 h-3" />
              {prio.label}
            </span>
          )}
        </div>
      </div>
    </a>
  )
}
