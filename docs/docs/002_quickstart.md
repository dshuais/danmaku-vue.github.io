# 快速上手

## 线上尝试 `danmaku-vue`

- 想要快速体验 `danmaku-vue` 效果，你可以直接访问[预览地址](https://dshuais.github.io/danmaku-vue/)

## 项目中使用 `danmaku-vue`

::: tip
- 你需要先创建一个vue项目
- 已安装18.0或更高版本的[Node.js](https://nodejs.org)
:::

### Install

```
pnpm add danmaku-vue --save
```

### Usage

```vue
<script setup>
import Danmaku from 'danmaku-vue'

const danmus = ref(['danmu1', 'danmu2', 'danmu3', '...'])
</script>

<template>
  <Danmaku :danmus="danmus" style="height:100px; width:300px;"></Danmaku>
</template>
```

到这里最基础的弹幕效果使用已经完成，你可以通过 `danmus` 属性传入弹幕数据，具体数据格式不做限制，详情请参考[demo](https://github.com/dshuais/danmaku-vue/blob/main/src/App.vue)

也可根据文档继续更进一步了解和学习 `danmaku-vue`

