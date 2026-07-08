# フォントと組み方 — ジャパンディ

## フォントペア

| 役割 | 日本語 | 欧文 | 取得先 |
|---|---|---|---|
| 見出し | Shippori Mincho (500) | Cormorant Garamond (500) | Google Fonts(無料・商用可) |
| 本文 | Zen Kaku Gothic New (400) | Karla (400) | Google Fonts(無料・商用可) |

読み込み(コピペ用):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600&family=Zen+Kaku+Gothic+New:wght@400;500&family=Cormorant+Garamond:wght@500&family=Karla:wght@400;500&display=swap" rel="stylesheet" />
```

## 組み方の数値(ここが世界観の8割)

| 項目 | 値 | 理由 |
|---|---|---|
| 見出しの字間 | 0.2〜0.45em | 読む速度を落とさせる=静けさの演出 |
| 見出しのウェイト | 500(太字禁止) | 主張ではなく佇まい |
| 本文の行間 | 1.9〜2.1 | 行間は「間(ま)」。詰めた瞬間に世界観が壊れる |
| 本文サイズ | 13〜15px | 小さめ+広い行間の組み合わせ |
| ラベル・ナビ | 10〜11px / 字間0.3em / 補助色 | 消え入るくらいでちょうどいい |
| 縦書き | 見出しで積極的に使ってよい | `writing-mode: vertical-rl`。和の時間軸が出る |

## やってはいけない組み方

- 太字(700以上)での強調 → 字間かサイズで代替する
- 詰まった行間(1.5未満)の本文
- 大文字+太字の英語見出し(叫び) → 大文字なら細く・広く
- 3種類以上のフォントの混在
