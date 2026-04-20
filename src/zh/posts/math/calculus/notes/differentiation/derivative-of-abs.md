---
title: 数学 - 带绝对值的式子如何求导
icon: pen-to-square
date: 2026-04-18
category:
  - math
  - absolute value
  - derivative
tag:
  - 红
  - 小
  - 圆
---

:::note
本篇文章的部分内容为AI生成，谨告知。
:::

同学，你问得很好。绝对值函数 $∣u(x)∣$ 在微积分里是一个“分段”函数，它的求导核心就是：先去掉绝对值，写成分段形式，再在各段内分别求导；在分段点处，要单独判断导数是否存在。

## 步骤

### step1: 记住绝对值的等价写法

$$
|u| = 
\begin{cases}
u , u \ge  0
 \\
u, u < 0
\end{cases}
$$

所以，对于一个含绝对值的函数 $f(x)=∣u(x)∣$，你要先找出 $u(x)=0$ 的点（称为“分界点”），这些点把定义域分成若干区间.

### step2: 分段求导

在每个区间内，$|u|$ 要么等于 $u$，要么等于 $−u$，都是可导的（只要 $u(x)$ 本身可导）。
那么：
 - 当 $u(x) > 0$ 时， $f'(x) = u'(x)$ .
 - 当 $u(x) < 0$ 时， $f'(x) = -u'(x)$ .

### step3: 分界点处的导数（重要！）
在 $u(x)=0$ 的点 $x_{0}$处，$∣u(x)∣$ 通常形成一个“尖点”或“角点”，导数很可能不存在。

... 总之就是看导数的左极限和右极限是否相等，不相等的话导数就不存在。


## 例子

### 例1: 求 $f(x) = |x^2 - 1|$ 的导数。

1. 找分界点：$x^2 - 1 = 0 \Rightarrow x = -1, 1$
2. 分段：
   - $x < -1$ 或 $x > 1$ 时， $x^2 - 1 > 0, f(x) = x^2 - 1, f'(x) = 2x$ .
   - $-1 < x < 1$ 时， $x^2 - 1 < 0, f(x) = -(x^2 - 1) = 1 - x^2, f'(x) = -2x$ .
3. 分界点：
   - 在 $x = -1$ ,
     - 左导数 $\lim_{x \to -1^{-}} f'(x) = \lim_{x \to -1^{-}} (2x) = -2$ ,
     - 右导数 $\lim_{x \to -1^{+}} f'(x) = \lim_{x \to -1^{+}} (-2x) = 2$ ,
     - 不相等 → 不可导
   - 在 $x = 1$ ,
     - 左导数 $\lim_{x \to 1^{-}} f'(x) = \lim_{x \to 1^{-}} (-2x) = -2$ ,
     - 右导数 $\lim_{x \to 1^{+}} f'(x) = \lim_{x \to 1^{+}} (2x) = 2$ ,
     - 不相等 → 不可导
所以最终：
$$
f'(x) = 
\begin{cases}
2x , x < -1 \text{或} x > 1
 \\
-2x, -1 < x < 1
\end{cases}
$$

$$
x = \pm 1 \text{处不可导}
$$

### 例2: 求 $f(x) = |\sin x|$ 的导数。

$$
\begin{gather*}
f(x) = |\sin x| = 
\begin{cases} 
\sin x, & x \in (2k\pi , 2k\pi + \pi ),\ k \in \mathbb{Z} \\
-\sin x, & x \in (2k\pi - \pi, 2k\pi),\ k \in \mathbb{Z} 
\end{cases} \\
f'(x) = |\sin x|' = 
\begin{cases} 
\cos x, & x \in (2k\pi , 2k\pi + \pi ),\ k \in \mathbb{Z} \\
-\cos x, & x \in (2k\pi - \pi, 2k\pi),\ k \in \mathbb{Z}
\end{cases} \\

x=k\pi ,\ k \in \mathbb{Z} \text{处，} f'(x) \text{不存在。（导数的左右极限分别为} -1, 1 \text{ ， 函数为"尖点"） .}
\end{gather*}
$$




