import { Check, ChevronDown, CircleCheck } from 'lucide-react'
import type { ComplementaryTopic } from '../types'
import { MarkdownInline, MarkdownText } from './MarkdownText'
import { ReadingItemRow } from './ReadingItemRow'

interface TopicRef {
  id: string
  title: string
}

interface ComplementaryTopicCardProps {
  topic: ComplementaryTopic
  number: number
  domId: string
  isOpen: boolean
  isRead: boolean
  buildsOn: TopicRef[]
  helpsWith: TopicRef[]
  onToggleOpen: () => void
  onToggleRead: () => void
  onOpenRef: (id: string) => void
}

function SubHeading({ children }: { children: string }) {
  return (
    <h4 className="text-[12px] font-semibold text-ink-muted uppercase tracking-[0.05em] mb-2">{children}</h4>
  )
}

function RefChips({ label, refs, onOpenRef }: { label: string; refs: TopicRef[]; onOpenRef: (id: string) => void }) {
  if (refs.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-[13px] text-ink-faint mr-0.5">{label}</span>
      {refs.map((ref) => (
        <button
          key={ref.id}
          onClick={() => onOpenRef(ref.id)}
          className="px-2.5 py-1 text-[13px] text-ink-secondary bg-canvas-soft border border-hairline rounded-full hover:border-primary/30 hover:text-primary transition-colors"
        >
          {ref.title}
        </button>
      ))}
    </div>
  )
}

export function ComplementaryTopicCard({
  topic,
  number,
  domId,
  isOpen,
  isRead,
  buildsOn,
  helpsWith,
  onToggleOpen,
  onToggleRead,
  onOpenRef,
}: ComplementaryTopicCardProps) {
  return (
    <article id={domId} className="bg-surface rounded-xl border border-hairline shadow-notion scroll-mt-4">
      <button
        onClick={onToggleOpen}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-3 p-4 md:p-5 text-left"
      >
        <span className="w-7 h-7 shrink-0 rounded-md bg-canvas-soft border border-hairline flex items-center justify-center text-[13px] font-semibold text-ink-muted">
          {number}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-[16px] font-semibold text-ink leading-snug">{topic.title}</span>
          <span className="block text-[13px] text-ink-faint mt-0.5">
            Start here ~{topic.startMinutes} min · Easiest way in: {topic.easiestWayIn}
          </span>
        </span>
        {isRead && <CircleCheck className="w-4 h-4 mt-1 shrink-0 text-accent-green" aria-label="Read" />}
        <ChevronDown
          className={`w-4 h-4 mt-1 shrink-0 text-ink-faint transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`}
        />
      </button>

      {isOpen && (
        <div className="px-4 pb-5 md:px-5 pt-5 border-t border-hairline space-y-6">
          <div className="text-[15px] text-ink-secondary">
            <MarkdownText text={topic.why} />
          </div>

          <section>
            <SubHeading>Key ideas</SubHeading>
            <ul className="space-y-2.5">
              {topic.keyIdeas.map((idea) => (
                <li key={idea} className="flex items-start gap-3 text-[15px] text-ink-secondary leading-relaxed">
                  <span className="w-[5px] h-[5px] rounded-full bg-primary/40 mt-[9px] shrink-0" />
                  <span className="min-w-0">
                    <MarkdownInline text={idea} />
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SubHeading>How it connects</SubHeading>
            <div className="text-[15px] text-ink-secondary">
              <MarkdownText text={topic.connects} />
            </div>
            <div className="mt-3 space-y-2">
              <RefChips label="Builds on" refs={buildsOn} onOpenRef={onOpenRef} />
              <RefChips label="Helps with" refs={helpsWith} onOpenRef={onOpenRef} />
            </div>
          </section>

          <section className="p-4 rounded-lg bg-canvas-soft border border-hairline">
            <SubHeading>Notice it in the wild</SubHeading>
            <p className="text-[15px] text-ink-secondary leading-relaxed">
              <MarkdownInline text={topic.notice} />
            </p>
          </section>

          <section>
            <SubHeading>{`Start here · about ${topic.startMinutes} minutes`}</SubHeading>
            <ul className="space-y-4">
              {topic.startHere.map((item) => (
                <ReadingItemRow key={item.text} item={item} />
              ))}
            </ul>
          </section>

          {topic.more.length > 0 && (
            <section>
              <SubHeading>If you want more</SubHeading>
              <ul className="space-y-4">
                {topic.more.map((item) => (
                  <ReadingItemRow key={item.text} item={item} />
                ))}
              </ul>
            </section>
          )}

          <button
            onClick={onToggleRead}
            aria-pressed={isRead}
            className={`flex items-center gap-1.5 py-2 px-4 text-[14px] font-medium rounded-full border active:scale-[0.97] transition-all ${
              isRead
                ? 'text-accent-green bg-accent-green/10 border-accent-green/20'
                : 'text-ink bg-surface border-hairline hover:bg-canvas-soft'
            }`}
          >
            <Check className="w-4 h-4" />
            {isRead ? 'Read' : 'Mark as read'}
          </button>
        </div>
      )}
    </article>
  )
}
