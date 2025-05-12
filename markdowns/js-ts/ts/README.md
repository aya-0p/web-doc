# TypeScriptとは

- JavaScriptに型情報を追加したものです。

```ts
function main(input: string): void {
  console.log(input);
}

main("input");

```

- `: string`や`: void`の部分が型名です（正確には違う）。

## なにが嬉しい？

- typo（打ち間違い）が減る
  - ちゃんと型を扱えばtypoは存在しない変数/プロパティへのアクセスとして検出される
- 型間違いがなくなる
  - 1 + "1" = "11"の事故がなくなる
