// アート・ストリートカルチャー系(グラフィティ / スチームパンク / サイバーコア / ヴェイパーウェーブ / シンセウェーブ)
// キャンバス 560×420 で設計
const inter = "'Inter', sans-serif"
const zen = "'Zen Kaku Gothic New', sans-serif"
const mincho = "'Shippori Mincho', serif"
const cinzel = "'Cinzel', serif"
const dotf = "'DotGothic16', monospace"
const mono = "ui-monospace, 'SF Mono', Menlo, monospace"

/* ---------------- グラフィティ ---------------- */

function GraffitiDrop() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#8D8D88', position: 'relative', overflow: 'hidden', fontFamily: inter }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0 2px, transparent 2px 7px)', opacity: 0.5 }} />
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <g fill="#2FBF71" opacity="0.9">
          <circle cx="452" cy="86" r="30" />
          {[
            [408, 52, 5], [498, 60, 7], [420, 122, 6], [492, 118, 4], [462, 34, 4], [512, 92, 3],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} />
          ))}
          <rect x="446" y="112" width="7" height="46" rx="3.5" />
          <rect x="463" y="108" width="6" height="30" rx="3" />
        </g>
        <g fill="#F2C230" opacity="0.85" transform="translate(60 300)">
          <circle cx="0" cy="0" r="22" />
          <circle cx="30" cy="-14" r="6" />
          <circle cx="-26" cy="14" r="5" />
          <rect x="-6" y="16" width="6" height="38" rx="3" />
        </g>
      </svg>
      <div style={{ position: 'absolute', top: 74, left: 44, transform: 'rotate(-5deg)' }}>
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '-0.03em',
            color: '#FF4D9D',
            WebkitTextStroke: '3px #16161A',
            textShadow: '6px 6px 0 #16161A, 12px 12px 0 rgba(22,22,26,0.35)',
          }}
        >
          DROP 08
        </div>
        <div style={{ marginTop: 10, display: 'inline-block', background: '#16161A', color: '#F2C230', fontWeight: 800, fontSize: 15, padding: '8px 18px', transform: 'rotate(2deg)', letterSpacing: '0.06em' }}>
          8.24 SAT 11:00 — 路上販売のみ
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 96, left: 46, fontFamily: zen, fontSize: 12, fontWeight: 700, color: '#16161A', letterSpacing: '0.08em' }}>
        スニーカー「CONCRETE 2」全2色 / 各¥18,700
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 44, display: 'flex', gap: 10 }}>
        <span style={{ background: '#FF4D9D', color: '#16161A', fontWeight: 900, fontSize: 12, padding: '11px 22px', transform: 'rotate(-2deg)', letterSpacing: '0.08em' }}>抽選に参加 →</span>
        <span style={{ border: '3px solid #16161A', color: '#16161A', fontWeight: 900, fontSize: 12, padding: '8px 18px', transform: 'rotate(1deg)' }}>RULES</span>
      </div>
      <div style={{ position: 'absolute', top: 24, right: 30, transform: 'rotate(8deg)', fontFamily: zen, background: '#fff', border: '2px solid #16161A', padding: '6px 12px', fontSize: 10, fontWeight: 700 }}>
        先着ではありません
      </div>
    </div>
  )
}

function GraffitiFlyer() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1B1B20', position: 'relative', overflow: 'hidden', fontFamily: inter, color: '#F5F2EA' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <path d="M-10 340 q90 -50 150 -10 t170 -20 t180 10 t90 -6" fill="none" stroke="#2FBF71" strokeWidth="10" strokeLinecap="round" opacity="0.8" />
        <path d="M-10 368 q120 -34 200 4 t220 -16 t170 12" fill="none" stroke="#FF4D9D" strokeWidth="7" strokeLinecap="round" opacity="0.7" />
        {[
          [80, 60], [500, 50], [460, 300], [110, 250],
        ].map(([x, y], i) => (
          <g key={i} fill="none" stroke="#F2C230" strokeWidth="3" strokeLinecap="round" transform={`translate(${x} ${y}) rotate(${i * 14 - 20})`}>
            <path d="M0 0 l14 -18 M6 2 l16 -14 M12 6 l16 -8" />
          </g>
        ))}
      </svg>
      <div style={{ position: 'relative', padding: '52px 46px' }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.3em', color: '#2FBF71' }}>OPEN MIC + DJ + WALL</div>
        <div style={{ marginTop: 14, fontSize: 56, fontWeight: 900, fontStyle: 'italic', lineHeight: 0.95, letterSpacing: '-0.02em', textShadow: '5px 5px 0 #FF4D9D' }}>
          BLOCK<br />PARTY
        </div>
        <div style={{ marginTop: 16, fontFamily: zen, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.1em', lineHeight: 2 }}>
          高架下スケートパーク / 9.6 SAT 15:00–21:00<br />
          <span style={{ color: '#F2C230' }}>入場無料・雨天決行・スプレー持参歓迎</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 26, right: 32, transform: 'rotate(-4deg)', background: '#fff', color: '#16161A', padding: '10px 14px', fontSize: 11, fontWeight: 800, borderRadius: 4 }}>
        HELLO <span style={{ color: '#FF4D9D' }}>my name is</span> ___
      </div>
    </div>
  )
}

