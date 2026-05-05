---
title: 数学 - 260505练习
icon: pen-to-square
date: 2026-05-05
category:
  - math
  - exercise
  - differential-equations
tag:
  - 红
  - 小
  - 圆
---

# 数学 - 260505练习

## 前置
 - **微积分基本定理(第一部分)**： 见 [数学 - 微积分基本定理](../calculus/notes/integrals/the-fundamental-therom-of-calculus.md)，主要是了解对于这个定积分式子 ==$\int_{a}^{x} f(t) \mathrm{d}t$==，其中 $a$ 是常数， 把这个式子看作 ==关于 $x$ 的函数==，那么他在 $x$ 求导的值等于 $f(x)$ .
 
## 微分方程 -> 齐次方程

接下来我们练习微分方程中==齐次方程==的求解方法。

:::preview plantuml
@startmindmap
<style>
mindmapDiagram {
  .blue {
    BackgroundColor lightblue
  }
  .green {
    BackgroundColor lightgreen
  }
  .yellow {
    BackgroundColor lightyellow
  }
  .pink {
    BackgroundColor #FFBBCC
  }
}
</style>
* 微分方程分类 <<blue>>
** 一阶微分方程 <<green>>
*** 可分离变量方程 
**** 识别：能写成 g(y)dy = f(x)dx
**** 解法：两边分别积分s
*** 齐次方程 <<pink>>
**** 识别：能写成 y' = f(y/x) <<yellow>>
**** 解法：令 u = y/x 换元，化为可分离 <<yellow>>
*** 一阶线性微分方程
**** 标准形式
***** 识别：y' + P(x)y = Q(x)
***** 解法：积分因子公式法
**** 伯努利方程 
***** 识别：y' + P(x)y = Q(x)yⁿ (n ≠ 0, 1)
***** 解法：令 z = y^(1-n)，化为标准形式
*** ...
*** ...
*** ...
-- 高阶微分方程
--- ...
--- ...
--- ...
@endmindmap
:::

## 题目
- 来源: [公众号: 数学若只如初见 - 关于齐次方程的常考题型及典型例题](https://mp.weixin.qq.com/s/8wpTLOBzt7n_nwFvsvm_zw)

:::note features

 - 求解齐次方程的典型例题
 - 齐次方程的几何应用问题举例
 - 抛物线的几何光学性质 （分析几何关系并建立微分方程）

:::

![alt text](/assets/images/math/excercise/260505/p1.jpg) 
![alt text](/assets/images/math/excercise/260505/p2.jpg) 
![alt text](/assets/images/math/excercise/260505/p3.jpg)

## 小结

通过本次练习，我熟悉了微分方程中 <ins>齐次方程</ins> 的求解流程：

对于形如
$$
\boxed{\frac{\mathrm{d} y}{\mathrm{d} x} = \varphi (\frac{y}{x} )}
$$

的齐次方程，
$$
\text{令} u = \frac{y}{x}  
\text{, 则} y = ux , 
\frac{\mathrm{d}y}{\mathrm{d} x} =  x \cdot  \frac{\mathrm{d}u}{\mathrm{d} x} + u
$$

$$
\text{即} x \cdot \frac{\mathrm{d}u }{\mathrm{d} x} + u = \varphi(u) 
$$

整理可得<ins>可分离变量的微分方程</ins>.

只要坚持练习，把时间花够，总有一天我也能成为数学高手。