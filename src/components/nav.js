import React from "react"
import logo from "../images/logo.png"

export default function Nav() {
    return (
        <div className="nav">
            <img className="logo-image" src={logo} />
            <h2 className="title">React Meme Generator</h2>
            <h4>React Project - 3</h4>
        </div>
    )
}