// クラシック・装飾系 前半(ネオクラシカル / ヴィクトリアン / バロック / ラグジュアリー・タイポグラフィ)
// キャンバス 560×420 で設計
const zen = "'Zen Kaku Gothic New', sans-serif"
const mincho = "'Shippori Mincho', serif"
const cinzel = "'Cinzel', serif"
const marcellus = "'Marcellus', serif"
const pinyon = "'Pinyon Script', cursive"

/* ---------------- ネオクラシカル ---------------- */
const stoneInk = '#2E2A24'

function NeoclassicalMuseum() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EFEAE0', color: stoneInk, textAlign: 'center', position: 'relative', fontFamily: cinzel }}>
      <div style={{ paddingTop: 30, fontSize: 10, letterSpacing: '0.5em' }}>THE NATIONAL GALLERY</div>
      <svg aria-hidden="true" width="240" height="130" viewBox="0 0 240 130" style={{ marginTop: 16 }}>
        <path d="M120 4 L226 44 H14 Z" fill="none" stroke={stoneInk} strokeWidth="2.5" />
        <line x1="8" y1="52" x2="232" y2="52" stroke={stoneInk} strokeWidth="2.5" />
        {[40, 80, 120, 160, 200].map((x) => (
          <g key={x} stroke={stoneInk} strokeWidth="2">
            <line x1={x} y1="60" x2={x} y2="118" />
            <line x1={x - 8} y1="60" x2={x + 8} y2="60" />
            <line x1={x - 10} y1="122" x2={x + 10} y2="122" strokeWidth="3" />
          </g>
        ))}
      </svg>
      <div style={{ marginTop: 20, fontSize: 30, letterSpacing: '0.22em' }}>ANTIQUITY</div>
      <div style={{ fontFamily: mincho, fontSize: 13, letterSpacing: '0.3em', marginTop: 10 }}>古代への憧憬 — 新古典主義の200年</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 20 }}>
        <span style={{ width: 60, height: 1, background: stoneInk }} />
        <span style={{ fontSize: 11, letterSpacing: '0.3em' }}>IV.12 — VII.20</span>
        <span style={{ width: 60, height: 1, background: stoneInk }} />
      </div>
      <div style={{ position: 'absolute', bottom: 26, width: '100%', fontFamily: zen, fontSize: 10, letterSpacing: '0.24em', color: '#8a8172' }}>
        西館2F 特別展示室 / 一般 ¥2,000
      </div>
    </div>
  )
}

