---
title: ECharts0
icon: pen-to-square
date: 2026-04-04
category:
  - 数据统计
  - 图表
tag:
  - 红
  - 小
  - 圆
---

# ECharts0

## 安装及配置

[https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html]

### 设置脚本白名单

`.vuepress/config.ts`

```typescript
import { markdownChartPlugin } from "@vuepress/plugin-markdown-chart";

export default {
  plugins: [
    markdownChartPlugin({
      // 开启 ECharts 支持
      echarts: true,
      // 开启脚本执行功能（“总开关”）
      DANGEROUS_ALLOW_SCRIPT_EXECUTION: true,
      // 指定哪些文件可以执行脚本（“白名单”）
      DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST: [
        "/your/safe/file.md", // 例如：'/posts/safe-chart.md'
      ],
    }),
  ],
};
```

## 使用

### 使用脚本

````md
::: echarts Title

```js
const option = {
  // 此处为 ECharts 图表配置
};
```

:::
````

### 使用json

````md
::: echarts 标题

```json
{
  // 此处为 ECharts 图表配置
}
```

:::
````

## 例子

### demo

::::preview demo

::: echarts A bar chart

```js
const data = [];

for (let i = 0; i < 5; i++) data.push(Math.round(Math.random() * 200));

const option = {
  xAxis: {
    max: "dataMax",
  },
  yAxis: {
    type: "category",
    data: ["A", "B", "C", "D", "E"],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 2, // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: "X",
      type: "bar",
      data: data,
      label: {
        show: true,
        position: "right",
        valueAnimation: true,
      },
    },
  ],
  legend: {
    show: true,
  },
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true,
      },
      dataView: {
        show: true,
        readOnly: false,
      },
      restore: {
        show: true,
      },
      saveAsImage: {
        show: true,
      },
    },
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: "linear",
  animationEasingUpdate: "linear",
};
const run = () => {
  for (let i = 0; i < data.length; i++)
    data[i] += Math.round(Math.random() * Math.random() > 0.9 ? 2000 : 200);

  echarts.setOption({
    series: [{ type: "bar", data }],
  });
};

const timeId = setInterval(() => {
  if (echarts._disposed) return clearInterval(timeId);

  run();
}, 3000);
```

:::

::::

### 函数绘图

- [https://echarts.apache.org/examples/zh/editor.html?c=line-function]

:::: preview 函数绘图

::: echarts 函数绘图

```js
function func(x) {
  x /= 10;
  return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
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

::::
