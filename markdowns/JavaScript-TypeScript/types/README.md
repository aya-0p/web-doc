# 型の話

## 基本の型

### `string`: 文字列

C++における `char` は存在しない

```typescript
const stringType: string = "this is string";
// 変数に型を指定しなくても推測してくれる
// VSCodeで変数(定数)にカーソルを当てるとstringと表示されるはず(拡張機能を入れていれば)
const argumemntA = "this is also string";
typeof argumentA // string
// C++でcharになるものも文字列である
const char = 'a'; // カーソルを当てるとstringと表示(VSCode)
```

### `number`: 数字

正確には C++ の `double` と同じ

C++ の `int` はない

浮動小数点のため、NaNやInfinity, -Infinityも数字である

```typescript
const numberType: number = 42;
// 小数も関係ない
const argFloat = 0.01;
typeof argFloat // number
const nan: number = NaN;
const inf: number = Infinity;
const minusInf: number = Infinity;
```

### `boolean`: `true` / `false`

これだけ

```typescript
const bTrue: boolean = true;
const bFalse: boolean = false;
```

### `undefined`: 値が未定義 (`undefined` のみ)

同じようなものに`void`があるが、これは関数の返り値がない場合に使用される。

`undefined`を用いると`return`が必要である

```typescript
const typeUndefined: undefined = undefined;
function doNothing(): void {} // returnいらない
function returnsStringOrUndefined(): string | undefined { return; } // returnを書く
// 多くの場合は|と同時に使われる
const arr: Array<number> = [1, 2, 3];
const data: number | undefined = arr[3];
// data === undefined
```

### `null`: `null`

`typeof null`は`"string"`が返る

```typescript
const _null: null = null;
typeof _null // object
```

### `symbol`: 一意で変わらないもの

`Symbol()`でのみ作ることができる

`unique symbol`とすることで`symbol`の代入を禁止できる(letやvarの変数宣言で使えない)

```typescript
const sym1: unique symbol = Symbol("symbol");
let sym2: symbol = Symbol("symbol");
sym1 !== sym2;
let sym3: unique symbol = Symbol(); // error
```

- `bigint`: 整数、仕様上上限はない
  - 実装上の限界はある
  - ほとんどの場合で利用することがない

```typescript
// bigintは数字の後にnを置く
const bigintA: bigint = 1n;
// bigintが使いにくい例
new Date(0); // 1970-01-01T00:00:00.000Z
// new Date(0n); // Cannot convert a BigInt value to a number
```

- `Function`(`function`): 関数
  - 型名はFunctionだが、(`typeof finctionName`)で返す文字がfunctionのためこの表記
  - 多くの場合`(...arg: type): returnType`のように引数と返り値を含めた形の型を使う

```typescript
const fn: Function = function a() {};
// ここでは(a: number) => stringが型
const num2str: (a: number) => string = function num2str(num) {
  return String(num);
}
typeof num2str // function
```

- `object`: 上記以外
  - 任意のオブジェクトを作ったり、`class`を作るとこの型になる
  - `Array`や`Date`等もこの型になる。しかし殆どの場合`Array<T>`, `Date`の型を使う
  - 配列は`Array<Type>`と表記するが、`Type[]`でも同じ意味になる

```typescript
const obj1: object = {};
const obj2: object = Date();
const obj3: object = [];
const arr1: Array<string> = ["string", "aaa"];
const arr2: number[] = [0, 2];
```

## 特別な型

### `any`: なんでもいい

`string`でも`undefined`でも

何にでも代入できるし、何からも代入される

```typescript
// 本当に何でも入る
let a: any = "";
a = 1;
a = Symbol();
a = {};
a = undefined;
a = () => {}; // 関数の別の書き方
// 何にでも使える
// number[]にanyを追加する
arr.push(a);
// こんなこともできる
let b: string = a.something[10000000];
```

### `unknown`: なにかわからない

何からも代入されるが、全く他には代入できない

