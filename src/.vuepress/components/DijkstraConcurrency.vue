<template>
  <div class="dijkstra-demo">
    <div class="demo-header">
      <div class="eyebrow">E.W. Dijkstra · 1956</div>
      <h2 class="demo-title">计算器与打字机</h2>
      <p class="demo-subtitle">
        一个输出寄存器如何让两个设备从互相等待变成同时运行
      </p>
    </div>

    <div class="mode-toggle">
      <button
        :class="['mode-btn', mode === 'serial' ? 'mode-btn--active' : '']"
        @click="setMode('serial')"
      >
        <span class="mode-label">模式一</span>
        <span class="mode-desc">串行·无输出寄存器</span>
      </button>
      <button
        :class="['mode-btn', mode === 'parallel' ? 'mode-btn--active' : '']"
        @click="setMode('parallel')"
      >
        <span class="mode-label">模式二</span>
        <span class="mode-desc">并行·有输出寄存器</span>
      </button>
    </div>

    <div class="mode-description">
      {{ currentDesc }}
    </div>

    <div class="devices">
      <div class="device-card">
        <div class="device-icon">⚙</div>
        <div class="device-name">计算器</div>
        <div
          :class="[
            'device-status',
            calcActive ? 'device-status--active-calc' : 'device-status--idle',
          ]"
        >
          {{ calcStatusText }}
        </div>
        <div class="progress-track">
          <div
            class="progress-bar progress-bar--calc"
            :style="{ width: calcActive ? '100%' : '0%' }"
          ></div>
        </div>
        <div class="device-hint">{{ calcHint }}</div>
      </div>

      <div v-if="mode === 'parallel'" class="register-card">
        <div class="register-label">输出寄存器</div>
        <div class="register-value">{{ registerText }}</div>
        <div class="register-arrow">↓</div>
      </div>
      <div v-else class="register-placeholder"></div>

      <div class="device-card">
        <div class="device-icon">⌨</div>
        <div class="device-name">打字机</div>
        <div
          :class="[
            'device-status',
            typeActive ? 'device-status--active-type' : 'device-status--idle',
          ]"
        >
          {{ typeStatusText }}
        </div>
        <div class="progress-track">
          <div
            class="progress-bar progress-bar--type"
            :style="{ width: typeActive ? '100%' : '0%' }"
          ></div>
        </div>
        <div class="device-hint">{{ typeHint }}</div>
      </div>
    </div>

    <div class="timeline-section">
      <div class="timeline-label">时间轴 · 每格 = 10ms</div>
      <div class="timeline-cells">
        <div
          v-for="(cell, i) in timelineCells"
          :key="i"
          :class="['timeline-cell', cell.type]"
          :title="cell.tooltip"
        >
          <span class="cell-tick">{{ i * 10 }}</span>
        </div>
      </div>
      <div class="timeline-legend">
        <span class="legend-item">
          <span class="legend-dot legend-dot--calc"></span>计算器运行
        </span>
        <span class="legend-item">
          <span class="legend-dot legend-dot--type"></span>打字机运行
        </span>
        <span class="legend-item">
          <span class="legend-dot legend-dot--both"></span>同时运行
        </span>
        <span class="legend-item">
          <span class="legend-dot legend-dot--idle"></span>等待/空闲
        </span>
      </div>
    </div>

    <div class="controls">
      <button
        class="ctrl-btn ctrl-btn--primary"
        @click="startAnim"
        :disabled="running"
      >
        {{ running ? "演示中..." : "开始演示" }}
      </button>
      <button class="ctrl-btn" @click="resetAnim">重置</button>
      <span v-if="totalTimeText" class="total-time">{{ totalTimeText }}</span>
    </div>

    <div class="quote-block">
      <p class="quote-text">
        "the unhampered calculator continues to calculate at electronic speed,
        while under control of the output register the mechanical typewriter
        types the character."
      </p>
      <p class="quote-attr">— E.W. Dijkstra, EWD1303</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DijkstraConcurrency",
  data() {
    return {
      mode: "serial",
      running: false,
      tick: 0,
      animTimer: null,
      calcActive: false,
      typeActive: false,
      calcStatusText: "",
      typeStatusText: "",
      calcHint: "",
      typeHint: "",
      registerText: "（空）",
      totalTimeText: "",
      timelineCells: [],
      descs: {
        serial:
          "没有输出寄存器：计算器写入字符后必须等待约 100ms 让打字机打完，期间计算器完全空闲。计算与打字交替进行，互相阻塞。",
        parallel:
          "有输出寄存器：计算器以电子速度将数据复制到寄存器，随即继续计算。打字机独立从寄存器读取数据。两者同时运行，互不干扰。",
      },
    };
  },
  computed: {
    currentDesc() {
      return this.descs[this.mode];
    },
    totalTicks() {
      return this.mode === "serial" ? 20 : 14;
    },
  },
  mounted() {
    this.buildTimeline();
  },
  methods: {
    setMode(m) {
      this.mode = m;
      this.resetAnim();
    },
    buildTimeline() {
      this.timelineCells = Array.from({ length: this.totalTicks }, () => ({
        type: "cell--idle",
        tooltip: "",
      }));
    },
    getState(t) {
      if (this.mode === "serial") {
        const cycle = t % 20;
        if (cycle < 2)
          return { calc: true, type: false, reg: null, copy: false };
        if (cycle < 12)
          return { calc: false, type: true, reg: null, copy: false };
        if (cycle < 14)
          return { calc: true, type: false, reg: null, copy: false };
        return { calc: false, type: true, reg: null, copy: false };
      } else {
        if (t === 0)
          return { calc: false, type: false, reg: "复制中...", copy: true };
        if (t < 2)
          return { calc: true, type: false, reg: "数据已写入", copy: false };
        if (t < 12)
          return { calc: true, type: true, reg: "打字机读取中", copy: false };
        return { calc: true, type: false, reg: "完成", copy: false };
      }
    },
    getCellType(t) {
      if (this.mode === "serial") {
        const cycle = t % 20;
        if (cycle < 2 || (cycle >= 12 && cycle < 14)) return "cell--calc";
        return "cell--type";
      } else {
        if (t === 0) return "cell--calc";
        if (t < 2) return "cell--calc";
        if (t < 12) return "cell--both";
        return "cell--calc";
      }
    },
    startAnim() {
      if (this.running) return;
      this.running = true;
      this.tick = 0;
      this.buildTimeline();
      this.totalTimeText = "";
      this.runTick();
    },
    runTick() {
      if (this.tick >= this.totalTicks) {
        this.running = false;
        this.totalTimeText =
          this.mode === "serial"
            ? "串行总耗时约 200ms（打2个字符）"
            : "并行总耗时约 120ms（打2个字符）—— 节省约 40%";
        return;
      }
      const s = this.getState(this.tick);
      this.calcActive = s.calc || s.copy;
      this.typeActive = s.type;
      this.calcStatusText = s.copy
        ? "复制到寄存器"
        : s.calc
          ? "计算中"
          : "等待中";
      this.typeStatusText = s.type ? "打字中" : "等待中";
      this.calcHint = s.calc || s.copy ? "电子速度" : "空闲";
      this.typeHint = s.type ? "机械速度 · 约100ms" : "空闲";
      if (s.reg !== null) this.registerText = s.reg;

      const cells = [...this.timelineCells];
      cells[this.tick] = {
        type: this.getCellType(this.tick),
        tooltip: `t=${this.tick * 10}ms`,
      };
      this.timelineCells = cells;

      this.tick++;
      this.animTimer = setTimeout(this.runTick, 280);
    },
    resetAnim() {
      if (this.animTimer) {
        clearTimeout(this.animTimer);
        this.animTimer = null;
      }
      this.running = false;
      this.tick = 0;
      this.calcActive = false;
      this.typeActive = false;
      this.calcStatusText = "";
      this.typeStatusText = "";
      this.calcHint = "";
      this.typeHint = "";
      this.registerText = "（空）";
      this.totalTimeText = "";
      this.buildTimeline();
    },
  },
  beforeUnmount() {
    if (this.animTimer) clearTimeout(this.animTimer);
  },
};
</script>

