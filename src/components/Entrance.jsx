export default function Entrance({ onCausation, onEffectuation, onQuiz, noseColor }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center px-6 py-20">
      <p className="rise text-[11px] tracking-[0.5em] text-[var(--ink-faint)]">
        UI GALLERY OF DESIGN HISTORY
      </p>

      <h1
        className="rise rise-1 mt-6 select-none text-[clamp(64px,14vw,124px)] font-medium leading-none tracking-[0.06em] text-[var(--ink)]"
        style={{ fontFamily: 'var(--font-logo)' }}
      >
        piel
        <span
          aria-hidden="true"
          className="mx-[0.06em] inline-block h-[0.62em] w-[0.62em] rounded-full align-baseline"
          style={{ backgroundColor: noseColor, transition: 'background-color 1.4s ease' }}
        />
        <span className="sr-only">o</span>
      </h1>

      <p
        className="rise rise-2 mt-8 text-center text-[clamp(17px,2.4vw,22px)] tracking-[0.28em] text-[var(--ink)]"
        style={{ fontFamily: 'var(--font-question)' }}
      >
        どんな世界観にも、化けられる。
      </p>
      <p className="rise rise-2 mt-5 max-w-[38em] text-center text-[13px] leading-[2.1] tracking-[0.06em] text-[var(--ink-soft)]">
        「なぜこのデザインは、こう見えるのか」。
        <br className="hidden sm:block" />
        デザインの歴史から生まれた39の世界観を、UIで試着するギャラリー。
      </p>

      <div className="rise rise-3 mt-14 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
        <button
          type="button"
          onClick={onCausation}
          className="glass group cursor-pointer rounded-2xl p-8 text-left transition-transform duration-300 hover:-translate-y-1"
        >
          <p className="text-[10px] tracking-[0.4em] text-[var(--ink-faint)]">コーゼーション</p>
          <p className="mt-4 text-[21px] leading-snug" style={{ fontFamily: 'var(--font-question)' }}>
            問いから、入る。
          </p>
          <p className="mt-4 text-[12.5px] leading-[2] text-[var(--ink-soft)]">
            つくりたい世界観が、まだ言葉にならない人へ。3つの問いに答えると、あなたのブランドに近い世界観へ案内します。
          </p>
          <p className="mt-6 text-[12px] tracking-[0.2em] text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1">
            問いに答える —
          </p>
        </button>

        <button
          type="button"
          onClick={onEffectuation}
          className="glass group cursor-pointer rounded-2xl p-8 text-left transition-transform duration-300 hover:-translate-y-1"
        >
          <p className="text-[10px] tracking-[0.4em] text-[var(--ink-faint)]">エフェクチュエーション</p>
          <p className="mt-4 text-[21px] leading-snug" style={{ fontFamily: 'var(--font-question)' }}>
            眺めて、見つける。
          </p>
          <p className="mt-4 text-[12.5px] leading-[2] text-[var(--ink-soft)]">
            まず見てみたい人へ。バウハウスからヴェイパーウェーブまで、39の世界観のギャラリーを自由にめぐって、好きを拾い集める。
          </p>
          <p className="mt-6 text-[12px] tracking-[0.2em] text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1">
            ギャラリーへ —
          </p>
        </button>
      </div>

      <button
        type="button"
        onClick={onQuiz}
        className="rise rise-4 mt-10 cursor-pointer border-b border-[var(--ink-faint)] pb-1 text-[12px] tracking-[0.24em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
      >
        遊んで鍛える — 「このデザイン、何時代?」クイズ
      </button>
    </div>
  )
}
