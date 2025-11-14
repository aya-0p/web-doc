# Typescript 講座 (Discord.js)

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
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
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

|型名|説明|例|
|--|--|--|
|string|文字列|"こんにちは", "Hello, world!", 'a'|
|number|数値(倍精度浮動小数点:double)|10, -30, 0.05, NaN, Infinity|
|boolean|trueとfalse|true, false|
|undefined|未定義(配列外など)|undefined|

これ以外にもたくさんありますが、一旦これだけ覚えておきましょう。

> int, longやキャラクタ型は無いの？  
> ない。（整数型=bigint は存在するがここでは説明しない）

### 型の変換

でも数字を文字列にしたいことはいくらでもあります。たとえば計算結果をメッセージにして送りたい時...

```ts
msg = (10*2 + 4) / 5
await channel.send(msg); // error
```

このようなことをすればエラーが消えます

```ts
msg = String((10*2 + 4) / 5);
await channel.send(msg);
```

`String(...)`では...を文字列に強制的に変換してくれます。(Java の`toString()`のように)
その他にも`Number(...)`とすれば数値に変換してくれたり、`Boolean(...)`とすれば true/false に変換してくれます。

> 詳細  
> `String()`では内部的に(...).toStringを呼んでいます。そのため`msg = ((10*2 * 4) / 5).toString()`としても動きます。

ここからは新たに次のプログラムを使います。

```ts
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();

const client = new Client({
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
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
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
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
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
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
  weight: 45
}
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
  intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
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
