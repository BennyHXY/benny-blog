---
title: Python - matplotlib
date: 2026-03-23
icon: pen-to-square
category:
  - python
tag:
  - red
  - big
  - round
---

# Python - matplotlib

tutorial:[https://matplotlib.org/stable/tutorials/index.html]
reference:[https://matplotlib.org/stable/api/index.html]

## Pyplot

<VPPreview>

<template #code>

```python
import matplotlib.pyplot as plt
import numpy as np
N = 8
y = np.zeros(N)

x1 = np.linspace(0, 10, N, endpoint=True)
plt.plot(x1, y, 'o')

M = N * 4
y2 = np.ones(M)

x2 = np.linspace(0, 10, M, endpoint=False)
plt.plot(x2, y2, 'o')
plt.ylim([-0.5, 1.5]) #限制图像显示的y轴范围

plt.show()
```

</template>
<template #content>

![figure 1](/assets/images/py-linspace02.png)

</template>

</VPPreview>

## Image

<VPPreview>

<template #code>

```python
from PIL import Image

import matplotlib.pyplot as plt
import numpy as np

img = np.asarray(Image.open('../../doc/_static/triky1.jpg'))
# print(repr(img))
imgplot = plt.imshow(img)
lum_img = img[:, :, 0]
plt.imshow(lum_img)
plt.show()
```

</template>
<template #content>

![figure 2](/assets/images/tricky2.png)

</template>

</VPPreview>
