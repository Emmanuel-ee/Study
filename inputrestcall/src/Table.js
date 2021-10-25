
import React from "react";

class Table extends React.Component {

    render() {
        return (
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USERID</th>
                        <th>TITLE</th>
                        <th>COMPLETED</th>

                    </tr>
                </thead>

                {this.props.tabledata.map(row => (<tr>
                    <td>{row.id}</td>
                    <td>{row.userId}</td>
                    <td>{row.title}</td>
                    <td>{row.completed?"true":"false"}</td>
                     </tr>

                ))}

            </table>

        )
    }
}

export default Table