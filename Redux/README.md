# Redux

在Flux的基础上研发出来的一套新的框架，相较于flux更好用，修正了一些flux的缺点。


### 如果你的UI层比较简单是不需要Redux的

- 用户的使用方式非常简单
- 用户之间没有协作
- 不需要与服务器大量交互，也没有使用 WebSocket
- 视图层（View）只从单一来源获取数据

上面这些情况，都不需要使用 Redux。

- 用户的使用方式复杂
- 不同身份的用户有不同的使用方式（比如普通用户和管理员）
- 多个用户之间可以协作
- 与服务器大量交互，或者使用了WebSocket
- View要从多个来源获取数据

上面这些情况才是 Redux 的适用场景：多交互、多数据源。
从组件角度看，如果你的应用有以下场景，可以考虑使用 Redux。

- 某个组件的状态，需要共享
- 某个状态需要在任何地方都可以拿到
- 一个组件需要改变全局状态
- 一个组件需要改变另一个组件的状态

发生上面情况时，如果不使用 Redux 或者其他状态管理工具，不按照一定规律处理状态的读写，代码很快就会变成一团乱麻。你需要一种机制，可以在同一个地方查询状态、改变状态、传播状态的变化。


## 核心概念

Redux 本身很简单。 


当使⽤普通对象来描述应⽤的 state 时。例如，todo 应⽤的 state 可能⻓这样：

``` js
{
	todos: [{
		text: 'Eat Food',
		compeleted: true
	}, {
		text: 'Exercise',
		compeleted: false
	}],
	visibilityFilter: 'SHOW_COMPELETED'
}

```

这个对象就像Model，区别是它并没有setter（修改器方法）。因此其它的代码不能随意修复它，造成难以复现的BUG。

想要更新state中的数据，你需要发起一个action。Action就是一个普通的Javascript对象。（注意到没，这儿没有任何魔法？）用来描述发生了什么。

下面是一些action的示例：

``` js
{ type: 'ADD_TODO', text: 'Go to swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

强制使⽤ action 来描述所有变化带来的好处是可以清晰地知道应⽤中到底发生了什么。如果⼀些东⻄改变了，就可以知道为什么变。action 就像是描述发生了什么的⾯包屑。最终，为了把 action 和 state 串起来，开发⼀些函数，这就是 reducer。再次地，没有任何魔法，reducer 只是⼀个接收 state和 action，并返回新的 state 的函数。 对于⼤的应用来说，可能很难开发这样的函数，所以我们编写很多小函数来分别管理 state 的⼀部分：

``` js
function visibilityFilter(state = 'SHOW_ALL', action){
    if(action.type === 'SET_VISIBILITY_FILTER') {
        return  action.filter;
    }
    else
    {
        return  state;
    }
}

function todos(state = [], action)
{
    switch  (action.type)
    {
        case    'ADD_TODO':
        return  state.concat([{ text: action.text, completed: false }]);
        case    'TOGGLE_TODO':
        return  state.map((todo, index) => action.index === index ?  {text: todo.text, completed: !todo.completed } : todo);
        default:
        return  state;
    }
}

```


再开发⼀个 reducer 调⽤这两个 reducer，进而来管理整个应用的 state：

``` js
function todoApp(state = {}, action) {
    return  {
        todos: todos(state.todos,  action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action) };
    }
}

```

这差不多就是 Redux 思想的全部。注意到没我们还没有使用任何 Redux 的API。Redux ⾥有⼀些⼯具来简化这种模式，但是主要的想法是如何根据这 些 action 对象来更新 state，⽽且 90% 的代码都是纯 JavaScript，没用 Redux、Redux API 和其它魔法。



