import React, { Component } from 'react'
import './Students.css'


export default class FuntionalComonent extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const list = this.props.students.map((student,index) =>
              
            <tr key={index}>
                <td>{student.name}</td>
                <td>{student.marks.Math}</td>
                <td>{student.marks.Science}</td>
                <td>{student.marks.English}</td>
                <td>{student.marks.Science + student.marks.English + student.marks.Math} </td>
                <td>{(((student.marks.Science + student.marks.English + student.marks.Math)*100)/300).toFixed(2)} </td>
                 
            </tr>

        )

        return (
            <table>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>English</th>
                    <th>Total</th>
                    <th>Percentage</th>

                </tr>
            </thead>
            <tbody>{list}</tbody>
        </table>
        )
    }
}
