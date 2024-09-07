import React , {useEffect , useState} from "react";
import logo from "../images/logo512.png"
import "./Header.css";

function Header() {
    return (
        <>
            <header>
                <div className="">
                    <img src={logo} alt="react-logo" />
                    <h1>ReactFacts</h1>
                </div>
                <div className="">
                    <p>LIGHT</p>
                    <div className="toggle">
                        <div className="circle"></div>
                    </div>
                    <p>DARK</p>
                </div>
            </header>
        </>
    )
}

export default Header;