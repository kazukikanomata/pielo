import { useEffect, useMemo, useState } from 'react'
import Ambient from './components/Ambient.jsx'
import Entrance from './components/Entrance.jsx'
import Gallery from './components/Gallery.jsx'
import Causation from './components/Causation.jsx'
import Quiz from './components/Quiz.jsx'
import { movements, movementById } from './data/movements.jsx'

const NEUTRAL_BLOBS = ['#D8D3C9', '#C9CDD4', '#E7E1D4', '#CFC8BC']

function Logo({ noseColor, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer text-[19px] font-medium tracking-[0.08em] text-[var(--ink)] sm:text-[22px]"
      style={{ fontFamily: 'var(--font-logo)' }}
      aria-label="pielo — トップへ戻る"
    >
      piel
      <span
        aria-hidden="true"
        className="mx-px inline-block h-[0.58em] w-[0.58em] rounded-full"
        style={{ backgroundColor: noseColor, transition: 'background-color 1.4s ease' }}
      />
      <span className="sr-only">o</span>
    </button>
  )
}

export default function App() {
  const [view, setView] = useState('entrance')
  const [movementId, setMovementId] = useState(movements[0].id)
  const [revealColors, setRevealColors] = useState(null) // クイズ/診断の正解時に背景を衣装替え
  const [cycleIdx, setCycleIdx] = useState(0)

  // 玄関では、背景が各世界観を順番に「試着」する
  useEffect(() => {
    if (view !== 'entrance') return
    const timer = setInterval(() => setCycleIdx((i) => (i + 1) % movements.length), 5000)
    return () => clearInterval(timer)
  }, [view])

  useEffect(() => {
    setRevealColors(null)
  }, [view])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [view, movementId])

  const movement = movementById[movementId]
  const ambientColors = useMemo(() => {
    if (view === 'gallery') return movement.blobs
    if (revealColors) return revealColors
    if (view === 'entrance') return movements[cycleIdx].blobs
    return NEUTRAL_BLOBS
  }, [view, movement, revealColors, cycleIdx])

  const noseColor =
    view === 'gallery' ? movement.accent : view === 'entrance' ? movements[cycleIdx].accent : '#B4AC9C'

  const openGallery = (id) => {
    if (id) setMovementId(id)
    setView('gallery')
  }

  const nav = [
    ['gallery', 'ギャラリー'],
    ['causation', '問いから'],
    ['quiz', 'クイズ'],
  ]

  return (
    <div className="grain relative min-h-svh">
      <Ambient colors={ambientColors} />

      <div className="relative" style={{ zIndex: 2 }}>
        {view !== 'entrance' && (
          <header className="fixed inset-x-0 top-0 z-20">
            <div className="glass-strong mx-auto mt-4 flex w-[min(94%,64rem)] items-center justify-between rounded-full py-2.5 pl-4 pr-2 sm:pl-6 sm:pr-3">
              <Logo noseColor={noseColor} onClick={() => setView('entrance')} />
              <nav className="flex items-center gap-1" aria-label="メイン">
                {nav.map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setView(key)}
                    aria-current={view === key ? 'page' : undefined}
                    className={`cursor-pointer rounded-full px-2.5 py-2 text-[11px] tracking-[0.02em] transition-colors sm:px-4 sm:text-[12px] sm:tracking-[0.14em] ${
                      view === key ? 'bg-[var(--ink)] font-bold text-[#F5F2EC]' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </div>
          </header>
        )}

        <main>
          {view === 'entrance' && (
            <Entrance
              noseColor={noseColor}
              onCausation={() => setView('causation')}
              onEffectuation={() => openGallery()}
              onQuiz={() => setView('quiz')}
            />
          )}
          {view === 'gallery' && <Gallery activeId={movementId} onSelectMovement={setMovementId} />}
          {view === 'causation' && <Causation onResult={openGallery} onGallery={() => openGallery()} onAmbient={setRevealColors} />}
          {view === 'quiz' && <Quiz onGallery={() => openGallery()} onAmbient={setRevealColors} />}
        </main>

        {view !== 'entrance' && (
          <footer className="pb-10 text-center text-[10px] tracking-[0.32em] text-[var(--ink-faint)]">
            pielo — デザイン史をUIで試着するギャラリー
          </footer>
        )}
      </div>
    </div>
  )
}
