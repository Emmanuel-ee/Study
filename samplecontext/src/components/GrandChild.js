import React from "react"
import ColorContext from "../context/ColorContext"

class GrandChild extends React.Component {
    static contextType = ColorContext

    render() {

        return (<div>Color selected was {JSON.stringify(this.context)}{this.context.userData.color}</div>)
    }
}

export default GrandChild