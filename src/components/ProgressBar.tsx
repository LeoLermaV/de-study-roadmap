import type { Topic } from '../types'

interface ProgressBarProps {
  getDoneCount: (topics: Topic[]) => number
  allTopics: Topic[]
}

export function ProgressBar({ getDoneCount, allTopics }: ProgressBarProps) {
  const totalDone = getDoneCount(allTopics)
  const total = allTopics.length
  const pct = total > 0 ? Math.round((totalDone / total) * 100) : 0
  const hoursRemaining = allTopics
    .filter((t) => getDoneCount([t]) === 0)
    .reduce((sum, t) => sum + t.estimatedHours, 0)

  return (
    <div className="px-4 pt-4 pb-3 border-b border-hairline bg-canvas">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-bold text-ink tracking-tight">
          {totalDone} <span className="text-ink-faint font-normal">of {total}</span>
        </span>
        <span className="text-[13px] text-ink-faint font-normal">
          {pct}% · {hoursRemaining}h remaining
        </span>
      </div>
      <div className="h-[4px] bg-canvas-soft rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
