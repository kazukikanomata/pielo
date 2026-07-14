import { useState } from 'react'
import { motions } from '../data/motions.js'
import MotionCanvas from './MotionCanvas.jsx'

export default function Motion() {
  const [selectedId, setSelectedId] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const selected = motions.find((m) => m.id === selectedId) ?? null

  if (selected) {
    return (
      <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-28 sm:px-8">
        <button
          type="button"
          onClick={() => setSelectedId(null)}
          className="cursor-pointer text-[11px] tracking-[0.2em] text-[var(--ink-faint)] transition-colors hover:text-[var(--ink)]"
        >
          ← 一覧へ
        </button>

        <header key={selected.id} className="rise mt-6">
          <p className="text-[10px] tracking-[0.4em] text-[var(--ink-faint)]">{selected.category}</p>
          <h2 className="mt-2 text-[clamp(28px,5vw,40px)] font-bold tracking-[0.04em]">{selected.name}</h2>
          <p className="mt-1 text-[12px] tracking-[0.2em] text-[var(--ink-soft)]">{selected.jp}</p>
        </header>

        <div className="rise rise-1 mt-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <p className="max-w-[38em] text-[13px] leading-[2.1] text-[var(--ink-soft)]">{selected.desc}</p>
          <div className="glass-strong mx-auto rounded-2xl p-4 shadow-[0_24px_60px_-24px_rgba(35,33,30,0.35)] sm:mx-0">
            <MotionCanvas key={selected.id} render={selected.render} size={220} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-28 sm:px-8">
      <header className="rise">
        <h2 className="text-[clamp(28px,5vw,40px)] font-bold tracking-[0.04em]">モーション周期表</h2>
        <p className="mt-3 max-w-[42em] text-[13px] leading-[2.1] text-[var(--ink-soft)]">
          カードにカーソルを合わせると動きがプレビューされます。クリックすると、特徴と実際の再現アニメーションを見られます。
        </p>
      </header>

      <div className="rise rise-1 mt-10 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
        {motions.map((m) => {
          const isHovered = hoveredId === m.id
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setSelectedId(m.id)}
              onMouseEnter={() => setHoveredId(m.id)}
              onMouseLeave={() => setHoveredId((h) => (h === m.id ? null : h))}
              onFocus={() => setHoveredId(m.id)}
              onBlur={() => setHoveredId((h) => (h === m.id ? null : h))}
              className="glass hover:glass-strong relative flex aspect-square cursor-pointer flex-col items-start justify-between overflow-hidden rounded-xl p-3 text-left transition-all duration-300"
            >
              {isHovered && (
                <div className="absolute inset-0 opacity-80">
                  <MotionCanvas render={m.render} size={140} fill />
                </div>
              )}
              <span className="relative z-10 text-[9px] tracking-[0.14em] text-[var(--ink-faint)]">{m.category}</span>
              <span className="relative z-10 text-[13px] font-bold tracking-[0.02em]">{m.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
