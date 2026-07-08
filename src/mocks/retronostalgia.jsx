// レトロ・ノスタルジック系の追加世界観(ピクセルアート / ミッドセンチュリー / ポップアート)
// キャンバス 560×420 で設計
const inter = "'Inter', sans-serif"
const zen = "'Zen Kaku Gothic New', sans-serif"
const dot = "'DotGothic16', monospace"
const jost = "'Jost', sans-serif"

/* ---------------- ピクセルアート ---------------- */

function PixelLP() {
  const cloud = (x, y) => (
    <g fill="#FFFFFF">
      <rect x={x} y={y} width="48" height="12" />
      <rect x={x + 12} y={y - 12} width="24" height="12" />
    </g>
  )
  return (
    <div style={{ width: '100%', height: '100%', background: '#1B2A6B', position: 'relative', overflow: 'hidden', fontFamily: dot, color: '#fff' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        {cloud(70, 80)}
        {cloud(390, 56)}
        {cloud(250, 130)}
        <g fill="#3BAE4A">
          <rect x="0" y="360" width="560" height="60" />
          {[0, 56, 112, 168, 224, 280, 336, 392, 448, 504].map((x, i) => (
            <rect key={x} x={x + 8} y={344} width="16" height="16" fill={i % 2 ? '#2E8B3B' : '#3BAE4A'} />
          ))}
        </g>
        <g fill="#E0342F">
          <rect x="252" y="240" width="56" height="56" />
          <rect x="264" y="228" width="32" height="12" />
          <rect x="264" y="256" width="8" height="8" fill="#fff" />
          <rect x="288" y="256" width="8" height="8" fill="#fff" />
          <rect x="268" y="276" width="24" height="6" fill="#fff" />
        </g>
      </svg>
      <div style={{ position: 'absolute', top: 56, width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: 34, textShadow: '4px 4px 0 #E0342F', letterSpacing: '0.06em' }}>ドットの森</div>
        <div style={{ fontSize: 13, marginTop: 14, color: '#9fd0ff' }}>8bitで冒険する、週末のゲームジャム</div>
      </div>
      <div style={{ position: 'absolute', bottom: 92, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#F5C51C', color: '#1B2A6B', fontSize: 15, padding: '12px 26px', boxShadow: '6px 6px 0 #0E1740', border: '3px solid #0E1740' }}>
          ▶ PRESS START
        </div>
      </div>
      <div style={{ position: 'absolute', top: 18, left: 20, fontSize: 12 }}>SCORE 002600</div>
      <div style={{ position: 'absolute', top: 18, right: 20, fontSize: 12, color: '#F5C51C' }}>♥♥♥</div>
    </div>
  )
}

function PixelPlayer() {
  const bars = [4, 7, 3, 8, 5, 9, 4, 6, 8, 3, 7, 5]
  return (
    <div style={{ width: '100%', height: '100%', background: '#101014', display: 'grid', placeItems: 'center', fontFamily: dot }}>
      <div style={{ width: 340, border: '4px solid #3BAE4A', padding: 22, color: '#3BAE4A', background: '#0B0F0B' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
          <span>CHIPTUNE.FM</span>
          <span>TRK 04/12</span>
        </div>
        <div style={{ marginTop: 16, fontSize: 17, color: '#B8F135' }}>ネオン団地のテーマ</div>
        <div style={{ fontSize: 11, marginTop: 4, color: '#6f9b4a' }}>by ビット原人</div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 40, marginTop: 18 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ width: 14, height: h * 4, background: i % 3 === 0 ? '#B8F135' : '#3BAE4A' }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 3, marginTop: 16 }}>
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} style={{ width: 14, height: 10, background: i < 11 ? '#F5C51C' : '#243024' }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginTop: 6, color: '#6f9b4a' }}>
          <span>01:24</span>
          <span>02:10</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 16, fontSize: 15 }}>
          {['◀◀', '▶', '▶▶'].map((s) => (
            <div key={s} style={{ border: '3px solid #3BAE4A', padding: '6px 14px', boxShadow: '4px 4px 0 #1c2a1c' }}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const pixelartMocks = [
  {
    id: 'pixelart-lp',
    title: 'ゲームジャムの告知LP',
    kind: 'Web / ヒーロー',
    Comp: PixelLP,
    why: [
      { label: 'かたち', text: '雲も地面もキャラクターも、すべて四角の集積。曲線を階段状のドットで近似する「制約の見た目」こそがピクセルアートの署名。' },
      { label: 'フォント', text: 'ドットフォントは低解像度画面の遺産。アンチエイリアスのないギザギザの輪郭が、そのまま時代の空気を運んでくる。' },
      { label: '色', text: '空の青・草の緑・主役の赤——ファミコン時代の限られたパレットを踏襲。色数を絞るほど「あの頃」の記憶に近づく。' },
    ],
  },
  {
    id: 'pixelart-player',
    title: 'チップチューンのプレイヤー',
    kind: 'アプリ',
    Comp: PixelPlayer,
    why: [
      { label: 'かたち', text: 'プログレスバーは滑らかな線ではなく「セグメントの点灯」。連続量を離散的に見せるのが8bit表現の文法。' },
      { label: '色', text: '黒地に蛍光グリーンは初期モニタ(グリーンディスプレイ)の引用。発光色を2〜3段階に制限して端末感を保つ。' },
      { label: '質感', text: 'ボタンの影はぼかさず4pxずらした「ハードシャドウ」。ドット絵の世界にグラデーションを持ち込まないことが没入の条件。' },
    ],
  },
]

/* ---------------- ミッドセンチュリー ---------------- */
const mustard = '#D98E32'
const mcTeal = '#3E8C84'

function MidcenturyHero() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F4EBD9', position: 'relative', overflow: 'hidden', fontFamily: jost, color: '#33302A' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <path d="M330 60 q160 -30 190 90 q20 110 -120 130 q-130 10 -140 -90 q-8 -100 70 -130" fill={mustard} opacity="0.9" />
        <g stroke="#33302A" strokeWidth="3" fill="none">
          <path d="M380 150 q45 -28 90 0 l-6 60 q-40 -20 -78 0 z" fill="#F4EBD9" />
          <line x1="398" y1="208" x2="384" y2="268" />
          <line x1="452" y1="208" x2="466" y2="268" />
          <line x1="425" y1="210" x2="425" y2="240" />
        </g>
        <g fill={mcTeal}>
          {[0, 1, 2].map((i) => (
            <ellipse key={i} cx={90 + i * 34} cy={330} rx="12" ry="26" transform={`rotate(${-20 + i * 20} ${90 + i * 34} 330)`} />
          ))}
        </g>
        <g stroke={mustard} strokeWidth="2.5">
          {[0, 45, 90, 135].map((r) => (
            <line key={r} x1="480" y1="330" x2="480" y2="306" transform={`rotate(${r} 480 330)`} />
          ))}
          {[22, 67, 112, 157].map((r) => (
            <line key={r} x1="480" y1="330" x2="480" y2="312" transform={`rotate(${r} 480 330)`} strokeWidth="1.5" />
          ))}
        </g>
      </svg>
      <div style={{ position: 'absolute', top: 44, left: 48, maxWidth: 260 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.4em', color: mcTeal, fontWeight: 600 }}>ATOMIC HOME</div>
        <div style={{ fontSize: 38, fontWeight: 600, lineHeight: 1.2, marginTop: 16 }}>楽観主義の、<br />椅子をどうぞ。</div>
        <div style={{ fontFamily: zen, fontSize: 12, lineHeight: 2, marginTop: 16, color: '#6b6353' }}>
          1950年代のカリフォルニアから届いた、成形合板と明るい未来のかたち。
        </div>
        <div style={{ marginTop: 20, display: 'inline-block', background: '#33302A', color: '#F4EBD9', padding: '11px 24px', borderRadius: 24, fontSize: 12, letterSpacing: '0.16em' }}>
          コレクションを見る
        </div>
      </div>
    </div>
  )
}

function MidcenturyMenu() {
  const items = [
    ['ブルーベリーパンケーキ', '780'],
    ['ルートビア・フロート', '520'],
    ['チェリーパイ(自家製)', '640'],
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: mcTeal, display: 'grid', placeItems: 'center', fontFamily: jost }}>
      <div style={{ width: 330, background: '#F4EBD9', padding: '30px 34px', color: '#33302A', position: 'relative' }}>
        <svg aria-hidden="true" width="54" height="54" viewBox="0 0 54 54" style={{ position: 'absolute', top: -18, right: -18 }}>
          {[0, 30, 60, 90, 120, 150].map((r) => (
            <line key={r} x1="27" y1="4" x2="27" y2="50" stroke={mustard} strokeWidth="2.5" transform={`rotate(${r} 27 27)`} />
          ))}
          <circle cx="27" cy="27" r="6" fill="#33302A" />
        </svg>
        <div style={{ textAlign: 'center', fontSize: 12, letterSpacing: '0.42em', color: '#B8543A', fontWeight: 600 }}>SINCE 1958</div>
        <div style={{ textAlign: 'center', fontSize: 27, fontWeight: 600, marginTop: 8, letterSpacing: '0.06em' }}>Sputnik Diner</div>
        <svg aria-hidden="true" width="120" height="14" viewBox="0 0 120 14" style={{ display: 'block', margin: '10px auto' }}>
          <path d="M4 10 Q30 -6 60 8 T116 6" fill="none" stroke={mustard} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <div style={{ marginTop: 14 }}>
          {items.map(([name, price]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontFamily: zen, fontSize: 12.5, padding: '9px 0' }}>
              <span>{name}</span>
              <span style={{ flex: 1, borderBottom: '2px dotted #b9ad93', transform: 'translateY(-3px)' }} />
              <span style={{ fontFamily: jost, fontWeight: 600, color: '#B8543A' }}>¥{price}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, textAlign: 'center', fontFamily: zen, fontSize: 10.5, color: '#8b7f68' }}>
          コーヒーのおかわりは、いつでも無料。
        </div>
      </div>
    </div>
  )
}

export const midcenturyMocks = [
  {
    id: 'midcentury-hero',
    title: '家具ブランドのヒーロー',
    kind: 'Web / ヒーロー',
    Comp: MidcenturyHero,
    why: [
      { label: 'かたち', text: 'アメーバ形の色面、先細りの椅子の脚、放射状のスターバースト。直線ではなく「弾む有機曲線」が戦後の楽観を運ぶ。' },
      { label: '色', text: 'マスタード・ティール・クリームの中彩度トリオ。原色ほど叫ばず、パステルほど甘くない——大人の楽観主義の色域。' },
      { label: 'フォント', text: '幾何学的だが角の丸いサンセリフを、ゆったりした字間で。当時の広告レタリングの「親しみやすいモダン」を再現する。' },
    ],
  },
  {
    id: 'midcentury-menu',
    title: 'ダイナーのメニューカード',
    kind: '印刷物 / メニュー',
    Comp: MidcenturyMenu,
    why: [
      { label: 'モチーフ', text: '角のスプートニク型バーストは原子・宇宙モチーフの典型。科学技術への信頼が、そのまま装飾になった時代の印。' },
      { label: 'レイアウト', text: '品名と価格を点線(リーダー)で結ぶのは当時のメニューの定番。機能的な仕掛けが、いまはノスタルジーの記号として働く。' },
      { label: '色', text: 'ティール地にクリームの紙を浮かべ、赤茶をひと差し。3色で「1958年のロードサイド」まで一気に連れて行く。' },
    ],
  },
]

/* ---------------- ポップアート ---------------- */
const popRed = '#E4322B'

function PopSale() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F5C51C', position: 'relative', overflow: 'hidden', fontFamily: inter }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${popRed} 18%, transparent 19%)`, backgroundSize: '16px 16px', opacity: 0.25 }} />
      <svg aria-hidden="true" width="360" height="360" viewBox="0 0 200 200" style={{ position: 'absolute', left: 100, top: 30 }}>
        <path
          d="M100 8 L118 52 L164 32 L142 74 L192 84 L148 108 L176 148 L126 136 L122 188 L96 144 L58 176 L66 128 L14 128 L54 98 L22 56 L74 68 Z"
          fill={popRed}
          stroke="#1A1A1A"
          strokeWidth="5"
        />
      </svg>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 130, textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-0.02em', textShadow: '5px 5px 0 #1A1A1A', transform: 'rotate(-4deg)' }}>50% OFF</div>
        <div style={{ display: 'inline-block', marginTop: 14, background: '#1A1A1A', color: '#F5C51C', fontFamily: zen, fontWeight: 700, fontSize: 15, padding: '8px 22px', transform: 'rotate(-4deg)' }}>
          夏の全品セール、はじまる。
        </div>
      </div>
      <div style={{ position: 'absolute', top: 34, left: 40, background: '#fff', border: '4px solid #1A1A1A', borderRadius: '50% 50% 50% 4px', padding: '16px 20px', fontWeight: 900, fontSize: 22, color: '#1A1A1A', transform: 'rotate(-8deg)' }}>
        WOW!
      </div>
      <div style={{ position: 'absolute', bottom: 26, right: 36, fontFamily: zen, fontSize: 11, fontWeight: 700, color: '#1A1A1A', letterSpacing: '0.1em' }}>
        7.11 FRI → 7.21 MON
      </div>
    </div>
  )
}

