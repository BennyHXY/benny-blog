---
title: Claude - 读者写者问题交互演示
icon: pen-to-square
date: 2026-05-06
category:
  - AI-generated
  - operating-system
  - claude
tag:
  - 红
  - 小
  - 圆
---
# Claude - 读者写者问题交互演示

### 问题描述
<!-- :::note  -->
- **读者-写者问题**： 一个文件，可以有读者去读，和写者去写。读者可以多个读者同时读，但写者必须独占。
<!-- ::: -->
### PV 操作解法（读者优先）
- 这个方法的缺陷：读者源源不断到来时，写者可能永远无法写入（写者饥饿）

```text
semaphore rw_mutex = 1   // 控制对数据的访问，写者直接用，读者首尾用
semaphore mutex   = 1    // 保护 n_reader 变量本身
int n_reader      = 0    // 当前正在读的读者数量
```
 
```text
读者：                          写者：
P(mutex)                        P(rw_mutex)
    n_reader++                      write()
    if (n_reader == 1)          V(rw_mutex)
        P(rw_mutex)
V(mutex)
 
read()
 
P(mutex)
    n_reader--
    if (n_reader == 0)
        V(rw_mutex)
V(mutex)
```
 

### 交互演示

<script setup>
    import ReadersWriters from "@source/.vuepress/components/ReadersWriters.vue";
</script>

<ReadersWriters />





