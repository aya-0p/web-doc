<!-- title Rustメモ帳 -->
<!-- create 2025-05-16 16:00 -->
<!-- update 2025-05-16 16:00 -->
<!-- license 自由に使っていいよ -->

# RUST

メモ帳

## 目次

- [RUST](#rust)
  - [目次](#目次)
  - [initialize](#initialize)
  - [main.rs](#mainrs)
  - [stdout](#stdout)
  - [型](#型)
    - [数値](#数値)
      - [int](#int)
      - [unsigned int](#unsigned-int)
      - [float](#float)
      - [数値への型変換](#数値への型変換)
    - [文字列](#文字列)
      - [文字列への型変換](#文字列への型変換)

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

#### 数値への型変換

```rust
// 数値から数値
// 一番かんたんなものは
// (値) as (型名)
let a: i32 = -10;
let b: u64 = a as u64;
assert_eq!(b, 0); // こういうことが起きる
// float to intはこうするしかない

// 絶対安全な型変換は
// (型名)::from(値);
let c: i64 = i64::from(a);

// 安全でない型変換は
// (型名)::try_into(値); (返り値: Result<...>)
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
