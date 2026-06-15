---
title: English - 文章阅读:My recollection of operating system design
date: 2026-06-13
icon: pen-to-square
category:
  - English
  - article-reading
  - operating-system
tag:
  - red
  - big
  - round
---

# My recollection of operating system design

## EDW1303: 我对操作系统的回忆

 - [[Claude - 论文导读:EWD1303 EDW329](../../../computer-science/exploring-myself/claude-reading-help-for-EWD1303-EWD329.md)]

From, say, 1956 to 1966, I was involved in aspects of what would now be called the design of "operating systems". At the time, those years were exciting, in <ins>retrospect</ins> they are interesting. They were exciting because we were faced with all sorts of challenges of which we did not know whether they could be met at all: some times we succeeded, sometimes we failed. And it is now interesting to see how long it took for some key concepts to emerge and how ==<ins>separable</ins> (and eventually separated)== problems remained for many years <ins>intertwined</ins>, <ins>solely</ins> because they had presented themselves together. (For many years, for instance, ==<ins>non-determinacy</ins>== and ==concurrency== were always closely linked: the one was never considered without the other.)

In what follows, I shall try to provide my recollections with all the background information needed to understand the story.


:::note

 - retrospect - 回顾，回想
 - non-determinacy - 不确定性
 - concurrency - 并发

例如，从1956年到1966年，我参与了如今被称为“操作系统设计”的一些工作。当时那几年令人振奋，回顾起来也十分有趣。之所以令人兴奋，是因为我们面临各种各样的挑战，而这些挑战的成败我们甚至不确定能否实现：有时成功，有时失败。如今看来，有趣的是某些关键概念的出现究竟花了多长时间，以及许多问题为何长期纠缠在一起，直到后来才被分离（或最终分离开来），仅仅因为它们曾同时出现。（例如，多年来非确定性与并发性始终紧密相连：其中一种情况若没有另一种就无法被考虑。）

接下来，我将尽力提供所有必要的背景信息，以便理解这个故事。

:::

### The source of the problems - 这些问题的起源

- [[Claude - help1](Claude-help-for-EWD1303.md)]

In Amsterdam, at the Mathematical Center, I started programming for binary machines for which an electric <ins>typewriter</ins> with <ins>electromagnets</ins> under the keys was the <ins>primary</ins> output device. The first machine could operate 16 keys of the typewriter: the 10 decimal digits, plus, minus, <ins>period</ins>, space, <ins>tabulate</ins> and NLCR(= New Line Carriage Return), <ins>the second one had access to the entire keyboard.</ins> $\text{\color{Blue}The type instruction pulled the key identified by the 4 (6) least significant digits of the A-register (= main Accumulator); these bits were chosen because that was the place where the conversion process from binary to decimal representation would produce each time the binary representation of the next digit to be typed.}$

:::note

 - primary - 主要的
 - period - 小数点
 - tabulate - Tab键, 制表符

在阿姆斯特丹的数学中心，我开始为二进制机器编写程序。这种机器的主要输出设备是一台带有按键下方电磁铁的电传打字机。第一台机器只能操作打字机上的16个按键：包括10个十进制数字、加号、减号、小数点、空格、制表符以及换行符（即NLCR）。第二台机器则可以使用整个键盘。输入指令通过A寄存器（主累加器）中最低4位（或6位）的数字来识别对应的按键；这些位被选中是因为每次从二进制转换为十进制表示时，都会在此处生成下一个要输入数字的二进制形式。

:::

![fig 1](/assets/images/Eng/article-reading/EWD1303/fig1.png)

Between the 4 flip-flops of the A-register and typewriter was a "decoder", i.e. , a device with 4 input wires and 16 output wires: the combination of the signals on the 4 input wires would determine which one of the 16 output wires could activate its electromagnet. 

In the above arrangement, the A-register is either available for calculation or has to control the decoder, and thus the machine as a whole is a strictly ==sequential== device in which ==calculating and typing alternate==.

Mechanical devices as type writers being as slow as they are, the decoder needs for each character typed its input for 100ms, which by electronic standards is a long period of time: it is a pity to force for that whole period the calculator to idleness. This can be <ins>remedied</ins> for the price of introducing a 4-bit "output register":

![fig2](/assets/images/Eng/article-reading/EWD1303/fig2.png)

