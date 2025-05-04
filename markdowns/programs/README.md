<!-- title いろいろなプログラム -->
<!-- update 2025-02-02 22:00 -->
<!-- license 文書: ライセンスページを確認してください, ソースコード: なし(自由に利用可能) -->

# いろいろなプログラム

- いろいろなプログラム置き場
- 使えるものがあればご自由にどうぞ

## 1

```javascript
module.exports = {
  and(a, b) {
    return a && b;
  },
  or(a, b) {
    return a || b;
  },
  xor(a, b) {
    return a !== b;
  },
  not(a) {
    return !a;
  },
  is(a, b) {
    return !a || b;
  },
  same(a, b) {
    return a === b;
  },
  check(fn, length) {
    const result = [];
    for (let i = 0; i < 2 ** length; i++) {
      const inputs = Array(length).fill(0);
      for (let j = 0, k = i; j < length; j++) {
        const a = Math.floor(k / 2);
        const b = k - a * 2;
        inputs[j] = b;
        k = a;
      }
      const j = inputs.map((d) => Boolean(d));
      const r = fn(...j);
      result.push(j, r);
    }
    return result;
  },
  t: true,
  f: false,
};
```

example

```javascript
and(t, t); // true
or(t, f); // true
xor(t, t); // false
not(t); // false
is(t, f); // false
same(t, t); // true
check(function (a, b, c) {
  return same(is(xor(a, b), or(a, b)), and(a, is(c, a)));
}, 3);
/*
[
  [ false, false, false ],
  false,
  [ true, false, false ],
  true,
  [ false, true, false ],
  false,
  [ true, true, false ],
  true,
  [ false, false, true ],
  false,
  [ true, false, true ],
  true,
  [ false, true, true ],
  false,
  [ true, true, true ],
  true
]
 */
```

## 2

数字を整理する

javascript

