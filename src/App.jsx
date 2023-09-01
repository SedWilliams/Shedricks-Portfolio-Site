import React from "react";

import "./styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gap } from "./pages/gap";

export function App() {

    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route index element={ <Gap /> } />
                    <Route path="/generalAccessPoint" element={<Gap />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}