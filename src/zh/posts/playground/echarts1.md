---
title: ECharts1
icon: pen-to-square
date: 2026-04-05
category:
  - 数据统计
  - 图表
tag:
  - 红
  - 小
  - 圆
---

# ECharts1

## 柱状图

::::preview 展开查看代码

::: echarts 真题分布

```js
const option = {
  // 此处为 ECharts 图表配置
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
  legend: {},
  tooltip: {},
  xAxis: {
    name: "主要考点",
    type: "category",
    data: [
      "半导体存储器",
      "主存的扩充及与CPU的连接",
      "低位交叉存储器",
      "磁盘存储器",
      "高速缓冲存储器（Cache）",
      "虚拟存储器",
    ],
    axisLabel: {
      interval: 0,
      formatter: function (value) {
        return value.length > 6
          ? value.slice(0, 6) + "\n" + value.slice(6)
          : value;
      },
    },
  },
  yAxis: { name: "考查次数", type: "value" },
  series: [
    {
      type: "bar",
      name: "单项选择题",
      data: [6, 6, 2, 4, 12, 5],
    },
    {
      type: "bar",
      name: "综合应用题",
      data: [1, 1, 1, 0, 9, 9],
    },
  ],
};
```

:::

::::

:::: preview
::: echarts Title

```js
const option = {
  // 此处为 ECharts 图表配置
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
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};
```

:::
::::
