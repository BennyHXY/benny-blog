---
title: Python - 控制流语句
date: 2026-03-18
icon: pen-to-square
category:
  - python
tag:
  - red
  - big
  - round
---

# Python Control Flow - 控制流语句

> The branch / loop / function statements in Python.
> python中的 分支 / 循环 / 函数。

## branch - 分支

### `if` Statement - `if`语句

```python
#luogu5712
ipt = input().strip()
x = int(ipt)

opt = ''
if x <= 1:
    opt = 'Today, I ate ' + str(x) + ' apple.'
else:
    opt = 'Today, I ate ' + str(x) + ' apples.'
print(opt)
```

---

## Loop - 循环

### `for x in arr:`

```python
#luogu1420
ipt = input().strip()
n = int(ipt)

ipt = input().strip()
arr = list(map(int, ipt.split()))

last = -1 #前一位
dq = 0 #当前连号长度
ans = 0 #答案
for x in arr:
    if x == last + 1:
        dq = dq + 1
    else:
        dq = 1
    ans = max(ans, dq)
    last = x

print(ans)

```

### `for i in range(n)`

```python
#luogu1047 校门外的树

ipt = input().strip()
arr = list(map(int, ipt.split()))
l = arr[0]
m = arr[1]

dt = []
for i in range(0, l + 1):
    dt.append(1)

for i in range(m):
    ipt = input().strip()
    arr = list(map(int, ipt.split()))
    s = arr[0]
    t = arr[1]
    for j in range(s, t + 1):
        dt[j] = 0

ans = 0
for i in range(l + 1):
    if dt[i] == 1:
        ans += 1

print(ans)
```

### `range`函数的参数

`start` / `stop` / `step` - 起始 / 终止 / 步长

- 一个参数: `range(stop)`
- 两个参数: `range(start, stop)`
- 三个参数：`range(start, stop, step)`
- `start`的默认值为 $0$ , `step`的默认值为 $1$ 。

```python
class range(stop, /)
class range(start, stop, step=1, /)

# range 构造器的参数必须为整数（可以是内置的 int 或任何实现了 __index__() 特殊方法的对象）。如果省略 step 参数，则默认为 1。如果省略 start 参数，则默认为 0。如果 step 为零，则会引发 ValueError。

# 如果 step 为正值，确定 range r 内容的公式为 r[i] = start + step*i 其中 i >= 0 且 r[i] < stop。

# 如果 step 为负值，确定 range 内容的公式仍然为 r[i] = start + step*i，但限制条件改为 i >= 0 且 r[i] > stop.

```

例子：

```python
list(range(10))
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

list(range(1, 11))
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

list(range(0, 30, 5))
# [0, 5, 10, 15, 20, 25]

list(range(0, 10, 3))
# [0, 3, 6, 9]

list(range(0, -10, -1))
# [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

list(range(0))
# []

list(range(1, 0))
# []
```

参见 [https://docs.python.org/zh-cn/3.14/library/stdtypes.html#range]

---

## Function - 函数

```python
#luogu1304 哥德巴赫猜想
import math

def isPrime(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def func(x):
    for i in range(2, x):
        if isPrime(i) and isPrime(x - i):
            print(f"{x}={i}+{x - i}")
            return


ipt = input().strip()
n = int(ipt)
for x in range(4, n + 1, 2):
    func(x)

```

---
