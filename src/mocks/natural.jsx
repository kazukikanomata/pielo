// 自然・ナチュラル系(ボヘミアン / シャビーシック / ファームハウス / カワイイ / コケット)
// キャンバス 560×420 で設計
const zen = "'Zen Kaku Gothic New', sans-serif"
const mincho = "'Shippori Mincho', serif"
const marcellus = "'Marcellus', serif"
const pinyon = "'Pinyon Script', cursive"
const fredoka = "'Fredoka', sans-serif"

/* ---------------- ボヘミアン ---------------- */
const terra = '#B25E38'
const bohoSand = '#EBDDC3'

function BohoStore() {
  return (
    <div style={{ width: '100%', height: '100%', background: bohoSand, position: 'relative', overflow: 'hidden', fontFamily: marcellus, color: '#5a3c28' }}>
      <svg aria-hidden="true" width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', top: -40, right: -30 }}>
        <circle cx="100" cy="100" r="44" fill={terra} />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((r) => (
          <path key={r} d="M100 44 q6 -12 0 -24" fill="none" stroke={terra} strokeWidth="3" strokeLinecap="round" transform={`rotate(${r} 100 100)`} />
        ))}
      </svg>
      <svg aria-hidden="true" width="180" height="130" viewBox="0 0 180 130" style={{ position: 'absolute', bottom: 24, left: 30 }}>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${20 + i * 18} 10 a${70 - i * 18} ${70 - i * 18} 0 0 0 ${140 - i * 36} 0`} fill="none" stroke={['#B25E38', '#C99548', '#8A8F59'][i]} strokeWidth="10" strokeLinecap="round" transform="rotate(180 90 60)" />
        ))}
        {[36, 66, 96, 126, 156].map((x) => (
          <line key={x} x1={x} y1="76" x2={x} y2="96" stroke="#8a6a4a" strokeWidth="2" />
        ))}
      </svg>
      <div style={{ position: 'relative', padding: '44px 48px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.44em', color: terra }}>SLOW GOODS STORE</div>
        <div style={{ fontSize: 34, letterSpacing: '0.1em', marginTop: 16, lineHeight: 1.5 }}>旅の途中の、<br />手ざわりを。</div>
        <div style={{ fontFamily: zen, fontSize: 11.5, lineHeight: 2.1, marginTop: 14, color: '#7d5f42', maxWidth: 240 }}>
          モロッコのラグ、オアハカの織り、益子の土。作り手の指の跡が残るものだけを棚に。
        </div>
        <div style={{ marginTop: 18, display: 'inline-block', border: '1.5px solid #5a3c28', borderRadius: 999, padding: '10px 26px', fontSize: 11, letterSpacing: '0.24em' }}>
          棚をながめる —
        </div>
      </div>
    </div>
  )
}

function BohoRetreat() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#8A8F59', display: 'grid', placeItems: 'center', fontFamily: marcellus, color: '#F3ECD9' }}>
      <div style={{ width: 380, textAlign: 'center' }}>
        <svg aria-hidden="true" width="150" height="60" viewBox="0 0 150 60" style={{ display: 'block', margin: '0 auto' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={25 + i * 25} cy="30" r="9" fill={i === 2 ? '#F3ECD9' : 'none'} stroke="#F3ECD9" strokeWidth="1.6" opacity={1 - Math.abs(2 - i) * 0.25} />
          ))}
          <path d="M41 30 a9 9 0 0 1 18 0 z" fill="#F3ECD9" opacity="0.75" />
          <path d="M109 30 a9 9 0 0 0 -18 0 z" fill="#F3ECD9" opacity="0.75" />
        </svg>
        <div style={{ fontSize: 10, letterSpacing: '0.5em' }}>3 DAYS RETREAT</div>
        <div style={{ fontFamily: mincho, fontSize: 28, letterSpacing: '0.2em', marginTop: 14, lineHeight: 1.8 }}>月とヨガと、<br />たき火の話。</div>
        <div style={{ fontFamily: zen, fontSize: 11.5, letterSpacing: '0.14em', lineHeight: 2.1, marginTop: 14, color: '#e0d9bd' }}>
          電波の弱い高原で、呼吸だけを予定に入れる三日間。
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 20, fontFamily: zen, fontSize: 10.5, letterSpacing: '0.14em' }}>
          {['10月 新月の回', '11月 満月の回'].map((t) => (
            <span key={t} style={{ border: '1px solid #F3ECD9', borderRadius: 999, padding: '9px 20px' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export const bohemianMocks = [
  {
    id: 'bohemian-store',
    title: '雑貨ストアのヒーロー',
    kind: 'Web / ヒーロー',
    Comp: BohoStore,
    why: [
      { label: '色', text: 'テラコッタ・マスタード・オリーブの「土の三色」。塗料ではなく土や植物で染めた色の域に収めることが、手仕事の気配の正体。' },
      { label: 'モチーフ', text: '手描きの太陽と、織物の房(フリンジ)を模した虹形。工芸の道具立てを図案化して散らすと、画面が「旅の戦利品の棚」になる。' },
      { label: 'レイアウト', text: '要素をわざと非対称に、余白も不均等に。きっちり整列させないおおらかさが、規格品ではない一点ものの空気を作る。' },
    ],
  },
  {
    id: 'bohemian-retreat',
    title: 'ヨガリトリートの案内',
    kind: 'Web / LP',
    Comp: BohoRetreat,
    why: [
      { label: 'モチーフ', text: '月の満ち欠けのダイアグラムは、時計ではなく自然のリズムで暮らすというボヘミアンの時間観の宣言。' },
      { label: '色', text: 'オリーブ一色の背景に生成りの文字だけ。多色の織物イメージから一転、色を絞ると「静けさ側のボヘミアン」になる。' },
      { label: 'フォント', text: 'セリフと明朝の混植を、字間ゆるめ・行間ひろめで。詰めない組版は「予定を詰めない」というリトリートの約束の写し。' },
    ],
  },
]

/* ---------------- シャビーシック ---------------- */
const dustyRose = '#C99AA4'

function ShabbyRose({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill="none" strokeLinecap="round">
      <circle cx="0" cy="0" r="14" fill={dustyRose} opacity="0.85" />
      <path d="M0 -8 a8 8 0 1 1 -8 8 M0 -3 a4 4 0 1 0 4 4" stroke="#a67680" strokeWidth="1.6" />
      <path d="M12 8 q10 6 18 2 M-12 8 q-10 6 -18 2" stroke="#8fa07a" strokeWidth="2" />
      <ellipse cx="22" cy="6" rx="7" ry="3.4" fill="#8fa07a" transform="rotate(24 22 6)" />
      <ellipse cx="-22" cy="6" rx="7" ry="3.4" fill="#8fa07a" transform="rotate(-24 -22 6)" />
    </g>
  )
}

function ShabbyWedding() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EFE7DC', display: 'grid', placeItems: 'center', fontFamily: marcellus, color: '#6d5a52' }}>
      <div style={{ width: 330, background: '#FAF5EC', boxShadow: '0 1px 0 #d9cbb9, 0 10px 30px -18px rgba(109,90,82,0.5)', padding: '30px 34px', textAlign: 'center', position: 'relative' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 8, border: '1px dashed #cdb9a6' }} />
        <svg aria-hidden="true" width="240" height="54" viewBox="0 0 240 54" style={{ display: 'block', margin: '0 auto', position: 'relative' }}>
          <ShabbyRose x={120} y={26} s={1} />
          <ShabbyRose x={54} y={30} s={0.62} />
          <ShabbyRose x={186} y={30} s={0.62} />
          <path d="M78 32 q18 10 26 2 M136 34 q18 8 28 -2" fill="none" stroke="#8fa07a" strokeWidth="1.4" />
        </svg>
        <div style={{ position: 'relative', fontSize: 10, letterSpacing: '0.4em', marginTop: 12, color: '#a8917f' }}>WEDDING INVITATION</div>
        <div style={{ position: 'relative', fontFamily: pinyon, fontSize: 40, color: '#8c6f66', marginTop: 10 }}>Hana &amp; Itsuki</div>
        <div style={{ position: 'relative', fontFamily: mincho, fontSize: 11.5, letterSpacing: '0.22em', lineHeight: 2.2, marginTop: 10 }}>
          六月七日(日) 午後二時<br />庭園の白いテーブルにて
        </div>
        <div style={{ position: 'relative', marginTop: 12, fontSize: 9.5, letterSpacing: '0.34em', color: '#a8917f' }}>
          R.S.V.P — MAY 10
        </div>
      </div>
    </div>
  )
}

function ShabbyShop() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E6DACB', position: 'relative', overflow: 'hidden', fontFamily: marcellus, color: '#6d5a52' }}>
      <div style={{ position: 'absolute', top: 40, left: 46, width: 250 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.4em', color: '#a8917f' }}>BROCANTE &amp; ANTIQUES</div>
        <div style={{ fontFamily: pinyon, fontSize: 46, color: '#8c6f66', marginTop: 12 }}>Grise Souris</div>
        <div style={{ fontFamily: mincho, fontSize: 11.5, letterSpacing: '0.16em', lineHeight: 2.2, marginTop: 12 }}>
          白く塗られて、少し剥がれて。<br />前の持ち主の時間ごと、お譲りします。
        </div>
        <div style={{ marginTop: 18, display: 'inline-block', background: dustyRose, color: '#FAF5EC', borderRadius: 3, padding: '10px 24px', fontSize: 10.5, letterSpacing: '0.26em' }}>
          今週の入荷 —
        </div>
      </div>
      <div style={{ position: 'absolute', right: 44, top: 60, width: 190, height: 250, background: '#F5EDE0', boxShadow: 'inset 0 0 0 1px #cdb9a6, 6px 8px 0 -2px #d5c6b2', display: 'grid', placeItems: 'center' }}>
        <svg aria-hidden="true" width="130" height="190" viewBox="0 0 130 190">
          <ellipse cx="65" cy="88" rx="46" ry="66" fill="none" stroke="#a8917f" strokeWidth="2" />
          <ellipse cx="65" cy="88" rx="38" ry="58" fill="none" stroke="#cdb9a6" strokeWidth="1" />
          <path d="M65 26 q8 -10 16 -4 q-6 8 -16 4 q-8 -10 -16 -4 q6 8 16 4" fill={dustyRose} opacity="0.8" />
          <path d="M30 150 q16 14 35 14 q19 0 35 -14" fill="none" stroke="#a8917f" strokeWidth="1.6" />
          <text x="65" y="96" textAnchor="middle" fontFamily="Pinyon Script" fontSize="20" fill="#8c6f66">mirror</text>
          <text x="65" y="116" textAnchor="middle" fontFamily="Marcellus" fontSize="8" letterSpacing="2" fill="#a8917f">FRANCE · 1920s</text>
        </svg>
      </div>
    </div>
  )
}

export const shabbychicMocks = [
  {
    id: 'shabbychic-wedding',
    title: 'ウェディングの招待状',
    kind: '印刷物 / 招待状',
    Comp: ShabbyWedding,
    why: [
      { label: '色', text: 'くすんだローズとセージグリーン、紙は真っ白ではなく生成り。一度日に焼けて色が抜けたような「退色後の色」で統一する。' },
      { label: 'モチーフ', text: '主役は満開ではなく、ほころびかけの薔薇。完璧な花より「時間を含んだ花」がシャビーシックのロマンティシズム。' },
      { label: '質感', text: '内側の破線の枠は、手縫いのステッチの写し。印刷物にも針仕事の気配を持ち込むのがこの様式の手癖。' },
    ],
  },
  {
    id: 'shabbychic-shop',
    title: 'アンティークショップのサイト',
    kind: 'Web / ヒーロー',
    Comp: ShabbyShop,
    why: [
      { label: '質感', text: '商品カードの縁のずれた影は、白ペンキが剥がれて下地が覗く家具の再現。新品の均質さを、わざと崩すのが信条。' },
      { label: 'フォント', text: '銅版スクリプトで店名を、細い大文字で産地と年代を。ラベルの文字組そのものが「鑑定書」の顔をしている。' },
      { label: 'かたち', text: '楕円の鏡、曲線の花——直角をなるべく減らす。角の取れたかたちは、長く使われて角が丸くなった道具の隠喩。' },
    ],
  },
]

/* ---------------- ファームハウス ---------------- */
const barnBrown = '#7A6A52'

function FarmhouseBakery() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F2EDE2', position: 'relative', overflow: 'hidden', fontFamily: marcellus, color: '#3f382c' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: '0 0 auto 0', height: 10, background: 'repeating-linear-gradient(90deg, #3f382c 0 26px, transparent 26px 52px)' }} />
      <div style={{ textAlign: 'center', paddingTop: 52 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.44em', color: barnBrown }}>STONE MILL — EST. 1928</div>
        <svg aria-hidden="true" width="200" height="58" viewBox="0 0 200 58" style={{ margin: '14px auto 0', display: 'block' }}>
          {[0, 1].map((side) => (
            <g key={side} transform={side ? 'translate(200 0) scale(-1 1)' : undefined}>
              <path d="M40 50 q-4 -34 14 -46" fill="none" stroke={barnBrown} strokeWidth="2" />
              {[0, 1, 2, 3].map((i) => (
                <ellipse key={i} cx={46 + i * 3.4} cy={42 - i * 10.5} rx="3.2" ry="7" fill={barnBrown} transform={`rotate(${-24 - i * 6} ${46 + i * 3.4} ${42 - i * 10.5})`} />
              ))}
            </g>
          ))}
          <circle cx="100" cy="30" r="17" fill="none" stroke="#3f382c" strokeWidth="2" />
          <path d="M100 13 v34 M83 30 h34 M88 18 l24 24 M112 18 l-24 24" stroke="#3f382c" strokeWidth="1.4" />
        </svg>
        <div style={{ fontSize: 36, letterSpacing: '0.12em', marginTop: 14, fontWeight: 400 }}>WHEAT &amp; CO.</div>
        <div style={{ fontFamily: pinyon, fontSize: 25, color: barnBrown, marginTop: 6 }}>fresh bread, every morning</div>
        <div style={{ fontFamily: zen, fontSize: 11, letterSpacing: '0.2em', lineHeight: 2.1, marginTop: 12, color: '#6e6450' }}>
          薪窯・国産小麦・添加物なし。<br />焼き上がりは 7:00 と 11:00。
        </div>
        <div style={{ marginTop: 16, display: 'inline-block', background: '#3f382c', color: '#F2EDE2', padding: '11px 28px', fontSize: 10.5, letterSpacing: '0.3em' }}>
          本日のパン —
        </div>
      </div>
    </div>
  )
}

function FarmhouseJam() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#D9C9AC', display: 'grid', placeItems: 'center', fontFamily: marcellus }}>
      <div style={{ width: 300, background: '#F5EFE1', padding: 8, boxShadow: '0 14px 30px -18px rgba(63,56,44,0.6)' }}>
        <div aria-hidden="true" style={{ height: 26, background: 'repeating-conic-gradient(#C0503C 0% 25%, #F5EFE1 0% 50%) 0 0 / 18px 18px', opacity: 0.85 }} />
        <div style={{ border: '1.5px solid #3f382c', borderTop: 'none', padding: '20px 24px', textAlign: 'center', color: '#3f382c' }}>
          <div style={{ fontSize: 9, letterSpacing: '0.4em', color: barnBrown }}>SMALL BATCH · No.27</div>
          <div style={{ fontSize: 26, letterSpacing: '0.14em', marginTop: 10 }}>STRAWBERRY</div>
          <div style={{ fontFamily: pinyon, fontSize: 24, color: '#C0503C', marginTop: 2 }}>slow-cooked jam</div>
          <svg aria-hidden="true" width="120" height="20" viewBox="0 0 120 20" style={{ display: 'block', margin: '8px auto 0' }}>
            <path d="M8 12 q22 -12 52 -2 t52 0" fill="none" stroke={barnBrown} strokeWidth="1.4" strokeDasharray="4 3" />
          </svg>
          <div style={{ fontFamily: zen, fontSize: 10.5, letterSpacing: '0.18em', lineHeight: 2, marginTop: 8, color: '#6e6450' }}>
            砂糖は果実の半分だけ。<br />agata farm・長野県
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 10, fontSize: 9, letterSpacing: '0.26em', color: barnBrown }}>
            <span>NET 140g</span><span>·</span><span>2026 SUMMER</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const farmhouseMocks = [
  {
    id: 'farmhouse-bakery',
    title: 'ベーカリーのヒーロー',
    kind: 'Web / ヒーロー',
    Comp: FarmhouseBakery,
    why: [
      { label: 'モチーフ', text: '麦の穂のリースと水車のマーク、そして「EST. 1928」。創業年の明記はファームハウスの定番で、新しさより続いてきたことを誇る。' },
      { label: 'フォント', text: '看板職人のセリフ大文字+筆記体の組み合わせは、田舎の店先のサインペインティングの文法そのまま。' },
      { label: '色', text: '生成り・小麦・墨の3色に絞り、彩度の高い色は入れない。素材の色だけで組むと「無添加」の主張が視覚でも通る。' },
    ],
  },
  {
    id: 'farmhouse-jam',
    title: '自家製ジャムのラベル',
    kind: 'パッケージ',
    Comp: FarmhouseJam,
    why: [
      { label: '質感', text: '上端の赤いギンガムチェックは、瓶の蓋にかぶせる布の引用。台所の記号をラベルに縫い込むと、工場ではなく「誰かの台所」の顔になる。' },
      { label: 'レイアウト', text: '中央揃えで、産地・分量・時期まで律儀に書く。情報を隠さない実直な文字組が、手作りの信頼の担保になる。' },
      { label: 'モチーフ', text: '点線の波は手縫いのステッチ兼、煮詰めた鍋の湯気。飾り罫ひとつにも「手数の跡」を選ぶのがファームハウス。' },
    ],
  },
]

/* ---------------- カワイイ ---------------- */
const kawaiiPink = '#F48FB8'

function KawaiiSweets() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FDEFF4', position: 'relative', overflow: 'hidden', fontFamily: fredoka, color: '#7a5a66' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 34px 0' }}>
        <div style={{ fontFamily: zen, fontWeight: 700, fontSize: 16, color: '#e0709d' }}>ぷりんの森</div>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center', fontSize: 16, boxShadow: '0 3px 0 #f3cddc' }}>🛒</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 30 }}>
        {[
          ['#FBE3A2', '#E8A25E', 'カスタード', '¥380'],
          ['#F9C6D8', '#E0709D', 'いちご', '¥420'],
          ['#C9E7CE', '#7FB78B', '抹茶', '¥420'],
        ].map(([body, top, name, price]) => (
          <div key={name} style={{ width: 140, background: '#fff', borderRadius: 26, padding: '18px 14px', textAlign: 'center', boxShadow: '0 5px 0 #f3cddc' }}>
            <svg aria-hidden="true" width="84" height="72" viewBox="0 0 84 72" style={{ display: 'block', margin: '0 auto' }}>
              <path d="M14 34 q0 -26 28 -26 q28 0 28 26 l-4 24 q-1 8 -9 8 h-30 q-8 0 -9 -8 z" fill={body} />
              <path d="M14 32 q10 10 18 0 q8 12 20 2 q10 8 18 -2 l0 4 q-8 10 -18 2 q-12 10 -20 -2 q-8 10 -18 0 z" fill={top} />
              <circle cx="32" cy="46" r="3.4" fill="#4a3a3a" />
              <circle cx="52" cy="46" r="3.4" fill="#4a3a3a" />
              <path d="M38 54 q4 4 8 0" fill="none" stroke="#4a3a3a" strokeWidth="2" strokeLinecap="round" />
              <circle cx="24" cy="52" r="3.6" fill={kawaiiPink} opacity="0.55" />
              <circle cx="60" cy="52" r="3.6" fill={kawaiiPink} opacity="0.55" />
            </svg>
            <div style={{ fontFamily: zen, fontWeight: 700, fontSize: 13, marginTop: 8 }}>{name}</div>
            <div style={{ marginTop: 6, display: 'inline-block', background: '#FDEFF4', borderRadius: 999, padding: '5px 14px', fontSize: 12, fontWeight: 600, color: '#e0709d' }}>{price}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 26 }}>
        <span style={{ display: 'inline-block', background: kawaiiPink, color: '#fff', fontFamily: zen, fontWeight: 700, fontSize: 13, borderRadius: 999, padding: '13px 34px', boxShadow: '0 5px 0 #d67297' }}>
          きょうのぷりんを選ぶ ♡
        </span>
      </div>
    </div>
  )
}

function KawaiiStationery() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E3F2F7', position: 'relative', overflow: 'hidden', fontFamily: fredoka, color: '#5a6a78' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        {[
          [96, 90, 1], [430, 70, 1.25], [250, 52, 0.8],
        ].map(([x, y, s], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            <path d="M-36 10 a14 14 0 0 1 6 -26 a18 18 0 0 1 34 -8 a16 16 0 0 1 26 12 a13 13 0 0 1 -4 22 z" fill="#fff" />
            <circle cx="-8" cy="-4" r="2.6" fill="#5a6a78" />
            <circle cx="8" cy="-4" r="2.6" fill="#5a6a78" />
            <path d="M-4 4 q4 4 8 0" fill="none" stroke="#5a6a78" strokeWidth="2" strokeLinecap="round" />
            <circle cx="-16" cy="2" r="3" fill={kawaiiPink} opacity="0.5" />
            <circle cx="16" cy="2" r="3" fill={kawaiiPink} opacity="0.5" />
          </g>
        ))}
        {[
          [180, 150], [390, 170], [80, 210], [480, 240],
        ].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y - 8} l2.6 5 5 2.6 -5 2.6 -2.6 5 -2.6 -5 -5 -2.6 5 -2.6 z`} fill="#F8D477" />
        ))}
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', marginTop: 168 }}>
        <div style={{ display: 'inline-block', background: '#fff', borderRadius: 30, padding: '26px 44px', boxShadow: '0 6px 0 #c9dfe8' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.3em', color: '#8fa8b8' }}>NEW ITEMS</div>
          <div style={{ fontFamily: zen, fontWeight: 700, fontSize: 24, color: '#4a5a68', marginTop: 8 }}>
            ふわふわ文具、<span style={{ color: '#e0709d' }}>やっと入荷。</span>
          </div>
          <div style={{ fontFamily: zen, fontSize: 11.5, marginTop: 10, lineHeight: 1.9, color: '#8fa8b8' }}>
            くもさんペンケースと、おほしさまふせん。
          </div>
        </div>
      </div>
    </div>
  )
}

