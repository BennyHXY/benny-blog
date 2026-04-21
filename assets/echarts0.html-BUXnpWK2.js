import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,f as h,d as a,w as l,a as s,b as n,r as t,o as d}from"./app-OOVpLyP9.js";const u={};function k(m,i){const e=t("ECharts"),p=t("VPPreview");return d(),c("div",null,[i[2]||(i[2]=h(`<h1 id="echarts0" tabindex="-1"><a class="header-anchor" href="#echarts0"><span>ECharts0</span></a></h1><h2 id="安装及配置" tabindex="-1"><a class="header-anchor" href="#安装及配置"><span>安装及配置</span></a></h2><p>[<a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html</a>]</p><h3 id="设置脚本白名单" tabindex="-1"><a class="header-anchor" href="#设置脚本白名单"><span>设置脚本白名单</span></a></h3><p><code>.vuepress/config.ts</code></p><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-typescript"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">markdownChartPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;@vuepress/plugin-markdown-chart&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    markdownChartPlugin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 开启 ECharts 支持</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      echarts</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 开启脚本执行功能（“总开关”）</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      DANGEROUS_ALLOW_SCRIPT_EXECUTION</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">      // 指定哪些文件可以执行脚本（“白名单”）</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &quot;/your/safe/file.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 例如：&#39;/posts/safe-chart.md&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="使用脚本" tabindex="-1"><a class="header-anchor" href="#使用脚本"><span>使用脚本</span></a></h3><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::: echarts Title</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> option</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 此处为 ECharts 图表配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用json" tabindex="-1"><a class="header-anchor" href="#使用json"><span>使用json</span></a></h3><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">::: echarts 标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  // 此处为 ECharts 图表配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo"><span>demo</span></a></h3>`,13)),a(p,{title:"demo"},{content:l(()=>[a(e,{config:"eJyNVE2P2jAQvfMrRjmFgthoVz0Uyla0uwcOqz1UrSohVA1kSKw6dmQ7LGjFf+/Y+VjSUlQO42DPx3vjed5qZR2k6BDmsFrPBoOdNhBLciB4J5nx8hHe8zIaDYPfpKxsHj+hyydGVyptPlGluoiH8A5uk2Q45ER1al06oRWneh0AHBYHYafhE6DAwxQin/IJD9GY907eHM993LEkdtqio0ybY/CCAGMKq2gRjSH67M0Xbx68eYzWtZNQezKWo52pqN5CJQr0cB4qE9Yp3CXJP86+lVyGwzuPgPd2DDc3oJU8gssJJJqMmOUdbNBYeBFSwoYgFbaUeKS0JWXJCGJWq5Cp5gZgCKUTBX3Vxp3jBFBYeN4/GsJdI7hKt1V3wdt2R+KGZNs6/7O5fuknBii1FTX3yIgsd10+gD3KihZtI/qBgUazhA5LykilbbV+peDltJYbzT275AGwI3SVYVIt3ALNr+vgGww19e+C+Pg6V25w+sx3NYUdSvt3HsN3p88xXK1qcU8Luyww+7+IsARzYfDCUF0bur7DI1qhMr4zKRQ1Q/DHYRv75nKaNSI0lVcgq3N+H4Bf0njQtiSVubxWeye1lVjDaA5XJN//fw/J5AN88g9BAiwZfg/4OQCgbY7G2Ykl9xxehbiZjFYcr70xr1+lUxi2E2dgNg0dr5llytA501I5Mjy48Rs7sYO4rfXTS1FbSod82TxvCraSm9NF1alqfNyl2NcZh/bz128Apm/c",title:"A%20bar%20chart",type:"js"})]),code:l(()=>[...i[0]||(i[0]=[s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",{class:"language-"},[s("span",{class:"line"},[s("span",null,"::: echarts A bar chart")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"```js")]),n(`
`),s("span",{class:"line"},[s("span",null,"const data = [];")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"for (let i = 0; i < 5; i++) data.push(Math.round(Math.random() * 200));")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  xAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    max: "dataMax",')]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  yAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    type: "category",')]),n(`
`),s("span",{class:"line"},[s("span",null,'    data: ["A", "B", "C", "D", "E"],')]),n(`
`),s("span",{class:"line"},[s("span",null,"    inverse: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    animationDuration: 300,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    animationDurationUpdate: 300,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    max: 2, // only the largest 3 bars will be displayed")]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  series: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      realtimeSort: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,'      name: "X",')]),n(`
`),s("span",{class:"line"},[s("span",null,'      type: "bar",')]),n(`
`),s("span",{class:"line"},[s("span",null,"      data: data,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,'        position: "right",')]),n(`
`),s("span",{class:"line"},[s("span",null,"        valueAnimation: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ],")]),n(`
`),s("span",{class:"line"},[s("span",null,"  legend: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  toolbox: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    feature: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      mark: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      dataView: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"        readOnly: false,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      restore: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      saveAsImage: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  animationDuration: 0,")]),n(`
`),s("span",{class:"line"},[s("span",null,"  animationDurationUpdate: 3000,")]),n(`
`),s("span",{class:"line"},[s("span",null,'  animationEasing: "linear",')]),n(`
`),s("span",{class:"line"},[s("span",null,'  animationEasingUpdate: "linear",')]),n(`
`),s("span",{class:"line"},[s("span",null,"};")]),n(`
`),s("span",{class:"line"},[s("span",null,"const run = () => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  for (let i = 0; i < data.length; i++)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    data[i] += Math.round(Math.random() * Math.random() > 0.9 ? 2000 : 200);")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  echarts.setOption({")]),n(`
`),s("span",{class:"line"},[s("span",null,'    series: [{ type: "bar", data }],')]),n(`
`),s("span",{class:"line"},[s("span",null,"  });")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const timeId = setInterval(() => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  if (echarts._disposed) return clearInterval(timeId);")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  run();")]),n(`
`),s("span",{class:"line"},[s("span",null,"}, 3000);")]),n(`
`),s("span",{class:"line"},[s("span",null,"```")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,":::")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])]),_:1}),i[3]||(i[3]=s("h3",{id:"函数绘图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#函数绘图"},[s("span",null,"函数绘图")])],-1)),i[4]||(i[4]=s("ul",null,[s("li",null,[n("["),s("a",{href:"https://echarts.apache.org/examples/zh/editor.html?c=line-function",target:"_blank",rel:"noopener noreferrer"},"https://echarts.apache.org/examples/zh/editor.html?c=line-function"),n("]")])],-1)),a(p,{title:"函数绘图"},{content:l(()=>[a(e,{config:"eJy1UztPwzAQ3vsrTkwpj5IWWFwyILEgwQRioOrgNm57IrEj2xGpUP87d47TBwIWIIPl++7xfXe+LGo992g08CVp+vDeA2jgPINhOqarVb62Gh6kXw0cao44bq25cUlDxghOYLhFQwwZF4SOGL2iMpvelmaptLLSq1vpZdKyFcpDTiZkMJky58JYSBhFgs5GaTqm23UG8XaSQTogRs6FkDmoardKJnjadoH9aZ/rbHb6OYp1mCqoyEKy1FhKtgUsZOHUKWFLi7mIpb2pBFymDLPKhRfUTWtZXK7I7Jwz470pO/eGj+amQddV0rJUAo6aoza8RG3sE85fOz+AW5k3Ad7WQUWsESMfqwL9PWoq8WN4ONZf8K53vALOhmlUXcpG0DN31j+K4vG/GJ7QJHi+y6CZrytWjNphrqJs2ggsvLIPJmefNnrnCWO+07miVibptIOdl9Y/y6KmBNqgDlY6j2CHxZb+TlCY/28FhTSnLCp6ysORRT0FTX7Lyaof1+XMFHubzN+8QFrh/Xb4JcSnv/CQeDPufQCwXhOB",title:"%E5%87%BD%E6%95%B0%E7%BB%98%E5%9B%BE",type:"js"})]),code:l(()=>[...i[1]||(i[1]=[s("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",{class:"language-"},[s("span",{class:"line"},[s("span",null,"::: echarts 函数绘图")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"```js")]),n(`
`),s("span",{class:"line"},[s("span",null,"function func(x) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  x /= 10;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"function generateData() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let data = [];")]),n(`
`),s("span",{class:"line"},[s("span",null,"  for (let i = -200; i <= 200; i += 0.1) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    data.push([i, func(i)]);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  return data;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"option = {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  animation: false,")]),n(`
`),s("span",{class:"line"},[s("span",null,"  grid: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    top: 40,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    left: 50,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    right: 40,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    bottom: 50,")]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  xAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    name: "x",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    minorTick: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    minorSplitLine: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  yAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    name: "y",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    min: -100,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    max: 100,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    minorTick: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    minorSplitLine: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  dataZoom: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,'      type: "inside",')]),n(`
`),s("span",{class:"line"},[s("span",null,'      filterMode: "none",')]),n(`
`),s("span",{class:"line"},[s("span",null,"      xAxisIndex: [0],")]),n(`
`),s("span",{class:"line"},[s("span",null,"      startValue: -20,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      endValue: 20,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      show: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,'      type: "inside",')]),n(`
`),s("span",{class:"line"},[s("span",null,'      filterMode: "none",')]),n(`
`),s("span",{class:"line"},[s("span",null,"      yAxisIndex: [0],")]),n(`
`),s("span",{class:"line"},[s("span",null,"      startValue: -20,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      endValue: 20,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ],")]),n(`
`),s("span",{class:"line"},[s("span",null,"  series: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,'      type: "line",')]),n(`
`),s("span",{class:"line"},[s("span",null,"      showSymbol: false,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      clip: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      data: generateData(),")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ],")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")]),n(`
`),s("span",{class:"line"},[s("span",null,"```")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,":::")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])]),_:1})])}const b=r(u,[["render",k]]),g=JSON.parse(`{"path":"/zh/posts/playground/echarts0.html","title":"ECharts0","lang":"zh-CN","frontmatter":{"title":"ECharts0","icon":"pen-to-square","date":"2026-04-04T00:00:00.000Z","category":["数据统计","图表"],"tag":["红","小","圆"],"description":"ECharts0 安装及配置 [https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html] 设置脚本白名单 .vuepress/config.ts 使用 使用脚本 使用json 例子 demo 函数绘图 [https://echarts.apache.org/examples...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ECharts0\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-04-04T00:00:00.000Z\\",\\"dateModified\\":\\"2026-04-08T17:15:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BennyHXY\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://mister-hope.github.io/benny-blog/zh/posts/playground/echarts0.html"}],["meta",{"property":"og:site_name","content":"胡小言的博客"}],["meta",{"property":"og:title","content":"ECharts0"}],["meta",{"property":"og:description","content":"ECharts0 安装及配置 [https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html] 设置脚本白名单 .vuepress/config.ts 使用 使用脚本 使用json 例子 demo 函数绘图 [https://echarts.apache.org/examples..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-04-08T17:15:29.000Z"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:tag","content":"小"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:published_time","content":"2026-04-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-04-08T17:15:29.000Z"}]]},"git":{"createdTime":1775372078000,"updatedTime":1775668529000,"contributors":[{"name":"BennyHXY","username":"BennyHXY","email":"1470011518@qq.com","commits":2,"url":"https://github.com/BennyHXY"}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"zh/posts/playground/echarts0.md","excerpt":"\\n<h2>安装及配置</h2>\\n<p>[<a href=\\"https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html</a>]</p>\\n<h3>设置脚本白名单</h3>\\n<p><code>.vuepress/config.ts</code></p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"typescript\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-typescript\\"><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">markdownChartPlugin</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"@vuepress/plugin-markdown-chart\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">export</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#C678DD\\"> default</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  plugins</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">    markdownChartPlugin</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      // 开启 ECharts 支持</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      echarts</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> true</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      // 开启脚本执行功能（“总开关”）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      DANGEROUS_ALLOW_SCRIPT_EXECUTION</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> true</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">      // 指定哪些文件可以执行脚本（“白名单”）</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">      DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">        \\"/your/safe/file.md\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// 例如：'/posts/safe-chart.md'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">      ],</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    }),</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  ],</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">};</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{b as comp,g as data};
