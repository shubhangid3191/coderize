import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box, Container, Typography, Button, Breadcrumbs,
  Divider, IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MapIcon from "@mui/icons-material/Map";
import StorageIcon from "@mui/icons-material/Storage";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import locationIntro from "../assets/location-intelligence-1.jpg";
import logo1 from "../assets/logo-1.jpg";
import logo2 from "../assets/logo-2.jpg";
import logo3 from "../assets/logo-3.jpg";
import logo4 from "../assets/logo-4.jpg";
import logo5 from "../assets/logo-5.jpg";
import logo6 from "../assets/logo-6.jpg";
import logo7 from "../assets/logo-7.jpg";
import logo8 from "../assets/logo-8.jpg";
import logo9 from "../assets/logo-9.jpg";
import logo10 from "../assets/logo-10.jpg";
import logo11 from "../assets/logo-11.jpg";
import logo12 from "../assets/logo-12.jpg";
import logo13 from "../assets/logo-13.jpg";
import locationintelligencecase1 from "../assets/locationintelligencecase1.jpeg";
import locationintelligencecase2 from "../assets/locationintelligencecase2.jpeg";
import locationintelligencecase3 from "../assets/locationintelligencecase3.jpeg";
import locationintelligencecase4 from "../assets/locationintelligencecase4.jpeg";
import locationintelligencecase5 from "../assets/locationintelligencecase5.jpeg";
import locationintelligencecase6 from "../assets/locationintelligencecase6.jpeg";
import LocationIntelligenceScheduleCall from "../assets/LocationIntelligenceScheduleCall.jpg";


const ACCENT = "#E8581A";
const NAVY = "#002B55";
const DARK = "#1a2b3c";

const theme = createTheme({
  palette: {
    primary: { main: ACCENT },
    secondary: { main: "#1A3A5C" },
    background: { default: "#fff" },
    text: { primary: DARK, secondary: "#4a5568" },
  },
  typography: { fontFamily: "'Poppins', 'Segoe UI', sans-serif" },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", borderRadius: 4, fontWeight: 600 } } },
  },
});

function parseStatValue(value) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: 0, suffix: value, decimals: 0 };
  const number = parseFloat(match[1]);
  const suffix = match[2];
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  return { number, suffix, decimals };
}

// Animated counter
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const { number, decimals } = parseStatValue(target);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const raw = p * number;
      const next = decimals > 0
        ? Math.floor(raw * 10 ** decimals) / 10 ** decimals
        : Math.floor(raw);
      setCount(next);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, number, decimals]);

  return count;
}

function formatCount(count, decimals) {
  return decimals > 0 ? count.toFixed(decimals) : String(count);
}

