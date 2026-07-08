// 幻想・ファンタジー系(オーロラ / エーテリアル / ミスティカルウエスタン / シュルレアリスム / テネブリズム)
// キャンバス 560×420 で設計
const inter = "'Inter', sans-serif"
const zen = "'Zen Kaku Gothic New', sans-serif"
const mincho = "'Shippori Mincho', serif"
const marcellus = "'Marcellus', serif"
const rye = "'Rye', serif"
const jost = "'Jost', sans-serif"

/* ---------------- オーロラ ---------------- */

function AuroraBlobs() {
  const blob = (bg, style) => (
    <div aria-hidden="true" style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(46px)', background: bg, ...style }} />
  )
  return (
    <>
      {blob('#7C6CF2', { width: 300, height: 260, top: -60, left: 60, opacity: 0.75 })}
      {blob('#2FB7C9', { width: 260, height: 240, top: 60, right: -40, opacity: 0.6 })}
      {blob('#E766B4', { width: 260, height: 220, bottom: -80, left: 180, opacity: 0.55 })}
    </>
  )
}

function AuroraAI() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0B0D1A', position: 'relative', overflow: 'hidden', fontFamily: inter, color: '#F0EFFA' }}>
      <AuroraBlobs />
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', padding: '26px 40px', fontSize: 12 }}>
        <span style={{ fontWeight: 700 }}>lumina*</span>
        <span style={{ fontSize: 11, color: '#9a98c0' }}>Product · Docs · Pricing</span>
      </div>
      <div style={{ position: 'relative', textAlign: 'center', marginTop: 46 }}>
        <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>
          光のはやさで、<br />
          <span style={{ background: 'linear-gradient(90deg,#8F7BFF,#3ECFE0,#F07BC8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            チームは考える。
          </span>
        </div>
        <div style={{ fontFamily: zen, fontSize: 12, color: '#9a98c0', marginTop: 16, lineHeight: 2 }}>
          会議メモから意思決定まで、AIがそっと下書きする。
        </div>
        <div style={{ marginTop: 24, display: 'inline-flex', gap: 12 }}>
          <span style={{ background: 'linear-gradient(90deg,#8F7BFF,#3ECFE0)', color: '#0B0D1A', fontWeight: 700, fontSize: 12.5, padding: '12px 26px', borderRadius: 999 }}>
            無料ではじめる
          </span>
          <span style={{ border: '1px solid rgba(240,239,250,0.3)', fontSize: 12.5, padding: '12px 22px', borderRadius: 999, background: 'rgba(240,239,250,0.06)', backdropFilter: 'blur(6px)' }}>
            デモを見る
          </span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 26, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 34, fontSize: 10, color: '#77759c', letterSpacing: '0.12em' }}>
        <span>SOC2</span><span>99.99% SLA</span><span>10k+ teams</span>
      </div>
    </div>
  )
}

