# JavaScriptで競技プログラミング

- **やめておいたほうがいい**

変数にどんな型のデータをいれてもいいし、出力も適当にすればいい、でも競プロはJavaScriptで(TypeScriptも)やらないほうがいい

## JavaScript / TypeScriptの利点

- オーバーフローがない
  - 配列の長さは指定する必要がないし、配列外参照というものがない
- 整数に関しては上限がない
  - bigintを使えば数値の上限がない
- 適当に出力すればいい
  - 文字列も数値もconsole.logでいい
- 文字列、数値、配列間の変換が楽
  - たとえば[この問題](https://atcoder.jp/contests/abs/tasks/abc081_a)とかが楽になる

## JavaScript / TypeScriptの欠点

- 標準入力が扱いにくい
  - 標準入力は空白含めたすべての文字列で渡される
  - 自分で改行や空白で分けなければいけない
  - そのあと文字列や数値、配列などに変換する必要がある
- 遅い
  - かんたんなプログラムでもふつうに何百ミリ秒かかる
- sortが使いにくい
  - 配列のsortは文字列ソートとなっている
  - 数値ソートがうまく行かない
    - 自分で実装する必要がある
- 解答例がない
  - だれもJavaScriptで提出しない

```javascript
// こんなことすれば数値ソートと文字列ソートを共存できる
(() => {
  const sortFunc = Array.prototype.sort;
  // 数字のsort
  Array.prototype.sort = function sort(compareFunc) {
    if (compareFunc) return sortFunc.call(this);
    else return sortFunc.call(this, (a, b) => a - b);
  };
  // 文字列のsort
  Array.prototype.charSort = sortFunc;
})();
```

## 実際にやってみる

言語はJavaScript(またはTypeScript)を選び忘れないように
