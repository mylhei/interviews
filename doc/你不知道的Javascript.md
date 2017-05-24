# 你不知道的Javascript

## 引擎、作用域、编译器

RHS LHS

LHS 用于赋值 `a = 1`

RHS 用于取值、使用 `a+b`

RHS找不到时会报referenceError

## 词法

词法作用域查找只会找到一级标识符，找到即停止

例如`a.b.c` 找到`a`即停止。`b.c`则使用对象属性访问规则管理

### 欺骗词法

1. eval 欺骗作用域 可以遮蔽作用域

```javascript
function foo(str, a) { 
	eval( str ); // 欺骗! 
	console.log( a, b );
}
var b = 2;
foo( "var b = 3;", 1 ); // 1, 3
```

以上代码遮蔽了外部变量b

严格模式下，eval会有自己的词法作用域，外部无法使用eval内部作用域

2. with
   导致with作用域和当前作用域混用，容易引起问题
   例如
```
function foo(obj) { with (obj) {
a = 2; }
}
var o1 = { a: 3
};
var o2 = { b: 3
};
     foo( o1 );
     console.log( o1.a ); // 2
foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2——不好,a 被泄漏到全局作用域上了!
```
以上代码将a泄露到外层作用域

3. 性能

   以上欺骗，会影响性能。因为引擎习惯在编译阶段进行性能优化。


## 函数作用域

有私有变量作用，符合`最小暴露原则`

可以避免同名标识符冲突

## 具名 & 匿名

函数声明 具名

函数表达式 可以匿名