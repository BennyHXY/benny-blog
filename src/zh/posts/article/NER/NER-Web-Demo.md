---
title: NER - 中文命名实体识别Web演示
icon: pen-to-square
date: 2026-06-08
category:
  - computer-science
  - NLP
  - NER
tag:
  - 红
  - 小
  - 圆
sidebar: false
---

# 中文命名实体识别Web演示


我们从两个部分讲，第一个部分作功能演示，讲明白==NER(命名实体识别)==是什么，和演示我们这个系统。第二个部分以==角色述职==的形式讲我们这个系统是怎么构建的。


## Part Ⅰ - 功能演示

### 命名实体识别任务 (Named Entity Recognition, NER)

具命实体辨识（英语：Named Entity Recognition，简称NER），又称作专名识别、命名实体，是指识别文本中具有特定意义的实体，主要包括人名、地名、机构名、专有名词等，以及时间、数量、货币、比例数值等文字。指的是可以用专有名词（名称）标识的事物，一个命名实体一般代表唯一一个具体事物个体，包括人名、地名等。

NER属于从非结构化文本中分类和定位命名实体感情的子任务，其过程是从是非结构化文本表达式中产生专有名词标注信息的命名实体表达式，目前NER有两个显著的问题，即识别和分类。例如，“欧巴马是美国总统”的“奥巴马”和“美国”都代表一个具体事物，因此都是命名实体。而“总统”不代表一个具体事物，因此不是命名实体。

