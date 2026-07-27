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

计网运输层的一轮复习笔记。题目练习见 [CS - 260727练习](../exercise/cs-260727.md)

## 前置

互联网五层协议栈：应用层、运输层、网络层、链路层、物理层
 - 应用层(Application Layer): HTTP 、 FTP 、 SMTP .etc
 - **运输层(Transport Layer): TCP 、 UDP**
 - 网络层(Network Layer): IP
 - 链路层(Link Layer): 以太网？
 - 物理层(_ Layer)



## 运输层概述
 - 运输层服务模型: 进程间通信(process-to-process). (是在网络层提供的主机到主机之间服务的扩展).
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
 - **TCP**: ==多路复用/分解、差错检验、可靠传输、拥塞控制==.  (通过==面向连接==实现).

### 面向连接(Transmission-Oriented)

 - insight(传输控制): 传输层的重点是TCP(Transmission Control Protocal, 传输控制协议)。面向传输是Transmission-Oriented, 面向对象是Object-Oriented, 传输即对象，传输控制这个名称的含义是TCP这个协议的控制信息是围绕“传输(Transmission)”这个对象来设计的。即一个包含点和边的图$G(v,e)$中，两个点和之间的一条边被一起视为一个叫做“传输”的对象，区别于UDP的控制信息是根据“点”来设计的。

#### 报文结构
  ![TCP-segment-structure](/assets/images/computer-science/computer-networking/transport-layer/TCP-segment-structure-3.png)

:::details
 - **源端口号、目的端口号、检验和** : 同 UDP .
 - 32 比特的**序号字段(sequence number field)** 和 32 比特的**确认号字段(acknowledgement number field)**。 这些字段被TCP发送方和接收方用来实现可靠数据传输服务。
 - 16 比特的**接收窗口字段(receive window field)**，该字段用于流量控制。我们很快就会看到，该字段用于指示接收方愿意接收的字节数量。
 - 4 比特的**首部长度字段(header length field)**，该字段指示了以 32 比特的字为单位的TCP首部长度。由于TCP选项字段的原因，TCP首部的长度是可变的。(通常，选项字段为空，所以TCP首部的典型长度是20字节。)
 - 可选与变长的**选项字段(options field)**，该字段用于发送方与接收方协商最大报文段长度(MSS)时，或在高速网络环境下用作窗口调节因子时使用。 首部字段中还定义了一个时间戳选项。可参见 RFC 854 和 RFC 1323 了解其他细节。
 - 6 比特的**标志字段(flag field)**。**ACK比特**用于指示确认字段中的值是有效的，即该报文段包括一个对已被成功接收报文段的确认。 **RST** 、 **SYN** 、 和 **FIN** 比特用于连接建立和拆除。 在明确拥塞通告中使用了 **CWR** 和 **ECE** 比特。当 **PSH** 比特被置位时，就指示接收方应立即将数据交给上层。最后，**URG**比特用来指示报文段里存在着被发送端的上层实体置为“紧急”的数据。紧急数据的最后一个字节由 16 比特的**紧急数据指针字段(urgent data pointer field)** 指出。当紧急数据存在并给出指向紧急数据尾指针的时
候，TCP必须通知接收端的上层实体。(在实践中，PSH、URG和紧急数据指针并 没有使用。为了完整性起见，我们才提到这些字段。)

:::

#### 连接管理

![](/assets/images/computer-science/computer-networking/transport-layer/tcp-states-client_server_2.png)
 - **连接创建**: `SYN` , "三次握手"
 - **连接销毁**: `FIN` , "四次握手" ， 客户和服务器都能发出结束连接的命令.
   - 结束连接的发起者进入 `TIME_WAIT` 后==等待2个MSL(最长报文段寿命)== 以后进入 `CLOSED`状态. 这个等待时间的典型值是 30秒、1分钟或2分钟 , 经过等待后，连接就正式关闭，客户端所有资源（包括端口号）将被释放。
 - **ESTABLISHED**: ...
 
### 可靠传输(reliable data transfer)
 - **不可靠传输**: 对于一个发送任务，我只保证我做了一个发送的动作，我不保证对方一定收到了(你发的这条消息)。
 - **可靠传输**: 对于一个发送任务，我做了一个发送的动作，并确保对方一定收到了(你发的这条消息)。<ins>因为我收到了对方的回信说他收到了</ins>。 other:如果我没收到对方说"收到(ACK)"的回信，我就重发或者找人报告。

#### 问题: 信道比特差错和丢包
   - 即导致没有"收到(ACK)"的原因:
   - **信道比特差错**。传话可能有误，他收到的消息和发送方发的消息之间有差异。 假如对方之前询问一个中小企业的销售额，收到的回复超过了2亿，对方会认为有疑点。(你将收到一个"pardon?(NAK)").
   - **丢包**。你发了消息，他没收到。我们通过一个计时器来判定丢包，如果在发送后一个时限内没有收到对方的"收到"，就认为是发生了丢包，重发或者找人报告。

