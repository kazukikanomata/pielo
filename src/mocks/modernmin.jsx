// モダン・ミニマル系の追加世界観(ユーティリタリアン / ベントーグリッド / 3×3グリッド)
// キャンバス 560×420 で設計
const inter = "'Inter', sans-serif"
const zen = "'Zen Kaku Gothic New', sans-serif"
const mono = "ui-monospace, 'SF Mono', Menlo, monospace"

/* ---------------- ユーティリタリアン ---------------- */
const olive = '#4A5240'

function UtilitarianProduct() {
  const specs = [
    ['MATERIAL', 'CORDURA® 1000D'],
    ['CAPACITY', '20L'],
    ['WEIGHT', '680g'],
    ['ORIGIN', 'JPN'],
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: '#D9D7CE', fontFamily: mono, color: '#23241F', padding: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.12em', borderBottom: '2px solid #23241F', paddingBottom: 10 }}>
        <span>GEARWORKS SUPPLY CO.</span>
        <span>CAT.NO GW-0072</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 24, marginTop: 22 }}>
        <div>
          <div style={{ fontSize: 30, fontWeight: 700, fontFamily: inter, letterSpacing: '-0.01em' }}>CARGO TOTE 20L</div>
          <div style={{ fontSize: 10, marginTop: 6, color: '#5c5e53' }}>MIL-SPEC WEBBING / YKK ZIP</div>
          <table style={{ width: '100%', marginTop: 18, borderCollapse: 'collapse', fontSize: 11 }}>
            <tbody>
              {specs.map(([k, v]) => (
                <tr key={k} style={{ borderTop: '1px solid #9a9c8e' }}>
                  <td style={{ padding: '9px 0', color: '#5c5e53', width: 110 }}>{k}</td>
                  <td style={{ padding: '9px 0', fontWeight: 700 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'stretch' }}>
            <div style={{ background: '#23241F', color: '#D9D7CE', padding: '13px 24px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>ADD TO CART</div>
            <div style={{ border: '1px solid #23241F', padding: '13px 18px', fontSize: 12 }}>¥14,300</div>
          </div>
        </div>
        <div style={{ background: olive, position: 'relative', padding: 14 }}>
          <div style={{ position: 'absolute', top: 10, left: 14, fontSize: 9, color: '#c9cbb9', letterSpacing: '0.14em' }}>FIG.1 — FRONT</div>
          <svg aria-hidden="true" width="172" height="230" viewBox="0 0 172 230" style={{ marginTop: 24 }}>
            <rect x="26" y="60" width="120" height="140" fill="none" stroke="#D9D7CE" strokeWidth="2" />
            <path d="M56 60 v-24 h60 v24" fill="none" stroke="#D9D7CE" strokeWidth="2" />
            <rect x="46" y="90" width="80" height="34" fill="none" stroke="#D9D7CE" strokeWidth="1.4" strokeDasharray="4 3" />
            <line x1="26" y1="150" x2="146" y2="150" stroke="#D9D7CE" strokeWidth="1" />
            <text x="86" y="112" textAnchor="middle" fill="#D9D7CE" fontSize="9" fontFamily="monospace">POCKET A</text>
          </svg>
          <div style={{ position: 'absolute', bottom: 10, right: 14, fontSize: 9, color: '#c9cbb9' }}>SCALE 1:8</div>
        </div>
      </div>
    </div>
  )
}

function UtilitarianApp() {
  const rows = [
    ['0642', '資材の発注', 'DONE'],
    ['0643', '現場写真のアップロード', 'ACTIVE'],
    ['0644', '週次レポート提出', 'HOLD'],
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: '#2B2D27', fontFamily: mono, color: '#D9D7CE', padding: 30 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11 }}>
        <span style={{ fontWeight: 700, letterSpacing: '0.1em' }}>FIELD LOG v2.4</span>
        <span style={{ color: '#8b8e7d' }}>2026-07-08 09:12</span>
      </div>
      <div style={{ marginTop: 16, height: 8, background: 'repeating-linear-gradient(-45deg, #E8B71A 0 10px, #23241F 10px 20px)' }} />
      <div style={{ marginTop: 22, fontSize: 10, color: '#8b8e7d', letterSpacing: '0.14em' }}>TASKS — SITE 04</div>
      {rows.map(([no, title, status]) => (
        <div key={no} style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #4a4d41', padding: '15px 0' }}>
          <span style={{ color: '#8b8e7d', fontSize: 11 }}>#{no}</span>
          <span style={{ flex: 1, fontFamily: zen, fontSize: 14 }}>{title}</span>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', padding: '4px 10px', border: '1px solid', borderColor: status === 'ACTIVE' ? '#E8B71A' : '#8b8e7d', color: status === 'ACTIVE' ? '#E8B71A' : '#8b8e7d' }}>
            {status}
          </span>
        </div>
      ))}
      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#8b8e7d' }}>
        <span>UPLINK: OK</span>
        <span>BATT 82%</span>
        <span>GRID 35.68N 139.76E</span>
      </div>
    </div>
  )
}

export const utilitarianMocks = [
  {
    id: 'utilitarian-product',
    title: 'ギアブランドの商品ページ',
    kind: 'EC / プロダクト',
    Comp: UtilitarianProduct,
    why: [
      { label: 'フォント', text: 'モノスペース(等幅)書体は仕様書・端末の記号。「装飾ではなく記録です」という顔をすることが、この様式の装飾になっている。' },
      { label: '色', text: 'オリーブ・カーキ・炭色は軍用品と作業服の色。目立つためではなく汚れと退色に耐えるための色が、そのまま信頼の記号に転じた。' },
      { label: 'レイアウト', text: '商品写真の代わりに寸法図(FIG.1)を置く。スペック表・型番・縮尺——「測れる情報」だけで構成するのがユーティリタリアンの美学。' },
    ],
  },
  {
    id: 'utilitarian-app',
    title: '現場記録アプリUI',
    kind: 'アプリ',
    Comp: UtilitarianApp,
    why: [
      { label: 'モチーフ', text: '黄と黒の斜めストライプは工事現場の警告テープの引用。危険を知らせる実用の記号を、アクセントカラーとして流用している。' },
      { label: 'かたち', text: '角丸もグラデーションもない。ボタンは1pxの枠線だけ。「壊れにくい道具」の見た目は、装飾を削ることでしか作れない。' },
      { label: 'フォント', text: 'ステータスは[DONE][ACTIVE]と大文字ラベルで表記。人に話しかける文章ではなく、機械が出力したログの体裁を保つ。' },
    ],
  },
]

/* ---------------- ベントーグリッド ---------------- */
const bentoBlue = '#5B7CFA'

function BentoSaaS() {
  const card = { background: '#1D2130', borderRadius: 18, padding: 18, color: '#EDEFF7', border: '1px solid #2c3147' }
  return (
    <div style={{ width: '100%', height: '100%', background: '#14161F', padding: 26, fontFamily: inter }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', color: '#EDEFF7' }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>flowbox</span>
        <span style={{ fontSize: 11, color: '#8b91ad', fontFamily: zen }}>すべての機能が、ひと箱に。</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gridTemplateRows: '150px 120px', gap: 12, marginTop: 18 }}>
        <div style={{ ...card, gridRow: '1 / 3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: zen, fontSize: 13, color: '#8b91ad' }}>稼働率</div>
          <div style={{ fontSize: 54, fontWeight: 800, letterSpacing: '-0.03em' }}>99.9<span style={{ fontSize: 22, color: bentoBlue }}>%</span></div>
          <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 64 }}>
            {[38, 52, 44, 60, 50, 64, 58, 46, 62, 55].map((h, i) => (
              <div key={i} style={{ flex: 1, height: h, borderRadius: 5, background: i === 5 ? bentoBlue : '#2c3147' }} />
            ))}
          </div>
        </div>
        <div style={card}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: bentoBlue, display: 'grid', placeItems: 'center', fontSize: 16 }}>⚡</div>
          <div style={{ fontFamily: zen, fontSize: 13, fontWeight: 700, marginTop: 12 }}>高速同期</div>
          <div style={{ fontFamily: zen, fontSize: 10.5, color: '#8b91ad', marginTop: 4, lineHeight: 1.7 }}>変更は0.3秒で全員へ</div>
        </div>
        <div style={card}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: '#2c3147', display: 'grid', placeItems: 'center', fontSize: 16 }}>🔒</div>
          <div style={{ fontFamily: zen, fontSize: 13, fontWeight: 700, marginTop: 12 }}>SOC 2 準拠</div>
          <div style={{ fontFamily: zen, fontSize: 10.5, color: '#8b91ad', marginTop: 4, lineHeight: 1.7 }}>監査ログを標準装備</div>
        </div>
        <div style={{ ...card, gridColumn: '2 / 4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: zen, fontSize: 13, fontWeight: 700 }}>連携アプリ 120+</div>
            <div style={{ fontFamily: zen, fontSize: 10.5, color: '#8b91ad', marginTop: 4 }}>いまのツールのまま始める</div>
          </div>
          <div style={{ display: 'flex' }}>
            {['#F2578E', '#28B5A6', '#E8B71A', bentoBlue].map((c, i) => (
              <div key={c} style={{ width: 30, height: 30, borderRadius: '50%', background: c, border: '3px solid #1D2130', marginLeft: i ? -9 : 0 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BentoHome() {
  const tile = { background: '#FFFFFF', borderRadius: 20, padding: 16, boxShadow: '0 1px 2px rgba(20,22,31,0.06)' }
  return (
    <div style={{ width: '100%', height: '100%', background: '#EEF0F5', padding: 26, fontFamily: inter, color: '#1D2130' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontFamily: zen, fontWeight: 700, fontSize: 15 }}>おかえりなさい</span>
        <span style={{ fontSize: 11, color: '#8b91ad' }}>19:42</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gridTemplateRows: '140px 122px', gap: 12, marginTop: 16 }}>
        <div style={{ ...tile, gridRow: '1 / 3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: zen, fontSize: 12, color: '#8b91ad' }}>リビング</div>
          <div style={{ fontSize: 58, fontWeight: 800, letterSpacing: '-0.04em' }}>24.5°</div>
          <div style={{ position: 'relative', height: 6, borderRadius: 3, background: '#EEF0F5' }}>
            <div style={{ position: 'absolute', inset: '0 45% 0 0', borderRadius: 3, background: 'linear-gradient(90deg,#5B7CFA,#F2578E)' }} />
          </div>
          <div style={{ fontFamily: zen, fontSize: 11, color: '#8b91ad' }}>設定 25.0° / 冷房</div>
        </div>
        <div style={{ ...tile, background: '#1D2130', color: '#fff' }}>
          <div style={{ fontSize: 20 }}>💡</div>
          <div style={{ fontFamily: zen, fontSize: 12.5, fontWeight: 700, marginTop: 10 }}>照明 4/6</div>
          <div style={{ marginTop: 10, width: 40, height: 22, borderRadius: 11, background: bentoBlue, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 3, right: 3, width: 16, height: 16, borderRadius: '50%', background: '#fff' }} />
          </div>
        </div>
        <div style={tile}>
          <div style={{ fontSize: 20 }}>🎵</div>
          <div style={{ fontFamily: zen, fontSize: 12.5, fontWeight: 700, marginTop: 10 }}>Kitchen FM</div>
          <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 26, marginTop: 10 }}>
            {[10, 18, 12, 24, 16, 20, 9].map((h, i) => (
              <div key={i} style={{ width: 5, height: h, borderRadius: 2, background: bentoBlue }} />
            ))}
          </div>
        </div>
        <div style={{ ...tile, gridColumn: '2 / 4', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 58, height: 58, borderRadius: '50%', background: `conic-gradient(${bentoBlue} 0 68%, #EEF0F5 68% 100%)`, display: 'grid', placeItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800 }}>68%</div>
          </div>
          <div>
            <div style={{ fontFamily: zen, fontSize: 12.5, fontWeight: 700 }}>今日の消費電力</div>
            <div style={{ fontFamily: zen, fontSize: 11, color: '#8b91ad', marginTop: 3 }}>昨日より 12% すくなめ</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const bentoMocks = [
  {
    id: 'bento-saas',
    title: 'SaaSの機能紹介セクション',
    kind: 'Web / LP',
    Comp: BentoSaaS,
    why: [
      { label: 'レイアウト', text: '大小の角丸カードが均一なすき間で敷き詰められる。弁当箱と同じで「仕切り」が主役——1カードに1メッセージ以上入れないのが掟。' },
      { label: 'かたち', text: '外側の角丸が大きく、中の要素ほど角丸が小さい。この入れ子の角丸(コンセントリック)がベントーグリッドの精度感を作る。' },
      { label: '色', text: '背景は暗い無地、カードは一段明るい無地。色で語らず、面積と配置の「間取り」で情報の重要度を語る。' },
    ],
  },
  {
    id: 'bento-home',
    title: 'スマートホームのダッシュボード',
    kind: 'アプリ',
    Comp: BentoHome,
    why: [
      { label: 'レイアウト', text: '温度・照明・音楽・電力が同じ画面に同居しても混乱しないのは、タイルの境界が責任範囲の境界になっているから。' },
      { label: 'かたち', text: '大きな数字(24.5°)をカードいっぱいに置く。ベントーグリッドではタイルの大きさ=情報の優先度で、視線の順路が設計できる。' },
      { label: '余白', text: 'ガター(タイル間のすき間)は12pxで完全に均一。この機械的な等間隔が、多デバイス時代の「整頓された安心感」を生む。' },
    ],
  },
]

/* ---------------- 3×3グリッド ---------------- */
const gridBrown = '#8A6B52'

function GridFeed() {
  const tiles = [
    { bg: '#C7B299', el: 'cup' },
    { bg: '#F3EDE4', el: 'text', label: 'MORNING' },
    { bg: '#A98E70', el: 'beans' },
    { bg: '#EFE6D8', el: 'text', label: 'BREW' },
    { bg: gridBrown, el: 'logo' },
    { bg: '#EFE6D8', el: 'text', label: 'SLOW' },
    { bg: '#B49C7E', el: 'pour' },
    { bg: '#F3EDE4', el: 'text', label: 'DAILY' },
    { bg: '#C7B299', el: 'cup2' },
  ]
  const icon = (el) => {
    if (el === 'logo') return <div style={{ color: '#F3EDE4', fontFamily: inter, fontWeight: 800, fontSize: 15, letterSpacing: '0.2em' }}>KISSA</div>
    if (el === 'beans') return <div style={{ display: 'flex', gap: 6 }}>{[0, 1, 2].map((i) => <div key={i} style={{ width: 13, height: 18, borderRadius: '50%', background: '#5a4632', transform: `rotate(${i * 30 - 30}deg)` }} />)}</div>
    if (el === 'pour') return <svg aria-hidden="true" width="40" height="44" viewBox="0 0 40 44"><path d="M8 6 h18 l6 8 -8 6 M14 24 h14 v12 h-14 z" fill="none" stroke="#4a3a2a" strokeWidth="2" /></svg>
    return <svg aria-hidden="true" width="44" height="36" viewBox="0 0 44 36"><path d="M6 8 h24 v14 a10 10 0 0 1 -20 0 z" fill="none" stroke="#4a3a2a" strokeWidth="2.2" /><path d="M30 11 h4 a5 5 0 0 1 0 10 h-5" fill="none" stroke="#4a3a2a" strokeWidth="2.2" /></svg>
  }
  return (
    <div style={{ width: '100%', height: '100%', background: '#FBF8F2', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, fontFamily: inter }}>
      <div style={{ width: 200 }}>
        <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: '0.16em', color: '#3a2f24' }}>@kissa_tokyo</div>
        <div style={{ fontFamily: zen, fontSize: 11, lineHeight: 1.9, color: '#8a7a66', marginTop: 10 }}>
          9枚をひとつの絵として設計。<br />色調はベージュ〜焦茶に統一し、<br />写真とタイポを交互に置く。
        </div>
        <div style={{ marginTop: 14, display: 'flex', gap: 14, fontSize: 10, color: '#8a7a66', letterSpacing: '0.1em' }}>
          <span><b style={{ color: '#3a2f24' }}>128</b> posts</span>
          <span><b style={{ color: '#3a2f24' }}>24k</b> followers</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridTemplateRows: 'repeat(3, 100px)', gap: 4 }}>
        {tiles.map((t, i) => (
          <div key={i} style={{ background: t.bg, display: 'grid', placeItems: 'center' }}>
            {t.el === 'text' ? (
              <span style={{ fontSize: 10, letterSpacing: '0.34em', color: gridBrown, fontWeight: 700 }}>{t.label}</span>
            ) : (
              icon(t.el)
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function GridPortfolio() {
  const cells = [
    { bg: '#2E2B27', svg: 'peak' },
    { bg: '#3D3A34', svg: 'moon' },
    { bg: '#2E2B27', svg: 'wave' },
    { bg: '#3D3A34', svg: 'wave' },
    { bg: '#D96C3F', svg: 'sun' },
    { bg: '#2E2B27', svg: 'peak' },
    { bg: '#2E2B27', svg: 'moon' },
    { bg: '#3D3A34', svg: 'peak' },
    { bg: '#2E2B27', svg: 'wave' },
  ]
  const art = (kind) => {
    if (kind === 'sun') return <circle cx="50" cy="50" r="24" fill="#2E2B27" />
    if (kind === 'moon') return <path d="M62 30 a26 26 0 1 0 8 34 a20 20 0 0 1 -8 -34" fill="#8f857a" />
    if (kind === 'wave') return <path d="M10 62 q20 -18 40 0 t40 0" fill="none" stroke="#8f857a" strokeWidth="3" />
    return <path d="M14 74 L44 30 L60 52 L74 36 L92 74 z" fill="#8f857a" />
  }
  return (
    <div style={{ width: '100%', height: '100%', background: '#171512', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 34, fontFamily: inter, color: '#E9E2D6' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 98px)', gridTemplateRows: 'repeat(3, 98px)', gap: 6 }}>
        {cells.map((c, i) => (
          <svg aria-hidden="true" key={i} width="98" height="98" viewBox="0 0 100 100" style={{ background: c.bg }}>
            {art(c.svg)}
          </svg>
        ))}
      </div>
      <div style={{ width: 170 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.4em', color: '#8f857a' }}>PORTFOLIO</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '0.04em', marginTop: 12 }}>KEI AOBA</div>
        <div style={{ fontFamily: zen, fontSize: 11, lineHeight: 2, color: '#a99e90', marginTop: 12 }}>
          正方形・等間隔・9マス。<br />1枚でも成立し、9枚で<br />ひとつの風景になる。
        </div>
        <div style={{ marginTop: 16, fontSize: 10, letterSpacing: '0.2em', borderBottom: '1px solid #8f857a', paddingBottom: 5, display: 'inline-block' }}>VIEW GRID —</div>
      </div>
    </div>
  )
}

export const grid33Mocks = [
  {
    id: 'grid33-feed',
    title: 'カフェのフィード設計',
    kind: 'SNS / ブランディング',
    Comp: GridFeed,
    why: [
      { label: 'レイアウト', text: 'すべて正方形・すべて等間隔。1枚ずつ見ても成立し、9枚並ぶと市松模様のリズムが現れる——「二重に読める」設計が3×3の本体。' },
      { label: '色', text: 'ベージュ〜焦茶のトーンに全タイルを揃える。個々の写真の良さより、グリッド全体がひとつの色面に見えることを優先する。' },
      { label: 'フォント', text: '文字タイルは1語だけを字間広めに。写真の「密」とタイポの「疎」を交互に置くことで、視線が升目を巡回する。' },
    ],
  },
  {
    id: 'grid33-portfolio',
    title: '写真家のポートフォリオ',
    kind: 'Web / ギャラリー',
    Comp: GridPortfolio,
    why: [
      { label: 'レイアウト', text: '9マスの中央だけにアクセント色を置く「一点崩し」。完全な均等の中の一箇所の例外が、視線の重心を作る。' },
      { label: 'かたち', text: '山・月・波と抽象度を揃えたモチーフが、マスをまたいで連作になる。グリッドは制約ではなく、連続性を生む譜面。' },
      { label: '色', text: '炭色2種の市松+アクセント1色。タイル自体の明度差を最小にすると、グリッドの「面」としての静けさが際立つ。' },
    ],
  },
]