function StatItem({ value, label, showDivider }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { suffix, decimals } = parseStatValue(value);
  const count = useCountUp(value, 2000, visible);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <Box sx={{ display: "flex", alignItems: "stretch", flex: 1, minWidth: 0 }}>
      {showDivider && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
            borderColor: "#c8d4de",
            mx: { md: 1, lg: 2 },
            alignSelf: "stretch",
          }}
        />
      )}
      <Box ref={ref} sx={{ textAlign: "center", px: { xs: 1, md: 1.5, lg: 2 }, flex: 1, py: { xs: 2, md: 0 } }}>
        <Typography sx={{ fontWeight: 300, color: NAVY, fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem", lg: "2.4rem" }, lineHeight: 1 }}>
          {visible ? formatCount(count, decimals) : formatCount(0, decimals)}{suffix}
        </Typography>
        <Typography sx={{ color: "#4a6070", mt: 1, fontSize: { xs: "0.78rem", md: "0.85rem" }, lineHeight: 1.4 }}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
}


// Tech marquee row
function TechMarqueeRow({ items, direction = "left", speed = 32 }) {
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";
  return (
    <Box sx={{ overflow: "hidden", mb: 3 }}>
      <Box
        className={`tech-marquee-${direction}`}
        sx={{
          display: "flex",
          width: "max-content",
          animation: `${animName} ${speed}s linear infinite`,
          "&:hover": { animationPlayState: "paused" },
        }}
      >
        {[...items, ...items].map((item, i) => (
          <Box
            key={i}
            sx={{
              flexShrink: 0,
              mx: { xs: 2.5, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: { xs: 80, md: 110 },
            }}
          >
            {item.img ? (
              <Box
                component="img"
                src={item.img}
                alt={item.label}
                sx={{ height: { xs: 36, md: 48 }, width: "auto", objectFit: "contain", display: "block" }}
              />
            ) : (
              <Box sx={{ height: { xs: 36, md: 48 }, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {item.custom}
              </Box>
            )}
            {item.showLabel && (
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: item.labelColor || "#555", mt: 0.5 }}>
                {item.label}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}


// Page data 
const stats = [
  { value: "3000K+", label: "Properties Digitized" },
  { value: "500K+", label: "Water Conservation Assets Plotted" },
  { value: "100K+", label: "Acres Area Digitized" },
  { value: "2.5K+", label: "Sq.Kms Mapped" },
  { value: "500+", label: "Rasters Processed" },
];

const services = [
  {
    icon: <MapIcon sx={{ fontSize: 56, color: ACCENT }} />,
    title: "Digital Mapping",
    description: "Capture accurate spatial data from satellite or drone images, LIDAR Surveys, 2D & 3D data models.",
    bullets: ["Capture Real-Time Data", "Cartographic Services", "Thematic Maps"],
  },
  {
    icon: <StorageIcon sx={{ fontSize: 56, color: ACCENT }} />,
    title: "Geodata Management",
    description: "Streamline geographic data management with a robust spatial database for efficient storage, organization, and integration.",
    bullets: ["Geospatial Database Design", "Data Migration & Integration", "Metadata Management"],
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 56, color: ACCENT }} />,
    title: "GIS Analysis",
    description: "Generate accurate custom reports from analyzing location data & understand what is working & what is not.",
    bullets: ["Spatial Data Analysis", "Network Analysis", "Hotspot Analysis"],
  },
  {
    icon: <ViewInArIcon sx={{ fontSize: 56, color: ACCENT }} />,
    title: "3D GIS & BIM",
    description: "We deliver expert 3D GIS and BIM services with cutting-edge spatial visualization and modeling.",
    bullets: ["3D Building Modelling", "3D Spatial Analysis", "3D Data Integration"],
  },
];

const clientLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13];

const techRow1 = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", label: "Python" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg", label: ".NET" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", label: "PostgreSQL" },
  {
    label: "PHP",
    custom: (
      <Box component="img"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        alt="PHP" sx={{ height: 48, width: "auto" }} />
    ),
  },
  {
    label: "PostGIS",
    custom: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <ellipse cx="18" cy="9" rx="14" ry="6" fill="none" stroke="#336791" strokeWidth="2" />
          <path d="M4,9 L4,27 Q4,33 18,33 Q32,33 32,27 L32,9" stroke="#336791" strokeWidth="2" fill="none" />
          <path d="M4,18 Q4,24 18,24 Q32,24 32,18" stroke="#336791" strokeWidth="1.5" fill="none" />
          <ellipse cx="18" cy="9" rx="14" ry="6" fill="rgba(51,103,145,0.1)" />
        </svg>
        <Typography sx={{ fontWeight: 700, color: "#336791", fontSize: "0.85rem" }}>PostGIS</Typography>
      </Box>
    ),
  },
  {
    label: "SQL",
    custom: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <ellipse cx="16" cy="8" rx="12" ry="5" fill="none" stroke="#C97B22" strokeWidth="2" />
          <path d="M4,8 L4,24 Q4,29 16,29 Q28,29 28,24 L28,8" stroke="#C97B22" strokeWidth="2" fill="none" />
          <path d="M4,16 Q4,21 16,21 Q28,21 28,16" stroke="#C97B22" strokeWidth="1.5" fill="none" />
        </svg>
        <Typography sx={{ fontWeight: 700, color: "#C97B22", fontSize: "0.85rem" }}>SQL</Typography>
      </Box>
    ),
  },
  {
    label: "ORACLE",
    custom: (
      <Box sx={{ border: "2.5px solid #E8001A", borderRadius: "50px", px: 2, py: 0.5, display: "inline-block" }}>
        <Typography sx={{ fontWeight: 800, color: "#E8001A", fontSize: "1rem", letterSpacing: 1 }}>ORACLE</Typography>
      </Box>
    ),
  },
];

const techRow2 = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", label: "Node.js" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg", label: "AngularJS" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg", label: "Android" },
  {
    label: "iOS",
    custom: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box component="img"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
          alt="iOS" sx={{ height: 38, width: "auto", filter: "brightness(0)" }} />
        <Typography sx={{ fontWeight: 700, color: "#000", fontSize: "1.1rem", letterSpacing: 1 }}>iOS</Typography>
      </Box>
    ),
  },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", label: "React" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", label: "Flutter", showLabel: true, labelColor: "#027DFD" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg", label: "Vue.js" },
];

