import { Bookmark, Eye, FileText, Headphones, MousePointerClick, Video } from 'lucide-react'
import type { ReadingFormat, ReadingItem } from '../types'
import { MarkdownInline } from './MarkdownText'

const formatConfig: Record<ReadingFormat, { icon: typeof Video; label: string }> = {
  read: { icon: FileText, label: 'Read' },
  watch: { icon: Video, label: 'Watch' },
  listen: { icon: Headphones, label: 'Listen' },
  'listen-or-read': { icon: Headphones, label: 'Listen or read' },
  look: { icon: Eye, label: 'Look' },
  try: { icon: MousePointerClick, label: 'Try' },
  keep: { icon: Bookmark, label: 'Keep' },
}

export function ReadingItemRow({ item }: { item: ReadingItem }) {
  const cfg = formatConfig[item.format]
  const Icon = cfg.icon

  return (
    <li className="flex items-start gap-3">
      <Icon className="w-4 h-4 mt-[3px] shrink-0 text-ink-faint" />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mb-0.5 text-[12px] font-medium text-ink-faint">
          <span className="uppercase tracking-[0.05em]">{cfg.label}</span>
          <span aria-hidden="true">·</span>
          <span>{item.time}</span>
          {item.nz && (
            <span className="ml-1 px-1.5 py-px rounded text-[11px] font-semibold text-accent-teal bg-accent-teal/10">NZ</span>
          )}
        </div>
        <p className="text-[15px] text-ink-secondary leading-relaxed break-words">
          <MarkdownInline text={item.text} />
        </p>
        {item.parts && item.parts.length > 0 && (
          <ul className="mt-2 space-y-1.5">
            {item.parts.map((part) => (
              <li key={part} className="flex items-start gap-2.5 text-[14px] text-ink-secondary leading-relaxed">
                <span className="w-[4px] h-[4px] rounded-full bg-ink-faint mt-[9px] shrink-0" />
                <span className="min-w-0 break-words">
                  <MarkdownInline text={part} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}
