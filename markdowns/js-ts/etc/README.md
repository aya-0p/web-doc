# その他

## アロー関数

~~なんでやってないのって言われたので書きました~~

関数を別の書き方で書いてみたものです

```ts
const functionName = (num: number): void => {
  console.log(num);
}
```

## 関数を引数に使う

```ts
// ものすごく時間がかかる関数
function fn(callback: (num: number) => any) {
  const num = 1 + 1;
  callback(num);
}

// 最初に習った方法ではこれ
fn(function _(d) {
  console.log(d);
});

// 関数名は無くていい
fn(function (d) {
  console.log(d);
});

// アロー関数で簡略化
fn((d) => {
  console.log(d);
})

// これでもできる
fn(console.log);
```

## 即時実行関数

```ts
// 定数に長い演算結果を入れたいときに使う？
const data = (() => {
  return 1;
})();
// data is 1

// switch文とかに使うかも？
const data2 = (() => {
  switch (something) {
    case 1:
      return 10;
    case 2:
      return 20;
    default:
      return undefined;
  }
})();
```

## async-await-then-catch

```ts
// ものすごく時間がかかる関数を何度も実行するとどうなるの？
import * as fs from "node:fs"; // ファイル読み書きするやつ

// 方法1 同期関数を用いる
console.log(fs.readFileSync("file1").toString())
console.log(fs.readFileSync("file2").toString())
console.log(fs.readFileSync("file3").toString())
// ...do something
// これだとファイル読み込みが終わるまで待たないといけない


// 方法2 callbackを用いる1
fs.readFile("file1", (err1, data1) => {
  if (err1) return console.error(err1);
  console.log(data1.toString());
});
fs.readFile("file2", (err2, data2) => {
  if (err2) return console.error(err2);
  console.log(data2.toString());
})
fs.readFile("file3", (err3, data3) => {
  if (err3) return console.error(err3);
  console.log(data3.toString());
})
// ...do something
// これでファイル読み込み中も別のことができる
// でもこれだとどの順番で実行されるかわからない

// 方法3 callbackを用いる2
fs.readFile("file1", (err1, data1) => {
  if (err1) return console.error(err1);
  console.log(data1.toString());
  fs.readFile("file2", (err2, data2) => {
    if (err2) return console.error(err2);
    console.log(data2.toString());
    fs.readFile("file3", (err3, data3) => {
      if (err3) return console.error(err3);
      console.log(data3.toString());
      // ...do something
    })
  })
});
// ...do another
// これで順番に実行されるし、別のこと(...do another)もできる
// でも数が増えるととても見にくくなる

// 方法4 async-await
async function main() {
  const data1 = await fs.promises.readFile("file1");
  console.log(data1);
  const data2 = await fs.promises.readFile("file2");
  console.log(data2);
  const data3 = await fs.promises.readFile("file3");
  console.log(data3);
  // ...do something
}
void main();
// ...do another

// または(こちらの方法だと関数を作らなくても良くなる)
void (async () => {
  const data1 = await fs.promises.readFile("file1");
  console.log(data1);
  const data2 = await fs.promises.readFile("file2");
  console.log(data2);
  const data3 = await fs.promises.readFile("file3");
  console.log(data3);
  // ...do something
})();
// ...do another
```

```ts
// async
// 非同期関数を作るためのもの
// 返り値の型はPromise<型名>
async function 関数名(): Promise<number> {
  // 処理
  return 0;
}

// await
// 非同期関数を待つためのもの
// 非同期関数内でのみ利用可能
async function 他の関数(): Promise<void> {
  const result = await 関数名();
}
function 別の関数(): void {
  const result = await 関数名();
  // これはできない(エラーとなる)
}

// then, catch
// 同期関数(普通の関数)内で、非同期関数の終了後の処理を追加するもの, およびエラーがあった場合にそれを受け取るもの
// 以下の関数でいうconsole.log(data);と「他の処理」の実行順序は不明
function 更に他の関数(): void {
  関数名()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
  // 他の処理
}
```

## 三項演算子

```ts
// 変数名 = 条件 ? TRUEの時にすること : FALSEのときにすること;
let cond = true;
const data = cond === true ? "TRUE" : "FALSE";
console.log(data); // data
```
