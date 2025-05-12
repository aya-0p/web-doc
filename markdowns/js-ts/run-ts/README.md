# トランスパイルと実行

パッケージ`typescript`を使います

```bash
# インストール
$ pnpm i typescript
# トランスパイル
$ pnpm tsc <file>
```

## tsconfig.json

tsconfig.jsonでトランスパイルの設定ができます

以下を実行すると雛形が作成されます

```bash
# tsconfig.jsonの作成
$ tsc --init

Created a new tsconfig.json with:                                               
                                                                             TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
$ cat tsconfig.json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
...
```

一度設定するとファイルを指定しなくても良くなります(tsconfig.jsonで指定するため)

```bash
$ ls
index.ts  node_modules  package.json  pnpm-lock.yaml  tsconfig.json
$ pnpm tsc
```

以下ではtsconfig.jsonの設定のうち、とりあえず必要なものを書きます

詳細はここに乗っています<https://www.typescriptlang.org/tsconfig/>

### compilerOptions.target

どのバージョンのJavaScriptにトランスパイルするか

指定しないと古のバージョン(ES5)になる

Node.jsのlatestを使うなら一番新しいのを選べばいいが、それ以外では実行環境に合わせる（とくにWeb）

### compilerOptions.module

どの実行環境で動かすかを指定する

CommonJSかES??か(その他か)

ES??を使えばimport/exportを用いた形式になる

CommonJSを使えばrequire/(module.)exports.??を用いた形式になる

### include / exclude

どのファイルをトランスパイルするか/しないか

`src/**/*.ts`と指定すればsrcディレクトリ以下のすべての".ts"で終わるファイルをトランスパイルする

## 実行

JavaScriptの実行と同じ

```bash
# Node.js
$ node index.js
# .jsはなくてもいい
$ node index
# package.jsonにしていしているならそれでいい
$ node .
```

## 実行（node@23.6.0以降のみ）

もうトランスパイルはいらない

実験的機能のため、本番環境では使わないのが無難

```bash
$ node --experimental-transform-types index.ts
```

`enum`や`namespace`などを使っていない(型情報しか利用していない)場合はオプションも不要

```bash
$ node index.ts
```
