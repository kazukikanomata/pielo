// モーション周期表: 各モーションを「ドットの丸ピクセル」で再現する
// render(ctx, t, size) は毎フレーム呼ばれる。t は秒(ループ用にsin/cosで扱う)

const INK_FAINT = 'rgba(35, 33, 30, 0.14)'
const ACCENT = '#C9713F'

function circle(ctx, x, y, r, color, alpha = 1) {
  if (r <= 0 || alpha <= 0) return
  ctx.globalAlpha = alpha
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 1
}

function gridPositions(size, cols = 9) {
  const pad = size * 0.12
  const step = (size - pad * 2) / (cols - 1)
  const pts = []
  for (let row = 0; row < cols; row++) {
    for (let col = 0; col < cols; col++) pts.push({ col, row, x: pad + col * step, y: pad + row * step })
  }
  return pts
}

// 背景の基準グリッド(薄いドット)
function bgGrid(ctx, size, cols = 9) {
  for (const p of gridPositions(size, cols)) circle(ctx, p.x, p.y, size * 0.008, INK_FAINT, 1)
}

// 決定論的な擬似乱数(0〜1)。Random/Noise系の明滅を再現可能にする
function hash(a, b, c) {
  const s = Math.sin(a * 127.1 + b * 311.7 + c * 74.7) * 43758.5453
  return s - Math.floor(s)
}

// なめらかな1次元ノイズ(Wiggle/Turbulent Noise系に使う)
function noise(x, seed = 0) {
  const i = Math.floor(x)
  const f = x - i
  const u = f * f * (3 - 2 * f)
  const a = hash(i, seed, 7)
  const b = hash(i + 1, seed, 7)
  return a + (b - a) * u
}

