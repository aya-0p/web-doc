# 実行方法

## 手元で打ち込んで実行する

`node`でできます

`.exit`と打つか、`Ctrl` + `D`で終了できます

```bash
$ node
Welcome to Node.js v22.15.0.
Type ".help" for more information.
> 1 + 1 # > で始まる行が自分の入力です
2
> .exit
```

## ファイルをそのまま実行する

`node`のあとに実行したいファイルを指定するだけです

```bash
$ cat main.js
console.log("Hello, world!");

$ node main.js
Hello, world!
```

拡張子は指定しなくても動きます

```bash
$ node main
Hello, world!
```

## package.jsonで指定

package.json の main に実行したいファイルを指定すればファイルを指定する必要がなくなります

```bash
$ cat package.json
{
...
  "main": "main.js",
...
}
$ node .
Hello, world!
```

scripts 内に実行したいプログラムを指定することもできます。ここでは Node.js 以外も動くと同時に、node の実行オプションも事前に指定することができます

```bash
# tscについては一旦無視しておいてください
$ cat package.json
{
...
  "scripts": {
    "start": "tsc && node main.js"
  }
...
}
$ pnpm start

> project@version start /path/to/project
> tsc && node main.js

Hello, world!

```

## nodemonを利用する

指定したファイルが更新されたときに自動的にファイルを再実行してくれます。Web 開発時に便利です。

<https://github.com/remy/nodemon>

```bash
$ npm install nodemon
# pnpm add nodemon
# yarn add nodemon
$ nodemon ./server.js localhost 8080
```
