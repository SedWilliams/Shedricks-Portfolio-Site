import React from "react";
import { Navbar } from "./components/Navbar";
import { Outsource } from "./components/Outsource";
import "./styles/App.css";

export function App() {

    return(
        <div>
            <Navbar />
            <Outsource />
        </div>
    );
}