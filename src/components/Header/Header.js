import React , {useState} from "react";
import logo from "../images/logo512.png"
import "./Header.css";

function Header({isClicked , clicked}) {
    const [opacity , setOpacity] = useState(false)
    const [flex , setFlex] = useState(false)
    function handleClick() {
        isClicked(prev => !prev)
        setOpacity(prev => !prev)
        setFlex(prev => !prev)
    }
    return (
        <>
            <header style={
                {
                    backgroundColor: clicked ? "#21222A" : "white"
                }
            }>
                <div className="left">
                    <img src={logo} alt="react-logo" />
                    <h1>ReactFacts</h1>
                </div>
                <div className="right">
                    <p style={
                        {
                            opacity: opacity ? .5 : 1,
                            color: clicked ? "#918E9B" : "black"
                        }}>Light</p>
                    <div className="toggle" style={
                        {
                            justifyContent: flex ? "flex-end" : "flex-start",
                            backgroundColor: clicked ? "white" : "black",
                        }}>
                        <div className="circle" onClick={handleClick} style={
                            {
                                backgroundColor: clicked ? "black" : "white"
                            }}></div>
                    </div>
                    <p style={
                        {
                            opacity: opacity ? 1 : .5,
                            color: clicked ? "white" : "#918E9B"
                        }}>Dark</p>
                </div>
            </header>
        </>
    )
}

export default Header;