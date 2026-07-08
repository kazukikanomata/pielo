import { useMemo, useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import { categories, movements } from '../data/movements.jsx'
import MockScaler from './MockScaler.jsx'

// SNS投稿用「見分けポイント」カードの生成スタジオ(非公開ページ: /#cards)
// X(Twitter)向け 1200×675 で設計し、2倍解像度のPNGを書き出す

const W = 1200
const H = 675
const PREVIEW_SCALE = 0.55

function Card({ movement, tellIdx, mockIdx, innerRef }) {
  const tell = movement.tells[tellIdx]
  const mock = movement.mocks[mockIdx % movement.mocks.length]
  const [b0, b1, b2] = movement.blobs
  return (
    <div
      ref={innerRef}
      style={{
        width: W,
        height: H,
        position: 'relative',
        overflow: 'hidden',
        background: '#F4F1EA',
        color: '#23211E',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      {/* 世界観の色をまとった、ぼかし背景(アプリ本体と同じ文法) */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 620, height: 620, borderRadius: '50%', background: b0, filter: 'blur(110px)', opacity: 0.4, top: -260, left: -140 }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 520, height: 520, borderRadius: '50%', background: b1, filter: 'blur(110px)', opacity: 0.35, bottom: -220, right: -80 }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 420, height: 420, borderRadius: '50%', background: b2, filter: 'blur(110px)', opacity: 0.3, bottom: -180, left: 380 }} />

      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 560px', gap: 48, height: '100%', padding: '52px 56px' }}>
        {/* 左: 問いと見分けポイント */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 15, letterSpacing: '0.42em', color: '#8d8676' }}>
            このデザイン、なぜそう見える?
          </div>
          <div style={{ marginTop: 30, display: 'flex', alignItems: 'baseline', gap: 18, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 46, fontWeight: 700, letterSpacing: '0.04em' }}>{movement.name}</span>
            <span style={{ fontSize: 15, letterSpacing: '0.24em', color: '#8d8676', fontFamily: "'Jost', sans-serif" }}>
              {movement.latin} / {movement.era}
            </span>
          </div>
          <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ background: movement.accent, color: '#F4F1EA', fontSize: 14, fontWeight: 700, letterSpacing: '0.2em', padding: '7px 16px', borderRadius: 999 }}>
              見分けポイント {String(tellIdx + 1).padStart(2, '0')}
            </span>
            <span style={{ fontSize: 13, letterSpacing: '0.2em', color: '#8d8676' }}>/ {movement.tells.length}</span>
          </div>
          <div style={{ marginTop: 24, fontSize: 31, fontWeight: 700, lineHeight: 1.75, letterSpacing: '0.02em' }}>
            {tell}
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: '0.08em', fontFamily: "'Jost', sans-serif" }}>
              piel<span style={{ display: 'inline-block', width: '0.55em', height: '0.55em', borderRadius: '50%', background: movement.accent, margin: '0 1px' }} />
            </div>
            <div style={{ fontSize: 13, letterSpacing: '0.3em', color: '#8d8676' }}>
              デザイン史をUIで試着するギャラリー
            </div>
          </div>
        </div>

        {/* 右: 実物のUIモック */}
        <div style={{ alignSelf: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.55)', borderRadius: 22, padding: 12, boxShadow: '0 30px 70px -30px rgba(35,33,30,0.4)' }}>
            <div style={{ borderRadius: 14, overflow: 'hidden' }}>
              <MockScaler Comp={mock.Comp} />
            </div>
          </div>
          <div style={{ marginTop: 14, textAlign: 'center', fontSize: 13, letterSpacing: '0.18em', color: '#8d8676' }}>
            {mock.title} — コードで再現したUI例
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---- フォント埋め込みの軽量化 ----
   html-to-image標準の埋め込みは全ファミリー×全サブセット(数十MB)を取り込んで遅いため、
   カードで実際に使っているフォントファミリー×使っている文字のサブセットだけをCSS化する */

const fontDataCache = new Map() // fontURL -> dataURL

function parseUnicodeRange(rangeStr) {
  // "U+4E00-9FFF, U+30??" → [[start,end], ...]
  return rangeStr.split(',').map((token) => {
    const t = token.trim().replace(/^U\+/i, '')
    if (t.includes('-')) {
      const [s, e] = t.split('-')
      return [parseInt(s, 16), parseInt(e, 16)]
    }
    if (t.includes('?')) {
      return [parseInt(t.replaceAll('?', '0'), 16), parseInt(t.replaceAll('?', 'F'), 16)]
    }
    const v = parseInt(t, 16)
    return [v, v]
  })
}

function rangeCovers(rangeStr, codePoints) {
  if (!rangeStr) return true
  const ranges = parseUnicodeRange(rangeStr)
  return codePoints.some((p) => ranges.some(([s, e]) => p >= s && p <= e))
}

async function toDataUrl(url) {
  if (fontDataCache.has(url)) return fontDataCache.get(url)
  const res = await fetch(url)
  const blob = await res.blob()
  const dataUrl = await new Promise((resolve) => {
    const fr = new FileReader()
    fr.onload = () => resolve(fr.result)
    fr.readAsDataURL(blob)
  })
  fontDataCache.set(url, dataUrl)
  return dataUrl
}

async function buildFontCss(node) {
  // カード内で使われているフォントファミリー
  const families = new Set()
  const collect = (el) => {
    const ff = getComputedStyle(el).fontFamily || ''
    ff.split(',').forEach((f) => families.add(f.trim().replace(/['"]/g, '')))
  }
  collect(node)
  node.querySelectorAll('*').forEach(collect)

  // カード内で使われている文字
  const codePoints = [...new Set(node.textContent)].map((c) => c.codePointAt(0))

  // 該当する @font-face だけを抽出し、フォントファイルをdata URLに差し替える
  const chunks = []
  for (const sheet of document.styleSheets) {
    let rules
    try {
      rules = sheet.cssRules
    } catch {
      continue // CORSで読めないシートは無視
    }
    for (const rule of rules) {
      if (rule.type !== CSSRule.FONT_FACE_RULE) continue
      const fam = rule.style.getPropertyValue('font-family').replace(/['"]/g, '').trim()
      if (!families.has(fam)) continue
      if (!rangeCovers(rule.style.getPropertyValue('unicode-range'), codePoints)) continue
      const src = rule.style.getPropertyValue('src')
      const m = src.match(/url\((['"]?)([^)'"]+)\1\)/)
      if (!m) {
        chunks.push(rule.cssText)
        continue
      }
      const dataUrl = await toDataUrl(new URL(m[2], sheet.href || location.href).href)
      chunks.push(rule.cssText.replace(m[2], dataUrl))
    }
  }
  return chunks.join('\n')
}

function buildCaption(movement, tellIdx) {
  return [
    `【このデザイン、なぜそう見える?】${movement.name}編 ${String(tellIdx + 1).padStart(2, '0')}`,
    '',
    movement.tells[tellIdx],
    '',
    `「${movement.thesis}」— ${movement.latin} / ${movement.era}`,
    '',
    '39の世界観をUIで試着できるギャラリー pielo ↓',
    '(URL)',
    `#デザイン #UIデザイン #${movement.name.replace(/[・×\s]/g, '')}`,
  ].join('\n')
}

const fileName = (movement, tellIdx) => `pielo-card-${movement.id}-tell${tellIdx + 1}.png`

export default function CardStudio() {
  const [movementId, setMovementId] = useState(movements[0].id)
  const [tellIdx, setTellIdx] = useState(0)
  const [mockIdx, setMockIdx] = useState(0)
  const [busy, setBusy] = useState(null)
  const [copied, setCopied] = useState(false)
  const cardRef = useRef(null)

  const movement = useMemo(() => movements.find((m) => m.id === movementId), [movementId])
  const caption = buildCaption(movement, tellIdx)

  const savePng = async (name) => {
    // カードで使っている文字×フォントだけを埋め込む(標準の全量埋め込みは数十MBで遅いため)
    const fontEmbedCSS = await buildFontCss(cardRef.current)
    const dataUrl = await toPng(cardRef.current, { pixelRatio: 2, fontEmbedCSS })
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = name
    a.click()
  }

  const exportPng = async () => {
    if (!cardRef.current) return
    setBusy('1枚を書き出し中…')
    try {
      await savePng(fileName(movement, tellIdx))
    } finally {
      setBusy(null)
    }
  }

  const exportAllTells = async () => {
    if (!cardRef.current) return
    try {
      for (let i = 0; i < movement.tells.length; i++) {
        setBusy(`${movement.name} ${i + 1}/${movement.tells.length} を書き出し中…`)
        setTellIdx(i)
        setMockIdx(i) // モックもローテーションして絵面を変える
        await new Promise((r) => setTimeout(r, 500)) // 再描画とフォント適用を待つ
        await savePng(fileName(movement, i))
        await new Promise((r) => setTimeout(r, 300))
      }
    } finally {
      setBusy(null)
    }
  }

  const copyCaption = async () => {
    await navigator.clipboard.writeText(caption)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-28 sm:px-8">
      <p className="text-[10px] tracking-[0.5em] text-[var(--ink-faint)]">CARD STUDIO — 内部ツール</p>
      <h2 className="mt-4 text-[clamp(20px,3.4vw,26px)] tracking-[0.08em]" style={{ fontFamily: 'var(--font-question)' }}>
        SNS投稿用「見分けポイント」カード
      </h2>

      {/* 様式の選択 */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <select
          value={movementId}
          onChange={(e) => {
            setMovementId(e.target.value)
            setTellIdx(0)
            setMockIdx(0)
          }}
          className="glass-strong cursor-pointer rounded-full px-5 py-2.5 text-[13px] tracking-[0.06em]"
        >
          {categories.map((cat) => (
            <optgroup key={cat.id} label={cat.name}>
              {movements.filter((m) => m.category === cat.id).map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
            </optgroup>
          ))}
        </select>

        <div className="flex gap-1.5">
          {movement.tells.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setTellIdx(i)}
              className={`glass cursor-pointer rounded-full px-4 py-2 text-[12px] ${i === tellIdx ? 'font-bold' : 'opacity-60'}`}
              style={i === tellIdx ? { boxShadow: `inset 0 -2px 0 ${movement.accent}` } : undefined}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMockIdx((i) => i + 1)}
          className="glass cursor-pointer rounded-full px-4 py-2 text-[12px] tracking-[0.1em]"
        >
          モック切替 ({(mockIdx % movement.mocks.length) + 1}/{movement.mocks.length})
        </button>
      </div>

      {/* プレビュー(実寸1200×675を縮小表示) */}
      <div className="mt-6 overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(35,33,30,0.35)]" style={{ width: W * PREVIEW_SCALE, height: H * PREVIEW_SCALE, maxWidth: '100%' }}>
        <div style={{ transform: `scale(${PREVIEW_SCALE})`, transformOrigin: 'top left' }}>
          <Card movement={movement} tellIdx={tellIdx} mockIdx={mockIdx} innerRef={cardRef} />
        </div>
      </div>

      {/* 操作 */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="button" onClick={exportPng} disabled={!!busy} className="glass-strong cursor-pointer rounded-full px-7 py-3 text-[13px] font-bold tracking-[0.14em]">
          この1枚をPNG書き出し(2400×1350)
        </button>
        <button type="button" onClick={exportAllTells} disabled={!!busy} className="glass cursor-pointer rounded-full px-6 py-3 text-[12.5px] tracking-[0.1em]">
          この様式の{movement.tells.length}枚を一括書き出し
        </button>
        {busy && <span className="text-[12px] text-[var(--ink-soft)]">{busy}</span>}
      </div>

      {/* 投稿文 */}
      <div className="glass mt-8 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[var(--ink-soft)]">投稿文(コピーして使う)</p>
          <button type="button" onClick={copyCaption} className="glass-strong cursor-pointer rounded-full px-5 py-2 text-[12px] font-bold tracking-[0.1em]">
            {copied ? 'コピーしました ✓' : '投稿文をコピー'}
          </button>
        </div>
        <pre className="mt-4 whitespace-pre-wrap text-[12.5px] leading-[1.9] text-[var(--ink-soft)]" style={{ fontFamily: 'var(--font-body, inherit)' }}>
          {caption}
        </pre>
      </div>

      <p className="mt-6 text-[11px] leading-[1.9] text-[var(--ink-faint)]">
        使い方: 様式を選ぶ → 見分けポイント(1〜4)とモックの組み合わせを決める → PNG書き出し+投稿文コピー。
        1様式=4投稿ぶん、全39様式で約150投稿ぶんのストックになります。URLはデプロイ後に差し替えてください。
      </p>
    </div>
  )
}
