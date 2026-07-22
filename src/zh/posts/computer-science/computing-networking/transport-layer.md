---
title: 计网 - 运输层 (Transport Layer)
icon: pen-to-square
date: 2026-07-21
# star: true
category:
  - computer-science
  - computer-networking
  - Internet
tag:
  - 红
  - 小
  - 圆
---

# 计网 - 运输层 (Transport Layer)

## 前置

互联网五层协议栈：应用层、传输层、网络层、链路层、物理层
 - 应用层(Application Layer): HTTP 、 FTP 、 SMTP .etc
 - **传输层(Transport Layer): TCP 、 UDP**
 - 网络层(Network Layer): IP
 - 链路层(Link Layer): 以太网？
 - 物理层(_ Layer)

## 概述
 - 传输层服务模型: 进程间通信(process-to-process). (是在网络层提供的主机到主机之间服务的扩展).
 - 两个协议: TCP、UDP .
 - **UDP**==仅提供复用/分解功能和简单的差错检验==，是对网络层IP协议的最简单、基本的扩展。
 - **TCP**: ==多路复用/分解、差错检验、可靠传输、拥塞控制==.  (实现:==面向连接==).
 - (多路复用/分解：类似要在班级里将作业交给老师批改时收作业的小组长起到的功能。)

## UDP(User Datagram Protocal, 用户数据报协议)
 - **UDP**==仅提供复用/分解功能和简单的差错检验==，是对网络层IP协议的最简单、基本的扩展。
 - 报文结构:
    ![UDP-segment-structure](/assets/images/computer-science/computer-networking/transport-layer/UDP-segment-structure-2.png)
 - 其中**源端口字段、目的端口字段**用于多路复用和多路分解，
 - 头部其他字段(**长度、校验和**)用于差错检验.
 - ...


## TCP(Transmission Control Protocal, 传输控制协议)
 - **TCP**: ==多路复用/分解、差错检验、可靠传输、拥塞控制==.  (实现:==面向连接==).
 - 报文结构: 


### 可靠传输(reliable data transfer)
 - **不可靠传输**: 对于一个发送任务，我只保证我做了一个发送的动作，我不保证对方一定收到了(你发的这条消息)。
 - **可靠传输**: 对于一个发送任务，我做了一个发送的动作，并确保对方一定收到了(你发的这条消息)。<ins>因为我收到了对方的回信说他收到了</ins>。 other:如果我没收到对方说"收到(ACK)"的回信，我就重发或者找人报告。

#### 问题: 信道比特差错和丢包
   - 即导致没有"收到(ACK)"的原因:
   - **信道比特差错**。传话可能有误，他收到的消息和发送方发的消息之间有差异。 假如对方之前询问一个中小企业的销售额，收到的回复超过了2亿，对方会认为有疑点。(你将收到一个"pardon?(NAK)").
   - **丢包**。你发了消息，他没收到。我们通过一个计时器来判定丢包，如果在发送后一个时限内没有收到对方的"收到"，就认为是发生了丢包，重发或者找人报告。

#### 技术: 校验和、序号、定时器、确认分组(ACK和NAK)


### 流水线(pipeline)
 - 停等协议
 - 流水线
 - 流水线差错:GBN、SR

#### GBN: 回退N步
 - 也称滑动窗口算法.
 - 交互演示: [https://media.pearsoncmg.com/ph/esm/ecs_kurose_compnetwork_8/cw/content/interactiveanimations/go-back-n-protocol/index.html]


#### SR:选择重传


### 拥塞控制(Congestion Control)

### 面向连接(Transmission-Oriented)





## 小结

 - insight(变量): 像校验和，它是一个变量。任何算法都是通过定义变量，在变量之上执行运算和传输而实现的。就像任何物理结论，都是通过定义物理量，再对物理量进行测量、计算等过程推导得到的一样。
 - insight(字段):在学习的过程中，我们练习定义变量的方法和利用定义出来的变量的方法(算法)，这就可以使我们定义的变量更有用，赋予算法更多功能，对空间、时间等资源的利用更有效。有能力定义变量和利用变量，再在网络报文的字段中放下这些变量，我们就能实现更多事情(如差错检验甚至恢复差错、以及各种意想不到的功能)。

