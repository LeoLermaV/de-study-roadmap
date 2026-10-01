import { Fragment } from 'react'

const LINK = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/

/**
 * Renders inline markdown: **bold**, `code`, and [links](https://...).
 * No other markdown syntax is supported by design.
 */
export function MarkdownInline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
          return (
            <code key={i} className="px-1 py-px text-[0.9em] bg-canvas-soft border border-hairline rounded-xs break-words">
              {part.slice(1, -1)}
            </code>
          )
        }
        const link = LINK.exec(part)
        if (link) {
          return (
            <a
              key={i}
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary transition-colors"
            >
              {link[1]}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

/**
 * Renders block markdown: splits on \n\n into paragraphs,
 * then renders inline markdown inside each paragraph.
 */
export function MarkdownText({ text, className }: { text: string; className?: string }) {
  const paragraphs = text.split(/\n\n+/)
  return (
    <div className={className}>
      {paragraphs.map((para, i) => (
        <p key={i} className="mb-3 last:mb-0 leading-relaxed">
          <MarkdownInline text={para} />
        </p>
      ))}
    </div>
  )
}
