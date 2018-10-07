import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Emp from './Emp'

class Employee extends Component {
    state = {
        emp : [
            {id : 1 , name : 'shweta' ,salary : 30000},
            {id : 2 , name : 'shruti' ,salary : 20000},
            {id : 3 , name : 'chetan' ,salary : 10000}
        ]
    }
    deleteEmp(){

    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {
                            this.state.emp.map((emp)=>{
                                return (<Emp salary = {emp.salary} key={emp.id} deleteEvent={this.deleteEmp.bind(this,id)}>{emp.name}</Emp>)
                            })
                        }

                    </tbody>
                </table>
            </div>

        )
    }
}
export default Employee;