const techRow3 = [
  {
    label: "GeoPandas",
    custom: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16,2 L30,8 L30,24 L16,30 L2,24 L2,8 Z" fill="rgba(19,156,70,0.12)" stroke="#139C46" strokeWidth="1.8" />
          <circle cx="16" cy="16" r="5" fill="#139C46" opacity="0.3" />
          <circle cx="16" cy="16" r="2" fill="#139C46" />
        </svg>
        <Typography sx={{ fontWeight: 700, color: "#139C46", fontSize: "0.9rem" }}>GeoPandas</Typography>
      </Box>
    ),
  },
  {
    label: "Leaflet",
    custom: (
      <Box component="img" src="https://leafletjs.com/docs/images/logo.png" alt="Leaflet"
        sx={{ height: 44, width: "auto", objectFit: "contain" }} />
    ),
  },
  {
    label: "OpenLayers",
    custom: (
      <Box component="img" src="https://openlayers.org/theme/img/logo-dark.svg" alt="OpenLayers"
        sx={{ height: 44, width: "auto", objectFit: "contain" }} />
    ),
  },
  {
    label: "ArcGIS",
    custom: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#0077C8" strokeWidth="2" />
          <path d="M18,3 Q23,10 18,18 Q13,26 18,33" stroke="#0077C8" strokeWidth="1.5" fill="none" />
          <ellipse cx="18" cy="18" rx="15" ry="6" fill="none" stroke="#0077C8" strokeWidth="1.5" />
          <line x1="3" y1="18" x2="33" y2="18" stroke="#0077C8" strokeWidth="1.5" />
        </svg>
        <Typography sx={{ fontWeight: 700, color: "#0077C8", fontSize: "0.9rem" }}>ArcGIS</Typography>
      </Box>
    ),
  },
  {
    label: "QGIS",
    custom: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="15" fill="rgba(88,150,50,0.1)" stroke="#589632" strokeWidth="2" />
          <path d="M6,18 Q11,10 18,14 Q25,18 30,10" stroke="#589632" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="12" cy="22" r="3" fill="#589632" opacity="0.45" />
          <circle cx="23" cy="15" r="2.5" fill="#589632" opacity="0.65" />
        </svg>
        <Typography sx={{ fontWeight: 700, color: "#589632", fontSize: "0.9rem" }}>QGIS</Typography>
      </Box>
    ),
  },
  {
    label: "esri",
    custom: (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#0079C1" strokeWidth="2" />
          <ellipse cx="18" cy="18" rx="14" ry="5" fill="none" stroke="#0079C1" strokeWidth="1.5" />
          <path d="M18,4 Q23,11 18,18 Q13,25 18,32" stroke="#0079C1" strokeWidth="1.5" fill="none" />
          <line x1="4" y1="18" x2="32" y2="18" stroke="#0079C1" strokeWidth="1.5" />
        </svg>
        <Typography sx={{ fontWeight: 700, color: "#0079C1", fontSize: "0.9rem" }}>esri</Typography>
      </Box>
    ),
  },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg", label: "Docker" },
];

