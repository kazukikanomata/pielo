// 実験・ハイブリッド系(ミクストメディア / スクラップブック / ブルータリズム / キッチュ / アンスロポモーフィック)
// キャンバス 560×420 で設計
const inter = "'Inter', sans-serif"
const zen = "'Zen Kaku Gothic New', sans-serif"
const yomogi = "'Yomogi', cursive"
const pinyon = "'Pinyon Script', cursive"
const fredoka = "'Fredoka', sans-serif"

/* ---------------- ミクストメディア ---------------- */
const markerBlue = '#2F5BE0'

function MixedCampaign() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F1EEE6', position: 'relative', overflow: 'hidden', fontFamily: inter, color: '#1c1a17' }}>
      <div style={{ position: 'absolute', left: 46, top: 54, width: 210, height: 290, background: 'linear-gradient(160deg,#b9b2a6 0%,#8d867b 60%,#6e685f 100%)', boxShadow: '0 18px 40px -22px rgba(28,26,23,0.5)' }}>
        <div style={{ position: 'absolute', bottom: 12, left: 12, fontSize: 9, letterSpacing: '0.2em', color: '#f1eee6' }}>PHOTO: AW 2026</div>
      </div>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <ellipse cx="151" cy="140" rx="96" ry="60" fill="none" stroke={markerBlue} strokeWidth="3.5" strokeLinecap="round" strokeDasharray="300 40" transform="rotate(-8 151 140)" />
        <path d="M262 250 q60 34 36 88" fill="none" stroke={markerBlue} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M298 338 l-14 -6 m14 6 l-2 -15" stroke={markerBlue} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M330 96 l6 12 13 2 -9 9 2 13 -12 -6 -12 6 2 -13 -9 -9 13 -2 z" fill="#F2C230" stroke="#1c1a17" strokeWidth="2" />
      </svg>
      <div style={{ position: 'absolute', right: 44, top: 76, width: 230 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.3em', color: '#8d867b' }}>AW 2026 CAMPAIGN</div>
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.25, marginTop: 12 }}>
          着るまでが、<br />スケッチ。
        </div>
        <div style={{ fontFamily: yomogi, fontSize: 15, color: markerBlue, marginTop: 10, transform: 'rotate(-2deg)' }}>
          ↑ここ、手描きです
        </div>
        <div style={{ fontFamily: zen, fontSize: 11.5, lineHeight: 2, color: '#5c584f', marginTop: 8 }}>
          完成した写真に、未完成の線を重ねる。仕上がる前の熱を、そのまま店頭へ。
        </div>
        <div style={{ marginTop: 16, display: 'inline-block', background: '#1c1a17', color: '#F1EEE6', padding: '11px 24px', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em' }}>
          LOOKBOOK →
        </div>
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', left: 30, top: 36, width: 64, height: 20, background: 'rgba(242,194,48,0.7)', transform: 'rotate(-14deg)' }} />
    </div>
  )
}

