import { useMemo, useState } from 'react'
import { movements, movementById } from '../data/movements.jsx'
import MockScaler from './MockScaler.jsx'

const ROUNDS = 5

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildRounds() {
  // なるべく別の世界観から出題する
  const byMovement = shuffle(movements).map((m) => shuffle(m.mocks.map((mock) => ({ ...mock, movementId: m.id })))[0])
  const picked = shuffle(byMovement).slice(0, ROUNDS)
  return picked.map((mock) => {
    const others = shuffle(movements.filter((m) => m.id !== mock.movementId)).slice(0, 3)
    return {
      mock,
      choices: shuffle([movementById[mock.movementId], ...others]),
    }
  })
}

const CLOSING = [
  { min: 5, text: 'お見事。もう「なぜそう見えるか」を語れる目です。' },
  { min: 4, text: 'かなりの審美眼。迷った1問が伸びしろです。' },
  { min: 2, text: '見る目が育ちはじめています。ギャラリーで答え合わせを。' },
  { min: 0, text: 'ここからが楽しいところ。ギャラリーを眺めてもう一周。' },
]

export default function Quiz({ onGallery, onAmbient }) {
  const [rounds, setRounds] = useState(buildRounds)
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const round = rounds[step]
  const correctId = round?.mock.movementId
  const isCorrect = picked === correctId
  const correct = correctId ? movementById[correctId] : null

  const tells = useMemo(() => (correct ? correct.tells.slice(0, 2) : []), [correct])

  const choose = (id) => {
    if (picked) return
    setPicked(id)
    if (id === correctId) setScore((s) => s + 1)
    onAmbient?.(correct.blobs) // 正解の世界観へ、背景が衣装替えする
  }

  const nextRound = () => {
    onAmbient?.(null)
    if (step + 1 < rounds.length) {
      setStep(step + 1)
      setPicked(null)
    } else {
      setFinished(true)
    }
  }

  const restart = () => {
    onAmbient?.(null)
    setRounds(buildRounds())
    setStep(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const closing = CLOSING.find((c) => score >= c.min)
    return (
      <div className="mx-auto flex min-h-svh w-full max-w-xl flex-col items-center justify-center px-6 py-28 text-center">
        <p className="rise text-[10px] tracking-[0.5em] text-[var(--ink-faint)]">RESULT</p>
        <p className="rise rise-1 mt-8 text-[70px] font-medium leading-none" style={{ fontFamily: 'var(--font-logo)' }}>
          {score}
          <span className="text-[24px] text-[var(--ink-faint)]"> / {rounds.length}</span>
        </p>
        <p className="rise rise-2 mt-8 text-[15px] leading-[2] tracking-[0.1em]" style={{ fontFamily: 'var(--font-question)' }}>
          {closing.text}
        </p>
        <div className="rise rise-3 mt-10 flex flex-wrap items-center justify-center gap-4">
          <button type="button" onClick={restart} className="glass-strong cursor-pointer rounded-full px-8 py-3.5 text-[13px] font-bold tracking-[0.16em] transition-transform hover:-translate-y-0.5">
            もう一度あそぶ
          </button>
          <button type="button" onClick={onGallery} className="cursor-pointer border-b border-[var(--ink-faint)] pb-0.5 text-[12px] tracking-[0.16em] text-[var(--ink-soft)] hover:text-[var(--ink)]">
            ギャラリーで復習する
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-28 sm:px-8">
      <div className="flex items-baseline justify-between">
        <p className="text-[10px] tracking-[0.5em] text-[var(--ink-faint)]">
          QUIZ {step + 1} / {rounds.length}
        </p>
        <p className="text-[12px] tracking-[0.14em] text-[var(--ink-soft)]" style={{ fontFamily: 'var(--font-logo)' }}>
          score {score}
        </p>
      </div>
      <h2 className="mt-6 text-[clamp(19px,3.4vw,25px)] tracking-[0.1em]" style={{ fontFamily: 'var(--font-question)' }}>
        このデザイン、どの世界観?
      </h2>

      <div key={round.mock.id} className="rise glass-strong mt-8 overflow-hidden rounded-2xl p-2.5">
        <div className="overflow-hidden rounded-xl">
          <MockScaler Comp={round.mock.Comp} />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {round.choices.map((m) => {
          const chosen = picked === m.id
          const revealCorrect = picked && m.id === correctId
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => choose(m.id)}
              disabled={!!picked}
              className={`glass rounded-xl px-5 py-4 text-left text-[13.5px] tracking-[0.06em] transition-all duration-200 ${
                picked ? '' : 'cursor-pointer hover:-translate-y-0.5 hover:bg-[var(--glass-strong)]'
              } ${revealCorrect ? 'font-bold' : ''} ${picked && !revealCorrect && chosen ? 'opacity-70' : ''} ${picked && !revealCorrect && !chosen ? 'opacity-40' : ''}`}
              style={revealCorrect ? { boxShadow: `inset 0 0 0 2px ${m.accent}` } : undefined}
            >
              {m.name}
              <span className="ml-2 text-[10px] tracking-[0.2em] text-[var(--ink-faint)]">{m.era}</span>
              {revealCorrect && <span className="float-right" style={{ color: m.accent }}>◯</span>}
              {picked && chosen && !revealCorrect && <span className="float-right text-[var(--ink-faint)]">✕</span>}
            </button>
          )
        })}
      </div>

      {picked && (
        <div className="rise glass mt-6 rounded-2xl p-6 sm:p-7">
          <p className="text-[13px] font-bold tracking-[0.14em]">
            {isCorrect ? '正解。' : `正解は「${correct.name}」。`}
            <span className="ml-2 font-normal text-[var(--ink-faint)]" style={{ fontFamily: 'var(--font-logo)' }}>
              {correct.latin} / {correct.era}
            </span>
          </p>
          <p className="mt-4 text-[12px] font-bold tracking-[0.24em] text-[var(--ink-soft)]">見分けるポイント</p>
          <ul className="mt-2 space-y-1.5">
            {tells.map((t) => (
              <li key={t} className="flex gap-2.5 text-[12.5px] leading-[1.9] text-[var(--ink-soft)]">
                <span aria-hidden="true" className="mt-[11px] h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: correct.accent }} />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12.5px] leading-[2] text-[var(--ink-soft)]">
            <span className="font-bold">{round.mock.why[0].label} — </span>
            {round.mock.why[0].text}
          </p>
          <button type="button" onClick={nextRound} className="glass-strong mt-6 cursor-pointer rounded-full px-7 py-3 text-[12.5px] font-bold tracking-[0.16em] transition-transform hover:-translate-y-0.5">
            {step + 1 < rounds.length ? '次の問題へ —' : '結果をみる —'}
          </button>
        </div>
      )}
    </div>
  )
}