#### 技术: 校验和、序号、定时器、确认分组(ACK和NAK)、重传机制
...

### 流水线(pipeline)
 - 停等协议
 - 流水线

#### 问题模型:出发顺序与到达顺序
 - 问题模型:如果接收端的传输层发出包的顺序是 $\{1,2,3,4, ... ， n\}$ , 那么我们希望接收端的传输层**向上交付的顺序**也是 $\{1,2,3, ... , n \}$ 。然而在流水线的模型中，由于我们同时往网络中发了许多个包，它们可能走不同的道路前往接收端，它们的到达顺序就不能像队列一样先出发先到达。因此接收端的多路分解服务就不能简单的收到一个包就向上交付一个包，它需要**维护<ins>向上交付的顺序</ins>**。


#### 滑动窗口: GBN 与 SR

 - GBN和SR是两种解决上述说的乱序问题(流水线差错)的基本方法。
 - **GBN**通过"如果现在收到的包不是我将要向上交付的下一个包，我就直接丢弃这个包"来达到一个"我接收的包都是按序到达的"的中间模型，然后它每接收一个包就向上交付一个包。
 - **SR**比GBN在接收端多了一个长度为 $N$ 的缓存，以减少丢弃动作以及带来的浪费。窗口内每个包有一个自己的逻辑定时器。
 - ==这两个算法都是在发送端和接收端分别维护一个这种条形"窗口"，然后一两个指针从左往右挪的那种算法==。

![](/assets/images/computer-science/computer-networking/transport-layer/slide-window-1.png)

##### GBN (Go Back N, 回退N步):
   - 发送端: `base` - 第一个"发送，还未确认"的序号 , `nextseqnum` - 第一个 "可用(如果上层给了任务)，还未发送"的序号.
   - 接收端:  `expectednum` - 当前期待收到包的序号.

 - GBN算法的FSM描述:
  ![](/assets/images/computer-science/computer-networking/transport-layer/algoFSMdescription-GBN.png)

:::note

FSM(Finite Statement Machine, 有限状态机)的阅读方法: 
    - 点: 状态
    - 边: 状态转移
      - 每条边上信息的结构:==横线上的是发生的事件，横线下的是相应的响应==。
    - 虚线: 指向开始状态

以这张GBN的图为例:
    发送方和接收方分别都只有一个状态: 等待上层的调用或收到下层的包。

==发送方==:从等待态起始，有四条状态转移(上层调用、计时器超时(判定丢包)、收到接收方反馈且这个包未损坏、收到反馈但是包损坏.)

        - 事件: 起始:
```cpp
base = 1;                         // 窗口范围是base ~ base + N，不在这个范围的包不发送.
nextseqnum = 1;                   // 由上层派来的包的序号由传输层管理.

```

        - 事件: 上层调用 `rdt_send(data)` :
```cpp
if(nextseqnum < base + N) {       // 如果序号合法，接受发送任务.
    sndpkt[nextseqnum] = make_pke(nextseqnum, data, checksum); 
                                  // 打包(将信件装进信封，填写报文首部字段. )
    udt_send(sndpkt[nextseqnum]); // 发送
    if(base == nextseqnum)        // 如果计时器是关闭状态
        start_timer               // 启动计时器
    nextseqnum++;                 // 跟进序号管理，下次任务序号的编号是这次的+1.
}
else
    refuse_data(data);            // 如果序号不合法，不接任务.

                                  // 响应完成后，回到等待上级调用的等待状态.

```

        - 事件: 收到接收方ACK且ACK未损坏 `rdt_rcv(rcvpkt) && notcorrupt(rcvpkt)` :

```cpp
base = getacknum(rcvpkt) + 1;     // 如果这个ACK对应一个“未确认”的序号，确认这个序号。否则不动。
if(base == nextseqnum)            // 如果现在网络中不存在“未确认”的包 (对方都确认收到了)
    stop_timer                    // 停止计时器
else
    start_timer                   // 否则重启计时器

                                  // 响应完成后，回到等待上级调用的等待状态.

```

        - 事件: 收到接收方ACK但ACK损坏 `rdt_rcv(rcvpkt) && corrupt(rcvpkt)`:
          - 不做动作，保持等待状态。
        
        - 事件: 计时器超时 `timeout`:

```cpp
start_timer;                      // 重新启动定时器
udt_send(sndpkt[base]);           // 将所有 
udt_send(sndpkt[base + 1]);       // "已发送，未确认"的包
...                               // 按照顺序
udt_send(sndpkt[nextseqnum - 1]); // 重新发一遍
                                  // 响应完成后，回到等待上级调用的等待状态.

``` 


