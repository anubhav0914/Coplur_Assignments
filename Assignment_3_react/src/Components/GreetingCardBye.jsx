import React, { Component } from 'react'

export default class GreetingCardBye extends Component {

  componentWillUnmount() {
    console.log("GreetingCardHello is unmounting");
    alert("Goodbye from GreetingCardHello");
  }
  
  render() {
    return (
        <div className='greeting'>
        <h1> Bye {this.props.name === '' ? "Guest" : this.props.name}! </h1> 
       </div>
    )
  }
}
