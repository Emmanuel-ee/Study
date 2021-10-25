
function Tables(props) {



    if (props.userData) {
        let header = []
        let data = []
        for (let property in props.userData) {
            header.push(property)
            data.push(props.userData[property])
        }
  

        return (
            <table border={1}>
                <thead>
                    <tr>
                        {header.map(row => (<th>{row}</th>))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.map(row => (<td>{row}</td>))}
                    </tr>
                </tbody>

            </table>

        )
    } else {
        return (<div></div>)
    }

}

export default Tables