function NeoclassicalBank() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F5F1E8', color: stoneInk, position: 'relative', fontFamily: marcellus }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '26px 44px 0', fontSize: 10, letterSpacing: '0.34em', fontFamily: cinzel }}>
        <span>EST. MDCCXCII</span>
        <span>PRIVATE BANKING</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <svg aria-hidden="true" width="150" height="66" viewBox="0 0 150 66">
          <path d="M30 56 Q10 30 30 10 M30 56 q-14 -20 -2 -40" fill="none" stroke="#9C8A5A" strokeWidth="2" />
          <path d="M120 56 Q140 30 120 10 M120 56 q14 -20 2 -40" fill="none" stroke="#9C8A5A" strokeWidth="2" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} stroke="#9C8A5A" strokeWidth="1.6" fill="none">
              <path d={`M${34 + i * 3} ${48 - i * 11} q-10 -4 -12 -12`} />
              <path d={`M${116 - i * 3} ${48 - i * 11} q10 -4 12 -12`} />
            </g>
          ))}
          <text x="75" y="42" textAnchor="middle" fontSize="26" fontFamily="Cinzel" fill={stoneInk}>H&amp;S</text>
        </svg>
        <div style={{ fontSize: 26, letterSpacing: '0.3em', marginTop: 16, fontFamily: cinzel }}>HARLAND &amp; SONS</div>
        <div style={{ fontFamily: mincho, fontSize: 12.5, letterSpacing: '0.22em', marginTop: 14, color: '#6d6353' }}>三代先の資産を、理性で設計する。</div>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 0 }}>
        {['資産運用', '事業承継', '不動産', '相談予約'].map((t, i) => (
          <div key={t} style={{ fontFamily: zen, fontSize: 11, letterSpacing: '0.2em', padding: '10px 26px', borderLeft: i ? '1px solid #c9c0ac' : 'none' }}>
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}

export const neoclassicalMocks = [
  {
    id: 'neoclassical-museum',
    title: '美術館の展覧会サイト',
    kind: 'Web / ヒーロー',
    Comp: NeoclassicalMuseum,
    why: [
      { label: 'モチーフ', text: 'ペディメント(三角破風)と列柱は古代神殿の正面図。建築の比例をそのままレイアウトに移植するのが新古典主義の手癖。' },
      { label: 'レイアウト', text: '完全な中央揃えの左右対称。感情より理性、動きより均衡——シンメトリーは「正しさ」を視覚化する最古の方法。' },
      { label: '色', text: '大理石の白と石灰岩のアイボリー、文字は炭色のみ。色を消すことで、彫刻のような「時間に耐える顔」になる。' },
    ],
  },
  {
    id: 'neoclassical-bank',
    title: 'プライベートバンクのサイト',
    kind: 'Web / ブランド',
    Comp: NeoclassicalBank,
    why: [
      { label: 'モチーフ', text: '月桂樹のリースは古代ローマの栄誉の冠。金融が好んで使うのは「勝利と永続」の記号として2000年の実績があるから。' },
      { label: 'フォント', text: 'Cinzel系の碑文書体はローマの石碑のレタリングが源流。石に刻まれた文字の均整が、そのまま信用の書体になった。' },
      { label: '余白', text: '要素は少なく、間隔は広く、罫線は細く。新古典主義の余白は「静けさ」ではなく「格式」として機能する。' },
    ],
  },
]

/* ---------------- ヴィクトリアン ---------------- */
const burgundy = '#6B2E3E'
const vicGold = '#A98643'

function VictorianLabel() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E9DFC8', display: 'grid', placeItems: 'center', fontFamily: cinzel }}>
      <div style={{ width: 330, background: '#F3ECD8', border: `3px double ${burgundy}`, padding: 6 }}>
        <div style={{ border: `1px solid ${vicGold}`, padding: '20px 24px', textAlign: 'center', color: burgundy, position: 'relative' }}>
          <svg aria-hidden="true" width="90" height="16" viewBox="0 0 90 16" style={{ display: 'block', margin: '0 auto' }}>
            <path d="M4 8 q18 -12 41 0 q23 12 41 0" fill="none" stroke={vicGold} strokeWidth="1.4" />
            <circle cx="45" cy="8" r="2.6" fill={burgundy} />
          </svg>
          <div style={{ fontSize: 9, letterSpacing: '0.4em', marginTop: 10 }}>BY APPOINTMENT · FINEST QUALITY</div>
          <div style={{ fontFamily: pinyon, fontSize: 34, color: vicGold, marginTop: 8 }}>Peabody &amp; Finch</div>
          <div style={{ fontSize: 21, letterSpacing: '0.24em', marginTop: 6, fontWeight: 700 }}>DARJEELING</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 8 }}>
            <span style={{ width: 34, height: 1, background: burgundy }} />
            <span style={{ fontSize: 12 }}>◆</span>
            <span style={{ width: 34, height: 1, background: burgundy }} />
          </div>
          <div style={{ fontFamily: mincho, fontSize: 11, letterSpacing: '0.2em', marginTop: 10 }}>朝霧の茶園より、直輸入。</div>
          <div style={{ fontSize: 9, letterSpacing: '0.34em', marginTop: 12 }}>ESTD ★ 1862 ★ LONDON</div>
          {['tl', 'tr', 'bl', 'br'].map((c) => (
            <svg
              aria-hidden="true"
              key={c}
              width="26"
              height="26"
              viewBox="0 0 26 26"
              style={{
                position: 'absolute',
                top: c[0] === 't' ? -4 : 'auto',
                bottom: c[0] === 'b' ? -4 : 'auto',
                left: c[1] === 'l' ? -4 : 'auto',
                right: c[1] === 'r' ? -4 : 'auto',
                transform: `scale(${c[1] === 'r' ? -1 : 1}, ${c[0] === 'b' ? -1 : 1})`,
              }}
            >
              <path d="M2 24 Q2 6 22 4 q-10 4 -8 10 q-8 0 -12 10" fill={vicGold} />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}

function VictorianAd() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EFE6CF', display: 'grid', placeItems: 'center', fontFamily: cinzel, color: '#33291f' }}>
      <div style={{ width: 380, textAlign: 'center' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.34em', borderTop: '3px solid #33291f', borderBottom: '1px solid #33291f', padding: '7px 0' }}>
          GRAND EMPORIUM — 大売出しの儀
        </div>
        <div style={{ fontSize: 13, letterSpacing: '0.3em', marginTop: 16 }}>☞ 本日より一週間限り ☜</div>
        <div style={{ fontFamily: pinyon, fontSize: 44, color: burgundy, marginTop: 8 }}>Curiosities</div>
        <div style={{ fontSize: 19, letterSpacing: '0.3em', marginTop: 4, fontWeight: 700 }}>骨董と珍品の大陳列会</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12 }}>
          <span style={{ fontSize: 10 }}>❦</span>
          <span style={{ width: 90, height: 1, background: '#33291f' }} />
          <span style={{ fontSize: 12 }}>◆</span>
          <span style={{ width: 90, height: 1, background: '#33291f' }} />
          <span style={{ fontSize: 10 }}>❦</span>
        </div>
        <div style={{ fontFamily: mincho, fontSize: 11.5, lineHeight: 2.1, letterSpacing: '0.14em', marginTop: 12 }}>
          燭台・懐中時計・地球儀・鳥籠、その他<br />奇妙にして愉快なる品々、数百点。
        </div>
        <div style={{ marginTop: 14, display: 'inline-block', border: '1px solid #33291f', padding: '8px 30px' }}>
          <span style={{ fontSize: 11, letterSpacing: '0.3em' }}>入場無料 · 荷馬車にてお届け可</span>
        </div>
        <div style={{ fontSize: 9, letterSpacing: '0.3em', marginTop: 14, borderTop: '1px solid #33291f', paddingTop: 8 }}>
          No.7 BAKER STREET · TELEGRAPH “PEABODY”
        </div>
      </div>
    </div>
  )
}

