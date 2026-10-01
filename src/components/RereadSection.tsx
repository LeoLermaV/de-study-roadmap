import { useMemo, useState } from 'react'
import { ArrowRight, Check, RotateCcw } from 'lucide-react'
import type { Topic, UserProgress } from '../types'
import { phases } from '../data/roadmap'
import { useProgress } from '../hooks/useProgress'
import { MarkdownInline, MarkdownText } from './MarkdownText'

type ProgressEntry = UserProgress[string]

interface CoveredTopic {
  topic: Topic
  phase: string
  entry: ProgressEntry
  lastTouched: number
}

const DAY_MS = 24 * 60 * 60 * 1000

function isTimestamp(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0
}

function startOfDay(ts: number): number {
  const d = new Date(ts)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

function daysBetween(earlier: number, later: number): number {
  return Math.round((startOfDay(later) - startOfDay(earlier)) / DAY_MS)
}

function latestActivity(entry: ProgressEntry): { label: string; ts: number } | null {
  const candidates: { label: string; ts: unknown }[] = [
    { label: 'Re-read', ts: entry.reviewedAt },
    { label: 'Finished', ts: entry.completedAt },
    { label: 'Started', ts: entry.startedAt },
  ]
  const valid = candidates.filter((c): c is { label: string; ts: number } => isTimestamp(c.ts))
  if (valid.length === 0) return null
  return valid.reduce((latest, c) => (c.ts > latest.ts ? c : latest))
}

function describeActivity(entry: ProgressEntry, now: number): string {
  const activity = latestActivity(entry)
  if (!activity) return 'Not re-read yet'
  const days = daysBetween(activity.ts, now)
  if (days <= 0) return `${activity.label} today`
  if (days === 1) return `${activity.label} yesterday`
  if (days < 30) return `${activity.label} ${days} days ago`
  const date = new Date(activity.ts).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })
  return `${activity.label} on ${date}`
}

function isReviewedToday(entry: ProgressEntry, now: number): boolean {
  return isTimestamp(entry.reviewedAt) && daysBetween(entry.reviewedAt, now) <= 0
}

interface RereadSectionProps {
  onSelectTopic: (topicId: string) => void
}

