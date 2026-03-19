---
title: Python - 类
date: 2026-03-19
icon: pen-to-square
category:
  - algorithm
tag:
  - red
  - big
  - round
---

# Python Class - 类

## 类

```python
#luogu - B2104 矩阵加法

class Matrix:
    def __init__(self):
        self.row = 0
        self.col = 0
        self.arr = []
    def __init__(self, r, c):
        self.row = r
        self.col = c
        self.arr = []
    def input(self):
        self.arr = []
        for i in range(self.row):
            # self.arr.append([])
            ipt = input().strip()
            line = list(map(int, ipt.split()))
            self.arr.append(line)
    def output(self):
        print(self.arr)

class MatCalulator:
    def add(x, y):
        if x.row != y.row or x.col != y.col:
            return 'error: row or col numbers not equal'
        ret = Matrix(x.row, x.col)
        for i in range(ret.row):
            ret.arr.append([])
            for j in range(ret.col):
                ret.arr[i].append(x.arr[i][j] + y.arr[i][j])
        return ret



ipt = input().strip()
line = list(map(int, ipt.split()))
r = line[0]
c = line[1]
a = Matrix(r, c)
b = Matrix(r, c)
# a.row = a.col = 3
a.input()
b.input()
# a.output()
c = MatCalulator.add(a, b).arr
for opt in c:
    print(' '.join(map(str, opt)))


```