function MixedEvent() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#20242C', position: 'relative', overflow: 'hidden', fontFamily: inter, color: '#F1EEE6' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <path d="M0 84 h96 l14 -12 12 12 h438 v10 H0 z" fill="#F1EEE6" opacity="0.14" />
        <path d="M60 330 q80 -30 160 0 t180 -10" fill="none" stroke="#F2C230" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 10" />
      </svg>
      <div style={{ position: 'absolute', left: 48, top: 56 }}>
        <div style={{ display: 'inline-block', background: '#F1EEE6', color: '#20242C', fontSize: 10.5, letterSpacing: '0.24em', padding: '6px 12px', transform: 'rotate(-2deg)' }}>
          DESIGN FEST vol.12
        </div>
        <div style={{ marginTop: 16, fontSize: 40, fontWeight: 800, lineHeight: 1.2 }}>
          つくりかけ、<br />
          <span style={{ position: 'relative', display: 'inline-block' }}>
            大歓迎。
            <svg aria-hidden="true" width="150" height="16" viewBox="0 0 150 16" style={{ position: 'absolute', left: 0, bottom: -8 }}>
              <path d="M4 10 q40 -10 70 -2 t72 -2" fill="none" stroke="#F2C230" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <div style={{ fontFamily: yomogi, fontSize: 14, color: '#F2C230', marginTop: 20, transform: 'rotate(-1.5deg)' }}>
          ラフのまま持ってきて!
        </div>
        <div style={{ fontFamily: zen, fontSize: 11.5, lineHeight: 2, color: '#aab0bd', marginTop: 8, maxWidth: 300 }}>
          スケッチ・試作・失敗作の展示祭。11.22–23 / 旧印刷工場にて。
        </div>
      </div>
      <div style={{ position: 'absolute', right: 40, bottom: 44, width: 170, background: '#F1EEE6', color: '#20242C', padding: '14px 16px', transform: 'rotate(3deg)', boxShadow: '0 14px 30px -16px rgba(0,0,0,0.6)' }}>
        <div style={{ fontFamily: yomogi, fontSize: 13 }}>メモ:</div>
        <div style={{ fontFamily: yomogi, fontSize: 13, lineHeight: 1.8, marginTop: 4 }}>
          出展申込は 9/30 まで。<br />テープで貼るだけでOK
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', top: -10, left: '50%', width: 58, height: 18, background: 'rgba(47,91,224,0.55)', transform: 'translateX(-50%) rotate(-3deg)' }} />
      </div>
    </div>
  )
}

export const mixedmediaMocks = [
  {
    id: 'mixedmedia-campaign',
    title: 'ファッションキャンペーン',
    kind: 'Web / ヒーロー',
    Comp: MixedCampaign,
    why: [
      { label: '質感', text: '完成品の「写真」と、未完成の「マーカーの線」をひとつの画面に。仕上がりの解像度をわざと混ぜることで、制作の途中の熱が残る。' },
      { label: 'モチーフ', text: '手描きの丸・矢印・星は、校正紙に入る赤字の文法。デザイナーの作業机を、そのまま読者に見せる演出。' },
      { label: '色', text: '写真はモノトーンに抑え、手描き要素にだけマーカーの青と黄を。色の担当を分けると、異素材の混在が喧嘩せず「共演」になる。' },
    ],
  },
  {
    id: 'mixedmedia-event',
    title: 'デザインフェスの告知',
    kind: 'Web / LP',
    Comp: MixedEvent,
    why: [
      { label: 'レイアウト', text: 'デジタルの整った組版の上に、傾いたメモとテープ。精密と粗雑の同居が「実験してもいい場所」という招待状になる。' },
      { label: 'フォント', text: '極太ゴシックの宣言文に、手書き風フォントの相槌を添える。声の大きさの違う2つの書体で、対話の空気を作る。' },
      { label: 'モチーフ', text: '黄色い下線は蛍光マーカーの引き跡。読み手が引くはずの線を先に引いておく——共作の気配を仕込む小技。' },
    ],
  },
]

/* ---------------- スクラップブック ---------------- */