export const kawaiiMocks = [
  {
    id: 'kawaii-sweets',
    title: 'スイーツショップのアプリ',
    kind: 'アプリ / EC',
    Comp: KawaiiSweets,
    why: [
      { label: 'かたち', text: 'プリンに目と口とほっぺ。商品への「顔の付与」はカワイイの中核技術で、食べ物が友だちに変わり、選ぶ行為が対話になる。' },
      { label: '色', text: 'パステル+白の高明度・低コントラスト。刺激を徹底的に抜いた色は、赤ちゃんのものの色——庇護欲を誘う設計。' },
      { label: 'かたち', text: 'ボタンの下の色つきの影は「ぷにっ」とした厚みの表現。すべての角を丸め、押したら柔らかそうな物性を与える。' },
    ],
  },
  {
    id: 'kawaii-stationery',
    title: '文具ブランドのバナー',
    kind: 'バナー / 広告',
    Comp: KawaiiStationery,
    why: [
      { label: 'モチーフ', text: '雲にも星にも顔がある。無生物まで擬人化して世界全体を「見守ってくれる側」に回すのが、カワイイの世界観の作り方。' },
      { label: 'フォント', text: '丸ゴシック+ひらがな多め。「入荷しました」ではなく「やっと入荷。」——幼い語彙と口語のリズムまで含めてデザイン。' },
      { label: '色', text: '水色ベースにピンクを一滴。カワイイ=ピンク一色ではなく、パステル同士の掛け合わせで甘さの度数を調整する。' },
    ],
  },
]