`typeof (data)`などで判断する必要がある

```typescript
// 何でも入る
let b: unknown = "";
b = 1;
b = Symbol();
b = {};
b = undefined;
b = () => {}; // 関数の別の書き方
// 全く使えない
// number[]にunknownは追加できない
const arr: number[] = [100, 102];
// arr.push(b);
// 以下のようにすれば使える
if (typeof b === "number") {
  arr.push(b);
}
```

### `never`: 何も入らない

プログラム的にここに到達しない場合にこの型になることがある

```typescript
// 変数にこれを指定することは殆どない
// TypeScriptが型を推測するときにありえないことになったらこれになる
const neverExampleNumber = 1;
if (typeof neverExampleNumber === "string") {
  neverExampleNumber // never
}

let stringAndNumber: string & number; // never, 文字列かつ数字なんてものはない
```

## 型定義

自分だけの型を作ることができる

変数/定数宣言時に利用するか、`type typename = type`で定義したり、オブジェクトであれば`interface typename { ...type }`でも定義できる

何度も同じ型を使うときに便利

```typescript
// typeを使った型定義
type typeDefinedA = "a" | "A";
let a1: typeDefinedA = "a";
let a2: typeDefinedA = "A";
// 型に別名を与えることもできる
type typeDefinedA2 = typeDefinedA;
let a3: typeDefinedA2 = "a";
// しかし、あくまで別名であるため別名に代入しても問題ない
a1 = a3;
// 基本の型に対しては別名が作られない
// 下の例では変数/定数の上にカーソルを持っていってもstringと表示される(VSCode)
type string2 = string;
let str2: string2 = "aaa";
// まず、最終的な型が同じであればどのように定義しても問題ないとみなされる
type typeDefinedA3 = "a" | "A";
let a4: typeDefinedA4 = a1;
```

### 特定の物しか入らないもの

- `"任意の文字列"`: 特定の文字しか入らない
- `任意の数字`: 特定の数字しか入らない
  - NaNやInfinity, -Infinityは使えない
- `任意の整数n`: 特定のbigintしか入らない
- `true`: true
- `false`: false

```typescript
const Astr: "A" = "A";
const zeroNum: 0 = 0;
const zeroBInt: 0n = 0n;
const _true: true = true;
// constで定数を定義すれば自動的にこれになる
const Q = "Q";
// Qの型は"Q"
```

### `|`: OR, どちらかに合う型

`string | number`: 文字列または数字

```typescript
let orExample: string | number = 10;
orExample = "string";
orExample = 10n // error
```

### `&`: AND, どちらにも合う型

`{ a: number } & { b: string }`: `{a: number; b: string}`と同じ

```typescript
let andExample: { a: string } & { b: number } = {
  a: "10",
  b: 20,
};
// (再掲)
let stringAndNumber: string & number; // never, 文字列かつ数字なんてものはない
```

### `<T>`: 型内の変数

- `type`, `interface`などで使える(変数/定数宣言では使えない)
- `Array<T>`はTの型を要素に持つ配列
  - `Array<string>`: `["a", "b"]`
  - `Array<number>`: `[1, 2]`
- `Obj<T> = { a: T }`で`T=any`とすれば`{ a: any }`となる
  - 例を見たほうがわかりやすい

```typescript
type ArgType<T> = string | T;
// 以下のように使う
// ArgType<number> = string | numberとなる
const q: ArgType<number> = 1;
```

### 任意のオブジェクト

`type obj = { a: string }`と`interface obj { a: string }`は同じ意味

```typescript
type obj1 = {
  a: string;
}

interface obj2 {
  a: string;
}

interface obj3 {
  // :の前に?をつけると意味はstring | undefinedと同じ
  // 見やすくなる
  a?: string;
}
```

## クラス(class)

クラスは型だけで定義することはできません。クラスの定義と同時に型の定義も行われます。