<style scoped>
.dijkstra-demo {
  font-family: "IBM Plex Mono", "Courier New", monospace;
  max-width: 720px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #1a1a1a;
}

.demo-header {
  margin-bottom: 2rem;
  border-left: 3px solid #378add;
  padding-left: 1rem;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #378add;
  margin-bottom: 0.4rem;
}

.demo-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
}

.demo-subtitle {
  font-size: 14px;
  color: #555;
  margin: 0;
  line-height: 1.6;
}

.mode-toggle {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 1rem;
}

.mode-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 14px;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
}

.mode-btn:hover {
  border-color: #378add;
}

.mode-btn--active {
  border-color: #378add;
  background: #e8f2fb;
}

.mode-label {
  font-size: 12px;
  font-weight: 600;
  color: #378add;
  margin-bottom: 2px;
}

.mode-desc {
  font-size: 12px;
  color: #555;
}

.mode-description {
  font-size: 13px;
  color: #444;
  line-height: 1.7;
  background: #f6f6f6;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 1.5rem;
  border-left: 3px solid #ddd;
}

.devices {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 12px;
  align-items: center;
  margin-bottom: 1.5rem;
}

.device-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem;
}

.device-icon {
  font-size: 24px;
  margin-bottom: 6px;
}

.device-name {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.device-status {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  min-height: 20px;
  transition: color 0.2s;
}

.device-status--active-calc {
  color: #378add;
}
.device-status--active-type {
  color: #1d9e75;
}
.device-status--idle {
  color: #aaa;
}

.progress-track {
  background: #eee;
  border-radius: 4px;
  height: 6px;
  overflow: hidden;
  margin-bottom: 6px;
}

.progress-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 0.25s ease;
}