function ScrapTravel() {
  const tape = (style) => (
    <div aria-hidden="true" style={{ position: 'absolute', width: 66, height: 20, background: 'rgba(217,160,60,0.6)', ...style }} />
  )
  return (
    <div style={{ width: '100%', height: '100%', background: '#D9CBB2', position: 'relative', overflow: 'hidden', fontFamily: yomogi, color: '#4a4034' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(74,64,52,0.12) 1px, transparent 1.4px)', backgroundSize: '22px 22px' }} />
      <div style={{ position: 'absolute', left: 44, top: 52, width: 180, background: '#FFFEF8', padding: '10px 10px 34px', transform: 'rotate(-4deg)', boxShadow: '0 10px 24px -14px rgba(74,64,52,0.7)' }}>
        <div style={{ height: 120, background: 'linear-gradient(160deg,#7FA8CF 0%,#C9BCA4 70%)' }} />
        <div style={{ fontSize: 13, marginTop: 8 }}>海がみえた!</div>
        {tape({ top: -8, left: 56, transform: 'rotate(-5deg)' })}
      </div>
      <div style={{ position: 'absolute', left: 250, top: 96, width: 160, background: '#FFFEF8', padding: '10px 10px 30px', transform: 'rotate(3deg)', boxShadow: '0 10px 24px -14px rgba(74,64,52,0.7)' }}>
        <div style={{ height: 100, background: 'linear-gradient(160deg,#C0503C 0%,#E0A968 80%)' }} />
        <div style={{ fontSize: 13, marginTop: 8 }}>夕焼けの市場</div>
        {tape({ top: -9, left: 46, transform: 'rotate(4deg)', background: 'rgba(201,154,164,0.6)' })}
      </div>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <path d="M232 210 q40 40 -8 74" fill="none" stroke="#4a4034" strokeWidth="2" strokeDasharray="5 6" />
        <path d="M224 278 l0 10 10 -2" fill="none" stroke="#4a4034" strokeWidth="2" />
      </svg>
      <div style={{ position: 'absolute', right: 36, top: 60, width: 120, transform: 'rotate(6deg)' }}>
        <div style={{ background: '#F2E3C8', border: '1.5px dashed #b09a76', padding: '12px 12px', fontSize: 12, lineHeight: 1.9 }}>
          切符・貝がら・<br />レシートも貼る
        </div>
      </div>
      <div style={{ position: 'absolute', left: 46, bottom: 44 }}>
        <div style={{ fontSize: 24 }}>たびの記録 — 3日め</div>
        <div style={{ fontFamily: zen, fontSize: 11, color: '#7d6f5c', marginTop: 6 }}>アプリ「HARU-TABI」 / 今日の1ページ</div>
      </div>
      <div style={{ position: 'absolute', right: 40, bottom: 44, background: '#4a4034', color: '#FFFEF8', fontFamily: zen, fontSize: 12, fontWeight: 700, borderRadius: 999, padding: '12px 24px', transform: 'rotate(-2deg)' }}>
        + 写真を貼る
      </div>
    </div>
  )
}

function ScrapPop() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#B5895A', display: 'grid', placeItems: 'center', fontFamily: yomogi, color: '#4a3a28' }}>
      <div style={{ position: 'relative', width: 400, background: '#F5EBD8', padding: '26px 30px', boxShadow: '0 18px 36px -20px rgba(58,42,24,0.8)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: -12, left: 40, width: 90, height: 24, background: 'repeating-linear-gradient(45deg, rgba(192,80,60,0.65) 0 8px, rgba(245,235,216,0.65) 8px 16px)', transform: 'rotate(-4deg)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', top: -10, right: 52, width: 80, height: 22, background: 'rgba(127,168,207,0.55)', transform: 'rotate(5deg)' }} />
        <div style={{ fontSize: 13, fontFamily: zen, letterSpacing: '0.2em', color: '#a08454' }}>10月のあたらしい一杯</div>
        <div style={{ fontSize: 30, marginTop: 10, transform: 'rotate(-1deg)' }}>
          焼きいもラテ、<span style={{ background: 'rgba(242,194,48,0.55)', padding: '0 6px' }}>はじめました</span>
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 18, alignItems: 'center' }}>
          <svg aria-hidden="true" width="86" height="96" viewBox="0 0 86 96">
            <path d="M18 34 h50 l-7 50 q-1 8 -9 8 h-18 q-8 0 -9 -8 z" fill="#fff" stroke="#4a3a28" strokeWidth="2.4" />
            <path d="M26 26 q17 -12 34 0" fill="none" stroke="#4a3a28" strokeWidth="2.4" />
            <path d="M34 16 q3 -7 0 -12 M46 16 q3 -7 0 -12" fill="none" stroke="#C0503C" strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="43" cy="62" r="10" fill="#E0A968" />
          </svg>
          <div style={{ fontSize: 14, lineHeight: 2 }}>
            ねっとり甘い安納いも。<br />
            ホイップは<span style={{ borderBottom: '3px solid #C0503C' }}>のせ放題</span>です。<br />
            <span style={{ fontSize: 22 }}>¥580</span> <span style={{ fontFamily: zen, fontSize: 10, color: '#a08454' }}>(テイクアウト同額)</span>
          </div>
        </div>
        <div style={{ position: 'absolute', right: 18, bottom: 14, fontFamily: zen, fontSize: 9.5, color: '#a08454', transform: 'rotate(-2deg)' }}>
          スタッフの手描きPOPより
        </div>
      </div>
    </div>
  )
}

