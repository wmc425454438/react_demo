# 组件&props

>这部分的内容是根据官方网站编写的，是练习的第一个例子，前面的都比较简单，这是第一个需要用到函数间传递参数的例子。主要利用props来传递参数，
以及如何使用props来传递参数，还有在编写JSX过程中的一些注意点和细节，这里都会提一下。

## 组件的写法

>主要有两种写法：class方式继承component和function直接定义

### class方式继承component

``` jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### function直接定义
``` jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
注意，这里如果用class创建的组件，在接受参数的时候需要加上一个this。
这两种方法的一些特性在后面会提到。

## props传递参数

>传递参数是通过给新组建添加已经定义好的属性，例如：<MyCommponet name="myname" />。name作为Mycommponent的新属性传递给自定义组件的值的媒介。
在接受参数的方法中只要遵循{props.name}的写法就可以了。

### Comment组件实例
- 先定义一个Comment组件
``` jsx
class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <UserInfo author={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.date)}
                </div>
            </div>
        );
    }
}
```
- 然后是UserInfo的用户信息
``` jsx
function UserInfo(props){
    return (
        <div className="UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}
```
- 用户头像和名称
``` jsx
function Avatar(props){
    return (
            <img className="Avatar"
                 src={props.user.avatarUrl}
                 alt={props.user.name}
            />
    );
}
```
- 将日期格式化一下
``` jsx
function formatDate(date){
    return date.toLocaleString();
}
```

- 新建一个用来测试的数据对象
``` jsx
const comment={
    date: new Date(),
    text: 'I want to be a web developer and become a cto of a big company',
    author: {
        name: 'Michael',
        avatarUrl: picture
    }
};
```

- 最后将数据对象渲染到页面中
``` jsx
ReactDOM.render(
    <Comment
        author = {comment.author}
        text = {comment.text}
        date = {comment.date}
    />
    ,
    document.getElementById('root')
);
```
这个例子将组件和props的用法和创建说明的很详细了，也将其中的组件模块化了。像用户信息和头像已经作为一个模块分离出来了，之后可以重复调用。

>React中引入图片的方式很麻烦，目前所知的只能用import方法。如果是多张图片估计可以使用数组或者其他方式将其打包。
