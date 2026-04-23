---
title: 文献阅读 - 2026年4月17日李巍老师给我的三篇文献
icon: pen-to-square
date: 2026-04-23
category:
  - literature-reading
  - Named-Entity-Recognition
tag:
  - 红
  - 小
  - 圆
---
# 文献阅读 - 2026年4月17日李巍老师给我的三篇文献

## 任务背景
2026年4月17日李巍老师给我的三篇文献.
> 希言，这是我们组最近的成果，和一篇综述论文，你先看一下，看看能不能看得懂。
>  - Long和Li - 2026 - A Chinese Named Entity Recognition Dataset for Intangible Cultural Heritage.pdf
>  - Ma 等 - 2026 - Attention-Weighted Hierarchical Decoding for Few-Shot Semantic Segmentation A Case Study on Batik C.pdf
>  - Rustad 等 - Systematic Literature Review on Named Entity Recog.pdf

下面是对每个章节的图表和公式的汇总，以及少许评注(多半来自AI). 带_myself后缀的节是我做的阅读总结.

---
## 文献1(综述论文): Rustad 等 - Systematic Literature Review on Named Entity Recognition: Approach, Method, and Application
 - 关于命名实体识别的系统文献综述：Approach, method 和应用 (36页)
 - [AI阅读指导 -《Systematic Literature Review on Named Entity Recognition》](AI-help-for-reading-SLR-on-NER.md)

### 1 Introduction
命名实体识别(NER) 是   自然语言处理(NLP) 中的一个预处理阶段，
NER的task包括实体识别和实体分类，这样就把处理非结构化文本的问题转化为了处理结构化文本的问题

**图表:**
- Figure 1. NER Phase.
  ![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_02_图像_0001.png)
  ```text
    NER周期:
    [真实世界的语料库] => [预处理] => [特征提取] => [NER Method] => [评估]
  ```
- Figure 2. SLR Phase.
    ![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_03_图像_0001.png)
  ```text
    Planning -> Selection -> Extraction -> Execution
    规划 -> 选择 -> 提取 -> 执行
  ```

### 2 Method
#### 2.1 Review method
...规划阶段包含确定 ==PICOC== 标准，如表 1 所示。
 >...as shown in Figure 2 The planning stage contains the determination of ==PICOC== criteria, as shown in Table 1.

#### 2.2 Research question, QR

**图表:**
 - Table 1. ==PICOC== Criteria.
    
  |  |  |
  |---|---|
  | Population - 患者群体(研究对象) | Named Entity Recognition, Entity Extraction |
  | Intervention - 干预措施(具体技术手段) | Approach or method preprocessing, dataset or corpus, feature extraction, feature decomposition, classification, and optimization in NER |
  | Comparison - 对照组(其他的方法) | - |
  | Outcomes - 评价指标 | Method performance |
  | Context - 领域(情景，上下文) | Studies in general and domain specific |

  ```text
    P - Population
    I - Intervention
    C - Comparison
    O - Outcomes
    C - Context
  ```
:::details 注 from_deepseek: PICOC解释
| 维度 | 全称 | 在 NER 研究中的具体含义 |
|------|------|--------------------------|
| **Population** | 研究对象 / 目标实体 | <ul><li>需要识别的实体类型，如人名、地名、组织名、医疗术语、产品名等。</li><li>也可泛指研究应用的领域（生物医学、金融、法律等）。</li></ul> |
| **Intervention** | 干预 / 采用的方法 | <ul><li>预处理（分词、标注规范等）</li><li>数据集或语料库（来源、规模、标注质量）</li><li>特征提取（词性、上下文、词典等）</li><li>特征分解（降维、嵌入等）</li><li>分类算法（CRF、BiLSTM、BERT 等）</li><li>优化策略（超参数调优、损失函数设计等）</li></ul> |
| **Comparison** | 对照 / 比较基准 | <ul><li>传统机器学习方法（HMM、CRF）</li><li>深度学习方法（LSTM、Transformer）</li><li>基线系统（规则、词典匹配）</li><li>不同特征组合或预处理策略</li></ul> |
| **Outcome** | 结果 / 性能指标 | <ul><li>精确率（Precision）</li><li>召回率（Recall）</li><li>F1 分数（F1-score）</li><li>准确率（Accuracy）</li><li>推理速度、模型大小等工程指标</li></ul> |
| **Context** | 背景 / 应用场景 | <ul><li>通用 NER（新闻、网页文本）</li><li>领域特定 NER（医疗病历、科研论文、社交媒体、法律文书等）</li><li>语言、数据分布、标注规范等上下文约束</li></ul> |

