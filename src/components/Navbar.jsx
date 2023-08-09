import React from "react";
import "../styles/Navbar.css";

export function Navbar() {

    return(
        <div className="navbar">
            <h1 className="navbar-text__big"> Welcome to my modern cafe.</h1>
            <h2 className="navbar-text__little">💡<i>Think of it like an old <a className="navbar-text__little" href="https://en.wikipedia.org/wiki/Salon_(France)">French Salon</a></i>💡</h2>
        </div>
    );
}