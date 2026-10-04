import { useMemo, useState } from 'react'

// アクセントカラー1色から、塗り・淡色・くすみ文字色・最適な文字色を導出する
const DEFAULT_HEX = '#B15A34'
const SWATCHES = ['#B15A34', '#3E6259', '#2A4B7C', '#8A3B5B', '#C08A2E']

function isValidHex(hex) {
  return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)
}

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const num = parseInt(full, 16)
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}

function rgbToHex(r, g, b) {
  const to2 = (n) => Math.round(Math.min(255, Math.max(0, n))).toString(16).padStart(2, '0')
  return `#${to2(r)}${to2(g)}${to2(b)}`
}

function mix(hex, target, amount) {
  const a = hexToRgb(hex)
  const b = hexToRgb(target)
  return rgbToHex(a.r + (b.r - a.r) * amount, a.g + (b.g - a.g) * amount, a.b + (b.b - a.b) * amount)
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

function buildPalette(hex) {
  const base = isValidHex(hex) ? hex : DEFAULT_HEX
  return {
    base,
    strong: mix(base, '#000000', 0.22),
    soft: mix(base, '#ffffff', 0.87),
    softText: mix(base, '#000000', 0.45),
    text: luminance(base) > 0.58 ? '#23211E' : '#FBF8F2',
  }
}

const FONT = `"Zen Kaku Gothic New", "Hiragino Kaku Gothic ProN", sans-serif`

function buttonsSnippet(p) {
  return `<style>
.btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px; border-radius: 999px; border: none; font: 700 14px/1 ${FONT}; letter-spacing: .02em; cursor: pointer; transition: background .2s ease; }
.btn-primary { background: ${p.base}; color: ${p.text}; }
.btn-primary:hover { background: ${p.strong}; }
.btn-outline { background: transparent; color: ${p.base}; box-shadow: inset 0 0 0 1.5px ${p.base}; }
.btn-outline:hover { background: ${p.soft}; }
.btn-ghost { background: transparent; color: ${p.base}; }
.btn-ghost:hover { background: ${p.soft}; }
</style>
<button class="btn btn-primary" type="button">保存する</button>
<button class="btn btn-outline" type="button">詳細を見る</button>
<button class="btn btn-ghost" type="button">キャンセル</button>`
}

function badgesSnippet(p) {
  return `<style>
.badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 13px; border-radius: 999px; font: 700 12px/1 ${FONT}; letter-spacing: .02em; }
.badge-solid { background: ${p.base}; color: ${p.text}; }
.badge-soft { background: ${p.soft}; color: ${p.softText}; }
.badge-outline { background: transparent; color: ${p.softText}; box-shadow: inset 0 0 0 1px ${p.base}; }
</style>
<span class="badge badge-solid">公開中</span>
<span class="badge badge-soft">下書き</span>
<span class="badge badge-outline">審査待ち</span>`
}

function alertSnippet(p) {
  return `<style>
.alert { display: flex; gap: 10px; align-items: flex-start; padding: 14px 16px; border-radius: 14px; background: ${p.soft}; font: 400 13px/1.75 ${FONT}; color: ${p.softText}; }
.alert b { font-weight: 700; }
</style>
<div class="alert">
  <span>●</span>
  <p><b>お知らせ：</b>次回メンテナンスは9/28 2:00〜3:00です。</p>
</div>`
}

function cardSnippet(p) {
  return `<style>
.card { border-radius: 18px; padding: 22px 24px; background: #FFFDFA; box-shadow: 0 20px 40px -28px rgba(35,33,30,.4); }
.card-eyebrow { font: 700 11px/1 ${FONT}; letter-spacing: .24em; color: ${p.softText}; }
.card-value { margin-top: 10px; font: 800 30px/1 ${FONT}; color: #23211E; }
.card-delta { margin-top: 6px; font: 700 13px/1 ${FONT}; color: ${p.base}; }
</style>
<div class="card">
  <p class="card-eyebrow">今月の販売数</p>
  <p class="card-value">128件</p>
  <p class="card-delta">+12.4% 先月比</p>
</div>`
}

function formSnippet(p) {
  return `<style>
.field { display: flex; flex-direction: column; gap: 6px; font: 14px/1.4 ${FONT}; }
.field label { font-weight: 700; font-size: 13px; }
.field input[type=text] { border-radius: 12px; border: 1.5px solid rgba(35,33,30,.15); padding: 10px 14px; font: inherit; outline: none; transition: border-color .2s, box-shadow .2s; }
.field input[type=text]:focus { border-color: ${p.base}; box-shadow: 0 0 0 4px ${p.soft}; }
.switch-row { display: flex; align-items: center; gap: 10px; margin-top: 4px; }
.switch { width: 42px; height: 24px; border-radius: 999px; background: ${p.base}; position: relative; }
.switch::after { content: ''; position: absolute; top: 3px; right: 3px; width: 18px; height: 18px; border-radius: 999px; background: #fff; }
</style>
<div class="field">
  <label for="ui-name">表示名</label>
  <input id="ui-name" type="text" placeholder="例：かのま">
</div>
<div class="switch-row">
  <span class="switch"></span>
  <span>メールで通知する</span>
</div>`
}

function navSnippet(p) {
  return `<style>
.tabs { display: inline-flex; gap: 4px; padding: 4px; border-radius: 999px; background: rgba(35,33,30,.05); }
.tab { padding: 8px 18px; border-radius: 999px; font: 700 12px/1 ${FONT}; color: rgba(35,33,30,.55); }
.tab.is-active { background: ${p.base}; color: ${p.text}; }
.pagination { display: inline-flex; gap: 4px; margin-top: 14px; }
.page { min-width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; font: 700 12px/1 ${FONT}; color: rgba(35,33,30,.55); }
.page.is-active { background: ${p.base}; color: ${p.text}; }
</style>
<div class="tabs">
  <span class="tab is-active">概要</span>
  <span class="tab">価格</span>
  <span class="tab">レビュー</span>
</div>
<div class="pagination">
  <span class="page is-active">1</span>
  <span class="page">2</span>
  <span class="page">3</span>
</div>`
}

function tableSnippet(p) {
  return `<style>
.table-wrap { overflow-x: auto; }
.table { width: 100%; min-width: 420px; border-collapse: collapse; font: 13px/1.4 ${FONT}; }
.table th { text-align: left; padding: 10px 14px; font: 700 11px/1 ${FONT}; letter-spacing: .1em; text-transform: uppercase; color: rgba(35,33,30,.45); border-bottom: 1px solid rgba(35,33,30,.1); }
.table td { padding: 10px 14px; border-bottom: 1px solid rgba(35,33,30,.08); }
.table .tag { display: inline-flex; padding: 3px 10px; border-radius: 999px; background: ${p.soft}; color: ${p.softText}; font: 700 11px/1 ${FONT}; }
</style>
<div class="table-wrap">
  <table class="table">
    <thead>
      <tr><th>キット名</th><th>カテゴリ</th><th>ステータス</th></tr>
    </thead>
    <tbody>
      <tr><td>バウハウス編</td><td>モダン・ミニマル</td><td><span class="tag">公開中</span></td></tr>
      <tr><td>アールデコ編</td><td>クラシック・装飾</td><td><span class="tag">公開中</span></td></tr>
    </tbody>
  </table>
</div>`
}

function feedbackSnippet(p) {
  return `<style>
.progress { width: 100%; max-width: 260px; height: 8px; border-radius: 999px; background: rgba(35,33,30,.08); overflow: hidden; }
.progress-bar { height: 100%; border-radius: 999px; background: ${p.base}; width: 64%; }
.avatar-row { display: flex; align-items: center; gap: 10px; margin-top: 16px; }
.avatar { width: 40px; height: 40px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: ${p.soft}; color: ${p.softText}; font: 800 14px/1 ${FONT}; }
</style>
<div class="progress"><div class="progress-bar"></div></div>
<div class="avatar-row">
  <span class="avatar">か</span>
  <span>ゲート達成 32 / 50件</span>
</div>`
}

function typeSnippet(p) {
  return `<style>
.eyebrow { font: 700 11px/1 ${FONT}; letter-spacing: .3em; color: ${p.base}; }
.heading { margin-top: 8px; font: 800 26px/1.3 "Shippori Mincho", "Hiragino Mincho ProN", serif; color: #23211E; }
.quote { margin-top: 14px; padding-left: 16px; border-left: 3px solid ${p.base}; font: italic 14px/1.7 ${FONT}; color: rgba(35,33,30,.6); }
.inline-code { background: ${p.soft}; color: ${p.softText}; padding: 2px 7px; border-radius: 6px; font: 12px/1.4 monospace; }
</style>
<p class="eyebrow">FIELD GUIDE</p>
<p class="heading">世界観をUIで試着する</p>
<p class="quote">「クラス名だけで一貫したUIが組める」という思想。</p>
<p><code class="inline-code">npm run dev</code></p>`
}

function Section({ id, index, title, desc, snippet, copied, onCopy }) {
  return (
    <section id={id} className="mt-12 scroll-mt-28">
      <p className="text-[10px] tracking-[0.4em] text-[var(--ink-faint)]">{String(index).padStart(2, '0')}</p>
      <h3 className="mt-1 text-[18px] font-bold tracking-[0.03em]">{title}</h3>
      {desc && <p className="mt-1 text-[12.5px] leading-[1.8] text-[var(--ink-soft)]">{desc}</p>}

      {/* プレビューはコピー用HTML文字列をそのまま描画するので、見た目とコードが常に一致する */}
      <div className="glass mt-4 rounded-2xl p-6" dangerouslySetInnerHTML={{ __html: snippet }} />

      <div className="mt-3 flex items-start justify-between gap-3 rounded-2xl border border-[var(--line)] bg-white/40 p-4">
        <pre className="no-scrollbar max-h-56 flex-1 overflow-auto whitespace-pre-wrap break-words font-mono text-[11px] leading-[1.7] text-[var(--ink-soft)]">
          {snippet}
        </pre>
        <button
          type="button"
          onClick={onCopy}
          className="glass-strong shrink-0 cursor-pointer rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.08em] whitespace-nowrap"
        >
          {copied ? 'コピーしました ✓' : 'HTMLをコピー'}
        </button>
      </div>
    </section>
  )
}

export default function UIComponents() {
  const [hex, setHex] = useState(DEFAULT_HEX)
  const [copiedKey, setCopiedKey] = useState(null)
  const palette = useMemo(() => buildPalette(hex), [hex])

  const sections = useMemo(() => {
    const p = palette
    return [
      { id: 'buttons', title: 'ボタン', desc: '塗り・アウトライン・ゴーストの3種。', snippet: buttonsSnippet(p) },
      { id: 'badges', title: 'バッジ', desc: 'ステータスやタグ表示用。', snippet: badgesSnippet(p) },
      { id: 'alerts', title: 'アラート', desc: '淡色背景で地の色に馴染ませる。', snippet: alertSnippet(p) },
      { id: 'cards', title: 'カード', desc: '数値を主役にしたステータスカード。', snippet: cardSnippet(p) },
      { id: 'forms', title: 'フォーム', desc: '入力欄とトグルスイッチ。', snippet: formSnippet(p) },
      { id: 'nav', title: 'ナビゲーション', desc: 'タブとページネーション。', snippet: navSnippet(p) },
      { id: 'table', title: 'テーブル', desc: 'セル内にタグを混ぜても崩れない設計。', snippet: tableSnippet(p) },
      { id: 'feedback', title: '進捗・アバター', desc: 'プログレスバーとアバター。', snippet: feedbackSnippet(p) },
      { id: 'type', title: 'タイポグラフィ', desc: '見出し・引用・インラインコード。', snippet: typeSnippet(p) },
    ]
  }, [palette])

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1600)
    } catch {
      // クリップボード権限がない環境では何もしない(コードは手動選択でコピー可能)
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-28 sm:px-8">
      <header className="rise">
        <p className="text-[10px] tracking-[0.5em] text-[var(--ink-faint)]">UI COMPONENTS</p>
        <h2 className="mt-3 text-[clamp(28px,5vw,40px)] font-bold tracking-[0.04em]">UIコンポーネント</h2>
        <p className="mt-3 max-w-[42em] text-[13px] leading-[2.1] text-[var(--ink-soft)]">
          色をひとつ選ぶと、ボタンからテーブルまで全パーツに反映されます。プレビュー下のコードはそのままコピーして使えます。
        </p>
      </header>

      <div className="glass-strong rise rise-1 mt-8 flex flex-wrap items-center gap-4 rounded-2xl p-5">
        <label htmlFor="accent-color" className="text-[12px] font-bold tracking-[0.08em] text-[var(--ink-soft)]">
          アクセントカラー
        </label>
        <input
          id="accent-color"
          type="color"
          value={isValidHex(hex) ? hex : DEFAULT_HEX}
          onChange={(e) => setHex(e.target.value)}
          className="h-9 w-9 cursor-pointer rounded-full border border-[var(--line)] bg-transparent p-0"
        />
        <input
          type="text"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          spellCheck={false}
          aria-label="カラーコードを直接入力"
          className="glass w-28 rounded-full px-3 py-1.5 font-mono text-[12px] tracking-[0.04em] outline-none"
        />
        <div className="ml-auto flex gap-1.5">
          {SWATCHES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setHex(c)}
              aria-label={`アクセントを${c}にする`}
              className="h-6 w-6 cursor-pointer rounded-full ring-1 ring-[var(--line)] transition-transform hover:scale-110"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      <nav className="rise rise-2 no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1" aria-label="コンポーネント一覧">
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="glass shrink-0 cursor-pointer rounded-full px-3.5 py-1.5 text-[11px] tracking-[0.04em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
          >
            {String(i + 1).padStart(2, '0')} {s.title}
          </a>
        ))}
      </nav>

      {sections.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          index={i + 1}
          title={s.title}
          desc={s.desc}
          snippet={s.snippet}
          copied={copiedKey === s.id}
          onCopy={() => copy(s.id, s.snippet)}
        />
      ))}
    </div>
  )
}
