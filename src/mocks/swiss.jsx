// スイス・スタイルの世界観を再現したUIモック(キャンバス 560×420 で設計)
const inter = "'Inter', 'Helvetica Neue', sans-serif"
const red = '#E30613'
const ink = '#111111'

function ConcertPoster() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#FFFFFF', overflow: 'hidden', fontFamily: inter, color: ink }}>
      <div style={{ position: 'absolute', top: 40, left: 40, right: 40 }}>
        <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
          musik<br />im park<span style={{ color: red }}>.</span>
        </div>
      </div>
      <div style={{ position: 'absolute', top: 52, right: 40, width: 96, height: 96, borderRadius: '50%', background: red }} />
      <div style={{ position: 'absolute', left: 40, right: 40, bottom: 96, height: 1, background: ink }} />
      <div style={{ position: 'absolute', left: 40, right: 40, bottom: 34, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, fontSize: 11, lineHeight: 1.6 }}>
        <div>
          <strong>7月12日(土)</strong><br />開場 17:00 / 開演 18:00
        </div>
        <div>
          <strong>市民公園 野外劇場</strong><br />雨天決行・荒天中止
        </div>
        <div>
          <strong>前売 ¥3,500</strong><br />当日 ¥4,000
        </div>
      </div>
    </div>
  )
}

function BoardingPass() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#EDEDED', display: 'grid', placeItems: 'center', fontFamily: inter }}>
      <div style={{ width: 420, background: '#fff', color: ink }}>
        <div style={{ background: red, color: '#fff', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em' }}>
          <span>BOARDING PASS</span>
          <span>LX 160</span>
        </div>
        <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 18 }}>
          <div>
            <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: '-0.02em' }}>ZRH</div>
            <div style={{ fontSize: 11, color: '#666' }}>チューリッヒ</div>
          </div>
          <div style={{ flex: 1, position: 'relative', height: 1, background: ink }}>
            <div style={{ position: 'absolute', right: -1, top: -3.5, width: 0, height: 0, borderTop: '4px solid transparent', borderBottom: '4px solid transparent', borderLeft: `7px solid ${ink}` }} />
          </div>
          <div>
            <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: '-0.02em' }}>TYO</div>
            <div style={{ fontSize: 11, color: '#666' }}>東京 / 成田</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #ddd', padding: '14px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12, fontSize: 11 }}>
          {[
            ['搭乗口', 'B24'],
            ['座席', '17A'],
            ['搭乗開始', '10:35'],
            ['出発', '11:10'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ color: '#888', marginBottom: 3 }}>{k}</div>
              <div style={{ fontSize: 17, fontWeight: 700 }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `3px solid ${red}`, padding: '10px 24px', fontSize: 10, color: '#888' }}>
          KANO / TAKAZUKI 様 — エコノミークラス
        </div>
      </div>
    </div>
  )
}

function Timetable() {
  const rows = [
    ['11:02', 'バーゼル SBB', '7', '定刻'],
    ['11:07', 'ジュネーブ空港', '4', '定刻'],
    ['11:13', 'ルガーノ', '9', '+5分'],
    ['11:20', 'ベルン', '3', '定刻'],
    ['11:31', 'ザンクト・ガレン', '5', '定刻'],
  ]
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', fontFamily: inter, color: ink, padding: '32px 40px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
        <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.02em' }}>発車案内</div>
        <div style={{ fontSize: 12, color: '#666' }}>チューリッヒ中央駅 — 11:00 現在</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr 60px 70px', fontSize: 11, color: '#888', paddingBottom: 8, borderBottom: `2px solid ${ink}` }}>
        <span>時刻</span><span>行き先</span><span>番線</span><span style={{ textAlign: 'right' }}>状況</span>
      </div>
      {rows.map(([time, dest, track, status]) => (
        <div key={time} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 60px 70px', alignItems: 'baseline', padding: '11px 0', borderBottom: '1px solid #e2e2e2', fontSize: 14 }}>
          <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{time}</span>
          <span>{dest}</span>
          <span style={{ fontWeight: 700 }}>{track}</span>
          <span style={{ textAlign: 'right', fontWeight: 700, color: status === '定刻' ? '#1a9850' : red }}>{status}</span>
        </div>
      ))}
    </div>
  )
}

export const swissMocks = [
  {
    id: 'swiss-poster',
    title: 'コンサートのポスター',
    kind: 'グラフィック',
    Comp: ConcertPoster,
    why: [
      { label: 'フォント', text: 'Helvetica系サンセリフを極太&小文字で。書体の個性ではなく「太さ・大きさ・位置」だけで階層をつくるのがスイス流。' },
      { label: '色', text: '白地+黒+赤1色。「使う色を決める」のではなく「使わない色を決める」——制約こそが洗練の正体。' },
      { label: '余白', text: '要素はグリッドの線に吸着し、余った空間は堂々と空けたまま。埋めない勇気が"プロっぽさ"の8割を占める。' },
    ],
  },
  {
    id: 'swiss-boarding',
    title: '搭乗券UI',
    kind: 'アプリ / チケット',
    Comp: BoardingPass,
    why: [
      { label: '余白', text: 'ラベルは小さく灰色、値は大きく黒。全項目が同じ「ラベル+値」の型で並ぶ。型の反復が信頼感をつくる。' },
      { label: 'フォント', text: '数字は等幅(tabular-nums)で桁がずれない。情報デザインでは、そろっていること自体が読みやすさになる。' },
      { label: '色', text: '赤はヘッダーと罫の2箇所だけ。企業色は「面積を絞って繰り返す」とブランドとして記憶される。' },
    ],
  },
  {
    id: 'swiss-timetable',
    title: '駅の発車案内ダッシュボード',
    kind: 'アプリ / データ',
    Comp: Timetable,
    why: [
      { label: '余白', text: '4列のグリッドに全行が正確に整列。表は装飾を足す場所ではなく、列をそろえる場所。ゆがみのない列が秩序を生む。' },
      { label: '色', text: '色は「意味」にだけ使う——遅延は赤、定刻は緑。飾りの色をゼロにすると、色が言葉として機能し始める。' },
      { label: 'フォント', text: '見出しも本文も同じ書体で、太さだけ変える。1書体×3ウェイトは、複数書体よりずっと統一感が出る。' },
    ],
  },
]
