# Typescript 講座 (Discord.js)

- [Typescript 講座 (Discord.js)](#typescript-講座-discordjs)
  - [環境](#環境)
  - [2025-10-20](#2025-10-20)
  - [2025-10-27](#2025-10-27)
    - [型の基本](#型の基本)
    - [型の変換](#型の変換)
    - [オブジェクト](#オブジェクト)
  - [2025-11-14](#2025-11-14)
  - [2025-12-05?](#2025-12-05)
    - [1. 構造と継承 (extends)](#1-構造と継承-extends)
    - [2. Class](#2-class)
    - [3. 余談](#3-余談)
      - [get, set](#get-set)
      - [toPrimitive](#toprimitive)

## 環境

tsconfig.json

```json
{
  "compilerOptions": {
    "incremental": true,
    "target": "ES2022",
    "module": "NodeNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "moduleResolution": "NodeNext",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "noUncheckedIndexedAccess": true
  },
  "include": ["main.ts"]
}
```

package.json

```json
{
  "name": "szpp-discord-bot-lecture",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.10.0",
  "dependencies": {
    "@types/node": "^24.8.1",
    "discord.js": "^14.23.2",
    "dotenv": "^17.2.3",
    "typescript": "^5.9.3"
  }
}
```

.env

```env
TOKEN=
```

## 2025-10-20

```ts
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (msg) => {
  if (msg.member?.user.bot) return;
  msg.reply("hello!");
});

client.login(process.env.TOKEN);
```

## 2025-10-27

### 型の基本

まずは何も考えないでこのコードをコピペして実行しましょう(前回作った`main.ts`に上書きしてください)

```ts
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.TOKEN);

client.on("ready", async (client) => {
  const guild = await client.guilds.fetch("1429766551925555242");
  const channel = await guild.channels.fetch("1429766553108484098");
  if (channel != null && channel.isTextBased()) {
    let msg: string;
    msg = "こんにちは";
    /*
    ここでmsgにいろいろ代入してみよう
    msg = 10;
    msg = true;
    */
    await channel.send(msg);
    process.exit();
  }
});
```

実行

```bash
$ pnpm tsc
$ node main.js
```

`szpp-bot-test-2025`にメッセージが送信されましたか？(されない場合はお知らせください)

`client.on("ready", async(client) => {...});`の中身を 1 つずつ説明(これ以外はいまはおまじないということに)

- `const guild = await client.guilds.fetch("1429766551925555242");`: bot が知るいろんなサーバから`szpp-bot-test-2025`を指定
- `const channel = await guild.channels.fetch("1429766553108484098");`: `szpp-bot-test-2025`のいろんなチャンネルから`一般`を指定
- `if (channel != null && channel.isTextBased()) {}`: チャンネルが見つかったら...
  - `let msg: string;`: 変数`msg`を設定
  - `msg = "こんにちは";`: msg に「こんにちは」を代入
  - `await channel.send(msg);`: `msg`の中身をメッセージとして送信
  - `process.exit();`プログラムを終了する

では、`msg`に`"こんにちは"`(文字列)以外の`10`(数値)や`true`(bool)を代入してみましょう

```txt
型 'number' を型 'string' に割り当てることはできません。ts(2322)
(または)
error TS2322: Type 'number' is not assignable to type 'string'.
```

エラーが出ます。これは`let msg: string;`の部分で`msg`には文字列しか入れてはいけないと明示したからです。(Java や C++ といった他の言語では当たり前ですが...)

ではどんな型があるか見てみましょう

| 型名      | 説明                          | 例                                 |
| --------- | ----------------------------- | ---------------------------------- |
| string    | 文字列                        | "こんにちは", "Hello, world!", 'a' |
| number    | 数値(倍精度浮動小数点:double) | 10, -30, 0.05, NaN, Infinity       |
| boolean   | true と false                 | true, false                        |
| undefined | 未定義(配列外など)            | undefined                          |

これ以外にもたくさんありますが、一旦これだけ覚えておきましょう。

> int, long やキャラクタ型は無いの？  
> ない。（整数型=bigint は存在するがここでは説明しない）

### 型の変換

でも数字を文字列にしたいことはいくらでもあります。たとえば計算結果をメッセージにして送りたい時...

```ts
msg = (10 * 2 + 4) / 5;
await channel.send(msg); // error
```

このようなことをすればエラーが消えます

```ts
msg = String((10 * 2 + 4) / 5);
await channel.send(msg);
```

`String(...)`では...を文字列に強制的に変換してくれます。(Java の`toString()`のように)
その他にも`Number(...)`とすれば数値に変換してくれたり、`Boolean(...)`とすれば true/false に変換してくれます。

> 詳細  
> `String()`では内部的に(...).toString を呼んでいます。そのため`msg = ((10*2 * 4) / 5).toString()`としても動きます。

ここからは新たに次のプログラムを使います。

```ts
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.TOKEN);

client.on("messageCreate", async (msg) => {
  if (msg.mentions.members?.has((client as Client<true>).user.id)) {
    const memberMessageContent = msg.content.replace(/<.+>/, "").trim();
    let message = "";
    message += "1024 *" + memberMessageContent + " = ";
    // sendMessage += (1024と入力の積を追加したい)
    await msg.reply(message);
    process.exit();
  }
});
```

では、コメントのようにユーザから受け取ったメッセージ(`memberMessageContent`)に 1024 を掛けた値を返信してみましょう

```ts
let msg = "";
msg = "hello,";
msg += "world!"; // <- このように+=を使えば変数に文字を追加できます
console.log(msg); // hello,world!
```

### オブジェクト

まず、人間を考えてみます。

人間には身長、体重...といったようにいろんな要素があります。これをプログラムで書いてみましょう

```ts
let myHeight = 160;
let myWeight = 50;
let myHome = "Shinzyuku-ku, Tokyo, Japan";

let myFriendHeight = 180;
let myFriendWeight = 80;
let myFriendHome = "Taisho-ku, Osaka, Japan";
// ...
```

このように書いていけば読みにくいですよね？特に共通化が難しくなります。（共通化がわからなければ一旦スキップ）

ではこのようにまとめてみましょう

```ts
let me = {
  height: 160,
  weight: 50,
  home: "Shinzyuku-ku, Tokyo, Japan",
};

let myFriend = {
  height: 180,
  weight: 80,
  home: "Taisho-ku, Osaka, Japan",
};
```

このように書けばちょっとは見やすくなったのではないでしょうか？これをオブジェクトって言います。

では実際のプログラムでみてみます。

```ts
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.TOKEN);

client.on("messageCreate", async (msg) => {
  if (msg.mentions.members?.has((client as Client<true>).user.id)) {
    const data = {
      test: "Hello, world!",
      aaaa: "Bye!",
    };
    await msg.reply(data.test);
    process.exit();
  }
});
```

`const data = {...}`でオブジェクトを作成しています。これを`data.test`と書くと`"Hello, world!"`となります。

実行して bot にメンションしてみると動くと思います。

では実践してみましょう

```ts
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.TOKEN);

client.on("messageCreate", async (msg) => {
  if (msg.mentions.members?.has((client as Client<true>).user.id)) {
    await msg.reply(); //<- ???
    process.exit();
  }
});
```

送られたメッセージのユーザー名を返信してみましょう。ちなみに msg はこのような構造になっています。

```ts
msg = {
  content: "メッセージの内容"
  author: {
    displayName: "送信者の名前",
  }
}
```

これを型で表現することもできます

```ts
interface Human {
  height: number;
  weight: number;
  home: string;
  // ...
}
let my: Human = {
  height: 160,
  weight: 50,
  home: "Shinzyuku-ku, Tokyo, Japan",
};

let myFriend: Human = {
  height: 180,
  weight: 80,
  home: "Taisho-ku, Osaka, Japan",
};

let other: Human = {
  height: 80,
  weight: 45,
};
```

これを貼り付けると other でエラーが表示されましたか？other は Human の home の要素がないのでエラーとなります。

本日最後の課題

各メッセージには id が振られてあります。メンションが来たときにそのメッセージ(または送信者)の id を 8192 で割った値を返信してみましょう。

```ts
msg = {
  content: "メッセージの内容"
  author: {
    displayName: "送信者の名前",
    id: "ID(文字列)"
  },
  id: "ID(文字列)"
}
```

## 2025-11-14

おみくじを作ろう

まずはテンプレート

```ts
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.TOKEN);

client.on("messageCreate", async (msg) => {
  // メンションがされたら
  if (msg.mentions.members?.has((client as Client<true>).user.id)) {
    let replyMessageContent: string = "";
    replyMessageContent = omikuji();
    await msg.reply(replyMessageContent);
  }
});

/// acknowledgements: created by @arkwnet

const data: string[] = ["大吉", "吉", "凶"];

function omikuji(): string {
  return data[Math.floor(Math.random() * data.length)] ?? "";
}
```

ちょっとずつ解説(おみくじの元のプログラムは[こちら](https://github.com/szpp-dev-team/omikuji/blob/main/step1/js/main.js))

- `const data...`: おみくじの内容を定義
- `function omikuji...`: おみくじの関数
- `Math.floor(...)`: ...の数値(number)を整数に変換(切り捨て)
- `Math.random()`: ランダムな数値, 0 以上 1 未満
- `data.length`: 配列(data)の長さ

```ts
const data = [
  {
    name: "大吉",
    rate: 0.01,
  },
  {
    name: "中吉",
    rate: 0.14,
  },
  {
    name: "小吉",
    rate: 0.15,
  },
  {
    name: "末吉",
    rate: 0.25,
  },
  {
    name: "吉",
    rate: 0.2,
  },
  {
    name: "凶",
    rate: 0.15,
  },
  {
    name: "大凶",
    rate: 0.1,
  },
];
```

答え

```ts
function omikuji(): string {
  const number = Math.random();
  let temp = 0.0;
  let result: number = 0;
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    if (!d) throw new Error("Unknown Data");
    temp += d.rate;
    if (temp >= number) {
      result = i;
      break;
    }
  }
  const d = data[result];
  if (!d) throw new Error("Unknown Data");
  return d.name;
}
```

## 2025-12-05?

Class の話

### 1. 構造と継承 (extends)

生物一般を考えてみます。ここで生物は動物も植物も含みます。生物の要素を構造にするとこんな感じに表せると思います。

```typescript
interface 生物 {
  /** cm */
  大きさ: number;
  /** y */
  年齢: number;
}
```

次に動物を考えてみます。同じように表してみます。

```ts
interface 動物 {
  /** cm */
  大きさ: number;
  /** y */
  年齢: number;
  /** m/s */
  現在の移動速度: number;
}
```

更に細かく考えて、人間を考えてみます。同じように表します。

```ts
interface 人間 {
  /** cm */
  大きさ: number;
  /** y */
  年齢: number;
  /** m/s */
  現在の移動速度: number;
  現在考えていること: string;
}
```

人間と動物、生物で比較した時、生物の要素はどれも動物、人間にもありますし、動物の要素はどれも人間にもあります。これは人間は動物の一部ですし、動物は生物の一部ですので自明っぽく見られます。

では、この「一部である」をプログラムでも表してみましょう。

```ts
interface 生物 {
  /** cm */
  大きさ: number;
  /** y */
  年齢: number;
}

interface 動物 extends 生物 {
  /** m/s */
  現在の移動速度: number;
}

interface 人間 extends 動物 {
  現在考えていること: string;
}
```

前のものと比較すると共通部分が消えるとともに「extends (上位のもの)」が増えました。この `extends` により関係を表すことができます。

ここからはプログラムで見ていきます。

```ts
// これは上位の要素
interface あ {
  要素1: number;
  要素2: string;
  // 中身は別に関数でも良い(あまり使うことは無いかも)
  要素3: () => void;
}

interface い extends あ {
  // [extends あ] より要素1~3は「い」にも存在する
  要素4: string;
}
```

### 2. Class

ここから、整数の計算を行なうプログラムを考えてみます。

```ts
interface int {
  num: number;
}
function toInt(n: number): int {
  return {
    // Math.floorは切り捨て
    num: Math.floor(int),
  };
}

function add(a: int, b: int) {
  return {
    num: a.num + b.num,
  };
}

function toString(n: int) {
  return String(a.num);
}

function main() {
  const a: int = toInt(10.5);
  const b: int = toInt(3.14);
  const c: int = add(a, b);
  console.log(toString(c));
}
main();
```

足し算だけしかできませんが、少なくとも整数同士の足し算がこれでできます。しかし、ここで C/C++ でいう `unsigned int / uint32_t` を実装しようとすると同じように関数 `add` や関数 `toString` が必要になりそうです。TypeScript には引数の型によって実行する関数を変えるような機能はないのでうまくいきません。
さらに、`n`は`{ num: number }`であるので

```ts
function main() {
  const a: int = toInt(10.5);
  a.num = 3.14;
  const b: int = toInt(2.1);
  const c: int = add(a, b);
  console.log(toString(c)); // 5.14
}
```

このように直接書き換えると整数型としたいのに小数点数が入ってしまいます。

これらを解決するのが Class です。

```ts
class int {
  private num: number;
  constructor(a: number) {
    this.num = Math.floor(a);
  }
  add(b: int) {
    this.num += b.num;
  }
  static add(a: int, b: int): int {
    return new int(a.num + b.num);
  }
}
```

- `class クラス名 {}` でクラスを作成することができます。
- class には `constructor` が必要です。これはクラスを生成する時 = `new クラス名(...)` とするときに必要です。（作り方/使い方は他の関数と同じ）
- class が持っておきたいデータを示しておきます。今回であれば整数値を保存しておきたいので `private num` としてあります。
  - `private` はクラスの外から見れなくなります。
  - `protected` は自分自身とこれを継承したものからは見れますが、外からは見れません。
  - `public` または何も書かないとどこからでも見ることができます。
- class が行いたい動作を示します。
  - 関数のように書きますが、`function` は書きません。（private, protected, public も同じように使えます）
- `static` を宣言することで `new クラス名(...)` をしなくても `クラス名.要素` や `クラス名.関数名(...)` とすると使うことができます。

上のものは次のように使えます。

```ts
const a = new int(10.5);
console.log(a); // int { num: 10 }
const b = new int(7.9);
console.log(b); // int { num: 7 }
const c = int.add(a, b);
console.log(c); // int { num: 17 }
a.add(b);
console.log(a); // int { num: 17 }
// console.log(c.num); // プロパティ 'num' はプライベートで、クラス 'int' 内でのみアクセスできます。
```

詳細はここにあります。 <https://ay0.org/js-ts/types/#%E3%82%AF%E3%83%A9%E3%82%B9(class)>

課題：C++ の int (int32_t) の範囲で四則演算を行えるようにしてみましょう。

### 3. 余談

#### get, set

先程の int で後から値を設定できるようにしてみましょう。とはいえ、`num` を `public` にしてしまうと整数でない値も入れてしまえるので関数を用いて実装してみましょう。

```ts
class int {
  private num: number;
  constructor(a: number) {
    this.num = Math.floor(a);
  }
  // 省略
  setValue(a: number) {
    this.num = Math.floor(a);
  }
  getValue(): number {
    return this.num;
  }
}

function main() {
  const a = new int(4.6);
  a.setValue(2.9);
  console.log(a.getValue()); // 2
}

main();
```

Java を触ったことがある人なら見たことがある書き方だと思いますが、設定したり受け取ったりするたびに関数を呼び出すのは面倒ですよね。できれば `console.log(a.value)` で出力できたら便利。これを達成できるのが `get`, `set` です。

```ts
class int {
  private num: number;
  constructor(a: number) {
    this.num = Math.floor(a);
  }
  // 省略
  get value() {
    return this.num;
  }

  set value(n: number) {
    this.num = Math.floor(n);
  }
}

function main() {
  const a = new int(4.6);
  a.value = 2.9;
  console.log(a.value); // 2
}

main();
```

関数の前に `get` または `set` を宣言すると使えます。詳細はこちら <https://ay0.org/js-ts/types/#get,-set-(javascript%E3%81%AE%E8%A9%B1)>

#### toPrimitive

ここまでで int のクラスを作成しましたが、こんなことはできません。

```ts
const a = new int(4.6);
console.log(Number(a)); // NaN
```

でも、こんなことができたら便利ですよね。

```ts
const a = new int(4.6);
console.log(Number(a) + 3); // NaN
```

できます。

```ts
  [Symbol.toPrimitive](hint: "number" | "string" | "default") {
    switch (hint) {
      case "string":
        return String(this.num);
      case "number":
        return this.num;
      case "default":
        return this.num;
    }
  }
```
