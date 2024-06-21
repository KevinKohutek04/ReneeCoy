import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from "./componets/FrontPage/FrontPage";

function AppRoute () {
    return (
        <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="*" element={<FrontPage />} />
      </Routes>
    </Router>
    );
}

export default AppRoute;