function AuroraMusic() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0E0F1E', display: 'grid', placeItems: 'center', position: 'relative', overflow: 'hidden', fontFamily: inter, color: '#EFEEF8' }}>
      <AuroraBlobs />
      <div style={{ position: 'relative', width: 330, borderRadius: 24, padding: 24, background: 'rgba(20,22,40,0.55)', backdropFilter: 'blur(14px)', border: '1px solid rgba(240,239,250,0.14)' }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 74, height: 74, borderRadius: 16, background: 'linear-gradient(135deg,#8F7BFF,#3ECFE0 55%,#F07BC8)' }} />
          <div>
            <div style={{ fontFamily: zen, fontSize: 14.5, fontWeight: 700 }}>ひかりの群れ</div>
            <div style={{ fontSize: 11, color: '#9a98c0', marginTop: 4 }}>Polar Echoes — Night Drift</div>
          </div>
        </div>
        <div style={{ marginTop: 20, height: 5, borderRadius: 3, background: 'rgba(240,239,250,0.14)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '0 38% 0 0', borderRadius: 3, background: 'linear-gradient(90deg,#8F7BFF,#3ECFE0,#F07BC8)' }} />
          <div style={{ position: 'absolute', left: '62%', top: -4, width: 13, height: 13, borderRadius: '50%', background: '#fff', boxShadow: '0 0 14px #8F7BFF' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#9a98c0', marginTop: 8 }}>
          <span>2:48</span><span>4:31</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30, marginTop: 14, fontSize: 19 }}>
          <span>⏮</span>
          <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#8F7BFF,#3ECFE0)', display: 'grid', placeItems: 'center', color: '#0E0F1E', fontSize: 16 }}>▶</span>
          <span>⏭</span>
        </div>
      </div>
    </div>
  )
}

export const auroraMocks = [
  {
    id: 'aurora-ai',
    title: 'AIスタートアップのLP',
    kind: 'Web / ヒーロー',
    Comp: AuroraAI,
    why: [
      { label: '色', text: '紫・シアン・ピンクが暗闇の中でぼんやり混ざる。境界のないメッシュグラデーションは「まだ形のない知性」の視覚化として、AI企業の制服になった。' },
      { label: '質感', text: '光は必ず「にじませて」使う。 blurの強い色面は発光体の再現で、画面そのものをディスプレイの夜空に変える。' },
      { label: 'フォント', text: '文字は堅実なサンセリフのまま、グラデーションを文字の中だけに流す。背景と文字で光を分担させると幻想と可読性が両立する。' },
    ],
  },
  {
    id: 'aurora-music',
    title: '音楽アプリのナイトモード',
    kind: 'アプリ',
    Comp: AuroraMusic,
    why: [
      { label: '質感', text: '半透明のガラスカード(グラスモーフィズム)越しにオーロラが透ける。「光の前に磨りガラスを置く」のがこの様式の定番の奥行き。' },
      { label: '色', text: 'プログレスバーやジャケットにだけ極彩のグラデを許し、他は無彩色に抑える。光は面積を絞るほどオーロラらしく見える。' },
      { label: 'かたち', text: 'シークバーのつまみに白い発光(グロー)を一点。夜空の中の恒星のように、操作点だけを光らせて視線を導く。' },
    ],
  },
]

/* ---------------- エーテリアル ---------------- */

function EtherealSkincare() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(160deg,#EDF0F8 0%,#F7F3EE 45%,#EAE9F4 100%)', position: 'relative', overflow: 'hidden', fontFamily: marcellus, color: '#5A5870' }}>
      <div aria-hidden="true" style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: '#FFFFFF', filter: 'blur(60px)', top: -80, right: -60, opacity: 0.9 }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 220, height: 220, borderRadius: '50%', background: '#CBD3EE', filter: 'blur(70px)', bottom: -70, left: -40, opacity: 0.7 }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 130, height: 130, borderRadius: '50%', border: '1px solid rgba(90,88,112,0.25)', top: 70, right: 110 }} />
      <div style={{ position: 'relative', padding: '34px 48px', fontSize: 10, letterSpacing: '0.44em' }}>SÉRAPHINE SKIN</div>
      <div style={{ position: 'relative', marginTop: 52, textAlign: 'center' }}>
        <div style={{ fontSize: 13, letterSpacing: '0.4em', color: '#9a97ad' }}>NEW ESSENCE</div>
        <div style={{ fontSize: 42, letterSpacing: '0.18em', marginTop: 14 }}>
          light <span style={{ fontFamily: mincho, fontStyle: 'italic', color: '#8d8ab0' }}>as air</span>
        </div>
        <div style={{ fontFamily: mincho, fontSize: 12, letterSpacing: '0.3em', marginTop: 18, lineHeight: 2.3, color: '#7d7a92' }}>
          肌に、羽化のような朝を。<br />霧よりも軽い、透明のヴェール。
        </div>
        <div style={{ marginTop: 24, display: 'inline-block', padding: '11px 34px', borderRadius: 999, background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(90,88,112,0.2)', fontSize: 10.5, letterSpacing: '0.34em', backdropFilter: 'blur(4px)' }}>
          DISCOVER
        </div>
      </div>
    </div>
  )
}

