// バウハウスの世界観を再現したUIモック(キャンバス 560×420 で設計)
const jost = "'Jost', sans-serif"

function Poster() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#F2EDE3', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, right: -30, width: 230, height: 230, borderRadius: '50%', background: '#D5382B' }} />
      <div style={{ position: 'absolute', bottom: 46, right: 120, width: 0, height: 0, borderLeft: '70px solid transparent', borderRight: '70px solid transparent', borderBottom: '120px solid #E8B71A', transform: 'rotate(18deg)' }} />
      <div style={{ position: 'absolute', bottom: -20, left: 200, width: 90, height: 90, background: '#2B54A3', transform: 'rotate(12deg)' }} />
      <div style={{ position: 'absolute', top: 70, left: 40, transform: 'rotate(-8deg)' }}>
        <div style={{ fontFamily: jost, fontWeight: 700, fontSize: 76, lineHeight: 0.95, letterSpacing: '-0.01em', color: '#1C1B18' }}>
          bauhaus
        </div>
        <div style={{ fontFamily: jost, fontWeight: 500, fontSize: 22, marginTop: 10, color: '#1C1B18' }}>
          ausstellung weimar — 1923
        </div>
      </div>
      <div style={{ position: 'absolute', left: 40, bottom: 30, fontFamily: jost, fontWeight: 400, fontSize: 13, letterSpacing: '0.12em', color: '#1C1B18' }}>
        kunst und technik — eine neue einheit
      </div>
      <div style={{ position: 'absolute', top: 26, left: 40, width: 120, height: 3, background: '#1C1B18' }} />
    </div>
  )
}

function ChairCard() {
  const rule = '1px solid #1C1B18'
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', background: '#FBF9F4', fontFamily: jost, color: '#1C1B18' }}>
      <div style={{ flex: 1.1, borderRight: rule, display: 'grid', placeItems: 'center' }}>
        <svg width="220" height="240" viewBox="0 0 220 240" aria-hidden="true">
          <path d="M60 210 L60 120 Q60 96 84 96 L150 96" fill="none" stroke="#1C1B18" strokeWidth="7" />
          <path d="M40 210 L180 210" stroke="#1C1B18" strokeWidth="7" />
          <rect x="84" y="88" width="82" height="14" fill="#D5382B" />
          <rect x="150" y="30" width="14" height="72" fill="#2B54A3" />
          <circle cx="157" cy="22" r="9" fill="#E8B71A" />
        </svg>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '28px 28px 20px', borderBottom: rule }}>
          <div style={{ fontSize: 12, letterSpacing: '0.28em', fontWeight: 500 }}>MÖBEL — 03</div>
          <div style={{ fontSize: 34, fontWeight: 600, marginTop: 8, lineHeight: 1.05 }}>stahlrohr<br />chair b32</div>
        </div>
        <div style={{ padding: '20px 28px', fontSize: 14, lineHeight: 1.9, borderBottom: rule, flex: 1 }}>
          素材 — スチールパイプ / 籐<br />
          寸法 — W46 × D57 × H80<br />
          仕上げ — クロームメッキ
        </div>
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <div style={{ padding: '18px 28px', fontSize: 24, fontWeight: 600, flex: 1 }}>¥128,000</div>
          <button type="button" style={{ background: '#1C1B18', color: '#FBF9F4', border: 'none', fontFamily: jost, fontWeight: 600, fontSize: 15, padding: '0 34px', letterSpacing: '0.1em', cursor: 'pointer' }}>
            カートへ
          </button>
        </div>
      </div>
    </div>
  )
}

function Player() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EFE9DB', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 320, background: '#FBF9F4', border: '2px solid #1C1B18', padding: 28, fontFamily: jost, color: '#1C1B18' }}>
        <div style={{ width: '100%', height: 150, background: '#F2EDE3', border: '1px solid #1C1B18', position: 'relative', overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ position: 'absolute', top: 22, left: 30, width: 74, height: 74, borderRadius: '50%', background: '#D5382B' }} />
          <div style={{ position: 'absolute', bottom: 14, right: 62, width: 0, height: 0, borderLeft: '34px solid transparent', borderRight: '34px solid transparent', borderBottom: '58px solid #E8B71A' }} />
          <div style={{ position: 'absolute', top: 18, right: 24, width: 44, height: 44, background: '#2B54A3' }} />
        </div>
        <div style={{ fontWeight: 600, fontSize: 20, lineHeight: 1.1 }}>komposition nr.4</div>
        <div style={{ fontSize: 13, marginTop: 4, opacity: 0.65 }}>dessau ensemble</div>
        <div style={{ position: 'relative', height: 2, background: '#1C1B18', margin: '22px 0 20px' }}>
          <div style={{ position: 'absolute', left: '38%', top: -5, width: 12, height: 12, background: '#E8B71A', border: '1px solid #1C1B18' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
          <div style={{ width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderRight: '18px solid #1C1B18' }} />
          <div style={{ width: 54, height: 54, borderRadius: '50%', background: '#D5382B', display: 'grid', placeItems: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '9px solid transparent', borderBottom: '9px solid transparent', borderLeft: '14px solid #FBF9F4', marginLeft: 3 }} />
          </div>
          <div style={{ width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: '18px solid #1C1B18' }} />
        </div>
      </div>
    </div>
  )
}

export const bauhausMocks = [
  {
    id: 'bauhaus-poster',
    title: '展覧会ポスター',
    kind: 'グラフィック',
    Comp: Poster,
    why: [
      { label: 'かたち', text: '円・三角・四角がそのまま主役。装飾を足すのではなく、基本図形の配置だけで画面をつくるので、要素が少なくても間が持つ。' },
      { label: '色', text: '赤・青・黄の三原色+黒に限定。「何色でも使える」状態をやめると、それだけで統一感が生まれ、安っぽさが消える。' },
      { label: 'フォント', text: '小文字だけの幾何学サンセリフ。バウハウスは「大文字は不要」と考えた。書体の思想までそろえると、世界観が濁らない。' },
    ],
  },
  {
    id: 'bauhaus-chair',
    title: '家具ブランドの商品ページ',
    kind: 'EC / プロダクト',
    Comp: ChairCard,
    why: [
      { label: '余白', text: '罫線で区切られた区画の中に、要素がひとつずつ。詰め込まないことで「機能を語る」誠実さが伝わる。' },
      { label: 'かたち', text: '角丸ゼロ・影ゼロ。飾りをすべて外すと、製品そのものと価格が主役になる。「形は機能に従う」のUI版。' },
      { label: '色', text: 'モノクロの画面に三原色は椅子のイラストだけ。アクセント色は「1箇所に集中」させると効く。' },
    ],
  },
  {
    id: 'bauhaus-player',
    title: '音楽プレーヤーUI',
    kind: 'アプリ',
    Comp: Player,
    why: [
      { label: 'かたち', text: '再生=円、スキップ=三角。アイコンを「図形そのもの」に還元している。意味と形が一致すると、説明がなくても迷わない。' },
      { label: '色', text: '押してほしいボタンだけが赤。三原色を「機能の色分け」に使うと、にぎやかさではなく秩序になる。' },
      { label: 'フォント', text: '曲名も操作もすべて同じ幾何学サンセリフ1書体。書体を増やさないことが、ブランドの一貫性の最短ルート。' },
    ],
  },
]
