# Events

因为某些属性的情况下，`danmaku-vue` 增加了这些回调：


## 列表

|  事件名  |              说明              |           返回值            |
| :------: | :----------------------------: | :-------------------------: |
| list-end |        所有弹幕插入完毕        |              -              |
| play-end | 所有弹幕播放完成（已滚出屏幕） | index（最后一个弹幕的下标） |
| dm-click |            弹幕点击            |      danmu数据，index       |

## Usage

可通过以下方式调用：
```vue
<script setup>
import Danmaku from 'danmaku-vue'

function handleClickDm(dm: dm, index: number) { // [!code focus]
  console.log('当前点击的弹幕:>> ', index, dm);
} // [!code focus]

function handleListEnd() { // [!code focus]
  console.log('循环播放一轮结束');
} // [!code focus]

function handlePlayEnd(index: number) { // [!code focus]
  console.log('播放结束', index);
} // [!code focus]
</script>

<template>
<Danmak @dm-click="handleClickDm" @play-end="handleListEnd" @list-end="handlePlayEnd" ...> // [!code focus]
</Danmaku> // [!code focus]
</template>
```

具体用法不在赘述，详情可参考[demo](https://github.com/dshuais/danmaku-vue/blob/main/src/App.vue)。