function EtherealPhoto() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg,#DDE4F2 0%,#F3EFEA 70%,#E9E4EF 100%)', position: 'relative', overflow: 'hidden', fontFamily: marcellus, color: '#4d4b62' }}>
      <div aria-hidden="true" style={{ position: 'absolute', width: 150, height: 150, borderRadius: '50%', background: '#fff', filter: 'blur(26px)', top: 66, left: '50%', transform: 'translateX(-50%)', opacity: 0.95 }} />
      <svg aria-hidden="true" width="560" height="200" viewBox="0 0 560 200" style={{ position: 'absolute', bottom: 0 }}>
        <path d="M0 150 Q140 110 280 140 T560 130 V200 H0 Z" fill="#CDD3E6" opacity="0.5" />
        <path d="M0 170 Q180 140 340 165 T560 160 V200 H0 Z" fill="#BEC6DE" opacity="0.45" />
      </svg>
      <div style={{ position: 'relative', textAlign: 'center', paddingTop: 96 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.5em', color: '#8f8ca6' }}>PHOTOGRAPHS BY</div>
        <div style={{ fontSize: 40, letterSpacing: '0.24em', marginTop: 14 }}>SORA UMI</div>
        <div style={{ fontFamily: mincho, fontStyle: 'italic', fontSize: 13, letterSpacing: '0.3em', marginTop: 12, color: '#8d8ab0' }}>
          — 夜明けと霧のあいだ —
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 44, fontSize: 10, letterSpacing: '0.34em', color: '#7d7a92' }}>
        <span>SERIES I</span><span style={{ borderBottom: '1px solid #7d7a92', paddingBottom: 3 }}>SERIES II</span><span>ABOUT</span>
      </div>
    </div>
  )
}

export const etherealMocks = [
  {
    id: 'ethereal-skincare',
    title: 'スキンケアブランドのヒーロー',
    kind: 'Web / ヒーロー',
    Comp: EtherealSkincare,
    why: [
      { label: '色', text: 'ペールブルー・ラベンダー・乳白の高明度だけで組む。白飛び寸前の淡さが「この世の重力から半歩浮いた」気配を作る。' },
      { label: '質感', text: '輪郭のない白い光暈(ハレーション)を画面に浮かべる。ピントの合わない光は、見る人の記憶の中の朝もやを呼び出す装置。' },
      { label: 'フォント', text: '細いセリフの正体にイタリックを一語だけ混ぜる。書体の「ゆらぎ」が、幻想が現実に混入する瞬間を演出する。' },
    ],
  },
  {
    id: 'ethereal-photo',
    title: '写真家のカバーページ',
    kind: 'Web / ポートフォリオ',
    Comp: EtherealPhoto,
    why: [
      { label: 'レイアウト', text: '要素は中央にまっすぐ、ただし地平は波打つ霧の層。整列の秩序と霞の無秩序を重ねるのがエーテリアルの奥行き。' },
      { label: '色', text: '空から砂への縦のグラデーションは「時間帯の曖昧さ」。夜明けとも夕暮れともつかない光が、写真の詩性を予告する。' },
      { label: '余白', text: '名前の周りに霧しか置かない。説明を消すほど、見る人は「静けさそのもの」を作品として受け取る。' },
    ],
  },
]

/* ---------------- ミスティカルウエスタン ---------------- */
const desertNight = '#22283F'

function WesternCandle() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E8D4B8', display: 'grid', placeItems: 'center', fontFamily: rye, color: '#4a2f1c' }}>
      <div style={{ width: 320, textAlign: 'center', position: 'relative' }}>
        <svg aria-hidden="true" width="300" height="250" viewBox="0 0 300 250" style={{ display: 'block', margin: '0 auto' }}>
          <path d="M30 250 V120 a120 120 0 0 1 240 0 V250" fill={desertNight} />
          <circle cx="150" cy="106" r="34" fill="none" stroke="#E8C87A" strokeWidth="2" />
          <path d="M172 92 a30 30 0 1 0 4 30 a24 24 0 0 1 -4 -30" fill="#E8C87A" />
          {[
            [86, 70], [214, 66], [110, 152], [196, 148], [150, 42],
          ].map(([x, y], i) => (
            <path key={i} d={`M${x} ${y - 6} l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2 z`} fill="#E8C87A" />
          ))}
          <g stroke="#E8C87A" strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M70 210 v-44 q0 -10 8 -10 q8 0 8 10 v10 M78 176 h-16" />
            <path d="M222 210 v-38 q0 -8 6 -8 q6 0 6 8 v6" />
          </g>
          <ellipse cx="150" cy="228" rx="60" ry="8" fill="none" stroke="#E8C87A" strokeWidth="1.4" opacity="0.7" />
        </svg>
        <div style={{ fontSize: 22, letterSpacing: '0.14em', marginTop: 18 }}>DESERT MOON</div>
        <div style={{ fontFamily: mincho, fontSize: 11.5, letterSpacing: '0.26em', marginTop: 10, color: '#7a5a3a' }}>
          荒野の夜のための、セージ香るキャンドル
        </div>
        <div style={{ marginTop: 14, fontSize: 11, letterSpacing: '0.3em', borderTop: '2px solid #4a2f1c', borderBottom: '2px solid #4a2f1c', display: 'inline-block', padding: '8px 22px' }}>
          ¥3,200 — 灯す
        </div>
      </div>
    </div>
  )
}

