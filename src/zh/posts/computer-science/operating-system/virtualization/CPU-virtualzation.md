---
title: OS - CPU虚拟化
icon: pen-to-square
date: 2026-10-08
category:
  - computer-science
  - operating-system
  - algorithm
tag:
  - 红
  - 小
  - 圆
---

# OS - CPU虚拟化

### introduction
继承OSTEP（虚拟、并发、持久化）思路的笔记。

虚拟化部分包括 CPU虚拟化 和 内存虚拟化， 其中 “进程是CPU的虚拟化” 。


### a mind map

<!-- 图片展示了受限直接执行机制（OS在用户态和内核态之间切换），和这本书提到的一些常见调度算法（每次从内核态切换回用户态时，CPU如何决策接下来执行哪个进程？）。 -->

![图片展示了受限直接执行机制（OS在用户态和内核态之间切换），和这本书提到的一些常见调度算法（每次从内核态切换回用户态时，CPU如何决策接下来执行哪个进程？）。](/assets/images/computer-science/operating-system/virtualization/CPU-virtualization-1.jpg)


图片可以引申的点有：

- 导致OS从用户态切换到内核态的事件有：
  1. 当前正在执行的进程发出特定的syscall
  2. 时钟中断

- OS在模式切换时涉及的上下文切换（寄存器保存与恢复）

-  调度算法的细节与评价指标

 



