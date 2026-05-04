---
title: 数学 - 260503练习
icon: pen-to-square
date: 2026-05-03
category:
  - math
  - exercise
  - differential-equations
tag:
  - 红
  - 小
  - 圆
---

# 数学 - 260503练习

## 前置

 - **数学建模**: 如何把现实中的问题通过数学语言(形式化的语言，如符号、函数、方程)描述出来。这样就能更方便的以数学的角度去观察、分析和处理这些问题。微分方程是这种数学模型的一种常见表达方式。

## 微分方程
 - **微分方程**是包含一个未知函数及其一个或多个导数的等式。等式中最高阶导数的阶数称为微分方程的**阶数**。
 - 微分方程也没有系统的方法去求解所有的微分方程。这个章节的讲解方式也是把微分方程分成不同的类别(见下表)，然后分别讨论它们的求解流程。

:::note from_claude: 微分方程的分类(考研数学一范围) 
### 一阶微分方程

| 类型 | 识别特征 | 解法思路 |
|------|----------|----------|
| 可分离变量方程 | 能写成 g(y)dy = f(x)dx 的形式 | 两边分别积分 |
| 齐次方程 | 能写成 y' = f(y/x) 的形式 | 令 u = y/x 换元，化为可分离 |
| 一阶线性方程 | y' + P(x)y = Q(x) | 公式法（积分因子） |
| 伯努利方程 | y' + P(x)y = Q(x)yⁿ | 令 z = y^(1-n) 换元，化为线性 |
| 全微分方程 | P dx + Q dy = 0，且 ∂P/∂y = ∂Q/∂x | 凑微分，求势函数 u(x,y) |
| 简单换元可解 | 如 y' = f(ax+by+c) 形式 | 令 u = ax+by+c 换元 |

### 高阶微分方程

| 类型 | 识别特征 | 解法思路 |
|------|----------|----------|
| 可降阶：y⁽ⁿ⁾= f(x) | 右端只含 x | 连续积分 n 次 |
| 可降阶：y'' = f(x, y') | 不显含 y | 令 p = y'，降为一阶 |
| 可降阶：y'' = f(y, y') | 不显含 x | 令 p = y'，换自变量为 y |
| 二阶常系数齐次 | y'' + py' + qy = 0 | 特征方程法 |
| 二阶常系数非齐次 | y'' + py' + qy = f(x) | 特解用待定系数法，加齐次通解 |
| 高于二阶常系数齐次 | y⁽ⁿ⁾+ ... = 0 | 同特征方程法，看重根/复根 |

:::

接下来我们练习==一阶线性微分方程==的求解方法：<ins>积分因子法</ins>。

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
**** 解法：两边分别积分
*** 一阶线性方程 <<pink>>
**** 识别：y' + P(x)y = Q(x) <<yellow>>
**** 解法：积分因子公式法 <<yellow>>
*** 伯努利方程 
**** 识别：y' + P(x)y = Q(x)yⁿ
**** 解法：令 z = y^(1-n)，化为线性
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

- 来源: [公众号: 数学若只如初见 - 求解一阶线性微分方程的典型例题](https://mp.weixin.qq.com/s/a6Qa4Prn1nB3OIJK5RTz6Q)

:::note features

 - 公式法
 - 积分因子法
 - 常数变异法
 - 求一阶线性方程通解的典型例题
 - 求一阶线性方程特解的典型例题
 - 可转化为一阶线性微分方程的情形

:::


![alt text](/assets/images/math/excercise/260503/p1.jpg) 
![alt text](/assets/images/math/excercise/260503/p2.jpg)
![alt text](/assets/images/math/excercise/260503/p3.jpg) 


## 小结

通过本次练习，我熟悉了积分因子法求解一阶线性微分方程的流程。满足线性微分方程标准形式$\frac{dy}{dx} + P(x) \cdot y = Q(x)$的方程即可按以下流程求解。

$$\boxed{\frac{dy}{dx} + P(x) \cdot y = Q(x)}$$

**① 求积分因子** $\mu(x)$：

$$\mu(x) = e^{\int P(x)\,dx}$$

**② 方程两边同乘以积分因子：**

$$\mu(x) \cdot \frac{dy}{dx} + \mu(x)P(x)y = Q(x) \cdot \mu(x)$$

即：

$$\left(\mu(x) \cdot y\right)' = Q(x)\mu(x)$$

**③ 方程两边对 $x$ 积分：**

$$\int \left(\mu(x) \cdot y\right)' dx = \int Q(x)\mu(x)\,dx$$

$$\mu(x) \cdot y = \int Q(x)\mu(x)\,dx + C$$


只要坚持练习，把时间花够，总有一天我也能成为数学高手。