function WesternFes() {
  return (
    <div style={{ width: '100%', height: '100%', background: `linear-gradient(180deg, ${desertNight} 0%, #46325C 46%, #C97E4A 78%, #E0A968 100%)`, position: 'relative', overflow: 'hidden', textAlign: 'center', fontFamily: rye, color: '#F2E3C8' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        {[
          [60, 60], [130, 110], [430, 70], [500, 130], [280, 40], [370, 120], [200, 84],
        ].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y - 7} l2.4 4.6 4.6 2.4 -4.6 2.4 -2.4 4.6 -2.4 -4.6 -4.6 -2.4 4.6 -2.4 z`} fill="#F2E3C8" opacity="0.9" />
        ))}
        <circle cx="280" cy="150" r="44" fill="none" stroke="#F2E3C8" strokeWidth="2" />
        <circle cx="280" cy="150" r="9" fill="#F2E3C8" />
        <g stroke="#F2E3C8" strokeWidth="2">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
            <line key={r} x1="280" y1="94" x2="280" y2="82" transform={`rotate(${r} 280 150)`} />
          ))}
        </g>
        <g fill="#1A1626">
          <path d="M60 420 v-70 q0 -10 9 -10 q9 0 9 10 v18 h14 v-30 q0 -10 9 -10 q9 0 9 10 v82 z" />
          <path d="M470 420 v-56 q0 -9 8 -9 q8 0 8 9 v14 h12 v-24 q0 -9 8 -9 q8 0 8 9 v66 z" />
        </g>
      </svg>
      <div style={{ position: 'relative', paddingTop: 224 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.5em' }}>UNDER THE DESERT SKY</div>
        <div style={{ fontSize: 40, letterSpacing: '0.1em', marginTop: 12, textShadow: '0 3px 0 rgba(26,22,38,0.5)' }}>MYSTIC MESA</div>
        <div style={{ fontFamily: zen, fontSize: 11.5, letterSpacing: '0.3em', marginTop: 12 }}>
          音楽と占星のフェス — 9.19 SAT · 20 SUN
        </div>
        <div style={{ marginTop: 16, display: 'inline-block', border: '2px solid #F2E3C8', padding: '9px 26px', fontSize: 11, letterSpacing: '0.26em' }}>
          チケット —
        </div>
      </div>
    </div>
  )
}

export const mysticwesternMocks = [
  {
    id: 'mysticwestern-candle',
    title: 'キャンドルブランドのカード',
    kind: 'EC / プロダクト',
    Comp: WesternCandle,
    why: [
      { label: 'モチーフ', text: 'アーチ窓の中に三日月・星・サボテン。西部劇の乾いた道具立てに天体と魔術を混ぜるのが「ミスティカル」の調合比。' },
      { label: '色', text: '砂色の昼とインクの夜をひとつの画面に同居させる。テラコッタ×濃紺の温冷対比が、荒野の昼夜の落差を運ぶ。' },
      { label: 'フォント', text: 'ウエスタン看板由来のスラブセリフ(Rye)は酒場のポスターの声。オカルトな内容を、あえて陽気な書体で語るずらしが効く。' },
    ],
  },
  {
    id: 'mysticwestern-fes',
    title: '砂漠フェスのポスター',
    kind: 'ポスター',
    Comp: WesternFes,
    why: [
      { label: '色', text: '紺→紫→夕焼けの縦グラデーションは砂漠のマジックアワー。空の色だけで「場所」と「時刻」を同時に説明している。' },
      { label: 'モチーフ', text: '四芒星のきらめきと放射する太陽は占星術の図版から、サボテンのシルエットは西部劇から。出典の違う記号の混血が世界観になる。' },
      { label: 'レイアウト', text: '中央対称+アーチ状の視線の流れ。タロットカードの構図を借りると、ただの告知が「お告げ」の顔になる。' },
    ],
  },
]

/* ---------------- シュルレアリスム ---------------- */
const magritteBlue = '#3E6FA8'

function SurrealExhibition() {
  return (
    <div style={{ width: '100%', height: '100%', background: `linear-gradient(180deg, ${magritteBlue} 0%, #7FA8CF 60%, #C9BCA4 60.2%, #B3A78E 100%)`, position: 'relative', overflow: 'hidden', fontFamily: mincho, color: '#20242c' }}>
      <svg aria-hidden="true" width="560" height="420" viewBox="0 0 560 420" style={{ position: 'absolute', inset: 0 }}>
        {[
          [90, 60, 60], [230, 110, 76], [420, 50, 66],
        ].map(([x, y, w], i) => (
          <g key={i} fill="#F3F1EA">
            <ellipse cx={x} cy={y} rx={w * 0.42} ry={14} />
            <ellipse cx={x + w * 0.3} cy={y + 6} rx={w * 0.34} ry={11} />
          </g>
        ))}
        <ellipse cx="300" cy="342" rx="130" ry="10" fill="#20242c" opacity="0.35" />
        <g transform="translate(250 130)">
          <rect x="0" y="0" width="100" height="188" fill="#3A3630" />
          <rect x="8" y="8" width="84" height="172" fill="#6E869E" />
          <circle cx="82" cy="96" r="4" fill="#E8C87A" />
        </g>
        <ellipse cx="150" cy="252" rx="26" ry="34" fill="#F3F1EA" stroke="#20242c" strokeWidth="1.4" />
      </svg>
      <div style={{ position: 'relative', padding: '34px 44px' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.44em', color: '#F3F1EA', fontFamily: jost }}>MUSEUM OF DREAMS</div>
        <div style={{ fontSize: 30, letterSpacing: '0.2em', marginTop: 14, color: '#F3F1EA' }}>扉は、空に開く。</div>
        <div style={{ fontSize: 12, letterSpacing: '0.24em', marginTop: 12, color: '#E4EAF2', lineHeight: 2 }}>
          シュルレアリスム百年展
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 44, fontFamily: jost, fontSize: 10.5, letterSpacing: '0.3em', color: '#F3F1EA' }}>
        10.4 — 1.11 · 夜間開館あり
      </div>
      <div style={{ position: 'absolute', bottom: 26, right: 40, background: '#20242c', color: '#F3F1EA', fontFamily: zen, fontSize: 11, letterSpacing: '0.2em', padding: '10px 22px', borderRadius: 999 }}>
        チケットを予約
      </div>
    </div>
  )
}

function SurrealPodcast() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#DCCDB4', display: 'grid', placeItems: 'center', fontFamily: mincho, color: '#2b2a26' }}>
      <div style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
        <svg aria-hidden="true" width="230" height="230" viewBox="0 0 230 230" style={{ background: magritteBlue, borderRadius: 6 }}>
          <ellipse cx="70" cy="46" rx="30" ry="10" fill="#F3F1EA" />
          <ellipse cx="170" cy="70" rx="36" ry="12" fill="#F3F1EA" />
          <line x1="0" y1="170" x2="230" y2="170" stroke="#2b2a26" strokeWidth="2" />
          <ellipse cx="115" cy="118" rx="46" ry="30" fill="#F3F1EA" stroke="#2b2a26" strokeWidth="2.4" />
          <circle cx="115" cy="118" r="15" fill="#5C8BBF" stroke="#2b2a26" strokeWidth="2" />
          <circle cx="115" cy="118" r="6" fill="#2b2a26" />
          <circle cx="119" cy="113" r="2" fill="#fff" />
          <line x1="115" y1="148" x2="115" y2="170" stroke="#2b2a26" strokeWidth="2" />
          <path d="M96 170 l38 0 M100 178 h30 M104 186 h22" stroke="#2b2a26" strokeWidth="2" opacity="0.5" />
        </svg>
        <div style={{ width: 210 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.4em', fontFamily: jost, color: '#7a6e58' }}>PODCAST — 毎週金曜</div>
          <div style={{ fontSize: 24, letterSpacing: '0.12em', lineHeight: 1.8, marginTop: 12 }}>まぶたの裏の<br />博物誌</div>
          <div style={{ fontFamily: zen, fontSize: 11.5, lineHeight: 2.1, color: '#5c5443', marginTop: 12 }}>
            夢の中でしか会えない風景を、目撃者の証言だけで再構成する30分。
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 10, fontFamily: jost, fontSize: 10.5, letterSpacing: '0.16em' }}>
            <span style={{ background: '#2b2a26', color: '#DCCDB4', padding: '9px 18px', borderRadius: 999 }}>▶ EP.42 を聴く</span>
            <span style={{ border: '1px solid #2b2a26', padding: '9px 14px', borderRadius: 999 }}>FOLLOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const surrealismMocks = [
  {
    id: 'surrealism-exhibition',
    title: '美術展のヒーロー',
    kind: 'Web / ヒーロー',
    Comp: SurrealExhibition,
    why: [
      { label: 'モチーフ', text: '昼の空・浮かぶ扉・地面に落ちる巨大な卵。それぞれは写実なのに、組み合わせだけが間違っている——デペイズマン(異所配置)の構図。' },
      { label: 'レイアウト', text: '何もない地平線が画面を二分し、長い影が奥行きを誇張する。舞台のように「空虚な広さ」を作るのがシュルレアリスムの空間術。' },
      { label: '色', text: 'マグリットの空色と砂の色。悪夢ではなく白昼夢——明るく澄んだ色ほど、ありえない光景の不穏さが際立つ。' },
    ],
  },
  {
    id: 'surrealism-podcast',
    title: '夢のポッドキャストのジャケット',
    kind: 'グラフィック / カバー',
    Comp: SurrealPodcast,
    why: [
      { label: 'モチーフ', text: '空に浮かぶ一つ目は「見る者が見られている」というシュルレアリスムの反転。ラジオ=耳の媒体に目を置くずらしも同じ文法。' },
      { label: 'かたち', text: '輪郭線のあるフラットな描写で、写実と図案の中間に留める。生々しすぎる夢は悪夢になり、図案化しすぎると寓話で終わる。' },
      { label: '色', text: '青空+生成りの2色世界に、瞳の青を一点。現実の色数を減らすことが「夢の中の妙な静けさ」の正体。' },
    ],
  },
]

/* ---------------- テネブリズム ---------------- */
const candleGold = '#C28F3A'

function TenebrismWhisky() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse 46% 60% at 38% 46%, #4A3316 0%, #191007 62%, #0C0805 100%)', position: 'relative', overflow: 'hidden', fontFamily: mincho, color: '#E4D3AC' }}>
      <svg aria-hidden="true" width="220" height="300" viewBox="0 0 220 300" style={{ position: 'absolute', left: 110, top: 70 }}>
        <path d="M84 20 h52 v52 q28 22 28 66 v120 q0 22 -22 22 h-64 q-22 0 -22 -22 V138 q0 -44 28 -66 z" fill="#241505" stroke={candleGold} strokeWidth="1.6" />
        <rect x="84" y="6" width="52" height="18" rx="4" fill="#3A2408" stroke={candleGold} strokeWidth="1.2" />
        <rect x="66" y="150" width="88" height="64" rx="3" fill="none" stroke={candleGold} strokeWidth="1.2" />
        <text x="110" y="178" textAnchor="middle" fontSize="13" fontFamily="Cinzel" fill="#E4D3AC">OKURO</text>
        <text x="110" y="198" textAnchor="middle" fontSize="8" letterSpacing="3" fill={candleGold}>SINGLE MALT</text>
        <path d="M60 246 q50 18 100 0" fill="none" stroke={candleGold} strokeWidth="0.8" opacity="0.6" />
      </svg>
      <div style={{ position: 'absolute', right: 52, top: 100, width: 180 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.5em', color: candleGold, fontFamily: jost }}>AGED 18 YEARS</div>
        <div style={{ fontSize: 26, letterSpacing: '0.2em', lineHeight: 1.9, marginTop: 14 }}>闇で熟し、<br />一条の光で開く。</div>
        <div style={{ fontFamily: zen, fontSize: 11, lineHeight: 2.2, color: '#9d8a61', marginTop: 14 }}>
          蔵の暗がりで18年。注がれた一杯だけが、蝋燭の色を知っている。
        </div>
        <div style={{ marginTop: 18, display: 'inline-block', borderBottom: `1px solid ${candleGold}`, paddingBottom: 5, fontSize: 10.5, letterSpacing: '0.34em', color: candleGold, fontFamily: jost }}>
          TASTING NOTES —
        </div>
      </div>
    </div>
  )
}

function TenebrismExpo() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0A0806', position: 'relative', overflow: 'hidden', fontFamily: mincho, color: '#DCC998' }}>
      <div aria-hidden="true" style={{ position: 'absolute', width: 340, height: 190, left: '50%', top: 120, transform: 'translateX(-50%)', background: 'radial-gradient(ellipse at 50% 0%, rgba(194,143,58,0.5) 0%, transparent 68%)' }} />
      <div style={{ position: 'absolute', top: 44, left: 0, right: 0, textAlign: 'center', fontFamily: jost, fontSize: 10, letterSpacing: '0.5em', color: '#6b5a37' }}>
        PHOTOGRAPHY EXHIBITION
      </div>
      <div style={{ position: 'absolute', top: 150, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ fontSize: 44, letterSpacing: '0.3em', textIndent: '0.3em' }}>残 光</div>
        <div style={{ fontSize: 12, letterSpacing: '0.4em', marginTop: 16, color: '#9d8a61' }}>— 闇に残るものの記録 —</div>
      </div>
      <div style={{ position: 'absolute', bottom: 78, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 40, fontFamily: jost, fontSize: 10, letterSpacing: '0.3em', color: '#6b5a37' }}>
        <span>11.7 FRI — 12.21 SUN</span>
        <span>GALLERY VOID · 清澄白河</span>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 0, right: 0, textAlign: 'center' }}>
        <span style={{ fontFamily: zen, fontSize: 10.5, letterSpacing: '0.26em', border: '1px solid #6b5a37', padding: '9px 26px' }}>
          入場予約 —
        </span>
      </div>
    </div>
  )
}

