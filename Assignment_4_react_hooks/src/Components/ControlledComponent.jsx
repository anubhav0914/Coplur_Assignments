import React, { Component } from 'react'

export default class ControlledComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emp: {}
        }
        // this.state = {
        //     // all:[]
        // }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handleJObRolChange = this.handleJObRolChange.bind(this);

    }

    handleNameChange(e) {

        this.setState((state, props) => {

            let emp = state.emp

            emp.name = e.target.value;

            return { emp: emp }
        })
    }

    handleEmailChange(e) {

        this.setState((state, props) => {

            let emp = state.emp

            emp.emial = e.target.value;

            return { emp: emp }
        })
    }

    handleDepartmentChange(e) {
        this.setState((state, props) => {
            let emp = state.emp
            emp.department = e.target.value;
            return { emp: emp }
        });
    }

    handleJObRolChange(e) {
        this.setState((state, props) => {
            let emp = state.emp
            emp.JobRole = e.target.value;
            return { emp: emp }
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        alert(JSON.stringify(this.state.emp));
    }

    render() {
        return (
            <>
                <div className="form-container">
                    <h2>Employee Registration Controlled</h2>
                    <form id="employeeForm" onSubmit={this.onSubmit}>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" required value={this.state.emp.name} onChange={this.handleNameChange} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required value={this.state.emp.email} onChange={this.handleEmailChange} />
                        <label htmlFor="department">Department:</label>
                        <select id="department" name="department" required value={this.state.emp.department} onChange={this.handleDepartmentChange}>
                            <option value>-- Select Department --</option>
                            <option value="HR">Human Resources</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                        </select>
                        <label htmlFor="role">Job Role:</label>
                        <input type="text" id="role" name="role" required value={this.state.emp.JobRole} onChange={this.handleJObRolChange} />
                        <button type="submit" value="Submit">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}