export function RereadSection({ onSelectTopic }: RereadSectionProps) {
  const { progress, markReviewed } = useProgress()
  const [now] = useState(Date.now)
  const [pinnedId, setPinnedId] = useState<string | null>(null)

  const covered = useMemo<CoveredTopic[]>(() => {
    const result: CoveredTopic[] = []
    for (const phase of phases) {
      for (const topic of phase.topics) {
        const entry = progress[topic.id]
        if (entry?.status !== 'in-progress' && entry?.status !== 'done') continue
        const activity = latestActivity(entry)
        result.push({ topic, phase: phase.title, entry, lastTouched: activity?.ts ?? 0 })
      }
    }
    return result.sort((a, b) => a.lastTouched - b.lastTouched)
  }, [progress])

  const suggestion =
    covered.find((c) => c.topic.id === pinnedId) ??
    covered.find((c) => !isReviewedToday(c.entry, now)) ??
    null
  const suggestionDone = suggestion ? isReviewedToday(suggestion.entry, now) : false
  const nextSuggestion = covered.find(
    (c) => c.topic.id !== suggestion?.topic.id && !isReviewedToday(c.entry, now),
  )

  const handleReread = (topicId: string) => {
    if (topicId === suggestion?.topic.id) setPinnedId(topicId)
    markReviewed(topicId)
  }

  return (
    <section>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-[5px] bg-accent-teal/10 flex items-center justify-center">
          <RotateCcw className="w-3.5 h-3.5 text-accent-teal" />
        </div>
        <h2 className="text-[13px] font-semibold text-ink-secondary uppercase tracking-[0.05em]">Re-read</h2>
      </div>
      <p className="text-[14px] text-ink-muted leading-relaxed mb-4">
        Going back over what you have already covered is real progress, not repetition. The topic you have gone longest without reading comes first.
      </p>

      {covered.length === 0 ? (
        <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion text-[14px] text-ink-muted leading-relaxed">
          Topics you mark In Progress or Done will appear here, oldest first, so you can come back to them.
        </div>
      ) : (
        <div className="space-y-4">
          {suggestion ? (
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion">
              <p className="text-[12px] font-semibold text-ink-faint uppercase tracking-[0.05em] mb-1">Suggested re-read</p>
              <h3 className="text-[19px] font-semibold text-ink leading-snug">{suggestion.topic.title}</h3>
              <p className="text-[13px] text-ink-faint mt-0.5 mb-4">
                {suggestion.phase} · {describeActivity(suggestion.entry, now)}
              </p>

              {suggestion.topic.type === 'setup' ? (
                <div className="space-y-4 text-[15px] text-ink-secondary mb-5">
                  {suggestion.topic.what.map((item) => (
                    <MarkdownText key={item} text={item} />
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5 mb-5">
                  {suggestion.topic.what.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-ink-secondary leading-relaxed">
                      <span className="w-[5px] h-[5px] rounded-full bg-primary/40 mt-[9px] shrink-0" />
                      <span className="min-w-0">
                        <MarkdownInline text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleReread(suggestion.topic.id)}
                  disabled={suggestionDone}
                  className={`flex items-center gap-1.5 py-2 px-4 text-[14px] font-medium rounded-full active:scale-[0.97] transition-all ${
                    suggestionDone
                      ? 'text-accent-green bg-accent-green/10 border border-accent-green/20 cursor-default'
                      : 'text-white bg-primary hover:bg-primary-active'
                  }`}
                >
                  {suggestionDone ? <Check className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
                  {suggestionDone ? 'Re-read today' : 'Mark as re-read today'}
                </button>
                <button
                  onClick={() => onSelectTopic(suggestion.topic.id)}
                  className="flex items-center gap-1.5 py-2 px-4 text-[14px] font-medium text-ink bg-surface border border-hairline rounded-full hover:bg-canvas-soft active:scale-[0.97] transition-all"
                >
                  Open full topic
                  <ArrowRight className="w-4 h-4" />
                </button>
                {nextSuggestion && (
                  <button
                    onClick={() => setPinnedId(nextSuggestion.topic.id)}
                    className="py-2 px-2 text-[14px] text-ink-muted hover:text-primary transition-colors"
                  >
                    Suggest another
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion text-[14px] text-ink-muted leading-relaxed">
              Everything you have covered has been re-read today. There is nothing left to suggest until tomorrow.
            </div>
          )}

          <div>
            <h3 className="text-[13px] font-medium text-ink-muted mb-2">
              Everything you have covered <span className="text-ink-faint">({covered.length})</span>
            </h3>
            <ul className="bg-surface rounded-xl border border-hairline shadow-notion divide-y divide-hairline overflow-hidden">
              {covered.map((c) => {
                const doneToday = isReviewedToday(c.entry, now)
                return (
                  <li key={c.topic.id} className="flex items-center gap-3 px-4 py-3">
                    <button onClick={() => onSelectTopic(c.topic.id)} className="group flex-1 min-w-0 text-left">
                      <span className="block text-[15px] text-ink truncate group-hover:text-primary transition-colors">
                        {c.topic.title}
                      </span>
                      <span className="block text-[12px] text-ink-faint truncate">
                        {c.phase} · {describeActivity(c.entry, now)}
                      </span>
                    </button>
                    <button
                      onClick={() => handleReread(c.topic.id)}
                      disabled={doneToday}
                      title={doneToday ? 'Re-read today' : 'Mark as re-read today'}
                      className={`shrink-0 flex items-center gap-1 py-1 px-2.5 text-[12px] font-medium rounded-full border transition-colors ${
                        doneToday
                          ? 'text-accent-green bg-accent-green/10 border-accent-green/20 cursor-default'
                          : 'text-ink-muted bg-surface border-hairline hover:text-primary hover:border-primary/30'
                      }`}
                    >
                      {doneToday ? <Check className="w-3.5 h-3.5" /> : <RotateCcw className="w-3.5 h-3.5" />}
                      Re-read
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}
