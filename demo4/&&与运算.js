function UnreadMessage(props){
	const unreadMessage = props.unreadMessage;
	return(
		<div>
			<h1>Hello User!</h1>
			{unreadMessage.length > 0 &&
				<h2>
				You have {unreadMessage.length} unreadMessage.
				</h2>
			}
		</div>
	);
}

const messages = ['11','22','33'];
ReactDOM.render(
	<UnreadMessage unreadMessage = {messages}/>
	,document.getElementById('root')
);