==接收方==:从等待态起始，有两条状态转移(收到未损坏的刚好按序到达的包 / 除此之外.)

        - 事件:起始
```cpp
expectedseqnum = 1;               // 维护"按序到达"的中间模型，期望下一次到达的序号为1
sndpkt = make_pkt(0, ACK, checksum);
                                  // 发送一个ACK建立握手
                                  // sndpkt的第一个参数表示
                                  // "我按序号最后收到的分组是多少",
                                  // 因此这个包发过去可以说明: 我下一个期望收到的包是多少.

```

        - 事件: 收到未损坏的刚好按序到达的包 
         `rdt_rcv(rcvpkt) && notcorrupt(rcvpkt) && hasseqnum(rcvpkt, expectedseqnum)`:

```cpp
extract(rcvpkt, data);            // (确认信封无误后，)从信封里拿出信件。 - 提取数据
deliver_data(data);               // 向上交付
sndpkt = make_pkt(expectedseqnum, ACK, checksum);
                                  // 编辑要向发送方发送的确认信。
udt_send(sndpkt);                 // 发送ACK
expectedseqnum++;                 // 维护序号管理，下次期望收到的序号是这次的+1.

```

:::



##### SR (Selective Retransmission, 选择重传)
   - 发送端: `send_base` - 第一个"发送，还未确认"的序号 , `nextseqnum` - 第一个 "可用(如果上层给了任务)，还未发送"的序号.
   - 接收端: `rcv_base` - 第一个"期待，还未收到"的序号。

![](/assets/images/computer-science/computer-networking/transport-layer/slide-window-SR-2.png)

 - ==SR 发送方==的事件与动作:
    1. **从上层收到数据。** 当从上层收到数据后，SR发送方检查下一个可用于该分组的序号。如果序号位于发送方的窗口内，则将数据打包并发送；否则就像在GBN中一样，要么将数据缓存，要么将其返回给上层一遍以后传输。
    2. **超时。** 定时器再次被用来防止丢失分组。然而，现在每个分组必须拥有其自己的逻辑定时器，因为超时发生后只能发送一个分组。
    3. **收到 ACK 。** 如果收到 ACK ，倘若该分组序号在窗口内，则 SR 发送方将那个被确认的分组标记为已接收。如果该分组的序号等于 `send_base` ，则窗口基序号向前移动到具有最小序号的未确认分组处。如果窗口移动了并且有序号落在窗口内的未发送分组，则发送这些分组。

 - ==SR 接收方==的事件与动作:
    1. **序号在 `[rcv_base, rcv_base + N + 1]` 内的分组被正确接收。** 在此情况下，收到的分组落在接收方的窗口内，一个选择ACK被回送给发送方。如果该分组以前没收到过，则缓存该分组。 如果该分组的序号等于接收窗口的基序号(`rcv_base`) ，则该分组以及以前缓存的序号连续的(起始于 `rcv_base` 的)分组交付给上层。
    2. **序号在 `[rcv_base - N, rcv_base - 1]` 内的分组被正确收到。** ==在此情况下，必须产生一个ACK, 即使该分组是接收方以前已经确认过的分组。==
    3. **其他情况。** 忽略该分组。 


### 拥塞控制(Congestion Control)
- **流量控制**: 针对接收端接收缓存溢出.
- **拥塞控制**: 针对中途网络的路由器缓存溢出.
- 流量控制和拥塞控制都是通过一个变量`rwnd`或`cwnd`来限制发送端的发送窗口(`|sent - acked|`) 来实现的，只是这两个变量的含义不同。 `rwnd`是<ins>接收端剩余缓存长度</ins>, `cwnd` 是一个<ins>根据(如下)算法</ins>维护出来的量.
- (接收端)累计确认: TCP同选择重传一样，使用接收缓存。但是计时器只有一个，以当前发送窗口的第一个包为准。接收方每次回消息改变指向第一个包的指针，因此称累计确认.

#### TCP拥塞控制算法: 慢启动、拥塞避免、快速回复

![](/assets/images/computer-science/computer-networking/transport-layer/TCP-congestion-algorithm-FSM-1.png)

