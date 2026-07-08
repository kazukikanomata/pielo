// クラシック・装飾系 後半(フィリグリー / アールヌーボー / アカンサス)
// キャンバス 560×420 で設計
const zen = "'Zen Kaku Gothic New', sans-serif"
const mincho = "'Shippori Mincho', serif"
const cinzel = "'Cinzel', serif"
const marcellus = "'Marcellus', serif"
const pinyon = "'Pinyon Script', cursive"

/* ---------------- フィリグリー ---------------- */
const filGold = '#C8A85C'

function FiligreeCurl({ flip = false }) {
  return (
    <g transform={flip ? 'scale(-1,1)' : undefined} fill="none" stroke={filGold} strokeWidth="1.3" strokeLinecap="round">
      <path d="M0 0 q34 -6 44 -30 q6 -16 -6 -20 q-12 -2 -10 10 q2 10 14 8" />
      <path d="M0 0 q30 8 52 -2" opacity="0.7" />
      <circle cx="46" cy="-44" r="2" fill={filGold} stroke="none" />
    </g>
  )
}

function FiligreeEmblem() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#12201E', display: 'grid', placeItems: 'center', fontFamily: cinzel, color: '#E7DCC2' }}>
      <div style={{ textAlign: 'center' }}>
        <svg aria-hidden="true" width="230" height="200" viewBox="0 0 230 200">
          <circle cx="115" cy="100" r="66" fill="none" stroke={filGold} strokeWidth="1.2" />
          <circle cx="115" cy="100" r="58" fill="none" stroke={filGold} strokeWidth="0.7" opacity="0.7" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
            <g key={r} transform={`rotate(${r} 115 100)`}>
              <path d="M115 34 q10 -14 0 -26 q-10 12 0 26" fill="none" stroke={filGold} strokeWidth="1.1" />
              <circle cx="115" cy="12" r="1.6" fill={filGold} />
              <path d="M109 36 q-8 -8 -4 -16 M121 36 q8 -8 4 -16" fill="none" stroke={filGold} strokeWidth="0.8" opacity="0.8" />
            </g>
          ))}
          <text x="115" y="112" textAnchor="middle" fontSize="34" fontFamily="Pinyon Script" fill="#E7DCC2">Aria</text>
        </svg>
        <div style={{ fontSize: 12, letterSpacing: '0.5em', marginTop: 10 }}>ARIA FINE JEWELRY</div>
        <div style={{ fontFamily: mincho, fontSize: 11, letterSpacing: '0.3em', marginTop: 12, color: '#a89a76' }}>
          銀線一本から、手で編む装身具
        </div>
      </div>
    </div>
  )
}

function FiligreeInvite() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EFE8D8', display: 'grid', placeItems: 'center', fontFamily: marcellus, color: '#3d3527' }}>
      <div style={{ width: 340, background: '#F7F2E6', padding: '30px 34px', textAlign: 'center', position: 'relative', border: `1px solid ${filGold}` }}>
        <svg aria-hidden="true" width="270" height="34" viewBox="0 0 270 34" style={{ display: 'block', margin: '0 auto' }}>
          <g transform="translate(135 26)"><FiligreeCurl /><FiligreeCurl flip /></g>
          <circle cx="135" cy="10" r="2.4" fill="none" stroke={filGold} strokeWidth="1" />
        </svg>
        <div style={{ fontSize: 10, letterSpacing: '0.44em', marginTop: 14, color: '#8f7f58' }}>YOU ARE INVITED</div>
        <div style={{ fontFamily: pinyon, fontSize: 40, marginTop: 10, color: '#3d3527' }}>Salon de Printemps</div>
        <div style={{ fontFamily: mincho, fontSize: 11.5, letterSpacing: '0.24em', lineHeight: 2.2, marginTop: 12 }}>
          春の新作披露の夕べ<br />四月十八日(土) 十七時より
        </div>
        <svg aria-hidden="true" width="270" height="34" viewBox="0 0 270 34" style={{ display: 'block', margin: '14px auto 0', transform: 'scaleY(-1)' }}>
          <g transform="translate(135 26)"><FiligreeCurl /><FiligreeCurl flip /></g>
        </svg>
        <div style={{ position: 'absolute', inset: 5, border: `1px solid ${filGold}`, opacity: 0.5, pointerEvents: 'none' }} />
      </div>
    </div>
  )
}

