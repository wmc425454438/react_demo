/**
 * Created by Michael on 2017/11/22.
 */
import React, { Component } from 'react';

class InputonChange extends Component{
    constructor(props){
        super(props);
        this.state = {value: 'Hello Rookie!'};
    }

    handleChange = (event) => {
    this.setState({value: event.target.value});
}

    render() {
        var value = this.state.value;
        return (
        <div>
            <input type="text" value={value} onChange={ this.handleChange} />
            <h4>{value}</h4>
        </div>
        );
    }
}

export default InputonChange;