function PopCans() {
  const combos = [
    ['#E4322B', '#F5C51C', '#1A1A1A'],
    ['#2B54A3', '#F2578E', '#fff'],
    ['#28B5A6', '#E4322B', '#1A1A1A'],
    ['#F2578E', '#2B54A3', '#fff'],
    ['#F5C51C', '#28B5A6', '#1A1A1A'],
    ['#1A1A1A', '#F5C51C', '#E4322B'],
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'grid', placeItems: 'center', fontFamily: inter }}>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 130px)', gap: 14 }}>
          {combos.map(([bg, band, txt], i) => (
            <div key={i} style={{ background: bg, height: 130, display: 'grid', placeItems: 'center' }}>
              <svg aria-hidden="true" width="56" height="92" viewBox="0 0 56 92">
                <rect x="8" y="10" width="40" height="72" rx="8" fill={band} stroke="#1A1A1A" strokeWidth="3" />
                <rect x="8" y="38" width="40" height="18" fill={txt === '#fff' ? '#1A1A1A' : '#fff'} />
                <ellipse cx="28" cy="10" rx="20" ry="5" fill="#ddd" stroke="#1A1A1A" strokeWidth="3" />
                <text x="28" y="51" textAnchor="middle" fontSize="10" fontWeight="900" fill={txt === '#fff' ? '#fff' : '#1A1A1A'} fontFamily="Inter">SODA</text>
              </svg>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 18, textAlign: 'center', fontFamily: zen, fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: '#1A1A1A' }}>
          どの色の気分? — 6 FLAVORS
        </div>
      </div>
    </div>
  )
}