export const filigreeMocks = [
  {
    id: 'filigree-emblem',
    title: 'ジュエリーブランドのエンブレム',
    kind: 'ブランド / ロゴ',
    Comp: FiligreeEmblem,
    why: [
      { label: 'かたち', text: '1px前後の極細の線だけで渦と葉を編む。金線細工(フィリグリー)は「細いほど手間=貴い」という工芸の論理の視覚化。' },
      { label: 'レイアウト', text: '8方向の完全な回転対称。レース編みと同じで、繰り返しの規則正しさが手仕事の精度を証明する。' },
      { label: '色', text: '深い緑の闇に、金線のみ。面で塗る金は成金、線で引く金は細工——同じ金色でも太さが品位を分ける。' },
    ],
  },
  {
    id: 'filigree-invite',
    title: '展示会の招待状',
    kind: '印刷物 / 招待状',
    Comp: FiligreeInvite,
    why: [
      { label: 'モチーフ', text: '上下対称の蔓飾り(フローリッシュ)はカリグラフィのペン運びの延長。文字と装飾が同じ「線の芸」でできている。' },
      { label: '余白', text: '装飾は上下の帯だけに閉じ込め、中央は静かに保つ。フィリグリーは全面を覆わず「縁を飾る」ことで主役を立てる。' },
      { label: 'フォント', text: '銅版画由来のスクリプト体は、細い線の装飾と筆圧の文法を共有する。書体と飾りの線幅を揃えるのが上品さの鍵。' },
    ],
  },
]

/* ---------------- アールヌーボー ---------------- */
const nouveauGreen = '#7A8B4C'
const nouveauLilac = '#A08BB0'

function NouveauPoster() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EFE9D6', display: 'grid', placeItems: 'center', fontFamily: marcellus, overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: 300, height: 372 }}>
        <svg aria-hidden="true" width="300" height="372" viewBox="0 0 300 372" style={{ position: 'absolute', inset: 0 }}>
          <path d="M20 360 V150 a130 130 0 0 1 260 0 V360" fill="#E3DAC0" stroke={nouveauGreen} strokeWidth="2.5" />
          <path d="M34 360 V152 a116 116 0 0 1 232 0 V360" fill="none" stroke={nouveauGreen} strokeWidth="1" opacity="0.6" />
          <path d="M20 360 q40 -80 10 -150 q-24 -56 30 -84" fill="none" stroke={nouveauGreen} strokeWidth="3" strokeLinecap="round" />
          <path d="M280 360 q-40 -80 -10 -150 q24 -56 -30 -84" fill="none" stroke={nouveauGreen} strokeWidth="3" strokeLinecap="round" />
          {[
            [52, 150, 1],
            [248, 150, -1],
            [40, 250, 1],
            [260, 250, -1],
          ].map(([x, y, f], i) => (
            <g key={i} transform={`translate(${x} ${y}) scale(${f},1)`}>
              <path d="M0 0 q18 -8 22 -26" fill="none" stroke={nouveauGreen} strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="24" cy="-30" rx="7" ry="11" fill={nouveauLilac} opacity="0.9" />
              <circle cx="24" cy="-30" r="2.6" fill="#EFE9D6" />
            </g>
          ))}
          <circle cx="150" cy="140" r="56" fill={nouveauLilac} opacity="0.28" />
          <path d="M150 92 q30 24 0 56 q-30 -32 0 -56" fill={nouveauGreen} opacity="0.75" />
          <path d="M150 196 q-44 -6 -64 22 M150 196 q44 -6 64 22" fill="none" stroke={nouveauGreen} strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 226, textAlign: 'center', color: '#4c4a33' }}>
          <div style={{ fontSize: 24, letterSpacing: '0.3em' }}>JARDIN</div>
          <div style={{ fontFamily: mincho, fontSize: 12, letterSpacing: '0.34em', marginTop: 8 }}>温室植物園 · 夜間開園</div>
          <div style={{ fontFamily: zen, fontSize: 10, letterSpacing: '0.26em', marginTop: 12, color: '#84805f' }}>
            五月 — 蘭と睡蓮の宵
          </div>
        </div>
      </div>
    </div>
  )
}

