import { useEffect, useRef, useState } from 'react'

const BASE_W = 560
const BASE_H = 420

// モックは560×420の固定キャンバスで設計し、コンテナ幅に合わせて等倍縮小する
export default function MockScaler({ Comp }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / BASE_W)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-full overflow-hidden" style={{ aspectRatio: `${BASE_W} / ${BASE_H}` }}>
      {/* 絶対配置でレイアウト幅に影響させない(min-contentの押し広げ防止) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: BASE_W, height: BASE_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <Comp />
      </div>
    </div>
  )
}