export const graffitiMocks = [
  {
    id: 'graffiti-drop',
    title: 'スニーカードロップの告知',
    kind: 'Web / キャンペーン',
    Comp: GraffitiDrop,
    why: [
      { label: 'フォント', text: '極太イタリック+黒フチ+ずらした立体影は、壁に描くバブルレターの文法。文字は「読むもの」である前に「場所を奪うもの」。' },
      { label: '質感', text: 'スプレーの飛沫と垂れ(ドリップ)をそのまま残す。制御しきれない画材の痕跡が、ストリートの「一発勝負」の緊張感を運ぶ。' },
      { label: 'レイアウト', text: 'すべての要素が数度ずつ傾く。整列は「許可を得たデザイン」の匂いがする——無許可の傾きこそがグラフィティの署名。' },
    ],
  },
  {
    id: 'graffiti-flyer',
    title: 'ブロックパーティのフライヤー',
    kind: 'フライヤー',
    Comp: GraffitiFlyer,
    why: [
      { label: 'モチーフ', text: '夜の壁を横切る太いタグの線と、「HELLO my name is」ステッカー。ライターたちの道具と儀式をそのまま紙面に引用する。' },
      { label: '色', text: '闇に蛍光のピンク・緑・黄。夜の街灯の下でも視認できる色だけが、ストリートでは生き残る——配色は環境の必然。' },
      { label: 'フォント', text: '見出しは暴れ、日時と注意書きは角ゴシックで実直に。無法の見た目でも集合情報だけは正確に読ませる二層構造。' },
    ],
  },
]

/* ---------------- スチームパンク ---------------- */
const brass = '#A6702E'
const sepia = '#E2CFA8'

function Gear({ x, y, r, teeth = 8, color = brass }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="none" stroke={color} strokeWidth={r * 0.28} strokeDasharray={`${(2 * Math.PI * r) / (teeth * 2)} ${(2 * Math.PI * r) / (teeth * 2)}`} />
      <circle r={r * 0.62} fill="none" stroke={color} strokeWidth="2.5" />
      <circle r={r * 0.14} fill={color} />
    </g>
  )
}

