---
title: 算法 - 几道关于概率的题目
date: 2026-05-26
icon: pen-to-square
category:
  - algorithm
  - probability
tag:
  - red
  - big
  - round
---
# 算法 - 几道关于概率的题目

这篇文章展示了几道关于概率的简单题目的数学推导和完整代码。
 - 简单：这里的简单是指可以使用这个“GE”模板和基本dp素养很快切出来的题目。
 - “GE”：
   - 对于一个期望$E[X]$， 可以根据题意得到一个 $E[X] = something + s \cdot E[X]$ 的式子。 其中s为不为 $1$ 的系数。
   - 把关于 $E[X]$ 的项化到左边，就得到 
  $$(1 - s) \cdot E[X] = something$$ 
  $$E[X] = \frac{something}{1 - s}$$
   - 更详细的阐述：
     - $something$ 为一个常数 $C$
     - 那么原式为 $E[X] = C + s \cdot E[X]$
     - 化归后可用一句代码`ans = C / (1 - s)`求出 $E[X]$

     - 假设 $E[X]$ 为一个递推数列的某项， 例如$A_i$ , 那么something 可能是一个包含递推数列的前几项的式子，如 $A_{i-1} , A_{i-2}, ...$ 。 那么可以使用一个 `for` 循环递推求出 $E[X]$ 。
     - $something$ 还可能是一些别的什么式子。 ...
   - 我2025年1月的阐述见 [vjuge题单 - 概率与期望](../../article/problem-solving/vjudge/probability-25-01.md) 。

## 题目

### "GE"

