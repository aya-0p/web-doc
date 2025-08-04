# 繰り返し

この部分の説明は初心者向けではありません。プログラミングをほとんどやったことがない方は別の資料を参考にしてください。

## for (...; ...; ...) {}

汎用性のある繰り返しです

```javascript
const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  const element = array[i]; 
  console.log(element);
}
// 1
// 2
// 3
```

## for (const ... in ...) {}

オブジェクトの要素の中身を繰り返すときに使います

(それ以外のときも使います)

```javascript
const object = {
  a: "a",
  b: "b",
  c: "c",
}
for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];
    console.log(element);
  }
}
// "a"
// "b"
// "c"
```

## for (const ... of ...) {}

配列や Map, Set の中身を繰り返すときに使います

`for (...; ...; ...) {}`よりも遅いですが、巨大な配列を扱ったり、時間制限が厳しいとかでなければこちらのほうが見やすいと思います

```javascript
const object = [1, 2, 3]
for (const element of object) {
  console.log(element);
}
// 1
// 2
// 3
```

## Array.forEach

配列で動きます

繰り返すたびに要素、インデックス(要素が何番目か)、配列(繰り返し中の配列)を取得できます

```javascript
[1, 2, 3].forEach((data, index, array) => {
  // array: [1, 2, 3]
  console.log(index, data);
});
// 0, 1
// 1, 2
// 2, 3
```

## while (...) {}

条件に一致する限り実行されます

```javascript
let i = 0
while (i < 5) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

## do {} while (...)

条件に一致する限り実行されますが、少なくとも 1 回は実行されます

```javascript
do {
  console.log("ok");
} while (false)
// "ok"
```
