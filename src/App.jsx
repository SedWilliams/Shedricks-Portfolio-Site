import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"; 
import "./styles/App.css";

export function App() {
    
    return(
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </HashRouter>
    );
}
