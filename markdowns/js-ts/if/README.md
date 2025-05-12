# 条件分岐

この部分の説明は初心者向けではありません。プログラミングをほとんどやったことがない方は別の資料を参考にしてください。

これを読むと`0`, `-0`, `NaN`の特殊さがわかるかも
<https://ja.wikipedia.org/wiki/IEEE_754>

## if

条件の`()`は省略できません

`{}`は省略できますが、書いたほうが見やすい

```javascript
if (condition1) {
  console.log("condition1 is true");
} else if (condition2) {
  console.log("condition2 is true");
} else {
  console.log("false");
}

// これでも問題はない
function (b) {
  if (b) return "ok";
  else return "ng";
}
```

### bool ? ifTrue : ifFalse

if文を1行にまとめたものです

```javascript
function check(c) {
  return c ? "ok" : "ng";
}
console.log(check(true)) // "ok"
console.log(check(false)) // "ng"

// 処理を書くこともできます
function check2(c) {
  return c ? console.log("ok") : console.log("ng");
}
check(true) // "ok"
check(false) // "ng"

// 複数連ねることもできます(が、見にくいのでやめたほうがいいです)

function check3(a, b) {
  return a ? console.log("ok1") : b ? console.log("ok2") : console.log("ng")
}
check3(true, false) // "ok1"
check3(false, true) // "ok2"
check3(false, false) // "ng"
```

## switch

変数や定数を複数の値と比較することができます

```javascript
let a; // 何らかの文字列
switch (a) {
  case "a":
    const b = "a";
    a += b; // a = a + b
    break; // caseの終わりにはbreakをつけます
  case "b":
    // caseが異なっていても同じ変数名をつけることはできません
    // const b = "aa"; // error, SyntaxError: Identifier 'b' has already been declared
    break;
  case "c": { // <- {}で囲むと使えます
    const b = "aaa"
    a += b;
    break
  }
  case "d":
    a += "1" // ここでbreakをいれないと
  case "e":  // ここの部分も実行されるようになります
    a += "2"
    break;
  case "f":
  case "g":
    a += "3" // ここのようにわざと使うこともありますが、基本はbreakを入れるようにしましょう
    break;
  default: // どの条件にも当たらないか、breakされなかった場合はdefaultという特殊な条件に引っかかります
           // if文で言うelseのようなものです
           // なくても動きます
    break;
}
```

## 値の比較

JavaScriptでは値が同じか調べる方法がいくつかあります

### 等価 (`==`)

だいたい合っていれば`true`になります

```javascript
1 == "1" // true
2n == 2 // true
3n == "3" // true
"" == 0 // true
null == undefined // true
// ...他色々
```

#### trueと同等のもの

- `1`(数字)
- `1n`(bigint)
- `"1"`(文字列)
- `[1]`
- `[1n]`
- `["1"]`

#### falseと同等のもの

- `0`(数字)
- `0n`(bigint)
- `"0"`(文字列)
- `[]`(配列, 要素なし)
- `[0]`
- `[0n]`
- `["0"]`

### 厳密等価(`===`)

他の言語の`==`と同じです。基本はこちらを使うようにしましょう

```javascript
1 === "1" // false
'A' === 65 // false
1n === 1 // false
```

### `isNaN`

`NaN`だけは特殊で、`NaN === NaN`も`NaN == NaN`も`false`になります

`isNaN()`で解決できます

```javascript
NaN == NaN // false
isNaN(NaN) // true
```

### `Object.is`

JavaScriptの数値は浮動小数点数のため、`0`(`+0`)と`-0`は厳密には異なります

`Object.is()`ではこれを検出できます(`NaN`も検知できます)

```javascript
0 === -0 // true
Object.is(0, -0) // false
Object.is(NaN, NaN) // true

// ちなみに、0, -0は以下でもわかります
1 / 0 // Infinity
1 / -0 // -Infinity
```

## 値の比較はしないが条件分岐でよく使われるもの

### `instanceof`

対象のオブジェクトが指定したクラスそのものか、それを継承したものかどうかを見ることができます

```javascript
class A {}
const a = new A();
a instanceof A // true

class B extends A {};
const b = new B();
b instanceof A // true

// ほぼすべてのオブジェクトはObjectを継承している
{} instanceof Object // true

// こういうのが例外 (詳細は`Object.create(null)`で調べてみてください)
Object.create(null) instanceof Object // false
```

### `typeof`

変数や定数の型を取得できます

返り値以下のいずれかです

- `"string"`
  - 文字列
- `"number"`
  - 数値
- `"bigint"`
  - bigint
- `"boolean"`
  - trueとfalse
- `"symbol"`
  - Symbol()の返り値
- `"undefined"`
  - undefined
- `"function"`
  - 関数
- `"object"`
  - 上記以外
