---
title: vjuge题单 - 概率与期望
icon: pen-to-square
date: 2026-05-25
category:
  - dynamic planning
  - probability
  - algorithm
tag:
  - 红
  - 大
---


## 概率与期望

#### 一，套路/模板
$
一种常见的套路是用类似几何随机变量求期望的方式推dp方程，然后搞。$
$
本文将这种类似几何随机变量求期望的方式简称为 GE 叭$
$$
如 E[X] = E[X|t>0] \cdot p(t>0) + E[X|t<=0] \cdot p(t<=0)$$
$$
假如(根据题目情景) E[X|t>0]为常数c1， E[X|t<=0]为c2+E[X]，$$
$$
则原式可化为 E[X] = c1 \cdot p(t>0) + (c2 + E[X]) \cdot p(t<=0)$$
$$
把右边的E[X]化到左边，得 (1-p(t<=0)) \cdot E[X] = c1 \cdot p(t>0) + c2 \cdot p(t<=0)，$$
$$
然后就很好求E[X]了$$

#### 二，vjudge题单

 - [https://vjudge.net/article/187]

1. A Dangerous Maze
	GE
2. Discovering Gold
	dp
3. Race to 1 Again
	GE + 记忆化搜索
4. Just another Robbery
	[概率]事件运算 独立性定义 + 背包
5. Birthday Paradox
    $P(A) = 1 - P \left( \overline{A} \right)$
6. Dice(III)
    GE
7. Island of Survival
    GE + 策略 （记忆化搜索 OR 玄学结论？）
8.  Throwing Balls into the Baskets
    水题
9.  Sending Packets
    floyd最短路
10. Expected Cards
    6维dp

#### 三，洛谷上的题
1. luogu4550 收集邮票
    GE + dp

#### 四，网络赛补题
1. 随机过程
    2024ccpc网络赛E题
    巨难的推公式 + 逆元
    抄题解过了，场上遇到这种题多半还是做不起


> *本文写于 2025 年 1 月 .*

