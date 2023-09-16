import React from "react";
import "../styles/Hero.css";
export function Hero() {

    return(
        <div style={{position: "relative"}} className="hero-container">
            <img src="./imgs/knights.jpg" className="hero-bgImg" style={{position: "absolute", opacity: "50%", zIndex: "-1"}}></img>
        </div>
    );
}