---
title: 计组 - 高速缓存
icon: pen-to-square
date: 2026-04-03
category:
  - computer-architecture
  - memory-hierarchy
tag:
  - 红
  - 小
  - 圆
---

# 计组 - 高速缓存

<script setup>
     import CacheTable2 from "@source/.vuepress/components/computer-architecture/cache/CacheTable2.vue"
    import CacheTable1 from "@source/.vuepress/components/computer-architecture/cache/CacheTable1.vue"
    import Analysis612 from "@source/.vuepress/components/computer-architecture/cache/Analysis612.vue"
    import Analysis613A from "@source/.vuepress/components/computer-architecture/cache/Analysis613A.vue"
  </script>

## 通用结构

一般而言， 高速缓存的结构可以用元组 ( `S` - `组数` , `E` - `组内行数`, `B` - `内存块大小`, `m` - `主存地址位数`) 来描述。
高速缓存数据容量大小: $C = S \times E \times B$ 。

:::details 展开查看鬼画图

![cache-overview-01](/assets/images/article/computer-architecture/memory/cache/cache-overview01.jpg)

![cache-overview-02(图有误)](/assets/images/article/computer-architecture/memory/cache/cache-overview02.jpg)

![cache-overview-03](/assets/images/article/computer-architecture/memory/cache/cache-overview00.png)

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

## cache映射方式

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

(PA -> Data)

1. 组选择
   通过组号在cache中找到对应的组.
2. 行匹配
   通过标记位在这个组中(有效位为$1$)的块中进行匹配。如果匹配不到标记位一致的块，就需要到内存中把他调进来（多访问内存一次）.
3. 块内偏移
   匹配到对应的块之后，通过地址最后几位的块偏移(块内地址)从块中取出相应的 字/字节 。

n. (若缓存不命中) 行替换

### 题目

#### 例题1(csapp EXERCISE_6.12 & EXERCISE_6.13)

(EXERCISE 6.12) 有如下假设：

- 内存是字节寻址的。
- 内存访问的是$1$字节的字（不是$4$字节的字）。
- 地址的宽度是$13$位。
- 高速缓存是$2$路组相联的$(E = 2)$，块大小为 $4$ 字节$(B = 4)$，有 $8$ 个组$(S = 8)$。
  高速缓存的内容如下，所有的数字都是以十六进制来表示的：

<CacheTable1 />

下面的图展示的是地址格式（每个小方框一个位）。指出（在图中标出）用来确定下列内容的字段：
CO - 高速缓存块偏移
CI - 高速缓存组索引
CT - 高速缓存标记
<CacheTable2 />

::: details 查看解析
两个低位是块偏移(CO),然后是3位的组索引(CI),剩下的位作为标记(CT):
<Analysis612 />
:::

(EXERCISE 6.13) 假设一个程序运行在EXERCISE_6.12的机器上，它引用地址`0x0E34`处的一个字节的字。指出访问的高速缓存条目和十六进制表示的返回的高速缓存字节值。指出是否会发生缓存不命中。如果会出现缓存不命中，用 `-` 来表示 `返回的高速缓存字节`。

A. 地址格式（每个小方框一个位）:
<CacheTable2 />

B. 内存引用：
| 参数 | 值 |
| :--- | :--- |
| 高速缓存块偏移(CO) | `0x___` |
| 高速缓存组索引(CI) | `0x___` |
| 高速缓存标记(CT) | `0x___` |
| 高速缓存命中？（是/否） | |
| 返回的高速缓存字节 | `0x___` |

:::details 查看解析

引用地址`0x0E34`处的一个字节的字

A.地址格式（每个小方框一个位）:
<Analysis613A />

B. 内存引用：
| 参数 | 值 |
| :--- | :--- |
| 高速缓存块偏移(CO) | `0x_0_` |
| 高速缓存组索引(CI) | `0x_5_` |
| 高速缓存标记(CT) | `0x_71_` |
| 高速缓存命中？（是/否） | 是 |
| 返回的高速缓存字节 | `0x_B_` |

:::

## 其他

### 行替换策略

- Latest Recently-Used, **LRU** - 最近最少使用
- Least-Frequently-Used, LFU - 最不常使用

### 写策略：直写(write-through)和写回(writhe-back)

- 直写: 每次写操作都更新更低层次存储单元中的值；
- 写回：尽可能推迟更新，只有当替换算法要驱逐一个更新过的块时，才把他写到紧接着的低一层中；
- **需要注意的是使用后者(写回)策略的时候需要在高速缓存的每行中维护一个额外的修改位(dirty bit).**

## 小结

一般而言， 高速缓存的结构可以用元组 ( `S` - `组数` , `E` - `组内行数`, `B` - `内存块大小`, `m` - `主存地址位数`) 来描述。其中，通过 ( `S` - `组数` , `E` - `组内行数`, `B` - `内存块大小`) 我们可以确定Cache的数据容量 $C = S \times E \times B$ ; 通过$(S,E)$我们可以确定Cache和主存之间的映射方式：若组内行数$E = 1$，则为直接映射；若组数$S=1$，则为全相联映射；若介于两者之间，就是组相联映射。通过(`m` - `主存地址位数`)我们可以确定最大物理地址数量，从而建立高速缓存与主存之间映射的完整模型。
例题1(csapp EXERCISE_6.12 & EXERCISE_6.13)是一道很好的例题，可以有效的提升我们的做题能力。
