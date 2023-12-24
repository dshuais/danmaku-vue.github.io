# Solts

::: tip
> 此章节假设你已了解 Vue Slots 的概念及用法。如果你还不了解，请先阅读 [Vue Slots](https://cn.vuejs.org/guide/components/slots.html) 章节。
:::

## 列表

如果你有自定义弹幕结构与样式的需求，你可以传入任意结构的对象并自己写内部样式。
<br />
插件根据具体使用情况，提供了以下插槽：

|  name   |                     说明                     |   回调参数   |
| :-----: | :------------------------------------------: | :----------: |
| default |                   默认slot                   |      -       |
|   dm    |      自定义弹幕样式（需useSlot为true）         | danmu，index |
| suspend | 自定义弹幕悬浮样式（需useSuspendSlot为true）   | danmu，index |

注：
1. `defalut` 插槽是默认插槽，对于默认插槽插件内部没有做任何处理 仅提供，如果使用 将会直接渲染在弹幕容器中。

## Usage

可根据需求情况使用插槽，具体使用方法如下：
```vue
<template>
  <Danmaku useSlot useSuspendSlot  ...> // [!code focus]
    <template #dm="{ danmu, index }"> // [!code focus]
      <div class="danmu-item">
        <img class="danmu-item--avatar" :src="danmu.avatar" alt="">
        <div>{{ danmu.text }}</div>
      </div>
    </template> // [!code focus]
    <template #suspend="{ danmu, index }"> // [!code focus]
      <div class="danmu-suspend">
        <div>+1</div>
        <div>👍</div>
      </div>
    </template> // [!code focus]
  </Danmaku> // [!code focus]
</template>
```

插槽内部做到完全自定义，但有以下注意点：
1. `dm slot`、`suspend slot`同时使用时，可通过`.danmu-item:hover`设置悬浮后样式;
2. 为做到统一 `suspend slot` 的背景色默认为 `transparent` ，可通过 `!important` 对 `.danmu-suspend` 强制更改悬浮后背景;

`Usage` 示例跟 `demo` 保持一致，详情可参考[demo](https://github.com/dshuais/danmaku-vue/blob/main/src/App.vue)。

## Preview

[预览地址](https://dshuais.github.io/danmaku-vue/)即为 `demo` 效果。

![Preview](../assets/img/preview.gif)
