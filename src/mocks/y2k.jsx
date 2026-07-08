// Y2Kの世界観を再現したUIモック(キャンバス 560×420 で設計)
const dot = "'DotGothic16', monospace"
const jost = "'Jost', sans-serif"

const chromeGrad = 'linear-gradient(180deg, #fdfeff 0%, #c9d2de 38%, #97a4b4 50%, #d8dfe8 62%, #f4f7fb 100%)'
const glossBtn = (c1, c2) => ({
  background: `linear-gradient(180deg, ${c1} 0%, ${c2} 55%, ${c2} 100%)`,
  position: 'relative',
  overflow: 'hidden',
})

function Gloss({ radius = 999 }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', top: '6%', left: '8%', right: '8%', height: '42%', borderRadius: radius, background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.05))' }} />
  )
}

function Player() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'radial-gradient(circle at 30% 20%, #1b2c53 0%, #0b1026 70%)', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 340, borderRadius: 26, background: chromeGrad, padding: 14, boxShadow: '0 18px 44px rgba(0,0,0,0.5), inset 0 1px 0 #fff' }}>
        <div style={{ borderRadius: 14, background: '#0A1430', padding: '14px 18px', border: '1px solid #3a4a77', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.8)' }}>
          <div style={{ fontFamily: dot, color: '#59D7F0', fontSize: 11, letterSpacing: '0.2em', textShadow: '0 0 8px #59D7F0' }}>NOW PLAYING ▸</div>
          <div style={{ fontFamily: dot, color: '#EAF6FF', fontSize: 19, marginTop: 6, textShadow: '0 0 10px rgba(89,215,240,0.6)' }}>ミレニアム・スター</div>
          <div style={{ fontFamily: dot, color: '#8FA6D9', fontSize: 11, marginTop: 3 }}>cyber angels — 03:47</div>
          <div style={{ marginTop: 12, height: 10, borderRadius: 999, background: '#060B1E', border: '1px solid #3a4a77', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 1, width: '46%', borderRadius: 999, background: 'linear-gradient(180deg, #B8F135, #6fae12)' }}>
              <Gloss />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 22, padding: '16px 0 8px' }}>
          {['◂◂', '▸', '▸▸'].map((g, i) => (
            <button key={g} type="button" style={{ ...glossBtn(i === 1 ? '#9ff0ff' : '#e8eef6', i === 1 ? '#1ba7cc' : '#96a5b8'), width: i === 1 ? 64 : 46, height: i === 1 ? 64 : 46, borderRadius: '50%', border: '1px solid #7e8ea3', cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#0A1430', fontSize: i === 1 ? 20 : 13, fontWeight: 700 }}>
              <Gloss />
              <span style={{ position: 'relative' }}>{g}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function ChatUI() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(160deg, #cfe4f5 0%, #e8d7f0 100%)', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 300, borderRadius: 22, background: chromeGrad, padding: 10, boxShadow: '0 14px 34px rgba(40,60,110,0.35), inset 0 1px 0 #fff' }}>
        <div style={{ borderRadius: 14, background: '#F2F8FF', padding: 14, minHeight: 250 }}>
          <div style={{ textAlign: 'center', fontFamily: dot, fontSize: 10, color: '#7d90ab', marginBottom: 10 }}>— 2001.01.01 00:03 —</div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 10 }}>
            <div style={{ position: 'relative', maxWidth: '75%', borderRadius: 16, padding: '8px 12px', ...glossBtn('#b9ebff', '#5db6dd'), border: '1px solid #6aa5c4', fontFamily: dot, fontSize: 13, color: '#0A2540' }}>
              <Gloss radius={16} />
              <span style={{ position: 'relative' }}>あけおめ〜!!ミレニアム☆</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            <div style={{ position: 'relative', maxWidth: '75%', borderRadius: 16, padding: '8px 12px', ...glossBtn('#ffd1ec', '#e668b4'), border: '1px solid #c46aa0', fontFamily: dot, fontSize: 13, color: '#3d0a2c' }}>
              <Gloss radius={16} />
              <span style={{ position: 'relative' }}>ことよろ(^_^)v 世界こわれなかったね</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ position: 'relative', maxWidth: '75%', borderRadius: 16, padding: '8px 12px', ...glossBtn('#b9ebff', '#5db6dd'), border: '1px solid #6aa5c4', fontFamily: dot, fontSize: 13, color: '#0A2540' }}>
              <Gloss radius={16} />
              <span style={{ position: 'relative' }}>Y2K問題どこいった(笑)</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, padding: '10px 6px 4px', alignItems: 'center' }}>
          <div style={{ flex: 1, height: 30, borderRadius: 999, background: '#fff', border: '1px solid #9fb0c4', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15)' }} />
          <button type="button" style={{ ...glossBtn('#c9ff8a', '#6fae12'), width: 58, height: 30, borderRadius: 999, border: '1px solid #7e9a4a', fontFamily: dot, fontSize: 12, cursor: 'pointer', color: '#1e3305' }}>
            <Gloss />
            <span style={{ position: 'relative' }}>送信</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function TechLP() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: 'radial-gradient(circle at 70% 30%, #1d2f5e 0%, #0B1026 65%)', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
        {[...Array(9)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={210 + i * i * 6} x2="560" y2={210 + i * i * 6} stroke="#59D7F0" strokeWidth="0.6" />
        ))}
        {[...Array(15)].map((_, i) => (
          <line key={`v${i}`} x1={280 + (i - 7) * 40} y1="210" x2={280 + (i - 7) * 110} y2="420" stroke="#59D7F0" strokeWidth="0.6" />
        ))}
      </svg>
      <div style={{ position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)', width: 240, height: 240, borderRadius: '50%', border: '1px solid rgba(184,241,53,0.5)', boxShadow: '0 0 60px rgba(184,241,53,0.25), inset 0 0 40px rgba(89,215,240,0.15)' }} />
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ fontFamily: dot, fontSize: 13, color: '#B8F135', letterSpacing: '0.4em', textShadow: '0 0 10px #B8F135' }}>2001.03.21 TOKYO</div>
        <div style={{ fontFamily: jost, fontStyle: 'italic', fontWeight: 700, fontSize: 58, letterSpacing: '0.02em', marginTop: 8, background: 'linear-gradient(180deg, #ffffff 5%, #9fb4cc 40%, #59D7F0 52%, #e8f4ff 60%, #7d92ab 95%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', filter: 'drop-shadow(0 2px 12px rgba(89,215,240,0.45))' }}>
          CYBER EXPO
        </div>
        <div style={{ fontFamily: dot, fontSize: 13, color: '#EAF6FF', marginTop: 10, letterSpacing: '0.2em' }}>未来は、さわれる。</div>
        <button type="button" style={{ marginTop: 22, position: 'relative', overflow: 'hidden', ...glossBtn('#8be9ff', '#1ba7cc'), border: '1px solid #6aa5c4', borderRadius: 999, padding: '10px 34px', fontFamily: dot, fontSize: 14, color: '#062033', cursor: 'pointer' }}>
          <Gloss />
          <span style={{ position: 'relative' }}>エントリーする ▸</span>
        </button>
      </div>
    </div>
  )
}