```javascript
const cleanNumber = (number, length, radix = 10, use = false) => {
  if (typeof number !== "number") throw new TypeError(`number is not number`);
  if (number < 0 || number - Math.floor(number) > 0) throw new RangeError(`number must be natural number or 0`);
  if (typeof length !== "number") throw new TypeError(`length is not number`);
  if (length <= 0 || length - Math.floor(length) > 0) throw new RangeError(`length must be natural number`);
  if (radix !== 2 && radix !== 8 && radix !== 10 && radix !== 16) throw new RangeError(`radix must be 2, 8, 10 or 16`);
  if (typeof use !== "boolean") throw new TypeError(`use is not boolean`);

  const fixNumber = number.toString(radix);
  if (fixNumber.length > length) throw new RangeError(`length must be larger than fixed number's length`);
  const fixNumber2 = (Array(length).join(0) + fixNumber).slice(-length);
  if (!use || fixNumber === 10) return fixNumber2;
  switch (radix) {
    case 2:
      return "0b" + fixNumber2;
    case 8:
      return "0o" + fixNumber2;
    case 16:
      return "0x" + fixNumber2;
  }
};
```

typescript

```typescript
const cleanNumber = (number: number, length: number, radix: 2 | 8 | 10 | 16 = 10, use: boolean = false): string => {
  if (number < 0 || number - Math.floor(number) > 0) throw new RangeError(`number must be natural number or 0`);
  if (length <= 0 || length - Math.floor(length) > 0) throw new RangeError(`length must be natural number`);
  if (radix !== 2 && radix !== 8 && radix !== 10 && radix !== 16) throw new RangeError(`radix must be 2, 8, 10 or 16`);

  const fixNumber = number.toString(radix);
  if (fixNumber.length > length) throw new RangeError(`length must be larger than fixed number's length`);
  const fixNumber2 = (Array(length).join(0) + fixNumber).slice(-length);
  if (!use || fixNumber === 10) return fixNumber2;
  switch (radix) {
    case 2:
      return "0b" + fixNumber2;
    case 8:
      return "0o" + fixNumber2;
    case 16:
      return "0x" + fixNumber2;
  }
};
```

example

```javascript
cleanNumber(255, 4, 16, true); // 0x00ff
cleanNumber(123, 8, 2); // 01111011
```

## 3

```typescript
const createBuffer = (data: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>): Buffer => {
  const bufferTemp = Buffer.from(data);
  const returnBuffer = Buffer.alloc(bufferTemp.byteLength);
  for (let index = 0; index < bufferTemp.byteLength; index++) {
    returnBuffer[index] = bufferTemp[index];
  }
  return returnBuffer;
};
```

example

```javascript
const buf1 = Buffer.from("abcde");
const buf2 = createBuffer(Buffer.from("abcde"));
console.log(buf1.buffer);
/*
ArrayBuffer {
  [Uint8Contents]: <... 61 62 63 64 65 ...>,
  byteLength: 8192
}
*/
console.log(buf2.buffer);
/*
ArrayBuffer {
  [Uint8Contents]: <61 62 63 64 65>,
  byteLength: 5
}
*/
```

## 4

16進法の数をログ(eebug, info, log, warn, errorのみ)

```javascript
(() => {
  let c = console,
    z = (t) => t.toString(16),
    e = (d = 0, g = 99) => {
      if (typeof d != "number" || typeof g != "number" || z(d).length > g) return NaN;
      if (g == 99) g = z(d).length;
      return "0x" + (Array(g).join(0) + z(d)).slice(-g);
    };
  c.log16 = (d, g) => c.log(e(d, g));
  c.warn16 = (d, g) => c.warn(e(d, g));
  c.error16 = (d, g) => c.error(e(d, g));
  c.info16 = (d, g) => c.info(e(d, g));
  c.debug16 = (d, g) => c.debug(e(d, g));
})();
```

↓

```javascript
(() => {
  const getHex = (number = 0, length = Infinity) => {
    if (typeof number !== "number" || typeof length !== "number" || number.toString(16).length > length) return "NaN";
    if (length === Infinity) length = number.toString(16).length;
    return "0x" + (Array(length).join(0) + number.toString(16)).slice(-length);
  };
  console.log16 = (number, length) => console.log(getHex(number, length));
  console.warn16 = (number, length) => console.warn(getHex(number, length));
  console.error16 = (number, length) => console.error(getHex(number, length));
  console.info16 = (number, length) => console.info(getHex(number, length));
  console.debug16 = (number, length) => console.debug(getHex(number, length));
})();
```

```typescript
(() => {
  const getHex = (number: number = 0, length: string = Infinity): string => {
    if (number.toString(16).length > length) return "NaN";
    if (length === Infinity) length = number.toString(16).length;
    return "0x" + (Array(length).join(0) + number.toString(16)).slice(-length);
  };
  console.log16 = (number: number, length: number) => console.log(getHex(number, length));
  console.warn16 = (number: number, length: number) => console.warn(getHex(number, length));
  console.error16 = (number: number, length: number) => console.error(getHex(number, length));
  console.info16 = (number: number, length: number) => console.info(getHex(number, length));
  console.debug16 = (number: number, length: number) => console.debug(getHex(number, length));
})();
```

example

```javascript
console.log(0xff); // 255
console.log16(0xff); // 0xff
console.log16(0xff, 4); // 0x00ff
```

## 5

```javascript
/** @type {Array<string>} */
let input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .map((str) => str.split(" "))
    .flat(),
  i = 0n;

const { readNumber, readBigInt, readString, log } = {
  readNumber() {
    const t = input[i];
    i++;
    if (t === "") return readNumber();
    return Number(t);
  },
  readBigInt() {
    const t = input[i];
    i++;
    if (t === "") return readBigInt();
    return BigInt(t);
  },
  readString() {
    const t = input[i];
    i++;
    if (t === "") return readString();
    return String(t);
  },
  log(input) {
    console.log(String(input));
  },
};

function main() {
  // code here
  process.exit();
}

main();
```

example

```javascript
// code
const [a, b, c] = [readNumber(), readBigInt(), readString()];
log(typeof a, a);
log(typeof b, b);
log(typeof c, c);
/* input
1 2

3

*/
/* output
number 1
bigint 2
string 3
*/
```
