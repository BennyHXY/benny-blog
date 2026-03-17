---
title: 板子_胡希言
date: 2026-03-16
icon: pen-to-square
category:
  - algorithm
tag:
  - red
  - big
  - round
---

## 0 - 杂

### 解绑cin

```cpp
std::ios::sync_with_stdio(false);
std::cin.tie(0);
// 如果编译开启了 C++11 或更高版本，建议使用 std::cin.tie(nullptr);
// 注意：
// 解绑后， 不可同时使用cin和scanf， 不可同时使用cout和printf
// 但是可以同时使用cin和printf、cout和scanf
```

### 快读

```cpp
inline int read() //快读，无符号
{
    char ch = getchar();
    int ret = 0;
    while(ch < '0' || ch > '9') ch = getchar();
    while('0' <= ch && ch <= '9') ret = ret * 10 + ch - '0', ch = getchar();
    return ret;
}

inline int read() //快读，有符号
{
    char ch = getchar();
    int ret = 0, x = 1;
    while(ch < '0' || ch > '9')
    {
    	if(ch == '-') x = -1;
    	ch = getchar();
	}
    while('0' <= ch && ch <= '9') ret = ret * 10 + ch - '0', ch = getchar();
    return x * ret;
}

void write(int x) //无符号
{
	if(x / 10) write(x / 10);
	putchar('0' + x % 10);
}
```

## 1 - STL

### lower_bound

```cpp
//lower_bound

lower_bound 返回第一个大于等于val的位置
upper_bound 返回第一个大于val的位置

//格式， 返回位置
//lower_bound(begin(), end(), val);


//升序数组 b
int b[] = {0, 1, 1, 2, 2, 3, 3, 4, 4};
cout << lower_bound(b + 1, b + 8 + 1, 3) - b << endl;  //输出5 第一个大于等于3的位置
cout << upper_bound(b + 1, b + 8 + 1, 3) - b << endl;  //输出7 第一个大于3的位置

//降序数组a
int a[] = {0, 7, 7, 6, 6, 3, 3, 2, 2};
cout << lower_bound(a + 1, a + 8 + 1, 3, greater<int>()) - a << endl;  //输出5 第一个小于等于3的位置
cout << upper_bound(a + 1, a + 8 + 1, 3, greater<int>()) - a << endl;  //输出7 第一个小于3的位置
```

## 2 - Data structure (数据结构)

### 并查集

```cpp
int find(int x)
{
	if(fa[x] == x) return x;
	else return fa[x] = find(fa[x]);
}

void join(int u, int v)
{
	int fu = find(u), fv = find(v);
	fa[fu] = fv;
}
```

### ST表 (Sparse Table, 稀疏表)

```cpp
//luogu3865
#include <algorithm>
#include <iostream>
#include <cstring>
#include <cstdio>
#include <cmath>
#include <queue>
#include <map>
#include <set>
#include <vector>

using namespace std;

const int N = 100005;

int li[N][25];
// li[s][t], 以 位置s 为右端点, 长度为(2^t)的线段覆盖的最优值

int n, m;

inline int read() //快读，无符号
{
    char ch = getchar();
    int ret = 0;
    while(ch < '0' || ch > '9') ch = getchar();
    while('0' <= ch && ch <= '9') ret = ret * 10 + ch - '0', ch = getchar();
    return ret;
}

int main()
{
	n = read(), m = read();
	for(int i = 1; i <= n; ++i)
	{
		li[i][0] = read();
	}
	for(int step = 1; step <= 20; ++step)
	{
		int j = 1 << (step - 1);
		for(int i = n; i - j > 0; --i)
		{
			li[i][step] = max(li[i][step - 1], li[i - j][step - 1]);
		}
	}
	while(m--)
	{
		int u = read(), v = read();
		int ans = li[v][0];

//		while(u <= v)
//		{
//			double sp = log2((double)(v - u + 1));
//			ans = max(li[v][(int)(sp)], ans);
//			v = v - (1 << int(sp));
//		}
//	另一种参考写法， 由于log函数并不是O(1)的，还没有下面那种快

		for(int step = 20; step >= 0; --step)
		{
			if(v - (1 << step) > u)
			{
				ans = max(li[v][step], ans);
				v -= (1 << step);
			}
		}
		if(v != u) ans = max(li[v][1], ans); //若线段长度为1...

		printf("%d\n",ans);
//		此题时间卡的极严，cout会超时
	}

	return 0;
}
```

