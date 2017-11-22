## React计时器实现

>这里主要解释了state的作用和用法，使用state可以局部更新组件，并且组件之间完全隔离，互不影响。还调用生命周期函数来进行挂载和清除组件的方法。

#### 创建计时器类

这里用类方法创建，一是要用构造方法，二是要用生命周期函数来帮助计时器的完成。
``` jsx
class Clock extends React.Component {
	//构造函数初始化state值
		constructor(props){
			super(props);
			this.state = {date: new Date()};
		}
    
  //返回组件
    render(){
			return (
				<div>
				<h1>Hello World!</h1>
				<h2>It is {this.state.date.toLocaleString()}.</h2>
				</div>
			);
		}
}
```

#### 更新计时器状态需要两个步骤
1. 将计时器挂载到组件生命周期中
``` jsx
//组件挂载期间每隔一秒执行一次tick函数
		componentDidMount(){
			this.timeID = setInterval(
				() => this.tick(),
				1000
			);
		}
```
2. 更新计时器中的数值
``` jsx
//每一次调用都更新state中的date值，重新渲染组件需要用setState函数
		tick(){
			this.setState({
				date: new Date(),
			});
		}
```

#### 最后把清除计时器放到取消挂载的生命函数中，这样当组件消失时，计时器也会清除。
``` jsx
//组件销毁时同样清除计时器
		componentWillUnmount(){
			clearInterval(this.timeID);
		}
```

#### 最后渲染到页面中去
这里为了显示组件中互不影响，创建了三个clock，可以进行测试之间没有关联。完整代码如下：
``` jsx
//计时器
	class Clock extends React.Component {
	//构造函数初始化state值
		constructor(props){
			super(props);
			this.state = {date: new Date()};
			
		}
		
		//组件挂载期间每隔一秒执行一次tick函数
		componentDidMount(){
			this.timeID = setInterval(
				() => this.tick(),
				1000
			);
		}

		//组件销毁时同样清除计时器
		componentWillUnmount(){
			clearInterval(this.timeID);
		}
		
		//每一次调用都更新state中的date值，重新渲染组件需要用setState函数
		tick(){
			this.setState({
				date: new Date(),
			});
		}
		
		//返回组件
		render(){
			return (
				<div>
				<h1>Hello World!</h1>
				<h2>It is {this.state.date.toLocaleString()}.</h2>
				</div>
			);
		}
	}
	
	//组件之间都是隔离的不允许也不应该互相访问
	function App(){
		return (
		<div>
			<Clock />
			<Clock />
			<Clock />
		</div>
		);
	}
	
	//渲染组件
	ReactDOM.render(
		<App />
		,document.getElementById('root')
	);
```

>Tips:更新组件状态一定要用setState方法，直接赋值的方法并不会更新组件的状态。初始化的时候可以直接赋值。
