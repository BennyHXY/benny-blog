---
title: 编译原理 - 表驱动LL(1)分析程序
icon: pen-to-square
date: 2026-05-14
category:
  - computer-science
  - compilers
tag:
  - 红
  - 小
  - 圆
---
## 前置

- LL(1):
  - Left-to-right scan of  the tokens - 从左到右扫描
  - Leftmost derivation - 最左推导
  - One token lookahead - 只向前看一个token .


## 程序流程

```flow
st=>start: 开始
io1=>inputoutput: 输入文法
cond1=>condition: 判断文法是否为LL(1)文法
op2=>operation: 构造预测分析表M
io2=>inputoutput: 输入字符串
op3=>operation: 根据预测表，从左到右扫描输入串
cond2=>condition: 根据预测表，开始符能推导出输入串
ed1=>end: 异常
ed2=>end: 输入串被接受
ed3=>end: 输入串不被接受

st->io1->op2->cond1
cond1(no)->ed1
cond1(yes)->io2->op3->cond2
cond2(yes)->ed2
cond2(no)->ed3
```

### 子程序1: 构造预测分析表
- 组1：所有非终结符
- 组2：所有终结符
- 对于组1元素和组2元素的每个两两组合，找出由组1元素推出第一个元素为组2元素的产生式.


### 子程序2： 判断文法是否为LL(1)文法
 - 即相同左部产生式的SELECT交集是否为空 
 - 也即预测表中同一左部对同一终结符是否对应多于1条产生式
1. 求出能推出 ε 的非终结符；
2. 计算 FIRST 集
3. 计算 FOLLOW 集
4. 计算 SELECT 集 (和预测表基本等价). 


### 子程序3: 扫描输入串，并维护分析栈
- 描述从开始符自顶向下推导出输入串的每一步的过程 （推导所用产生式或匹配）。

## 代码实现

### 变量
```js
let grammar = {}; //文法
let terminals = new Set(); //终结符 VT
let nonTerminals = new Set(); //非终结符 VN
let startSymbol = ""; // 开始符
let firstSets = {}; //FIRST集
let followSets = {}; //FOLLOW 集
let parseTable = {}; //预测分析表
```

### 主要函数

```js
function parseGrammar(text) //文法解析
function canDeriveEpsilon(sym, visited = new Set()) //判断一个符号是否能推导出 ε
function firstOfSequence(seq) //计算一个符号串的 FIRST 集
function computeFirst() //计算所有非终结符的 FIRST 集
function computeFollow() //计算所有非终结符的 FOLLOW 集
function buildParseTable() //构建预测分析表
function isLL1() //判断是否是 LL(1) 文法
function analyze() //主入口
function runTrace() //分析过程模拟
```

## 测试数据（test-case）

### TC-1 - 教材4.5.2
#### 文法
```text
E -> T E'
E' -> + T E' | ε
T -> F T'
T' -> * F T' | ε
F -> ( E ) | i
```

#### 输入串

```text
i + i * i $
```

### TC-2 - 消除左递归后的加减乘除
#### 文法
```text
E -> T E'
E' -> + T E' | - T E' | ε
T -> F T'
T' -> * F T' | / F T' | ε
F -> ( E ) | id | num
```

#### 输入串1
```text
id + num * id $
```

#### 输入串2
```text
( id + id ) * num $
```
### TC-3 - 简单的 if-else 语句 (非LL1文法)

#### 文法
```text
S -> if E then S S' | id
S' -> else S | ε
E -> id
```

#### 输入串1

```text
if id then id else id $
```

#### 输入串2

```text
if id then if id then id $
```

### TC-4 - 简单的函数调用


#### 文法
```text
S -> id ( A )
A -> E A' | ε
A' -> , E A' | ε
E -> id | num
```

#### 输入串1

```text
id ( id , num , id ) $
```

#### 输入串2

```text
id ( ) $
```





## 小结

