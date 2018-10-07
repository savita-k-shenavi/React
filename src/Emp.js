import React from 'react';
import ReactDOM from 'react-dom';
const Emp = (props) => {
    
        return(
            
                <tr>
                    <td>
                        {props.children}
                    </td>
                    <td>
                        {props.salary}
                    </td>
                    <td>
                        <button onClick={props.deleteEvent}>Delete</button>
                    </td>
                </tr>
            
        )
    
}

export default Emp;