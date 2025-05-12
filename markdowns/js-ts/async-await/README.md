# 非同期処理

## 何を扱う？

- Promise
- async-await
- .then-.catch

## 何を扱わない？

- [マルチプロセス/マルチスレッド](../multi/README.md)
- Promiseがどのように動くのか

## 非同期処理とは？

ファイルの入出力、ファイルのアップロードやダウンロード...など処理にものすごい時間がかかるものがある

殆どはCPUを使っている(ここでは、計算している)のではなく待ち時間であるため、その待ち時間に別のことしたいなというときに使います

まずは例から

```javascript
const fs = require("fs/promises");

// 非同期関数
async function main() {
  const data = await fs.readFile("file.txt");
  return data;
}

main()
  // 正常に終了したらここが実行される
  .then((data) => {
    console.log(data);
  })
  // そうでなければ(throw...があったり、非同期関数の.catchがなかったり)ここが実行される
  .catch((err) => {
    console.error(err);
  })
```
