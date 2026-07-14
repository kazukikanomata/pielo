import { useEffect, useRef } from 'react'

export default function MotionCanvas({ render, size = 240, className = '', fill = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    let raf
    const start = performance.now()
    const loop = (now) => {
      const t = (now - start) / 1000
      ctx.clearRect(0, 0, size, size)
      render(ctx, t, size)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [render, size])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={fill ? { width: '100%', height: '100%', display: 'block' } : { width: size, height: size, display: 'block' }}
    />
  )
}