/* ---------------- コケット ---------------- */
const coqPink = '#E58FA6'

function CoquetteBow({ x, y, s = 1, color = coqPink }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 0 C -10 -14 -34 -16 -36 -2 C -37 10 -14 10 0 0 Z" fill={color} />
      <path d="M0 0 C 10 -14 34 -16 36 -2 C 37 10 14 10 0 0 Z" fill={color} />
      <path d="M-3 2 q-8 14 -14 18 l7 2 q8 -10 10 -18 M3 2 q8 14 14 18 l-7 2 q-8 -10 -10 -18" fill={color} />
      <circle cx="0" cy="0" r="5" fill={color} stroke="#fff" strokeWidth="1.4" />
    </g>
  )
}

function CoquetteCosme() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FBF3F4', position: 'relative', overflow: 'hidden', fontFamily: marcellus, color: '#7a5560' }}>
      <svg aria-hidden="true" width="560" height="70" viewBox="0 0 560 70" style={{ position: 'absolute', top: 0 }}>
        <CoquetteBow x={280} y={38} s={1.15} />
        <path d="M40 40 q110 26 204 4 M520 40 q-110 26 -204 4" fill="none" stroke={coqPink} strokeWidth="1.6" strokeDasharray="1 7" strokeLinecap="round" />
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', marginTop: 104 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.5em', color: '#c08a99' }}>LIP MOUSSE — 03</div>
        <div style={{ fontFamily: pinyon, fontSize: 52, color: '#b06a80', marginTop: 10 }}>mon chéri</div>
        <div style={{ fontFamily: mincho, fontSize: 12, letterSpacing: '0.3em', marginTop: 12, lineHeight: 2.2 }}>
          リボンをほどくように、ひと塗り。
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 18 }}>
          {['#E58FA6', '#D96D8C', '#C4536F', '#EFB7C4'].map((c) => (
            <span key={c} style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: '2px solid #fff', boxShadow: '0 1px 4px rgba(122,85,96,0.3)' }} />
          ))}
        </div>
        <div style={{ marginTop: 20, display: 'inline-block', border: `1px solid ${coqPink}`, borderRadius: 999, padding: '11px 32px', fontSize: 10.5, letterSpacing: '0.3em', background: '#fff' }}>
          ¥2,970 — ADD TO BAG
        </div>
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 18, left: 0, right: 0, textAlign: 'center', color: '#e5bcc7', fontSize: 13, letterSpacing: '0.9em' }}>
        ····♡····
      </div>
    </div>
  )
}

