import React, { useContext } from "react"
import ColorContext from "./ColorContext"
function Table(props) {

    const context = useContext(ColorContext)
    console.log(context)
    if (props.tableData.length === 0)
        return (<div></div>)
    else {
        return (
            <div style={{ backgroundColor: context.color }}>
                <table border={context.border}>
                    <tbody>
                        {props.tableData.map(row => (<tr><td>{row.id}</td><td>{row.userId}</td></tr>))}
                    </tbody>
                </table>
            </div>

        )


    }





}
export default Table

