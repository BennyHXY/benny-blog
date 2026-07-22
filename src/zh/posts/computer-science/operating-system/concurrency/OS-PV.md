---
title: OS -  信号量
icon: pen-to-square
date: 2026-07-20
category:
  - computer-science
  - operating-system
  - concurrency
tag:
  - 红
  - 小
  - 圆
---

# OS - 信号量

## 前置

### 并发

:::note 并发关键术语: 临界区、竞态条件、不确定性、互斥执行

- **临界区(critical section)** 是访问共享资源的一段代码，资源通常是一个变量或数据结构。
- **竞态条件(race condition)** 出现在多个执行线程大致同时进入临界区时，它们都试图更新共享的数据结构，导致了令人惊讶的（也许是不希望的）结果。
- **不确定性(indeterminate)** 程序由一个或多个竞态条件组成，程序的输出因运行而异，具体取决于哪些线程在何时运行。这导致结果不是确定的(deterministic)，而我们通常期望计算机系统给出确定的结果。
- 为了避免这些问题，线程应该使用某种**互斥(mutual exclusion)**原语。这样做可以保证只有一个线程进入临界区，从而避免出现竞态，并产生确定的程序输出。

:::

### 经典同步问题
 - 生产者-消费者
 - 读者-写者
 - 哲学家就餐
 - 见 [OS - 经典同步问题]



## 信号量: Wait 和 Post 的定义


 - P(wait, 等待):
```cpp
int sem_wait(sum_t *s) {
  decrement the value of semaphore s by one
  wait if value of semaphore s is negative
}
```

 - V(signal, 唤醒):

```cpp
int sem_post(sem_t *s) {
    increment the value of semaphore s by one
    if there are one or more threads waiting, wake one
}

```





## 题目


### 真题_recv
 - >(2022.46) 某个进程的两个线程T1和T2并发执行A、B、C、D、E和F共六个操作, 其中T1执行A、E和F, T2执行B、C和D。...
   - 执行操作的先后约束条件 (PV)
 - >(2023.45) 现要求学生使用swap指令和布尔型变量lock，实现临界区互斥。...
   - 临界区互斥，某个变量/数据结构同时只能被一段代码访问，不能被多段代码访问。
   - $\color{Red}{\text{硬件指令的原子性}}$
 - >(2024.46) 计算机系统的进程之间往往需要相互协作以完成一个任务, 在某网络系统中缓冲区B用于存放一个数据分组，对B的操作有C1,C2和C3。 ...
   - 临界区的概念
   - PV ， 除了维护资源的约束条件(缓冲区为空时才执行C1，不为空才执行C2、C3)以外，还需要一个信号量mutex维护同时只有一个进程在访问缓冲区B(互斥锁的功能)。
 - >(2021.45) 下表给出了整型信号量S的wait()和signal()操作的功能描述，以及采用开/关中断指令实现信号量操作互斥的两种方法。...
   - 为什么在wait()和signal()操作中对信号量S的访问必须互斥执行? -> 因为多个进程共享一个变量就要互斥执行。。
   - 查看给出代码判断是否正确 -> while死循环的错误
   - $\color{Red}{\text{用户程序}}$不能使用开/关中断指令实现临界区互斥，因为开/关中断指令是特权指令，只能在内核态下执行。
 - >(2020.45) 现有5个操作A、B、C、D和E, 操作C必须在A和B完成后执行，操作E必须在C和D完成后执行。...
   - 执行操作的先后约束条件 (PV)
 - >(2019.43) 有n($n \geq 3$)位哲学家坐在一张圆桌边，每位哲学家交替地就餐和思考。...
   - 哲学家改编题，除了筷子还有碗，PV，防死锁。
   - ans_myself
    ```cpp
        semaphore chopstick[n] = {1,1,1, ... , 1} //每位哲学家(编号i)左侧筷子的编号为i，右侧筷子为(i+1)%n.
        semaphore bowl = m //中心的碗的数量
        semaphore mutex = 1     //同时只让1位哲学家拿餐具，防死锁
        
        哲学家 i {
            while(1) {
                P(mutex)
                P(bowl)
                P(chopstick[i])
                P(chopstick[(i + 1) % n])
                V(mutex)
                就餐;
                V(bowl)
                V(chopstick[i])
                V(chopstick[(i + 1) % n])
                思考;

            }
        }
        
    ```
    - ans_std:
       - 通过限制同时只有min(n-1,m)个哲学家在拿餐具来实现防死锁。
       - n-1的限制条件可以保证至少有一个哲学家可以获得两根筷子顺利进餐
       - ...
    ```cpp
        semaphore bowl; // 用于协调哲学家对碗的使用
        semaphore chopstick[n]; // 用于协调哲学家对筷子的使用
        for(int i = 0; i < n; i++) 
            chopstick[i] = 1;
        bowl = min(n-1, m);
        
        CoBegin
        while(TRUE) {
            思考;
            P(bowl);
            P(chopstick[i]);
            P(chopstick[(i+1)%n]);
            就餐;
            V(chopstick[i])
            V(chopstick[(i+1)%n]);
            V(bowl);
        }
        CoEnd

    ``` 
    
  - >2018 无
  
  - >(2017.46) 某进程中有3个并发执行的线程thread1、thread2和thread3, 其伪代码如下所示。 ...

