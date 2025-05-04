# 非同期処理

## 何を扱う？

- Promise
- async-await
- .then-.catch

## 何を扱わない？

- マルチプロセス/マルチスレッド

## 非同期処理とは？

ファイルの入出力、ファイルのアップロードやダウンロード...など処理にものすごい時間がかかるものがある

殆どはCPUを使っている(=計算している)のではなく、待ち時間であるため、同時に2つのことをしたいなとなったときに使うやつ

まずは例から

```javascript
const fs = require("fs/promises");
async function a() {
  const data = await fs.readFile("file.txt");
  return data;
}
a()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
```
