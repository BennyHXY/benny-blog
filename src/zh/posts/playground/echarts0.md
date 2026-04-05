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