:::details ans_myself_1 读者-写者-废案

```cpp
    semaphore wx = 1; // x的写状态，1 - x没有写者排队/再写 ， 0 - x正在被写/有写者排队
    semaphore wy = 1; // y的写状态, 同理
    semaphore wz = 1; // z的写状态，同理

    x_reader = 0 //x的读者数
    y_reader = 0 //y的读者数
    z_reader = 0 //z的读者数

    CoBegin
    
    thread3 {
        cnum w;
        w.a = 1;
        w.b = 1;
        
        P(wz);    //更新写状态
        while(z_reader != 0);    //如果有读者，等待读者读完再写
        
        z = add(z, w);

        V(wz);

        P(wy);
        while(y_reader != 0);

        y = add(y, w);

        V(wy);
        
        ...

    }
    
    thread1 {
        cnum w;

        while(wx == 0) ; //如果要读的变量在写，等待写完
        x_reader++;
        while(wy == 0) ; //同理
        y_reader++;
        w = add(x, y);
        --x_reader;
        if(x_reader == 0) V(wx); //如果
        --y_reader;
        if(y_reader == 0) V(wy);
        
    }        

    thread2 {
        cnum w;
        while(wz == 0) ; //如果要读的变量在写，等待写完
        z_reader++;
        while(wy == 0) ; //同理
        y_reader++;
        w = add(y, z);
        --z_reader;
        if(z_reader == 0) V(wz); //如果
        --y_reader;
        if(y_reader == 0) V(wy);
    }

    CoEnd
```

:::



  - ans_myself_2 - $\color{Red}{\text{y的互斥关系}}$

    ```cpp
        semaphore mutex_y_13 = 0; // y不能同时被1、3访问
        semaphore mutex_y_23 = 0; // y不能同时被2、3访问
        semaphore mutex_z_23 = 0; // z不能同时被2、3访问

        CoBegin

        thread1 {
            cnum w;
            P(mutex_y_13);
            w = add(x, y);
            V(mutex_y_13);
            
        }        

        thread2 {
            cnum w;
            P(mutex_y_23);
            P(mutex_z_23);
            w = add(y, z);
            V(mutex_y_23);
            V(mutex_z_23);
        }

        thread3 {
            cnum w;
            w.a = 1;
            w.b = 1;

            P(mutex_z_23);
            z = add(z,w);
            V(mutex_z_23);

            P(mutex_y_13);
            P(mutex_y_23);
            w = add(y, w);
            V(mutex_y_13);
            V(mutex_y_23);
            
            
        }


    CoEnd

    ```
    - ans_std: 几乎同ans_myself_2.




## 小结

 - 并发的问题模型:
   - 不能有多段代码同时访问同一个变量/数据结构。如果有这个可能，这些访问的代码就称为**临界区**。我们在临界区周围加上一些互斥锁/信号量之类的机制，保证对变量的访问是合法的。
   - 在讲到信号量之前，我们讲了一些关于 自旋锁、硬件指令之类的低级机制。(我没太搞懂。...)
   - 硬件指令的**原子性**:
     - 以`swap`为例，软件实现的`swap(a, b)`通常由3个句子组成:
     ```cpp
        t = a;
        a = b;
        b = t;
     ```
    这几个句子之间存在被打断的可能，例如第一句话t = a 执行完成后， 假设CPU切换到另一个线程，并且这个线程改变了b或t的值，那么这个`swap`的执行效果就不如预期(将原本的a、b两个变量中的值进行交换)了。硬件指令能够实现这种**原子性愿望**，在一瞬间交换两个变量的值。
      
 - 信号量:
   - 有时候，这个限制条件并不是“一个变量同时只能被一个线程访问”，而是“一个变量同时只能被不超过n个线程访问”。总之，这个关系并不是严格的互斥，信号量是一种强大的机制，它可以更加灵活的实现各种变化的条件(比起互斥锁)。 ...

 - 死锁/活锁:
   - ...

dadadadada 希言加油 ！

