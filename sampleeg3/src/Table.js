function Table( props ) {
    if (props.alldata.length === 0)
        return (<div></div>)
    else {
        return (
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {props.alldata.map(row => (<tr><td>{row.id}</td><td>{row.userId}</td><td>{row.title}</td><td>{row.completed === true ? "TRUE" : "FALSE"}</td></tr>))
                    }</tbody>
            </table>)
    }
}

export default Table