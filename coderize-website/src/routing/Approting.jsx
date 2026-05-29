import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerPage from "../pages/Career";
import GeospatialPage from "../pages/services/Geospatial";
import SoftwarePage from "../pages/services/Software";
import GeoSetPage from "../pages/product/GeoSet";
import GeoSpherePage from "../pages/product/GeoSphere";
import GeoScanPage from "../pages/product/GeoScan";
import GeoFlowPage from "../pages/product/GeoFlow";
import IndustriesPage from "../pages/Industries";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

         {/* Career Route */}
        <Route path="/career" element={<CareerPage/>} />
        <Route path="/geospatial" element={<GeospatialPage />} />
        <Route path="/Software" element={<SoftwarePage />} />
        <Route path="/Geoset" element={<GeoSetPage/>} />
        <Route path="/GeoSphere" element={<GeoSpherePage/>} />
        <Route path="/GeoScan" element={<GeoScanPage/>} />
        <Route path="/GeoFlow" element={<GeoFlowPage/>} />
        <Route path="/Industries" element={<IndustriesPage/>} />


      </Routes>
    </BrowserRouter>
  );
}