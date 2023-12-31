
# 简介


## 什么是 `danmaku-vue` ?

`danmaku-vue` 的创建是为了帮助开发人员轻松的将弹幕功能添加到他们的Vue 3应用中。在我寻找一种能够实现简单的web场景的弹幕解决方案时，我发现更多的插件要么太过繁杂要么缺乏维护。因此，我决定创建自己的解决方案并于社区分享。

`danmaku-vue` (danmaku：弹幕)是基于 vue3+TypeScript 开发的一款弹幕交互组件，易上手，可扩展性强，可以自定义修改弹幕和悬浮的样式等。它可以用于Web端和移动端，帮助您满足各种弹幕交互场景。

## 示例

下面是一个基本的示例：

```vue
<script setup>
import Danmaku from 'danmaku-vue'

const danmus = ref(['danmu1', 'danmu2', 'danmu3', '...'])
</script>

<template>
  <Danmaku :danmus="danmus" style="height:100px; width:300px;"></Danmaku>
</template>
```

## Preview

![Preview](../assets/img/preview.gif)

<!-- 跟某些弹幕插件相比，不会占用vue-devtools使其卡死；因此推荐在vue中实现弹幕效果时使用。 -->



<!-- 作者正在完善中... -->
