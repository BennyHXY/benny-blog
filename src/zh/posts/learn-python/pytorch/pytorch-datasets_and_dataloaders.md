---
title: PyTorch - Datasets & DataLoaders
date: 2026-04-21
icon: pen-to-square
category:
  - python
  - deep-learning
tag:
  - red
  - big
  - round
---

# PyTorch - Datasets & DataLoaders

 - [Pytorch Tutorial - Datasets & Data Loaders](https://docs.pytorch.org/tutorials/beginner/basics/data_tutorial.html)


## Datasets - 数据集
### 内置数据集 - Built-in Datasets

 - 图像数据集: [https://docs.pytorch.org/vision/stable/datasets.html] 
      :::note
      - (`图像分类` | `图像分割/目标检测` | `光流` | ... | `视频分类` | `视频预测` | ... )
      - (`Image classification` | `Image detection or segmentation` | `Optical Flow` | `Stereo Matching` | `Image pairs` | `Image captioning` | `Video classification` | `Video prediction` | `Base classes for custom datasets` | `Transforms v2` )
      :::

 - 文本数据集: [https://pytorch.org/text/stable/datasets.html]
    :::note
    - (`文本分类` | `语言模型` | `机器翻译` | `序列标注` | `问答` | `无监督学习`  )
    - (`Text Classification` | `Language Modeling` | `Machine Translation` | `Sequence Tagging` | `Question Answer` | `Unsupervised Learning`)
    :::
 - 音频数据集: [https://docs.pytorch.org/audio/stable/datasets.html]

#### 引包
```python
import torch
from torch.utils.data import Dataset
from torchvision import datasets
from torchvision.transforms import ToTensor
import matplotlib.pyplot as plt
```


#### 下载数据集
```python
training_data = datasets.DTD(root="data", download=True, transform=ToTensor())
```
参数说明：
- `datasets.<数据集名称>`: 指定数据集
- `root`: 下载路径
- `train`: 为 `True` 时下载训练集， 为 `False` 时下载测试集
- `downloads=True`: 是否自动下载
- `transform` 和 `target_transform`: 处理数据格式, `ToTensor` 把返回的东西统一弄成`tensor`格式，不加的话可能是 `PIL` 格式或者别的什么格式。

> - `root` is the path where the train/test data is stored,
> - `train` specifies training or test dataset,
> - `download=True` downloads the data from the internet if it’s not available at `root`.
> - `transform` and `target_transform` specify the feature and label transformations

运行这句话就可以在 `root` 指定的目录下找到下载的数据集， 这个例子中的`DTD`(Describable Textures Dataset, 可描述纹理数据集) 是一个纹理图片数据库，下载以后可以看到以文件夹分类的纹理图片，里面的图片都是 `.jpg` 格式的。

![DTD - dotted](/assets/images/learn-python/pytorch/datasets/dtd-1.png)

![DTD - striped](/assets/images/learn-python/pytorch/datasets/dtd-2.png)

#### 访问和遍历

##### 访问单张图片

通过 `training_data[<下标>]` 得到一个 `(img, label)` 元组

```python
import torch
import numpy as np
from torch.utils.data import Dataset
from torchvision import datasets
from torchvision.transforms import ToTensor
import matplotlib.pyplot as plt
import torchvision.transforms as transforms

plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置中文字体为黑体
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题


training_data = datasets.DTD(
    root='data',
    split="train",
    download=False,
    # transform=transforms.ToTensor()
)

# print(training_data.classes)
classes = training_data.classes

idx = 1001
img, label = training_data[idx]
nd_img = np.array(img)

# print(nd_img.shape)
h,w,c = nd_img.shape
print("h = {0},w = {1}, c = {2}".format(h,w,c))

plt.text(w / 2 - 10, h - 80,
             "编号为{0}的图片\n 标签为{1}".format(idx, classes[label]),
             bbox=dict(boxstyle="round",
               ec=(1., 0.5, 0.5),
               fc=(1., 0.8, 0.8),
               ),
             size=18,
             )
plt.imshow(nd_img)
print(label)
plt.show()

```
:::details
![dtd-129](/assets/images/learn-python/pytorch/datasets/dtd/dtd-129.png) 
![dtd-443](/assets/images/learn-python/pytorch/datasets/dtd/dtd-443.png)
![dtd-933](/assets/images/learn-python/pytorch/datasets/dtd/dtd-933.png) 

:::

##### 九宫格显示

 - DTD

<VPPreview>

<template #code>

```python
import torch
import torchvision
from torchvision import datasets, transforms
import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置中文字体为黑体
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题


# 🔧 关键手术台：用 transforms.Compose 把任意尺寸强行统一成 224x224
transform = transforms.Compose([
    transforms.Resize((224, 224)),  # 强行拉成正方形，这是九宫格不乱的保证
    transforms.ToTensor()  # 转张量
])

#保留原比例的情况
# transform = transforms.Compose([
#     transforms.Resize(224),           # 短边缩放到224，长边等比例
#     transforms.CenterCrop(224),       # 从中心切出 224x224 方块
#     transforms.ToTensor()
# ])


training_data = datasets.DTD(
    root="data",
    split="train",
    download=True,
    transform=transform
)

# 类别名称映射（DTD 有 47 类，这里只展示前几个，遇到哪个显示哪个）
classes = training_data.classes

# 画布设置
figure = plt.figure(figsize=(10, 10))  # 画布大一点，看得清纹理
cols, rows = 3, 3

sta = 809
idx = sta

for i in range(1, cols * rows + 1):
    # 随机抽一张图
    # sample_idx = torch.randint(len(training_data), size=(1,)).item()
    idx += 1
    img, label = training_data[idx]

    # 添加子图
    figure.add_subplot(rows, cols, i)
    plt.title(classes[label])
    plt.axis("off")

    # ⚠️ 彩色图与灰度图的致命区别在这里
    # FashionMNIST 用了 cmap="gray" 且需要 squeeze
    # DTD 是彩色图 (3, H, W)，必须 permute 成 (H, W, 3) 给 imshow
    plt.imshow(img.permute(1, 2, 0))  # 不需要 squeeze，也不需要 cmap

plt.suptitle("DTD - 编号{0} ~ {1}的图片".format(sta + 1, sta + 9), fontsize=20, y=0.98)
plt.tight_layout()  # 自动调整子图间距，防止标题重叠
plt.show()
```
</template>
<template #content>

![DTD 1~9](/assets/images/learn-python/pytorch/datasets/dtd/dtd_1to9.png) 
![DTD 456to464](/assets/images/learn-python/pytorch/datasets/dtd/dtd_456to464.png) 
![DTD 810~818](/assets/images/learn-python/pytorch/datasets/dtd/dtd_810to818.png)

</template>

</VPPreview>

- FashionMNIST

<VPPreview>

<template #code>

```python
import torch
from torch.utils.data import Dataset
from torchvision import datasets
from torchvision.transforms import ToTensor
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置中文字体为黑体
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题


training_data = datasets.FashionMNIST(
    root="data",
    train=True,
    download=True,
    transform=ToTensor()
)

test_data = datasets.FashionMNIST(
    root="data",
    train=False,
    download=True,
    transform=ToTensor()
)

labels_map = {
    0: "T-Shirt",
    1: "Trouser",
    2: "Pullover",
    3: "Dress",
    4: "Coat",
    5: "Sandal",
    6: "Shirt",
    7: "Sneaker",
    8: "Bag",
    9: "Ankle Boot",
}
figure = plt.figure(figsize=(8, 8))
cols, rows = 3, 3

sta = 0
idx = sta

for i in range(1, cols * rows + 1):
    # sample_idx = torch.randint(len(training_data), size=(1,)).item()
    idx += 1
    img, label = training_data[idx]
    figure.add_subplot(rows, cols, i)
    plt.title(labels_map[label])
    plt.axis("off")
    plt.imshow(img.squeeze())
    # plt.imshow(img.squeeze(), cmap="gray")
plt.suptitle("FashionMNIST - 编号{0} ~ {1}的图片".format(sta + 1, sta + 9), fontsize=20, y=0.98)
plt.show()
```


</template>
<template #content>

![alt text](</assets/images/learn-python/pytorch/FashionMINST/plot_2026-04-22 00-00-02_0.png>) 
![alt text](</assets/images/learn-python/pytorch/FashionMINST/plot_2026-04-22 00-00-02_1.png>)
</template>

</VPPreview>





- MNIST

<VPPreview>

<template #code>

```python
import torch
from torch.utils.data import Dataset
from torchvision import datasets
from torchvision.transforms import ToTensor
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei']  # 设置中文字体为黑体
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题


training_data = datasets.MNIST(
    root="data",
    train=True,
    download=True,
    transform=ToTensor()
)

test_data = datasets.MNIST(
    root="data",
    train=False,
    download=True,
    transform=ToTensor()
)

print(training_data.classes)
classes = training_data.classes

figure = plt.figure(figsize=(8, 8))
cols, rows = 3, 3

sta = 2017
idx = sta

for i in range(1, cols * rows + 1):
    # sample_idx = torch.randint(len(training_data), size=(1,)).item()
    idx += 1
    img, label = training_data[idx]
    figure.add_subplot(rows, cols, i)
    plt.title(classes[label])
    # plt.title(labels_map[label])
    plt.axis("off")
    plt.imshow(img.squeeze())
    # plt.imshow(img.squeeze(), cmap="gray")
plt.suptitle("MNIST - 编号{0} ~ {1}的图片".format(sta + 1, sta + 9), fontsize=20, y=0.98)
plt.show()
```


</template>
<template #content>

![alt text](/assets/images/learn-python/pytorch/datasets/MNIST/MNIST_1to9.png) 
![alt text](/assets/images/learn-python/pytorch/datasets/MNIST/MNIST_2018to2026.png)
</template>

</VPPreview>


### 自定义数据集 - Custom Datasets

暂时略.
![暂时略](/assets/images/background/sicnu-background1.jpg)


## 数据加载器 - DataLoaders

暂时略.
![暂时略](/assets/images/background/sicnu-background1.jpg)

## 小结
慢慢来叭.