```

:::

:::details 注：PICO
PICOC 可能来源于 PICO  : [百度百科 - PICO(循证医学文献检索结构化框架)](https://baike.baidu.com/item/PICO/16244242)
```text
Population - 患者群体
Intervention - 干预措施
Comparison - 对照措施
Outcome - 结局指标
:::

 - Table 2. Research question.

| RQ number | Research Question | Goal |
| --- | --- | --- |
| RQ1 | What journal publish NER articles? | Identify which journals publish the most NER articles. |
| RQ2 | Who are the most <ins>prolific</ins> NER-themed writers? | Identify the authors who have published the most NER articles. |
| RQ3 | What are the most widely used preprocessing methods? | Identify the preprocessing methods that NER researchers widely use. |
| RQ4 | What datasets do the researchers use in NER? | Identify datasets that are popular and widely used for NER research. |
| RQ5 | Where is the NER application domain used? | Identify popular application domains in NER research. |
| RQ6 | What are the feature extraction methods widely used in NER? | Identify which NER researchers widely use feature extraction methods. |
| RQ7 | What approaches do the researchers widely use to solve the NER problem? | Identify what approaches the researchers widely use to solve NER problems. |
| RQ8 | What methods do the researchers widely implement to solve NER problems? | Identify widely implemented methods to solve NER problems. |
| RQ9 | What evaluation techniques do researchers use widely to measure NER performance? | Identify widely used evaluation techniques to measure NER performance. |


 ```text
    RQ1 - 哪些期刊发表 NER 文章 ？
    RQ2 - 谁是最多产的 NER 作者？
    RQ3 - 最常用的数据预处理方法？
    RQ4 - 研究人员在 NER 中使用哪些数据集？
    RQ5 - ... 应用领域？
    RQ6 - NER 中广泛使用的特征提取方法？
    RQ7 - 研究人员广泛采用哪些 approach 处理 NER 问题？
    RQ8 - 研究人员广泛采用哪些具体的 method 处理 NER 问题？
    RQ9 - 研究人员广泛采用什么评估技术衡量 NER 性能 .
 ```
#### 2.3 Research strategy

#### 2.4 Study selection
**图表:**
 - Figure 3. Journal search and selection phase.
    ![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_05_图像_0001.png)
 ```text
    文献筛选流程图
 ```
#### 2.5 Data extraction

### 3 Result and Analysis
#### 3.1 Journals publishing NER articles

**图表:**
 - Figure 4. NER publications from 2011 to 2022
    ![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_06_图像_0001.png)
  ```text
    每个年份总出版NER论文数量的折线图,(数量)2020~2022随深度学习方法热度迅速崛起.
  ```

 - Figure 5. List of journals that publish NER articles.
    ![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_06_图像_0002.png)
  ```text
    每个期刊发表论文数量的柱状图.
  ```
#### 3.2 Active and influential researchers on NER topics

<!-- ...阿西夫和斯里帕娜的命名实体识别研究活动在 2011 年至 2016 年期间占据主导地位。2017 年，这两位研究人员开始减少该命名实体识别课题的出版强度，深度学习方法开始占据主导地位。
> Asif and Sriparna’s NER research activities dominated from 2011 to 2016. In 2017, the two researchers began to decrease the intensity of publication of the NER topic, where the deep learning approach began to dominate. -->

**图表:**
 - Figure 6. The authors with the most NER articles.
    ![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_07_图像_0001.png)
  ```text
    统计作者一二作者身份的堆叠柱状图.
  ``` 
#### 3.3 NER reprocessing techniques

- Figure 7. Various NER preprocessing techniques. Horizontal axes indicate several publications using these techniques.
    ![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_08_图像_0001.png)
  ```text
    统计NER预处理技术在出版文章中使用次数的条形图.
  ```
:::details from deepseek: Figure 7 数据解读：NER 预处理技术术语及频次统计

