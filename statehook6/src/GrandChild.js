import React,{useContext} from "react";
import ColorContext from "./ColorContext";

function GrandChild(){
    const color = useContext(ColorContext)
    return (<div>Color from App is {JSON.stringify(color)}</div>)
}

export default GrandChild