export const victorianMocks = [
  {
    id: 'victorian-label',
    title: '紅茶ブランドのラベル',
    kind: 'パッケージ',
    Comp: VictorianLabel,
    why: [
      { label: 'フォント', text: 'スクリプト体・碑文体・明朝が1枚に同居。多書体の混植は当時の活版印刷所が「持てる活字を全部見せる」広告作法だった。' },
      { label: 'レイアウト', text: 'すべて中央揃えで、行ごとに書体とサイズを変えて積み上げる。縦の串刺し(センター軸)が過剰さを秩序に変える。' },
      { label: 'モチーフ', text: '二重罫・角の渦巻き・◆の区切り。空白を見つけたら飾りで埋める——「余白は未完成」というヴィクトリア朝の恐怖症(ホラー・ヴァキュイ)。' },
    ],
  },
  {
    id: 'victorian-ad',
    title: '骨董商の新聞広告',
    kind: '印刷物 / 広告',
    Comp: VictorianAd,
    why: [
      { label: 'モチーフ', text: '「☞」の指差しマークは19世紀の活版広告の名物。ハイパーリンクの祖先のような、視線を誘導する実用装飾。' },
      { label: '色', text: 'セピアの紙色に黒と深紅のみ。当時のインクの制約が、いまは「古文書の風格」として読み替えられる。' },
      { label: 'フォント', text: '1行ごとに大小を極端に振るのは、遠くから読ませる見出し・近くで読ませる但し書きという新聞広告の階層術。' },
    ],
  },
]

/* ---------------- バロック ---------------- */
const baroqueGold = '#B4832C'

function BaroqueOpera() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse 70% 60% at 50% 42%, #3A2417 0%, #16100B 70%)', position: 'relative', overflow: 'hidden', textAlign: 'center', fontFamily: cinzel }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        <g fill="none" stroke={baroqueGold} strokeWidth="2.5" strokeLinecap="round">
          <path d="M40 44 q60 -18 90 22 q-40 -8 -52 24 q-10 -30 -38 -46" />
          <path d="M520 44 q-60 -18 -90 22 q40 -8 52 24 q10 -30 38 -46" />
          <path d="M40 380 q60 18 90 -22 q-40 8 -52 -24 q-10 30 -38 46" />
          <path d="M520 380 q-60 18 -90 -22 q40 8 52 -24 q10 30 38 46" />
          <path d="M180 396 q100 -26 200 0" strokeWidth="1.6" />
          <path d="M180 26 q100 26 200 0" strokeWidth="1.6" />
        </g>
        <circle cx="280" cy="180" r="120" fill="none" stroke={baroqueGold} strokeWidth="0.8" opacity="0.5" />
      </svg>
      <div style={{ position: 'relative', paddingTop: 74, color: '#E8D9B8' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.5em', color: baroqueGold }}>TEATRO ALLE STELLE</div>
        <div style={{ fontSize: 46, letterSpacing: '0.14em', marginTop: 20, textShadow: '0 0 34px rgba(180,131,44,0.55)' }}>LA NOTTE</div>
        <div style={{ fontFamily: mincho, fontSize: 13, letterSpacing: '0.34em', marginTop: 12 }}>歌劇「夜」— 全三幕</div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 22 }}>
          <span style={{ width: 44, height: 1, background: baroqueGold }} />
          <span style={{ color: baroqueGold, fontSize: 14 }}>❦</span>
          <span style={{ width: 44, height: 1, background: baroqueGold }} />
        </div>
        <div style={{ fontFamily: zen, fontSize: 11, letterSpacing: '0.26em', marginTop: 16, color: '#b39e77' }}>
          十月十二日 · 十九時開演 · 燭光にて
        </div>
      </div>
    </div>
  )
}

