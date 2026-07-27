import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as i,o as e}from"./app-Dy1XwKUU.js";const l={};function t(p,n){return e(),a("div",null,[...n[0]||(n[0]=[i(`<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>overview</span></a></h2><ul><li>自顶向下分析(推导): 从开始符号推导到符号串</li><li>自底向上分析(规约)：从符号串规约回开始符号</li></ul><h2 id="自底向上的语法分析" tabindex="-1"><a class="header-anchor" href="#自底向上的语法分析"><span>自底向上的语法分析</span></a></h2><h3 id="算符优先分析" tabindex="-1"><a class="header-anchor" href="#算符优先分析"><span>算符优先分析</span></a></h3><h4 id="前置" tabindex="-1"><a class="header-anchor" href="#前置"><span>前置</span></a></h4><ul><li><strong>短语</strong>: 短语是当前句型里，某个非终结符能推导出来的一段连续子串</li><li><strong>直接短语</strong>: 一步产生式得到的短语</li><li><strong>句柄</strong>: 最左直接短语</li><li><strong>素短语</strong>: 不能再往里面拆的，含有终结符的短语</li><li><strong>最左素短语</strong>: 算符优先分析每次要规约的对象</li></ul><h4 id="题目" tabindex="-1"><a class="header-anchor" href="#题目"><span>题目</span></a></h4><h5 id="wzd-五" tabindex="-1"><a class="header-anchor" href="#wzd-五"><span>wzd_五</span></a></h5><details class="hint-container details"><summary>详情</summary><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>G[S]:</span></span>
<span class="line"><span>S -&gt; S * T | T</span></span>
<span class="line"><span>T -&gt; T ↑ F | F</span></span>
<span class="line"><span>F -&gt; ( S ) | i</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1)</span></span>
<span class="line"><span>S * F ↑ (S * T) 的推导过程：</span></span>
<span class="line"><span>S =&gt; S * T</span></span>
<span class="line"><span>   =&gt; S * T ↑ F</span></span>
<span class="line"><span>   =&gt; S * F ↑ F</span></span>
<span class="line"><span>   =&gt; S * F ↑ ( S )</span></span>
<span class="line"><span>   =&gt; S * F ↑ ( S * T )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>非终结符: S、T、F</span></span>
<span class="line"><span>关于S的短语:</span></span>
<span class="line"><span>S * T ,  S * F ↑ ( S * T ) 其中 S * T 为直接短语</span></span>
<span class="line"><span>关于T的的短语: </span></span>
<span class="line"><span>F, F ↑ ( S * T ) 其中 F 为直接短语</span></span>
<span class="line"><span>关于F的短语:</span></span>
<span class="line"><span>( S * T )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>句柄(最左直接短语): F</span></span>
<span class="line"><span>素短语: S * T</span></span>
<span class="line"><span>最左素短语:  S * T</span></span>
<span class="line"><span></span></span>
<span class="line"><span>构造算符优先表:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FIRSTVT(S) = {*} + FIRSTVT(T) = {*, ↑, (, i}</span></span>
<span class="line"><span>FIRSTVT(T) = {↑} + FIRSTVT(F) = {↑, (, i}</span></span>
<span class="line"><span>FIRSTVT(F) = {(, i}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LASTVT(S) = {*} + LASTVT(T) = {*, ↑, ), i}</span></span>
<span class="line"><span>LASTVT(T) = {↑} + LASTVT(F) = {↑, ), i}</span></span>
<span class="line"><span>LASTVT(F) = {), i}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由产生式 S -&gt; S * T | T</span></span>
<span class="line"><span>LASTVT(S) ⋗ *, * ⋖ FIRSTVT(T)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由产生式 T -&gt; T ↑ F | F</span></span>
<span class="line"><span>LASTVT(T) ⋗ ↑, ↑ ⋖ FIRSTVT(F)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由产生式 F -&gt; ( S ) | i</span></span>
<span class="line"><span>( ≐ )</span></span>
<span class="line"><span>( ⋖ FIRSTVT(S)</span></span>
<span class="line"><span>LASTVT(S) ⋗ )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由开始符号S, 终止符号#</span></span>
<span class="line"><span># ⋖ FIRSTVT(S)</span></span>
<span class="line"><span>LASTVT(S) ⋗ # </span></span>
<span class="line"><span>#≐#</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则算符优先关系表:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	*	↑	（	）	 i	#</span></span>
<span class="line"><span>*	⋗	⋖	 ⋖	⋗	⋖	⋗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>↑	⋗	⋗	 ⋖	⋗	⋖	⋗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(	⋖	⋖	 ⋖	≐	⋖	-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>)	⋗	⋗	-	⋗	-	⋗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>i	⋗	⋗	-	⋗	-	⋗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#	⋖ 	⋖ 	⋖ 	-	⋖ 	≐</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入串 ( i * i ) ↑ i 的分析过程:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤		栈		优先关系		当前符号		剩余输入串			移进或归约</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1		#		⋖			(			i * i ) ↑ i #				移进	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2		#(		⋖			i			* i ) ↑ i #				移进	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3		#(i		⋗			*			i ) ↑ i	#				归约	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4		#(F		⋖			*			i ) ↑ i	#				移进	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5		#(F*		⋖			i			) ↑ i #				移进	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6		#(F*i		⋗			)			↑ i #					归约	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>7		#(F*F		⋗			)			↑ i #					归约	F * F =&gt; S</span></span>
<span class="line"><span></span></span>
<span class="line"><span>11		#(S		≐			)			↑ i #					移进		</span></span>
<span class="line"><span></span></span>
<span class="line"><span>12		#(S)		⋗			↑			i #					归约 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>13		#F		⋖			↑			i #					移进	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>14		#F↑		⋖			i			#					移进	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>15		#F↑i		⋗			-			#					规约	i -&gt; F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>16		#F↑F		⋗			-			#					规约	F ↑ F =&gt; S</span></span>
<span class="line"><span></span></span>
<span class="line"><span>18		#S		≐			-			#					接受	</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-		-		-			-				-				-</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="lr-1-分析" tabindex="-1"><a class="header-anchor" href="#lr-1-分析"><span>LR(1)分析</span></a></h3><h4 id="前置-1" tabindex="-1"><a class="header-anchor" href="#前置-1"><span>前置</span></a></h4><h4 id="题目-1" tabindex="-1"><a class="header-anchor" href="#题目-1"><span>题目</span></a></h4><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>_算符优先<br><code>*</code> 的优先级比 <code>+</code> 高 ( <code>* ⋗ +</code> )， 因此对于一个含有乘号和加号的式子，我们想先归约带乘号的短语(把他们看成&quot;项&quot;), 弄成一个只含加号的式子。<br> e.g.<br> x1+x2<em>x3+x4</em>x5+x6 -&gt; a1 + a2 + a3. (a1 = x1, a3 = x6, a2 = ...)</p><p>I don&#39;t speak.</p>`,15)])])}const r=s(l,[["render",t]]),v=JSON.parse('{"path":"/zh/posts/computer-science/other-1/compilers/compilers-syntax-analysis_up.html","title":"编译原理 - 自底向上的语法分析","lang":"zh-CN","frontmatter":{"title":"编译原理 - 自底向上的语法分析","icon":"pen-to-square","date":"2026-07-08T00:00:00.000Z","category":["computer-science","compilers"],"tag":["红","小","圆"],"description":"overview 自顶向下分析(推导): 从开始符号推导到符号串 自底向上分析(规约)：从符号串规约回开始符号 自底向上的语法分析 算符优先分析 前置 短语: 短语是当前句型里，某个非终结符能推导出来的一段连续子串 直接短语: 一步产生式得到的短语 句柄: 最左直接短语 素短语: 不能再往里面拆的，含有终结符的短语 最左素短语: 算符优先分析每次要规约...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编译原理 - 自底向上的语法分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-07-08T00:00:00.000Z\\",\\"dateModified\\":\\"2026-07-22T06:12:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BennyHXY\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://mister-hope.github.io/benny-blog/zh/posts/computer-science/other-1/compilers/compilers-syntax-analysis_up.html"}],["meta",{"property":"og:site_name","content":"胡小言的博客"}],["meta",{"property":"og:title","content":"编译原理 - 自底向上的语法分析"}],["meta",{"property":"og:description","content":"overview 自顶向下分析(推导): 从开始符号推导到符号串 自底向上分析(规约)：从符号串规约回开始符号 自底向上的语法分析 算符优先分析 前置 短语: 短语是当前句型里，某个非终结符能推导出来的一段连续子串 直接短语: 一步产生式得到的短语 句柄: 最左直接短语 素短语: 不能再往里面拆的，含有终结符的短语 最左素短语: 算符优先分析每次要规约..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-07-22T06:12:28.000Z"}],["meta",{"property":"article:tag","content":"圆"}],["meta",{"property":"article:tag","content":"小"}],["meta",{"property":"article:tag","content":"红"}],["meta",{"property":"article:published_time","content":"2026-07-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-07-22T06:12:28.000Z"}]]},"git":{"createdTime":1783656456000,"updatedTime":1784700748000,"contributors":[{"name":"BennyHXY","username":"BennyHXY","email":"1470011518@qq.com","commits":2,"url":"https://github.com/BennyHXY"}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"zh/posts/computer-science/other-1/compilers/compilers-syntax-analysis_up.md","excerpt":"<h2>overview</h2>\\n<ul>\\n<li>自顶向下分析(推导): 从开始符号推导到符号串</li>\\n<li>自底向上分析(规约)：从符号串规约回开始符号</li>\\n</ul>\\n<h2>自底向上的语法分析</h2>\\n<h3>算符优先分析</h3>\\n<h4>前置</h4>\\n<ul>\\n<li><strong>短语</strong>: 短语是当前句型里，某个非终结符能推导出来的一段连续子串</li>\\n<li><strong>直接短语</strong>: 一步产生式得到的短语</li>\\n<li><strong>句柄</strong>: 最左直接短语</li>\\n<li><strong>素短语</strong>: 不能再往里面拆的，含有终结符的短语</li>\\n<li><strong>最左素短语</strong>: 算符优先分析每次要规约的对象</li>\\n</ul>","autoDesc":true}');export{r as comp,v as data};
