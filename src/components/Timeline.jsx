import { categories, movements } from '../data/movements.jsx'

// タブの階層に置く年表: 上段は同じカテゴリの世界観の位置、下段はアクティブな世界観の歩み
export default function Timeline({ active, onSelect }) {
  // 同じカテゴリの世界観だけを並べ、その年代幅に合わせて目盛りを伸縮する
  const siblings = movements.filter((m) => m.category === active.category)
  const years = siblings.map((m) => m.year)
  const pad = Math.max(8, Math.round((Math.max(...years) - Math.min(...years)) * 0.08))
  const spanStart = Math.min(...years) - pad
  const spanEnd = Math.max(...years) + pad
  const categoryName = categories.find((c) => c.id === active.category)?.name

  return (
    <section aria-label="デザイン史の年表" className="mt-14">
      <p className="mb-6 text-[10px] tracking-[0.4em] text-[var(--ink-faint)]">
        TIMELINE — {categoryName}の世界観は、歴史のどこにいるか
      </p>

      <div className="relative mx-2 h-24">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--line)]" />
        {siblings.map((m, idx) => {
          const left = ((m.year - spanStart) / (spanEnd - spanStart)) * 100
          const isActive = m.id === active.id
          const above = idx % 2 === 0 // ラベルは上下交互に置いて衝突を避ける
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onSelect(m.id)}
              aria-pressed={isActive}
              className="group absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border transition-all duration-300"
              style={{
                left: `${left}%`,
                width: isActive ? 18 : 10,
                height: isActive ? 18 : 10,
                backgroundColor: isActive ? m.accent : 'rgba(255,255,255,0.7)',
                borderColor: isActive ? m.accent : 'var(--ink-faint)',
              }}
            >
              <span
                className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.04em] transition-colors sm:text-[10px] sm:tracking-[0.1em] ${
                  above ? 'bottom-[calc(100%+8px)]' : 'top-[calc(100%+8px)]'
                } ${isActive ? 'font-bold text-[var(--ink)]' : 'text-[var(--ink-faint)] group-hover:text-[var(--ink-soft)]'}`}
              >
                {m.yearLabel ?? m.year} {m.name}
              </span>
            </button>
          )
        })}
      </div>

      <div className="glass mt-6 rounded-2xl p-6 sm:p-8">
        <p className="text-[13px] font-medium tracking-[0.14em]">
          {active.name}のあゆみ
          <span className="ml-3 text-[11px] font-normal text-[var(--ink-faint)]">{active.origin}</span>
        </p>
        <ol className="mt-5 space-y-4">
          {active.timeline.map((ev) => (
            <li key={ev.year + ev.text} className="flex gap-5 text-[12.5px] leading-[1.9]">
              <span
                className="w-12 shrink-0 pt-px text-right font-medium tracking-[0.06em]"
                style={{ color: active.accent, fontFamily: 'var(--font-logo)' }}
              >
                {ev.year}
              </span>
              <span className="text-[var(--ink-soft)]">{ev.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