### 线段树

```cpp
//luogu3372
#include <algorithm>
#include <cstring>
#include <cstdio>
#include <cmath>
#include <queue>

#define LL long long

#define N 100005

#define ls (rt << 1)
#define rs (rt << 1 | 1)
#define lson l, mid, ls
#define rson mid + 1, r, rs
#define ID int l, int r, int rt

using namespace std;

void pushup(int rt);
void pushdown();
void build(ID);
void change(ID, int a, int b, LL ad);
LL query(ID, int a, int b);

LL sum[N << 2], col[N << 2];

int n, m;

int main()
{
    scanf("%d%d", &n, &m);
    build(1, n, 1);
    for(int i = 1; i <= m; ++i)
    {
        int ch, x, y;
        LL z;
        scanf("%d", &ch);
        if(ch == 1)
        {
            scanf("%d%d", &x, &y);
            scanf("%lld", &z);
            change(1, n, 1, x, y, z);
        }
        else
        {
            scanf("%d%d", &x, &y);
            printf("%lld\n", query(1, n, 1, x, y));
        }
    }

    return 0;
}

void pushup(int rt)
{
    sum[rt] = sum[ls] + sum[rs];
}

void pushdown(ID)
{
    if(!col[rt]) return ;
    int mid = l + r >> 1;
    sum[ls] += col[rt] * (mid - l + 1);
    sum[rs] += col[rt] * (r - mid); // r - (mid + 1) + 1
    col[ls] += col[rt];
    col[rs] += col[rt];
    col[rt] = 0;
}

void build(ID)
{
    if(l == r)
    {
        scanf("%lld", &sum[rt]);
        return ;
    }
    int mid = l + r >> 1;
    build(lson);
    build(rson);
    pushup(rt);
}

void change(ID, int a, int b, LL ad)
{
    if(a <= l && r <= b)
    {
        sum[rt] += (r - l + 1) * ad;
        col[rt] += ad;
        return ;
    }
    pushdown(l, r, rt);
    int mid = l + r >> 1;
    if(a <= mid) change(lson, a, b, ad);
    if(mid < b) change(rson, a, b, ad);
    pushup(rt);
}

LL query(ID, int a, int b)
{
    if(a <= l && r <= b)
    {
        return sum[rt];
    }
    pushdown(l, r, rt);
    int mid = l + r >> 1;
    LL ret = 0;
    if(a <= mid) ret += query(lson, a, b);
    if(mid < b) ret += query(rson, a, b);
    pushup(rt);
    return ret;
}
```

### 分块

```cpp
//分块: val(i) = st[i] + add[bl[i]];


struct block
{
	int add;
	vector <int> s;
	void sort_s()
	{
		sort(s.begin(), s.end());
	}
} d[M];

int bl[N], st[N]; //所属块编号， ，，
int n, siz; //siz = 块的长度

//main()
{

	cin >> n;
	siz = sqrt(n);
	for(int i = 1; i <= n; ++i)
	{
		int bi = (i - 1) / siz + 1;
		bl[i] = bi;
		cin >> st[i];
		d[bi].s.push_back(st[i]);
	}


}


void change(int a, int b, int c)
{
	int ba = bl[a], bb = bl[b], nl, nr;
	nr = min(ba * siz, b);
	for(int i = a; i <= nr; ++i) st[i] += c;
	d[ba].s.clear();
	nl = (ba - 1) * siz + 1, nr = ba * siz;
	for(int i = nl; i <= nr; ++i) d[ba].s.push_back(st[i]);
	d[ba].sort_s();

	if(ba == bb) return ;

	nl = (bb - 1) * siz + 1;
	for(int i = nl; i <= b; ++i) st[i] += c;
	d[bb].s.clear();
	nl = (bb - 1) * siz + 1, nr = bb * siz;
	for(int i = nl; i <= nr; ++i) d[bb].s.push_back(st[i]);
	d[bb].sort_s();

	nl = ba + 1, nr = bb - 1;
	for(int bi = nl; bi <= nr; ++bi) d[bi].add += c;

}

int query(int a, int b, int c)
{
	int ret = 0;

	int ba = bl[a], bb = bl[b], nl, nr;
	nr = min(ba * siz, b);
	for(int i = a; i <= nr; ++i)
	{
		if(st[i] + d[ba].add < c) ++ret;
	}
	if(ba == bb) return ret;

	nl = (bb - 1) * siz + 1;
	for(int i = nl; i <= b; ++i)
	{
		if(st[i] + d[bb].add < c) ++ret;
	}

	nl = ba + 1, nr = bb - 1;
	for(int bi = nl; bi <= nr; ++bi)
	{
		//it = lower_bound(d[bi].s.begin(), d[bi].s.end(), c - d[bi].add);
		//if(c > d[bi].s[0])
		ret += lower_bound(d[bi].s.begin(), d[bi].s.end(), c - d[bi].add) - d[bi].s.begin();
	}

	return ret;
}
```

