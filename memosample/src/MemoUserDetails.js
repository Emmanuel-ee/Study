import React from "react"

function SampleUserDetails(props) {
    console.log("MemoUser Details loaded")
    return (<div>User name : {props.username}<br /></div>)

}

const MemoUserDetails =React.memo(SampleUserDetails)
export default MemoUserDetails