.progress-bar--calc {
  background: #378add;
}
.progress-bar--type {
  background: #1d9e75;
}

.device-hint {
  font-size: 11px;
  color: #999;
}

.register-card {
  background: #fff8e6;
  border: 1.5px dashed #ef9f27;
  border-radius: 8px;
  padding: 10px 12px;
  text-align: center;
  min-width: 100px;
}

.register-placeholder {
  min-width: 40px;
}

.register-label {
  font-size: 10px;
  color: #ba7517;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.register-value {
  font-size: 12px;
  font-weight: 600;
  color: #854f0b;
  margin-bottom: 4px;
  min-height: 18px;
}

.register-arrow {
  font-size: 16px;
  color: #ef9f27;
}

.timeline-section {
  margin-bottom: 1.5rem;
}

.timeline-label {
  font-size: 11px;
  color: #888;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.timeline-cells {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-bottom: 8px;
}

.timeline-cell {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 2px;
  transition: background 0.2s;
}

.cell-tick {
  font-size: 9px;
  color: rgba(255, 255, 255, 0.7);
}

.cell--idle {
  background: #e8e8e8;
}
.cell--idle .cell-tick {
  color: #bbb;
}
.cell--calc {
  background: #378add;
}
.cell--type {
  background: #1d9e75;
}
.cell--both {
  background: linear-gradient(135deg, #378add 50%, #1d9e75 50%);
}

.timeline-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #666;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  flex-shrink: 0;
}

.legend-dot--calc {
  background: #378add;
}
.legend-dot--type {
  background: #1d9e75;
}
.legend-dot--both {
  background: linear-gradient(135deg, #378add 50%, #1d9e75 50%);
}
.legend-dot--idle {
  background: #e8e8e8;
  border: 1px solid #ddd;
}

.controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.ctrl-btn {
  padding: 8px 18px;
  font-size: 13px;
  font-family: inherit;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.15s;
}

.ctrl-btn:hover {
  background: #f0f0f0;
}
.ctrl-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ctrl-btn--primary {
  background: #378add;
  color: white;
  border-color: #378add;
}

.ctrl-btn--primary:hover:not(:disabled) {
  background: #2970c0;
}

.total-time {
  font-size: 13px;
  color: #1d9e75;
  font-weight: 500;
}

.quote-block {
  border-top: 1px solid #eee;
  padding-top: 1.2rem;
  margin-top: 0.5rem;
}

.quote-text {
  font-size: 12px;
  color: #888;
  line-height: 1.7;
  font-style: italic;
  margin: 0 0 4px;
}

.quote-attr {
  font-size: 11px;
  color: #aaa;
  margin: 0;
}

@media (max-width: 500px) {
  .devices {
    grid-template-columns: 1fr;
  }
  .register-card {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  .register-arrow {
    transform: rotate(90deg);
  }
}
</style>
