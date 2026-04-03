<template>
  <div class="cache-table-wrapper">
    <table class="cache-table">
      <thead>
        <tr>
          <th rowspan="2">组索引</th>
          <th colspan="6">行0</th>
          <th colspan="6">行1</th>
        </tr>
        <tr>
          <!-- 行0 的6列 -->
          <th>标记位</th>
          <th>有效位</th>
          <th>字节0</th>
          <th>字节1</th>
          <th>字节2</th>
          <th>字节3</th>
          <!-- 行1 的6列 -->
          <th>标记位</th>
          <th>有效位</th>
          <th>字节0</th>
          <th>字节1</th>
          <th>字节2</th>
          <th>字节3</th>
        </tr>
      </thead>
      <tbody>
        <!-- 组0 -->
        <tr>
          <td class="group-index">0</td>
          <td>09</td>
          <td>1</td>
          <td>86</td>
          <td>30</td>
          <td>3F</td>
          <td>10</td>
          <td>00</td>
          <td>0</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
        </tr>
        <!-- 组1 -->
        <tr>
          <td class="group-index">1</td>
          <td>45</td>
          <td>1</td>
          <td>60</td>
          <td>4F</td>
          <td>E0</td>
          <td>23</td>
          <td>38</td>
          <td>1</td>
          <td>00</td>
          <td>BC</td>
          <td>0B</td>
          <td>37</td>
        </tr>
        <!-- 组2 -->
        <tr>
          <td class="group-index">2</td>
          <td>EB</td>
          <td>0</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td>0B</td>
          <td>0</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
        </tr>
        <!-- 组3 -->
        <tr>
          <td class="group-index">3</td>
          <td>06</td>
          <td>0</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td>32</td>
          <td>1</td>
          <td>12</td>
          <td>08</td>
          <td>7B</td>
          <td>AD</td>
        </tr>
        <!-- 组4 -->
        <tr>
          <td class="group-index">4</td>
          <td>C7</td>
          <td>1</td>
          <td>06</td>
          <td>78</td>
          <td>07</td>
          <td>C5</td>
          <td>05</td>
          <td>1</td>
          <td>40</td>
          <td>67</td>
          <td>C2</td>
          <td>3B</td>
        </tr>
        <!-- 组5 -->
        <tr>
          <td class="group-index">5</td>
          <td>71</td>
          <td>1</td>
          <td>0B</td>
          <td>DE</td>
          <td>18</td>
          <td>4B</td>
          <td>6E</td>
          <td>0</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
        </tr>
        <!-- 组6 -->
        <tr>
          <td class="group-index">6</td>
          <td>91</td>
          <td>1</td>
          <td>A0</td>
          <td>B7</td>
          <td>26</td>
          <td>2D</td>
          <td>F0</td>
          <td>0</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
        </tr>
        <!-- 组7 -->
        <tr>
          <td class="group-index">7</td>
          <td>46</td>
          <td>0</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td class="invalid">—</td>
          <td>DE</td>
          <td>1</td>
          <td>12</td>
          <td>C0</td>
          <td>88</td>
          <td>37</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.cache-table-wrapper {
  overflow-x: auto;
  margin: 1rem 0;
}

.cache-table {
  border-collapse: collapse;
  font-family: "Courier New", monospace;
  font-size: 14px;
  text-align: center;
  background-color: #fff;
  width: 100%;
}

.cache-table th,
.cache-table td {
  border: 1px solid #333;
  padding: 8px 12px;
  vertical-align: middle;
}

.cache-table th {
  background-color: #f0f0f0;
  font-weight: bold;
}

.group-index {
  background-color: #f9f9f9;
  font-weight: bold;
}

.invalid {
  color: #aaa;
}

/* 响应式：在小屏幕上允许横向滚动 */
@media (max-width: 768px) {
  .cache-table-wrapper {
    overflow-x: auto;
  }
  .cache-table {
    min-width: 800px;
  }
}
</style>