export const scrapbookMocks = [
  {
    id: 'scrapbook-travel',
    title: '旅行記アプリの1ページ',
    kind: 'アプリ',
    Comp: ScrapTravel,
    why: [
      { label: '質感', text: '白フチの写真・マスキングテープ・破線のメモ用紙。「貼った・ちぎった・挟んだ」という手の動詞が見えることが装飾の条件。' },
      { label: 'レイアウト', text: '写真は必ず数度傾け、重なりも許す。整列の放棄は雑さではなく「アルバムを作った夜の時間」の再現。' },
      { label: 'フォント', text: '手書きフォントが本文、活字は注記のみ。デジタルのUIの中で筆跡が主役になると、データが「思い出」に格上げされる。' },
    ],
  },
  {
    id: 'scrapbook-pop',
    title: 'カフェの新商品POP',
    kind: 'バナー / POP',
    Comp: ScrapPop,
    why: [
      { label: 'モチーフ', text: '蛍光マーカーの塗り跡と赤の下線は、店員の「ここだけは読んで」の圧の可視化。装飾がそのまま音声の抑揚になっている。' },
      { label: '質感', text: '紙の下に落ちる影とテープの半透明。素材の物理(重さ・粘着)を再現するほど、画面の中の紙が「本物の店先」になる。' },
      { label: '色', text: 'クラフト紙のベージュに、いも色のオレンジと赤。素材色+食べ物色の組み合わせが、手作りの温度を保証する。' },
    ],
  },
]

/* ---------------- ブルータリズム ---------------- */
const brutalRed = '#FF3B00'

function BrutalStudio() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FFFFFF', position: 'relative', overflow: 'hidden', fontFamily: inter, color: '#000' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #000', padding: '14px 18px', fontSize: 12, fontWeight: 700 }}>
        <span>STUDIO KRAFT®</span>
        <span style={{ textDecoration: 'underline' }}>WORK / ABOUT / CONTACT</span>
      </div>
      <div style={{ padding: '20px 18px 0' }}>
        <div style={{ fontSize: 74, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.92 }}>
          NO<br />DECORATION<span style={{ color: brutalRed }}>.</span>
        </div>
        <div style={{ marginTop: 16, fontFamily: zen, fontSize: 13, fontWeight: 700, lineHeight: 1.9 }}>
          飾りません。速いサイトと、強い言葉だけ作ります。<br />
          <span style={{ background: '#000', color: '#fff', padding: '2px 8px' }}>制作費: ¥800,000〜 / 納期: 3週間</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 56, left: 0, right: 0, borderTop: '3px solid #000', borderBottom: '3px solid #000', overflow: 'hidden', background: brutalRed, color: '#fff', fontWeight: 900, fontSize: 15, letterSpacing: '0.08em', whiteSpace: 'nowrap', padding: '9px 0' }}>
        NOW BOOKING — 2026 Q4 ★ NOW BOOKING — 2026 Q4 ★ NOW BOOKING — 2026 Q4 ★ NOW BOOKING
      </div>
      <div style={{ position: 'absolute', bottom: 14, left: 18, fontSize: 10, fontFamily: 'monospace' }}>
        built with plain HTML. loads in 0.3s.
      </div>
      <div style={{ position: 'absolute', bottom: 10, right: 18, border: '3px solid #000', fontWeight: 900, fontSize: 13, padding: '7px 16px', background: '#fff' }}>
        MAIL ↗
      </div>
    </div>
  )
}