function CoquetteBallet() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F6E7EA', display: 'grid', placeItems: 'center', fontFamily: marcellus, color: '#6d4a56' }}>
      <div style={{ width: 360, background: '#FDF8F7', borderRadius: 16, padding: '30px 36px', textAlign: 'center', boxShadow: '0 20px 44px -30px rgba(109,74,86,0.55)', position: 'relative' }}>
        <svg aria-hidden="true" width="70" height="46" viewBox="0 0 70 46" style={{ display: 'block', margin: '0 auto' }}>
          <CoquetteBow x={35} y={20} s={0.8} color="#D96D8C" />
        </svg>
        <div style={{ fontSize: 10, letterSpacing: '0.44em', color: '#c08a99', marginTop: 6 }}>BALLET STUDIO</div>
        <div style={{ fontFamily: pinyon, fontSize: 38, color: '#b06a80', marginTop: 8 }}>Petite Étoile</div>
        <div style={{ fontFamily: mincho, fontSize: 11.5, letterSpacing: '0.2em', lineHeight: 2.2, marginTop: 10 }}>
          おとなのための、はじめてのバレエ。<br />火曜と土曜、鏡のある白い部屋で。
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 16, fontFamily: zen, fontSize: 10.5 }}>
          {['体験レッスン ¥1,000', 'スケジュール'].map((t, i) => (
            <span key={t} style={{ borderRadius: 999, padding: '9px 20px', letterSpacing: '0.12em', background: i ? '#fff' : '#D96D8C', color: i ? '#b06a80' : '#fff', border: i ? '1px solid #ecc9d2' : 'none' }}>
              {t}
            </span>
          ))}
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', top: 12, left: 16, right: 16, borderTop: '1px dotted #ecc9d2' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: 12, left: 16, right: 16, borderBottom: '1px dotted #ecc9d2' }} />
      </div>
    </div>
  )
}