### 朴素の莫队

```cpp
//朴素の莫队：对于数列a，进行若干个关于[l,r]的查询，

//将区间排序后用双指针算法求得所有解
//映射回原次序后， 输出答案


struct qry
{
	int l, r, dfn; //询问的左右区间和次序
} d[M];


//
int a[N], bl[N];
int n, m, mk;

//维护区间 的 信息/答案
int nl, nr;
long long cnt[N];
long long res;

//最终输出答案
long long ans[M];

bool cmp_lr(qry x, qry y)
{
	return bl[x.l] != bl[y.l] ? x.l < y.l : (bl[x.l] % 2 == 0 ? x.r > y.r : x.r < y.r);
}

void del(int x) //删除维护区间内， 编号为x的点的 答案贡献
{
	int dq = a[x];
	res -= 2 * cnt[dq] - 1;
	--cnt[dq];
}

void add(int x)
{
	int dq = a[x];
	res += 2 * cnt[dq] + 1;
	++cnt[dq];
}

//main()
{
	cin >> n >> m >> mk;

	int blen = sqrt(n);
	for(int i = 1; i <= n; ++i)
	{
		cin >> a[i];
		bl[i] = (i - 1) / blen + 1;
	}

	for(int i = 1; i <= m; ++i)
	{
		cin >> d[i].l >> d[i].r;
		d[i].dfn = i;
	}

	sort(d + 1, d + m + 1, cmp_lr);

	nl = 1, nr = 0, res = 0; //nl = 1, 否则可能在del(0)时出问题

	for(int i = 1; i <= m; ++i)
	{
		while(nl < d[i].l) del(nl++);
		while(nl > d[i].l) add(--nl);
		while(nr < d[i].r) add(++nr);
		while(nr > d[i].r) del(nr--);
		ans[d[i].dfn] = res;

	}

	for(int i = 1; i <= m; ++i) cout << ans[i] << endl;

}
```

### 带修の莫队

```cpp
const int M = 1333335; //询问/操作数
const int N = 1333335; //数组长度
const int C = 1000006; //颜色数量

struct qry
{
	int l, r, dfn; //询问的左右区间和次序
	int ti; //该询问前 最后一次修改操作
} d[M];

struct modify
{
	int pos, col, ti;
} f[M];

int col[C];
int n, m, mq, mf;  //mq 询问数，  mf 操作数

//维护区间 的 信息/答案
int nl, nr, tim, blen;
long long cnt[N];
long long res;

//最终输出答案
long long ans[M];

inline int bl(int x) //所属块
{
	return (x - 1) / blen + 1;
}

inline bool cmp_lr(qry x, qry y)
{
	//按 右端点所属块 	 左端点所属块 	时间   排序

	int b_xl = bl(x.l), b_xr = bl(x.r);
	int b_yl = bl(y.l), b_yr = bl(y.r);

	if(b_xl != b_yl) return x.l < y.l;
	if(b_xr != b_yr) return x.r < y.r;
	return x.ti < y.ti;

}

inline void del(int x) //删除维护区间内， 编号为x的点的 答案贡献
{
	int dq = col[x];
	--cnt[dq];
	if(cnt[dq] == 0) --res;
}

inline void add(int x)
{
	int dq = col[x];
	if(cnt[dq] == 0) ++res;
	++cnt[dq];
}

int main()
{
	n = read(), m = read();

	for(register int i = 1; i <= n; ++i)
	{
		col[i] = read();

	}

	for(register int i = 1; i <= m; ++i)
	{
		char ch;
		int a, b;
		scanf("\n%c", &ch);
		a = read(), b = read();
		if(ch == 'Q')
		{
			d[++mq] = (qry){a, b, mq, mf};
		}
		else
		{
			f[++mf] = (modify){a, b, mf};
		}
	}


	//块长   最优块长为  ((n * 操作数) ^ (2/3))
//	blen = ceil(cbrt(n * mf)) + 1;

	blen = 2589; //在维护颜色这道题里 一个更优的常数 ？？？

//	for(register int i = 1; i <= n; ++i)
//	{
//		bl[i] = (i - 1) / blen + 1;
//	}

	sort(d + 1, d + mq + 1, cmp_lr);

	nl = 1, nr = 0, tim = 0, res = 0; //nl = 1, 否则可能在del(0)时出问题

	for(register int i = 1; i <= m; ++i)
	{
		while(nl < d[i].l) del(nl++);
		while(nl > d[i].l) add(--nl);
		while(nr < d[i].r) add(++nr);
		while(nr > d[i].r) del(nr--);

		while(tim <= d[i].ti)
		{
			++tim;
			if(nl <= f[tim].pos && f[tim].pos <= nr)
			{
				del(f[tim].pos);
				swap(col[f[tim].pos], f[tim].col);
				add(f[tim].pos);
			}
			else swap(col[f[tim].pos], f[tim].col);
		}

		while(tim > d[i].ti)
		{

			if(nl <= f[tim].pos && f[tim].pos <= nr)
			{
				del(f[tim].pos);
				swap(col[f[tim].pos], f[tim].col);
				add(f[tim].pos);
			}
			else swap(col[f[tim].pos], f[tim].col);

			--tim;
		}

		ans[d[i].dfn] = res;

	}

	for(register int i = 1; i <= mq; ++i) write(ans[i]), putchar('\n');

	return 0;
}

```

