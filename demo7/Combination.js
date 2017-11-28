function Dialog(props){
	return (
		<div>
		<div className="Greet">
			{props.welcome}
		</div>
		{props.children}
		</div>
	);
}

class SignUpDialog extends React.Component{
	constructor(props){
		super(props);
		
		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
		this.state = {login: ''};
	}
	
	handleSignUp(event){
		alert('wlecome aboard, ${this.state.login}');
	}
	
	handleChange(event){
		this.setState({login: event.target.value});
	}
	
	render(){
		return(
			<Dialog welcome='Hello Welcome'>
			<input onChange={this.handleChange} value={this.state.login} />
			<button onClick={this.handleSignUp}  >Sign Up</button>
			</Dialog>
		);
	}
}

ReactDOM.render(
	<SignUpDialog />
	,document.getElementById('root')
);