function SteampunkGin() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#2A2018', position: 'relative', overflow: 'hidden', fontFamily: cinzel, color: sepia }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0, opacity: 0.9 }}>
        <Gear x={70} y={80} r={44} teeth={9} />
        <Gear x={140} y={140} r={26} teeth={7} />
        <Gear x={496} y={310} r={54} teeth={10} />
        <Gear x={430} y={372} r={28} teeth={7} />
        <path d="M70 80 h100 M496 310 v-60 h-60" fill="none" stroke={brass} strokeWidth="3" opacity="0.5" />
        {[
          [24, 24], [536, 24], [24, 396], [536, 396],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="none" stroke={brass} strokeWidth="2.5" />
        ))}
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', paddingTop: 76 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.5em', color: '#c19a5f' }}>DISTILLED BY STEAM · BATCH No.9</div>
        <div style={{ fontSize: 38, letterSpacing: '0.18em', marginTop: 16 }}>IRONWORKS GIN</div>
        <div style={{ fontFamily: mincho, fontSize: 12, letterSpacing: '0.3em', marginTop: 12, color: '#cbb083' }}>
          蒸気機関で蒸留する、真鍮色のドライジン
        </div>
        <div style={{ margin: '24px auto 0', width: 320, display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${brass}`, borderBottom: `1px solid ${brass}`, padding: '12px 0', fontSize: 10, letterSpacing: '0.24em' }}>
          <span>ABV 47%</span><span>COPPER POT</span><span>EST. 1889</span>
        </div>
        <div style={{ marginTop: 22, display: 'inline-block', background: brass, color: '#2A2018', fontWeight: 700, padding: '12px 30px', fontSize: 11, letterSpacing: '0.3em', borderRadius: 3 }}>
          蒸留所を見学する
        </div>
      </div>
    </div>
  )
}

function SteampunkWatch() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#3A2A1C', display: 'grid', placeItems: 'center', fontFamily: cinzel, color: sepia }}>
      <div style={{ display: 'flex', gap: 34, alignItems: 'center' }}>
        <svg aria-hidden="true" width="230" height="230" viewBox="0 0 230 230">
          <circle cx="115" cy="115" r="104" fill="#241A10" stroke={brass} strokeWidth="6" />
          <circle cx="115" cy="115" r="88" fill="none" stroke={brass} strokeWidth="1.4" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="115" y1="34" x2="115" y2="46" stroke={sepia} strokeWidth={i % 3 === 0 ? 3 : 1.4} transform={`rotate(${i * 30} 115 115)`} />
          ))}
          {['XII', 'III', 'VI', 'IX'].map((n, i) => {
            const pos = [
              [115, 66], [162, 121], [115, 176], [68, 121],
            ][i]
            return (
              <text key={n} x={pos[0]} y={pos[1]} textAnchor="middle" fontSize="15" fontFamily="Cinzel" fill={sepia}>{n}</text>
            )
          })}
          <Gear x={115} y={148} r={16} teeth={6} color="#7a5a30" />
          <line x1="115" y1="115" x2="115" y2="70" stroke={sepia} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="115" y1="115" x2="146" y2="132" stroke={sepia} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="115" cy="115" r="5" fill={brass} />
        </svg>
        <div style={{ width: 200 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.44em', color: '#c19a5f' }}>POCKET WATCH</div>
          <div style={{ fontSize: 24, letterSpacing: '0.14em', marginTop: 12, lineHeight: 1.6 }}>CHRONOS<br />MK.IV</div>
          <div style={{ fontFamily: zen, fontSize: 11, lineHeight: 2.1, color: '#cbb083', marginTop: 12 }}>
            17石の手巻き機械。裏蓋を開ければ、歯車が呼吸している。
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 8, fontSize: 10, letterSpacing: '0.18em' }}>
            <span style={{ border: `1px solid ${brass}`, padding: '9px 16px' }}>仕様書</span>
            <span style={{ background: brass, color: '#2A2018', fontWeight: 700, padding: '9px 16px' }}>¥68,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const steampunkMocks = [
  {
    id: 'steampunk-gin',
    title: 'クラフトジンのブランドサイト',
    kind: 'Web / ヒーロー',
    Comp: SteampunkGin,
    why: [
      { label: 'モチーフ', text: '歯車・配管・四隅のリベット。スチームパンクは「機構の露出」の美学で、隠すべき内部を誇示することが装飾になる。' },
      { label: '色', text: '真鍮・銅・革のブラウン域+セピア。電気以前の金属の色に絞ると、画面全体が「ヴィクトリア朝の機械室」の照明になる。' },
      { label: 'フォント', text: '碑文体の大文字に「BATCH No.9」「EST. 1889」の銘板表記。機械に打刻されたプレートの文法で情報を刻む。' },
    ],
  },
  {
    id: 'steampunk-watch',
    title: '懐中時計のプロダクトページ',
    kind: 'EC / プロダクト',
    Comp: SteampunkWatch,
    why: [
      { label: 'かたち', text: 'ローマ数字の文字盤に、あえて覗かせた歯車。計器(ゲージ)は スチームパンクのUIの原型で、針とダイヤルが最上の飾り。' },
      { label: '質感', text: '文字盤の黒は漆黒ではなく煤けた焦茶。蒸気と油で燻された「使い込まれた金属」の色温度を保つ。' },
      { label: 'レイアウト', text: '左に機構、右に銘と仕様。博物学の図版のように「観察対象+注記」で組むと、商品が発明品に見えてくる。' },
    ],
  },
]

/* ---------------- サイバーコア ---------------- */
const cyberGreen = '#39FF6A'

function CyberEsports() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#050807', position: 'relative', overflow: 'hidden', fontFamily: mono, color: cyberGreen }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(57,255,106,0.05) 0 1px, transparent 1px 4px)' }} />
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <g fill="none" stroke={cyberGreen} strokeWidth="2">
          <path d="M24 24 h44 M24 24 v44 M536 24 h-44 M536 24 v44 M24 396 h44 M24 396 v-44 M536 396 h-44 M536 396 v-44" />
        </g>
        <g fill="none" stroke={cyberGreen} strokeWidth="1" opacity="0.5">
          <polygon points="420,110 500,150 500,230 420,270 340,230 340,150" />
          <polygon points="420,140 470,165 470,215 420,240 370,215 370,165" strokeDasharray="4 4" />
          <line x1="420" y1="110" x2="420" y2="270" />
          <line x1="340" y1="150" x2="500" y2="230" />
          <line x1="500" y1="150" x2="340" y2="230" />
        </g>
      </svg>
      <div style={{ position: 'relative', padding: '58px 52px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.4em', opacity: 0.75 }}>&gt; INITIALIZING… OK</div>
        <div style={{ marginTop: 14, fontSize: 44, fontWeight: 700, fontFamily: inter, letterSpacing: '0.02em', color: '#EAFFEF', textShadow: `2px 0 0 ${cyberGreen}, -2px 0 0 #26C6DA` }}>
          VOID//PROTOCOL
        </div>
        <div style={{ marginTop: 10, fontSize: 11, letterSpacing: '0.2em', opacity: 0.85 }}>
          E-SPORTS TEAM — DIV.1 / WIN RATE 71.4%
        </div>
        <div style={{ marginTop: 26, display: 'flex', gap: 12, fontSize: 11 }}>
          <span style={{ border: `1px solid ${cyberGreen}`, padding: '10px 20px', letterSpacing: '0.14em' }}>[ ROSTER ]</span>
          <span style={{ background: cyberGreen, color: '#050807', fontWeight: 700, padding: '10px 20px', letterSpacing: '0.14em' }}>[ JOIN_TRYOUT ]</span>
        </div>
        <div style={{ position: 'absolute', bottom: -64, left: 52, fontSize: 9.5, opacity: 0.55, letterSpacing: '0.12em', lineHeight: 1.9 }}>
          LAT 35.6812 / LON 139.7671<br />PING 4ms · TICK 128
        </div>
      </div>
    </div>
  )
}

