import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/Mainpage";
import Layout from "../components/layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;