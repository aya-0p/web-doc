# トランスパイルと実行

パッケージ`typescript`を使います

```bash
# インストール
$ pnpm i typescript
# トランスパイル
$ pnpm tsc <file>
```

## tsconfig.json

tsconfig.json でトランスパイルの設定ができます

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

一度設定するとファイルを指定しなくても良くなります(tsconfig.json で指定するため)

```bash
$ ls
index.ts  node_modules  package.json  pnpm-lock.yaml  tsconfig.json
$ pnpm tsc
```

以下では tsconfig.json の設定のうち、とりあえず必要なものを書きます

詳細はここに乗っています<https://www.typescriptlang.org/tsconfig/>

### compilerOptions.target

どのバージョンの JavaScript にトランスパイルするか

指定しないと古のバージョン(ES5)になる

Node.js の latest を使うなら一番新しいのを選べばいいが、それ以外では実行環境に合わせる（とくに Web）

### compilerOptions.module

どの実行環境で動かすかを指定する

CommonJS か ES?? か(その他か)

ES?? を使えば import/export を用いた形式になる

CommonJS を使えば require/(module.)exports.?? を用いた形式になる

### include / exclude

どのファイルをトランスパイルするか/しないか

`src/**/*.ts`と指定すれば src ディレクトリ以下のすべての".ts"で終わるファイルをトランスパイルする

## 実行

JavaScript の実行と同じ

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