## 2 - 图论

### 建图

```cpp
struct edge
{
    int v, next;
} e[M];

const int N = 100005;	//节点数
const int M = 400005;	//边数

void adde(int u, int v)
{
    e[k].v = v;
    e[k].next = head[u];
    head[u] = k++;
}

void init()	//记得加在主函数最前面！！！
{
    k = 1;
    memset(head, -1, sizeof(head));
}
```

### dijkstra最短路

```cpp
typedef pair<int, int> pii;
priority_queue <pii, vector<pii>, greater<pii> > q;

int head[N], dis[N], vis[N];
int n, m, k = 1;

void init()	//记得调用。。。！！！
{
	memset(head, -1, sizeof(head));
	memset(dis, 0x3f, sizeof(dis));
}

void dij()
{
	dis[s] = 0;
	q.push({dis[s], s}); //make_pair(dis[1], 1)
	while(!q.empty())
	{
		int u = q.top().second;
		q.pop();

		if(vis[u]) continue;
		vis[u] = 1;

		for(int i = head[u]; i != -1; i = e[i].next)
		{
			int v = e[i].v;
			int w = e[i].w;
			if(dis[u] + w < dis[v])
			{
				dis[v] = dis[u] + w;
				ans[v] = ans[u];
				q.push({dis[v], v});
			}
		}

	}

}
```

### LCA （ST表，倍增法 最近公共祖先）

```cpp
void dfs(int u, int fa)
{
	dep[u] = dep[fa] + 1;
	for(int i = head[u]; i != -1; i = e[i].next)
	{
		int v = e[i].v;
		if(v == fa) continue;
		li[v][0] = u;
		dfs(v, u);
	}

}

int LCA(int u, int v)
{
	if(dep[u] > dep[v]) swap(u, v);

	for(int step = 20; step >= 0; --step)
	{
		if(dep[v] - (1 << step) >= dep[u]) v = li[v][step];

	}

	if(u == v) return u; //u,v在一条链上的情况

	//在两个分支
	for(int step = 20; step >= 0; --step)
	{
		if(li[u][step] != li[v][step])
		{
			u = li[u][step];
			v = li[v][step];
		}
	}

	return li[u][0];
}

//main
{
	n = read(), m = read(), rt = read();

	init();
	for(int i = 1; i < n; ++i)
	{
		int u = read(), v = read();
		adde(u, v);
		adde(v, u);
	}
	dfs(rt, 0);

	for(int step = 1; step <= 20; ++step)
	{
		for(int u = 1; u <= n; ++u)
		{
			li[u][step] = li[li[u][step - 1]][step - 1];
		}
	}
	while(m--)
	{
		int u = read(), v = read();
		printf("%d\n", LCA(u, v));
	}

	return 0;
}
```

