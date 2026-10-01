import { useState } from 'react'
import { ArrowLeft, Library } from 'lucide-react'
import { allTopics } from '../data/roadmap'
import { complementaryTopics } from '../data/complementary'
import { useProgress } from '../hooks/useProgress'
import { ComplementaryTopicCard } from './ComplementaryTopicCard'
import { MarkdownInline } from './MarkdownText'
import { RereadSection } from './RereadSection'

const tips = [
  '**Pick one item, not one topic.** Each topic has a short "Start here" set in pieces of 5–20 minutes, then optional extras. One piece is a perfectly good day.',
  '**Watching and listening count.** Every topic includes a video or audio item for days when reading is tiring.',
  '**The order is a suggestion.** Topics 1–5 need only what you already know from Phase 0 and SQL. Topics 6 and 7 go more smoothly after topic 2, or after Statistics Foundations.',
  '**Everything is free.** If a BBC page will not play in New Zealand, search for the episode title in any podcast app: More or Less is a free podcast.',
]

const readKey = (id: string) => `complementary:${id}`
const cardDomId = (id: string) => `complementary-${id}`

function refTitle(id: string): string | null {
  return allTopics.find((t) => t.id === id)?.title ?? complementaryTopics.find((t) => t.id === id)?.title ?? null
}

function toRefs(ids: string[]) {
  return ids.flatMap((id) => {
    const title = refTitle(id)
    return title ? [{ id, title }] : []
  })
}

interface ComplementaryPageProps {
  onSelectTopic: (topicId: string) => void
  onBack?: () => void
}

export function ComplementaryPage({ onSelectTopic, onBack }: ComplementaryPageProps) {
  const { getStatus, setStatus } = useProgress()
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set())

  const toggleOpen = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const openRef = (id: string) => {
    if (allTopics.some((t) => t.id === id)) {
      onSelectTopic(id)
      return
    }
    setOpenIds((prev) => new Set(prev).add(id))
    requestAnimationFrame(() => {
      document.getElementById(cardDomId(id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const toggleRead = (id: string) => {
    setStatus(readKey(id), getStatus(readKey(id)) === 'done' ? 'not-started' : 'done')
  }

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

        <h1 className="text-[26px] font-bold text-ink tracking-[-0.625px] leading-tight mb-2">
          Complementary reading
        </h1>
        <p className="text-[15px] text-ink-muted leading-relaxed mb-8">
          For the days when practising feels like too much. Everything here is reading, watching, or listening, and none of it needs a computer open beside you. Nothing on this page counts towards your roadmap progress, so there is no way to fall behind on it.
        </p>

        <div className="space-y-10">
          <RereadSection onSelectTopic={onSelectTopic} />

          <section>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-[5px] bg-accent-sky/10 flex items-center justify-center">
                <Library className="w-3.5 h-3.5 text-accent-sky" />
              </div>
              <h2 className="text-[13px] font-semibold text-ink-secondary uppercase tracking-[0.05em]">New reading</h2>
            </div>
            <ul className="space-y-2 mb-5">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[14px] text-ink-muted leading-relaxed">
                  <span className="w-[5px] h-[5px] rounded-full bg-ink-faint mt-[9px] shrink-0" />
                  <span className="min-w-0">
                    <MarkdownInline text={tip} />
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              {complementaryTopics.map((topic, i) => (
                <ComplementaryTopicCard
                  key={topic.id}
                  topic={topic}
                  number={i + 1}
                  domId={cardDomId(topic.id)}
                  isOpen={openIds.has(topic.id)}
                  isRead={getStatus(readKey(topic.id)) === 'done'}
                  buildsOn={toRefs(topic.buildsOn)}
                  helpsWith={toRefs(topic.helpsWith)}
                  onToggleOpen={() => toggleOpen(topic.id)}
                  onToggleRead={() => toggleRead(topic.id)}
                  onOpenRef={openRef}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
