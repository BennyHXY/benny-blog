---
title: 数学 - 初等函数及其图像
icon: pen-to-square
date: 2026-04-08
category:
  - math
  - calculus
tag:
  - 红
  - 小
  - 圆
---

# 数学 - 初等函数及其图像

:::note
如果切换选项卡以后图像不显示，可以刷新一下浏览器 ovo 。。
:::

## 幂函数

- $y=x^a$

::::tabs#power-function

@tab $y=x^2$ #x2
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return x * x;
}
function generateData() {
  let data = [];
  for (let i = -200; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^3$ #x3
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return x * x * x;
}
function generateData() {
  let data = [];
  for (let i = -200; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^4$ #x4
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return x * x * x * x;
}
function generateData() {
  let data = [];
  for (let i = -200; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^5$ #x5
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return x * x * x * x * x;
}
function generateData() {
  let data = [];
  for (let i = -200; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^\frac{1}{2}$
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return Math.pow(x, 0.5);
}
function generateData() {
  let data = [];
  for (let i = 0; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    min: -200,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

::::

::::tabs#power-function

@tab $y=x^{-2}$ #x2
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return Math.pow(x, -2);
}
function generateData() {
  let data = [];
  for (let i = -200; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^{-3}$ #x3
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return Math.pow(x, -3);
}
function generateData() {
  let data = [];
  for (let i = -200; i <= -0.1; i += 0.1) {
    data.push([i, func(i)]);
  }
  data.push(null);
  for (let i = 0.1; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^{-4}$ #x4
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return Math.pow(x, -4);
}
function generateData() {
  let data = [];
  for (let i = -200; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^{-5}$ #x5
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return Math.pow(x, -5);
}
function generateData() {
  let data = [];
  for (let i = -200; i < 0; i += 0.1) {
    data.push([i, func(i)]);
  }
  data.push(null);
  for (let i = 0.1; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y=x^{-1}$
::: echarts 幂函数

```js
function func(x) {
  //   x /= 10;
  //   return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
  return Math.pow(x, -1);
}
function generateData() {
  let data = [];
  for (let i = -200; i <= -0.1; i += 0.1) {
    data.push([i, func(i)]);
  }
  data.push(null);
  for (let i = 0.1; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    min: -200,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -100,
    max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

::::

## 指数函数

- $y = a^x$

::::tabs#exp-log-function

@tab $y = 2^x$ #2
::: echarts 指数函数

```js
function func(x) {
  return Math.pow(2.0, x);
}
function generateData() {
  let data = [];
  for (let i = -20; i <= 20; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -10,
    // max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y = e^x$ #e
::: echarts 指数函数

```js
function func(x) {
  return Math.exp(x);
}
function generateData() {
  let data = [];
  for (let i = -20; i <= 20; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -10,
    // max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y = 10^x$ #10
::: echarts 指数函数

```js
function func(x) {
  return Math.pow(10, x);
}
function generateData() {
  let data = [];
  for (let i = -20; i <= 20; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -10,
    // max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

::::

## 对数函数

- $y = \log_{a}{x}$

::::tabs#exp-log-function

@tab $y = log_{2}{x}$ #2
::: echarts 对数函数

```js
function func(x) {
  return Math.log2(x);
}
function generateData() {
  let data = [];
  for (let i = 0.1; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    min: -20,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    // min: -10,
    // max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y = \ln x$ #e
::: echarts 对数函数

```js
function func(x) {
  return Math.log(x);
}
function generateData() {
  let data = [];
  for (let i = 0.1; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    min: -20,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    // min: -10,
    // max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y = \lg x$ #10
::: echarts 对数函数

```js
function func(x) {
  return Math.log10(x);
}
function generateData() {
  let data = [];
  for (let i = 0.1; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    min: -20,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    // min: -10,
    // max: 100,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

::::

## 三角函数

::::tabs #trigonometric-function

@tab $y= \sin x$ #sin
::: echarts 三角函数

```js
function func(x) {
  return Math.sin(x);
}
function generateData() {
  let data = [];
  for (let i = -20; i <= 20; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -2,
    max: 2,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y= \cos x$ #cos
::: echarts 三角函数

```js
function func(x) {
  return Math.cos(x);
}
function generateData() {
  let data = [];
  for (let i = -20; i <= 20; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -2,
    max: 2,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y= \tan x$ #tan
::: echarts 三角函数

```js
function func(x) {
  return Math.tan(x);
}
function generateData() {
  let data = [];
  for (let i = -100; i <= 100; i += 0.001) {
    if (Math.abs(i - Math.floor(i) - 0.5) < 0.0001) {
      data.push(null);
      continue;
    }

    data.push([i * Math.PI, func(i * Math.PI)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -40,
    max: 40,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

::::

## 反三角函数

::::tabs #trigonometric-function

@tab $y= \sin^{-1} x$ #sin
::: echarts 三角函数

```js
function func(x) {
  return Math.asin(x);
}
function generateData() {
  let data = [];
  for (let i = -1; i <= 1; i += 0.0001) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -2,
    max: 2,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y= \cos^{-1} x$ #cos
::: echarts 三角函数

```js
function func(x) {
  return Math.acos(x);
}
function generateData() {
  let data = [];
  for (let i = -1; i <= 1; i += 0.0001) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -1,
    max: 4,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

@tab $y= \tan^{-1} x$ #tan
::: echarts 三角函数

```js
function func(x) {
  return Math.atan(x);
}
function generateData() {
  let data = [];
  for (let i = -100; i <= 100; i += 0.001) {
    data.push([i, func(i)]);
  }
  return data;
}
option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  xAxis: {
    name: "x",
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  yAxis: {
    name: "y",
    min: -4,
    max: 4,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: "inside",
      filterMode: "none",
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
    {
      show: true,
      type: "inside",
      filterMode: "none",
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [
    {
      type: "line",
      showSymbol: false,
      clip: true,
      data: generateData(),
    },
  ],
};
```

:::

::::

## 小结

1. 软件绘制函数图像的原理：计算机中数值存在的形式通常是离散的（而非我们想象中连续的一条数轴）。因此我们通常的绘制方式是生成密集的x值（如$[-1,1]$上每隔$0.001$生成一个数值），然后计算出对应的y值，并用平滑曲线连接每个`(x,y)`对应的点，制造连续的假象。
2. 本页面的函数图像是在[这个示例](https://echarts.apache.org/examples/zh/editor.html?c=line-function)的基础上稍作修改绘制的。主要修改部分：
   - `generateData()`函数中循环`for (let i = -200; i <= 200; i += 0.1)`中变量`i`的范围和每次的增量，对应x的取值范围和密集程度；
   - `func(x)`的执行流程，改变`x->y`的映射方式；
   - `xAxis`、`yAxis`的`min`、`max`属性，改变坐标轴显示的范围；
3. 在绘制这些函数图像的过程中，我加深了对基本函数的定义域、值域、以及图像长相的认识。例如：
   - 幂函数$y=x^a$并不总是 $y=x^2$ 和 $y = x^3$ 这样图像过原点并经过一二象限或一三象限的情形。 当 $a < 0$时，函数在$x = 0$处不存在，其左右极限分别取 $-\infty$ 或 $+\infty$ ；当 $a$ 为 $\frac{p}{q}$ 分数形式的有理数时，如果$q$为双数，说明函数存在开根的操作，函数只在 $[0, +\infty)$ 有值。
   - 指数函数是一种增长很快的函数，（在很小的x值就会取到很大的y值），因此示例中默认的坐标取值(横纵坐标都是$[-200, 200]$)不能很好的显示这个图像。需要手动修改`yAxis`的`min`、`max`属性才能正常显示。
