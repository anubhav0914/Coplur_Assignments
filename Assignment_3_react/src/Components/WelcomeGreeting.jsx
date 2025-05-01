import React, { Component } from 'react';

export default class GreetingCardHello extends Component {
    render() {

        
        console.log(this.props.name);
        return (
            <div className='greeting'>
             <h1> Hello {this.props.name === '' ? "Guest" : this.props.name}! </h1> 
            </div>
        );
    }
}

