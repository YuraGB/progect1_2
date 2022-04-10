import React, { Suspense } from 'react';
// @ts-ignore
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HomePage} from "../HomePage/HomePage";

const Routs: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
             </Routes>
        </BrowserRouter>
    );
};

export default Routs;
