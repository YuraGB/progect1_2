import React, { Suspense } from 'react';
// @ts-ignore
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={()=>{}} />
             </Routes>
        </BrowserRouter>
    );
};

export default Routes;
