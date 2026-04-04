---
title: 计组 - 虚拟内存
date: 2026-03-26
icon: pen-to-square
category:
  - computer-architecture
  - memory-hierarchy
tag:
  - red
  - big
  - round
---

# 计组 - 虚拟内存

## 前置

### 虚拟化的概念

多个进程共享一套设备(内存/CPU) ， 因此设备向每一个进程提供统一化的抽象模型，使得每个进程以为自己独占设备(内存/CPU)。
![](/assets/images/computer-science/virtual-mem-01.png)

:::details 乱翻译 (●ˇ∀ˇ●)
假设自己是一个女海王，同时钓了好几个男的。我们将采取以下措施 不让他们发现彼此的存在：

1. 约会的时间不能冲突.
2. 自己不要将他们记混。不要在男A的birthday给男B发祝贺.
3. 你猜..？ (●ˇ∀ˇ●)

:::

更多进程层面有关虚拟内存的详情见 [OS - 虚拟内存]. 计组这里主要是讲为了完成"虚拟内存"这个向上的抽象模型，硬件层面用来进行支持的机制: 1. 地址转换(VA->PA, 利用TLB和页表). 2. 物理地址访存(PA->Data, Cache、Memory).

### 术语缩写

```
Memory Management Unit,MMU - 内存管理单元
Translation Lookaside Buffer, TLB - 翻译后备缓冲器、快表
Page Table Entry, PTE - 页表项

Virtual Address, VA - 虚拟地址
{
    VPO: Virtual Page Offset - 虚拟页偏移量(块内地址)
    VPN: Virtual Page Number - 虚拟页号
    {
        TLBI: TLB-Index - TLB索引
        TLBT: TLB-Tag - TLB标记
    }
}

Physical Address, PA - 物理地址
{
    PPO: Virtual Page Offset - 虚拟页偏移量(块内地址)
    {
        CO: Cache Offset - 缓存偏移(块内地址)
        CI: Cache Index - 缓存索引
    }
    PPN: Virtual Page Number - 虚拟页号
    {
        CT: Cache Tag - 缓存标记
    }

}
```

## 问题模型：如何从虚拟地址出发，拿到数据？

```flow
st=>start: 开始(VA)
ed=>end: 结束(Data)

st->ed
```

> 早期的PC使用物理寻址,而且诸如数字信号处理器、嵌入式微控制器以及Cray超级计算机这样的系统仍然继续使用这种寻址方式。然而,现代处理器使用的是一种称为虚拟寻址(virtual addressing)的寻址形式, ...

> 使用虚拟寻址,CPU通过生成一个虚拟地址(Virtual Address,VA)来访问主存,这个虚拟地址在被送到内存之前先转换成适当的物理地址。将一个虚拟地址转换为物理地址的任务叫做地址翻译(address translation)。就像异常处理一样,地址翻译需要CPU硬件和操作系统之间的紧密合作。CPU芯片上叫做内存管理单元(Memory Management Unit, MMU)的专用硬件,利用存放在主存中的查询表来动态翻译虚拟地址,该表的内容由操作系统管理。

(Model: VA -> Data) => (VA -> PA -> Data)

```flow
st=>start: 开始(VA)
ed=>end: 结束(Data)
sub1=>subroutine: 子程序1：地址翻译(VA->PA)
sub2=>subroutine: 子程序2：物理访存(PA->Data)

st->sub1->sub2->ed
```

### 子程序1：地址翻译(VA->PA)

```flow
st=>start: 开始(VPN)
ed=>end: 结束(PPN)
branch1=>condition: TLB命中?
branch2=>condition: 页表命中?
op1=>operation: 缺页异常
pte=>inputoutput: PTE

st->branch1
branch1(yes)->pte
branch2(yes)->pte
branch1(no)->branch2
branch2(no)->op1
pte->ed
```

:::details (Model:VA->VP)=>(VPN->PPN)
虚拟地址VA = [虚拟页号VPN][虚拟页偏移VPO]
物理地址PA = [物理页号PPN][物理页偏移PPO]
虚拟地址是虚拟页号和虚拟页偏移组成的，物理地址是物理页号和物理页偏移组成的，因为两个页偏移实质上是等价的，所以把虚拟地址VA翻译成物理地址PA的流程实质上是把VA中的VPN抽出来翻译成PPN，然后再把PPN和原来的VPO（或PPO）拼起来组成PA .
![csapp_figure912](/assets/images/article/computer-architecture/memory/virtual-memory/csapp_figure912.png)
:::

#### 页表的结构

每个虚拟页号(VPN)对应一个页表项(PTE)
页表项除了物理页号(PPN)以外还包括有效位、读写许可位、写策略等等字段.

#### TLB的结构

TLB相当于页表的缓存，每一行除了PTE和有效位以外还多若干个标记位。

### 子程序2：物理访存(PA->Data)

```flow
st=>start: 开始(PA)
ed=>end: 结束(Data)
branch1=>condition: Cache命中?
op1=>operation: 访问主存

st->branch1
branch1(yes)->ed
branch1(no)->op1->ed
```