function BaroqueChocolat() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1E120C', display: 'grid', placeItems: 'center', fontFamily: mincho }}>
      <div style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
        <div style={{ width: 210, height: 280, background: 'linear-gradient(160deg, #4A2A18 0%, #2A1710 60%)', border: `1px solid ${baroqueGold}`, position: 'relative', display: 'grid', placeItems: 'center' }}>
          <svg aria-hidden="true" width="150" height="150" viewBox="0 0 150 150">
            <g fill="none" stroke={baroqueGold} strokeWidth="1.6">
              <circle cx="75" cy="75" r="52" opacity="0.7" />
              <path d="M75 23 q14 16 0 32 q-14 -16 0 -32" fill={baroqueGold} opacity="0.85" />
              <path d="M75 127 q14 -16 0 -32 q-14 16 0 32" fill={baroqueGold} opacity="0.85" />
              <path d="M23 75 q16 -14 32 0 q-16 14 -32 0" fill={baroqueGold} opacity="0.85" />
              <path d="M127 75 q-16 -14 -32 0 q16 14 32 0" fill={baroqueGold} opacity="0.85" />
            </g>
            <text x="75" y="82" textAnchor="middle" fontSize="17" fontFamily="Cinzel" fill="#E8D9B8">No.9</text>
          </svg>
          <div style={{ position: 'absolute', bottom: 14, width: '100%', textAlign: 'center', fontSize: 10, letterSpacing: '0.4em', color: baroqueGold, fontFamily: cinzel }}>
            GRAND CRU
          </div>
        </div>
        <div style={{ width: 200, color: '#E8D9B8' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.4em', color: baroqueGold, fontFamily: cinzel }}>CACAO 78%</div>
          <div style={{ fontSize: 22, letterSpacing: '0.2em', marginTop: 12, lineHeight: 1.7 }}>闇のような、<br />一粒を。</div>
          <div style={{ fontFamily: zen, fontSize: 11, lineHeight: 2.1, color: '#b39e77', marginTop: 14 }}>
            ベネズエラ産カカオを薪火で焙煎。ベルベットの闇に、金の香りがひらく。
          </div>
          <div style={{ marginTop: 18, display: 'inline-block', border: `1px solid ${baroqueGold}`, color: baroqueGold, padding: '10px 24px', fontSize: 11, letterSpacing: '0.3em', fontFamily: cinzel }}>
            ¥3,800 — 求める
          </div>
        </div>
      </div>
    </div>
  )
}

export const baroqueMocks = [
  {
    id: 'baroque-opera',
    title: 'オペラ公演のポスター',
    kind: 'ポスター',
    Comp: BaroqueOpera,
    why: [
      { label: '色', text: '画面の大半を闇に沈め、中央だけを蝋燭色で照らす。光と闇の落差(キアロスクーロ)がバロックの感情装置。' },
      { label: 'モチーフ', text: '四隅の渦巻く金の蔓は、教会や劇場の額縁彫刻の引用。直線を嫌い、すべてを渦とうねりで飾る。' },
      { label: 'フォント', text: '碑文体の見出しに金の発光をまとわせる。文字を「読むもの」ではなく「荘厳に鳴るもの」として演出する。' },
    ],
  },
  {
    id: 'baroque-chocolat',
    title: '高級チョコレートのEC',
    kind: 'EC / プロダクト',
    Comp: BaroqueChocolat,
    why: [
      { label: '質感', text: '深い焦茶のグラデーションはベルベットの再現。バロックは色ではなく「布・大理石・金箔」という材質で豪奢を語る。' },
      { label: 'かたち', text: '金の装飾は十字型のダマスク文様。左右上下に渦を対称配置して、過剰さの中に宮殿の秩序を保つ。' },
      { label: '色', text: '金は広い面で塗らず、細い線と小さな面だけに。闇が広いほど、わずかな金が「貴重なもの」として輝く。' },
    ],
  },
]

