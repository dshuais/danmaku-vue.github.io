<!--
 * @Author: dushuai
 * @Date: 2023-12-22 15:24:34
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-22 15:30:07
 * @description: 自定义组件
-->
<script lang="ts" setup>
const list: number[] = [1, 2, 3, 4, 5]
</script>
<template>
  <div class="home-wrapper">
    <div v-for="item in 4" :key="item" class="home-item">{{ item }}</div>
  </div>
</template>
<style scoped>
.home-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.home-item {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  font-weight: bolder;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
</style>