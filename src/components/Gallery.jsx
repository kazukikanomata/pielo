import { useEffect, useState } from 'react'
import { categories, movements, movementById } from '../data/movements.jsx'
import MockScaler from './MockScaler.jsx'
import Timeline from './Timeline.jsx'

export default function Gallery({ activeId, onSelectMovement }) {
  const movement = movementById[activeId] ?? movements[0]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [activeId])

  const mock = movement.mocks[index]
  const prev = () => setIndex((i) => (i - 1 + movement.mocks.length) % movement.mocks.length)
  const next = () => setIndex((i) => (i + 1) % movement.mocks.length)

  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-28 sm:px-8">
      {/* 世界観タブ(カテゴリ別) */}
      <nav aria-label="世界観" className="space-y-3">
        {categories.map((cat) => {
          const items = movements.filter((m) => m.category === cat.id)
          if (items.length === 0) return null
          return (
            <div key={cat.id} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
              <p className="w-44 shrink-0 text-[9.5px] tracking-[0.28em] text-[var(--ink-faint)]">{cat.name}</p>
              <div className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
                {items.map((m) => {
                  const isActive = m.id === movement.id
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => onSelectMovement(m.id)}
                      aria-pressed={isActive}
                      className={`shrink-0 cursor-pointer rounded-full px-3.5 py-1.5 text-[11.5px] tracking-[0.06em] transition-all duration-300 ${
                        isActive ? 'glass-strong font-bold text-[var(--ink)]' : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                      }`}
                      style={isActive ? { boxShadow: `inset 0 -2px 0 ${m.accent}` } : undefined}
                    >
                      {m.name}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </nav>

      {/* 世界観の導入 */}
      <header className="mt-12" key={movement.id}>
        <div className="rise flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <h2 className="text-[clamp(30px,5vw,44px)] font-bold tracking-[0.04em]">{movement.name}</h2>
          <p className="text-[11px] tracking-[0.35em] text-[var(--ink-faint)]" style={{ fontFamily: 'var(--font-logo)' }}>
            {movement.latin} / {movement.era}
          </p>
        </div>
        <p className="rise rise-1 mt-5 text-[clamp(16px,2.6vw,21px)] tracking-[0.16em]" style={{ fontFamily: 'var(--font-question)', color: movement.accent }}>
          「{movement.thesis}」
        </p>
        <p className="rise rise-2 mt-4 max-w-[44em] text-[13px] leading-[2.1] text-[var(--ink-soft)]">{movement.intro}</p>
        <ul className="rise rise-2 mt-5 flex flex-wrap gap-2">
          {movement.keywords.map((kw) => (
            <li key={kw} className="glass rounded-full px-3.5 py-1 text-[11px] tracking-[0.14em] text-[var(--ink-soft)]">
              {kw}
            </li>
          ))}
        </ul>
      </header>

      {/* カルーセル */}
      <section aria-label="UI実例" className="mt-12">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <figure className="m-0">
            <div className="glass-strong overflow-hidden rounded-2xl p-2.5 shadow-[0_24px_60px_-24px_rgba(35,33,30,0.35)]">
              <div key={mock.id} className="rise overflow-hidden rounded-xl">
                <MockScaler Comp={mock.Comp} />
              </div>
            </div>

            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-[14px] font-bold tracking-[0.06em]">{mock.title}</p>
                <p className="mt-0.5 text-[11px] tracking-[0.2em] text-[var(--ink-faint)]">{mock.kind}</p>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={prev} aria-label="前の実例" className="glass h-10 w-10 cursor-pointer rounded-full text-[15px] leading-none transition-transform hover:-translate-x-0.5">
                  ←
                </button>
                <div className="flex gap-1.5 px-1" aria-hidden="true">
                  {movement.mocks.map((m, i) => (
                    <span
                      key={m.id}
                      className="h-1.5 rounded-full transition-all duration-300"
                      style={{ width: i === index ? 18 : 6, backgroundColor: i === index ? movement.accent : 'var(--ink-faint)' }}
                    />
                  ))}
                </div>
                <button type="button" onClick={next} aria-label="次の実例" className="glass h-10 w-10 cursor-pointer rounded-full text-[15px] leading-none transition-transform hover:translate-x-0.5">
                  →
                </button>
              </div>
            </figcaption>
          </figure>

          {/* なぜそう見えるのか */}
          <aside key={mock.id + '-why'} className="glass rise rounded-2xl p-6 sm:p-7">
            <p className="text-[10px] tracking-[0.4em] text-[var(--ink-faint)]">WHY IT LOOKS THIS WAY</p>
            <p className="mt-3 text-[16px] tracking-[0.1em]" style={{ fontFamily: 'var(--font-question)' }}>
              なぜ、こう見えるのか。
            </p>
            <dl className="mt-6 space-y-6">
              {mock.why.map((w) => (
                <div key={w.label + w.text}>
                  <dt className="flex items-center gap-2.5 text-[12px] font-bold tracking-[0.24em]">
                    <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: movement.accent }} />
                    {w.label}
                  </dt>
                  <dd className="mt-2 ml-[18px] text-[12.5px] leading-[2] text-[var(--ink-soft)]">{w.text}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <Timeline active={movement} onSelect={onSelectMovement} />
    </div>
  )
}
