import React, { Component, createRef } from 'react'

export default class UncontrolledComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            all:[]
        }

        this.nameInputref = React.createRef();
        this.emailInputref = React.createRef();
        this.departmentInputref = React.createRef();
        this.jobroleInputref = React.createRef();

    }

    onSubmit = (e)=>{
       
        // e.preventDefault();

        let emp ={};
        
        emp.name = this.nameInputref.current.value;e.preventDefault();
        emp.email = this.emailInputref.current.value;e.preventDefault();
        emp.department = this.departmentInputref.current.value;e.preventDefault();
        emp.jobrol = this.jobroleInputref.current.value;e.preventDefault();

        this.setState((prevState)=>({
            all : [...prevState.all,emp]
        }))

        alert(JSON.stringify(emp));

        

        }

  render() {
    return (
        <>

      <div>
          <div className="form-container">
                    <h2>Employee Registration Uncontrolled</h2>
                    <form id="employeeForm" onSubmit={this.onSubmit}>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" required  ref={this.nameInputref}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required ref={this.emailInputref} />
                        <label htmlFor="department">Department:</label>
                        <select id="department" name="department" required ref={this.departmentInputref} >
                            <option value>-- Select Department --</option>
                            <option value="HR">Human Resources</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                        </select>
                        <label htmlFor="role">Job Role:</label>
                        <input type="text" id="role" name="role" required ref={this.jobroleInputref} />
                        <button type="submit" value="Submit">Submit</button>
                    </form>
                </div>
      </div>
      <div style={{ marginTop: '20px' }}>
          <h3>All Employees:</h3>
          <ul>
            {this.state.all.map((e, i) => (
              <li key={i}>
                {e.name} | {e.email} | {e.department} | {e.jobrole}
              </li>
            ))}
          </ul>
        </div>

      </>
    )
  }
}