export const motions = [
  {
    id: 'orbit',
    name: 'Orbit',
    jp: 'オービット',
    category: '経路',
    desc: '1点が中心を軸に円軌道で回り続ける動き。ローディングインジケーターや、アイコンの補助アニメーションに使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const r = size * 0.28
      ctx.strokeStyle = INK_FAINT
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(c, c, r, 0, Math.PI * 2)
      ctx.stroke()
      const angle = t * 1.4
      circle(ctx, c + Math.cos(angle) * r, c + Math.sin(angle) * r, size * 0.032, ACCENT)
    },
  },
  {
    id: 'move',
    name: 'Move',
    jp: '移動',
    category: '位置',
    desc: '要素が直線的に平行移動する、もっとも基本的な動き。ボタンのホバーやスライド表示に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const x = c + Math.sin(t * 1.2) * size * 0.3
      circle(ctx, x, c, size * 0.034, ACCENT)
    },
  },
  {
    id: 'rotate',
    name: 'Rotate',
    jp: '回転',
    category: '回転',
    desc: '要素が中心を軸に回転する動き。読み込み中の表現や、アイコンの向きの変化に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const angle = t * 1.1
      const len = size * 0.22
      for (const f of [-1, 0, 1]) {
        const x = c + f * len * Math.cos(angle)
        const y = c + f * len * Math.sin(angle)
        circle(ctx, x, y, size * 0.026, ACCENT, f === 0 ? 1 : 0.65)
      }
    },
  },
  {
    id: 'scale',
    name: 'Scale',
    jp: '拡大縮小',
    category: '拡縮',
    desc: '要素の大きさが周期的に拡大縮小する動き。タップ時のフィードバックや強調表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const r = size * 0.05 + Math.sin(t * 2) * size * 0.028
      circle(ctx, c, c, Math.max(r, size * 0.012), ACCENT)
    },
  },
  {
    id: 'blur',
    name: 'Blur',
    jp: 'ぼかし',
    category: '質感',
    desc: '輪郭がぼやけたり、くっきり戻ったりする質感の変化。フォーカスの移動や奥行きの表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const b = 3 + Math.abs(Math.sin(t * 1.6)) * 8
      ctx.filter = `blur(${b}px)`
      circle(ctx, c, c, size * 0.05, ACCENT)
      ctx.filter = 'none'
    },
  },
  {
    id: 'wave',
    name: 'Wave',
    jp: '波',
    category: '波形',
    desc: '一列の要素が波のように上下する動き。テキストのアクセントやローディング表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const cols = 9
      const pad = size * 0.12
      const step = (size - pad * 2) / (cols - 1)
      for (let i = 0; i < cols; i++) {
        const x = pad + i * step
        const y = c + Math.sin(t * 2 + i * 0.6) * size * 0.12
        circle(ctx, x, y, size * 0.022, ACCENT, 0.9)
      }
    },
  },
  {
    id: 'scatter',
    name: 'Scatter',
    jp: '拡散',
    category: 'ランダム',
    desc: '中心から要素が飛び散り、また集まる動き。パーティクル演出や達成時のフィードバックに使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const n = 8
      const spread = Math.abs(Math.sin(t * 1.0))
      const dist = spread * size * 0.3
      for (let i = 0; i < n; i++) {
        const a = i * ((Math.PI * 2) / n)
        circle(ctx, c + Math.cos(a) * dist, c + Math.sin(a) * dist, size * 0.022, ACCENT, 0.5 + 0.5 * spread)
      }
    },
  },
  {
    id: 'bend',
    name: 'Bend',
    jp: 'しなり',
    category: '波形',
    desc: '縦のラインが波打つようにしなる動き。背景の装飾やセクションの区切り演出に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const pad = size * 0.16
      const cols = 5
      const rows = 6
      const stepX = (size - pad * 2) / (cols - 1)
      const stepY = (size - pad * 2) / (rows - 1)
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const baseX = pad + col * stepX
          const y = pad + row * stepY
          const x = baseX + Math.sin(t * 1.5 + row * 0.4 + col * 0.2) * size * 0.03
          circle(ctx, x, y, size * 0.016, ACCENT, 0.85)
        }
      }
    },
  },
  {
    id: 'glow',
    name: 'Glow',
    jp: '発光',
    category: '質感',
    desc: '発光するように明滅する質感の変化。通知や、強調したい要素の存在感を出すのに使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const p = 0.5 + 0.5 * Math.sin(t * 2)
      ctx.save()
      ctx.shadowColor = ACCENT
      ctx.shadowBlur = size * 0.12 * p
      circle(ctx, c, c, size * 0.045, ACCENT, 0.6 + 0.4 * p)
      ctx.restore()
    },
  },
  {
    id: 'twirl',
    name: 'Twirl',
    jp: '渦',
    category: '回転',
    desc: '複数の要素が中心の周りを渦のように回る動き。ローディングや変化の予兆を表す表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const n = 6
      const r = size * 0.2
      for (let i = 0; i < n; i++) {
        const a = t * 1.6 + i * ((Math.PI * 2) / n)
        circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.022, ACCENT, 0.9)
      }
    },
  },
  {
    id: 'random',
    name: 'Random',
    jp: 'ランダム',
    category: 'ランダム',
    desc: '粒がランダムに明滅する、ノイズのような質感の動き。テクスチャやグリッチ表現に使われる。',
    render(ctx, t, size) {
      const cols = 9
      const pad = size * 0.12
      const step = (size - pad * 2) / (cols - 1)
      const frame = Math.floor(t * 6)
      for (let row = 0; row < cols; row++) {
        for (let col = 0; col < cols; col++) {
          const v = hash(col, row, frame)
          const lit = v > 0.82
          circle(ctx, pad + col * step, pad + row * step, size * 0.012, lit ? ACCENT : INK_FAINT, lit ? 0.9 : 0.5)
        }
      }
    },
  },
  {
    id: 'delay',
    name: 'Delay',
    jp: '遅延',
    category: '順序',
    desc: '同じ動きが要素ごとに少しずつ遅れて発生する。順番に見せたいリストやメニューの表示演出に使われる。',
    render(ctx, t, size) {
      const n = 7
      const pad = size * 0.15
      const step = (size - pad * 2) / (n - 1)
      const c = size / 2
      for (let i = 0; i < n; i++) {
        const local = t * 2 - i * 0.35
        const p = (Math.sin(local) + 1) / 2
        const y = c + Math.sin(local) * size * 0.1
        circle(ctx, pad + i * step, y, size * 0.018 + p * size * 0.02, ACCENT, 0.4 + 0.6 * p)
      }
    },
  },
  {
    id: 'fractal-noise',
    name: 'Fractal Noise',
    jp: 'フラクタルノイズ',
    category: '質感',
    desc: '複数の周波数のノイズを重ねた、粒の粗さが層になった質感の揺らぎ。背景テクスチャや大気感の表現に使われる。',
    render(ctx, t, size) {
      for (const p of gridPositions(size, 9)) {
        const v = (noise(p.col * 0.6 + t, 1) + noise(p.row * 0.6 + t * 1.7, 2) * 0.5) / 1.5
        circle(ctx, p.x, p.y, size * 0.01 + v * size * 0.012, v > 0.55 ? ACCENT : INK_FAINT, 0.3 + v * 0.6)
      }
    },
  },
  {
    id: 'offset',
    name: 'Offset',
    jp: 'オフセット',
    category: '位置',
    desc: '同じ動きを追いかける、少しだけずれた複製。基準の動きに一定の距離を保って追従する表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const x1 = c + Math.sin(t * 1.2) * size * 0.3
      const x2 = c + Math.sin((t - 0.3) * 1.2) * size * 0.3
      circle(ctx, x2, c, size * 0.03, ACCENT, 0.4)
      circle(ctx, x1, c, size * 0.034, ACCENT)
    },
  },
  {
    id: 'line-weight',
    name: 'Line Weight',
    jp: '線の太さ',
    category: '質感',
    desc: '輪郭線の太さそのものが周期的に変化する。強調のタイミングや手描き感の表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const thickness = size * (0.01 + Math.abs(Math.sin(t * 1.6)) * 0.03)
      const n = 20
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2
        circle(ctx, c + Math.cos(a) * (size * 0.22 - thickness), c + Math.sin(a) * (size * 0.22 - thickness), size * 0.01, ACCENT, 0.5)
        circle(ctx, c + Math.cos(a) * (size * 0.22 + thickness), c + Math.sin(a) * (size * 0.22 + thickness), size * 0.01, ACCENT, 0.9)
      }
    },
  },
  {
    id: 'trim-line',
    name: 'Trim Line',
    jp: 'トリムライン',
    category: 'マスク',
    desc: '線が端から端まで描かれ、また消えていく動き。ローディングバーや下線の演出に使われる。',
    render(ctx, t, size) {
      const n = 9
      const pad = size * 0.14
      const step = (size - pad * 2) / (n - 1)
      const c = size / 2
      const phase = (Math.sin(t * 1.2) + 1) / 2
      for (let i = 0; i < n; i++) {
        const lit = i / (n - 1) <= phase
        circle(ctx, pad + i * step, c, size * 0.016, lit ? ACCENT : INK_FAINT, lit ? 0.9 : 0.5)
      }
    },
  },
  {
    id: 'rough-edge',
    name: 'Rough Edge',
    jp: 'ラフエッジ',
    category: '質感',
    desc: '輪郭がノイズでガタガタと揺れる、手作り感のある質感。有機的で不完全な輪郭表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 20
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2
        const r = size * 0.22 + (noise(i * 0.5 + t * 1.5, 3) - 0.5) * size * 0.05
        circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.012, ACCENT, 0.75)
      }
    },
  },
  {
    id: 'vegas',
    name: 'Vegas',
    jp: 'ベガス(電飾)',
    category: '順序',
    desc: '電光掲示板のように、光の粒が輪の周りを追いかけて流れる。装飾的な縁取りの演出に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 16
      const r = size * 0.3
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2
        const lit = (t * 3 + i) % n < 3
        circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.018, lit ? ACCENT : INK_FAINT, lit ? 1 : 0.5)
      }
    },
  },
  {
    id: 'shape-transform',
    name: 'Shape Transform',
    jp: 'シェイプ変形',
    category: '変形',
    desc: 'ある形から別の形へ、点の配置がなめらかに移り変わる。アイコンの意味変化やロゴモーフィングに使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const r = size * 0.2
      const tri = [0, 1, 2].map((i) => ({
        x: c + Math.cos((i / 3) * Math.PI * 2 - Math.PI / 2) * r,
        y: c + Math.sin((i / 3) * Math.PI * 2 - Math.PI / 2) * r,
      }))
      const sq = [0, 1, 2, 3].map((i) => ({
        x: c + Math.cos((i / 4) * Math.PI * 2 + Math.PI / 4) * r,
        y: c + Math.sin((i / 4) * Math.PI * 2 + Math.PI / 4) * r,
      }))
      const mix = (Math.sin(t * 1.2) + 1) / 2
      for (let i = 0; i < 4; i++) {
        const a = tri[i % tri.length]
        const b = sq[i % sq.length]
        circle(ctx, a.x + (b.x - a.x) * mix, a.y + (b.y - a.y) * mix, size * 0.026, ACCENT)
      }
    },
  },
  {
    id: 'easing',
    name: 'Easing',
    jp: 'イージング',
    category: '経路',
    desc: '同じ距離を動くのに、速度のかかり方が違う2つの動き。動きに自然さを与える緩急の表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const pad = size * 0.16
      const span = size - pad * 2
      const cyc = (t * 0.6) % 1
      const eased = cyc * cyc * (3 - 2 * cyc)
      circle(ctx, pad + span * cyc, size * 0.32, size * 0.024, ACCENT, 0.55)
      circle(ctx, pad + span * eased, size * 0.62, size * 0.024, ACCENT)
    },
  },
  {
    id: 'depth-of-field',
    name: 'Depth of Field',
    jp: '被写界深度',
    category: 'レンズ',
    desc: 'ピントの合う位置だけがくっきり見え、それ以外はぼける。奥行きや注目箇所を伝える表現に使われる。',
    render(ctx, t, size) {
      const focus = size * 0.5 + Math.sin(t * 0.9) * size * 0.28
      for (const p of gridPositions(size, 9)) {
        const d = Math.abs(p.x - focus)
        const b = Math.max(0, (d / size) * 14 - 1)
        ctx.filter = b > 0.3 ? `blur(${b}px)` : 'none'
        circle(ctx, p.x, p.y, size * 0.014, ACCENT, 1 - Math.min(d / size, 0.6))
      }
      ctx.filter = 'none'
    },
  },
  {
    id: 'symmetric-move',
    name: 'Symmetric Move',
    jp: '対称移動',
    category: '対称',
    desc: '中心を軸に、左右が鏡写しのように同時に動く。バランスの取れた画面構成の演出に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const d = Math.sin(t * 1.2) * size * 0.22
      circle(ctx, c + d, c, size * 0.03, ACCENT)
      circle(ctx, c - d, c, size * 0.03, ACCENT)
    },
  },
  {
    id: 'symmetric-rotate',
    name: 'Symmetric Rotate',
    jp: '対称回転',
    category: '対称',
    desc: '2つの要素が中心を軸に、互いに逆向きへ回転する。せめぎ合いや均衡の表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const r = size * 0.22
      const a = t * 1.1
      circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.028, ACCENT)
      circle(ctx, c + Math.cos(-a) * r, c + Math.sin(-a) * r, size * 0.028, ACCENT, 0.75)
    },
  },
  {
    id: 'symmetric-scale',
    name: 'Symmetric Scale',
    jp: '対称拡縮',
    category: '対称',
    desc: '中心から左右対称に、同時に拡大縮小する。呼吸するようなバランス感のある強調表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const r = Math.max(size * 0.03 + Math.sin(t * 2) * size * 0.02, 2)
      circle(ctx, c - size * 0.16, c, r, ACCENT)
      circle(ctx, c + size * 0.16, c, r, ACCENT)
    },
  },
  {
    id: 'trim-circle',
    name: 'Trim Circle',
    jp: 'トリムサークル',
    category: 'マスク',
    desc: '円の輪郭が少しずつ描かれていき、一周すると消えてまた始まる。円形のローディング表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 24
      const progress = (t * 0.5) % 1
      for (let i = 0; i < n; i++) {
        const pos = i / n
        const lit = pos <= progress
        const a = pos * Math.PI * 2 - Math.PI / 2
        circle(ctx, c + Math.cos(a) * size * 0.24, c + Math.sin(a) * size * 0.24, size * 0.014, lit ? ACCENT : INK_FAINT, lit ? 0.9 : 0.5)
      }
    },
  },
  {
    id: 'turbulent-noise',
    name: 'Turbulent Noise',
    jp: 'タービュランスノイズ',
    category: '質感',
    desc: 'なめらかに流れるノイズの場に沿って、格子全体がゆらゆらと有機的に歪む。水面や煙のような表現に使われる。',
    render(ctx, t, size) {
      for (const p of gridPositions(size, 8)) {
        const dx = (noise(p.col * 0.5 + t * 0.8, 5) - 0.5) * size * 0.05
        const dy = (noise(p.row * 0.5 + t * 0.8, 9) - 0.5) * size * 0.05
        circle(ctx, p.x + dx, p.y + dy, size * 0.01, ACCENT, 0.6)
      }
    },
  },
  {
    id: 'loop',
    name: 'Loop',
    jp: 'ループ',
    category: '経路',
    desc: '六角形の閉じた経路を、1点がぐるぐると周回し続ける動き。繰り返し再生される演出に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const r = size * 0.26
      const sides = 6
      const seg = ((t * 0.5) % 1) * sides
      const i0 = Math.floor(seg)
      const f = seg - i0
      const a0 = (i0 / sides) * Math.PI * 2
      const a1 = ((i0 + 1) / sides) * Math.PI * 2
      const x0 = c + Math.cos(a0) * r
      const y0 = c + Math.sin(a0) * r
      const x1 = c + Math.cos(a1) * r
      const y1 = c + Math.sin(a1) * r
      circle(ctx, x0 + (x1 - x0) * f, y0 + (y1 - y0) * f, size * 0.03, ACCENT)
    },
  },
  {
    id: 'repeat-transform',
    name: 'Repeat Transform',
    jp: 'リピート変形',
    category: '反復',
    desc: '同じ変形を少しずつずらして重ねると生まれる、渦を巻くような入れ子模様。装飾的なパターン生成に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 8
      for (let i = 0; i < n; i++) {
        const a = t * 0.6 + i * 0.35
        const r = size * 0.05 + i * size * 0.024
        circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.012, ACCENT, 0.3 + (i / n) * 0.6)
      }
    },
  },
  {
    id: 'rhythm',
    name: 'Rhythm',
    jp: 'リズム',
    category: '順序',
    desc: '一定の拍で粒が明滅する、音楽的なビートの表現。テンポ感を伝える演出に使われる。',
    render(ctx, t, size) {
      const n = 7
      const pad = size * 0.18
      const step = (size - pad * 2) / (n - 1)
      const c = size / 2
      const beat = Math.floor(t * 2) % n
      for (let i = 0; i < n; i++) {
        const lit = i === beat
        circle(ctx, pad + i * step, c, lit ? size * 0.032 : size * 0.016, lit ? ACCENT : INK_FAINT, lit ? 1 : 0.5)
      }
    },
  },
  {
    id: 'tip-shape',
    name: 'Tip Shape',
    jp: '先端形状',
    category: '変形',
    desc: '進行方向の先端の形が、丸から尖った形へと変わりながら移動する。勢いや方向性の強調に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const x = c + Math.sin(t * 1.2) * size * 0.28
      const sharp = (Math.sin(t * 1.2 + Math.PI / 2) + 1) / 2
      circle(ctx, x, c, size * 0.03 * (1 - sharp * 0.5), ACCENT)
    },
  },
  {
    id: 'link',
    name: 'Link',
    jp: 'リンク',
    category: 'リグ',
    desc: '2つの要素が見えない糸でつながり、片方がもう片方に少し遅れて追従する。親子関係のあるリグ表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const leadX = c + Math.sin(t * 1.3) * size * 0.28
      const followX = c + Math.sin((t - 0.25) * 1.3) * size * 0.28
      const leadY = c - size * 0.06
      const followY = c + size * 0.06
      for (let i = 1; i < 4; i++) {
        const f = i / 4
        circle(ctx, leadX + (followX - leadX) * f, leadY + (followY - leadY) * f, size * 0.008, INK_FAINT, 0.6)
      }
      circle(ctx, leadX, leadY, size * 0.024, ACCENT)
      circle(ctx, followX, followY, size * 0.024, ACCENT, 0.7)
    },
  },
  {
    id: 'mask-wipe',
    name: 'Mask Wipe',
    jp: 'マスクワイプ',
    category: 'マスク',
    desc: '直線の境界が画面を横切り、その先だけ要素を見せたり隠したりする。切り替え演出の定番。',
    render(ctx, t, size) {
      const edge = ((t * 0.5) % 1) * size
      for (const p of gridPositions(size, 9)) {
        const lit = p.x < edge
        circle(ctx, p.x, p.y, size * 0.01, lit ? ACCENT : INK_FAINT, lit ? 0.85 : 0.4)
      }
    },
  },
  {
    id: 'spin-fade',
    name: 'Spin Fade',
    jp: 'スピンフェード',
    category: 'マスク',
    desc: '扇形の境界が中心を軸に回転しながら、通過した部分を見せていく。円形の切り替え演出に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const sweep = (t * 0.8) % (Math.PI * 2)
      for (const p of gridPositions(size, 9)) {
        const a = Math.atan2(p.y - c, p.x - c) + Math.PI
        const lit = a < sweep
        circle(ctx, p.x, p.y, size * 0.01, lit ? ACCENT : INK_FAINT, lit ? 0.85 : 0.4)
      }
    },
  },
  {
    id: 'scribble',
    name: 'Scribble',
    jp: 'スクリブル',
    category: '経路',
    desc: '1点が手描きの落書きのように、ジグザグと不規則な軌跡を描き続ける。手作り感のある演出に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      for (let i = 0; i < 30; i++) {
        const local = t - i * 0.03
        const x = c + (noise(local * 2, 11) - 0.5) * size * 0.5
        const y = c + (noise(local * 2, 21) - 0.5) * size * 0.5
        circle(ctx, x, y, size * 0.014, ACCENT, 1 - i / 30)
      }
    },
  },
  {
    id: 'text',
    name: 'Text',
    jp: 'テキスト',
    category: 'テキスト',
    desc: '文字の形をした粒の集まりが、順番に浮かび上がる。タイトルやロゴのリビール演出に使われる。',
    render(ctx, t, size) {
      const glyph = [
        [2, 0], [1, 1], [3, 1], [0, 2], [4, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [0, 4], [4, 4],
      ]
      const pad = size * 0.32
      const step = (size - pad * 2) / 4
      const progress = ((t * 0.5) % 1.4) * glyph.length
      glyph.forEach(([gx, gy], i) => {
        const lit = i < progress
        circle(ctx, pad + gx * step, pad + gy * step, size * 0.024, lit ? ACCENT : INK_FAINT, lit ? 0.95 : 0.35)
      })
    },
  },
  {
    id: 'opacity',
    name: 'Opacity',
    jp: '不透明度',
    category: '質感',
    desc: '位置や大きさは変えず、透明度だけが行き来する。もっとも静かなフェードの表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      circle(ctx, c, c, size * 0.045, ACCENT, 0.15 + 0.75 * ((Math.sin(t * 1.6) + 1) / 2))
    },
  },
  {
    id: 'motion-blur',
    name: 'Motion Blur',
    jp: 'モーションブラー',
    category: '質感',
    desc: '速く動くものほど、進行方向に尾を引いてぼける。スピード感を伝える表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const speed = Math.cos(t * 1.2)
      const x = c + Math.sin(t * 1.2) * size * 0.3
      for (let i = 0; i < 5; i++) {
        const trail = x - speed * i * size * 0.02
        circle(ctx, trail, c, size * 0.03 - i * size * 0.004, ACCENT, 0.5 - i * 0.09)
      }
    },
  },
  {
    id: 'repeat-move',
    name: 'Repeat Move',
    jp: 'リピート移動',
    category: '反復',
    desc: '同じ動きをする要素が、一定間隔をあけて連なって進む。列車のように連続する移動表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      for (let i = 0; i < 4; i++) {
        const x = c + Math.sin(t * 1.2 - i * 0.5) * size * 0.3
        circle(ctx, x, c, size * 0.024, ACCENT, 1 - i * 0.2)
      }
    },
  },
  {
    id: 'repeat-rotate',
    name: 'Repeat Rotate',
    jp: 'リピート回転',
    category: '反復',
    desc: '半径の違う複数の要素が、それぞれの速さで同時に回転する。多層的な回転演出に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      for (let i = 1; i <= 3; i++) {
        const a = t * (0.6 + i * 0.4)
        const r = size * 0.1 * i
        circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.02, ACCENT, 1 - i * 0.2)
      }
    },
  },
  {
    id: 'repeat-scale',
    name: 'Repeat Scale',
    jp: 'リピート拡縮',
    category: '反復',
    desc: '中心から輪が次々と生まれて広がっていく、水面の波紋のような拡縮の繰り返し。',
    render(ctx, t, size) {
      const c = size / 2
      for (let ring = 0; ring < 3; ring++) {
        const phase = (t * 0.6 + ring * 0.33) % 1
        const r = phase * size * 0.32
        const n = 16
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2
          circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.012, ACCENT, 1 - phase)
        }
      }
    },
  },
  {
    id: 'repeat-trim',
    name: 'Repeat Trim',
    jp: 'リピートトリム',
    category: '反復',
    desc: '円周上の複数の弧が、時間差をつけて次々と描かれては消えていく。連鎖的なローディング表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 24
      for (let i = 0; i < n; i++) {
        const pos = i / n
        const phase = (t * 0.7 + pos) % 1
        const lit = phase < 0.3
        const a = pos * Math.PI * 2
        circle(ctx, c + Math.cos(a) * size * 0.24, c + Math.sin(a) * size * 0.24, size * 0.013, lit ? ACCENT : INK_FAINT, lit ? 0.9 : 0.4)
      }
    },
  },
  {
    id: 'noise',
    name: 'Noise',
    jp: 'ノイズ',
    category: 'ランダム',
    desc: '1点の位置が絶えず小刻みに揺れ続ける。静止しているようで止まっていない、生きた質感に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const x = c + (noise(t * 4, 31) - 0.5) * size * 0.1
      const y = c + (noise(t * 4, 42) - 0.5) * size * 0.1
      circle(ctx, x, y, size * 0.03, ACCENT)
    },
  },
  {
    id: 'tiler',
    name: 'Tiler',
    jp: 'タイラー',
    category: '変形',
    desc: '1つの模様が縮小しながら複製され、敷き詰められたタイル状に増えていく。テクスチャ生成に使われる。',
    render(ctx, t, size) {
      const n = 3
      const scale = 0.5 + Math.sin(t * 1.2) * 0.15
      const cell = (size / n) * scale
      for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
          circle(ctx, (col + 0.5) * (size / n), (row + 0.5) * (size / n), cell * 0.12, ACCENT, 0.75)
        }
      }
    },
  },
  {
    id: 'shadow',
    name: 'Shadow',
    jp: 'シャドウ',
    category: '質感',
    desc: '動く要素の少し下に、薄暗い影の複製がついてくる。奥行きと軽い浮遊感の表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const x = c + Math.sin(t * 1.2) * size * 0.28
      const y = c - Math.abs(Math.sin(t * 1.2)) * size * 0.08
      circle(ctx, x + size * 0.02, size * 0.68, size * 0.03, 'rgba(35,33,30,0.25)')
      circle(ctx, x, y, size * 0.03, ACCENT)
    },
  },
  {
    id: 'step-time',
    name: 'Step Time',
    jp: 'ステップタイム',
    category: '順序',
    desc: 'なめらかにではなく、コマ送りのように一定間隔でカクカクと位置が切り替わる動き。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const stepped = Math.floor(t * 3) / 3
      const x = c + Math.sin(stepped * 2) * size * 0.28
      circle(ctx, x, c, size * 0.032, ACCENT)
    },
  },
  {
    id: 'audio-wave',
    name: 'Audio Wave',
    jp: 'オーディオ波形',
    category: '波形',
    desc: '音量に合わせて棒の高さが変わる、イコライザーのような表現。音や声への反応演出に使われる。',
    render(ctx, t, size) {
      const n = 9
      const pad = size * 0.14
      const step = (size - pad * 2) / (n - 1)
      const base = size * 0.7
      for (let i = 0; i < n; i++) {
        const h = (Math.abs(Math.sin(t * 3 + i * 0.8)) * 0.5 + 0.15) * size * 0.4
        const x = pad + i * step
        for (let j = 0; j < 4; j++) {
          const y = base - (j / 3) * h
          if (y < base - h) continue
          circle(ctx, x, y, size * 0.014, ACCENT, 0.85)
        }
      }
    },
  },
  {
    id: 'particle',
    name: 'Particle',
    jp: 'パーティクル',
    category: 'パーティクル',
    desc: '発生源から小さな粒が次々と生まれ、外へ広がりながら消えていく。祝福や生成の演出に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 14
      for (let i = 0; i < n; i++) {
        const life = (t * 0.6 + i * 13.7) % 1
        const a = hash(i, 0, 0) * Math.PI * 2
        const dist = life * size * 0.32
        circle(ctx, c + Math.cos(a) * dist, c + Math.sin(a) * dist, size * 0.014 * (1 - life), ACCENT, 1 - life)
      }
    },
  },
  {
    id: 'shatter',
    name: 'Shatter',
    jp: 'シャター',
    category: 'パーティクル',
    desc: 'まとまっていた要素が突然バラバラに砕け散り、また元の位置に戻る動き。破壊と再生の表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 9
      const burst = Math.max(0, Math.sin(t * 1.0))
      for (let i = 0; i < n; i++) {
        const a = hash(i, 1, 0) * Math.PI * 2
        const dist = burst * size * (0.1 + hash(i, 2, 0) * 0.2)
        circle(ctx, c + Math.cos(a) * dist, c + Math.sin(a) * dist, size * 0.018, ACCENT, 0.9)
      }
    },
  },
  {
    id: 'slide',
    name: 'Slide',
    jp: 'スライド',
    category: 'マスク',
    desc: '塊になった要素が画面の端から滑り込んできて、また滑り出ていく動き。パネルやカードの登場演出に使われる。',
    render(ctx, t, size) {
      const progress = (Math.sin(t * 1.0) + 1) / 2
      const x = -size * 0.2 + progress * size * 1.0
      for (const p of gridPositions(size, 5)) {
        const lit = Math.abs(p.x - x) < size * 0.16
        circle(ctx, p.x, p.y, lit ? size * 0.02 : size * 0.008, lit ? ACCENT : INK_FAINT, lit ? 0.85 : 0.6)
      }
    },
  },
  {
    id: 'blind',
    name: 'Blind',
    jp: 'ブラインド',
    category: 'マスク',
    desc: '縦の帯が交互に開いたり閉じたりする、ブラインドカーテンのような切り替え演出。',
    render(ctx, t, size) {
      const cols = 7
      const rows = 7
      const stepX = size / cols
      const stepY = size / rows
      const open = (Math.sin(t * 1.2) + 1) / 2
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const within = Math.abs(row / (rows - 1) - 0.5) <= open / 2
          if (!within) continue
          circle(ctx, (col + 0.5) * stepX, (row + 0.5) * stepY, size * 0.014, col % 2 === 0 ? ACCENT : INK_FAINT, 0.8)
        }
      }
    },
  },
  {
    id: 'wave-warp',
    name: 'Wave Warp',
    jp: 'ウェーブワープ',
    category: '波形',
    desc: '格子全体が中心から発生する波に合わせて、リング状に歪んでいく。水面の波紋のような表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      for (const p of gridPositions(size, 8)) {
        const d = Math.hypot(p.x - c, p.y - c)
        const wave = Math.sin(d * 0.08 - t * 3) * size * 0.012
        const a = Math.atan2(p.y - c, p.x - c)
        circle(ctx, p.x + Math.cos(a) * wave, p.y + Math.sin(a) * wave, size * 0.01, ACCENT, 0.6)
      }
    },
  },
  {
    id: 'median',
    name: 'Median',
    jp: 'メディアン',
    category: '質感',
    desc: '隣り合う値を平均してノイズをならす処理。上段のざらついた列と、下段のなめらかな列の対比で表す。',
    render(ctx, t, size) {
      const n = 9
      const pad = size * 0.12
      const step = (size - pad * 2) / (n - 1)
      const frame = Math.floor(t * 4)
      for (let i = 0; i < n; i++) {
        const raw = hash(i, frame, 0)
        const smooth = (hash(i - 1, frame, 0) + hash(i, frame, 0) + hash(i + 1, frame, 0)) / 3
        circle(ctx, pad + i * step, size * 0.35, size * 0.01 + raw * size * 0.016, ACCENT, 0.5)
        circle(ctx, pad + i * step, size * 0.65, size * 0.01 + smooth * size * 0.016, ACCENT, 0.85)
      }
    },
  },
  {
    id: 'flare',
    name: 'Flare',
    jp: 'フレア',
    category: 'レンズ',
    desc: '光の点から筋が放射状に伸びて、強くきらめいてはおさまる。レンズフレアのような煌めきの演出に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const p = 0.5 + 0.5 * Math.sin(t * 2.4)
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2
        for (let j = 1; j <= 3; j++) {
          const r = j * size * 0.03 * p
          circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.006, ACCENT, (1 - j / 4) * p)
        }
      }
      circle(ctx, c, c, size * 0.02, ACCENT, p)
    },
  },
  {
    id: 'wiggle-move',
    name: 'Wiggle Move',
    jp: 'ウィグル移動',
    category: 'ランダム',
    desc: '一定のリズムではなく、有機的で予測できないふらつき方で位置が動き続ける。生き物らしい揺らぎの表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const x = c + (noise(t * 1.3, 51) - 0.5) * size * 0.55
      const y = c + (noise(t * 1.3, 62) - 0.5) * size * 0.4
      circle(ctx, x, y, size * 0.03, ACCENT)
    },
  },
  {
    id: 'wiggle-rotate',
    name: 'Wiggle Rotate',
    jp: 'ウィグル回転',
    category: 'ランダム',
    desc: '一定速度で回るのではなく、行ったり来たりを不規則に繰り返す回転の揺らぎ。落ち着かない緊張感の表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const angle = (noise(t * 1.0, 71) - 0.5) * Math.PI * 1.4
      const len = size * 0.22
      circle(ctx, c + Math.cos(angle) * len, c + Math.sin(angle) * len, size * 0.026, ACCENT)
      circle(ctx, c - Math.cos(angle) * len, c - Math.sin(angle) * len, size * 0.026, ACCENT, 0.6)
    },
  },
  {
    id: 'wiggle-scale',
    name: 'Wiggle Scale',
    jp: 'ウィグル拡縮',
    category: 'ランダム',
    desc: '一定の拍で拡縮するのではなく、不規則な大きさの揺らぎが続く。緊張感や落ち着きのなさの表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const r = size * 0.03 + noise(t * 1.4, 81) * size * 0.04
      circle(ctx, c, c, r, ACCENT)
    },
  },
  {
    id: 'trim-pie',
    name: 'Trim Pie',
    jp: 'トリムパイ',
    category: 'マスク',
    desc: '中心から放射状に伸びる粒が扇形に埋まっていく、円グラフのような進捗表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const progress = (t * 0.4) % 1
      const spokes = 24
      for (let i = 0; i < spokes; i++) {
        const pos = i / spokes
        if (pos > progress) continue
        const a = pos * Math.PI * 2 - Math.PI / 2
        for (let j = 1; j <= 4; j++) {
          const r = (j / 4) * size * 0.24
          circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.012, ACCENT, 0.8)
        }
      }
    },
  },
  {
    id: 'wiggle-path',
    name: 'Wiggle Path',
    jp: 'ウィグルパス',
    category: 'ランダム',
    desc: '手描きのような、二度と同じ形にならない不規則な軌跡を描き続ける。有機的な移動表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      for (let i = 0; i < 20; i++) {
        const local = t - i * 0.05
        const x = c + (noise(local * 1.5, 91) - 0.5) * size * 0.5
        const y = c + (noise(local * 1.5, 102) - 0.5) * size * 0.5
        circle(ctx, x, y, size * 0.012, ACCENT, 1 - i / 20)
      }
    },
  },
  {
    id: 'polar-coordinates',
    name: 'Polar Coordinates',
    jp: '極座標変換',
    category: '変形',
    desc: '一直線に並んだ要素が、丸く曲がってリング状になり、また直線に戻る変換。座標系そのものを歪める表現に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 9
      const mix = (Math.sin(t * 1.0) + 1) / 2
      const pad = size * 0.16
      for (let i = 0; i < n; i++) {
        const lineX = pad + (i / (n - 1)) * (size - pad * 2)
        const lineY = size * 0.75
        const a = (i / n) * Math.PI * 2
        const circX = c + Math.cos(a) * size * 0.24
        const circY = c + Math.sin(a) * size * 0.24
        circle(ctx, lineX + (circX - lineX) * mix, lineY + (circY - lineY) * mix, size * 0.018, ACCENT, 0.85)
      }
    },
  },
  {
    id: 'reshape',
    name: 'Reshape',
    jp: 'リシェイプ',
    category: '変形',
    desc: '不定形の輪郭同士が、なめらかに一方からもう一方へと移り変わっていく。有機的な形の変化に使われる。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 8
      const mix = (Math.sin(t * 0.8) + 1) / 2
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2
        const r1 = size * (0.14 + hash(i, 1, 0) * 0.1)
        const r2 = size * (0.14 + hash(i, 2, 0) * 0.1)
        const r = r1 + (r2 - r1) * mix
        circle(ctx, c + Math.cos(a) * r, c + Math.sin(a) * r, size * 0.018, ACCENT, 0.85)
      }
    },
  },
  {
    id: 'time-displace',
    name: 'Time Displace',
    jp: 'タイムディスプレイス',
    category: '波形',
    desc: '同じ動きを要素ごとに違う時間からサンプリングすると生まれる、伝わっていく波のような表現。',
    render(ctx, t, size) {
      const n = 7
      const pad = size * 0.16
      const step = (size - pad * 2) / (n - 1)
      const c = size / 2
      for (let i = 0; i < n; i++) {
        const local = t * 1.4 - i * 0.4
        const y = c + Math.sin(local) * size * 0.16
        circle(ctx, pad + i * step, y, size * 0.02, ACCENT, 0.85)
      }
    },
  },
  {
    id: 'grid',
    name: 'Grid',
    jp: 'グリッド',
    category: '変形',
    desc: '格子の間隔そのものが、呼吸するように広がったり縮んだりする。背景パターンの生き物らしさの表現に使われる。',
    render(ctx, t, size) {
      const cols = 7
      const spacing = 0.7 + Math.sin(t * 1.2) * 0.2
      const pad = size * (0.5 - spacing * 0.38)
      const step = (size - pad * 2) / (cols - 1)
      for (let row = 0; row < cols; row++) {
        for (let col = 0; col < cols; col++) {
          circle(ctx, pad + col * step, pad + row * step, size * 0.012, ACCENT, 0.7)
        }
      }
    },
  },
  {
    id: 'card-dance',
    name: 'Card Dance',
    jp: 'カードダンス',
    category: '順序',
    desc: '並んだ要素が時間差をつけて、ぴょんぴょんと跳ねるように動く。カードやリストの登場演出に使われる。',
    render(ctx, t, size) {
      const n = 4
      const pad = size * 0.2
      const step = (size - pad * 2) / (n - 1)
      const c = size * 0.5
      for (let i = 0; i < n; i++) {
        const local = (t * 1.5 - i * 0.3) % (Math.PI * 2)
        const bounce = Math.max(0, Math.sin(local))
        circle(ctx, pad + i * step, c - bounce * size * 0.14, size * 0.026, ACCENT, 0.9)
      }
    },
  },
  {
    id: 'find-edges',
    name: 'Find Edges',
    jp: 'エッジ検出',
    category: '質感',
    desc: '格子の内側は消え、外側の輪郭に沿った粒だけが光る。シルエットを浮かび上がらせる表現に使われる。',
    render(ctx, t, size) {
      const pulse = 0.6 + 0.4 * Math.sin(t * 2)
      for (const p of gridPositions(size, 9)) {
        const edge = p.col === 0 || p.col === 8 || p.row === 0 || p.row === 8
        circle(ctx, p.x, p.y, size * 0.01, edge ? ACCENT : INK_FAINT, edge ? pulse : 0.3)
      }
    },
  },
  {
    id: 'line-sweep',
    name: 'Line Sweep',
    jp: 'ラインスイープ',
    category: 'マスク',
    desc: '光の帯が画面を一度だけ横切り、通り過ぎた粒を一瞬だけ照らす。読み込み完了やスキャンの演出に使われる。',
    render(ctx, t, size) {
      const sweep = ((t * 0.6) % 1) * size
      for (const p of gridPositions(size, 9)) {
        const near = Math.abs(p.x - sweep) < size * 0.05
        circle(ctx, p.x, p.y, size * 0.01, near ? ACCENT : INK_FAINT, near ? 1 : 0.35)
      }
    },
  },
  {
    id: 'sin',
    name: 'Sin',
    jp: 'サイン波',
    category: '波形',
    desc: '数式そのままの、規則正しく美しいサインカーブ。時間とともに位相がずれて、波が流れていくように見える。',
    render(ctx, t, size) {
      const pad = size * 0.14
      const n = 24
      for (let i = 0; i < n; i++) {
        const x = pad + (i / (n - 1)) * (size - pad * 2)
        const y = size / 2 + Math.sin((i / n) * Math.PI * 4 + t * 2) * size * 0.16
        circle(ctx, x, y, size * 0.014, ACCENT, 0.85)
      }
    },
  },
  {
    id: 'mosaic',
    name: 'Mosaic',
    jp: 'モザイク',
    category: '質感',
    desc: '細かい格子が粗いブロック状になったり、また細かく戻ったりする解像度の変化。',
    render(ctx, t, size) {
      const blockiness = 2 + Math.round((Math.sin(t * 1.0) + 1) * 3)
      const cell = size / blockiness
      for (let row = 0; row < blockiness; row++) {
        for (let col = 0; col < blockiness; col++) {
          circle(ctx, (col + 0.5) * cell, (row + 0.5) * cell, cell * 0.3, (row + col) % 2 === 0 ? ACCENT : INK_FAINT, 0.75)
        }
      }
    },
  },
  {
    id: 'cross-blur',
    name: 'Cross Blur',
    jp: 'クロスブラー',
    category: 'レンズ',
    desc: '中心から上下左右の十字方向に同時ににじみ出て、ぼやけながら広がる動き。',
    render(ctx, t, size) {
      const c = size / 2
      const phase = (t * 1.0) % 1
      const dist = phase * size * 0.32
      ctx.filter = `blur(${phase * 6}px)`
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        circle(ctx, c + dx * dist, c + dy * dist, size * 0.024, ACCENT, 1 - phase)
      }
      ctx.filter = 'none'
    },
  },
  {
    id: 'zoom-blur',
    name: 'Zoom Blur',
    jp: 'ズームブラー',
    category: 'レンズ',
    desc: 'カメラがズームするように、中心から放射状に粒がぼやけながら勢いよく飛び出していく。',
    render(ctx, t, size) {
      const c = size / 2
      const n = 10
      const phase = (t * 1.0) % 1
      for (let i = 0; i < n; i++) {
        const a = hash(i, 5, 0) * Math.PI * 2
        for (let j = 0; j < 4; j++) {
          const dist = ((phase + j * 0.25) % 1) * size * 0.35
          ctx.filter = `blur(${(dist / (size * 0.35)) * 6}px)`
          circle(ctx, c + Math.cos(a) * dist, c + Math.sin(a) * dist, size * 0.016, ACCENT, 1 - dist / (size * 0.35))
        }
      }
      ctx.filter = 'none'
    },
  },
  {
    id: 'solid-rotation',
    name: 'Solid Rotation',
    jp: 'ソリッド回転',
    category: '回転',
    desc: '3点がひとつの硬い三角形として、形を保ったまま丸ごと回転する。剛体的な回転表現に使われる。',
    render(ctx, t, size) {
      bgGrid(ctx, size)
      const c = size / 2
      const angle = t * 1.2
      for (let i = 0; i < 3; i++) {
        const a = angle + (i / 3) * Math.PI * 2
        circle(ctx, c + Math.cos(a) * size * 0.16, c + Math.sin(a) * size * 0.16, size * 0.024, ACCENT)
      }
      circle(ctx, c, c, size * 0.01, ACCENT, 0.5)
    },
  },
  {
    id: 'dot',
    name: 'Dot',
    jp: 'ドット',
    category: '質感',
    desc: '位置も大きさも変わらず、ただ1点が静かに明滅する。もっとも単純な、動きの最小単位。',
    render(ctx, t, size) {
      const c = size / 2
      circle(ctx, c, c, size * 0.05, ACCENT, 0.4 + 0.6 * ((Math.sin(t * 1.5) + 1) / 2))
    },
  },
  {
    id: 'flowing-line',
    name: 'Flowing Line',
    jp: 'フローイングライン',
    category: '波形',
    desc: '粒がつらなってできた波状のラインが、リボンのように絶え間なく流れ続ける。',
    render(ctx, t, size) {
      const n = 26
      const pad = size * 0.1
      for (let i = 0; i < n; i++) {
        const x = pad + (i / (n - 1)) * (size - pad * 2)
        const y = size / 2 + Math.sin((i / n) * Math.PI * 3 + t * 2.4) * size * 0.14
        circle(ctx, x, y, size * 0.012, ACCENT, 0.3 + 0.6 * (i / n))
      }
    },
  },
  {
    id: 'thunder',
    name: 'Thunder',
    jp: 'サンダー',
    category: 'ランダム',
    desc: 'ジグザグの稲妻の形が一瞬だけ光り、すぐに消える。突発的な強調やインパクトの演出に使われる。',
    render(ctx, t, size) {
      const flash = (t * 1.5) % 2 < 0.15
      const pts = [
        [0.5, 0.05], [0.42, 0.32], [0.56, 0.34], [0.38, 0.62], [0.6, 0.6], [0.46, 0.95],
      ]
      for (const [nx, ny] of pts) circle(ctx, nx * size, ny * size, size * 0.014, ACCENT, flash ? 0.95 : 0.15)
    },
  },
]

export const motionById = Object.fromEntries(motions.map((m) => [m.id, m]))
