# Attributes

插件提供了以下属性：

|      参数      |                         说明                         |  类型   |      可选值      | 默认值 |
| :------------: | :--------------------------------------------------: | :-----: | :--------------: | :----: |
|     danmus     | 弹幕元素列表，支持纯文本或者自定义对象(支持 v-model) |  Array  | 字符串[]或对象[] |  必填  |
|    channels    |                       轨道数量                       | Number  |                  |   0    |
|    autoplay    |                     是否自动播放                     | Boolean |                  |  true  |
|      loop      |                   是否开启弹幕循环                   | Boolean |                  | false  |
|    fontSize    |            弹幕字号（slot 模式下不可用）             | Number  |                  |   18   |
|   extraStyle   |            额外样式（slot 模式下不可用）             | String  |                  |   -    |
|     speeds     |             弹幕速度（每秒移动的像素数）             | Number  |                  |  100   |
|    debounce    |                   弹幕刷新频率(ms)                   | Number  |                  |  100   |
| randomChannel  |                   随机选择轨道插入                   | Boolean |                  | false  |
|      top       |                   弹幕垂直间距(px)                   | Number  |                  |   10   |
|     right      |                   弹幕水平间距(px)                   | Number  |                  |   10   |
|   isSuspend    |                 是否开启弹幕悬浮暂停                 | Boolean |                  | false  |
|    useSlot     |                   是否开启弹幕插槽                   | Boolean |                  | false  |
| useSuspendSlot |    是否开启弹幕悬浮时插槽（开启isSuspend时可用）     | Boolean |                  | false  |

你可根据自己的需求任意的使用这些属性，但是需要注意的是：
1. `channels` 为 0 时，轨道数为容器可容纳最多轨道数（整个容器）;
2. `danmus` 初始化后如果为空，则 `autoplay` 失效。因此对于异步加载的弹幕数据，需要手动调用 `refName.value.play()` 进行播放;
3. 弹幕刷新频率为每隔多长时间插入一条弹幕;

## Usage

具体使用情况不在赘述，详情可参考[demo](https://github.com/dshuais/danmaku-vue/blob/main/src/App.vue)。

## Preview

[预览地址](https://dshuais.github.io/danmaku-vue/)即为 `demo` 效果。

![Preview](../assets/img/preview.gif)
