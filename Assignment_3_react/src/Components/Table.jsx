import React, { Component } from 'react';
import Pass from './Pass';
import Fail from './Fail';

export default class Table extends Component {
    render() {
        const list = this.props.StudentData.map((student, index) => {
            const totalper = (((student.marks.Science + student.marks.English + student.marks.Math) * 100) / 300).toFixed(2);
            const result = totalper > 33;

            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{student.name}</td>
                    <td>{student.marks.Math}</td>
                    <td>{student.marks.Science}</td>
                    <td>{student.marks.English}</td>
                    <td>{student.marks.Science + student.marks.English + student.marks.Math}</td>
                    <td>{totalper}</td>
                    <td>{result ? <Pass /> : <Fail />}</td>
                </tr>
            );
        });

        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Math</th>
                            <th scope="col">Science</th>
                            <th scope="col">English</th>
                            <th scope="col">Total</th>
                            <th scope="col">Percentage</th>
                            <th scope="col">Result</th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
            </div>
        );
    }
}
