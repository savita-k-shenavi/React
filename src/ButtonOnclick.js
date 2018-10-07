import React, { Component } from 'react';
import propTypes from 'prop-types';
import reatDom from 'react-dom';

class ButtonOnclick extends Component {
    constructor(){
        super();
                this.state = {
                count : 0 ,
                data : ''         
        };
        this.updateState = this.updateState.bind(this)
        this.clearText = this.clearText.bind(this)
    };
    btnclick(){
        this.setState({
            count : this.state.count + 1
        });      
    }
    updateState(e){
        this.setState({
            data : e.target.value
        })
    }
    clearText(){
        this.setState({
            data : ''
        })
    }
    render(){

        return(
            <div>
                <h1>Value : {this.state.count}</h1>
                <button onClick = {this.btnclick.bind(this)}>Onclick Increment by 1</button>
                <br/>

                <hr/>
                <input type = "text" value = {this.state.data}
                onChange = {this.updateState}/>
                <h4>{this.state.data}</h4>
                <button onClick = {this.clearText}>Clear</button>
            </div>
        )         
        
    }
}

export default ButtonOnclick;