export const coquetteMocks = [
  {
    id: 'coquette-cosme',
    title: 'リップコスメのEC',
    kind: 'EC / プロダクト',
    Comp: CoquetteCosme,
    why: [
      { label: 'モチーフ', text: '画面の頂点にリボン。コケットではリボンが王冠の位置に来る——「結ばれたもの=贈り物=自分を贈る」という記号の三段活用。' },
      { label: '色', text: '白にピンクの濃淡だけ。パールのドット線や♡の飾り罫も同系色に沈め、甘さを彩度ではなく「密度」で盛る。' },
      { label: 'フォント', text: '銅版スクリプトの小文字フランス語。読めなくてもいい——外国語の筆記体は「日記の鍵」のような親密さの演出。' },
    ],
  },
  {
    id: 'coquette-ballet',
    title: 'バレエ教室の案内カード',
    kind: 'Web / カード',
    Comp: CoquetteBallet,
    why: [
      { label: 'モチーフ', text: 'トウシューズのリボンを結び直したようなボウが紋章代わり。バレエコアはコケットの隣人で、身体の記号を装飾に転用する。' },
      { label: '質感', text: '点線の飾り罫はレースの縁の翻訳。本物のレース画像を貼るより、抽象化した点線のほうが上品に「乙女」を伝える。' },
      { label: '余白', text: 'カードの中は意外と余白が広い。甘い要素は小さく散らし、白場で薄める——甘さの濃度管理がコケットの品位を決める。' },
    ],
  },
]