## 3 - Character string （字符串）

### manacher （马拉车 O(n)求最长回文串）

```cpp
//luogu3805
#include <algorithm>
#include <cstring>
#include <cstdio>
#include <cmath>
#include <queue>

#define N 24000007

using namespace std;

char s[N], T[N];
int len[N], ans;

int main()
{
	scanf("%s", s + 1);
	int ls = strlen(s + 1);

	int lt = ls * 2 + 1;

	T[0] = '@', T[1] = '$';

	for(int i = 1; i <= ls; ++i)
	{
		T[2 * i] = s[i];
		T[2 * i + 1] = '$';
	}

	int pos = 0, P = 0;

	for(int i = 1; i <= lt; ++i)
	{
		int l = i - 1, r = i + 1;
		if(i < P)
		{
			int j = 2 * pos - i;
			if(i + len[j] < P)
			{
				len[i] = len[j];
				continue;
			}
			r = P + 1;
			l = 2 * i - r;
			len[i] = P - i;
		}
		while(T[l] == T[r]) --l, ++r, ++len[i];
		if(i + len[i] > P) P = i + len[i], pos = i;
		ans = max(ans, len[i]);
	}

	printf("%d", ans);

	return 0;
}
```

### kmp

```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 1000006;

char text[N], ss[N]; // 文本串 模式串
int nxt[N]; //nxt[i]:截止到i，模式串最长公共前后缀

int ls, lt; //字符串长度

void get_nxt()
{
	int nl = 0;

	for(int i = 2; i <= ls; ++i)
	{
		while(nl && ss[nl + 1] != ss[i]) nl = nxt[nl];
		if(ss[nl + 1] == ss[i]) ++nl;
		nxt[i] = nl;
	}

}

int main()
{
	scanf("%s", text + 1);
	scanf("%s", ss + 1);

	lt = strlen(text + 1);
	ls = strlen(ss + 1);
	get_nxt();

	int nl = 0;
	for(int i = 1; i <= lt; ++i)
	{
		while(nl && ss[nl + 1] != text[i]) nl = nxt[nl];
		if(ss[nl + 1] == text[i]) ++nl;
		if(nl == ls)
		{
			printf("%d\n", i - ls + 1);
			nl = nxt[nl];
		}
	}

	for(int i = 1; i <= ls; ++i)
	{
		printf("%d ", nxt[i]);
	}

	return 0;
}
/*
// 一种传参的写法
void getnxt(char s[], int *nxt)
{
	int len = strlen(s + 1);

	int nl = 0;
	for(int i = 2; i <= len; ++i)
	{
		while(nl && s[nl + 1] != s[i]) nl = nxt[nl];
		if(s[nl + 1] == s[i]) ++nl;
		nxt[i] = nl;
	}
}

// main			//调用
char s2[N];
int nxt2[N];
getnxt(s2, nxt2);

*/

```

### Trie (字典树)

```cpp
void crr(int x) //节点初始化
{
	num[x] = 0;
	for(int i = 0; i < 66; ++i) g[x][i] = 0;
}

void init() //初始化树
{
	idx = 0;
	crr(0);
}

int find(char x) //
{
	if('0' <= x && x <= '9') return (x - '0' + 1);
	if('a' <= x && x <= 'z') return (x - 'a' + 11);
	if('A' <= x && x <= 'Z') return (x - 'A' + 37);
}

void build() //建树
{
	int l1 = strlen(s1 + 1);
	int rt = 0;
	for(int i = 1; i <= l1; ++i)
	{
		int no = find(s1[i]);
		if(!g[rt][no])
		{
			g[rt][no] = ++idx;
			crr(idx);
		}
		rt = g[rt][no];
		++num[rt];
	}
}

int query() //查找
{
	int l1 = strlen(s1 + 1);
	int rt = 0;
	for(int i = 1; i <= l1; ++i)
	{
		int no = find(s1[i]);
		rt = g[rt][no];
		if(!rt) break;
	}
	return num[rt];
}
```

### AC自动机

