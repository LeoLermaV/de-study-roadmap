import { ArrowLeft, Clock, BookOpen, Lightbulb, MapPin, Wrench, FlaskConical } from 'lucide-react'
import type { Topic, TopicStatus } from '../types'
import { useProgress } from '../hooks/useProgress'
import { ResourceCard } from './ResourceCard'
import { MarkdownText, MarkdownInline } from './MarkdownText'

interface TopicDetailProps {
  topic: Topic | null
  onBack?: () => void
}

const statusOptions: { value: TopicStatus; label: string }[] = [
  { value: 'not-started', label: 'Not Started' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
]

const sectionLabels: Record<Topic['type'], { why: string; what: string; where: string }> = {
  theory: { why: 'Why learn this', what: 'What it covers', where: 'Where it fits' },
  project: { why: 'Project Brief', what: 'Deliverables', where: 'Why this matters' },
  setup: { why: 'Setup Guide', what: 'What you need', where: 'Why this matters' },
}

const typeBadge = {
  theory: null,
  project: { label: 'Project', icon: FlaskConical, color: 'text-accent-teal bg-accent-teal/10 border-accent-teal/20' },
  setup: { label: 'Setup', icon: Wrench, color: 'text-accent-orange bg-accent-orange/10 border-accent-orange/20' },
}

export function TopicDetail({ topic, onBack }: TopicDetailProps) {
  const { getStatus, setStatus, getNotes, setNotes } = useProgress()

  if (!topic) {
    return (
      <div className="flex-1 flex items-center justify-center bg-canvas-soft p-8">
        <div className="text-center max-w-xs">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-canvas-soft border border-hairline flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-ink-faint" />
          </div>
          <p className="text-[15px] text-ink-muted font-medium">Select a topic to start learning</p>
          <p className="text-[14px] text-ink-faint mt-1">Pick any topic from the roadmap sidebar</p>
        </div>
      </div>
    )
  }

  const status = getStatus(topic.id)
  const labels = sectionLabels[topic.type]
  const badge = typeBadge[topic.type]

  return (
    <div className="flex-1 overflow-y-auto bg-canvas-soft">
      <div className="max-w-2xl mx-auto p-6 md:p-8 lg:p-10">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-[14px] text-ink-muted hover:text-ink-secondary mb-4 transition-colors md:hidden"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}

        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="text-[26px] font-bold text-ink tracking-[-0.625px] leading-tight">
            {topic.title}
          </h1>
        </div>

        <div className="flex items-center gap-3 mb-7">
          <span className="flex items-center gap-1 text-[14px] text-ink-faint">
            <Clock className="w-3.5 h-3.5" />
            ~{topic.estimatedHours} hours
          </span>
          {badge && (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[12px] font-semibold border ${badge.color}`}>
              <badge.icon className="w-3.5 h-3.5" />
              {badge.label}
            </span>
          )}
        </div>

        {/* Status toggle */}
        <div className="inline-flex p-[3px] bg-canvas border border-hairline rounded-lg mb-8 shadow-sm">
          {statusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setStatus(topic.id, opt.value)}
              className={`px-4 py-1.5 text-[14px] font-medium rounded-md transition-all ${
                status === opt.value
                  ? 'bg-surface text-ink shadow-sm border border-hairline'
                  : 'text-ink-faint hover:text-ink-secondary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {/* Why */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-[5px] bg-accent-orange/10 flex items-center justify-center">
                <Lightbulb className="w-3.5 h-3.5 text-accent-orange" />
              </div>
              <h2 className="text-[13px] font-semibold text-ink-secondary uppercase tracking-[0.05em]">
                {labels.why}
              </h2>
            </div>
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion text-[15px] text-ink-secondary">
              <MarkdownText text={topic.why} />
            </div>
          </section>

          {/* What */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-[5px] bg-accent-sky/10 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-accent-sky" />
              </div>
              <h2 className="text-[13px] font-semibold text-ink-secondary uppercase tracking-[0.05em]">
                {labels.what}
              </h2>
            </div>
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion">
              <ul className="space-y-2.5">
                {topic.what.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink-secondary leading-relaxed">
                    <span className="w-[5px] h-[5px] rounded-full bg-primary/40 mt-[9px] shrink-0" />
                    <MarkdownInline text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Where */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-[5px] bg-accent-teal/10 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-accent-teal" />
              </div>
              <h2 className="text-[13px] font-semibold text-ink-secondary uppercase tracking-[0.05em]">
                {labels.where}
              </h2>
            </div>
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion text-[15px] text-ink-secondary">
              <MarkdownText text={topic.where} />
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-[13px] font-semibold text-ink-secondary uppercase tracking-[0.05em] mb-3">
              Resources <span className="text-ink-faint font-normal normal-case">({topic.resources.length})</span>
            </h2>
            <div className="space-y-2">
              {topic.resources.map((r) => (
                <ResourceCard key={r.url} resource={r} />
              ))}
            </div>
          </section>

          {/* Notes */}
          <section>
            <h2 className="text-[13px] font-semibold text-ink-secondary uppercase tracking-[0.05em] mb-3">
              Quick Notes
            </h2>
            <textarea
              value={getNotes(topic.id)}
              onChange={(e) => setNotes(topic.id, e.target.value)}
              placeholder="Jot down thoughts, questions, or what to revisit..."
              rows={4}
              className="w-full px-3 py-2.5 text-[15px] bg-surface border border-hairline rounded-xs text-ink placeholder:text-ink-faint outline-none focus:border-primary/50 focus:shadow-notion transition-all resize-none leading-relaxed"
            />
          </section>
        </div>
      </div>
    </div>
  )
}
