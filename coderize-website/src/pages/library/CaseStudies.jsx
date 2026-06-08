import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemText, Container,
  useMediaQuery, Grid, Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import casebg from "../../assets/casebg.jpg"
import case1 from "../../assets/case1.jpg"
import case2 from "../../assets/case2.jpg"
import case3 from "../../assets/case3.jpeg"
import case4 from "../../assets/case4.jpg"
import case5 from "../../assets/case5.jpg"
import case6 from "../../assets/case6.jpeg"
import case7 from "../../assets/case7.jpg"
import case8 from "../../assets/case8.jpg"

const menuItems = ["Services", "Products", "Industries", "About Us", "Careers", "Library"];

const caseStudies = [
  {
    id: 1,
    tags: "Geospatial, Public Sector, Agriculture, India",
    client: "Agriculture Department, MH",
    title: "GeoSets Collector for Post-Monsoon Crop Damage Assessment in Maharashtra",
    image: case1,
    fallback: "https://picsum.photos/seed/agri1/800/600",
    slug: "#",
  },
  {
    id: 2,
    tags: "Geospatial, Public Sector, Utility, India",
    client: "Soil & Water Conservation Dept., MH",
    title: "GIS-Driven Dashboard for Asset Optimization and Cost Reduction in Water Conservation",
    image: case2,
    fallback: "https://picsum.photos/seed/soil2/800/600",
    slug: "#",
  },
  {
    id: 3,
    tags: "Geospatial, Public Sector, Agriculture, India",
    client: "Agriculture Department, MH",
    title: "GIS-Based Mobile and Web Solutions for Scalable Agricultural Training and Management",
    image: case3,
    fallback: "https://picsum.photos/seed/agri3/800/600",
    slug: "#",
  },
  {
    id: 4,
    tags: "Geospatial, Public Sector, Forestry, India",
    client: "Thane Forest Dept., MH",
    title: "Digitizing Forest Stock from Handwritten Maps for Enhanced Geospatial Data Management",
    image: case4,
    fallback: "https://picsum.photos/seed/forest4/800/600",
    slug: "#",
  },
  {
    id: 5,
    tags: "Geospatial, Public Sector, Education, India",
    client: "Maharashtra Knowledge Corporation Limited",
    title: "WMS Service Development for Forest Encroachment Detection and Monitoring",
    image: case5,
    fallback: "https://picsum.photos/seed/mkcl5/800/600",
    slug: "#",
  },
  {
    id: 6,
    tags: "ERP, Private Sector, Retail, India",
    client: "Retail Chain Client",
    title: "ERP Integration for Multi-Location Retail Chain with Geospatial Analytics",
    image: case6,
    fallback: "https://picsum.photos/seed/retail6/800/600",
    slug: "#",
  },
    {
    id: 7,
    tags: "ERP, Private Sector, Retail, India",
    client: "Retail Chain Client",
    title: "ERP Integration for Multi-Location Retail Chain with Geospatial Analytics",
    image: case7,
    fallback: "https://picsum.photos/seed/retail6/800/600",
    slug: "#",
  },
    {
    id: 8,
    tags: "ERP, Private Sector, Retail, India",
    client: "Retail Chain Client",
    title: "ERP Integration for Multi-Location Retail Chain with Geospatial Analytics",
    image: case8,
    fallback: "https://picsum.photos/seed/retail6/800/600",
    slug: "#",
  },
];

// ── EXACT SAME HeroSection structure ─────────────────────────────────────────
function HeroSection() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: { xs: "280px", sm: "340px", md: "420px" }, overflow: "hidden" ,marginTop: { xs: "-64px", md: "-72px" },}}>
      <Box
        component="img"
        src={casebg}
        alt="Case Studies Banner"
        loading="eager"
        sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
      />
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,10,20,0.75) 0%, rgba(0,15,30,0.55) 50%, rgba(0,15,30,0.2) 100%)" }} />


      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, height: "100%", display: "flex", alignItems: "center" }}>
        <Box sx={{ mt: { xs: 6, md: 7 } }}>
          <Typography sx={{ color: "#ffffff", fontSize: { xs: "13px", md: "15px" }, fontWeight: 400, mb: 1.5 }}>
            Home &nbsp; » &nbsp; Case Study
          </Typography>
          <Typography sx={{ color: "#ffffff", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-1px", fontSize: { xs: "38px", sm: "52px", md: "44px" }, maxWidth: "600px" }}>
            Real-World Insights Through Our Impactful Case Studies
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// ── Case Study Card — full-width alternating layout ───────────────────────────
function CaseStudyCard({ cs, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Odd index (0,2,4) = image LEFT; Even index (1,3,5) = image RIGHT
  const imageLeft = index % 2 === 0;

  const ImageBlock = (
    <Box
      sx={{
        width: { xs: "100%", md: "42%" },
        flexShrink: 0,
        overflow: "hidden",
        minHeight: { xs: "240px", sm: "300px", md: "390px" },
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={imgError ? cs.fallback : cs.image}
        onError={() => setImgError(true)}
        alt={cs.client}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          transition: "transform 0.5s ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
      />
    </Box>
  );

  const ContentBlock = (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 3, sm: 4, md: 6, lg: 8 },
        py: { xs: 4, md: 5 },
      }}
    >
      {/* Tags row — circle + comma separated orange text */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Box
          sx={{
            width: 14, height: 14,
            borderRadius: "50%",
            border: "2px solid #ff6b1a",
            flexShrink: 0,
          }}
        />
        <Typography sx={{ color: "#ff6b1a", fontSize: { xs: "13px", md: "14px" }, fontWeight: 400 }}>
          {cs.tags}
        </Typography>
      </Box>

      {/* Client name */}
      <Typography
        sx={{
          color: "#1a1a1a",
          fontWeight: 700,
          fontSize: { xs: "24px", sm: "28px", md: "34px" },
          lineHeight: 1.2,
          mb: 2,
          fontFamily: "'Georgia', serif",
        }}
      >
        {cs.client}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "#444",
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: 1.7,
          mb: 3.5,
          maxWidth: "520px",
        }}
      >
        {cs.title}
      </Typography>

      {/* Read More */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.8,
          color: "#1a1a1a",
          fontWeight: 500,
          fontSize: "15px",
          borderBottom: "1.5px solid #1a1a1a",
          pb: 0.4,
          width: "fit-content",
          cursor: "pointer",
          transition: "color 0.2s, border-color 0.2s",
          ...(hovered && { color: "#ff6b1a", borderColor: "#ff6b1a" }),
        }}
      >
        Read More
        <ArrowForwardIcon sx={{ fontSize: 16, transition: "transform 0.2s", transform: hovered ? "translateX(5px)" : "translateX(0)" }} />
      </Box>
    </Box>
  );

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: imageLeft ? "row" : "row-reverse",
        },
        width: "100%",
        bgcolor: "#fff",
        borderBottom: "1px solid #e8e8e8",
        cursor: "pointer",
        minHeight: { xs: "auto", md: "380px" },
        overflow: "hidden",
      }}
    >
      {ImageBlock}
      {ContentBlock}
    </Box>
  );
}
// ── Page ──────────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Navbar transparentHero={true} />
      <HeroSection />

      {/* Case studies list */}
      <Box sx={{ bgcolor: "#f5f4f2" }}>
        {caseStudies.map((cs, index) => (
          <CaseStudyCard key={cs.id} cs={cs} index={index} />
        ))}
      </Box>
    </Box>
  );
}