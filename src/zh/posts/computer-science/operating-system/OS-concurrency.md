---
title: OS - 并发
icon: pen-to-square
date: 2026-05-06
category:
  - computer-science
  - operating-system
  - concurrency
tag:
  - 红
  - 小
  - 圆
---

# OS - 并发

## 并发关键术语: 临界区、竞态条件、不确定性、互斥执行

- **临界区(critical section)** 是访问共享资源的一段代码，资源通常是一个变量或数据结构。
- **竞态条件(race condition)** 出现在多个执行线程大致同时进入临界区时，它们都试图更新共享的数据结构，导致了令人惊讶的（也许是不希望的）结果。
- **不确定性(indeterminate)** 程序由一个或多个竞态条件组成，程序的输出因运行而异，具体取决于哪些线程在何时运行。这导致结果不是确定的(deterministic)，而我们通常期望计算机系统给出确定的结果。
- 为了避免这些问题，线程应该使用某种**互斥(mutual exclusion)**原语。这样做可以保证只有一个线程进入临界区，从而避免出现竞态，并产生确定的程序输出。

