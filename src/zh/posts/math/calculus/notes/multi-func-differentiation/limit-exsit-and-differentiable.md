---
title: 数学 - 判断二元函数在某点极限是否存在、是否可微
icon: pen-to-square
date: 2026-06-05
category:
  - math
  - multi-func
  - differentiation
tag:
  - 红
  - 小
  - 圆
---

# 数学 - 判断二元函数在某点极限是否存在、是否可微

 - 极限是否存在: 函数在某点是否稳定趋于一个值
 - 是否可微: 能否被线性近似(与切平面的差值是否够小)

---

## 极限是否存在

 - 证明极限不存在：路径法,例如代入 $x=y$ 和 $x=0$ 算出的极限值不一样就可以证明极限不存在；
 - 证明极限存在: 使用夹逼准则；或换元把问题转换为一元函数求极限的问题；

## 是否可微(能否被线性近似)

对象是 $(x,y)$ 邻域内一点 $(x + \Delta x, y + \Delta y)$, 证明这个点的线性近似( $f(x,y)$ 加上x、y两个方向的偏导数决定的变化)和真实值的差距是关于这两点距离的高阶无穷小。

$$
\boxed{
\Delta z
=
f_x(a,b)\Delta x
+
f_y(a,b)\Delta y
+
o(\rho),
\qquad
\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}
}
$$



## 例题

![alt text](/assets/images/math/multi-func/probb-limit-and-diffable-of-multifunc.jpg)