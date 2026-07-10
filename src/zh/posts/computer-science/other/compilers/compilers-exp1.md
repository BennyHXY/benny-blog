---
title: 编译原理 - 开源词法分析程序阅读
icon: pen-to-square
date: 2026-04-30
category:
  - computer-science
  - compilers
  - words-segmentation
tag:
  - 红
  - 小
  - 圆
---

## 任务背景

```text
实验一      开源词法分析程序阅读
（开放实验      4学时）
1.	实验目的
了解中文信息处理的语义分析方法，理解短语、句子、段落、篇章语义分析算法。

2.	实验内容
      基于开源中文信息处理库jieba或者hanlp 程序包，理解自然语言处理中相关词法分析、句法分析、语义分析等应用模块，实现基本的语言识别。
3.	实验要求：
1)	下载开源程序包，阅读程序，理清程序逻辑，画出程序逻辑图。
2)	理解词库构成方法和新词发现程序逻辑。
```

## jieba - 代码仓库

 - [https://github.com/fxsjy/jieba]

以下是 README 阅读笔记：

### 特点

:::note features
 - 四种分词模式
   - ==精确模式==: 试图将句子最精确地切开，适合文本分析；
   - ==全模式==: 把句子中所有的可以成词的词语都扫描出来, 速度非常快，但是不能解决歧义；
   - 搜索引擎模式: 在精确模式的基础上，对长词再次切分，提高召回率，适合用于搜索引擎分词。
   - paddle模式: 利用PaddlePaddle深度学习框架，训练序列标注（双向GRU）网络模型实现分词。同时支持词性标注。
 - 繁体分词
 - 自定义词典
 - MIT授权协议
:::

### 算法

:::note algorithm-list
 - 基于==前缀词典==实现高效的词图扫描，生成句子中汉字所有可能成词情况所构成的==有向无环图 (DAG)==
 - 采用了<ins>==动态规划== 查找最大概率路径</ins>, 找出基于词频的最大切分组合
 - 对于==未登录词==，采用了基于汉字成词能力的 ==HMM 模型==，使用了 Viterbi 算法
:::

### 主要功能

:::note function-list
1. ==分词==
2. ==添加自定义词典==
3. 关键词提取
4. 词性标注
5. 并行分词
6. 返回词语在原文的起止位置
7. ChineseAnalyzer for Whoosh 搜索引擎
8. 命令行分词

:::

这部分的细节将在接下来的源码阅读部分继续给出。

## 源码阅读

### 分词

- `__init__.py` (289 ~336 行)

```python
    def cut(self, sentence, cut_all=False, HMM=True, use_paddle=False):
        """
        The main function that segments an entire sentence that contains
        Chinese characters into separated words.

        Parameter:
            - sentence: The str(unicode) to be segmented.
            - cut_all: Model type. True for full pattern, False for accurate pattern.
            - HMM: Whether to use the Hidden Markov Model.
        """
        is_paddle_installed = check_paddle_install['is_paddle_installed']
        sentence = strdecode(sentence)
        if use_paddle and is_paddle_installed:
            # if sentence is null, it will raise core exception in paddle.
            if sentence is None or len(sentence) == 0:
                return
            import jieba.lac_small.predict as predict
            results = predict.get_sent(sentence)
            for sent in results:
                if sent is None:
                    continue
                yield sent
            return
        re_han = re_han_default
        re_skip = re_skip_default
        if cut_all:
            cut_block = self.__cut_all
        elif HMM:
            cut_block = self.__cut_DAG
        else:
            cut_block = self.__cut_DAG_NO_HMM
        blocks = re_han.split(sentence)
        for blk in blocks:
            if not blk:
                continue
            if re_han.match(blk):
                for word in cut_block(blk):
                    yield word
            else:
                tmp = re_skip.split(blk)
                for x in tmp:
                    if re_skip.match(x):
                        yield x
                    elif not cut_all:
                        for xx in x:
                            yield xx
                    else:
                        yield x
```

## 小结

不知道。 作业通过了。