function NouveauSalon() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#2E3324', color: '#EAE3CB', position: 'relative', overflow: 'hidden', fontFamily: marcellus }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <path d="M-20 420 Q120 300 60 180 Q10 80 140 40" fill="none" stroke={nouveauGreen} strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <path d="M60 180 q50 -10 66 -50" fill="none" stroke={nouveauGreen} strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="132" cy="122" rx="9" ry="15" fill={nouveauLilac} />
        <path d="M580 420 Q460 320 510 200 Q550 110 440 60" fill="none" stroke={nouveauGreen} strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <path d="M510 200 q-50 -10 -66 -50" fill="none" stroke={nouveauGreen} strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="438" cy="142" rx="9" ry="15" fill={nouveauLilac} />
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', paddingTop: 66 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.44em', color: nouveauLilac }}>SALON DE THÉ</div>
        <div style={{ fontSize: 34, letterSpacing: '0.22em', marginTop: 16 }}>Libellule</div>
        <div style={{ fontFamily: mincho, fontSize: 12.5, letterSpacing: '0.3em', marginTop: 12, color: '#c3bb9c' }}>
          蜻蛉の羽のような、菓子と茶を。
        </div>
        <div style={{ margin: '26px auto 0', width: 300, borderTop: `1px solid ${nouveauGreen}`, paddingTop: 18, fontFamily: zen, fontSize: 11, letterSpacing: '0.2em', display: 'flex', justifyContent: 'space-between' }}>
          <span>本日の菓子 …… ¥980</span>
          <span>薫る緑茶 …… ¥760</span>
        </div>
        <div style={{ marginTop: 26, display: 'inline-block', border: `1px solid ${nouveauLilac}`, borderRadius: '50%', padding: '16px 30px', fontSize: 10.5, letterSpacing: '0.3em', color: nouveauLilac }}>
          予約する
        </div>
      </div>
    </div>
  )
}

export const artnouveauMocks = [
  {
    id: 'artnouveau-poster',
    title: '植物園のポスター',
    kind: 'ポスター',
    Comp: NouveauPoster,
    why: [
      { label: 'かたち', text: 'アーチ窓と、鞭がしなるような蔓の曲線(ウィップラッシュ)。直線を憎み、あらゆる枠を植物の運動で溶かすのがヌーボーの文法。' },
      { label: 'モチーフ', text: '蘭・睡蓮・蜻蛉——工業化の時代に、あえて温室の生き物を持ち込む。自然は装飾の素材ではなく様式の思想そのもの。' },
      { label: '色', text: 'くすんだ苔緑と藤色は、印刷石版(リトグラフ)の淡いインクの記憶。原色を避けた「植物の色域」が時代の匂いを作る。' },
    ],
  },
  {
    id: 'artnouveau-salon',
    title: 'ティーサロンのサイト',
    kind: 'Web / ヒーロー',
    Comp: NouveauSalon,
    why: [
      { label: 'かたち', text: '画面の両端から蔓が伸びてフレームになる。装飾が「枠の外」から侵入してくる構図は、ミュシャのポスターの骨法。' },
      { label: 'レイアウト', text: 'ボタンまで楕円。四角い箱を置いた瞬間にヌーボーは死ぬ——UIの部品も曲線の文法に従わせる徹底が世界観を守る。' },
      { label: 'フォント', text: '有機的な骨格のセリフ体をゆったり組む。文字も蔓の一部として、曲線のリズムに参加させる。' },
    ],
  },
]

/* ---------------- アカンサス ---------------- */
const acaGreen = '#5C6B45'
const acaStone = '#D8D2C2'

