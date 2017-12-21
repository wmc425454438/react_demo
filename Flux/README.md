# Flux

### 介绍

Flux是react使用的一套框架，可以更好的实现动态网页。

本实例是实现一个添加Item的实例，

Flux应用分为四部分：
- View： 视图层
- Action（动作）：视图层发出的消息（比如mouseClick）
- Dispatcher（派发器）：用来接收Actions、执行回调函数
- Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面


![aaaa](https://res.infoq.com/news/2014/05/facebook-mvc-flux/en/resources/flux-react.png)

数据`单向流动`
1. 用户访问 View
2. View 发出用户的 Action
3. Dispatcher 收到 Action，要求 Store 进行相应的更新
4. Store 更新后，发出一个"change"事件
5. View 收到"change"事件后，更新页面

具体介绍请看[阮一峰老师的教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)