function CyberTechno() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#03060A', display: 'grid', placeItems: 'center', fontFamily: mono, color: '#26C6DA' }}>
      <div style={{ width: 400, border: '1px solid #26C6DA', boxShadow: '0 0 24px rgba(38,198,218,0.25), inset 0 0 24px rgba(38,198,218,0.06)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 14px', borderBottom: '1px solid #26C6DA', fontSize: 10, letterSpacing: '0.14em' }}>
          <span>SIGNAL.EXE</span>
          <span>[×]</span>
        </div>
        <div style={{ padding: '20px 22px', fontSize: 11.5, lineHeight: 2.05 }}>
          <div>&gt; event: <span style={{ color: cyberGreen }}>“GHOST FREQUENCY”</span></div>
          <div>&gt; date: 2026-08-15 SAT 23:00—06:00</div>
          <div>&gt; location: 倉庫番地_不明 <span style={{ opacity: 0.6 }}>// 前日DM</span></div>
          <div>&gt; lineup:</div>
          <div style={{ paddingLeft: 18 }}>
            [01] NULLPOINTER<br />[02] 静電気クラブ<br />[03] MODEM_GIRL
          </div>
          <div style={{ marginTop: 10 }}>
            &gt; ticket: <span style={{ background: '#26C6DA', color: '#03060A', padding: '2px 10px', fontWeight: 700 }}>ACCESS_GRANTED ¥3,000</span>
          </div>
          <div style={{ marginTop: 8, opacity: 0.7 }}>&gt; _<span style={{ background: '#26C6DA', color: '#26C6DA' }}>|</span></div>
        </div>
      </div>
    </div>
  )
}

