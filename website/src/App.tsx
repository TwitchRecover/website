import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/home';
import Error from './pages/error/error';
import Navbar from './compoenents/navbar';
import Footer from './compoenents/footer';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
  );
}

export default App;
