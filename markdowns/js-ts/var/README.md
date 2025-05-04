# 変数

JavaScriptの変数宣言方法は以下の通り複数あります

## まず(グローバル)変数/定数とは？

変数や定数とは、値を入れておくための箱のことを言います

```javascript
let a = 0;
console.log(a); // aは0のため、0が出力される
a = 100; // aが100になった
console.log(a); // aは100のため、100が出力される
```

### 変数

後から書き換えができる箱のことです

何回でも書き換えができます

### 定数

一度書き込むと後から一切書き換えられない箱のことです

### グローバル変数

変数がどこからでも見ることができるものをいいます

## (指定なし) ... グローバル変数

変数名 = 値と指定するだけでできます

代入と同じ感覚でできます

これで定義されたものはグローバル変数となります

```javascript
function main() {
  a = "a";
}
main();
console.log(a); // stdout: a
```

## var ... グローバル変数

var 変数名 = 値

グローバル変数になります

```javascript
function main() {
  var a = "a";
}
main();
console.log(a); // stdout: a
```

## let ... 変数

let 変数名 = 値

ローカル変数になります

```javascript
function main() {
  let a = "a";
}
main();
console.log(a); // error
```

## const ... 定数

const 定数名 = 値

定数になります

書き換えることができません

```javascript
function main() {
  const a = "a";
  a = "A"; // error
}
main();
console.log(a); // error
```
