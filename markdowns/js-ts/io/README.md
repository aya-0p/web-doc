# 入出力

ここではサーバーサイド(Node.js)のみを扱っています

Webではstdin/stdout/stderrは扱えません

## 出力

多くの場合、stdoutは`console.log()`, `console.info()`, `console.debug()`で表示されます

stderrは`console.warn()`, `console.error()`です

### それぞれ何が違う？

コンソールに表示されるときに見た目が変わります

## 入力

かんたんにはできません

入力された文字列をそのまま取得できます

```javascript
const stdin = require("fs").readFileSync("/dev/stdin", "utf8");
// "in1 in2 in3"
// のように、入力のスペースなどもそのまま入ってきます
```

対話型にする場合は`node:readline`でもできます（競技プログラミングでは上の方法のほうがやりやすいかも）

```javascript
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("ここに質問内容", (data) => {
  console.log(`入力内容: ${data}`);
  rl.close();
});
```