(来自 [维基百科 - 具名实体识别](https://zh.wikipedia.org/wiki/%E5%91%BD%E5%90%8D%E5%AE%9E%E4%BD%93%E8%AF%86%E5%88%AB))


### 系统演示

![alt text](/assets/images/article/NER/NER-1.png)

<!-- 啦啦啦啦啦啦 啦啦啦啦啦啦啦 -->


## Part Ⅱ - 角色述职


### 成员职责表
|编号| 成员 | 角色 | 职责 | 
|:--:| -- | -- | -- | 
| 1 | 潘臣欣 | 项目经理 | 项目周期规划: <br> - 阶段规划与监督实际落实； <br> - 成员协调 | 
| 2 | 陈文韬 | 软件架构师 | 软件架构设计: <br> - Web前端布局、交互设计； <br> - 各模块接口 (定义数据格式) ； | 
| 3 | 胡希言 | 模型训练师 | 模型训练: <br> - BERT技术选型; <br> - 在云平台上使用GPU完成模型训练; <br> - 协同陈文韬完成系统集成; <br> - 最终串讲 | 

### 项目经理: 项目周期规划 (==潘臣欣==)

![NER项目规划](/assets/images/article/NER/NER-planning-GPT.png)

:::details
 - 第零阶段: 选题、任务规划
   - 收集资料
   - 讨论、选定题目 -> NER
   - 任务分配
 - 第一阶段: Web原型、接HanLP库
   - 完成Web交互设计
   - 理解模块接口 (数据格式)
 - 第二阶段: 自训练BERT模型
   - 在Google colab 上完成 BERT 微调，
   - 记录完整的训练过程和评估结果
 - 第三阶段: 系统集成与测试评估
   - 替换HanLP
   - 系统测试 (网页交互、模型表现 是否与预期一致； 有没有奇怪的边界情况)
   - 整体系统表现 (与HanLP原型比较， 主要是为了加强理解)
:::


### 软件架构师: 软件架构设计 (==陈文韬==)

见 [NER - 架构设计文档](NER-soft-design.md)

::: details

 - 软件架构图，Web前端 + python flask 框架  + AI模型(HanLP库 / 自训练BERT)
 - 文件目录
 - 模块接口、数据格式

:::


### 模型训练师: 模型训练 (==胡希言==)

#### 一，论文 (BERT选型依据，实验思路)

 - ==综述论文== (Systematic Literature Review on Named Entity Recognition: Approach, Method, and Application, NER领域的系统文献综述: 途径、方法 和 应用领域)
   - 综述论文的研究对象是这个领域(NER)的所有文献，阅读这篇文章我们可以了解其他NER研究者采用什么方法来做NER任务，作为我们的参考。
   - Method(方法) 是一些小的技术点，包括数据集的选择，分词、标注、特征提取等流程采用的常用技术。
   - Approach(途径) 是大的整体的研究路线， 比如你的研究是基于 规则/知识图谱 的 还是 基于 ML/DL (机器学习 / 深度学习) 的。
   - ==NER任务的评估指标==:
     - 精确率(Precision) : $Precision = \frac{TP}{TP + FP} = \frac{\text{被模型正确识别的数量}}{\text{这个模型识别出的结果中}}$
     - 召回率(Recall): $Recall = \frac{TP}{TP + FN} = \frac{\text{被模型正确识别的数量}}{\text{所有实体中}}$
     - F1: $F1Score = \frac{2 \times recall \times precision}{precision + recall}$ , 二者的调和平均

 - ==ICHNER== (a Chinese Named Entity Recognition Dataset for Intangible Cultural Heritage, 为 NER 任务构建的非遗领域中文数据集) 
   - 具体的实验流程 (数据标注 + 模型验证)
   - 数据标注: 这篇文章的重心是数据集的构建，有详细的数据标注流程(包括数据采集、使用BIO序列标注、以及很正规的标注规范， 我们的这个大作业直接采用公开数据集就可以先省略这些东西。)
   - 模型验证: 这篇文章对比了几种用于NER的模型在他们这个数据集上的表现 (见下表)
        ![alt text](/assets/images/article/NER/ICHNER-table4_new.png)
    可以看到表现最好的是最后一行的加了 KAN、MHA、CRF 几个模块的 BERT 模型，三个指标都是百分之八十几,召回率接近九十。
   - 综合各种条件，我们的作业采用的是什么都不加的 BERT 模型， 几个指标在==百分之七十多接近八十==的样子。我觉得也可以。 (然后我们的数据集跟他不一样，但我们就先这样对比吧。)


#### 二，训练流程

 - [https://colab.research.google.com/drive/1Px1R2E3ApFs_lFVsp4MnluK_8-atWrw_]

::: note 详情
 - Cell 1: 安装依赖
 - ==Cell 2: 加载数据集==
   - -> 我们采用的 [CLUENER2020 - github](https://github.com/CLUEbenchmark/CLUENER2020) 公开数据集，
     - 数据集包含的 10 个实体类别: `地址(address)`, `书名(book)`, `公司(company)`, `游戏(game)`, `政府(government)`, `电影(movie)`, `姓名(name)`, `组织机构(organization)`, `职位(position)`, `景点(scene)`
     - 其中 训练集(train.json) 包含 10748 条文本数据
     - 验证集 (dev.json) 包含 1343 条文本数据
     - 数据格式: json里面每条大括号`{}`里面包含一个文本`text`和对应的标签`label` 。
     - 例子: `{'text': '关小刀火线解盘：霍芬海姆取连胜维拉主场奏凯歌', 'label': {'organization': {'维拉': [[15, 16]]}, 'name': {'关小刀': [[0, 2]], '霍芬海姆': [[8, 11]]}}}`
     - 这条例子的解释: 这条文本里的位置0至2对应的文字'关小刀'、位置8至11对应的文字'霍芬海姆'属于`姓名(name)`类别； 位置15至16对应的文字'维拉'属于`组织机构(organization)` 类别。
 - Cell 3: 定义标签体系
 - Cell 4: 把原始数据转换为 BIO 格式
 - Cell 5: 加载Tokenizer, 把文字转为 Token ID
 - Cell 6: Tokenize 并对齐标签
 - Cell 7: 构建 PyTorch Dataset
 - ==Cell 8: 加载模型==
   - -> 加载 pytorch 内置的 "bert-base-chinese"(基于BERT的中文) 模型
```python
from transformers import AutoModelForTokenClassification

model = AutoModelForTokenClassification.from_pretrained(
    "bert-base-chinese",
    num_labels=len(LABEL_LIST),
    id2label=ID2LABEL,
    label2id=LABEL2ID,
)

print(f"模型加载成功，参数量：{model.num_parameters():,}")
```

   - ==BERT==: Bidirectional Encoder Representations from Transformers, 基于变换器的双向编码器表示技术。 2018 年由 Google 提出的 NLP (自然语言处理) 预训练模型， 训练数据是维基百科和其他海量文本数据。
     - 为什么使用==预训练模型==？
     - 我觉得就好像你写 cpp 是自己写 冒泡/快排 还是调用 `#include<algorithm>` 中的 `sort` 一个道理。他那种封装到库里给你调用的东西一个是方便，还有一个是他经过了严格的测试，不容易出现什么奇奇怪怪的问题。 ==微调==的意思是你自己编写一下传入的 `cmp` 函数来适应一下特定任务就可以了。
     - 我们可以看到前面的论文部分显示了现在大部分的研究者也都是使用这个 BERT 预训练模型，而不是自己从头训练模型， 比如什么 BiLSTM 。 

 - Cell 9: 定义评估函数
 - Cell 10: 配置训练参数并启动训练
 - Cell 11: 查看详细评估报告
 - Cell 12: 保存模型并下载
 - Cell 13: 常见问题
 - ==Cell 14: test-area==
   - -> 我最终的一个调试区域，可以看到在这个colab上输入一段文本模型的输出和项目最终的web演示是一样的，只不过没有web那么好的气泡显示。

```python
from transformers import pipeline

# 加载我们自己训练好的模型
ner = pipeline(
    "token-classification",
    model=model,           # 直接用内存里训练好的模型，不用重新加载文件
    tokenizer=tokenizer,
    aggregation_strategy="simple"  # 自动把 B/I 合并成完整实体
)

# 测试
text = """

 二战期间，盟军苦于德国的秘密系统“英格玛”无法破译，政府召集了一批民间数学家、逻辑学家进行秘密破解工作，图灵（本尼迪克特·康伯巴奇 Benedict Cumberbatch 饰）就是其中之一。计划刚开始图灵遭到了以休（马修·古迪 Matthew Goode）为首的组员和 领导的排斥，幸好军情处部长孟席斯（马克·斯特朗 Mark Strong 饰）帮助他立项研究破译密码的机器，而图灵则变成了负责人，招收了新的成员琼（凯拉·奈特莉 Keira Knightley）开始了艰难的工作。琼很快就迷上了图灵，由于她的帮助所有组员空前的团结，并于两年后成功破解德军的密码。图灵一度与琼订婚，但实际上他隐瞒了一个秘密，因为这个秘密他也遭受了非人的待遇……
　　本片改编自安德鲁·霍奇斯编著的《艾伦·图灵传》，上映后获得了第87届奥斯卡最佳改编剧本奖。 ©豆瓣


"""

results = ner(text)

print(f"输入：{text}\n")
print("识别结果：")
for r in results:
    print(f"  [{r['entity_group']}] {r['word']}  (置信度: {r['score']:.2f})")
```

输出:
```
输入：

 二战期间，盟军苦于德国的秘密系统“英格玛”无法破译，政府召集了一批民间数学家、逻辑学家进行秘密破解工作，图灵（本尼迪克特·康伯巴奇 Benedict Cumberbatch 饰）就是其中之一。计划刚开始图灵遭到了以休（马修·古迪 Matthew Goode）为首的组员和 领导的排斥，幸好军情处部长孟席斯（马克·斯特朗 Mark Strong 饰）帮助他立项研究破译密码的机器，而图灵则变成了负责人，招收了新的成员琼（凯拉·奈特莉 Keira Knightley）开始了艰难的工作。琼很快就迷上了图灵，由于她的帮助所有组员空前的团结，并于两年后成功破解德军的密码。图灵一度与琼订婚，但实际上他隐瞒了一个秘密，因为这个秘密他也遭受了非人的待遇……
　　本片改编自安德鲁·霍奇斯编著的《艾伦·图灵传》，上映后获得了第87届奥斯卡最佳改编剧本奖。 ©豆瓣




识别结果：
  [government] 盟 军  (置信度: 0.79)
  [government] 府  (置信度: 0.58)
  [position] 数 学 家  (置信度: 0.96)
  [position] 逻 辑 学 家  (置信度: 0.94)
  [name] 图 灵  (置信度: 0.95)
  [name] 本 尼 迪 克 特 · 康 伯 巴 奇 Benedict Cumberbatch  (置信度: 0.93)
  [name] 灵  (置信度: 0.55)
  [name] （ 马 修 · 古 迪 Matthew Goode  (置信度: 0.86)
  [position] 组 员  (置信度: 0.68)
  [position] 领 导  (置信度: 0.57)
  [government] 军 情 处  (置信度: 0.90)
  [position] 部 长  (置信度: 0.97)
  [name] 孟 席 斯  (置信度: 0.97)
  [name] 马 克 · 斯 特 朗 Mark Strong  (置信度: 0.92)
  [name] 图 灵  (置信度: 0.78)
  [name] 凯 拉 · 奈 特 莉 Keira Knightley  (置信度: 0.89)
  [name] 灵  (置信度: 0.72)
  [government] 德 军  (置信度: 0.95)
  [name] 图 灵  (置信度: 0.84)
  [name] 安 德 鲁 · 霍 奇 斯  (置信度: 0.99)
  [book] 《 艾 伦 · 图 灵 传 》  (置信度: 0.88)

```


:::


#### 三，系统集成

 - 项目的第三阶段，替换Web原型中的HanLP库接口为自训练的BERT模型。 这个阶段解决了一些前端样式适配的小问题。


## 小结

通过本次作业，我们成功使用CLUENER2020数据集和BERT预训练技术在Google colab上完成了一个NER模型的训练，并结合以前学过的Web前端技术实现了NER任务的可视化演示。 在作业的过程中我觉得对我帮助最大的是两篇论文的阅读，在综述论文中我接触到自己要完成的任务进行阶段规划的思想。在ICHNER中我接触到一些具体的实验设计，包括消融实验(Ablation Study, 单独去掉模型中的一个模块，对比和完整模型的任务完成情况，验证模块作用)和混淆矩阵分析(Case Study, 探究模型误分类的情况和原因)。这两篇论文都为我们打开了一些“学术体系”的视角。对软件系统的设计和实现亦增强了我们的工程能力。通过不断学习和实践，我们可以进一步掌握计算机领域的理论精髓和实践技巧，培养自己成为理论和实践能力双全的人才。

