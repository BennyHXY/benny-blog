---
title: PyTorch - Tensor
date: 2026-03-30
icon: pen-to-square
category:
  - python
tag:
  - red
  - big
  - round
---

<!-- # Python - Pytorch -->

## Tensor

<!-- - [pytorch tutorial](https://docs.pytorch.org/tutorials/beginner/basics/intro.html) -->

- [pytorch tutorial - tensors](https://docs.pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html)

`tensor` 和 NumPy 的 `ndarray` 完全是一个东西，只不过 `tensor` 还可以在 GPU 或者其他硬件加速器上运行。

> Tensors are similar to NumPy’s ndarrays, except that tensors can run on GPUs or other hardware accelerators.

### 生成`tensor`

#### 从形状生成 `tensor`

```python
import torch
import numpy as np

shape = (2, 3, 19)
print(f"shape = {shape}")
t4_1 = torch.ones(shape)
print(f"t4_1 = {t4_1}")
t4_0 = torch.zeros(shape)
print(f"t4_0 = {t4_0}")
# shape = (2, 3, 19)
# t4_1 = tensor([[[1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.,
#           1., 1.],
#          [1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.,
#           1., 1.],
#          [1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.,
#           1., 1.]],
#
#         [[1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.,
#           1., 1.],
#          [1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.,
#           1., 1.],
#          [1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1., 1.,
#           1., 1.]]])
# t4_0 = tensor([[[0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.],
#          [0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.],
#          [0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.]],
#
#         [[0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.],
#          [0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.],
#          [0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.]]])
```

#### `torch.tensor()` - 列表转`tensor`

```python
import torch
import numpy as np

data = [[1, 2], [3, 4], [5, 6]]
t1 = torch.tensor(data)

print(f"data = {data}")
print(f"t1 = {t1}")

# data = [[1, 2], [3, 4], [5, 6]]
# t1 = tensor([[1, 2],
#         [3, 4],
#         [5, 6]])

```

#### `torch.from_numpy()` - ndarray转`tensor`

```python
import torch
import numpy as np

data = [[1, 2], [3, 4], [5, 6]]

np_data = np.array(data)

t2 = torch.from_numpy(np_data)

print(f"data = {data}")
print(f"np_data = {np_data}")
print(f"t2 = {t2}")
# data = [[1, 2], [3, 4], [5, 6]]
# np_data = [[1 2]
#  [3 4]
#  [5 6]]
# t2 = tensor([[1, 2],
#         [3, 4],
#         [5, 6]])
```

#### `<tensor>.numpy()` - `tensor`转ndarray

```python
import torch
import numpy as np

t3 = torch.tensor([[3,2,1],[4,5,6]])
np_data = t3.numpy()

print(f"np_data = {np_data}")
print(f"t3 = {t3}")

# np_data = [[3 2 1]
#  [4 5 6]]
# t3 = tensor([[3, 2, 1],
#         [4, 5, 6]]
```

## DataSets $ Dataloaders

- [pytorch tutorial - DataSets $ Dataloaders](https://docs.pytorch.org/tutorials/beginner/basics/data_tutorial.html)
