import React from "react"
import ColorContext from "./ColorContext"
class Table extends React.Component {
    static contextType = ColorContext
    constructor(props){
        super(props)
        const context = Table.contextType;
        console.log(context)
    }
    
    render() {
        console.log(JSON.stringify(this.context))
       
        if (this.props.tableData.length === 0)
            return (<div></div>)
        else
            return (
                <div style={{backgroundColor:this.context.color}}>
                <table border={this.context.border}>
                    <tbody>
                        {this.props.tableData.map(row => (<tr><td>{row.id}</td><td>{row.userId}</td></tr>))}
                    </tbody>
                </table>
                </div>

            )


    }

}

export default Table

