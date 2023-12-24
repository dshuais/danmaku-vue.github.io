# Methods

为满足更多场景 `danmaku-vue` 提供了这些方法：

## 列表

|    方法名     |                     说明                     |              参数              |
| :-----------: | :------------------------------------------: | :----------------------------: |
|     play      |                开始/继续播放                 |               -                |
|     pause     |                 暂停弹幕播放                 |               -                |
|     clear     |              停止播放并清空弹幕              |               -                |
|     show      |                   弹幕显示                   |               -                |
|     hide      |                   弹幕隐藏                   |               -                |
|     reset     |   重置配置（也可在改变播放区域大小后调用）   |               -                |
|    resize     | 容器尺寸改变时重新计算滚动距离（需手动调用） |               -                |
|     push      |   发送弹幕（插入到弹幕列表末尾，排队显示）   | danmu 数据，可以是字符串或对象 |
|      add      |   发送弹幕（插入到当前播放位置，实时显示）   | danmu 数据，可以是字符串或对象 |
|    insert     |     绘制弹幕（实时插入，不进行数据绑定）     | danmu 数据，可以是字符串或对象 |
| getPlayState  |               获得当前播放状态               |               -                |
| getInsertList |     获取使用 `insert` 方法插入的弹幕列表     |            danmu[]             |

使用时请注意以下几点：
1. `push` 和 `add` 的返回值为插入后的下标，可通过判断下标的方式对当前插入弹幕进行样式定制;
2. `insert` 跟 `push/add` 的区别在于，`insert` 不进行数据绑定，而是直接插入 DOM，适用于直播等场景;
3. 推荐使用 `insert` 方式单条插入弹幕，因为 `add` 会进行数据绑定;


## Usage

可通过以下方式调用：
```vue
<script setup>
import Danmaku from 'danmaku-vue'
const danmakuRef = ref<InstanceType<typeof Danmaku>>(null) // [!code focus]
danmakuRef.value.play() // [!code focus]
</script>

<template>
<Danmaku ref="danmakuRef"></Danmaku> // [!code focus]
</template>
```

具体用法不在赘述，详情可参考[demo](https://github.com/dshuais/danmaku-vue/blob/main/src/App.vue)。