| 英文术语 | 中文名称 | 原文统计频次 | 简要解释（本科生友好版） |
| :--- | :--- | :---: | :--- |
| **Tokenization** | 分词 / 词例化 | 47 | 把句子切成一个个独立的词汇单元。这是 NER 任务里使用最广泛的预处理步骤。 |
| **POS-Tagging** | 词性标注 | 33 | 给每个词贴上名词、动词、形容词的语法标签。NER 特别喜欢名词，因为人名地名大多是名词。 |
| **Cleaning** | 数据清洗 | 20 | 去掉 HTML 标签、广告、乱码等脏东西，只保留干净的文本内容。 |
| **Sentence Segmentation** | 句子分割 | 15 | 根据句号、问号、感叹号把大段落切成独立的句子，便于逐句分析处理。 |
| **Sentence Splitting** | 句子切分 | 7 | ⚠️ 与上述 **Sentence Segmentation** 为完全同义词。因原文作者用词差异被分开统计。 |
| **Stopword Removal** | 停用词移除 | 12 | 去掉“的、了、是”这种高频但无实际意义的虚词，减少计算噪音。 |
| **Lemmatization** | 词形还原 | 8 | 温柔变回词典原形。比如 "Studies" 找回 "Study" 这个真词。比 Stemming 更准但稍慢。 |
| **Chunking** | 组块分析 | 6 | 把词组成短语块。对于多词构成的机构名、电影名、书名很有帮助。 |
| **Stemming** | 词干提取 | 5 | 粗暴砍掉词缀尾巴。比如 "Studies" 砍成 "Studi"，速度快但不保证是真词。 |
| **Normalization** | 规范化 / 归一化 | 4 | 把不同写法的同一个东西统一标准。比如全角半角、大小写、繁简体。 |

:::

#### 3.4 Dataset on NER topics

 - Figure 8. Use of private and public datasets from year to year.
![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_10_图像_0001.png)

 - Figure 9. Use of public and private datasets.
![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_10_图像_0002.png) 

 - Figure 10. Popular NER datasets.
![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_10_图像_0003.png)

:::details from deepseek: Figure 10 数据解读：主流 NER 数据集及所属领域
| 数据集名称 | 所属领域 | 主要实体类型 | 简要说明 |
| :--- | :--- | :--- | :--- |
| **CoNLL2003** | 通用领域 | 人名 (PER)、地名 (LOC)、机构名 (ORG)、杂项 (MISC) | NER 评测的金标准数据集，标注平衡，被广泛用于基准测试。 |
| **JNLPBA** | 生物医学领域 | 蛋白质、DNA、RNA、细胞系、细胞类型 | 分子生物学方向的主要评测数据集，源自生物医学文献摘要。 |
| **NCBI** | 生物医学领域 | 疾病名称 | 疾病实体识别任务的基准数据集，标注质量高。 |
| **BioCreative (BC2GM)** | 生物医学领域 | 基因 / 蛋白质提及 | 基因实体识别任务，由 BioCreative 评测任务提供。 |
| **GENIA** | 生物医学领域 | 生物源、生物物质、细胞成分等 | 最早期的生物医学 NER 语料库之一，标注体系精细。 |
| **CCKS** | 生物医学领域（中文） | 症状、检查、诊断、治疗、药物 | 中国知识图谱与语义计算大会提供的临床电子病历中文 NER 数据集。 |

**观察笔记**：
> 图 10 统计的七个高频数据集中，**仅 CoNLL2003 属于通用领域**，其余六个全部集中在**生物医学与健康领域**。这从数据资源侧印证了 Table 5 的发现：医疗健康是 NER 研究中最受关注的应用领域。

:::

 - Table 3. Dataset comparison statistic

| Dataset| Tokens | entity frequency | Entity type |
| --- | --- | --- | --- |
| CoNLL-2023 | 23499 | 11.6% | 4 |
| OntoNotes 5.0| 81828 | 7.5% | 18 |
| WNUT-17 | 3160 | 5.9% | 6 |

 - Table 4. Data used based on languages.

| Language | Amount |
| --- | --- |
| English - 英语 | 204 |
| Chinese - 中文 | 86 |
| Arabic - 阿拉伯语 | 10 |
| Indian - 印度语言 | 9 |
| Spanish - 西班牙语 | 7 |
| Korean - 韩语 | 7 |
| Portuguese - 葡萄牙语 | 3 |
| Persian - 波斯语 | 3 |
| Turkish - 土耳其语 | 2 |
| Indonesian - 印度尼西亚语 | 2 |

