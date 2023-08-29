import React from "react";
import "../styles/Navbar.css";

export function Navbar() {

    return(
        <div className="navbar">
            <h1 className="navbar-text__big"> Welcome to my modern cafe.</h1>
            <h2 className="navbar-text__little">💡<i>My recreation of an old <a className="navbar-text__little" target="_blank"href="https://en.wikipedia.org/wiki/Salon_(France)">French Salon</a></i>💡</h2>
        </div>
    );
}