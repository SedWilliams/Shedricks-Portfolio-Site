import React from "react";
import '../styles/App.css';
import { Navbar } from "../components/Navbar"; 
import { Outsource } from "../components/Outsource";

export function Gap() {
    return (
        <div>
            <Navbar/>
            <Outsource />
        </div>
    );
}