/* ---------------- ラグジュアリー・タイポグラフィ ---------------- */

function LuxuryPerfume() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#FAF8F4', color: '#191714', position: 'relative', fontFamily: marcellus }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 48px 0', fontSize: 9.5, letterSpacing: '0.44em' }}>
        <span>MAISON NOIR</span>
        <span>PARIS — TOKYO</span>
      </div>
      <div style={{ position: 'absolute', top: 118, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.5em', color: '#9a927f' }}>EAU DE PARFUM</div>
        <div style={{ fontSize: 74, letterSpacing: '0.3em', textIndent: '0.3em', marginTop: 18, fontWeight: 400 }}>N U I T</div>
        <div style={{ width: 1, height: 54, background: '#B49B62', margin: '22px auto 0' }} />
        <div style={{ fontFamily: mincho, fontSize: 12, letterSpacing: '0.4em', marginTop: 20, color: '#5c554a' }}>
          夜を、まとうという選択。
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 48, right: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 9.5, letterSpacing: '0.36em' }}>
        <span>50ml — ¥42,000</span>
        <span style={{ borderBottom: '1px solid #191714', paddingBottom: 4 }}>DISCOVER</span>
      </div>
    </div>
  )
}

function LuxuryLookbook() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#131110', color: '#EDE7DA', position: 'relative', fontFamily: marcellus }}>
      <div style={{ position: 'absolute', top: 34, left: 0, right: 0, textAlign: 'center', fontSize: 9.5, letterSpacing: '0.5em', color: '#8d8574' }}>
        HIGH JEWELRY — COLLECTION 2026
      </div>
      <div style={{ position: 'absolute', top: '46%', left: 0, right: 0, transform: 'translateY(-50%)', textAlign: 'center' }}>
        <div style={{ fontSize: 96, letterSpacing: '0.08em', lineHeight: 1 }}>N°7</div>
        <div style={{ fontFamily: mincho, fontStyle: 'italic', fontSize: 15, letterSpacing: '0.3em', marginTop: 18, color: '#B49B62' }}>
          — la lumière —
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 76, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 56, fontSize: 9.5, letterSpacing: '0.4em', color: '#8d8574' }}>
        <span>DIAMOND</span>
        <span style={{ color: '#EDE7DA' }}>PLATINUM</span>
        <span>PEARL</span>
      </div>
      <div style={{ position: 'absolute', bottom: 32, left: 0, right: 0, textAlign: 'center' }}>
        <span style={{ fontSize: 10, letterSpacing: '0.4em', borderBottom: '1px solid #B49B62', paddingBottom: 5 }}>VIEW THE FILM</span>
      </div>
    </div>
  )
}

export const luxurytypeMocks = [
  {
    id: 'luxurytype-perfume',
    title: '香水ブランドのヒーロー',
    kind: 'Web / ヒーロー',
    Comp: LuxuryPerfume,
    why: [
      { label: 'フォント', text: '写真を置かず、細身のセリフだけで香りを語る。文字が大きく・細く・広い字間であるほど、声は小さく品位は高く聞こえる。' },
      { label: '余白', text: '画面の8割が空白。ラグジュアリーの余白は「買わせない」ための距離で、近寄りがたさがそのまま価格の予告になる。' },
      { label: '色', text: '白・墨・シャンパンゴールドの3色のみ。金は1本の縦線にだけ使う——最小の分量が最大の贅沢に見える逆説。' },
    ],
  },
  {
    id: 'luxurytype-lookbook',
    title: 'ジュエリーのルックブック',
    kind: 'Web / ブランド',
    Comp: LuxuryLookbook,
    why: [
      { label: 'フォント', text: '「N°7」の2文字を画面の主役に据える。番号や記号だけで語るのは、説明を省ける者だけが持つブランドの特権。' },
      { label: '色', text: '黒地に生成りの文字。宝石を見せずに闇を見せることで、光への想像力を買い手に委ねる。' },
      { label: 'レイアウト', text: 'すべて中央軸に整列し、要素間を極端に離す。字間・行間・余白という「距離の設計」だけで階層を作っている。' },
    ],
  },
]