export const cybercoreMocks = [
  {
    id: 'cybercore-esports',
    title: 'eスポーツチームのサイト',
    kind: 'Web / ヒーロー',
    Comp: CyberEsports,
    why: [
      { label: 'モチーフ', text: '四隅のブラケットとワイヤーフレームの多面体はHUD(照準UI)の引用。画面を「端末越しの視界」に変えるのがサイバーコアの構図。' },
      { label: '色', text: '黒に蛍光グリーンとシアン。初期端末のフォスファー(蛍光体)の色で、人間の目ではなくセンサーが見ている世界を示す。' },
      { label: '質感', text: 'タイトルの赤緑のずれ(色収差)と走査線。デジタルの故障=グリッチを、勲章のように飾る倒錯がこの様式の核。' },
    ],
  },
  {
    id: 'cybercore-techno',
    title: 'テクノイベントの告知',
    kind: 'グラフィック / 告知',
    Comp: CyberTechno,
    why: [
      { label: 'レイアウト', text: '告知文をターミナル(コマンド画面)の出力として書く。ポスターの体裁を捨てて「システムのログ」に擬態する。' },
      { label: 'フォント', text: '等幅フォントの行頭に「>」。プロンプト記号は「機械があなたに話しかけている」という関係の宣言。' },
      { label: '色', text: 'ウィンドウ枠の外側は完全な黒。発光するUIをひとつだけ浮かべると、深夜のモニターの前の孤独まで再現できる。' },
    ],
  },
]

/* ---------------- ヴェイパーウェーブ ---------------- */

function VaporRecord() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg,#2D1B69 0%,#B4468E 55%,#F49BC1 78%)', position: 'relative', overflow: 'hidden', fontFamily: inter, color: '#fff' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <circle cx="280" cy="200" r="74" fill="#F7D14E" opacity="0.9" />
        <g fill="#1A1030">
          <path d="M96 250 q-4 -60 -22 -78 q22 8 28 30 q2 -30 -8 -52 q24 14 26 44 q8 -20 2 -40 q18 18 12 52 q-4 28 -10 44 z" opacity="0.85" />
          <rect x="88" y="248" width="22" height="34" rx="4" opacity="0.85" />
        </g>
        <g stroke="#57F2E5" strokeWidth="2" opacity="0.8">
          {[236, 258, 280, 302, 324].map((y) => (
            <line key={y} x1="120" y1={y} x2="440" y2={y} />
          ))}
        </g>
      </svg>
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 86, background: 'repeating-conic-gradient(#1A1030 0% 25%, #F49BC1 0% 50%) 0 0 / 44px 44px', transform: 'perspective(200px) rotateX(38deg) scale(1.3)', transformOrigin: 'bottom' }} />
      <div style={{ position: 'relative', textAlign: 'center', paddingTop: 44 }}>
        <div style={{ fontSize: 26, letterSpacing: '0.5em', fontWeight: 700, textShadow: '3px 3px 0 #57F2E5' }}>ＶＩＢＥＳ　ＭＡＲＴ</div>
        <div style={{ fontFamily: mincho, fontSize: 13, letterSpacing: '0.5em', marginTop: 10, color: '#FFE3F1' }}>中古レコード・永遠営業中</div>
      </div>
      <div style={{ position: 'absolute', top: 150, right: 46, textAlign: 'right', fontFamily: mincho, fontSize: 12, letterSpacing: '0.3em', lineHeight: 2.4, color: '#FFE3F1' }}>
        午前3時の<br />ショッピングモール
      </div>
      <div style={{ position: 'absolute', bottom: 104, left: 0, right: 0, textAlign: 'center', fontSize: 10, letterSpacing: '0.44em', color: '#57F2E5' }}>
        ＮＥＷ　ＡＲＲＩＶＡＬ　→　ＬＩＳＴＥＮ
      </div>
    </div>
  )
}

