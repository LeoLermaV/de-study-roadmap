import { useState, useRef, useCallback } from 'react'
import { X, Download, Upload, Check, AlertCircle, Cloud } from 'lucide-react'
import { useProgress } from '../hooks/useProgress'

export function SettingsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [importMessage, setImportMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [syncMessage, setSyncMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [syncing, setSyncing] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const { exportProgress, importProgress, gistToken, setGistToken, saveToGist, loadFromGist } = useProgress()

  if (!open) return null

  const handleExport = () => {
    const json = exportProgress()
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    const date = new Date().toISOString().split('T')[0]
    a.href = url
    a.download = `de-roadmap-progress-${date}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => fileRef.current?.click()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const success = importProgress(reader.result as string)
      setImportMessage(success
        ? { type: 'success', text: 'Progress restored!' }
        : { type: 'error', text: 'Invalid file format.' })
      setTimeout(() => setImportMessage(null), 3000)
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const handleSave = useCallback(async () => {
    setSyncing(true)
    setSyncMessage(null)
    try {
      const result = await saveToGist()
      setSyncMessage({ type: 'success', text: result === 'created' ? 'New Gist created!' : 'Gist updated!' })
    } catch (err) {
      setSyncMessage({ type: 'error', text: err instanceof Error ? err.message : 'Save failed' })
    } finally {
      setSyncing(false)
      setTimeout(() => setSyncMessage(null), 4000)
    }
  }, [saveToGist])

  const handleLoad = useCallback(async () => {
    setSyncing(true)
    setSyncMessage(null)
    try {
      await loadFromGist()
      setSyncMessage({ type: 'success', text: 'Progress loaded from Gist!' })
    } catch (err) {
      setSyncMessage({ type: 'error', text: err instanceof Error ? err.message : 'Load failed' })
    } finally {
      setSyncing(false)
      setTimeout(() => setSyncMessage(null), 4000)
    }
  }, [loadFromGist])

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
          {/* Sync */}
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Cloud className="w-4 h-4 text-primary" />
              <p className="text-[15px] font-semibold text-ink">Cloud Sync</p>
            </div>
            <p className="text-[14px] text-ink-muted leading-relaxed mb-3">
              Sync progress across devices via GitHub Gist. Needs a token with <code className="text-primary text-[13px]">gist</code> scope.
            </p>

            <input
              type="password"
              value={gistToken}
              onChange={(e) => setGistToken(e.target.value)}
              placeholder="GitHub personal access token"
              className="w-full px-3 py-2 text-[14px] bg-canvas border border-hairline rounded-lg text-ink placeholder:text-ink-faint outline-none focus:border-primary/50 transition-all mb-2"
            />

            <div className="flex gap-2">
              <button
                onClick={handleSave}
                disabled={syncing || !gistToken}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[14px] font-medium text-white bg-primary rounded-full hover:bg-primary-active disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97] transition-all"
              >
                {syncing ? 'Saving...' : 'Save to Gist'}
              </button>
              <button
                onClick={handleLoad}
                disabled={syncing || !gistToken}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-[14px] font-medium text-ink bg-surface border border-hairline rounded-full hover:bg-canvas-soft disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97] transition-all"
              >
                Load from Gist
              </button>
            </div>

            {syncMessage && (
              <div className={`flex items-center gap-2 mt-2 p-2.5 rounded-lg text-[13px] ${
                syncMessage.type === 'success'
                  ? 'bg-accent-green/10 text-accent-green'
                  : 'bg-accent-orange/10 text-accent-orange'
              }`}>
                {syncMessage.type === 'success' ? <Check className="w-3.5 h-3.5 shrink-0" /> : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                {syncMessage.text}
              </div>
            )}
          </div>

          <div className="border-t border-hairline pt-5" />

          {/* Backup */}
          <div>
            <p className="text-[15px] font-semibold text-ink mb-1">Backup Progress</p>
            <p className="text-[14px] text-ink-muted leading-relaxed mb-3">
              Download a JSON file with all progress data.
            </p>
            <button
              onClick={handleExport}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-[15px] font-medium text-white bg-primary rounded-full hover:bg-primary-active active:scale-[0.97] transition-all"
            >
              <Download className="w-4 h-4" />
              Download Backup
            </button>
          </div>

          {/* Restore */}
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
            <div className={`flex items-center gap-2 p-3 rounded-lg text-[14px] ${
              importMessage.type === 'success'
                ? 'bg-accent-green/10 text-accent-green'
                : 'bg-accent-orange/10 text-accent-orange'
            }`}>
              {importMessage.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              {importMessage.text}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
