# Changelog

::: tip
- `danmaku-vue` 截至目前发布了七个版本，其中两次大更新版本
- 版本号格式为 `主版本号.次版本号.修订号`，小数点后为 `bug` 修正版本
- 版本号遵循 `Semantic Versioning` 规范

- 更多版本记录或更新记录请关注[Github](https://github.com/dshuais/danmaku-vue/releases)
:::

## v1.0.0
- `danmaku-vue` 弹幕交互插件正式发布，修复了Beta版本中的一些bug

- 新增
1. 新增使用 `insert` 方式插入的弹幕列表，因为直接调用insert不会进行数据绑定，故而提供获取`insertList` 方法
2. 新增默认 `slot` ，可在弹幕组件内布局其他内容

- 修改
1. 优化[鼠标悬浮区域问题](https://github.com/dshuais/danmaku-vue/issues/6)
2. 优化[`insert`方式插入弹幕偶尔无法实时出现问题](https://github.com/dshuais/danmaku-vue/issues/7)
3. 优化[悬浮效果后文字消失问题](https://github.com/dshuais/danmaku-vue/issues/10)
4. 更新文档和演示Demo

## v0.1.0
- `danmaku-vue` 弹幕交互插件发布了第一个Beta版本，有了基础功能