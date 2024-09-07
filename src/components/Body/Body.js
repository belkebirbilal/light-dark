import React from "react";
import "./Body.css";

function Body({clicked}) {
    return (
        <>
            <main style={
                {
                    backgroundColor: clicked ? "#282D35" : "white",
                    color: clicked ? "white" : "#282D35"
                }
            }>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        </>
    )
}

export default Body;





