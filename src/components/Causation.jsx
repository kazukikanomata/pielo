import { useState } from 'react'
import { movementById } from '../data/movements.jsx'

// 3つの問いに答えると、近い世界観へ案内する(コーゼーションの玄関)
const QUESTIONS = [
  {
    q: 'あなたのブランドが、いちばん伝えたい気配は?',
    options: [
      { label: '信頼できて、間違いがない', w: { swiss: 2, utilitarian: 2, bauhaus: 1, neoclassical: 1 } },
      { label: 'あたたかくて、落ち着く', w: { japandi: 2, farmhouse: 2, bohemian: 1, shabbychic: 1 } },
      { label: '楽しくて、元気が出る', w: { memphis: 2, popart: 2, kawaii: 1, kitsch: 1 } },
      { label: '特別で、上質', w: { luxurytype: 2, artdeco: 2, baroque: 1, filigree: 1 } },
      { label: '新しくて、未来的', w: { y2k: 2, cybercore: 2, aurora: 1, synthwave: 1 } },
      { label: '物語と空気感で、包みたい', w: { ethereal: 2, surrealism: 1, mysticwestern: 1, artnouveau: 1 } },
    ],
  },
  {
    q: '色は、どう使いたい?',
    options: [
      { label: 'ほぼ1色+白と黒で、きりっと', w: { swiss: 2, brutalism: 2, utilitarian: 1, luxurytype: 1 } },
      { label: '彩度を抑えた2〜3色で、しっとり', w: { japandi: 2, ethereal: 1, shabbychic: 1, bohemian: 1 } },
      { label: '原色をきっぱり、少しだけ', w: { bauhaus: 2, popart: 1, pixelart: 1, midcentury: 1 } },
      { label: '金や深い色で、重厚に', w: { baroque: 2, artdeco: 2, tenebrism: 1, victorian: 1 } },
      { label: 'ネオンやメタリックで、光らせたい', w: { y2k: 2, synthwave: 2, vaporwave: 1, cybercore: 1 } },
      { label: 'たくさんの色で、にぎやかに', w: { memphis: 2, kitsch: 2, kawaii: 1, graffiti: 1 } },
    ],
  },
  {
    q: '余白のイメージに、近いのは?',
    options: [
      { label: '静けさが伝わるほど、広く', w: { japandi: 2, luxurytype: 2, ethereal: 1, swiss: 1 } },
      { label: 'グリッドで整然と、均等に', w: { swiss: 2, grid33: 2, bento: 2, bauhaus: 1 } },
      { label: '図形が呼吸できる程度に', w: { bauhaus: 2, midcentury: 1, anthropomorphic: 1, artnouveau: 1 } },
      { label: '密度と対称性で、格式を出す', w: { artdeco: 2, victorian: 2, neoclassical: 1, acanthus: 1, filigree: 1 } },
      { label: 'すき間は苦手。埋めて楽しく', w: { memphis: 2, scrapbook: 2, kitsch: 1, mixedmedia: 1, graffiti: 1 } },
      { label: '奥行きや光の演出で満たしたい', w: { y2k: 2, aurora: 2, tenebrism: 1, synthwave: 1, baroque: 1 } },
    ],
  },
]

export default function Causation({ onResult, onGallery, onAmbient }) {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState({})
  const [resultId, setResultId] = useState(null)

  const answer = (weights) => {
    const nextScores = { ...scores }
    for (const [id, w] of Object.entries(weights)) {
      nextScores[id] = (nextScores[id] ?? 0) + w
    }
    if (step + 1 < QUESTIONS.length) {
      setScores(nextScores)
      setStep(step + 1)
    } else {
      const winner = Object.entries(nextScores).sort((a, b) => b[1] - a[1])[0][0]
      setResultId(winner)
      onAmbient?.(movementById[winner].blobs) // 結果の世界観へ、背景が衣装替えする
    }
  }

  const restart = () => {
    onAmbient?.(null)
    setStep(0)
    setScores({})
    setResultId(null)
  }

  if (resultId) {
    const m = movementById[resultId]
    return (
      <div className="mx-auto flex min-h-svh w-full max-w-2xl flex-col items-center justify-center px-6 py-28 text-center">
        <p className="rise text-[10px] tracking-[0.5em] text-[var(--ink-faint)]">YOUR WORLDVIEW</p>
        <p className="rise rise-1 mt-8 text-[12px] tracking-[0.3em] text-[var(--ink-soft)]">あなたのブランドに近いのは</p>
        <h2 className="rise rise-1 mt-4 text-[clamp(36px,7vw,56px)] font-bold tracking-[0.06em]">{m.name}</h2>
        <p className="rise rise-2 mt-2 text-[11px] tracking-[0.35em] text-[var(--ink-faint)]" style={{ fontFamily: 'var(--font-logo)' }}>
          {m.latin} / {m.era}
        </p>
        <p className="rise rise-2 mt-7 text-[clamp(16px,2.6vw,20px)] tracking-[0.16em]" style={{ fontFamily: 'var(--font-question)', color: m.accent }}>
          「{m.thesis}」
        </p>
        <p className="rise rise-3 mt-5 max-w-[36em] text-[13px] leading-[2.1] text-[var(--ink-soft)]">{m.intro}</p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onResult(m.id)}
            className="glass-strong cursor-pointer rounded-full px-8 py-3.5 text-[13px] font-bold tracking-[0.16em] transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: `inset 0 -2px 0 ${m.accent}` }}
          >
            {m.name}のギャラリーへ —
          </button>
          <button type="button" onClick={restart} className="cursor-pointer border-b border-[var(--ink-faint)] pb-0.5 text-[12px] tracking-[0.16em] text-[var(--ink-soft)] hover:text-[var(--ink)]">
            もう一度答える
          </button>
        </div>
        <button type="button" onClick={onGallery} className="rise rise-4 mt-6 cursor-pointer text-[11px] tracking-[0.2em] text-[var(--ink-faint)] hover:text-[var(--ink-soft)]">
          ほかの世界観も眺めてみる
        </button>
      </div>
    )
  }

  const question = QUESTIONS[step]
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-center px-6 py-28">
      <p className="text-[10px] tracking-[0.5em] text-[var(--ink-faint)]">
        QUESTION {step + 1} / {QUESTIONS.length}
      </p>
      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {QUESTIONS.map((_, i) => (
          <span key={i} className={`h-0.5 flex-1 rounded-full ${i <= step ? 'bg-[var(--ink)]' : 'bg-[var(--line)]'}`} />
        ))}
      </div>
      <h2 key={step} className="rise mt-10 text-[clamp(22px,4vw,30px)] leading-[1.7] tracking-[0.08em]" style={{ fontFamily: 'var(--font-question)' }}>
        {question.q}
      </h2>
      <div key={step + '-opts'} className="rise rise-2 mt-9 grid gap-3 sm:grid-cols-2">
        {question.options.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => answer(opt.w)}
            className="glass cursor-pointer rounded-xl px-5 py-4 text-left text-[13.5px] leading-relaxed tracking-[0.04em] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--glass-strong)]"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
