// ジャパンディの世界観を再現したUIモック(キャンバス 560×420 で設計)
const mincho = "'Shippori Mincho', serif"
const zen = "'Zen Kaku Gothic New', sans-serif"
const moss = '#8A8F79'
const charcoal = '#3A3733'

function RyokanHero() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#EFE9DE', overflow: 'hidden', color: charcoal }}>
      <div style={{ position: 'absolute', top: 28, left: 40, right: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontFamily: mincho, fontWeight: 600, fontSize: 17, letterSpacing: '0.45em' }}>宿 このは</div>
        <div style={{ fontFamily: zen, fontSize: 11, letterSpacing: '0.3em', color: '#8c8578' }}>客室 · 湯 · 料理 · 予約</div>
      </div>
      <svg aria-hidden="true" width="240" height="240" viewBox="0 0 240 240" style={{ position: 'absolute', right: 70, top: 100 }}>
        <path d="M120 18 A102 102 0 1 1 46 52" fill="none" stroke={moss} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      </svg>
      <div style={{ position: 'absolute', top: 104, left: 56, display: 'flex', gap: 26 }}>
        <div style={{ writingMode: 'vertical-rl', fontFamily: mincho, fontWeight: 600, fontSize: 34, letterSpacing: '0.35em', lineHeight: 1.6 }}>
          静けさを、予約する。
        </div>
        <div style={{ writingMode: 'vertical-rl', fontFamily: mincho, fontSize: 13, letterSpacing: '0.3em', color: '#77705f', paddingTop: 8 }}>
          山あいの一日五組の宿
        </div>
      </div>
      <div style={{ position: 'absolute', left: 56, bottom: 40, fontFamily: zen, fontSize: 13, letterSpacing: '0.28em' }}>
        <span style={{ borderBottom: `1px solid ${charcoal}`, paddingBottom: 6 }}>空室をみる　—</span>
      </div>
    </div>
  )
}

function TeaCard() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E9E2D4', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 270, background: '#F5F1E8', padding: '44px 36px', textAlign: 'center', color: charcoal }}>
        <svg aria-hidden="true" width="86" height="72" viewBox="0 0 86 72" style={{ display: 'block', margin: '0 auto' }}>
          <path d="M14 22 h50 v22 a25 25 0 0 1 -50 0 z" fill="none" stroke={charcoal} strokeWidth="1.6" />
          <path d="M64 26 h6 a9 9 0 0 1 0 18 h-8" fill="none" stroke={charcoal} strokeWidth="1.6" />
          <path d="M30 12 q3 -6 0 -10 M46 12 q3 -6 0 -10" fill="none" stroke={moss} strokeWidth="1.6" strokeLinecap="round" />
          <ellipse cx="39" cy="66" rx="27" ry="2.5" fill="none" stroke={charcoal} strokeWidth="1" opacity="0.4" />
        </svg>
        <div style={{ fontFamily: mincho, fontWeight: 600, fontSize: 20, letterSpacing: '0.5em', textIndent: '0.5em', marginTop: 30 }}>
          焙 茶
        </div>
        <div style={{ fontFamily: zen, fontSize: 11, letterSpacing: '0.22em', lineHeight: 2.2, color: '#77705f', marginTop: 18 }}>
          浅炒りの香ばしさ。<br />夜にも飲める、やさしい一杯。
        </div>
        <div style={{ width: 28, height: 1, background: moss, margin: '22px auto' }} />
        <div style={{ fontFamily: zen, fontSize: 13, letterSpacing: '0.12em' }}>
          80g — ¥1,296
        </div>
      </div>
    </div>
  )
}

function MeditationApp() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F3EFE7', display: 'grid', placeItems: 'center' }}>
      <div style={{ width: 280, textAlign: 'center', color: charcoal }}>
        <div style={{ fontFamily: zen, fontSize: 11, letterSpacing: '0.4em', color: '#9a917f' }}>ヨル ノ ジカン</div>
        <div style={{ position: 'relative', width: 190, height: 190, margin: '28px auto' }}>
          {[190, 150, 110].map((size, i) => (
            <div key={size} style={{ position: 'absolute', top: '50%', left: '50%', width: size, height: size, transform: 'translate(-50%, -50%)', borderRadius: '50%', border: `1px solid ${moss}`, opacity: 0.25 + i * 0.25 }} />
          ))}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: mincho, fontSize: 16, letterSpacing: '0.3em', textIndent: '0.3em' }}>
            吸う
          </div>
        </div>
        <div style={{ fontFamily: zen, fontWeight: 400, fontSize: 13, letterSpacing: '0.2em', lineHeight: 2 }}>
          4秒 吸って、6秒 吐く
        </div>
        <div style={{ marginTop: 26, display: 'flex', justifyContent: 'center', gap: 30, fontFamily: zen, fontSize: 11, letterSpacing: '0.2em', color: '#9a917f' }}>
          <span>3分</span>
          <span style={{ color: charcoal, borderBottom: `1px solid ${charcoal}`, paddingBottom: 3 }}>10分</span>
          <span>20分</span>
        </div>
      </div>
    </div>
  )
}

export const japandiMocks = [
  {
    id: 'japandi-ryokan',
    title: '旅館のランディングページ',
    kind: 'Web / ヒーロー',
    Comp: RyokanHero,
    why: [
      { label: '余白', text: '画面の6割以上がなにもない空間。余白は「まだ埋めていない場所」ではなく、静けさという商品そのものの提示。' },
      { label: 'フォント', text: '細い明朝を縦書きで、字間をたっぷり。読む速度を落とさせる組み方が、そのまま宿の時間の流れを予告している。' },
      { label: '色', text: '生成り・苔色・炭色。彩度を抑えた自然の色だけに絞ると、写真や図がなくても素材感が立ち上がる。' },
    ],
  },
  {
    id: 'japandi-tea',
    title: 'お茶ブランドの商品カード',
    kind: 'EC / プロダクト',
    Comp: TeaCard,
    why: [
      { label: '余白', text: '商品名の上に30px、下に18px——「間」を惜しまない。高密度は安売りの、低密度は丁寧さの記号として働く。' },
      { label: 'かたち', text: '急須は1.6pxの細い線画。塗りつぶさない描写は「押し付けない」という態度の表明で、余白と同じ文法にある。' },
      { label: 'フォント', text: '「焙 茶」の2文字を1文字ぶん空けて組む。文字数が少ないほど、字間が佇まいを決める。' },
    ],
  },
  {
    id: 'japandi-meditation',
    title: '瞑想アプリUI',
    kind: 'アプリ',
    Comp: MeditationApp,
    why: [
      { label: 'かたち', text: '同心円の細い輪だけで「呼吸」を表す。具象のイラストより抽象の図形のほうが、静けさを壊さない。' },
      { label: '色', text: 'アクセントは苔色1色、しかも線でしか使わない。「色を我慢する」ことがこの世界観への入場料。' },
      { label: '余白', text: '選択肢(3分/10分/20分)はボタンの箱に入れず、文字と下線だけ。UIの部品を減らすほど、体験は瞑想に近づく。' },
    ],
  },
]
