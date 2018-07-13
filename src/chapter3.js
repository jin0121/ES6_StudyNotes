'use strict';

{
    let a = 1;
    let b = 2;
    let c = 3;

    console.log(a);
    console.log(b);
    console.log(c);

}

{
    let [a, b, c] = [1, 2, 3];
    console.log(a)
    console.log(b)
    console.log(c);
}

{
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo)
    console.log(bar)
    console.log(baz);

    let [, , third] = ['foo', 'bar', 'baz'];
    console.log(third);  // "baz"

    let [x, , y] = [1, 2, 3];
    console.log(x);
    console.log(y);

    let [head, ...tail] = [1, 2, 3, 4];
    console.log(tail);  // [2,3,4]

    let [x2, y2, ...z2] = ['a'];
    console.log(x2);  // a
    console.log(y2);  // undefined, 结构失败
    console.log(z2);  // []

    let [foo2] = [];
    let [bar3, foo3] = ['a'];
    console.log(foo2);  // undefined, 结构失败
    console.log(bar3);  // a
    console.log(foo3);  // undefined, 结构失败

    // 等号右边不是可遍历的解构会报错
    // let [foo4] = 1;
}

{
    console.log("3.1.2 默认值");

    let [foo = true] = [];
    console.log(foo); // true

    let [x, y = 'b'] = ['a'];
    console.log(x); // 'a'
    console.log(y); // 'b'

    let [x2, y2 = 'b'] = ['a', undefined];
    console.log(x2); // 'a'
    console.log(y2); // 'b', 数组成员严格等于undefined，所以默认值生效

    let [x3 = 1] = [undefined];
    x3; // 1, 数组成员严格等于undefined，所以默认值生效

    let [x4 = 1] = [null];
    x4;  // null, 数组成员不严格等于undefined，所以默认值不会生效

    // 默认值是表达式，会惰性求值，

    function f() {
        console.log('aaa');

    }

    let [x5 = f()] = [1];  // x5能取到值，所有f函数不会执行
    console.log('x5: ' + x5);
    // 等价下面代码
    let x6;
    if ([1] === undefined) {
        x6 = f();
    } else {
        x6 = [1];
    }
    console.log('x6: ' + x6);

    
}