function BrutalShop() {
  const items = [
    ['HEAVY TEE', '¥6,600', '#E5E5E5'],
    ['WORK PANT', '¥14,300', '#D2D2D2'],
    ['CAP 001', '¥4,950', '#E5E5E5'],
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: '#EDEDED', fontFamily: inter, color: '#000' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#000', color: '#fff', padding: '10px 16px', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>
        <span>GOODS.SUPPLY — ONLINE STORE</span>
        <span>CART(2)</span>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 900, borderBottom: '3px solid #000', paddingBottom: 8 }}>ALL ITEMS (3) — 並び順: 発売日</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 0, border: '3px solid #000', borderTop: 'none' }}>
          {items.map(([name, price, bg], i) => (
            <div key={name} style={{ borderLeft: i ? '3px solid #000' : 'none', background: '#fff' }}>
              <div style={{ height: 130, background: bg, display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700, color: '#888', borderBottom: '3px solid #000' }}>
                IMG_{i + 1}.JPG
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontSize: 13, fontWeight: 900 }}>{name}</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>{price}</div>
                <div style={{ marginTop: 10, border: '3px solid #000', textAlign: 'center', fontWeight: 900, fontSize: 12, padding: '7px 0', background: i === 1 ? brutalRed : '#fff', color: i === 1 ? '#fff' : '#000' }}>
                  {i === 1 ? 'RESTOCK 待ち' : 'BUY'}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, fontFamily: zen, fontSize: 10.5, fontWeight: 700 }}>
          ※ 返品は7日以内。モデルは着ていません。実物がすべてです。
        </div>
      </div>
    </div>
  )
}

export const brutalismMocks = [
  {
    id: 'brutalism-studio',
    title: 'デザインスタジオのサイト',
    kind: 'Web / ヒーロー',
    Comp: BrutalStudio,
    why: [
      { label: 'フォント', text: 'システム由来の太いサンセリフを画面幅いっぱいに。字を「打ちっぱなしのコンクリート」として使うのがブルータリズム。' },
      { label: '色', text: '白・黒+警告色の赤のみ。装飾を全部捨てた画面では、たった一つの赤い句点が最大の演出になる。' },
      { label: 'レイアウト', text: '生のhr線、下線付きリンク、流れるマーキー。ブラウザのデフォルトに近い部品をあえて残し「素の速さ」を誇示する。' },
    ],
  },
  {
    id: 'brutalism-shop',
    title: 'アパレルECの商品一覧',
    kind: 'EC / 一覧',
    Comp: BrutalShop,
    why: [
      { label: 'かたち', text: '角丸ゼロ・影ゼロ・3pxの黒枠だけでセルを区切る。柔らかさの排除は「商品で勝負している」という無言の宣言。' },
      { label: 'レイアウト', text: '画像の代わりに「IMG_1.JPG」。飾らないどころかプレースホルダーまで見せる露悪が、逆に正直さの記号になる。' },
      { label: 'フォント', text: '注意書きまで太字で大声。ブルータリズムに小声はない——すべての情報が同じ強度で殴りかかってくる。' },
    ],
  },
]

/* ---------------- キッチュ ---------------- */
const kitschPink = '#E0498C'

function LeopardBand({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: '#E8B04B',
        backgroundImage:
          'radial-gradient(circle at 30% 40%, #7a4a1c 0 5px, transparent 6px), radial-gradient(circle at 70% 65%, #7a4a1c 0 4px, transparent 5px), radial-gradient(circle at 50% 15%, #7a4a1c 0 4px, transparent 5px)',
        backgroundSize: '34px 30px',
        ...style,
      }}
    />
  )
}