function VaporOS() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F49BC1', display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden', fontFamily: inter }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#fff 1.4px, transparent 1.5px)', backgroundSize: '26px 26px', opacity: 0.4 }} />
      <div style={{ position: 'relative', width: 380, background: '#C9C4CE', border: '2px solid #1A1030', boxShadow: '8px 8px 0 rgba(26,16,48,0.5)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(90deg,#2D1B69,#B4468E)', color: '#fff', padding: '7px 10px', fontSize: 11, fontWeight: 700 }}>
          <span>ＭＥＤＩＡ ＰＬＡＹＥＲ — nostalgia.wav</span>
          <span style={{ display: 'flex', gap: 4 }}>
            {['_', '□', '×'].map((b) => (
              <span key={b} style={{ width: 18, height: 16, background: '#C9C4CE', color: '#1A1030', fontSize: 9, display: 'grid', placeItems: 'center', border: '1px solid #1A1030' }}>{b}</span>
            ))}
          </span>
        </div>
        <div style={{ padding: 16 }}>
          <div style={{ background: '#1A1030', color: '#57F2E5', fontFamily: dotf, fontSize: 15, padding: '14px 14px', letterSpacing: '0.1em' }}>
            ♪ 街も人も、みんな夢<br />
            <span style={{ fontSize: 11, color: '#F49BC1' }}>ＴＯＫＹＯ ＳＵＮＳＥＴ ９２</span>
          </div>
          <div style={{ marginTop: 12, height: 10, border: '1.5px solid #1A1030', background: '#fff', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '1px 40% 1px 1px', background: 'linear-gradient(90deg,#2D1B69,#B4468E,#57F2E5)' }} />
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            {['◀◀', '▶', '■', '▶▶'].map((b) => (
              <span key={b} style={{ flex: 1, textAlign: 'center', background: '#DAD5DE', border: '2px solid #1A1030', boxShadow: 'inset -2px -2px 0 #8f8a96, inset 2px 2px 0 #fff', padding: '8px 0', fontSize: 12 }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const vaporwaveMocks = [
  {
    id: 'vaporwave-record',
    title: 'レコードショップのビジュアル',
    kind: 'Web / ヒーロー',
    Comp: VaporRecord,
    why: [
      { label: '色', text: '夕暮れのピンク〜紫のグラデにシアンの横縞。80〜90年代の広告写真を「劣化したVHS」越しに見た色が基準になっている。' },
      { label: 'モチーフ', text: 'ギリシャ彫像の断片・ヤシの木・市松の床。文脈から切り離された「豊かさの残骸」を並べ、消費文化の夢の跡を作る。' },
      { label: 'フォント', text: '全角のＬＡＴＩＮ文字と日本語の混在。当時の日本製品の輸出パッケージの文字風景を、異国の夢として引用している。' },
    ],
  },
  {
    id: 'vaporwave-os',
    title: '架空OSの音楽プレイヤー',
    kind: 'アプリ / UI',
    Comp: VaporOS,
    why: [
      { label: '質感', text: 'Windows95風のベベル(凹凸)ボタンとタイトルバー。古いOSのUI部品は、vaporwaveでは「遺跡の柱」と同格の懐古のオブジェ。' },
      { label: '色', text: 'OSのグレーの中に、紫→ピンクのグラデと液晶のシアン。事務的な部品と甘い色の衝突が「仕事用PCで見る真夜中の夢」を作る。' },
      { label: 'フォント', text: '液晶画面部分だけドット文字。解像度の低さは不便の記憶ではなく、もう戻れない時間の記号として愛でられる。' },
    ],
  },
]

/* ---------------- シンセウェーブ ---------------- */
const synthPink = '#FF3D81'

function SynthPoster() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg,#12082E 0%,#3A1160 52%,#B4256E 74%)', position: 'relative', overflow: 'hidden', textAlign: 'center', fontFamily: inter, color: '#fff' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <linearGradient id="synthSun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD447" />
            <stop offset="100%" stopColor={synthPink} />
          </linearGradient>
        </defs>
        <circle cx="280" cy="208" r="86" fill="url(#synthSun)" />
        {[176, 196, 214, 230, 244].map((y, i) => (
          <rect key={y} x="180" y={y + i * 2} width="200" height={4 + i * 1.4} fill="#12082E" opacity="0.9" />
        ))}
        <g stroke={synthPink} strokeWidth="1.6" opacity="0.85">
          {[300, 316, 336, 360, 390].map((y) => (
            <line key={y} x1="0" y1={y} x2="560" y2={y} />
          ))}
          {[-160, -60, 40, 140, 240, 340, 440, 540, 640, 720].map((x) => (
            <line key={x} x1={x} y1="420" x2={280 + (x - 280) * 0.24} y2="292" />
          ))}
        </g>
        {[
          [70, 60], [140, 110], [420, 50], [480, 100], [520, 160], [40, 150],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.8" fill="#fff" opacity="0.9" />
        ))}
      </svg>
      <div style={{ position: 'relative', paddingTop: 46 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.5em', color: '#57F2E5' }}>ALL NIGHT SYNTH RIDE</div>
        <div style={{ marginTop: 10, fontSize: 46, fontWeight: 900, fontStyle: 'italic', letterSpacing: '0.04em', background: 'linear-gradient(180deg,#fff 30%,#57F2E5 50%,#2D1B69 52%,#B7E3F5 66%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', filter: `drop-shadow(0 0 12px ${synthPink})` }}>
          MIDNIGHT DRIVE
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 0, right: 0, fontFamily: zen, fontSize: 11.5, letterSpacing: '0.3em' }}>
        10.31 FRI 22:00 / 首都高メタバース会場
      </div>
    </div>
  )
}

function SynthRadio() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#160B33', display: 'grid', placeItems: 'center', fontFamily: inter, color: '#E8DDFF' }}>
      <div style={{ width: 380, borderRadius: 14, border: `1.5px solid ${synthPink}`, boxShadow: `0 0 30px rgba(255,61,129,0.35), inset 0 0 26px rgba(255,61,129,0.08)`, padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.3em', color: '#57F2E5' }}>
          <span>FM 19.84 — NIGHT GRID RADIO</span>
          <span style={{ color: synthPink }}>● ON AIR</span>
        </div>
        <div style={{ marginTop: 16, fontSize: 21, fontWeight: 800, fontStyle: 'italic', letterSpacing: '0.02em' }}>
          Neon Interstate <span style={{ color: '#8d7fc0', fontWeight: 400, fontSize: 13 }}>/ Laser Youth</span>
        </div>
        <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 56, marginTop: 18 }}>
          {[18, 34, 26, 48, 40, 54, 30, 44, 52, 24, 38, 46, 20, 36].map((h, i) => (
            <div key={i} style={{ flex: 1, height: h, borderRadius: 2, background: i % 2 ? synthPink : '#57F2E5', opacity: 0.9, boxShadow: `0 0 8px ${i % 2 ? 'rgba(255,61,129,0.6)' : 'rgba(87,242,229,0.6)'}` }} />
          ))}
        </div>
        <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ width: 44, height: 44, borderRadius: '50%', border: `2px solid ${synthPink}`, display: 'grid', placeItems: 'center', color: synthPink, boxShadow: '0 0 12px rgba(255,61,129,0.5)' }}>▶</span>
          <div style={{ flex: 1, height: 4, borderRadius: 2, background: '#2c1d57', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '0 30% 0 0', borderRadius: 2, background: `linear-gradient(90deg,${synthPink},#57F2E5)` }} />
          </div>
          <span style={{ fontSize: 10, color: '#8d7fc0' }}>23:42</span>
        </div>
      </div>
    </div>
  )
}