#### 洛谷1291 - 百事世界杯之旅
 - [https://www.luogu.com.cn/problem/P1291]

##### 题意
有一种饮料，你买他可以从瓶盖里面得到 $n$ 种球星名字中的一个。 每个名字出现概率相同。问你从零开始把每个球星名字集齐的购买次数期望。

##### 数学推导

:::tabs


@tab **tex** :

总名字数 N .

$E[m]$：还有 $m$ 个未凑齐的（情况下），凑齐所有名字需要次数的期望（$E[0]=0$）

$$E[m] = 1 + \frac{m}{N} \cdot E[m-1] + \frac{N-m}{N} \cdot E[m]$$

其中：
- $\frac{m}{N}$：抽到没抽过的概率
- $\frac{N-m}{N}$：抽到已抽过的概率

**将带 $E[m]$ 的式子化到左边：**

$$\left(1 - \frac{N-m}{N}\right) E[m] = 1 + \frac{m}{N} \cdot E[m-1]$$

$$\frac{m}{N} \cdot E[m] = 1 + \frac{m}{N} \cdot E[m-1]$$

$$E[m] = \frac{N}{m} + E[m-1]$$


@tab **手写版本**:
![alt text](/assets/images/article/algorithm-notes/260527/luogu-pinggai-1.jpg)


:::

##### 代码

 - 函数说明:
   - `gcd(a,b)` : 求 $a, b$ 的最大公约数(greatest common divisor, gcd)。
   - `opt(s, p, q)`: 将带分数 $s \frac{p}{q}$ 按题目要求的格式输出。
 - 其他还需要注意 python 里面的整除是 `//` 而不是 `/`. 

```python

def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

n = int(input())

p = 0
q = 1

def opt(s, p, q):
    l1 = len(str(s))
    l2 = len(str(q))

    line1 = " "*l1 + str(p)
    line2 = str(s) + "-"*l2
    line3 = " "*l1 + str(q)

    print(line1)
    print(line2)
    print(line3)


for i in range(1, n + 1):
    np = n*q + i * p
    nq = i * q

    t = gcd(np, nq)
    np //= t
    nq //= t

    p = np
    q = nq

# print(p)
# print(q)

s = p // q
p -= s * q

opt(s, p, q)

```

#### LightOJ1027 - A Dangerous Maze

- [https://vjudge.net/problem/LightOJ-1027]

##### 题意

 - 你身在一个迷宫中，最开始面前有 $n$ 扇门， 你可以选择任意一扇门，每扇门被选中的概率相等。
 - 如果你选择第 $i$ 扇门， 你就要花费 $| x_i |$ 分钟。在$| x_i |$分钟以后，你可能走出迷宫，也可能回到原来的位置。 （若题目给出的 $x_i$ 为正，你走出迷宫； 为负，你回到原来的位置。）
 - 如果你回到原来的位置，就无法记住任何经历。因此，每次你到达起点时，都相当于没有过往的经验。
 
 - 现在，你想找出走出迷宫所需的期望时间。

##### 推导

##### 代码

::: code-tabs#shell

@tab python

```python

def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

T = int(input())

for case in range(T):
    space = input()
    n = int(input())
    ipt = input()
    arr = list(map(int, ipt.split()))

    # print(n)
    # print(arr)

    tot = 0 # 合计
    m = 0 # 负数个数

    for x in arr:
        if x < 0:
            m = m + 1
        x = abs(x)
        tot += x

    fz = tot
    fm = n - m

    opt = "Case " + str(case + 1) + ": "

    if fm == 0:
        opt += "inf"
    else:
        t = gcd(fz, fm)
        opt += str(fz // t) + "/" + str (fm // t)

    print(opt)

```

@tab cpp

```cpp
#include <bits/stdc++.h>

typedef long long LL;

using namespace std;

int main() {
	int tt;
	cin >> tt;
	for(int ti = 1; ti <= tt; ++ti) {
		int n;
		cin >> n;
		LL posnum = 0, possum = 0, negsum = 0;
		for(int i = 1; i <= n; ++i) {
			LL x;
			cin >> x;
			if(x > 0) {
				++posnum;
				possum += x;
			}
			else {
				negsum += (-x);
			}
		}
		
		if(ti != 1) cout << endl;
		cout << "Case " << ti << ": ";
		
		if(posnum == 0) {
			cout << "inf";
			continue;
		}
		LL fm = possum + negsum;
		LL r = __gcd(fm, posnum);
		cout << fm/r << "/" << posnum/r;
		
	}
	
	return 0;
} 
```


:::





### 其他 (dp or ...?)

#### CF148D - A Bag of Mice

 - [https://codeforces.com/problemset/problem/148/D]
 - 推式子 + 记忆化搜索

##### 题意

龙和公主一起玩游戏。从一个袋子里抓取老鼠。最开始袋子里有w只白老鼠和b只黑老鼠，抓到每只鼠的概率相等。公主先手。

 - 公主抓鼠时直接抓一只
 - 龙抓鼠时抓一只，抓完以后老鼠还会自己跳出来一只

 - 先抓到一只白鼠的人获胜。（自己跳出来的不算）
 - 如果袋子里没有更多的老鼠，并且没有人抽到白鼠，那么龙获胜。

问公主获胜的概率。

##### 推导

##### 代码

```python


ipt = input()
w,b = list(map(int, ipt.strip().split(" ")))

p = []
for i in range(w + 1):
    p.append([])
    for j in range(b + 1):
        p[i].append(-1)

def princess(nw, nb):
    if nw <= 0:
        return 0
    if nb < 0:
        return 0
    if nb == 0:
        return 1
    if p[nw][nb] != -1:
        return p[nw][nb]

    tot = nw + nb
    ret = 0

    # 避免除数为0
    if tot <= 2: #只有两个球的情况， 根据前置，只能是黑一个白一个。
        if tot == 2:
            ret = 1 / 2
        elif nw == 1:
            ret = 1
        elif nb == 1:
            ret = 0
    else:
        ret = (nw / tot) + (nb / tot) * ((nb - 1) / (tot - 1)) * ((nw/(tot-2)) * princess(nw-1, nb-2) + ((nb-2)/(tot-2))*princess(nw,nb-3))

    p[nw][nb] = ret
    return ret

print(princess(w,b))

```

#### LightOJ1104 - Birthday Paradox

 - [https://vjudge.net/problem/LightOJ-1104]

##### 题意

##### 推导


##### 代码

::: code-tabs

@tab python

```python
T = int(input())

for case in range(1, T + 1):
    n = int(input())

    p = 1
    ans = 1
    for i in range(n):
        p = p * (n - i) / n
        if p <= 0.5:
            ans = i
            break

    print(f"Case {case}: {ans}")
```


@tab cpp

```cpp
#include <bits/stdc++.h>

using namespace std;


void solve(int ti)
{
	int n, ans = 1;
	double p = 1;
	scanf("%d", &n);
	for(int i = 0; i <= n; ++i)
	{
		p *= n - i;
		p /= n;
		if(p <= 0.5)
		{
			ans = i;
			break;
		}
	}
	
	printf("Case %d: %d\n", ti, ans);
	
}

int main()
{
	int t;
	scanf("%d", &t);
	for(int ti = 1; ti <= t; ++ti)
	{
		solve(ti);
	}
	
	return 0;
} 
```

:::

##### 补充: 关于时间复杂度的验算

