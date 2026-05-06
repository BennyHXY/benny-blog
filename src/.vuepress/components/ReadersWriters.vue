<template>
  <div class="rw-demo">
    <h3 class="rw-title">读者-写者问题演示</h3>

    <!-- 共享数据库 -->
    <div class="rw-db">
      <span class="rw-db-label">共享数据库（临界区）</span>
      <span class="rw-db-value">{{ dbContent }}</span>
    </div>

    <!-- 信号量状态 -->
    <div class="rw-sem-row">
      <div class="rw-sem">
        <span class="rw-sem-name">rw_mutex</span>
        <span :class="['rw-sem-val', rwMutex > 0 ? 'ok' : 'blocked']">{{ rwMutex }}</span>
      </div>
      <div class="rw-sem">
        <span class="rw-sem-name">mutex</span>
        <span :class="['rw-sem-val', mutexSem > 0 ? 'ok' : 'blocked']">{{ mutexSem }}</span>
      </div>
      <div class="rw-sem">
        <span class="rw-sem-name">n_reader</span>
        <span class="rw-sem-val">{{ nReader }}</span>
      </div>
    </div>

    <!-- 时长设置 -->
    <div class="rw-config">
      <div class="rw-config-title">操作时长设置</div>
      <div class="rw-config-row">
        <label class="rw-config-item">
          <span>读取</span>
          <input type="range" v-model.number="readDur" min="1" max="10" />
          <span class="rw-config-val">{{ readDur }}s</span>
        </label>
        <label class="rw-config-item">
          <span>写入</span>
          <input type="range" v-model.number="writeDur" min="1" max="10" />
          <span class="rw-config-val">{{ writeDur }}s</span>
        </label>
        <label class="rw-config-item">
          <span>浮动</span>
          <input type="range" v-model.number="jitter" min="0" max="3" />
          <span class="rw-config-val">{{ jitter }}s</span>
        </label>
      </div>
    </div>

    <!-- 线程区 -->
    <div class="rw-threads">
      <div
        v-for="t in threads"
        :key="t.id"
        :class="['rw-thread', t.css]"
      >
        <div class="rw-thread-name">{{ t.name }}</div>
        <div class="rw-thread-state">{{ t.state }}</div>
      </div>
      <div v-if="threads.length === 0" class="rw-thread-empty">
        点击下方按钮添加线程
      </div>
    </div>

    <!-- 控制按钮 -->
    <div class="rw-btns">
      <button class="rw-btn rw-btn-reader" @click="addThread('r')">+ 读者</button>
      <button class="rw-btn rw-btn-writer" @click="addThread('w')">+ 写者</button>
      <button class="rw-btn rw-btn-reset" @click="resetAll">重置</button>
    </div>

    <!-- 日志 -->
    <div class="rw-log" ref="logEl">
      <div
        v-for="(entry, i) in logs"
        :key="i"
        :class="['rw-log-line', entry.cls]"
      >
        [{{ entry.time }}] {{ entry.msg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadersWriters',
  data() {
    return {
      rwMutex: 1,
      mutexSem: 1,
      nReader: 0,
      dbVer: 0,
      dbContent: 'data_v0',
      tid: 0,
      threads: [],
      logs: [],
      readDur: 4,
      writeDur: 5,
      jitter: 1,
    }
  },
  methods: {
    sleep(ms) {
      return new Promise(r => setTimeout(r, ms))
    },
    getTime() {
      const d = new Date()
      return [d.getHours(), d.getMinutes(), d.getSeconds()]
        .map(x => String(x).padStart(2, '0'))
        .join(':')
    },
    log(msg, cls = 'log-sys') {
      this.logs.push({ time: this.getTime(), msg, cls })
      this.$nextTick(() => {
        const el = this.$refs.logEl
        if (el) el.scrollTop = el.scrollHeight
      })
    },
    async runReader(t) {
      t.state = '等待进入'
      t.css = 'waiting-r'
      this.log(`${t.name} 请求读取`, 'log-r')

      while (this.mutexSem <= 0) await this.sleep(200)
      this.mutexSem--
      this.nReader++
      if (this.nReader === 1) {
        while (this.rwMutex <= 0) {
          t.state = '等 rw_mutex'
          await this.sleep(200)
        }
        this.rwMutex--
        this.log(`${t.name} 第一个读者，封锁写者`, 'log-r')
      }
      this.mutexSem++

      t.state = '读取中'
      t.css = 'reading'
      const dur = this.readDur * 1000 + Math.random() * this.jitter * 1000
      this.log(`${t.name} 开始读取，${(dur / 1000).toFixed(1)}s（共 ${this.nReader} 个读者）`, 'log-r')
      await this.sleep(dur)

      while (this.mutexSem <= 0) await this.sleep(200)
      this.mutexSem--
      this.nReader--
      if (this.nReader === 0) {
        this.rwMutex++
        this.log(`${t.name} 最后读者，释放写者`, 'log-r')
      }
      this.mutexSem++

      t.state = '完成'
      t.css = 'idle'
      this.log(`${t.name} 读取完毕`, 'log-r')
      await this.sleep(400)
      this.threads = this.threads.filter(x => x !== t)
    },
    async runWriter(t) {
      t.state = '等待进入'
      t.css = 'waiting-w'
      this.log(`${t.name} 请求写入`, 'log-w')

      while (this.rwMutex <= 0) {
        t.state = '等 rw_mutex'
        await this.sleep(200)
      }
      this.rwMutex--

      t.state = '写入中'
      t.css = 'writing'
      this.dbVer++
      this.dbContent = `data_v${this.dbVer} (写入中...)`
      const dur = this.writeDur * 1000 + Math.random() * this.jitter * 1000
      this.log(`${t.name} 独占写入，${(dur / 1000).toFixed(1)}s`, 'log-w')
      await this.sleep(dur)
      this.dbContent = `data_v${this.dbVer}`

      this.rwMutex++
      t.state = '完成'
      t.css = 'idle'
      this.log(`${t.name} 写入完毕`, 'log-w')
      await this.sleep(400)
      this.threads = this.threads.filter(x => x !== t)
    },
    addThread(type) {
      this.tid++
      const t = {
        id: this.tid,
        name: (type === 'r' ? '读者' : '写者') + this.tid,
        type,
        state: '初始化',
        css: 'idle',
      }
      this.threads.push(t)
      if (type === 'r') this.runReader(t)
      else this.runWriter(t)
    },
    resetAll() {
      this.threads = []
      this.rwMutex = 1
      this.mutexSem = 1
      this.nReader = 0
      this.dbVer = 0
      this.dbContent = 'data_v0'
      this.tid = 0
      this.logs = []
      this.log('已重置')
    },
  },
  mounted() {
    this.log('就绪。点击按钮添加线程开始演示')
  },
}
</script>

<style scoped>
.rw-demo {
  --c-bg: #ffffff;
  --c-bg2: #f6f5f0;
  --c-border: rgba(0, 0, 0, 0.1);
  --c-text: #2c2c2a;
  --c-text2: #73726c;
  --c-text3: #9c9a92;
  --c-reader: #1d9e75;
  --c-reader-bg: #e1f5ee;
  --c-reader-border: #1d9e75;
  --c-reader-text: #085041;
  --c-writer: #e24b4a;
  --c-writer-bg: #fcebeb;
  --c-writer-border: #e24b4a;
  --c-writer-text: #791f1f;
  --c-wait-r-bg: #eeedfe;
  --c-wait-r-border: #7f77dd;
  --c-wait-r-text: #3c3489;
  --c-wait-w-bg: #faeeda;
  --c-wait-w-border: #ba7517;
  --c-wait-w-text: #633806;
  --c-idle-bg: #f1efe8;
  --c-idle-border: #d3d1c7;
  --c-idle-text: #888780;
  --c-success: #1d9e75;
  --c-danger: #e24b4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 13px;
  color: var(--c-text);
  padding: 16px;
  max-width: 680px;
}

@media (prefers-color-scheme: dark) {
  .rw-demo {
    --c-bg: #1a1a1a;
    --c-bg2: #2a2a28;
    --c-border: rgba(255, 255, 255, 0.12);
    --c-text: #e0ded6;
    --c-text2: #9c9a92;
    --c-text3: #6e6d68;
    --c-reader-bg: #0a3326;
    --c-reader-border: #0f6e56;
    --c-reader-text: #9fe1cb;
    --c-writer-bg: #3d1515;
    --c-writer-border: #a32d2d;
    --c-writer-text: #f7c1c1;
    --c-wait-r-bg: #2a2560;
    --c-wait-r-border: #534ab7;
    --c-wait-r-text: #cecbf6;
    --c-wait-w-bg: #3d2a08;
    --c-wait-w-border: #854f0b;
    --c-wait-w-text: #fac775;
    --c-idle-bg: #333330;
    --c-idle-border: #5f5e5a;
    --c-idle-text: #b4b2a9;
  }
}

.rw-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 12px 0;
}