:::details from deepseek: 关于“没有日语数据集”的深度分析
您观察得非常准。作为亚洲乃至全球 NLP 研究重镇的日本，竟然没有出现在这篇综述的 Top 10 语言列表中（仅有 2 篇以上的语种才能进表），这看起来确实反直觉。

根据这篇综述的 **2.4 Study Selection** 章节，原因主要有以下三点，这也反映了系统文献综述的局限性：

1. **筛选漏斗效应**：作者只检索了 **IEEE Xplore, ACM DL, Springer, ScienceDirect** 这四个英文数据库。大量高质量的日语 NER 论文发表于 **日语本土会议**（如语言处理学会年次大会）或 **IP SJ 期刊** 上，若未被这几大英文库收录，就会被漏掉。

2. **术语标引问题**：日本学者在英文期刊发文时，通常将语种标注为 "Japanese"。如果检索策略或关键词匹配存在偏差，可能导致相关文献在初筛时被排除。

3. **并非完全为零**：原文表格统计的是 **2011-2022 年间在选定库中明确使用该语种数据集且通过全文筛选的论文数**。日语相关研究很可能是 1 篇或 0 篇，未达到进表的阈值，但绝不代表日语 NER 研究薄弱（==事实上日语 NER 非常强，MeCab 等工具是行业标杆==）。

n. **教授给您的阅读提示**
您可以在笔记里加一条 批判性思考：

> *“Table 4 反映了 **英文主导的国际数据库收录偏好**，不等于全球 NER 语言资源的真实全貌。日语、法语、德语的缺席属于系统综述的 **检索偏倚**。”*

这样的思考角度，会让您的课程报告或论文文献综述部分显得非常有深度。

:::

#### 3.5 NER research application domain

- Table 5. NER research domain.
  
| Domain | Research |
| --- | --- |
| General - 通用领域 | [12, 31, 32, 34–36, 39, 50–52, 64, 65, 72, 80, 84, 86–89, 91, 100, 101, 105, 106, 110–148] |
| Medical and health - 医疗健康 | [13, 30, 33, 37, 38, 43–46, 49, 56, 60–63, 69–71, 77–79, 85, 102,149–203] |
| Biomedical and chemical - 生物医学和化学  | [14, 41, 204–207] |
| Network and security - 网络安全 | [57, 208–213] |
| Biology - 生物 | [59, 214–220] |
| Chemistry - 化学 | [58, 74, 221–224] |
| Geoscience - 地球科学 | [47,48, 225] |
| Business and economics - 商务和经济 | [40, 81, 226] |
| History and culture - 历史和文化 | \[316-320\] |
| Agriculture - 农业 | [99, 321-323]  |
| Law - 法律 | [83, 227] |
| Social media - 社交媒体 | [108, 109] |
| Automotive and engineering 汽车与工程领域 | [98, 325-328]  |
| Military - 军事 | [104] |
| Neuroscience - 神经科学 | [228] |
| Sport science - 体育科学 | [103] |
| System and software - （计算机）系统和软件 | [73] |

- 公式(1 ~ 3):

$$
\mathcal{L}_{NER} = -\frac{1}{m+n} \sum_{j=1}^{m+n} y_j \log \hat{y}_j \tag{1}
$$

:::details from deepseek:公式 1：NER 任务的交叉熵损失函数

**它在做什么？**
这是训练 NER 模型时用来**衡量模型预测结果与真实标签之间差距**的损失函数。模型的目标就是让这个值越小越好。

**符号解释（本科生友好版）：**
| 符号 | 含义 | 类比理解 |
| --- | --- | --- |
| $m + n$ | 源域样本数 + 目标域样本数 | 训练集里所有句子的总 token 数量 |
| $y_j$ | 第 $j$ 个token的**真实标签** | 正确答案（例如这个 token 真的是 `B-PER` 吗？ 是则为1， 否则为 0 ） |
| $\hat{y}_j$ | 模型预测第 $j$ 个 token 属于某个标签的**概率** | 模型给出的信心值（例如模型认为它是`B-PER` 的概率是 0.8） |
| $\log \hat{y}_j$ | 对预测概率取对数 | ==数学技巧， 放大低概率时的惩罚力度== |