```cpp
struct Trie //模式串建字典树
{
	int son[35], hav, fail;

	void cur()
	{
		memset(son, 0, sizeof(son));
		hav = 0, fail = 0;
	}

} d[1000005];

void init() //初始化树
{
	idx = 0;
	crr(0);
}

void insert() //建树
{

	cin >> s + 1;
	//cout << s + 1 << endl;
	int len = strlen(s + 1);

	int rt = 0;
	for(int i = 1; i <= len; ++i)
	{
		int no = s[i] - 'a' + 1;
		if(!d[rt].son[no]) d[rt].son[no] = ++idx, d[idx].cur();
		rt = d[rt].son[no];
	}

	++d[rt].hav;
}

void get_fail()
{
	queue <int> q;

	for(int i = 1; i <= 26; ++i) if(d[0].son[i]) q.push(d[0].son[i]);

	while(!q.empty()) //层序遍历
	{
		int no = q.front();
		q.pop();
		for(int i = 1; i <= 26; ++i)
		{
			int v = d[no].son[i];
			if(v)
			{
				d[v].fail = d[d[no].fail].son[i];
				q.push(v);
			} else d[no].son[i] = d[d[no].fail].son[i];

		}

	}

}

//main()

int rt = 0;
	for(int i = 1; i <= len; ++i)
	{
		int dq = s[i] - 'a' + 1;
		rt = d[rt].son[dq];
		int j = rt;
		while(j && d[j].hav != -1)
		{
			ans += d[j].hav;
			d[j].hav = -1;
			j = d[j].fail;
		}

	}

```

## 4 - 排序相关

### 归并排序求逆序对

```cpp
//luogu p1908
#include <algorithm>
#include <cstdio>

#define ll long long
#define N 500005

using namespace std;

ll ans = 0;

int h[N], t[N];
int n;

void merge(int l, int r) {
    if(l == r) return ;

    int mid = (l + r) >> 1;

    merge(l, mid);
    merge(mid + 1, r);

    int nl = l, nr = mid + 1, dq = l;
    while(nl <= mid && nr <= r) {
        if(h[nl] > h[nr]) {
            ans += mid - nl + 1;
            t[dq++] = h[nr++];
        }
        else {
            t[dq++] = h[nl++];
        }
    }

    while(nl <= mid)
        t[dq++] = h[nl++];
    for(int i = l; i < dq; ++i)
        h[i] = t[i];

}

int main() {
    scanf("%d", &n);
    for(int i = 1; i <= n; ++i)
        scanf("%d", &h[i]);

    merge(1, n);
    printf("%lld", ans);

    return 0;
}
```

## 5 - 各类dp

### 数位dp

```cpp
//luogu2602
#include <algorithm>
#include <iostream>
#include <cstring>
#include <cstdio>
#include <cmath>
#include <queue>
#include <map>
#include <set>
#include <vector>

using namespace std;

typedef long long LL;


// f[c][x][len]:
// 以x打头， 长度为len的数中，
// y出现的次数
LL f[15][15][45];
LL p10[65];		//10的几次方。。。

//分解当前处理的数字
// 如 1456
// a[] = { , 1, 4, 5, 6}, xlen = 4
int a[45];
int xlen;

void init()	//预处理， 要记得加啊！ 要记得加啊！ 要记得加啊！！！！！
{
	p10[0] = 1;
	for(int len = 1; len <= 35; ++len) p10[len] = p10[len - 1] * 10;

	for(int len = 1; len <= 32; ++len)
	{
		for(int x = 0; x <= 9; ++x)
		{
			for(int c = 0; c <= 9; ++c)
			{
				for(int y = 0; y <= 9; ++y)
				{
					f[c][x][len] += f[c][y][len - 1];

				}
				if(c == x) f[c][x][len] += p10[len - 1];
				//e.g: f(1, 1, 3):	100~199 正好100个数呢

				//长度为len-1的后缀中字符出现次数 + 当前位...
			}

		}
	}


}

void div(LL x)
{
	if(x / 10) div(x / 10);
	a[++xlen] = x % 10;
}

void cal(LL x, LL ans[])
{
	xlen = 0;
	div(x);

	for(int c = 0; c <= 9; ++c) ans[c] = 0;	//memset貌似不行

	if(x == 0) return ;	//特判， 以0打头所以特判

	for(int len = 1; len < xlen; ++len)
	{
		for(int c = 0; c <= 9; ++c)
		{
			for(int y = 1; y <= 9; ++y)
			{
				ans[c] += f[c][y][len];
			}
		}
	}

	for(int dq = 1; dq <= xlen; ++dq)
	{
		int dqc = a[dq];
		ans[dqc] += (x % p10[xlen - dq]) + 1;
		for(int c = 0; c <= 9; ++c)
		{
			for(int y = 0; y < dqc; ++y)
			{
				//特判。
				//因为f处理的是可以拼接的后缀对应的方案数
				//所以需要特判避开0打头的情况
				if(y == 0 && dq == 1) continue;

				ans[c] += f[c][y][xlen - dq + 1];
			}
		}

	}
}

int main()
{
	init();

	LL ll, rr;
	cin >> ll >> rr;

	LL lans[15], rans[15];
	cal(ll - 1, lans);
	cal(rr, rans);

	for(int c = 0; c <= 9; ++c)
	{
		cout << rans[c] - lans[c] << ' ';
	}

	return 0;
}
```

