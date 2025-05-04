# 環境構築

## Node.js

Node.js は公式ページからダウンロード/インストールできる

<https://nodejs.org/ja>

でも... Node.js は高頻度でアップデートが行われる

> プログラミング言語にアップデート...?
>> JavaScript は言語仕様が毎年アップデートされているため、 Node.js もアップデートが行われている。別に他の言語でもよくある話ではある。

そのためここでは Volta という Node.js 管理ツールを利用する。

### Linux

```bash
# 帰ってくるメッセージは環境により異なります。
$ curl https://get.volta.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 10460  100 10460    0     0  20323      0 --:--:-- --:--:-- --:--:-- 20350
  Installing latest version of Volta (2.0.2)
    Checking for existing Volta installation
    Fetching archive for Linux, version 2.0.2
######################################################################## 100.0%
    Creating directory layout
  Extracting Volta binaries and launchers
    Finished installation. Updating user profile settings.
Updating your Volta directory. This may take a few moments...
success: Setup complete. Open a new terminal to start using Volta!

$ volta install node
success: installed and set node@22.15.0 (with npm@10.9.2) as default
```

### Windows

```bash
# 帰ってくるメッセージは環境により異なります。
$ winget install Volta.Volta
$ volta install node
success: installed and set node@22.15.0 (with npm@10.9.2) as default
```

## 実行環境の構築

### npm

Node.js はいろいろなパッケージマネージャを利用して他のパッケージをインストールします。しかし、色々問題を抱えているため利用しません。

### pnpm

> ~~**筆者の最推し!!!!!!!!!!**~~

npm の使い勝手はそのままに、インストールしたパッケージのディレクトリ構造をいい感じにしてくれます。

```bash
# npm
$ npm i -g pnpm
# volta
$ volta install pnpm
success: installed pnpm@10.10.0 with executables: pnpm, pnpx
```

### yarn

わからないため後からここを書いてくれる方を募集します。

```bash
# npm
$ npm i -g yarn
# volta
$ volta install yarn
success: installed and set yarn@4.9.1 as default
```

## 開発環境の構築

### プロジェクトの作成

まずはプログラムを書く場所を作ります。

```bash
$ mkdir your-project-name
$ cd your-project-name
# git init # gitを使うなら
$ pnpm init
# npm init
# yarn init
```

これでディレクトリ構造が以下のとおりになるはずです。`()`内は yarn でのみ作成されます。

- /your-project-name/
  - (.editorconfig)
  - .git/
    - ...
  - (.gitattributes)
  - (.gitignore)
  - (.pnp.cjs)
  - (.yarn/)
    - (...)
  - (README.md)
  - package.json
  - (yarn.lock)

### パッケージの追加

他のパッケージを使用する場合は次のようにします。例として`nodemon`をインストールします。

> nodemon って何？
>> 指定したファイルを更新すると自動的にファイルを再実行してくれるものです。Web開発で重宝します。

```bash
# npm
$ npm install nodemon
# yarn
$ yarn add nodemon
# pnpm
$ pnpm add nodemon
```
