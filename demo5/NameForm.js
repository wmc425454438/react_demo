class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        //别忘了绑定
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value.toUpperCase()});
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
