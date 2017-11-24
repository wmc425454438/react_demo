function Greet1(props){
	return <h1>welcome</h1>;
}

function Warn1(props){
	return <h1>Please sign up</h1>;
}

function Greeting(props){
	const isLogin = props.isLogin;
	if(isLogin){
		return <Greet1 />;
	}
	else{
		return <Warn1 />;
	}
}

ReactDOM.render(
	<Greeting isLogin={true}/>
	,document.getElementById('root')
);
