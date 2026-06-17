import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Careers from "../pages/career";
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
import GISDevelopment from "../pages/GISDevelopment";

import LocationIntelligence from "../pages/LocationIntelligence";

import Advisory from "../pages/Advisory";
import Synlog from "../pages/casestudies/Synlog";
import Solapur from "../pages/casestudies/Solapur";
import Ministry from "../pages/casestudies/Ministry";
import Maharashtra from "../pages/casestudies/Maharashtra";
import Thane from "../pages/casestudies/Thane";
import Agriculture from "../pages/casestudies/Agriculture";

import ApplicationDevelopment from "../pages/ApplicationDevelopment";
import GeospatialTechnicalSupport from "../pages/GeospatialTechnicalSupport";
import SoftwareTechnicalSupport from "../pages/SoftwareTechnicalSupport";
import AzureConsulting from "../pages/AzureConsulting";
import SoftwareAdvisory from "../pages/SoftwareAdvisory";
import DroneServices from "../pages/DroneServices";
import JobDetailPage from "../pages/JobDetailPage";
import GeoSphereValueProposition from "../pages/product/GeoSp";
import Blog1 from "../pages/Blog1";
import Blog2 from "../pages/Blog2";
import Blog3 from "../pages/Blog3";
import Blog4 from "../pages/Blog4";
import GeoSet1 from "../pages/product/GeoSet1";
import GeoSet2 from "../pages/product/GeoSet2";
import GeoFlow1 from "../pages/product/GeoFlow1";
import GeoFlow2 from "../pages/product/GeoFlow2";
import GeoScan2 from "../pages/product/GeoScan2";
import GeoScan1 from "../pages/product/GeoScan1";
import Soil from "../pages/casestudies/Soil";
import ADepartment from "../pages/casestudies/ADepartment";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Career Route */}
        <Route path="/career" element={<Careers />} />
        <Route path="/geospatial" element={<GeospatialPage />} />
        <Route path="/Software" element={<SoftwarePage />} />
        <Route path="/Geoset" element={<GeoSetPage />} />
        <Route path="/GeoSphere" element={<GeoSpherePage />} />
        <Route path="/GeoScan" element={<GeoScanPage />} />
        <Route path="/GeoFlow" element={<GeoFlowPage />} />
        <Route path="/Industries" element={<IndustriesPage />} />
        <Route path="/Blogs" element={<BlogsPage />} />
        <Route path="/CaseStudies" element={<CaseStudiesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/CodeOfConduct" element={<CodeOfConduct />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/AboutCompany" element={<AboutCompany />} />
        <Route path="/GISDevelopment" element={<GISDevelopment />} />

        <Route
          path="/LocationIntelligence"
          element={<LocationIntelligence />}
        />
        <Route path="/Advisory" element={<Advisory />} />
        <Route path="/Synlog" element={<Synlog />} />
        <Route path="/Solapur" element={<Solapur />} />
        <Route path="/Ministry" element={<Ministry />} />
        <Route path="/Maharashtra" element={<Maharashtra />} />
        <Route path="/Thane" element={<Thane />} />
        <Route path="/Agriculture" element={<Agriculture />} />

        <Route
          path="/ApplicationDevelopment"
          element={<ApplicationDevelopment />}
        />
        <Route
          path="/GeospatialTechnicalSupport"
          element={<GeospatialTechnicalSupport />}
        />
        <Route
          path="/SoftwareTechnicalSupport"
          element={<SoftwareTechnicalSupport />}
        />
        <Route path="/AzureConsulting" element={<AzureConsulting />} />
        <Route path="/SoftwareAdvisory" element={<SoftwareAdvisory />} />
        <Route path="/drone-services" element={<DroneServices />} />
        <Route path="/JobDetailPage" element={<JobDetailPage />} />
        <Route path="/GeoSp" element={<GeoSphereValueProposition />} />
        <Route path="/GeoSet1" element={<GeoSet1 />} />
        <Route path="/GeoSet2" element={<GeoSet2 />} />
        <Route path="/GeoFlow1" element={<GeoFlow1 />} />
        <Route path="/GeoFlow2" element={<GeoFlow2 />} />
        <Route path="/GeoScan2" element={<GeoScan2 />} />
        <Route path="/GeoScan1" element={<GeoScan1 />} />
        <Route path="/Soil" element={<Soil />} />
        <Route path="/ADepartment" element={<ADepartment />} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
      </Routes>
    </BrowserRouter>
  );
}
