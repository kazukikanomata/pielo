// メンフィスの世界観を再現したUIモック(キャンバス 560×420 で設計)
const fredoka = "'Fredoka', sans-serif"
const zen = "'Zen Kaku Gothic New', sans-serif"

const dotBg = {
  backgroundImage: 'radial-gradient(#1C1B18 1.6px, transparent 1.6px)',
  backgroundSize: '18px 18px',
}

function Squiggle({ color = '#1C1B18', width = 120 }) {
  return (
    <svg width={width} height="24" viewBox="0 0 120 24" aria-hidden="true">
      <path d="M2 12 Q12 2 22 12 T42 12 T62 12 T82 12 T102 12 T122 12" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

function EventCard() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#FDF3E7', overflow: 'hidden', fontFamily: fredoka }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: 140, ...dotBg, opacity: 0.35 }} />
      <div style={{ position: 'absolute', bottom: -30, right: -20, width: 170, height: 170, borderRadius: '50%', background: '#28B5A6', border: '4px solid #1C1B18' }} />
      <div style={{ position: 'absolute', top: 30, right: 60, width: 70, height: 70, background: '#F5C51C', border: '4px solid #1C1B18', transform: 'rotate(14deg)' }} />
      <div style={{ position: 'absolute', bottom: 50, left: 40 }}><Squiggle color="#7C4DFF" /></div>
      <div style={{ position: 'absolute', top: 120, left: 44 }}>
        <div style={{ display: 'inline-block', background: '#F2578E', border: '4px solid #1C1B18', boxShadow: '8px 8px 0 #1C1B18', padding: '14px 26px', transform: 'rotate(-3deg)' }}>
          <div style={{ fontWeight: 700, fontSize: 44, color: '#fff', letterSpacing: '0.02em', textShadow: '2px 2px 0 #1C1B18' }}>POP! MARKET</div>
        </div>
        <div style={{ display: 'inline-block', marginTop: 18, marginLeft: 12, background: '#fff', border: '3px solid #1C1B18', boxShadow: '5px 5px 0 #1C1B18', padding: '8px 18px', transform: 'rotate(2deg)', fontFamily: zen, fontWeight: 700, fontSize: 15 }}>
          8/2(土)–3(日) 代々木公園 · 入場無料!
        </div>
      </div>
      <div style={{ position: 'absolute', top: 26, left: 44, fontFamily: zen, fontWeight: 700, fontSize: 13, letterSpacing: '0.2em' }}>
        ざっか と おかし の おまつり
      </div>
    </div>
  )
}

