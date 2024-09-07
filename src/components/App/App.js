import React, {useState} from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import "./App.css";

function App() {
    const [clicked , isClicked] = useState(false)
    return (
        <div className="container">
            <Header isClicked={isClicked} clicked={clicked} />
            <Body clicked={clicked} />
        </div>
    )
}

export default App;