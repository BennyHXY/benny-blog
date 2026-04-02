---
title: 计组 - 高速缓存
icon: pen-to-square
date: 2026-04-03
category:
  - frontend
tag:
  - 红
  - 小
  - 圆
---

# 计组 - 高速缓存

## 通用结构

一般而言， 高速缓存的结构可以用元组 ( `S` - `组数` , `E` - `组内行数`, `B` - `内存块大小`, `m` - `主存地址位数`) 来描述。
高速缓存数据容量大小: $C = S \times E \times B$ 。

:::details 展开查看鬼画图
![cache-overview-01](/assets/images/article/computer-architecture/memory/cache/cache-overview01.jpg)

![cache-overview-02](/assets/images/article/computer-architecture/memory/cache/cache-overview02.jpg)

:::

### 参数小结

基本参数:
| 参数 | 描述 |
| :--- | :--- |
| $S = 2^{s}$ | 组数 |
| $E$ | 每个组的行数 |
| $B = 2^{b}$ | 块大小（字节） |
| $m = log_{2}(M)$ | （主存）物理地址位数 |

衍生出来的量：
| 参数 | 描述 |
| :--- | :--- |
| $M = 2 ^ {m}$ | 内存地址的最大数量 |
| $s = log_{2}(S)$ | 组索引占多少位 |
| $b = log_{2}(B)$ | 块偏移占多少位 |
| $t = m - (s + b)$ | 标记位占多少位 |
| $C = S \times E \times B$ | 不包括像有效位和标记位这样开销的高速缓存大小（字节） |

## 映射方式

(一个内存地址和cache位置之间的映射)
直接映射 / 组相联映射 / 全相联映射

### 概览

```markmap
---
title: markmap
markmap:
  colorFreezeLevel: 2
---

## 映射方式


### 直接映射

 - 组内行数 $E = 1$

### 组相联映射
 - 介于之间, $1 < E < C / S$

### 全相联映射
 - 只有一组 $S = 1$
```

### 过程说明

1. 组选择
2. 行匹配
3. 块内偏移

n. (若缓存不命中) 行替换

## 其他

### 写策略：直写(write-through)和写回(writhe-back)
