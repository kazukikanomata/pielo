// アール・デコの世界観を再現したUIモック(キャンバス 560×420 で設計)
const marcellus = "'Marcellus', serif"
const mincho = "'Shippori Mincho', serif"
const gold = '#C9A45B'
const goldDeep = '#A8843C'

function Sunburst({ color = gold, width = 300, height = 110 }) {
  const rays = []
  for (let i = 0; i <= 12; i++) {
    const angle = Math.PI - (i / 12) * Math.PI
    const x = width / 2 + Math.cos(angle) * (width / 2 - 4)
    const y = height - 6 - Math.sin(angle) * (height - 12)
    rays.push(<line key={i} x1={width / 2} y1={height - 4} x2={x} y2={y} stroke={color} strokeWidth="1.2" />)
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      {rays}
      <circle cx={width / 2} cy={height - 4} r="5" fill={color} />
    </svg>
  )
}

function HotelHero() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#10231D', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 12, border: `1px solid ${gold}` }} />
      <div style={{ position: 'absolute', inset: 18, border: `1px solid ${goldDeep}55` }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Sunburst />
        <div style={{ fontFamily: marcellus, color: gold, fontSize: 34, letterSpacing: '0.35em', marginTop: 18, textIndent: '0.35em' }}>
          HOTEL MÉRIDIEN
        </div>
        <div style={{ width: 200, display: 'flex', alignItems: 'center', gap: 10, margin: '16px 0' }}>
          <div style={{ flex: 1, height: 1, background: `${gold}88` }} />
          <div style={{ width: 7, height: 7, background: gold, transform: 'rotate(45deg)' }} />
          <div style={{ flex: 1, height: 1, background: `${gold}88` }} />
        </div>
        <div style={{ fontFamily: mincho, color: '#EFE3C8', fontSize: 15, letterSpacing: '0.3em', textIndent: '0.3em' }}>
          一九二五年から、夜を灯す
        </div>
        <button type="button" style={{ marginTop: 26, background: 'transparent', border: `1px solid ${gold}`, color: gold, fontFamily: mincho, fontSize: 13, letterSpacing: '0.4em', textIndent: '0.4em', padding: '10px 34px', cursor: 'pointer' }}>
          ご予約
        </button>
      </div>
    </div>
  )
}

function BarMenu() {
  const items = [
    ['サイドカー', '1,800'],
    ['ゴールドラッシュ', '1,900'],
    ['シャンパーニュ・グラス', '2,400'],
    ['ウイスキー・ソーダ', '1,600'],
  ]
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#161009', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 14, border: `1px solid ${gold}66` }} />
      <div style={{ width: 380, textAlign: 'center' }}>
        <div style={{ fontFamily: marcellus, color: gold, fontSize: 13, letterSpacing: '0.5em', textIndent: '0.5em' }}>JAZZ &amp; BAR</div>
        <div style={{ fontFamily: marcellus, color: '#EFE3C8', fontSize: 30, letterSpacing: '0.24em', textIndent: '0.24em', margin: '10px 0 6px' }}>
          LE PAON NOIR
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '14px 0 22px' }}>
          <div style={{ flex: 1, height: 1, background: `${gold}66` }} />
          <div style={{ width: 6, height: 6, background: gold, transform: 'rotate(45deg)' }} />
          <div style={{ flex: 1, height: 1, background: `${gold}66` }} />
        </div>
        {items.map(([name, price]) => (
          <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: mincho, color: '#EFE3C8', fontSize: 15, margin: '13px 0', letterSpacing: '0.12em' }}>
            <span>{name}</span>
            <span style={{ flex: 1, borderBottom: `1px dotted ${gold}55`, transform: 'translateY(-4px)' }} />
            <span style={{ color: gold }}>¥{price}</span>
          </div>
        ))}
        <div style={{ fontFamily: mincho, color: `#EFE3C8aa`, fontSize: 11, letterSpacing: '0.3em', marginTop: 20 }}>
          営業 一八時 — 深夜二時
        </div>
      </div>
    </div>
  )
}

function PerfumeCard() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F3EAD8', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 300, background: '#FCF7EB', border: `1px solid ${goldDeep}`, padding: '30px 34px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 6, border: `1px solid ${goldDeep}44`, pointerEvents: 'none' }} />
        <svg width="120" height="130" viewBox="0 0 120 130" aria-hidden="true" style={{ display: 'block', margin: '0 auto' }}>
          <rect x="52" y="6" width="16" height="14" fill={goldDeep} />
          <rect x="44" y="22" width="32" height="10" fill="#10231D" />
          <path d="M36 36 h48 l8 22 h-64 z" fill="#10231D" />
          <path d="M28 62 h64 l6 20 h-76 z" fill={goldDeep} />
          <path d="M22 86 h76 l6 22 h-88 z" fill="#10231D" />
          <rect x="16" y="112" width="88" height="10" fill={goldDeep} />
        </svg>
        <div style={{ fontFamily: marcellus, color: '#10231D', fontSize: 22, letterSpacing: '0.3em', textIndent: '0.3em', marginTop: 18 }}>
          SOIR N°5
        </div>
        <div style={{ fontFamily: mincho, color: '#5A4A33', fontSize: 12, letterSpacing: '0.24em', marginTop: 8 }}>
          オード・パルファン 五〇ml
        </div>
        <div style={{ fontFamily: marcellus, color: goldDeep, fontSize: 18, letterSpacing: '0.15em', marginTop: 16 }}>
          ¥ 24,000
        </div>
      </div>
    </div>
  )
}

export const artdecoMocks = [
  {
    id: 'artdeco-hotel',
    title: 'ホテルのランディングページ',
    kind: 'Web / ヒーロー',
    Comp: HotelHero,
    why: [
      { label: '色', text: '深い緑×金の2色だけ。金は「面」で塗らず「細い線」で使うのが上質さの鍵。ベタ塗りの金は一気に安っぽくなる。' },
      { label: 'かたち', text: '扇状に放射するサンバースト模様と左右対称。機械時代の幾何学を「儀式的な飾り」に昇華したのがアール・デコ。' },
      { label: 'フォント', text: '細身の大文字を約0.35字ぶんも空けて組む。文字間の広さが「急いでいない=高級」という時間感覚を伝える。' },
    ],
  },
  {
    id: 'artdeco-bar',
    title: 'ジャズバーのメニュー',
    kind: 'グラフィック',
    Comp: BarMenu,
    why: [
      { label: '余白', text: '中央揃えの完全な左右対称。整列の厳格さそのものが「格式」の記号になる。カジュアルにしたければ崩せばいい。' },
      { label: 'かたち', text: '品名と価格を結ぶ点線(ドットリーダー)と菱形の区切り。小さな定番の意匠が「本物のメニューらしさ」を担保する。' },
      { label: '色', text: '黒に近い焦茶の上に、金は7割の不透明度で。輝きは「少し抑える」ほうが照明の落ちたバーの空気になる。' },
    ],
  },
  {
    id: 'artdeco-perfume',
    title: '香水の商品カード',
    kind: 'EC / プロダクト',
    Comp: PerfumeCard,
    why: [
      { label: 'かたち', text: 'ボトルは階段状(ジッグラト)のシルエット。摩天楼の意匠を商品に写す——モチーフの出典がそろうと世界観になる。' },
      { label: '余白', text: '二重の細い罫で額縁をつくり、中身は少なく。「額装する」という構図は、それだけで対象を作品に見せる。' },
      { label: 'フォント', text: '英字はセリフの大文字、日本語は明朝。骨格の似た書体を対にすると、和欧混植でもバラバラに見えない。' },
    ],
  },
]