**一句话总结：**
模型越确信正确答案（$\hat{y}_j$ 接近 1），$\log \hat{y}_j$ 越接近 0，损失越小；如果模型预测错误（正确答案的 $\hat{y}_j$ 接近 0），$-\log$ 值会爆炸，迫使模型修正参数。

:::

$$
\mathbf{q}_{s_i} = \frac{1}{m_i} \sum_{j=1}^{m_i} \text{BERT}(x_j) \tag{2}
$$

:::details from deepseek:公式 2：句子级向量表示

**它在做什么？**
将一整句话压缩成一个**固定长度的向量**，用来代表这句话的整体语义。

**符号解释：**
| 符号 | 含义 | 类比理解 |
| --- | --- | --- |
| $s_i$ | 第 $i$ 个句子 | 一篇医疗文本中的一句话 |
| $m_i$ | 句子 $s_i$ 中的token数量 | 这句话切成多少个词/子词 |
| $\text{BERT}(x_j)$ | 第 $j$ 个 token 经过 BERT 输出的向量 | 这个词的"语义指纹" |
| $\frac{1}{m_i} \sum$ | 对句子中所有 token 向量**取平均** | 把整句话的语义捏成一个球 |

**一句话总结：**
把一句话里所有词的 BERT 向量加起来求平均，得到代表整句话的“语义向量”。这个向量后续用来计算两个不同领域句子之间的相似度。

:::

$$
d_{s_a, s_b} = \text{similarity}(\mathbf{q}_{s_a}, \mathbf{q}_{s_b}) \tag{3}
$$

:::details from deepseek:公式 3：领域距离计算

**它在做什么？**
计算**源域**（有标签数据，如新闻）和**目标域**（无标签数据，如医疗病历）中两个句子的语义相似度。

**符号解释：**
| 符号 | 含义 |
| --- | --- |
| $\mathbf{q}_{s_a}$ | 源域句子 $s_a$ 的语义向量（来自公式2） |
| $\mathbf{q}_{s_b}$ | 目标域 $s_b$ 的语义向量| 
| $\text{similarity}(\cdot, \cdot)$ | 相似度函数（通常是**余弦相似度**） |

**余弦相似度的直观理解**：
想象每个句子向量是空间中的一支箭。两支箭的**夹角越小**，指向越一致，相似度越高（接近 1）；夹角越大，相似度越低（接近 0）。

**一句话总结：**
这个距离值告诉模型：源域和目标域的语言风格差得有多远。如果距离太大，模型就需要调整策略来适应目标域。

:::

:::note from deepseek：公式1~3放在一起的完整故事
1. **公式 1** 是模型训练的核心目标：在源域数据上学会识别实体。

2. **公式 2** 把句子变成向量，方便机器理解句子含义。

3. **公式 3** 测量两个领域之间的语义差距，帮助模型在缺少标签的目标域上也能工作。

这正是跨领域 NER 研究的核心思想：**让在新闻上训练好的模型，也能看懂风格迥异的医疗病历**。
:::

#### 3.6 Features Extraction

- Figure 11. Various feature extractions on NER.
![alt text](/assets/images/article/literature-reading/NER-Rustad/export_img__页面_14_图像_0001.png)

:::details from deepseek: Figure 11 数据解读：NER 特征提取技术术语表

