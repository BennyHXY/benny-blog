---
title: 数学 - 260420练习
icon: pen-to-square
date: 2026-04-20
category:
  - math
  - exercise
  - integrals
tag:
  - 红
  - 小
  - 圆
---

# 数学 - 260417练习

求积分比求导数更具挑战性。因为在求函数的导数时，要应用哪一个求导公式是很明显的，而在求给定函数的积分时，要应用哪一种技巧却并不明显。

总之求积分这个大问题就很混乱，不过对于一些局部的情形，我们依然可以训练出对于局部的系统方法来计算积分。例如 $\sin x$ 与 $\cos x$ 、 $\sec x$ 与 $\tan x$ 或者 $\csc x$ 与 $\cot x$ 幂的乘积.

## 积分技巧：三角函数

### 正弦函数和余弦函数的幂的积分

:::info 求 $\int \sin^{m}x \sin^{n}x \mathrm{d}x$ 的策略

-  如果 $m, n$ 中有一个是奇数，就把这个奇的保留一个因子用来凑微分。 （都为奇的情况则随便凑一个）
-  如果 $m, n$ 都为偶数，则利用半角公式降幂。
$$
\cos^{2}x + \sin^{2}x= 1 \\
\cos^{2}x - \sin^{2}x= \cos 2x \\
2\cos^{2}x = 1 + \cos 2x
$$

![fig1](/assets/images/math/excercise/260420/fig1.png)

:::


### 正割函数和正切函数的幂的积分

:::info $\int \tan^{m}x \sec^{n}x \mathrm{d}x$
- 如果正割函数的幂是偶次的，则保留一个 $\sec^{2}x$ 因子，并利用 $\sec^{2}x = 1 + \tan^{2}x$ 将剩余部分用 $\tan x$ 表示；
- 如果正切函数的幂是奇次的，则保留一个 $\sec x \tan x$ 因子, 并利用 $ \tan^{2}x = \sec^{2}x - 1$ 将剩余部分用 $\sec x$ 表示；

![fig2](/assets/images/math/excercise/260420/fig2.png)

对于其他一些情况，上面的指南并不完备，还需要利用三角恒等式、分部积分法和一些小技巧.  _...

:::



### 使用积化和差公式

:::info _
![fig3](/assets/images/math/excercise/260420/fig3.png)
:::



## 题目 

- 来源：[公众号: 数学若只如初见 - 利用第一类换元法计算含三角函数不定积分的方法和典型例题](https://mp.weixin.qq.com/s/yksDFiYALmCGXOXZqmxyRg)

:::note features

- $\tan x$ 积分公式的推导
- $\csc x$ 积分公式的推导
- $\sec x$ 积分公式的推导
- $\sin^{m} x \cos^{n}x$ ,（ $m, n$ 至少有一个为奇数的情况）
- $\sin^{m} x \cos^{n}x$ ,（ $m, n$ 全部为偶数的情况）
- $\sec^{m} x \tan^{n}x$
- 利用积化和差公式计算不定积分
:::

![alt text](/assets/images/math/excercise/260420/p12.jpg) 
![alt text](/assets/images/math/excercise/260420/p3.jpg) 
![alt text](/assets/images/math/excercise/260420/p3_f2.jpg) 
![alt text](/assets/images/math/excercise/260420/p45.jpg) 
![alt text](/assets/images/math/excercise/260420/p67.jpg)
![alt text](/assets/images/math/excercise/260420/p7_s.jpg) 
![alt text](/assets/images/math/excercise/260420/p8.jpg) 
![alt text](/assets/images/math/excercise/260420/p9.jpg) 
![alt text](/assets/images/math/excercise/260420/p10.jpg) 

## 小结

通过今天的练习，我继续熟悉了使用第一类换元法（凑微分）计算不定积分，并且熟悉了关于三角函数的一些技巧。此外，从本次练习开始，引入了求导验算的流程。只要坚持练习、把时间花够，总有一天我也能成为数学高手。




