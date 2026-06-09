---
title: NER - 中文命名实体识别Web演示_系统架构文档
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

---

# 系统架构文档：中文命名实体识别 Web 系统

**版本：** v0.1  
**阶段：** 第一阶段（HanLP 原型）  
**最后更新：** 2025年5月

---

## 一、系统整体架构

本系统采用**前后端分离**架构，分为三层：前端展示层、后端服务层、AI 推理层。

```
┌─────────────────────────────────────────────────────┐
│                     用户浏览器                        │
│                                                     │
│   index.html  ──  style.css  ──  app.js             │
│       │                            │                │
│   页面渲染                     fetch POST /api/ner   │
└───────────────────────┬─────────────────────────────┘
                        │ HTTP Request (JSON)
                        ▼
┌─────────────────────────────────────────────────────┐
│                  Flask 后端（app.py）                 │
│                                                     │
│   GET  /          → 返回 index.html                  │
│   POST /api/ner   → 调用 ner.py → 返回实体列表 JSON  │
└───────────────────────┬─────────────────────────────┘
                        │ Python 函数调用
                        ▼
┌─────────────────────────────────────────────────────┐
│                  NER 推理层（ner.py）                 │
│                                                     │
│   第一阶段：HanLP Pipeline                           │
│   第二阶段：替换为自训练 BERT 模型                    │
│                                                     │
│   输入：str（中文文本）                               │
│   输出：List[Dict]（实体列表）                        │
└─────────────────────────────────────────────────────┘
```

---

## 二、目录结构

```
ner-demo/
├── app.py              # Flask 主程序，路由定义
├── ner.py              # NER 推理封装，对外暴露 recognize(text) 接口
├── requirements.txt    # Python 依赖
├── static/
│   ├── style.css       # 全局样式
│   └── app.js          # 前端交互：请求发送、结果渲染
└── templates/
    └── index.html      # 页面结构
```

---

## 三、接口设计

### 3.1 页面路由

| 方法 | 路径 | 说明                    |
| ---- | ---- | ----------------------- |
| GET  | `/`  | 返回主页面 `index.html` |

### 3.2 NER 推理接口

| 属性         | 值                 |
| ------------ | ------------------ |
| 方法         | POST               |
| 路径         | `/api/ner`         |
| Content-Type | `application/json` |

**请求体：**

```json
{
  "text": "马云在杭州创立了阿里巴巴集团。"
}
```

**成功响应（200）：**

```json
{
  "entities": [
    { "text": "马云",   "type": "NR",  "label": "人名", "start": 0, "end": 2 },
    { "text": "杭州",   "type": "NS",  "label": "地名", "start": 3, "end": 5 },
    { "text": "阿里巴巴集团", "type": "NT", "label": "机构", "start": 8, "end": 14 }
  ]
}
```

**错误响应（400 / 500）：**

```json
{
  "error": "文本不能为空"
}
```

### 3.3 字段说明

| 字段    | 类型   | 说明                                              |
| ------- | ------ | ------------------------------------------------- |
| `text`  | string | 实体原文                                          |
| `type`  | string | HanLP 返回的原始类型码（NR/NS/NT/PER/LOC/ORG 等） |
| `label` | string | 中文标签（人名/地名/机构等），前端直接展示        |
| `start` | int    | 实体在原文中的起始字符索引（含）                  |
| `end`   | int    | 实体在原文中的结束字符索引（不含）                |

---

## 四、数据流

```
用户输入文本
    │
    ▼
app.js：fetch POST /api/ner，携带 { text }
    │
    ▼
app.py：接收请求，校验文本长度（≤500字）
    │
    ▼
ner.py：recognize(text)
    │   ├── 调用 HanLP Pipeline（第一阶段）
    │   └── 解析结果，统一为 List[Dict] 格式返回
    │
    ▼
app.py：jsonify 返回实体列表
    │
    ▼
app.js：renderResult(text, entities)
    │   ├── renderHighlightedText()：按 start/end 插入 <span> 高亮标签
    │   └── renderEntityList()：渲染实体 chip 列表
    │
    ▼
用户看到高亮结果
```

---

## 五、第二阶段替换说明

本系统设计时已做好解耦，第二阶段替换模型**只需修改 `ner.py`**，`app.py` 和前端代码完全不变。

替换点：

```python
# 第一阶段（当前）
_pipeline = hanlp.load(hanlp.pretrained.mtl.CLOSE_TOK_POS_NER_...)
result = _pipeline(text)

# 第二阶段（替换后）
# 加载自训练的 BERT 模型，推理逻辑改变
# 但 recognize(text) 函数的输入输出格式保持不变
```

接口契约（`recognize(text)` 的返回格式）不变，前端零改动。

---

## 六、部署方案（阿里云 + Nginx）

```
外部请求（80/443端口）
    │
    ▼
Nginx（反向代理）
    │   proxy_pass http://127.0.0.1:5000
    ▼
Gunicorn（WSGI 服务器，替代开发用 Flask server）
    │
    ▼
app.py（Flask 应用）
    │
    ▼
ner.py + 模型文件
```

关键命令（第三阶段再操作）：

```bash
pip install gunicorn
gunicorn -w 1 -b 127.0.0.1:5000 app:app
```

> 注意：NER 模型较大，`-w 1` 只开一个 worker，避免多进程重复加载模型占用过多内存。

---

## 七、技术约束与注意事项

| 约束         | 说明                                                |
| ------------ | --------------------------------------------------- |
| 文本长度限制 | 前后端均限制 500 字，超长文本推理时间长且不稳定     |
| 模型加载时间 | 首次请求需加载模型（约 5-10 秒），后续请求正常      |
| 并发能力     | 开发阶段单进程，不支持高并发，演示用途足够          |
| 服务器内存   | HanLP ELECTRA 模型约需 500MB 内存，阿里云需确认配置 |
| Python 版本  | 建议 3.10，避免 3.12+ 的依赖兼容问题                |