| 英文术语 | 中文名称 | 简要解释（本科生友好版） |
| :--- | :--- | :--- |
| **Word Embedding** | 词嵌入 | 把所有单词映射成固定长度的数字向量，让意思相近的词在向量空间里距离也近。它是深度学习方法表示文本的**基础零件**。 |
| **Character Embedding** | 字符嵌入 | 不把词看作整体，而是把构成词的**每个字母或汉字**转成向量。对处理拼写错误、罕见词或中文单字很有帮助。 |
| **Word2Vec** | 词向量模型 | Google 2013年提出的经典**词嵌入训练工具**。它通过阅读大量文本自学每个词的向量表示。下面两个是它内部的两种算法： |
| ├─ **CBOW** | 连续词袋模型 | Word2Vec 的一种算法：**用周围的词预测中间的空缺词**。训练快，适合大型语料库。 |
| └─ **Skip-gram** | 跳字模型 | Word2Vec 的另一种算法：**用中间一个词去预测它周围的词**。对低频词的效果更好，生成的向量质量通常更高。 |
| **N-Gram** | N元语法特征 | 把连续的 N 个字符或单词当成一个整体特征。比如“自然语言”作为一个二元组，比拆开成“自然”和“语言”更能保留专有名词的完整性。 |
| **POS-Tagging** | 词性标注特征 | 把每个词的词性（名词、动词等）作为附加特征喂给模型。**人是名词，跑是动词**——NER 模型看到名词时会重点怀疑它是不是人名或地名。 |
| **BiLSTM** | 双向长短期记忆网络 | 一种能**从前向后**和**从后向前**两个方向阅读句子的神经网络。它能捕捉到一个词**完整的上下文背景**，比如判断“苹果”是水果还是公司。 |
| **BiLSTM-CRF** | 双向LSTM + 条件随机场 | 在 BiLSTM 后面接了一个**规则检查器**。BiLSTM 负责给每个词打分，CRF 负责确保输出的标签序列符合语法规矩（例如 I-PER 绝不可能出现在 B-LOC 前面）。 |
| **BERT** | 基于Transformer的双向编码表示 | Google 2018年推出的**预训练大模型**。它不再单向看文本，而是像人类一样**同时理解左右两侧的语境**，是目前绝大多数 NER 系统的核心引擎。 |

---

📊 **阅读提示：如何看懂这张图的趋势？**

1. **底部依赖（Word Embedding / Word2Vec）**：这是深度学习方法的地基，出现频次最高（图11 中第一个柱极高）。
2. **上层建筑（BERT / BiLSTM-CRF）**：随着算力增强，模型越来越**“上下文感知化”**，从静态向量进化到动态理解整句语义。

:::

### 4 Conclusion
### 5 Discussion



### 小结_myself
```text
综述文章的研究对象是这个领域(NER)的其他文章，而不是作者自己做这个领域的实验和研究。
第一章 1 Introduction 介绍了 命名实体识别(NER) 是 什么东西， 以及他要做文献综述的目标.
第二章 2 Method 介绍了这篇文章对研究对象（NER文献）的研究方法
Systematic Literature Review, SLR的phase为 Planning, Selection, Extraction, Execution - 规划，筛选，提取，执行
Planning: 在规划阶段需要制定原则和定义问题，见Table 1. PICOC Criteria.和Table 2. Research question. ，
Selection: 然后Figure 3. Journal search and selection phase.展示了他筛选文献的流程（从2748篇中选出345篇），
Extraction & Execution: 在完成345篇文章的筛选以后，根据Table 2定义出的9个RQ（Research Question），分门别类的提取信息和分析问题。主要细节见第三章.
第三章 3 Result and Analysis
3.1 - RQ1 -> 期刊统计
3.2 - RQ2 -> 作者统计
3.3 - RQ3 -> 数据预处理技术统计（注意这里的预处理指的是NER的预处理，而不是指NER作为NLP的预处理）=>(Tokenization, POS-Tagging, Cleaning, ...)
3.4 - RQ4 -> 数据集统计  a. 公有/私有数据集 b. 最流行的具体数据集 c.语种统计(这里有一个和AI的讨论，他说这篇文章选文献的流程有较大的英语偏好，所以语种统计这里和整个NER研究领域使用的数据集的真实数据是有一定偏差的)
3.5 - RQ5 -> 应用领域 a. 对每个领域的统计 b. 对跨领域NER研究的讨论 (问题模型是使用在一个领域的数据上训练好的模型在另一个领域也能应用，公式1~3表示了其中的一些数学原理)
3.6 - RQ6 -> 特征提取 a. 特征提取技术列举: (Word Embedding, Character Embedding, Word2Vec, POS-Tagging ... - 词嵌入， 字嵌入，Word2Vec， 词性标注) b. ...
...
第四章 4 Discussion
第五章 5 Conclusion
```

---
## 文献2: Long和Li - 2026 - A Chinese Named Entity Recognition Dataset for Intangible Cultural Heritage






---

## 总结_final_myself

NER是一个问题模型（它的task包括实体识别和实体分类），NLP是一个更大的问题模型（它的task这里不列举）
NER处于NLP的上游阶段，类似编译原理中的词法分析程序（将源程序进行分词和标注，每个分出来的词对应一个类型 如标识符，运算符，字面量），他在整个链路的作用是可以简化问题，把处理非结构化文本的问题转化为了处理结构化文本的问题.