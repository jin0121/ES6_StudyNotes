{
    let a = 10;  // let声明的变量只在其所在的代码块内有效
    var b = 1;
}

//console.log(a);  // ReferenceError: a is not defined
console.log(b);

// 应用： for循环
for (let i = 0; i < 10; i++) {
    // 
}
//console.log(i);  // ReferenceError: i is not defined

// i用var声明，全局有效，所以function内部的i也被循环改变，输出10
var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function(){
        console.log(i);
    }
}
arr[6]();

// let声明时i只在for中有效，每次循环都是一个新变量
var arr2 = [];
for (let i = 0; i < 10; i++) {
    arr2[i] = function(){
        console.log(i);
    }
}
arr2[6]();

// for循环特别之处：javascrpit引擎内部会记住上一次循环的值，循环变量是父作用域，
// 循环内部是子作用域。
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc


// var会发生变量提升，即变量可以在声明钱使用，值为undefined，let纠正这个问题

// 暂时性死区：let声明会使变量绑定当前块级作用域，在let前赋值变量会报错，就是变量已经用var声明过

// 好处：养成好习惯，先声明后使用；防止变量声明前就使用，导致意外行为。

// let不允许同一作用域重复声明变量

// 块级作用域: es5只有全局和函数作用域
// ES5问题：内层变量覆盖外层变量；用来计数的循环变量泄露为全局变量

var tmp = new Date();
function f(){
    console.log(tmp);
    if(false){
        var tmp = "hw";
    }
    
}

f(); // undefined

var s = 'hello';
// 循环结束后i变为全局变量
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}

console.log(i);

// 2.2.2 ES6的块级作用域

/*  */