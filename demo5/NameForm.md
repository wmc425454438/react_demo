# 表单

>表单应该是web里面的核心部分了，它是用户与客户端交流的桥梁。


### 最基本的表单提交

最简单最基本的表单，莫过于一个表单中只有一个`input`和一个`submit`，这就构成了一个最简单的表单。

``` jsx
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        //别忘了绑定
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert("Your submit text:"+ this.state.value );
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />
    ,document.getElementById('root')
);

```

这里可以看到，`text`中的值是被`state`控制住的，我们想要它显示什么值都由`this.state.value`来进行显示。

如果希望用户输入的值都是大写字母可以在`handleChange`中这样写：

``` jsx
handleChange(event){
        this.setState({value: event.target.value.toUpperCase()});
    }
```

这样我们就能控制用户的输入。

>可以注意到，这里的值是由`state`来进行传输的，那么`props`又是用来干什么的呢？
其实不难发现`props`只在后台数据与控件中进行传输，而`state`负责用户和控件中的数据传输，主要职责还是用来更新控件的状态。
>
