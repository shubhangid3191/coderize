import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerPage from "../pages/Career";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

         {/* Career Route */}
        <Route path="/career" element={<CareerPage/>} />


      </Routes>
    </BrowserRouter>
  );
}