如图，共 $5$ 个事件(新的ACK，重复ACK，连续3个重复ACK，超时、`cwnd`达到阈值)、$3$ 个状态(==慢启动、拥塞避免、快速回复==) , 从慢启动开始，每当事件发生时，根据(事件，当前事件)这个二元组进行响应和状态转移。

 - **慢启动(slow start)**: “慢”是指`cwnd`从很小的值开始。但这个阶段`cwnd` 的增长速率是最大的, 为 每 new ack 1 MSS . ==(指数级增长 / 翻倍增长)==
 - **拥塞控制 (congestion control)**: `cwnd` 随时间==线性增长== ，为 每 RTT 1 MSS . 阈值 `ssthresh`为由指数增长变到线性增长的临界点。
 - **插叙:关于计时器和丢包事件**:
   - 我们认为“丢包”由计时器超时或3个连续重复ACK指示。我们都将阈值 `ssthresh` 设置为当前`cwnd`的一半。
   - 其中超时事件更严重一些，， 然后回到慢启动状态重新开始增长.
   - 计时器开始计数: 每次发送窗口内第一个包的时候启动计数器.
 - **快速恢复(fast recovery)**: 快速恢复是对 “将`cwnd`置为 1 MSS ” 的一种优化 (我们可以只使用另外两个状态就实现拥塞控制算法)， 因为3个重复ACK没有超时那么严重，所以我们只将 `cwnd` 置为 原先的一半+3MSS ， 并在这个状态以 每重复ACK 1 MSS 的速率增长 `cwnd` . 如果发生超时或新的ACK到达，就转移到另两个状态。


### 更多摘抄

:::details

#### figure 3-52
图3-52图示了 Reno版TCP与Tahoe版TCP的拥塞控制窗口的演化情况。在该图中， 
阈值初始等于8个MSS。在前8个传输回 
合，Tahoe和Reno采取了相同的动作。 
拥塞窗口在慢启动阶段以指数速度快速爬 
升，在第4轮传输时到达了阈值。然后拥 
塞窗口以线性速度爬升，直到在第8轮传 
输后出现3个冗余ACKO注意到当该丢包 
事件发生时，拥塞窗口值为12xMSSo于 
是ssthresh的值被设置为0. 5 x cwnd =6 X 
MSSO在TCP Reno下，拥塞窗口被设置 
为cwnd = 9MSS,然后线性地增长。在 
TCP Tahoe下，拥塞窗口被设置为1个 
MSS,然后呈指数增长，直至到达ssthresh值为止，在这个点它开始线性增长。
![](/assets/images/computer-science/computer-networking/transport-layer/f3-52.png)

#### figure 3-52
TCP的拥塞控制是：每个RTT内cwnd线性（加性）增加1MSS,然后出现3个冗余 
ACK事件时cwncl减半（乘性减）。因此，TCP拥塞控制常常被称为加性增、乘性减 
（Additive- Increase, Multiplicative- Decrease, 
在图3・53中所示的“锯齿”行为，这也 
很好地图示了我们前面TCP检测带宽时 
的直觉，即TCP线性地增加它的拥塞窗 
口长度（因此增加其传输速率），直到出 
现3个冗余ACK事件。然后以2个因子 
来减少它的拥塞窗口长度，然后又开始了 
线性增长，探测是否还有另外的可用 
带宽。_ 

...

==对于许多特色TCP的综述参见［Afanasyev 2010］。==


![](/assets/images/computer-science/computer-networking/transport-layer/f3-53.png)


:::

## 小结
 - insight(变量): 像校验和，它是一个变量。任何算法都是通过定义变量，在变量之上执行运算和传输而实现的。就像任何物理结论，都是通过定义物理量，再对物理量进行测量、计算等过程推导得到的一样。
 - insight(字段):在学习的过程中，我们练习定义变量的方法和利用定义出来的变量的方法(算法)，这就可以使我们定义的变量更有用，赋予算法更多功能，对硬件、存储、时间等资源的利用更有效。有能力定义变量和利用变量，再在网络报文的字段中放下这些变量，我们就能实现更多事情(如差错检验甚至恢复差错、以及各种意想不到的功能)。

 - **最大报文段长度(Maximum Segment Size, MSS)**: MSS的典型值为==1460字节==. 由链路层最大传输单元(MTU)的典型值1500字节减去TCP/IP首部(通常40字节)得到。
 - **如何发生丢包**: 中途路由器缓存溢出或接收端缓存溢出. -> 拥塞控制 & 流量控制 

---

本次复习中，我们阅读《计算机网络: 自顶向下方法》的运输层章节作为一轮材料，辅以历年真题与《大纲解析》回归考题。阅读部分，我们回顾了运输层的进程到进程服务模型，以及运输层的两个协议UDP与TCP的更多细节。做题部分: 命中率最高的地方在TCP连接管理(连接建立与销毁，连接期间客户与服务器分别的序号和确认号)，以及拥塞控制算法的流程。关于流水线乱序的两个算法GBN和SR在考研体系有时和链路层一起考察，我们再补充一两个定义就可以做题。我们还有一个UDP的校验计算需要之后补充。其他:我们保留材料中更多有趣讨论没有看，如果将来成为研究生，就有机会看。

这个章节的复习时间比较充分，我预计效果不错。(1周 -> 熟悉运输层概念 -> 4~8分的入场券.) 在之后的章节中我们就能见见真章了。不过我真期待我们经常能有充分的复习时间。