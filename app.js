'use strict';
// 連想配列Mapを利用して計算量を削減
// 一度計算した結果を、連想配列に保存する方法を「メモ化」という
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
    // memoにすでにnに対応する解があった場合、その値を返す
    if (memo.has(n)) {
        return memo.get(n);
    } 
    // memoに解がない場合、再帰でfib関数を呼び出して得た解をmemoに加える
    let value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

// フィボナッチ数列を40番目まで出力する
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}