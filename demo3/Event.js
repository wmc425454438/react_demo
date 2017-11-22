/**
 * Created by Michael on 2017/11/22.
 */
import React, { Component } from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }

    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }

    render(){
        return (
            <div>
                <p>hello</p>
                {/* Pass params via bind() method. */}
                <a href="https://reactjs.org" onClick={(e) => this.preventPop(this.state.name, e)}>Click</a>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
            </div>
        );
    }
}

export default Popper;
