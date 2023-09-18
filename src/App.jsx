import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"; 
import "./styles/App.css";
import supabase from "./supabase";
import SignupForm from "./pages/SignupForm";

export function App() {
    
    return(
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="TheSpitball" element={<SignupForm />} />
            </Routes>
        </HashRouter>
    );
}