function KitschDiner() {
  return (
    <div style={{ width: '100%', height: '100%', background: kitschPink, position: 'relative', overflow: 'hidden', fontFamily: fredoka, color: '#fff' }}>
      <LeopardBand style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 34 }} />
      <LeopardBand style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 34 }} />
      <svg aria-hidden="true" width="150" height="190" viewBox="0 0 150 190" style={{ position: 'absolute', right: 30, top: 90 }}>
        <path d="M75 92 q-30 -6 -34 -34 q-3 -26 22 -30 q20 -3 26 16 q4 -34 -20 -44" fill="none" stroke="#FFD1E6" strokeWidth="10" strokeLinecap="round" />
        <circle cx="66" cy="18" r="9" fill="#FFD1E6" />
        <path d="M62 12 l-12 4 8 6" fill="#E8B04B" />
        <line x1="75" y1="92" x2="75" y2="160" stroke="#FFD1E6" strokeWidth="8" />
        <path d="M75 160 l-16 22 M75 160 l16 22" stroke="#FFD1E6" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <svg aria-hidden="true" width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', left: 26, top: 66 }}>
        <path d="M60 6 L70 42 L106 32 L80 60 L110 84 L72 80 L60 116 L48 80 L10 84 L40 60 L14 32 L50 42 Z" fill="#F7E14A" stroke="#B03060" strokeWidth="3" />
        <text x="60" y="66" textAnchor="middle" fontSize="15" fontWeight="700" fill="#B03060" fontFamily="Fredoka">24H</text>
      </svg>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 120, textAlign: 'center' }}>
        <div style={{ fontFamily: pinyon, fontSize: 58, color: '#FFF3B0', textShadow: '3px 3px 0 #B03060' }}>Yummy Yummy</div>
        <div style={{ fontFamily: zen, fontWeight: 700, fontSize: 16, letterSpacing: '0.14em', marginTop: 6, textShadow: '2px 2px 0 #B03060' }}>
          パンケーキ全品、生クリーム2倍中!!
        </div>
        <div style={{ marginTop: 18, display: 'inline-block', background: '#F7E14A', color: '#B03060', fontWeight: 700, fontSize: 14, borderRadius: 999, padding: '12px 30px', border: '3px dotted #B03060', transform: 'rotate(-2deg)' }}>
          いますぐ食べる → ¥980
        </div>
      </div>
    </div>
  )
}

function KitschNail() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#B79BE0', position: 'relative', overflow: 'hidden', fontFamily: fredoka, color: '#4a2a5a' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#fff 1.6px, transparent 1.8px)', backgroundSize: '30px 30px', opacity: 0.5 }} />
      <div style={{ position: 'relative', display: 'grid', placeItems: 'center', height: '100%' }}>
        <div style={{ width: 380, background: '#fff', borderRadius: 26, border: `6px solid ${kitschPink}`, padding: '24px 30px', textAlign: 'center', boxShadow: '10px 12px 0 rgba(74,42,90,0.35)' }}>
          <LeopardBand style={{ height: 20, borderRadius: 10 }} />
          <div style={{ fontFamily: pinyon, fontSize: 44, color: kitschPink, marginTop: 12 }}>Nail Nail Nail</div>
          <div style={{ fontFamily: zen, fontWeight: 700, fontSize: 13, marginTop: 6 }}>
            盛りは<span style={{ color: kitschPink }}>正義</span>。ラメ・パール・さくらんぼ全部のせ🍒
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 16 }}>
            {[
              ['#E0498C', '💅'], ['#F7E14A', '✨'], ['#7FC8F8', '🫧'], ['#E8B04B', '🐆'],
            ].map(([c, e]) => (
              <span key={c} style={{ width: 54, height: 54, borderRadius: '50%', background: c, display: 'grid', placeItems: 'center', fontSize: 20, border: '3px solid #fff', boxShadow: '0 3px 0 rgba(74,42,90,0.3)' }}>{e}</span>
            ))}
          </div>
          <div style={{ marginTop: 16, fontFamily: zen, fontSize: 11, fontWeight: 700, background: '#FDE9F2', borderRadius: 999, display: 'inline-block', padding: '9px 22px' }}>
            初回オフ無料 / 定額¥7,980〜 / 予約はDMで♡
          </div>
        </div>
      </div>
    </div>
  )
}

