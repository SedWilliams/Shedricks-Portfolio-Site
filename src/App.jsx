import React from "react";

import "./styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gap } from "./pages/gap";
import { About } from "./pages/About";
import { Freebie } from "./pages/Freebie";
import { Inspiration } from "./pages/Inspiration";

export function App() {

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={ <Gap /> } />
                    <Route path="About" element={ <About /> } />
                    <Route path="Freebie" element={ <Freebie /> } />
                    <Route path="Inspiration" element={ <Inspiration /> } /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
}