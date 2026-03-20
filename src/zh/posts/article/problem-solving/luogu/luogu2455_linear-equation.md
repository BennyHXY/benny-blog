---
title: luogu2455 线性方程组 - 题解
date: 2026-03-20
icon: pen-to-square
category:
  - math
tag:
  - red
  - big
  - round
---

# luogu2455 线性方程组

## 题意

题目链接：[https://www.luogu.com.cn/problem/P2455]

已知 $n$ 元线性一次方程组。
输入 $n$ 和 方程组相应的系数，根据线性方程组解的情况输出：

- 方程组无解：输出 $-1$ ;
- 方程组有多个解: 输出 $0$ ;
- 方程组有唯一解：输出该唯一解;

## 分析

解线性方程组的流程：

<VPPreview>

<template #code>

```
st=>start: 开始
ed=>end: 结束
ed1=>end: 线性方程有唯一解
ed2=>end: 线性方程无解
ed3=>end: 线性方程有多个解

op1=>operation: 将线性方程组化为矩阵方程 Ax=b 的形式

op2=>operation: 提取增广矩阵aug=[A b]

op3=>operation: 对增广矩阵作行化简，得到阶梯形矩阵P
op4=>operation: （存在等式0≠1）

branch1=>condition: 前n列都为主元列

branch2=>condition: 第n+1列为主元列



st->op1
op1->op2
op2->op3

op3->branch1

branch1(yes)->ed1
branch1(no)->branch2
branch2(yes)->op4->ed2
branch2(no)->ed3
```

</template>
<template #content>

```flow
st=>start: 开始
ed=>end: 结束
ed1=>end: 线性方程有唯一解
ed2=>end: 线性方程无解
ed3=>end: 线性方程有多个解

op1=>operation: 将线性方程组化为矩阵方程 Ax=b 的形式

op2=>operation: 提取增广矩阵aug=[A b]

op3=>operation: 对增广矩阵作行化简，得到阶梯形矩阵P
op4=>operation: （存在等式0≠1）

branch1=>condition: 前n列都为主元列

branch2=>condition: 第n+1列为主元列



st->op1
op1->op2
op2->op3

op3->branch1

branch1(yes,left)->ed1
branch1(no, bottom)->branch2
branch2(yes, right)->op4->ed2
branch2(no)->ed3
```

</template>

</VPPreview>

## 代码

::: code-tabs#shell

@tab python

```python
eps = 1e-7

class Matrix:
    def __init__(self, r, c):
        self.row = r
        self.col = c
        self.arr = []
        for i in range(r):
            self.arr.append([])
            for j in range(c):
                self.arr[i].append(0)

    def input(self):
        self.arr = []
        for i in range(self.row):
            # self.arr.append([])
            ipt = input().strip()
            line = list(map(int, ipt.split()))
            self.arr.append(line)
    def output(self):
        for opt in self.arr:
            print(opt)

    def rswap(self, r1, r2):
        t = self.arr[r1]
        self.arr[r1] = self.arr[r2]
        self.arr[r2] = t

    #为r1行加上s倍r2的元素
    def opx(self, r1, r2, s):
        for c in range(self.col):
            self.arr[r1][c] += self.arr[r2][c] * s

    # 将r行的元素乘以s倍
    def ops(self, r1, s):
        for c in range(self.col):
            self.arr[r1][c] *= s

    def rref(self):
        ptr = 0 #指向当前操作的行
        self.n_pivot = 0
        self.isPivot = []
        for c in range(self.col):
            self.isPivot.append(False)
            ptx = ptr # （将绝对值的元素换到当前行）
            if ptr == self.row:
                break
            for j in range(ptr + 1, self.row):
                # print("refs: j = ", j, "c = ", c, "ptr = ", ptr)
                if abs(self.arr[j][c]) > abs(self.arr[ptx][c]):
                    ptx = j
            # print("ptx = ", ptx, "ptr = ", ptr)
            self.rswap(ptx, ptr)
            if abs(self.arr[ptr][c]) < eps:#此列没有主元
                continue;
            self.n_pivot += 1
            self.isPivot[c] = True
            self.ops(ptr, 1 / self.arr[ptr][c])
            #消元
            for j in range(0, self.row):
                if j != ptr:
                    s = self.arr[j][c]
                    self.opx(j, ptr, -s)
            ptr += 1

            # print("c = ", c, "ptr = ", ptr)
            # self.output()

ipt = input().strip()
n = int(ipt)
aug = Matrix(n, n + 1)
aug.input()
aug.rref()
# aug.output()

# print(aug.isPivot)
# print(aug.arr)

#最后一列为主元，无解
if aug.isPivot[n] == True:
    print("-1")
else:
    if aug.n_pivot < n:
        print("0")
    else:
        for r in range(n):
            print("x{0}={1}".format(r, aug.arr[r][n]))
```

@tab cpp

```cpp
#include <bits/stdc++.h>

using namespace std;

const double eps = 1e-8;
const int N = 105;

struct Matrix {
	int row, col, st;
	int solution[N];
	double a[N][N];

	void input() {
		for(int r = 1; r <= row; ++r) {
			for(int c = 1; c <= col; ++c) {
				cin >> a[r][c];
			}
		}
	}

	void output() {
		for(int i = 1; i <= row; ++i) {
			for(int j = 1; j <= col; ++j) {
				printf("%10.2lf", a[i][j]);
			}
			cout << endl;
		}

	}

	void rswap(int r1, int r2) {
		for(int c = 1; c <= col; ++c) {
			swap(a[r1][c], a[r2][c]);
		}

	}

	//为r1行加上 s倍r2的元素
	void opx(int r1, int r2, double s) {
		for(int c = 1; c <= col; ++c) {
			a[r1][c] += a[r2][c] * s;
		}

	}

	// 将r行的元素乘以s倍
	void ops(int r, double s) {
		for(int c = 1; c <= col; ++c) {
			a[r][c] *= s;
		}
	}

	void rref() {
		st = 1; //从第st行开始找主元
		for(int c = 1; c <= col; ++c) {
			solution[c] = 0;
			int maxn = st;
			for(int j = st + 1; j <= row; ++j) {
				if(fabs(a[j][c]) > fabs(a[maxn][c])) {
					maxn = j;
				}
			}
			rswap(maxn, st);
			if(fabs(a[st][c]) < eps) {
				//此列没有主元
				continue;
			}

			//把主元变成1
			solution[c] = st;
			ops(st, 1 / a[st][c]);

			//消元
			for(int j = 1; j<= row; ++j) if(j != st){
				double s = a[j][c];
				opx(j, st, -s);
			}
			++st;



		}



	}

} d;

int n;

int main() {
	cin >> n;
	d.row = n;
	d.col = n + 1;
	d.input();

	d.rref();
//	printf("%d\n", d.st);

//	d.output();
	//无解
	if(d.solution[n + 1]) {
		cout << -1;
		return 0;
	}
	//无数解
	if(fabs(d.a[n][n]) < eps) {
		cout << 0;
		return 0;
	}

	for(int c = 1; c <= n; ++c) {
		int r = d.solution[c];
		if(r != 0) {
			printf("x%d=%.2lf\n", r, d.a[r][n + 1]);
		}

	}

	return 0;
}
```