const caseStudies = [
  { image: locationintelligencecase1, tags: ["Agriculture", "Geospatial", "Malaysia", "Private Sector"], title: "Synlog", description: "Automated Satellite Processing for Precision Monitoring of Palm Tree Estate Management" },
  { image: locationintelligencecase2, tags: ["Geospatial", "India", "Public Sector", "Utility"], title: "Solapur Municipal Corporation", description: "Customized Survey Solutions for Optimizing Water Billing Operations" },
  { image: locationintelligencecase3, tags: ["Geospatial", "India", "Public Sector", "Utility"], title: "Ministry of Jalshakti, India", description: "Advanced Geoportal for Real-Time Water Resource Management and Data Visualization" },
  { image: locationintelligencecase4, tags: ["Environment", "ERP", "India", "Private Sector"], title: "Unity Green Solutions", description: "Customized Waste Management Platform for Streamlined Business Operations" },
  { image: locationintelligencecase5, tags: ["ERP", "Healthcare", "India", "Private Sector"], title: "Mylab Discovery Solutions Pvt. Ltd.", description: "Event Management System Implementation Using Odoo ERP for Process Optimization" },
  { image: locationintelligencecase6, tags: ["Education", "Geospatial", "India", "Public Sector"], title: "Maharashtra Knowledge Corporation Ltd.", description: "WMS Service Development for Forest Encroachment Detection and Monitoring" },
];



const CASE_GAP = 20;