export const synthwaveMocks = [
  {
    id: 'synthwave-poster',
    title: 'ナイトイベントのポスター',
    kind: 'ポスター',
    Comp: SynthPoster,
    why: [
      { label: 'モチーフ', text: '縞の入った夕日(レトロサン)と、地平線へ収束する遠近グリッド。80年代SF映画のオープニングの構図が、そのまま様式の紋章になった。' },
      { label: 'フォント', text: '極太イタリックにクローム(金属)のグラデーション。VHSのタイトルロゴの文法で、文字自体を「疾走する車体」にする。' },
      { label: '色', text: 'ネオンピンクとシアンは、夜のハイウェイの標識灯の色。深い紫の夜に置くと、発光して見える組み合わせだけを使う。' },
    ],
  },
  {
    id: 'synthwave-radio',
    title: 'レトロFMプレイヤー',
    kind: 'アプリ',
    Comp: SynthRadio,
    why: [
      { label: '質感', text: '枠線・ボタン・EQバーすべてに外向きのグロー(発光)。シンセウェーブのUIは「暗い車内で光る計器盤」が原風景。' },
      { label: '色', text: 'ピンクとシアンを交互に、必ず暗い紫の上で。二色のネオンの点滅は、シンセサイザーのアルペジオの視覚版。' },
      { label: 'レイアウト', text: 'ラジオ局・ON AIR・周波数(FM 19.84)という架空の放送の道具立て。ノスタルジーを「いま流れている」ことにする時制の演出。' },
    ],
  },
]