function KidsApp() {
  const answers = [
    ['ぞう', '#F2578E'],
    ['きりん', '#F5C51C'],
    ['ぺんぎん', '#28B5A6'],
  ]
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#7C4DFF', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
      <div style={{ position: 'absolute', top: 20, left: 26, transform: 'rotate(-10deg)' }}><Squiggle color="#F5C51C" width={90} /></div>
      <div style={{ position: 'absolute', bottom: 24, right: 30, width: 46, height: 46, borderRadius: '50%', background: '#F2578E', border: '4px solid #1C1B18' }} />
      <div style={{ width: 330, background: '#fff', border: '4px solid #1C1B18', borderRadius: 22, boxShadow: '10px 10px 0 #1C1B18', padding: 24, fontFamily: zen }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 13, background: '#F5C51C', border: '3px solid #1C1B18', borderRadius: 999, padding: '3px 12px' }}>もんだい 3/10</div>
          <div style={{ fontFamily: fredoka, fontWeight: 700, fontSize: 16 }}>★ 120</div>
        </div>
        <div style={{ fontWeight: 700, fontSize: 19, lineHeight: 1.5, marginBottom: 16 }}>くびが いちばん ながい どうぶつは?</div>
        {answers.map(([label, color]) => (
          <button key={label} type="button" style={{ display: 'block', width: '100%', marginBottom: 10, background: color, color: '#1C1B18', border: '3px solid #1C1B18', borderRadius: 14, boxShadow: '4px 4px 0 #1C1B18', padding: '10px 0', fontFamily: zen, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

function ShopCard() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FFF8EC', display: 'grid', placeItems: 'center', fontFamily: zen }}>
      <div style={{ width: 280, background: '#fff', border: '4px solid #1C1B18', boxShadow: '9px 9px 0 #28B5A6' }}>
        <div style={{ position: 'relative', height: 150, background: '#F2578E', borderBottom: '4px solid #1C1B18', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, ...dotBg, opacity: 0.25 }} />
          <div style={{ position: 'absolute', top: 34, left: 90, width: 90, height: 82, background: '#F5C51C', border: '4px solid #1C1B18', borderRadius: '12px 12px 18px 18px' }}>
            <div style={{ position: 'absolute', right: -26, top: 16, width: 26, height: 36, border: '4px solid #1C1B18', borderLeft: 'none', borderRadius: '0 14px 14px 0' }} />
            <div style={{ position: 'absolute', top: 18, left: 14 }}><Squiggle color="#1C1B18" width={56} /></div>
          </div>
          <div style={{ position: 'absolute', top: 10, left: 12, background: '#7C4DFF', color: '#fff', border: '3px solid #1C1B18', padding: '2px 10px', fontWeight: 700, fontSize: 12, transform: 'rotate(-4deg)' }}>NEW!</div>
        </div>
        <svg width="100%" height="14" viewBox="0 0 280 14" preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block', background: '#fff' }}>
          <path d="M0 12 L14 2 L28 12 L42 2 L56 12 L70 2 L84 12 L98 2 L112 12 L126 2 L140 12 L154 2 L168 12 L182 2 L196 12 L210 2 L224 12 L238 2 L252 12 L266 2 L280 12" fill="none" stroke="#F5C51C" strokeWidth="4" />
        </svg>
        <div style={{ padding: '10px 18px 18px' }}>
          <div style={{ fontWeight: 700, fontSize: 17 }}>メンフィス・マグ</div>
          <div style={{ fontSize: 12, color: '#666', margin: '4px 0 12px' }}>まいあさ、めがさめる いろ。</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontFamily: fredoka, fontWeight: 700, fontSize: 20 }}>¥2,400</div>
            <button type="button" style={{ background: '#28B5A6', border: '3px solid #1C1B18', boxShadow: '4px 4px 0 #1C1B18', borderRadius: 10, padding: '7px 16px', fontFamily: zen, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
              カゴにいれる
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const memphisMocks = [
  {
    id: 'memphis-event',
    title: 'イベント告知カード',
    kind: 'グラフィック / SNS',
    Comp: EventCard,
    why: [
      { label: 'かたち', text: '波線・水玉・傾いた四角が同居。バラバラに見えて「全部に黒い縁取り」という1つのルールが画面を束ねている。' },
      { label: '色', text: 'ピンク×ティール×黄という"ぶつかる配色"をわざと選ぶ。ただし彩度のレベルをそろえているから喧嘩にならない。' },
      { label: '余白', text: '影はぼかさず真っ黒のベタ。リアルな影を捨てて「マンガの影」にすると、チープではなく確信犯的なポップになる。' },
    ],
  },
  {
    id: 'memphis-kids',
    title: '子ども向け学習アプリ',
    kind: 'アプリ',
    Comp: KidsApp,
    why: [
      { label: 'かたち', text: 'ボタンは太い黒枠+ずらした黒影で「押せるおもちゃ」に見える。触りたくなる形は、子どものUIでは正義。' },
      { label: '色', text: '選択肢ごとに色を変えるのは本来ご法度。でも「色=選択肢の名前」として機能させれば、にぎやかさが構造になる。' },
      { label: 'フォント', text: '丸みのあるゴシックをひらがな中心で。角の丸さと語りかける文体をそろえると、トーンが一気に統一される。' },
    ],
  },
  {
    id: 'memphis-shop',
    title: '雑貨ECの商品カード',
    kind: 'EC / プロダクト',
    Comp: ShopCard,
    why: [
      { label: 'かたち', text: 'ジグザグの区切り線は「ここから空気が変わる」の合図。直線の罫をひとつ遊ばせるだけで、テンプレ感が消える。' },
      { label: '色', text: '影をティール(青緑)にするのがメンフィスの遊び。黒以外の影は、世界観が確立していて初めて成立する上級技。' },
      { label: '余白', text: 'にぎやかなのは商品画像のエリアだけで、価格やボタンの周りは意外なほど整然。騒ぐ場所と黙る場所を分けている。' },
    ],
  },
]
