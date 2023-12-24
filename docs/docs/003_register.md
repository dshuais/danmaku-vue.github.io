# 组件注册

<br />

> 此章节假设你已了解[vue组件基础](https://cn.vuejs.org/guide/essentials/component-basics.html)章节和阅读过[danmaku-vue快速上手](/docs/002_quickstart.md)章节，若还不了解，请先阅读相关章节。

一个 Vue 组件在使用前需要先被“注册”，这样 Vue 才能在渲染模板时找到其对应的实现。组件注册有两种方式：全局注册和局部注册。

## 全局注册

可以借助Vue的 `component` 方法进行全局注册，让组件在当前 Vue 应用中全局可用。

```ts
import { createApp } from "vue";
import Danmaku from "danmaku-vue"; // [!code focus]

const app = createApp(App);
app.component("Danmaku", Danmaku); // [!code focus]
app.mount("#app");
```
Vue `component` 方法的第一个参数为全局组件的名称，第二个参数是组件的实现。
全局注册的组件可以在此应用的任意组件的模板中使用：

```vue
<template>
  <Danmaku ... /> // [!code focus]
</template>
```

## 局部注册

局部注册组件就是在当前Vue页面内引入并注册使用。

```vue
<script setup>
import Danmaku from 'danmaku-vue' // [!code focus]
</script>

<template>
  <Danmaku ... /> // [!code focus]
</template>
```

<br />

以上了解了 `danmaku-vue` 组件的注册方式，接下来我们来学习如何使用组件传递想要的数据。