.rw-db {
  background: var(--c-bg2);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rw-db-label { font-size: 11px; color: var(--c-text2); }
.rw-db-value { font-weight: 500; font-size: 14px; }

.rw-sem-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.rw-sem {
  flex: 1;
  background: var(--c-bg2);
  border: 1px solid var(--c-border);
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rw-sem-name { color: var(--c-text2); font-size: 11px; }
.rw-sem-val { font-weight: 500; font-size: 15px; }
.rw-sem-val.ok { color: var(--c-success); }
.rw-sem-val.blocked { color: var(--c-danger); }

.rw-config {
  background: var(--c-bg2);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 10px;
}
.rw-config-title {
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--c-text2);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.rw-config-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.rw-config-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--c-text2);
  cursor: pointer;
}
.rw-config-item input[type='range'] {
  width: 80px;
  accent-color: var(--c-reader);
}
.rw-config-val {
  min-width: 28px;
  font-weight: 500;
  color: var(--c-text);
}

.rw-threads {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  min-height: 44px;
  margin-bottom: 10px;
}
.rw-thread {
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  border: 1px solid transparent;
  min-width: 76px;
  text-align: center;
  transition: background 0.3s, border-color 0.3s;
}
.rw-thread.idle {
  background: var(--c-idle-bg);
  border-color: var(--c-idle-border);
  color: var(--c-idle-text);
}
.rw-thread.waiting-r {
  background: var(--c-wait-r-bg);
  border-color: var(--c-wait-r-border);
  color: var(--c-wait-r-text);
}
.rw-thread.reading {
  background: var(--c-reader-bg);
  border-color: var(--c-reader-border);
  color: var(--c-reader-text);
}
.rw-thread.waiting-w {
  background: var(--c-wait-w-bg);
  border-color: var(--c-wait-w-border);
  color: var(--c-wait-w-text);
}
.rw-thread.writing {
  background: var(--c-writer-bg);
  border-color: var(--c-writer-border);
  color: var(--c-writer-text);
}
.rw-thread-name { font-weight: 500; }
.rw-thread-state { font-size: 11px; margin-top: 2px; opacity: 0.8; }
.rw-thread-empty { color: var(--c-text3); font-size: 12px; padding: 10px; }

.rw-btns {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.rw-btn {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid var(--c-border);
  background: var(--c-bg2);
  color: var(--c-text);
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.15s;
}
.rw-btn:hover { opacity: 0.8; }
.rw-btn-reader {
  background: var(--c-reader);
  border-color: var(--c-reader);
  color: #fff;
}
.rw-btn-writer {
  background: var(--c-writer);
  border-color: var(--c-writer);
  color: #fff;
}
.rw-btn-reset {
  background: var(--c-bg2);
}

.rw-log {
  background: var(--c-bg2);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 8px 12px;
  height: 120px;
  overflow-y: auto;
  font-size: 11px;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  line-height: 1.8;
}
.rw-log-line.log-r { color: var(--c-reader); }
.rw-log-line.log-w { color: var(--c-writer); }
.rw-log-line.log-sys { color: var(--c-text3); }
</style>