At the beginning of the execution of the type instruction, the least-significant bits of A are copied into the output register at electronic speed, and then, during the next 100 ms, two independent processes take place concurrently: having the A-register at its full <ins>disposal</ins>, the <ins>unhampered</ins> calculator continues to calculate at electronic speed, while under control of the output register the mechanical typewriter types the character.  (The maximum gain in speed - rarely achieved in practice —— is a factor of 2, but the price of an extra output register is not negligible when each flip-flop requires 2 radio values. I don't remember whether my first machine had such an output register, but the second machine had one of 6 bits. Sheer luxury!)




:::note
在A寄存器的4个翻转开关与打字机之间，有一个“解码器”，即一个具有4条输入线和16条输出线的装置：通过组合4条输入线上的信号，可以确定哪一条16条输出线中的电磁铁会被激活。
在上述结构中，A寄存器要么可用于计算，要么必须控制解码器，因此整个机器是一种严格顺序的装置，计算与打字交替进行。

由于机械式打字机速度较慢，每个字符的输入需要100毫秒才能被解码，按照电子标准来看这是一段相当长的时间：强制计算器在此期间保持闲置是令人遗憾的。这种情况可以通过引入一个4位“输出寄存器”来解决：

[图2]

在执行类型指令的开始时，A寄存器的低位以电子速度被复制到输出寄存器中。随后，在接下来的100毫秒内，两个独立的过程同时进行：计算器在A寄存器完全可用的情况下继续以电子速度计算，而机械打字机则在输出寄存器的控制下逐个按键输入字符。（理论上速度的最大提升——实际中极少实现——可达2倍，但每个触发器需要2个无线电值，因此额外增加一个输出寄存器的成本不容忽视。我不记得我的第一台机器是否具备这样的输出寄存器，但第二台机器拥有6位的输出寄存器。纯粹的奢侈！）

<script setup>
import DijkstraConcurrency from "@source/.vuepress/components/DijkstraConcurrency.vue"

</script>

<DijkstraConcurrency />

 - [[YouTube - CONCURRENCY IS NOT WHAT YOU THINK](https://www.youtube.com/watch?v=3X93PnKRNUo)]

:::

In the above description, I skipped a minor problem: I said that during those 100 ms "having the A-register at its full disposal, the unhampered calculator continues to calculate" but what if, during those 100 ms it tires to execute another type instruction? This would change the contents of the output register and hence <ins>interfere</ins> with the process of printing the current character. Perhaps even typewriter arms could get <ins>entangled</ins>!

What to do? We can leave the calculator unhampered but burden the programmer with the obligation not to write —— not even accidentally! —— programs that might entangle typewriter arms, but this option is generally considered to be unacceptable. The arrangement would violate the reasonable requirement that no (cheap) program should be able to damage your (expensive) machine. It would have a further disadvantage of a type that was recognized only later: suppose that a technical improvement would speed up the calculator by a factor of 2, then, as a result, a formerly acceptable program could now damage the typewriter by executing a next type instruction too soon. (This is called "a real-time consideration". We'll return to this issue later.)

:::note

在上述描述中，我忽略了一个小问题：我说在那100毫秒内“A寄存器完全可用，计算器可以不受阻碍地继续计算”，但如果在这100毫秒内它试图执行另一种类型的指令呢？这会改变输出寄存器的内容，从而干扰当前字符的打印过程。甚至打字机的机械臂都可能因此缠绕起来！
该怎么办？我们可以让计算器不受限制地运行，但要让程序员承担起不编写程序的责任——哪怕只是偶然的错误！——==以免写出可能使打字机手臂缠绕的程序==。不过，这种做法通常被认为不可接受。因为这会违背一个合理的前提：==任何（廉价）程序都不应能损坏你的（昂贵）机器==。此外，还存在另一个问题：这种类型只能在之后才被识别出来。<ins>例如，如果技术改进能使计算器速度提高一倍，那么原本可以接受的程序现在可能会因执行下一条指令过早而损坏打字机。（这被称为“实时考虑”。我们稍后会回到这个问题。）</ins>

:::

The next alternative is a little hardware extension that conditionally <ins>hampers</ins> the calculator indeed: during the 100 ms, the calculator can work at full speed unless it tries to execute a type instruction, for in that case it is instantly frozen and only allowed to proceed after the 100 ms have expired. (Depending on the mechanical properties of the typewriter, it could be that a period of 100 ms is not homogeneously appropriate: because of movement of the carriage, TAB and NLCR might need more time. If so, the period's dependence on the "character" typed should be incorporated in the hardware extension if we want to keep the programming of the calculator free of real-time considerations.)
<!-- EDW1303-5 -->

I would like to stress that with this conditional freezing of the calculator, we have achieved CCC (= Completely <ins>Concealed</ins> Concurrency) in the sense that our two machines (i.e., with and without the output register) are now functionally equivalent in the sense that, fed with the same program, they will produce exactly the same output. As long as speed of execution is unobservable, it is impossible to determine which of the two machines did execute your program. (Hence the name CCC.)


Thus CCC improved the efficiency by allowing the simultaneous activity of temporarily independent system components without any of the potential complications of concurrency, and that was its great <ins>virtue</ins>, but the comfortable invisibility of concurrency had a high price.

The first machine in which I saw that price paid in full was the Telefunken TR4. It incorporated CCC on a scale much more <ins>grandiose</ins> than the 4- or 6-bit output register I just described. The store of the TR4 was partitioned into 8 or 16 banks —— I don't remember the exact number —— and the central processor could initiate a communication action —— say reading or punching a punched card —— involving information between the communication device and a specified <ins>storage bank</ins>. During the information transport the CPU could continue calculating as long as it did not address that specified bank; when it did, it would be held up until the communication action had been completed. Several communication actions could be active simultaneously provided they each had their own bank. It was CCC in its full glory. 

:::note

 - bank - 存储区 (独立分区)

下一个方案是一个小小的硬件扩展，它会有条件地阻止计算器运行：在这100毫秒内，计算器可以全速工作，除非它试图执行一条打字指令——在那种情况下，它会被立即冻结，只有等100毫秒到期后才能继续。（根据打字机的机械特性，100毫秒这个时长未必对所有字符都同样适用：由于滑架的移动，TAB键和换行回车键可能需要更长的时间。如果是这样，这个时长对所打"字符"的依赖关系就应该纳入硬件扩展中——如果我们想让计算器的编程不受实时因素的干扰的话。）

我想强调的是，通过这种对计算器的条件性冻结，我们实现了CCC（即"完全隐藏的并发性"）——在这个意义上，我们的两台机器（即有输出寄存器和没有输出寄存器的两种）现在在功能上是等价的：给定相同的程序，它们将产生完全相同的输出。只要执行速度是不可观测的，就无法判断到底是哪台机器执行了你的程序。（这也是CCC这个名字的由来。）

CCC通过允许暂时独立的系统组件同时活动来提升效率，同时规避了并发性带来的各种潜在复杂问题，这是它最大的优点。但是，这种让并发性舒适地隐于无形的做法，代价是高昂的。

我第一次亲眼看到这个代价被完全付出的机器，是Telefunken TR4。它将CCC实现在了一个远比我刚才描述的4位或6位输出寄存器宏大得多的规模上。TR4的存储器被划分为8或16个存储区——我记不清确切的数字了——中央处理器可以发起一个通信动作——比如读取或打孔一张穿孔卡片——涉及通信设备与某个指定存储区之间的信息传输。在信息传输期间，CPU可以继续计算，只要它不访问那个指定的存储区；一旦它访问了，就会被挂起，直到通信动作完成为止。多个通信动作可以同时处于活动状态，前提是它们各自占用不同的存储区。这就是CCC在其全盛形态下的样子。

:::

Consider now a program that has to process many punched cards, while the order in which this happens is <ins>irrelevant</ins> —— say we are adding voting counts —— . Suppose furthermore that the machine is fast enough to engage all its card readers in this process; in that case we would like todo that, with each card reader running at its maximum speed most of the time. Note (i) that the card readers, being independent pieces of equipment, cannot be expected to have the same speeds, and (ii) that a card reader's speed need not be constant, as it is zero when the input <ins>tray</ins> is empty.

To maximize throughput, we would like each reader to read at its maximum speed most of the time, which means that the calculator should issue for each reader the next communication command as soon as possible after the completion of its preceding communication action. In particular, with the calculator idling for lack of input, one would like it to continue as soon as one of the readers has completed its input actions, but with CCC, the calculator has no means of identifying that input stream: the invisibility of concurrency has made the notion of "first-come-first-served" inapplicable. The moral of the story was that, essentially for the sake of efficiency, concurrency should become somewhat visible. It became so, and then, all hell broke loose.

:::note

现在考虑一个需要处理大量打孔卡片的程序，而处理顺序并不重要——例如我们正在统计投票结果。假设此外，机器足够快，能够同时启用所有读卡器来完成这一过程；在这种情况下，我们希望让每个读卡器尽可能长时间地以最高速度运行。请注意：(i) 由于读卡器是独立的设备，因此不能期望它们具有相同的运行速度；(ii) 读卡器的速度不一定恒定，当输入托盘为空时，其速度为零。
为了最大化吞吐量，我们希望每个读取器大多数时间都能以最高速度进行读取，这意味着计算器应在每个读取器完成前一次通信操作后，尽快向其发出下一次通信指令。特别是当计算器因无输入而处于空闲状态时，我们希望它在任一读取器完成输入操作后立即继续运行；但采用CCC（并发控制）机制时，计算器无法识别该输入流：并发的不可见性使得“先到先服务”的概念不再适用。归根结底，出于效率考虑，并发应变得相对可见。事实正是如此，随后一切陷入混乱。

:::




### Pandora's box

### An interlude

### Multiprogramming



### _d






