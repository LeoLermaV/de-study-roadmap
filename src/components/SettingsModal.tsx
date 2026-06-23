import { useState, useRef } from 'react'
import { X, Download, Upload, Check, AlertCircle } from 'lucide-react'

interface SettingsModalProps {
  open: boolean
  onClose: () => void
  onExport: () => string
  onImport: (json: string) => boolean
}

export function SettingsModal({ open, onClose, onExport, onImport }: SettingsModalProps) {
  const [importMessage, setImportMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  if (!open) return null

  const handleExport = () => {
    const json = onExport()
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const date = new Date().toISOString().split('T')[0]
    a.href = url
    a.download = `de-roadmap-progress-${date}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    fileRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const json = reader.result as string
      const success = onImport(json)
      if (success) {
        setImportMessage({ type: 'success', text: 'Progress restored!' })
      } else {
        setImportMessage({ type: 'error', text: 'Invalid file format.' })
      }
      setTimeout(() => setImportMessage(null), 3000)
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/15 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-surface rounded-xl border border-hairline w-full max-w-sm mx-4 shadow-elevated overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
          <h2 className="text-[17px] font-bold text-ink tracking-tight">Settings</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-ink-faint hover:text-ink-secondary hover:bg-canvas-soft transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-5">
          <div>
            <p className="text-[15px] font-semibold text-ink mb-1">Backup Progress</p>
            <p className="text-[14px] text-ink-muted leading-relaxed mb-3">
              Download a JSON file with all progress data. Keep it somewhere safe.
            </p>
            <button
              onClick={handleExport}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-[15px] font-medium text-white bg-primary rounded-full hover:bg-primary-active active:scale-[0.97] transition-all"
            >
              <Download className="w-4 h-4" />
              Download Backup
            </button>
          </div>

          <div className="border-t border-hairline pt-5">
            <p className="text-[15px] font-semibold text-ink mb-1">Restore Progress</p>
            <p className="text-[14px] text-ink-muted leading-relaxed mb-3">
              Upload a previously exported backup file.
            </p>
            <button
              onClick={handleImport}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-[15px] font-medium text-ink bg-surface border border-hairline rounded-full hover:bg-canvas-soft active:scale-[0.97] transition-all"
            >
              <Upload className="w-4 h-4" />
              Restore from File
            </button>
            <input ref={fileRef} type="file" accept=".json" onChange={handleFileChange} className="hidden" />
          </div>

          {importMessage && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg text-[14px] ${
                importMessage.type === 'success'
                  ? 'bg-accent-green/10 text-accent-green'
                  : 'bg-accent-orange/10 text-accent-orange'
              }`}
            >
              {importMessage.type === 'success' ? (
                <Check className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              {importMessage.text}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