export default function Advisory() {
  const [caseSlide, setCaseSlide] = useState(0);
  const viewportRef = useRef(null);
  const [carousel, setCarousel] = useState({ cardWidth: 0, slideStep: 0, maxSlide: caseStudies.length - 2 });

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const w = el.getBoundingClientRect().width;
      const twoUp = w >= 900;
      const cardWidth = twoUp ? (w - CASE_GAP) / 2 : w;
      const slideStep = cardWidth + CASE_GAP;
      const maxSlide = twoUp ? caseStudies.length - 2 : caseStudies.length - 1;
      setCarousel({ cardWidth, slideStep, maxSlide, twoUp });
      setCaseSlide((prev) => Math.min(prev, maxSlide));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { cardWidth, slideStep, maxSlide, twoUp = true } = carousel;

  return (
    <ThemeProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
        @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>

      <Box sx={{ bgcolor: "#fff", overflow: "hidden", fontFamily: "'Poppins', sans-serif" }}>

        {/* HERO */}
        <Box sx={{
          position: "relative", minHeight: { xs: 300, md: 380 },
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          overflow: "hidden", pb: { xs: 6, md: 8 },
        }}>
          <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Box component="img"
              src="https://coderize.in/wp-content/uploads/2024/09/geospatial-service-title.jpg"
              alt="Location Intelligence"
              sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(10,25,41,0.85), rgba(10,25,41,0.85))" }} />
          </Box>
          <Container maxWidth="xl" sx={{
            position: "relative",
            zIndex: 1,
            pt: { xs: 10, md: 12 },
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            pb: { xs: 2, md: 4 },
          }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" sx={{ color: "rgba(255,255,255,0.45)" }} />} sx={{ mb: 2.5 }}>
              {["Home", "Services", "Geospatial", "Location Intelligence"].map((c, i, arr) => (
                <Typography key={c} variant="body2" sx={{
                  color: i === arr.length - 1 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                  fontWeight: i === arr.length - 1 ? 600 : 400, fontSize: "0.85rem",
                }}>{c}</Typography>
              ))}
            </Breadcrumbs>
            
            <Typography variant="h3" sx={{
              color: "#fff", fontWeight: 400, maxWidth: 560,
              lineHeight: 1.22, fontSize: { xs: "1.7rem", sm: "2rem", md: "2.6rem" },
            }}>
              Reveal spatial patterns to guide decisions
            </Typography>
          </Container>
        </Box>

        {/* INTRO */}
        <Box sx={{ bgcolor: "#fff", py: { xs: 5, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
          <Container maxWidth="xl" disableGutters>
            <Box sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 2, md: 2, lg: 2 },
            }}>
              <Box sx={{
                width: { xs: "100%", md: "50%" },
                flexShrink: 0,
                px: { xs: 1, md: 2, lg: 3 },
              }}>
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: { xs: 1, md: 1.25 },
                    overflow: "hidden",
                    lineHeight: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={locationIntro}
                    alt="Location Intelligence"
                    sx={{
                      width: "100%",
                      height: {xs: 280, md: 400, lg: 480},
                      display: "block",
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{
                width: { xs: "100%", md: "50%" },
                display: "flex",
                alignItems: "center",
                py: { xs: 2, md: 4 },
                px: { xs: 2, md: 2, lg: 3 },
                position: "relative",
                minHeight: { md: 400 },
                
              }}>
                <Box sx={{ position: "relative", zIndex: 1, maxWidth: 650 }}>
                  <Typography sx={{
                    fontFamily: '"Sora", sans-serif',
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem", lg: "2.2rem" },
                    color: NAVY,
                    fontWeight: 400,
                    lineHeight: 1.25,
                    mb: { xs: 2.5, md: 3.5 },
                  }}>
                    Innovative Spatio-Intelligent Solutions for a Changing World
                  </Typography>
                  <Typography sx={{
                    fontFamily: '"Sora", sans-serif',
                    color: "#3d5a73",
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    lineHeight: 1.75,
                    fontWeight: 400,
                  }}>
                    Our geospatial intelligence uses advanced analytics for actionable insights,
                    including GIS mapping, digitization, and data conversion, to enhance
                    decision-making and efficiency.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── STATS  ── */}
        <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: "#fff" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}>
              {stats.map((item, index) => (
                <StatItem key={item.label} value={item.value} label={item.label} showDivider={index !== 0} />
              ))}
            </Box>
          </Container>
        </Box>

        {/* ── WHAT DO WE DO ── */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#f8f9fa" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
            <Typography sx={{
              fontFamily: '"Sora", sans-serif',
              fontWeight: 700,
              mb: 0.5,
              color: NAVY,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}>
              What do we do?
            </Typography>
            <Box sx={{ height: "1px", bgcolor: "#dde5ec", mb: 5, mt: 1.5 }} />
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {services.map((s) => (
                <Box key={s.title} sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", lg: "1 1 calc(25% - 18px)" },
                  minWidth: 0, height: { xs: 320, md: 380 }, perspective: "1000px",
                  "& .flip-inner": { transition: "transform 0.55s cubic-bezier(.4,0,.2,1)" },
                  "&:hover .flip-inner": { transform: "rotateY(180deg)" },
                }}>
                  <Box className="flip-inner" sx={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}>
                    <Box sx={{
                      position: "absolute", inset: 0, backfaceVisibility: "hidden",
                      borderRadius: 2, p: 4, border: "1px solid #e8edf2", bgcolor: "#fff",
                    }}>
                      <Box sx={{ mb: 3 }}>{s.icon}</Box>
                      <Typography sx={{ fontWeight: 700, color: "#1A3A5C", mb: 1.5, fontSize: "1.05rem" }}>{s.title}</Typography>
                      <Typography variant="body2" sx={{ color: "#4a5568", lineHeight: 1.85, fontSize: "0.9rem" }}>{s.description}</Typography>
                    </Box>
                    <Box sx={{
                      position: "absolute", inset: 0, backfaceVisibility: "hidden",
                      borderRadius: 2, p: 4, bgcolor: "#0D2B45", transform: "rotateY(180deg)",
                      display: "flex", flexDirection: "column", justifyContent: "center",
                    }}>
                      <Typography sx={{ fontWeight: 700, color: ACCENT, mb: 2.5, fontSize: "1.1rem" }}>{s.title}</Typography>
                      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                        {s.bullets.map((b) => (
                          <Box component="li" key={b} sx={{
                            color: "rgba(255,255,255,0.88)", fontSize: "0.9rem",
                            py: 0.9, borderBottom: "1px solid rgba(255,255,255,0.1)",
                            display: "flex", alignItems: "center", gap: 1.2,
                          }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: ACCENT, flexShrink: 0 }} />
                            {b}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ── CLIENTS MARQUEE (layout: coderize.in location-intelligence) ── */}
        <Box sx={{ py: { xs: 8, md: "72px" }, bgcolor: "#fff", overflow: "hidden" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
            <Box sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 6, lg: 10 },
              mb: 1,
            }}>
              <Typography sx={{
                fontFamily: '"Sora", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: NAVY,
                flexShrink: 0,
                width: { md: "40%" },
              }}>
                Our Esteemed Clients
              </Typography>
              <Typography sx={{
                fontFamily: '"Sora", sans-serif',
                color: "#4a6070",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                pt: { md: "6px" },
                flex: 1,
                maxWidth: { md: "60%" },
              }}>
                Serving global clients across industries with tailored solutions, driving innovation and excellence in every project.
              </Typography>
            </Box>
            <Box sx={{ height: "1px", bgcolor: "#dde5ec", my: { xs: 3, md: 5 } }} />
          </Container>

          <Box sx={{ overflow: "hidden", width: "100%" }}>
            <Box sx={{
              display: "flex", alignItems: "center", width: "max-content",
              animation: "marqueeScroll 28s linear infinite",
              "&:hover": { animationPlayState: "paused" },
            }}>
              {[...clientLogos, ...clientLogos].map((src, i) => (
                <Box
                  key={i}
                  component="img"
                  src={src}
                  alt={`Client ${i + 1}`}
                  sx={{
                    flexShrink: 0,
                    height: { xs: 64, md: 80 },
                    maxWidth: 160,
                    mx: { xs: 4, md: 5.5 },
                    objectFit: "contain",
                    opacity: 0.75,
                    transition: "opacity 0.3s ease",
                    "&:hover": { opacity: 1 },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── CTA ── */}
        <Box sx={{
          position: "relative", minHeight: { xs: 280, md: 600 },
          display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"
        }}>
          <Box component="img"
            src={LocationIntelligenceScheduleCall}
            alt="CTA background"
            sx={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center"
            }} />
          <Box sx={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(5,13,24,0.5) 0%, rgba(10,30,53,0.45) 50%, rgba(6,15,28,0.5) 100%)"
          }} />
          <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", px: { xs: 3, md: 6 } }}>
            <Typography sx={{
              fontFamily: '"Sora", sans-serif',
              color: "#fff",
              fontWeight: 500,
              mb: 4,
              fontSize: { xs: "1.5rem", md: "2.2rem" },
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}>
              Share Your Business Goals With Us
            </Typography>
            <Button
              component={Link}
              to="/Contact"
              variant="contained"
              size="large"
              sx={{
                fontFamily: '"Sora", sans-serif',
                bgcolor: ACCENT,
                color: "#fff",
                px: 6,
                py: 1.8,
                fontSize: "1.05rem",
                fontWeight: 700,
                borderRadius: 1,
                "&:hover": { bgcolor: "#cc4a0f", transform: "translateY(-2px)" },
                boxShadow: "0 6px 28px rgba(232,88,26,0.5)",
                transition: "all 0.2s",
              }}
            >
              Schedule a call
            </Button>
          </Box>
        </Box>

        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
          {/* ── TECH STACK ── */}
          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 4, lg: 8 },
            alignItems: { xs: "flex-start", lg: "center" },
            py: { xs: 8, md: 12 },
          }}>
            <Box sx={{ width: { xs: "100%", lg: "40%" }, pr: { lg: 4 } }}>
              <Typography sx={{
                fontFamily: '"Sora", sans-serif',
                fontWeight: 700,
                mb: 2,
                color: NAVY,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}>
                TechStack
              </Typography>
              <Typography sx={{
                fontFamily: '"Sora", sans-serif',
                color: "#4a6070",
                lineHeight: 1.85,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}>
                Our 25+ in house tech team are skilled in 20+ top technologies that help us deliver smart solutions to your needs.
              </Typography>
            </Box>

            <Box sx={{ width: { xs: "100%", lg: "60%" }, overflow: "hidden" }}>
              <TechMarqueeRow items={techRow1} direction="left" speed={30} />
              <TechMarqueeRow items={techRow2} direction="right" speed={28} />
              <TechMarqueeRow items={techRow3} direction="left" speed={32} />
            </Box>
          </Box>
        </Container>

        {/* ── CASE STUDIES ── */}
        <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
            <Box sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 4, lg: 8 },
              mb: { xs: 4, md: 6 },
            }}>
              <Typography sx={{
                fontFamily: '"Sora", sans-serif',
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: NAVY,
                flexShrink: 0,
                width: { md: "40%" },
              }}>
                Case Studies
              </Typography>
              <Typography sx={{
                fontFamily: '"Sora", sans-serif',
                color: "#4a6070",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                pt: { md: "6px" },
                flex: 1,
                maxWidth: { md: "60%" },
              }}>
                Explore our case studies to see how we&apos;ve successfully addressed complex
                challenges with innovative solutions. Discover the impact of our projects on
                client outcomes and industry advancements.
              </Typography>
            </Box>

            <Box ref={viewportRef} sx={{ overflow: "hidden", width: "100%" }}>
              <Box sx={{
                display: "flex",
                gap: `${CASE_GAP}px`,
                transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
                transform: slideStep ? `translateX(-${caseSlide * slideStep}px)` : "none",
              }}>
                {caseStudies.map((cs, i) => (
                  <Box key={i} sx={{
                    flex: cardWidth ? `0 0 ${cardWidth}px` : `0 0 calc(50% - ${CASE_GAP / 2}px)`,
                    width: cardWidth || `calc(50% - ${CASE_GAP / 2}px)`,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    bgcolor: "#f5f5f5",
                    height: { xs: "auto", sm: 480 },
                    overflow: "hidden",
                  }}>
                    <Box
                      component="img"
                      src={cs.image}
                      alt={cs.title}
                      sx={{
                        width: { xs: "100%", sm: "50%" },
                        height: { xs: 220, sm: "100%" },
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                    />
                    <Box sx={{
                      width: { xs: "100%", sm: "50%" },
                      bgcolor: "#f5f5f5",
                      p: { xs: 3, sm: 4, md: 5 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}>
                      <Typography sx={{ color: ACCENT, fontWeight: 600, fontSize: "0.78rem", mb: 1.5, lineHeight: 1.5 }}>
                        {cs.tags.join(", ")}
                      </Typography>
                      <Typography sx={{
                        fontWeight: 700,
                        color: NAVY,
                        fontSize: { xs: "1.25rem", sm: twoUp ? "1.35rem" : "1.6rem", md: twoUp ? "1.5rem" : "1.75rem" },
                        lineHeight: 1.25,
                        mb: 2,
                      }}>
                        {cs.title}
                      </Typography>
                      <Typography sx={{
                        color: "#4a5568",
                        lineHeight: 1.7,
                        fontSize: { xs: "0.9rem", sm: "0.95rem" },
                        mb: 3,
                      }}>
                        {cs.description}
                      </Typography>
                      <Box
                        component={Link}
                        to="/CaseStudies"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: DARK,
                          fontWeight: 600,
                          fontSize: "0.88rem",
                          textDecoration: "none",
                          borderBottom: `1.5px solid ${DARK}`,
                          pb: 0.4,
                          width: "fit-content",
                          "&:hover": { color: ACCENT, borderColor: ACCENT },
                        }}
                      >
                        Read More <ArrowForwardIcon sx={{ fontSize: 15 }} />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 4 }}>
              <IconButton
                onClick={() => setCaseSlide((p) => Math.max(0, p - 1))}
                disabled={caseSlide === 0}
                sx={{
                  bgcolor: caseSlide === 0 ? "#f0f0f0" : "#1A3A5C",
                  color: caseSlide === 0 ? "#aaa" : "#fff",
                  width: 36,
                  height: 36,
                  "&:hover": { bgcolor: ACCENT },
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
              </IconButton>
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setCaseSlide(i)}
                  sx={{
                    width: i === caseSlide ? 28 : 10,
                    height: 10,
                    borderRadius: 5,
                    bgcolor: i === caseSlide ? ACCENT : "#ddd",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
              <IconButton
                onClick={() => setCaseSlide((p) => Math.min(maxSlide, p + 1))}
                disabled={caseSlide === maxSlide}
                sx={{
                  bgcolor: caseSlide === maxSlide ? "#f0f0f0" : "#1A3A5C",
                  color: caseSlide === maxSlide ? "#aaa" : "#fff",
                  width: 36,
                  height: 36,
                  "&:hover": { bgcolor: ACCENT },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
