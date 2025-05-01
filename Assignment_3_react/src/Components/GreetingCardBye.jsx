import React, { Component } from 'react'

export default class GreetingCardBye extends Component {
  render() {
    return (
        <div className='greeting'>
        <h1> Bye {this.props.name === '' ? "Guest" : this.props.name}! </h1> 
       </div>
    )
  }
}
