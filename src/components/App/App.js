import React, {useState , useEffect} from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Body />
        </div>
    )
}

export default App;