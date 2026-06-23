import { Fragment } from 'react'

/**
 * Renders inline markdown: **bold** only.
 * No other markdown syntax is supported by design.
 */
export function MarkdownInline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
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
