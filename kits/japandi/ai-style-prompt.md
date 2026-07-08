# AIスタイルプロンプト — ジャパンディ / JAPANDI

v0 / Lovable / Bolt / Cursor / Claude Code などに、UIの生成指示と一緒に貼ってください。
(日本語版・英語版のどちらか、ツールに合わせて1つ)

---

## 日本語版

```
以下のデザイン言語「ジャパンディ(Japandi)」を厳密に適用してください。

## 思想
日本の侘び寂び × 北欧のヒュッゲ。「引き算の先の豊かさ」。静けさ・素材感・時間の
ゆっくりさを、UIの密度と速度で表現する。

## レイアウト
- 画面の50〜60%以上を余白にする。要素を減らせないか常に先に検討する
- 1画面1メッセージ。セクション間の余白は要素の高さの1.5〜2倍
- グリッドは使うが、対称性より「間(ま)」を優先。中央揃えか、片側に寄せて大きく空ける

## 色(このパレット以外を使わない)
- 背景: #EFE9DE(生成り) / カード: #F5F1E8 / 第二面: #E9E2D4
- 文字: #3A3733(炭) / 補助文字: #77705F / 弱い文字: #9A917F
- アクセント: #8A8F79(苔)…線と小さな図形にのみ使用。面で塗らない
- 温アクセント: #CBB99A(砂)…背景の変化用
- 禁止: 原色、ネオン、彩度の高い色、純白 #FFFFFF、純黒 #000000

## タイポグラフィ
- 見出し: 細いセリフ/明朝(日本語: Shippori Mincho 500 / 欧文: Cormorant Garamond 500)
- 本文: ライトなサンセリフ(日本語: Zen Kaku Gothic New 400 / 欧文: Karla 400)
- 見出しは letter-spacing 0.2em〜0.45em、本文は line-height 1.9〜2.1
- 太字(700以上)と大文字の叫びは使わない。強調は字間とサイズで

## コンポーネント
- ボタン: 塗りつぶさない。「テキスト+1pxの下線」または 1px の細枠。角丸は 0〜2px
- カード: 影なし。背景色の差(#F5F1E8 on #EFE9DE)だけで面を分ける
- 入力欄: 下線のみ(border-bottom 1px)。プレースホルダは #9A917F
- 区切り: 1px の水平線か、幅24〜32pxの短い線
- アイコン/図版: 1.5px前後の線画のみ。塗りつぶしイラスト・写真の多用は避ける

## 禁止事項
ドロップシャドウ / グラデーション / 8px超の角丸 / 太字の見出し / 高密度なレイアウト /
バッジやラベルの多用 / アニメーションの弾み(ease-out 0.3s程度の静かな遷移のみ可)
```

---

## English version

```
Apply this design language strictly: "Japandi" (Japanese wabi-sabi × Scandinavian hygge).

## Philosophy
Richness through subtraction. Express quietness, natural materials, and slowness
through low density and generous spacing.

## Layout
- Keep 50–60%+ of the viewport as empty space; always try removing elements first
- One message per screen. Section gaps = 1.5–2× the element height
- Use a grid, but favor asymmetric "ma" (breathing room) over symmetry

## Color (use ONLY this palette)
- Background #EFE9DE (unbleached) / Surface #F5F1E8 / Surface-2 #E9E2D4
- Ink #3A3733 (charcoal) / Soft ink #77705F / Faint ink #9A917F
- Accent #8A8F79 (moss) — lines and small marks only, never large fills
- Warm accent #CBB99A (sand)
- Forbidden: primaries, neons, saturated colors, pure #FFFFFF, pure #000000

## Typography
- Headings: thin serif (Cormorant Garamond 500; JP: Shippori Mincho 500)
- Body: light sans (Karla 400; JP: Zen Kaku Gothic New 400)
- Headings letter-spacing 0.2–0.45em; body line-height 1.9–2.1
- No bold (700+) shouting; emphasize with tracking and size instead

## Components
- Buttons: never filled boxes — text + 1px underline, or 1px hairline border, radius 0–2px
- Cards: no shadows; separate surfaces only by background tone
- Inputs: bottom border only (1px); placeholder #9A917F
- Dividers: 1px rules or short 24–32px lines
- Icons/illustrations: 1.5px line art only

## Never use
Drop shadows / gradients / radius over 8px / bold headings / dense layouts /
badge clutter / bouncy animation (calm 0.3s ease-out transitions only)
```

---

## 使い方のコツ

- **プロンプトの前に要件、後にこのスタイル**の順で貼ると効きやすい
- 出力が崩れたら、禁止事項の該当行だけを再送する(全文再送より速い)
- 検品は `README.md` のチェックリストで
