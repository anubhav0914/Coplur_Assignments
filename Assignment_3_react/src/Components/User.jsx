import React, { Component, useState } from 'react'
import GreetingCardHello from './WelcomeGreeting';
import GreetingCardBye from './GreetingCardBye';

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted: false,
      canUnmount: false,

    }; this
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {

    e.preventDefault();
    this.setState({ submitted: true });
    // this.setState({canUnmount:true});
  }

  delGreeting() {
    this.setState({ submitted: false })
    this.setState({ canUnmount: true })
  }


  componentWillUnmount() {
    // alert("Bye ");
  }

  render() {

    let greet;
    if (this.state.submitted) {
      greet = <GreetingCardHello name={this.state.value} />
    }
    if(this.state.canUnmount) {
      greet = <GreetingCardBye name={this.state.value} />

    }
    return (
      <>
        <div className='user-header'> <h1>Interacting with user</h1> </div>
        <div className='user-section'>
          <form action="" onSubmit={this.handleSubmit}>
            <input className='input' type='text' placeholder='Enter your name' value={this.value} onChange={(e) => this.handleChange(e)} />
            {!this.state.submitted ? <button type="submit" className="btn btn-primary">Submit</button> : <button onClick={() => this.delGreeting()} className="btn btn-primary">Unmount</button>}

          </form>
        </div>

        {greet}






      </>
    )
  }
}
