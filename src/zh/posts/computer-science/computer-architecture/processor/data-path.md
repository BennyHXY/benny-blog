---
title: 计组 - 数据通路
date: 2026-04-11
icon: pen-to-square
category:
  - computer-architecture
  - processor
tag:
  - red
  - big
  - round
---

# 计组 - 数据通路

- 处理器要提供的功能：实现运算、存取、分支跳转三类指令的执行；
- 实现处理器的方式：在寄存器、ALU、内存之间构建数据通路；
- zjy老师录屏地址：[https://www.bilibili.com/video/BV1DVDpBzEex/?spm_id_from=333.1387.homepage.video_card.click&vd_source=ef31e1f1a615950aff02d37e8594bac7]

## 前置

### 指令

- 指令的类型：运算 / 存取 / 分支跳转
- 指令的格式 (以 MIPS 为例)：
  ![MIPS 指令格式](/assets/images/computer-science/computer-architecture/MIPS-instruction-format.png)

### 术语缩写

```
Central Control Unit, CPU - 中央处理单元
Arithmetic Logic Unit, ALU - 算数逻辑处理单元

Program Status Word, PSW - 程序状态字 （包含：中断屏蔽位；特权状态；条件码；指令地址）
{
	SPRs(Special-purpose registers): 专用寄存器组
	{
		PC(Program Counter): 程序计数器
		FR(Flag Register): 标志寄存器，也称状态寄存器(status register)
		{
			ZF (Zero flag): 零标志位
			CF (Carry flag): 进位标志位
			SF/NF (Sign flag / Negative flag): 符号标志位 / 负数标志位
			VF/OF/WF (Overflow flag): 溢出标志位
			IF (Interrupt flag): 中断标志位
		}
	}
}

GPRs(General-purpose registers): 通用寄存器组 ： 既能存储数据也能存储地址

IR(Instruction Register): 指令寄存器

MAR(Memory Address Register): 内存地址寄存器
MDR(Memory Data Register):  内存资料寄存器

```

## 构建数据通路

### 部件

![alt text](/assets/images/computer-science/computer-architecture/csorg4-5abc.png)

![alt text](/assets/images/computer-science/computer-architecture/csorg4-7ab.png)

![alt text](/assets/images/computer-science/computer-architecture/csorg4-8ab.png)

### 通路

![alt text](/assets/images/computer-science/computer-architecture/csorg4-19.png)
![alt text](/assets/images/computer-science/computer-architecture/csorg4-20.png)
![alt text](/assets/images/computer-science/computer-architecture/csorg4-21.png)

### 工作流程

1. 取指(Instruction Fetch, **IF**)
2. 译码(Instruction Decode, **ID**)
3. 执行(Execute, **EX**)
4. 写回(Write-Back, **WB**)

:::note 参考

- [https://www.cnblogs.com/yubo-guan/p/19086561]

:::

:::note
一个来自zjy的版本：取指、间址、执行、中断 。 （giao 这个好像叫控制器的）
:::

## 题目

#### [2022]43

43. 某CPU中部分数据通路如题43图所示，其中，GPRs 为通用寄存器组；FR 为标志寄存器，用于存放 ALU 产生的标志信息；带箭头虚线表示控制信号，如控制信号 Read 、 Write 分别表示主存读、主存写，MDRin 表示内部总线上数据写入 MDR ，MDRout 表示 MDR 的内容送外部总线。

![43题图](/assets/images/computer-science/computer-architecture/datapath/zhenti23-43.png)

请回答下列问题。
(1) 设 ALU 的输入端 A、B 及 输出端 F 的最高位分别为 $A_{15}$、$B_{15}$ 及 $F_{15}$ , FR 中的符号标志和溢出标志分别为 SF 和 OF ， 则 SF 的逻辑表达式是什么？ A加B 、 A减B时OF的逻辑表达式分别是什么？要求逻辑表达式的输入变量为 $A_{15}$、$B_{15}$ 及 $F_{15}$ 。
(2) 为什么要设置暂存器 Y 和 Z ?
(3) 若 GPRs 的输入端 rs 、 rd 分别为所读、写的通用寄存器编号，则 GPRs 中最多有多少个通用寄存器？ rs 和 rd 来自途中的哪个寄存器？ 已知 GPRs 内部有一个地址译码器和一个多路选择器， rd 应链接地址译码器还是多路选择器？
(4) 取指令阶段（不考虑PC的增量操作）的控制信号序列是什么？ 若从发出主存读命令到主存读出数据并传输到 MDR 共需 5 个时钟周期，则取指令阶段至少需要几个时钟周期？
(5) 途中控制信号是由什么部件产生？ 途中哪些寄存器的输出信号会连到该部件的输入端？

:::details 查看解析

(1)

$$
% 符号标志 SF
SF = F_{15}
$$

$$
% A 加 B 时的溢出标志 OF
OF_{\text{add}} = (\overline{A_{15}} \cdot \overline{B_{15}} \cdot F_{15}) + (A_{15} \cdot B_{15} \cdot \overline{F_{15}})
$$

$$
% A 减 B 时的溢出标志 OF
OF_{\text{sub}} = (\overline{A_{15}} \cdot B_{15} \cdot F_{15}) + (A_{15} \cdot \overline{B_{15}} \cdot \overline{F_{15}})
$$

（注：第二问： 加法溢出的情况：AB同号且F异号，如两个正数相加得到负数说明溢出； 减法溢出的情况：AB异号且F与A异号，如 \_\_\_ ；）

(2)
**在单总线结构中，每一时刻总线上只有一个数据有效**，ALU 有两个输入端和一个输出端。 当ALU运算时，需先用暂存器 Y 缓存其中一个输入端的数据，再通过总线传送另一个输入端数据。 同时，ALU的输出端产生结果，但由于此时总线已被占用，因此需要暂存器 Z 来缓存 ALU 的输出端数据。

(3)
最多有 $2^4 = 16$ 个通用寄存器；
rs 和 rd 来自指令寄存器 IR ；
rd 表示寄存器编号，应连接地址译码器。

(4)

```
① PCout, MARout        // 将指令的地址写入 MAR
② Read                 // 读主存，并将读出的数据写入 MDR
③ MDRout, IRin         // 将MDR的内容写入指令寄存器 IR
```

步骤 ① 需要 1 个时钟周期， 步骤 ② 需要 5 个时钟周期，步骤 ③ 需要 1 个时钟周期，因此取值阶段至少需要 7 个时钟周期。

(5) 图中控制信号由控制部件(CU)产生。指令寄存器 IR 、 标志寄存器 FR 的输出信号会连到控制部件的输入端。

:::

## 其他

### 用户不可见的寄存器

- （也称内部寄存器(Internal Register)）
- IR 、 MAR 、 MDR
- 暂存器、微指令相关寄存器

## 小结

**数据通路(datapath)** 是执行单元的集合，例如执行数据处理操作的算术逻辑单元、乘法器、寄存器和总线。它与控制器(Control Unit, CU) 一起组成中央处理器(CPU)。( 注：控制器是产生控制信号(如MDRin、MDRout)的部件，分为硬布线控制器和微程序控制器两种类型。 见[计组 - 控制器] ) 。通过数据通路和控制器部分的学习，我们能够对处理器的工作原理有更系统的感知，为其他章节的学习奠定基础。

计组的大题主要考存储器和处理器。总之有关数据通路的题目可能都比较综合，还需要补充一些关于指令和时钟周期的知识点。

:::info 参考

- [维基百科 - 数据通路](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E9%80%9A%E8%B7%AF)
- [Wikipedia - Processor register(英语)](https://en.wikipedia.org/wiki/Processor_register)

:::