export const popartMocks = [
  {
    id: 'popart-sale',
    title: 'セールのキャンペーンバナー',
    kind: 'バナー / 広告',
    Comp: PopSale,
    why: [
      { label: '質感', text: '背景の網点(ベンデイドット)は安い大量印刷の再現。印刷の「粗」をあえて拡大して見せるのがポップアートの発明。' },
      { label: 'かたち', text: '爆発形の吹き出しと「WOW!」は漫画のコマの引用。高尚な芸術ではなく、街角の俗な言葉で語りかける。' },
      { label: '色', text: '黄・赤・黒の3色は叫び声の配色。太い黒フチが色同士の喧嘩を仲裁し、遠目でも一瞬で読める広告の強度を作る。' },
    ],
  },
  {
    id: 'popart-cans',
    title: '缶ソーダの反復広告',
    kind: 'グラフィック / 広告',
    Comp: PopCans,
    why: [
      { label: 'レイアウト', text: '同じ缶を色違いで6回反復する。大量生産品が並ぶ棚そのものを構図にした、ウォーホル的な「複製の美学」。' },
      { label: '色', text: '1マスごとに配色を総入れ替え。モチーフが同じだからこそ、色の組み合わせだけが主役として立ち上がる。' },
      { label: 'かたち', text: '缶は写実ではなく、3px の黒輪郭で塗り分けたフラットなイラスト。商品を「商品の記号」に変換するのがポップアートの視線。' },
    ],
  },
]
