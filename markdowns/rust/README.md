<!-- title Rustメモ帳 -->
<!-- create 2025-05-16 16:00 -->
<!-- update 2025-05-18 01:00 -->
<!-- license 自由に使っていいよ -->

# RUST

メモ帳

todo:

- マクロ作成

## 目次

- [RUST](#rust)
  - [目次](#目次)
  - [initialize](#initialize)
  - [main.rs](#mainrs)
  - [stdout](#stdout)
  - [変数と定数](#変数と定数)
  - [型](#型)
    - [数値](#数値)
      - [int](#int)
      - [unsigned int](#unsigned-int)
      - [float](#float)
      - [その他](#その他)
        - [usize](#usize)
      - [数値への型変換](#数値への型変換)
    - [文字列](#文字列)
      - [文字列への型変換](#文字列への型変換)
    - [配列とVec](#配列とvec)
      - [配列](#配列)
      - [Vec](#vec)
      - [配列Vec共通](#配列vec共通)
    - [Result\<...\>](#result)
    - [Option\<...\>](#option)
  - [macro](#macro)
    - [使用](#使用)
    - [作成](#作成)

## initialize

gitも一緒にできる

```bash
cargo init
```

## main.rs

ここが始まり

```rust
fn main() {}
```

## stdout

```rust
println!(data);
// or
print!(data);

println!("{}", data_not_str);
```

## 変数と定数

Rustは`let`で変数定義を行う

ただ、何も考えないと定数として扱われる

```rust
let i = 0;
i = 1; // error
```

`let mut`とすれば変数になる

```rust
let mut i = 0;
i = 1; // ok
```

## 型

### 数値

#### int

未指定で`i32`

- `i8` -> `char`
- `i16` -> `short`
- `i32` -> `int`
- `i64` -> `long`
- `i128` -> ?

#### unsigned int

- `u8` -> `unsigned char`
- `u16` -> `unsigned short`
- `u32` -> `unsigned int`
- `u64` -> `unsigned long`
- `u128` -> ?

#### float

未指定(`0.0`等)で`f64`

- `f16` -> ?
- `f32` -> `float`
- `f64` -> `double`
- `f128` -> ?

#### その他

##### usize

インデックスを扱うときに使う

- `usize` -> `unsigned int` or `unsigned long`

#### 数値への型変換

```rust
// 数値から数値
// 一番かんたんなものは
// 値または変数 as 型名
let a: i32 = -10;
let b: u64 = a as u64;
assert_eq!(b, 0); // こういうことが起きる
// float to intはこうするしかない

// 絶対安全な型変換は
// 型名::from(値);
let c: i64 = i64::from(a);

// 安全でない型変換は
// 型名::try_into(値); (返り値: Result<...>)
let d: Result<u32, std::num::TryFromIntError> = u32::try_from(a);

// 文字列(&str, String)から数値 (返り値: Result<...>)
let e = "10";
let f = a.parse();
```

### 文字列

- `&str` -> `char *`
- `String` -> `std::string`

```rust
// 何も指定しないと&'static str型となる
// 基本は&str型としておく
let a: &str = "aaa";

// Stringは以下の通り
let b: String = String::from("bbb");
let c: String = String::from(a);

// &strのコピーはCのchar *と同じくかんたんにはできない
// Stringのコピーは以下の通り
let d: String = b.clone();

// 文字列の結合は+を使うだけ
// ただし、一番最初の型はString, それ以外は&strまたは&String
let e: String = d + &c + &b + a;

// Stringでは二度以上参照すると所有権の問題でエラーが出る
let f: String = e + &e; // error
// clone()でコピーする必要がある
let g: String = e.clone() + &e.clone();
```

#### 文字列への型変換

```rust
// String -> &str
let a: String = String::from("a");
let b: &str = &a;
// 数値 -> 文字列
let c: i32 = 0;
let d: String = c.to_string();
```

### 配列とVec

#### 配列

長さの変更ができない

```rust
// 配列定義
// [初期値;長さ]
let mut arr = [0;10];

// [...値]
let arr2 = [1, 2, 3, 4, 5];
```

#### Vec

可変長配列

```rust
// Vec定義
// vec![]
let mut vec1: Vec<i32> = vec![];
// vec![初期値;長さ]
let mut vec2: Vec<i32> = vec![0;10];
// vec![...要素]
let mut vec3: Vec<i32> = vec![0,1,2,3,4];

// push()で末尾に追加できる (mut必要)
vec1.push(10);
// pop()で末尾を取り出せる (mut必要)
let a: Option<i32> = vec1.pop();
```

#### 配列Vec共通

```rust
// 取り出すのはいつもどおり
assert_eq!(arr[0], 0);
// Option<...>でも取り出せる(こちらのほうが安全)
let b: Option<i32> = arr.get(0);

// 長さはlen()
let size: uzise = arr.len();

// sortでソートができる (mut必要) 最悪計算量がO(n * log(n))
arr.sort();

```

### Result<...>

結果と返り値を持つもの, `Ok()` or `Err()`

`is_ok()`や`is_err()`で問題の有無を確認でき、`ok()`や`err()`で内容を`Option<...>`で取得できる

### Option<...>

値を持たないかもしれないもの, `Some()` or `None`

`配列.get(インデックス)`で配列外を参照したときなどに出てくる

## macro

`println!`とか`vec!`とかの`!`で終わるやつ

```rust
let mut vec1 = vec![0;5];
//             ^^^^ here
for a in vec1 {
  println!("{}", a);
//^^^^^^^^ here
}
```

### 使用

`マクロ名!(変数など)`または`マクロ名![変数など]`または`マクロ名!{変数など}`でできる

違いはない

```rust
// 全部意味は同じ
let mut vec1 = vec!(0;10);
let mut vec2 = vec![0;10];
let mut vec3 = vec!{0;10};
```

### 作成

`macro_rules!`から始まる

```rust
macro_rules! test {
  // 変数が何もない場合
  () => {
    // マクロ内でマクロを使うこともできる
    println!("test");
  };
  // 変数を用いる場合
  // !TODO
}
```