export const tenebrismMocks = [
  {
    id: 'tenebrism-whisky',
    title: 'ウイスキーブランドのヒーロー',
    kind: 'Web / ヒーロー',
    Comp: TenebrismWhisky,
    why: [
      { label: '色', text: '画面の9割を焦茶の闇に沈め、瓶の周りだけ蝋燭色に。カラヴァッジョの「一点光源」は、商品を聖遺物のように見せる照明術。' },
      { label: '質感', text: '光は白ではなく飴色。金色の光は「電球以前の光」の記号で、時間をかけたもの——熟成・工芸・儀式と自動的に結びつく。' },
      { label: 'レイアウト', text: '光源の中心に商品、テキストは闇の側に退避。明暗の境界線が、そのまま視線の動線になる。' },
    ],
  },
  {
    id: 'tenebrism-expo',
    title: '写真展の告知',
    kind: 'ポスター / Web',
    Comp: TenebrismExpo,
    why: [
      { label: '色', text: 'タイトルの2文字だけが照らされ、日付や会場は闇に半分溶けている。情報の階層を「照度の差」だけで作る。' },
      { label: '余白', text: 'テネブリズムの余白は白ではなく黒。埋め尽くされた闇は、静寂と緊張を同時に運ぶ「重い余白」。' },
      { label: 'フォント', text: '明朝の細い線は闇の中で消え、太い線だけ残って readable になる——蝋燭の光で読む文字の見え方を書体で再現している。' },
    ],
  },
]
