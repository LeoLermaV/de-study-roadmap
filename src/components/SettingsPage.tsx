import { useState, useRef, useCallback } from 'react'
import { Download, Upload, Check, AlertCircle, Cloud } from 'lucide-react'
import { useProgress } from '../hooks/useProgress'

export function SettingsPage() {
  const [importMessage, setImportMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [syncMessage, setSyncMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [syncing, setSyncing] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const { exportProgress, importProgress, gistToken, setGistToken, saveToGist, loadFromGist } = useProgress()

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

  return (
    <div className="flex-1 overflow-y-auto bg-canvas-soft">
      <div className="max-w-2xl mx-auto p-6 md:p-8 lg:p-10">
        <h1 className="text-[26px] font-bold text-ink tracking-[-0.625px] leading-tight mb-8">
          Settings
        </h1>

        <div className="space-y-8">
          {/* Cloud Sync */}
          <section>
            <div className="flex items-center gap-1.5 mb-3">
              <Cloud className="w-5 h-5 text-primary" />
              <h2 className="text-[15px] font-semibold text-ink">Cloud Sync</h2>
            </div>
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion">
              <p className="text-[14px] text-ink-muted leading-relaxed mb-3">
                Sync progress across devices via GitHub Gist. Create a personal access token with <code className="text-primary text-[13px]">gist</code> scope at{' '}
                <a href="https://github.com/settings/tokens/new" target="_blank" rel="noopener noreferrer" className="text-primary underline">github.com/settings/tokens</a>.
              </p>

              <input
                type="password"
                value={gistToken}
                onChange={(e) => setGistToken(e.target.value)}
                placeholder="GitHub personal access token"
                className="w-full px-3 py-2 text-[14px] bg-canvas border border-hairline rounded-lg text-ink placeholder:text-ink-faint outline-none focus:border-primary/50 transition-all mb-3"
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
                <div className={`flex items-center gap-2 mt-3 p-2.5 rounded-lg text-[13px] ${
                  syncMessage.type === 'success'
                    ? 'bg-accent-green/10 text-accent-green'
                    : 'bg-accent-orange/10 text-accent-orange'
                }`}>
                  {syncMessage.type === 'success' ? <Check className="w-3.5 h-3.5 shrink-0" /> : <AlertCircle className="w-3.5 h-3.5 shrink-0" />}
                  {syncMessage.text}
                </div>
              )}
            </div>
          </section>

          {/* Backup */}
          <section>
            <h2 className="text-[15px] font-semibold text-ink mb-3">Backup Progress</h2>
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion">
              <p className="text-[14px] text-ink-muted leading-relaxed mb-3">
                Download a JSON file with all progress data.
              </p>
              <button
                onClick={handleExport}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-[15px] font-medium text-white bg-primary rounded-full hover:bg-primary-active active:scale-[0.97] transition-all"
              >
                <Download className="w-4 h-4" />
                Download Backup
              </button>
            </div>
          </section>

          {/* Restore */}
          <section>
            <h2 className="text-[15px] font-semibold text-ink mb-3">Restore Progress</h2>
            <div className="p-5 bg-surface rounded-xl border border-hairline shadow-notion">
              <p className="text-[14px] text-ink-muted leading-relaxed mb-3">
                Upload a previously exported backup file.
              </p>
              <button
                onClick={handleImport}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-[15px] font-medium text-ink bg-surface border border-hairline rounded-full hover:bg-canvas-soft active:scale-[0.97] transition-all"
              >
                <Upload className="w-4 h-4" />
                Restore from File
              </button>
              <input ref={fileRef} type="file" accept=".json" onChange={handleFileChange} className="hidden" />
            </div>
          </section>

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
