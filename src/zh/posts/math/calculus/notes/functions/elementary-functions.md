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

- $y=x^n$

::::tabs#power-function

@tab $y=x^2$
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

@tab $y=x^3$
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

@tab $y=x^4$
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

@tab $y=x^5$
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

::::

## 三角函数

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