```typescript
// class
class ClassA {
  constructor(a: string) {
    this.a = string;
  }
  a: string;
}

const a: ClassA = new ClassA("a");
a.a; // string
```

### public, protected, private, \#

- public: どこからでもアクセス可能
  - なにも指定しないとこれになる
- protected: 自分自身とこれを継承したクラスからアクセス可能
- private: 自分自身のみアクセス可能
- \#: privateと同じ
  - これだけJavaScriptで定義されているため、トランスパイル後もアクセスできない

```typescript
class Class1 {
  public a: string = "a";
  protected b: string = "b";
  private c: string = "c";
  #d: string = "d";
}

class Class2 extends Class1 {
  constructor() {
    this.a; // ok
    this.b; // ok
    this.c; // ng
    this.#d; // ng
  }
}

const a = new Class1();
a.a; // ok
a.b; // ng
a.c; // ng
a.#d; // ng
const b = new Class2();
b.a; // ok
b.b; // ng
b.c; // ng
b.#d; // ng
```

### readonly

書き込み禁止にします(`const`みたいなもの)

`constructor`と直接代入のみできます

`public`などと同時に使う場合は`public readonly`の順番です

```typescript
class Class {
  readonly a: string = "a"
  readonly b: string;
  constructor(b: string) {
    this.b = b;
  }
  c() {
    this.a = "A"; // error
    this.b = "B"; // error
  }
}
```

### get, set (JavaScriptの話)

変数への代入や利用と同じように使えるが、そこで関数が動くかんじです

getとsetは同時に利用できます

- get
  - 代入時に動く
  - 引数は指定しない
  - 返り値を指定する
- set
  - 利用時に動く
  - 引数は1つだけ指定する
  - 返り値は指定しない

```typescript
class Class {
  get a() {
    console.log("a1");
    return "a";
  }
  set a(param: string) {
    console.log(param);
  }
}

const c = new Class();

const b = c.a; // b is "a", stdout "a1"
c.a = "a2"; // stdout: "a2"
```

### classとinterface

classが特定のinterfaceを満たしているかを確認することができます

`type = ...`の方でも使えます(が、オブジェクト型である必要があります)

```typescript
interface A {
  a: string;
  b(i: number): number;
}

class B implements A {
  a = "a";
  b(i: number) {
    return i + 1;
  }
}
// error: クラス 'C' はインターフェイス 'A' を正しく実装していません。
class C implements A {
  a = "A";
}
```

### this, extends, super (継承の話)

定義した関数(メソッド)で自分自身を返したい場合は`this`を使います

自分自身の名前を使うこともできますが、継承時に問題が起こります

```typescript
class Class1 {
  a: string = "a";
  b(): this {
    return this;
  }
  c(): Class1 {
    return this;
  }
}
class Class2 extends Class1 {
  d: string = "d";
}

const a = new Class2(); // a is Class2
const b = a.b(); // b is Class2
const c = a.c(); // c is Class1
b.d; // "d"
c.d; // error
```

クラスは`extends`を用いて継承できます (interfaceでもできます)

```typescript
class Class1 {
  constructor() {}
  a: string = "a";
}

class Class2 extends Class1 {
  constructor() {
    super();
  }
  c: string = "c";
}

const q = new Class2();
q.a; // "a"
```

継承を行う場合、`constructor`では`super()`を実行する必要があります。

継承先で継承前と同じ名前メソッドを定義した際に継承前のメソッドを使いたい場合にも使えます

なお、フィールド(変数/定数)は上書きされます

```typescript
class A {
  constructor(a: string) {
    this.a = a;
  }
  a: string;
  b() {
    console.log("b");
  }
  c() {}
  d: string = "aaaa";
}
class B extends A {
  constructor(a: string) {
    super(a); // 必須
  }
  b() {
    super.b(); // stdout: "b"
    console.log("B");
  }
  // メソッド`c`を別で定義しないのであれば何も書かなくていい
  d = "d";
}
```