关于Cache命中的细节，见 [计组 - Cache](/zh/posts/computer-science/computer-architecture/memory-hierarchy/cache.md#过程说明) .

## 例子

### EXAMPLE1 - (csapp 9.6.4 综合：端到端的地址翻译)

在这一节里，我们通过一个具体的端到端的地址翻译示例，来综合一下我们刚学过的这些内容，这个示例运行在有一个 TLB 和 L1 d-cache 的小系统上。为了保证可管理性，我们做出如下假设：

- 内存是按字节寻址的。
- 内存访问是针对 1 字节的字的（不是 4 字节的字）。
- 虚拟地址是 14 位长的 $(n = 14)$。
- 物理地址是 12 位长的 $(m = 12)$。
- 页面大小是 64 字节 $(P = 64)$。
- TLB 是四路组相联的，总共有 16 个条目。
- L1 d-cache 是物理寻址、直接映射的，行大小为 4 字节，而总共有 16 个组。

图 9-19 展示了虚拟地址和物理地址的格式。因为每个页面是 $2^{6} = 64$ 字节，所以虚拟地址和物理地址的低 6 位分别作为 VPO 和 PPO。虚拟地址的高 8 位作为 VPN。物理地址的高 6 位作为 PPN。

<!-- <Figure919 /> -->

![](/assets/images/article/computer-architecture/memory/virtual-memory/csapp_figure919.png)

图 9-20 展示了小内存系统的一个快照，包括 TLB（图 9-20a）、页表的一部分（图 9-20b）和 L1 高速缓存（图 9-20c）。在 TLB 和高速缓存的图上面，我们还展示了访问这些设备时硬件是如何划分虚拟地址和物理地址的位的。

- **TLB**。TLB 是利用 VPN 的位进行虚拟寻址的。因为 TLB 有 4 个组，所以 VPN 的低 2 位就作为组索引（TLBI）。VPN 中剩下的高 6 位作为标记（TLBT），用来区别可能映射到同一个 TLB 组的不同的 VPN。
- **页表**。这个页表是一个单级设计，一共有 $2^{8} = 256$ 个页表条目（PTE）。然而，我们只对这些条目中的开头 16 个感兴趣。为了方便，我们用索引它的 VPN 来标识每个 PTE；但是要记住这些 VPN 并不是页表的一部分，也不储存在内存中。另外，注意每个无效 PTE 的 PPN 都用—个破折号来表示，以加强一个概念：无论刚好这里存储的是什么位值，都是没有任何意义的。
- **高速缓存**。直接映射的缓存是通过物理地址中的字段来寻址的。因为每个块都是 4 字节，所以物理地址的低 2 位作为块偏移（CO）。因为有 16 组，所以接下来的 4 位就用来表示组索引（CI）。剩下的 6 位作为标记（CT）。

![](/assets/images/article/computer-architecture/memory/virtual-memory/csapp_figure920_ab.png)

![](/assets/images/article/computer-architecture/memory/virtual-memory/csapp_figure920_c.png)

<!-- 图 9-20 小内存系统的 TLB、页表以及缓存。TLB、页表和缓存中所有的值都是十六进制表示的。 -->

给定了这种初始化设定，让我们来看看当 CPU 执行一条读地址 `0x03d4` 处字节的加载指令时会发生什么。（回想一下我们假定 CPU 读取 1 字节的字，而不是 4 字节的字。）为了开始这种手工的模拟，我们发现写下虚拟地址的各个位，标识出我们会需要的各种字段，并确定它们的十六进制值，是非常有帮助的。当硬件解码地址时，它也执行相似的任务。

![table_VA](/assets/images/article/computer-architecture/memory/virtual-memory/table_VA.png)

开始时，MMU 从虚拟地址中抽取出 VPN（`0x0F`），并且检查 TLB，看它是否因为前面的某个内存引用缓存了 PTE `0x0F` 的一个副本。TLB 从 VPN 中抽取出 TLB 索引（`0x03`）和 TLB 标记（`0x3`），组 `0x3` 的第二个条目中有效匹配，所以命中，然后将缓存的 PPN（`0x0D`）返回给 MMU。

如果 TLB 不命中，那么 MMU 就需要从主存中取出相应的 PTE。然而，在这种情况下，我们很幸运，TLB 会命中。现在，MMU 有了形成物理地址所需要的所有东西。它通过将来自 PTE 的 PPN（`0x0D`）和来自虚拟地址的 VPO（`0x14`）连接起来，这就形成了物理地址（`0x354`）。

接下来，MMU 发送物理地址给缓存，缓存从物理地址中抽取出缓存偏移 CO（`0x0`）、缓存组索引 CI（`0x5`）以及缓存标记 CT（`0x0D`）。

![table_PA](/assets/images/article/computer-architecture/memory/virtual-memory/table_PA.png)

因为组0x5中的标记与CT相匹配,所以缓存检测到一个命中,读出在偏移量CO处的数据字节(0x36),并将它返回给MMU,随后MMU将它传递回CPU。
翻译过程的其他路径也是可能的。例如,如果TLB不命中,那么MMU必须从页表中的PTE中取出PPN。如果得到的PTE是无效的,那么就产生一个缺页,内核必须调入合适的页面,重新运行这条加载指令。另一种可能性是PTE是有效的,但是所需要的内存块在缓存中不命中。

## 小结

计算机体系结构的两种研究视角分别是自底向上和自顶向下。因为我们要实现一个整体目标时，我们需要同时了解实现它所需的低级机制和高级策略。计组的虚拟内存主要讲述了 为了完成"虚拟内存"这个向上的抽象模型，硬件层面用来进行支持的机制: 1. 地址转换; 2. 物理地址访存; 通过亲身掌握更多的细节、底层机制，我们可以对如何做出优秀的高级决策有更多的思考。
