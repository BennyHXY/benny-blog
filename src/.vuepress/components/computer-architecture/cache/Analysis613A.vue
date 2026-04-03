<template>
  <table>
    <!-- 第一行：数字从右边开始，即最左12，最右0 -->
    <tr>
      <td>12</td>
      <td>11</td>
      <td>10</td>
      <td>9</td>
      <td>8</td>
      <td>7</td>
      <td>6</td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>2</td>
      <td>1</td>
      <td>0</td>
    </tr>
    <!-- 第二行：带边框，[CT | CI | CO] -->
    <tr>
      <td colspan="8">CT</td>
      <td colspan="3">CI</td>
      <td colspan="2">CO</td>
    </tr>

    <!-- 第三行：带边框，物理地址二进制展开 -->
    <tr>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </table>
</template>
<style scoped>
table {
  border-collapse: collapse;
  font-family: monospace;
  margin: 20px;
}
/* 第一行所有单元格无边框 */
tr:first-child td {
  border: none;
  text-align: center;
  padding: 8px 12px;
}
/* 第二、三行所有单元格有边框 */
tr:nth-child(2),
tr:nth-child(3) td {
  border: 1px solid black;
  text-align: center;
  padding: 8px 12px;
}
</style>