function AcanthusLeaf({ x, y, s = 1, flip = false, color = acaGreen }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s},${s})`} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M0 0 Q-6 -34 14 -58 Q30 -76 24 -96 q-2 -8 -10 -10" />
      <path d="M2 -18 q-14 -4 -20 -18 M6 -38 q-16 -2 -24 -14 M12 -56 q-14 0 -22 -10" />
      <path d="M2 -18 q12 -8 14 -22 M8 -44 q12 -6 12 -20" strokeWidth="1.4" opacity="0.8" />
    </g>
  )
}

function AcanthusWallpaper() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#2F3A28', position: 'relative', overflow: 'hidden', fontFamily: marcellus, color: '#E5E0CE' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0, opacity: 0.85 }}>
        {[
          [60, 400, 1.3, false],
          [150, 430, 1.1, true],
          [480, 410, 1.4, true],
          [420, 440, 1.0, false],
          [540, 240, 0.9, true],
          [30, 220, 0.9, false],
        ].map(([x, y, s, f], i) => (
          <AcanthusLeaf key={i} x={x} y={y} s={s} flip={f} color="#8FA06B" />
        ))}
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', paddingTop: 96 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.5em', color: '#A9B584' }}>WALLPAPER &amp; TEXTILE</div>
        <div style={{ fontSize: 32, letterSpacing: '0.26em', marginTop: 16 }}>ACANTHUS &amp; CO.</div>
        <div style={{ fontFamily: mincho, fontSize: 12, letterSpacing: '0.28em', lineHeight: 2.2, marginTop: 16, color: '#c9c4ab' }}>
          二千年、飽きられなかった葉がある。<br />壁一面の唐草を、あなたの部屋に。
        </div>
        <div style={{ marginTop: 24, display: 'inline-block', borderTop: '1px solid #A9B584', borderBottom: '1px solid #A9B584', padding: '10px 30px', fontSize: 10.5, letterSpacing: '0.4em' }}>
          COLLECTION N°1
        </div>
      </div>
    </div>
  )
}

function AcanthusHotel() {
  return (
    <div style={{ width: '100%', height: '100%', background: acaStone, display: 'grid', placeItems: 'center', fontFamily: cinzel, color: '#3b382e' }}>
      <div style={{ width: 340, textAlign: 'center', background: '#E7E2D3', border: '1px solid #b4ad97', padding: '26px 30px' }}>
        <svg aria-hidden="true" width="130" height="72" viewBox="0 0 130 72">
          <line x1="10" y1="66" x2="120" y2="66" stroke="#3b382e" strokeWidth="3" />
          <line x1="20" y1="60" x2="110" y2="60" stroke="#3b382e" strokeWidth="1.6" />
          <AcanthusLeaf x={56} y={58} s={0.55} color="#6b6449" />
          <AcanthusLeaf x={74} y={58} s={0.55} flip color="#6b6449" />
          <path d="M22 60 q-6 -14 8 -18 M108 60 q6 -14 -8 -18" fill="none" stroke="#6b6449" strokeWidth="1.8" />
        </svg>
        <div style={{ fontSize: 10, letterSpacing: '0.44em', marginTop: 12, color: '#8a8168' }}>HOTEL CORINTHIA — BAR</div>
        <div style={{ fontSize: 22, letterSpacing: '0.24em', marginTop: 10 }}>APERITIVO</div>
        <div style={{ marginTop: 16, fontFamily: mincho, fontSize: 11.5, letterSpacing: '0.16em', lineHeight: 2.4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>石榴のネグローニ</span><span>¥1,900</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>月桂樹のジンソーダ</span><span>¥1,600</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>無花果と生ハム</span><span>¥1,400</span></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 14 }}>
          <span style={{ width: 40, height: 1, background: '#8a8168' }} />
          <span style={{ fontSize: 11, color: '#6b6449' }}>❧</span>
          <span style={{ width: 40, height: 1, background: '#8a8168' }} />
        </div>
        <div style={{ fontFamily: zen, fontSize: 9.5, letterSpacing: '0.3em', marginTop: 10, color: '#8a8168' }}>
          17:00 — 23:00 · 大理石ロビー奥
        </div>
      </div>
    </div>
  )
}

export const acanthusMocks = [
  {
    id: 'acanthus-wallpaper',
    title: '壁紙ブランドのサイト',
    kind: 'Web / ブランド',
    Comp: AcanthusWallpaper,
    why: [
      { label: 'モチーフ', text: 'ぎざぎざの大きな葉が渦を巻くのがアカンサス。ギリシャの柱頭からモリスの壁紙まで、2000年反復されてきた「装飾の原型」。' },
      { label: 'レイアウト', text: '葉は画面の縁から侵入し、中央のタイポは静かに保つ。建築装飾と同じで、飾るのは構造の「境目」だけ。' },
      { label: '色', text: '深い常緑とオリーブの同系濃淡。多色にしないのは、彫刻の唐草が「素材の色+陰影」だけで語ってきた伝統の踏襲。' },
    ],
  },
  {
    id: 'acanthus-hotel',
    title: 'クラシックホテルのバーメニュー',
    kind: '印刷物 / メニュー',
    Comp: AcanthusHotel,
    why: [
      { label: 'モチーフ', text: '見出しの上の飾りはコリント式柱頭の意匠。「柱の頭」を紙面の頭に置き換える——建築由来の装飾は位置の文法ごと引用する。' },
      { label: '質感', text: '石灰岩色の紙とグレージュの枠。石とブロンズの色域に絞ると、印刷物でも「彫られたもの」の重みが出る。' },
      { label: 'フォント', text: '碑文体+明朝の組み合わせは、石碑と写本という2つの古典の合流。葉飾りの曲線に、文字の直線が背骨を通す。' },
    ],
  },
]
