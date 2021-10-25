import { Table } from "react-bootstrap"

const TableComponent = (props) => {

    if (props.todoData.length === 0) {
        return <div></div>
    }
    else {
        return (<Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TODO ID</th>
                    <th>TITLE</th>
                    <th>COMPLETED</th>
                </tr>
            </thead>
            <tbody>
                {props.todoData.map(row => (<tr>
                    <td>{row.id}</td>
                    <td>{row.todoId}</td>
                    <td>{row.title}</td>
                    <td>{row.completed ? "TRUE" : "FALSE"}</td>

                </tr>))}

            </tbody>
        </Table>
        )
    }
}
export default TableComponent