export const kitschMocks = [
  {
    id: 'kitsch-diner',
    title: 'パンケーキ店のバナー',
    kind: 'バナー / 広告',
    Comp: KitschDiner,
    why: [
      { label: '色', text: 'ショッキングピンク×レオパード×レモン黄。上品の教科書が禁じる組み合わせを全部やる——「悪趣味」を自覚的に楽しむのがキッチュ。' },
      { label: 'モチーフ', text: 'フラミンゴ・星バースト・24H。ロードサイドの安モーテルの看板類を、愛をこめて過剰に盛り付ける。' },
      { label: 'フォント', text: '優雅な筆記体に極太の縁取りと影。高級の記号をチープに使い倒す「格の誤用」こそがキッチュのユーモア。' },
    ],
  },
  {
    id: 'kitsch-nail',
    title: 'ネイルサロンの案内',
    kind: 'Web / カード',
    Comp: KitschNail,
    why: [
      { label: 'レイアウト', text: 'レオパード帯・筆記体・絵文字ボタンを一枚に全部盛り。引き算を拒否する「足し算の美学」は、盛りネイルの思想と同型。' },
      { label: '色', text: 'ラベンダー地に原色を散らす。パステルで甘くしてから原色で崩す二段構えが、可愛いと過剰の境界線を狙い撃つ。' },
      { label: '質感', text: '水玉・ラメ・ぷっくりした丸ボタン。プラスチックの光沢感は安っぽさの記号だが、キッチュではそれが「元気」の同義語。' },
    ],
  },
]

/* ---------------- アンスロポモーフィック ---------------- */
const anthOrange = '#F0A63C'

function AnthroToothpaste() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FFF6E8', position: 'relative', overflow: 'hidden', fontFamily: fredoka, color: '#2b2b33' }}>
      <svg aria-hidden="true" width="220" height="270" viewBox="0 0 220 270" style={{ position: 'absolute', right: 44, top: 76 }}>
        <rect x="60" y="10" width="100" height="26" rx="8" fill="#3E7BFA" />
        <path d="M66 44 h88 l14 170 q2 26 -24 26 h-68 q-26 0 -24 -26 z" fill="#fff" stroke="#2b2b33" strokeWidth="3.5" />
        <path d="M66 44 h88 l4 46 h-96 z" fill="#3E7BFA" opacity="0.15" />
        <circle cx="92" cy="140" r="7" fill="#2b2b33" />
        <circle cx="128" cy="140" r="7" fill="#2b2b33" />
        <circle cx="95" cy="137" r="2.4" fill="#fff" />
        <circle cx="131" cy="137" r="2.4" fill="#fff" />
        <path d="M96 166 q14 14 28 0" fill="none" stroke="#2b2b33" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="78" cy="158" r="6" fill={anthOrange} opacity="0.5" />
        <circle cx="142" cy="158" r="6" fill={anthOrange} opacity="0.5" />
        <path d="M62 120 q-26 6 -22 30" fill="none" stroke="#2b2b33" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="40" cy="152" r="7" fill="#fff" stroke="#2b2b33" strokeWidth="3" />
        <path d="M158 120 q28 2 30 26" fill="none" stroke="#2b2b33" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="189" cy="148" r="7" fill="#fff" stroke="#2b2b33" strokeWidth="3" />
      </svg>
      <div style={{ position: 'absolute', left: 48, top: 84, width: 250 }}>
        <div style={{ fontSize: 12, letterSpacing: '0.2em', color: '#c98a2a', fontWeight: 600 }}>MINTO — DAILY CARE</div>
        <div style={{ fontFamily: zen, fontWeight: 700, fontSize: 30, lineHeight: 1.5, marginTop: 12 }}>
          歯みがき粉に、<br />会いに帰る家。
        </div>
        <div style={{ fontFamily: zen, fontSize: 12, lineHeight: 2, color: '#7a7468', marginTop: 12 }}>
          朝と夜、洗面台で待ってるやつ。ミント強め、研磨剤なし。
        </div>
        <div style={{ marginTop: 18, display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ background: '#3E7BFA', color: '#fff', fontFamily: zen, fontWeight: 700, fontSize: 13, borderRadius: 999, padding: '13px 26px', boxShadow: '0 5px 0 #2b56b0' }}>
            定期便 ¥680/月
          </span>
          <span style={{ fontFamily: zen, fontSize: 11, color: '#7a7468', borderBottom: '1.5px solid #7a7468', paddingBottom: 2 }}>1本だけ試す</span>
        </div>
      </div>
      <div style={{ position: 'absolute', right: 190, top: 60, background: '#fff', border: '2.5px solid #2b2b33', borderRadius: '14px 14px 14px 3px', fontFamily: zen, fontWeight: 700, fontSize: 12, padding: '8px 14px' }}>
        みがいた?
      </div>
    </div>
  )
}

