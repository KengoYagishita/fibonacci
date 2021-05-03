'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if(n === 1) {
        return 1;
    } 
    // 再帰でfib関数を呼び出す
    return fib(n - 1) + fib(n - 2);
}

// フィボナッチ数列を40番目まで出力する
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}