export const y2kMocks = [
  {
    id: 'y2k-player',
    title: 'ポータブル音楽プレーヤーUI',
    kind: 'アプリ',
    Comp: Player,
    why: [
      { label: '色', text: 'シルバーのクローム質感は「上→下」に白→グレー→白と折り返すグラデーションで再現。単純な2色グラデだと樹脂っぽく安くなる。' },
      { label: 'かたち', text: 'ボタン上部の白いハイライトが「ガラスの膨らみ」の記号。Y2Kの光沢は光源が画面の上にある、という共通ルールで統一されている。' },
      { label: 'フォント', text: '液晶画面の中はピクセルフォント+にじむ発光。デバイスの物理的な制約を演出として引用するのがY2Kのレトロフューチャー。' },
    ],
  },
  {
    id: 'y2k-chat',
    title: 'ケータイ風チャットUI',
    kind: 'アプリ',
    Comp: ChatUI,
    why: [
      { label: 'かたち', text: '吹き出しが水滴のようにぷっくり。角丸を大きく+ハイライトを載せると、平面が一気に「触れる物体」になる。' },
      { label: '色', text: '水色×ピンクのキャンディ配色。どちらも白を混ぜた明るい色でそろえているから、甘くてもうるさくならない。' },
      { label: 'フォント', text: '顔文字と「☆」まで含めてトーンの一部。UIの言葉づかいと装飾の時代感がそろうと、世界観は完成する。' },
    ],
  },
  {
    id: 'y2k-expo',
    title: 'テックイベントのLP',
    kind: 'Web / ヒーロー',
    Comp: TechLP,
    why: [
      { label: '色', text: '闇に沈む紺+発光するシアンとライム。暗い背景は「光る色」を使うための舞台装置。白背景ではネオンは光れない。' },
      { label: 'フォント', text: 'ロゴはイタリック+金属のグラデーションを文字に流し込む。「未来=スピード+金属」という2000年代の記号の合わせ技。' },
      { label: 'かたち', text: '地平線へ消えるグリッドはサイバースペースの定番。奥行きの演出が「ここではないどこか」への期待をつくる。' },
    ],
  },
]