## 6 - 数论相关

### 线性筛素数

```cpp
//luogu3383 求第k大的素数
#include <algorithm>
#include <iostream>
#include <cstring>
#include <cstdio>
#include <cmath>
#include <queue>
#include <map>
#include <set>
#include <vector>

using namespace std;

typedef long long LL;

const int N = 1e8 + 5;

int nop[N];		// 是否为素数 1-否， 0-是
int pri[N]; 	// 存储(第k大的)素数
int cnt = 0;

void init(int lim)
{
	nop[1] = 1;

	for(int dq = 2; dq <= lim; ++dq)
	{
		if(!nop[dq])
		{
			pri[++cnt] = dq;
		}

		for(int j = 1; j <= cnt && pri[j] * dq <= lim; ++j)
		{
			nop[pri[j] * dq] = 1;
			if(dq % pri[j] == 0) break;
		}

	}

}

int main()
{
	std::ios::sync_with_stdio(false);
	std::cin.tie(0);
	// 如果编译开启了 C++11 或更高版本，建议使用 std::cin.tie(nullptr);

	int lim, m;
	cin >> lim >> m;

	init(lim);

	for(int i = 1; i <= m; ++i)
	{
		int x;
		cin >> x;
		cout << pri[x] << endl;
	}

	return 0;
}
```

### 矩阵快速幂

```cpp
//luogu3390
#include <algorithm>
#include <cstdio>

using namespace std;

typedef long long LL;

const LL mod = 1e9 + 7;

struct Mat //matrix
{
	LL a[105][105];
	int row, col;

	void input()
	{

		for(int i = 1; i <= row; ++i)
		{
			for(int j = 1; j <= col; ++j)
			{
				scanf("%lld", &a[i][j]);
			}
		}
	}

	void print()
	{
		for(int i = 1; i <= row; ++i)
		{
			for(int j = 1; j <= col; ++j)
			{
				printf("%lld ", a[i][j]);
			}
			printf("\n");
		}
	}
};

Mat MatMul(Mat A, Mat B)
{
	Mat ret;
	ret.row = A.row, ret.col = B.col;
	for(int i = 1; i <= ret.row; ++i)
	{
		for(int j = 1; j <= ret.col; ++j)
		{
			ret.a[i][j] = 0;
			for(int k = 1; k <= A.col; ++k)
			{
				ret.a[i][j] += A.a[i][k] * B.a[k][j] % mod;
				ret.a[i][j] %= mod;
			}
		}
	}

	return ret;
}

Mat makeI(int len)
{
	Mat ret;
	ret.col = ret.row = len;
	for(int i = 1; i <= ret.row; ++i)
	{
		for(int j = 1; j <= ret.col; ++j)
		{
			if(i == j) ret.a[i][j] = 1;
			else ret.a[i][j] = 0;
		}
	}
	return ret;
}

Mat MatKSM(Mat pre, LL b)
{
	Mat ret = makeI(pre.row);
	while(b)
	{
		if(b & 1) ret = MatMul(ret, pre);
		pre = MatMul(pre, pre);
		b >>= 1;
	}
	return ret;
}

LL n, k;

int main()
{
	scanf("%lld%lld", &n, &k);
	Mat pre;
	pre.row = pre.col = n;
	pre.input();
	Mat opt = MatKSM(pre, k);
	opt.print();

	return 0;
}
```

### exgcd (扩展欧几里得)

#### code

```cpp
// 求得 ax + by = gcd(a,b) 的一组特解
ll exgcd(ll a, ll b, ll &x, ll &y)
{
	if(!b)
	{
		x = 1;
		y = 0;
		return a;
	}
	ll r = exgcd(b, a % b, y, x);
	y -= a / b * x;
	return r;
}
```
