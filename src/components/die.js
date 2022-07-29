import React from "react"
import ReactDOM from "react-dom"



export default function App(props) {
    const styles = {
        backgroundColor: props.isHeld?"#59E391":"white"
    }
    return (     
        <div 
            className="die" 
            onClick={props.onClick} 
            style={styles}>{props.value}
        </div>
 
    )
}