function AnthroSavings() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FDF3DC', display: 'grid', placeItems: 'center', fontFamily: fredoka, color: '#2b2b33' }}>
      <div style={{ width: 340, background: '#fff', borderRadius: 28, padding: '26px 30px', boxShadow: '0 8px 0 #ecd9ac', textAlign: 'center' }}>
        <div style={{ fontFamily: zen, fontSize: 12, fontWeight: 700, color: '#a08a54' }}>ちょきん アプリ「コバン」</div>
        <div style={{ position: 'relative', width: 150, height: 150, margin: '18px auto 0' }}>
          <svg aria-hidden="true" width="150" height="150" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="66" fill="none" stroke="#F3E7C8" strokeWidth="12" />
            <circle cx="75" cy="75" r="66" fill="none" stroke={anthOrange} strokeWidth="12" strokeLinecap="round" strokeDasharray="290 415" transform="rotate(-90 75 75)" />
            <circle cx="75" cy="75" r="44" fill="#FBD97B" stroke="#2b2b33" strokeWidth="3" />
            <circle cx="62" cy="70" r="4.6" fill="#2b2b33" />
            <circle cx="88" cy="70" r="4.6" fill="#2b2b33" />
            <path d="M66 86 q9 8 18 0" fill="none" stroke="#2b2b33" strokeWidth="3" strokeLinecap="round" />
            <path d="M75 31 v-10 M75 21 a6 6 0 1 1 0.1 0" fill="none" stroke="#2b2b33" strokeWidth="3" />
          </svg>
        </div>
        <div style={{ fontFamily: zen, fontWeight: 700, fontSize: 17, marginTop: 14 }}>
          今月 ¥42,000 <span style={{ fontSize: 12, color: '#a08a54' }}>/ 目標 ¥60,000</span>
        </div>
        <div style={{ marginTop: 10, display: 'inline-block', background: '#FFF6E8', border: '2.5px solid #2b2b33', borderRadius: '16px 16px 3px 16px', fontFamily: zen, fontWeight: 700, fontSize: 12.5, padding: '10px 16px' }}>
          あと¥18,000で旅行いけるよ!がんばろ〜
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 10, justifyContent: 'center' }}>
          <span style={{ background: anthOrange, color: '#fff', fontFamily: zen, fontWeight: 700, fontSize: 13, borderRadius: 999, padding: '12px 26px', boxShadow: '0 4px 0 #c9821c' }}>
            +¥1,000 いれる
          </span>
        </div>
      </div>
    </div>
  )
}

export const anthropomorphicMocks = [
  {
    id: 'anthropomorphic-toothpaste',
    title: '歯みがき粉ブランドのLP',
    kind: 'Web / ヒーロー',
    Comp: AnthroToothpaste,
    why: [
      { label: 'かたち', text: 'チューブに目と口と棒状の手。日用品に顔がつくと、商品は「性能を比べる対象」から「関係を続ける相手」に変わる。' },
      { label: 'モチーフ', text: '「みがいた?」の吹き出し。マスコットが話すと、リマインドという面倒な機能が友だちの声かけに翻訳される。' },
      { label: '色', text: 'クリーム色の背景に高彩度の青とオレンジ。子ども向けの配色を大人の商品に使う「照れ」の混入が、DTCブランドの親密さの調合。' },
    ],
  },
  {
    id: 'anthropomorphic-savings',
    title: '貯金アプリのマスコットUI',
    kind: 'アプリ',
    Comp: AnthroSavings,
    why: [
      { label: 'かたち', text: '進捗リングの中心にコインの顔。数字のダッシュボードに目玉を置くだけで、続ける理由が「達成」から「こいつのため」に変わる。' },
      { label: 'フォント', text: '「がんばろ〜」の口語。金融の文体を捨ててマスコットの一人称で話すと、説教くさい貯金がゲームの相棒になる。' },
      { label: 'かたち', text: 'ボタンは分厚い影付きの丸。押すたびマスコットが跳ねそうな「弾力の予感」まで含めて、操作が楽しくなる設計。' },
    ],
  },
]
