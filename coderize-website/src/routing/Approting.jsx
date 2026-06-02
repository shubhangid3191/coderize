import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CareerPage from "../pages/Career";
import GeospatialPage from "../pages/services/Geospatial";
import SoftwarePage from "../pages/services/Software";
import GeoSetPage from "../pages/product/GeoSet";
import GeoSpherePage from "../pages/product/GeoSphere";
import GeoScanPage from "../pages/product/GeoScan";
import GeoFlowPage from "../pages/product/GeoFlow";
import IndustriesPage from "../pages/Industries";
import BlogsPage from "../pages/library/Blogs";
import CaseStudiesPage from "../pages/library/CaseStudies";
import ContactPage from "../pages/Contact";
import CodeOfConduct from "../pages/AboutUs/CodeOfConduct";
import Leadership from "../pages/AboutUs/Leadership";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import AboutCompany from "../pages/AboutUs/AboutCompany";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

         {/* Career Route */}
        <Route path="/career" element={<CareerPage/>} />
        <Route path="/geospatial" element={<GeospatialPage />} />
        <Route path="/Software" element={<SoftwarePage />} />
        <Route path="/Geoset" element={<GeoSetPage/>} />
        <Route path="/GeoSphere" element={<GeoSpherePage/>} />
        <Route path="/GeoScan" element={<GeoScanPage/>} />
        <Route path="/GeoFlow" element={<GeoFlowPage/>} />
        <Route path="/Industries" element={<IndustriesPage/>} />
        <Route path="/Blogs" element={<BlogsPage/>} />
        <Route path="/CaseStudies" element={<CaseStudiesPage/>} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/CodeOfConduct" element={<CodeOfConduct/>} />
        <Route path="/Leadership" element={<Leadership/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/TermsConditions" element={<TermsConditions/>} />
        <Route path="/AboutCompany" element={<AboutCompany />} />

      </Routes>
    </BrowserRouter>
  );
}