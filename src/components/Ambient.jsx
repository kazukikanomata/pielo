// 画面全体に敷く「1枚のぼかし写真」。世界観に合わせて色が衣装替えする
const POSITIONS = [
  { top: '-18%', left: '-12%', width: '58vmax', height: '58vmax', opacity: 0.55, cls: 'drift-a' },
  { top: '8%', right: '-16%', width: '52vmax', height: '52vmax', opacity: 0.45, cls: 'drift-b' },
  { bottom: '-22%', left: '12%', width: '60vmax', height: '60vmax', opacity: 0.4, cls: 'drift-c' },
  { bottom: '4%', right: '18%', width: '34vmax', height: '34vmax', opacity: 0.35, cls: 'drift-a' },
]

export default function Ambient({ colors }) {
  return (
    <div aria-hidden="true" className="fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {POSITIONS.map((pos, i) => {
        const { cls, opacity, ...place } = pos
        return (
          <div
            key={i}
            className={`ambient-blob ${cls}`}
            style={{ ...place, opacity, backgroundColor: colors[i % colors.length] }}
          />
        )
      })}
    </div>
  )
}
