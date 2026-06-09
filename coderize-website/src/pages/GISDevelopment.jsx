import { useState, useEffect, useRef } from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Breadcrumbs, Divider, Stack, IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GISbg from "../assets/GISbg.jpg";
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

const theme = createTheme({
  palette: {
    primary: { main: "#E8581A" },
    secondary: { main: "#1A3A5C" },
    background: { default: "#fff" },
    text: { primary: "#1a2b3c", secondary: "#4a5568" },
  },
  typography: { fontFamily: "'Poppins', 'Segoe UI', sans-serif" },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", borderRadius: 4, fontWeight: 600 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 8 } } },
  },
});

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const numeric = parseInt(target.replace(/\D/g, ""));
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * numeric));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start]);
  return count;
}

function StatItem({ value, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const suffix = value.replace(/[0-9]/g, "");
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
    <Box ref={ref} sx={{ textAlign: "center", px: 2 }}>
      <Typography sx={{ fontWeight: 800, color: "text.primary", fontSize: { xs: "2rem", md: "2.6rem" }, lineHeight: 1 }}>
        {visible ? count : 0}{suffix}
      </Typography>
      <Typography sx={{ color: "text.secondary", mt: 1, fontSize: "0.9rem" }}>{label}</Typography>
    </Box>
  );
}

// ── SVG Icons ─────────────────────────────────────────────────────────────
const MobileIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="18" y="4" width="22" height="38" rx="3" stroke="#E8581A" strokeWidth="2.2" fill="none" />
    <rect x="22" y="10" width="14" height="22" rx="1.5" stroke="#E8581A" strokeWidth="1.8" fill="none" />
    <line x1="26" y1="38" x2="38" y2="38" stroke="#E8581A" strokeWidth="2.2" strokeLinecap="round" />
    <rect x="6" y="16" width="8" height="10" rx="1" stroke="#E8581A" strokeWidth="1.6" fill="none" />
    <line x1="6" y1="19" x2="14" y2="19" stroke="#E8581A" strokeWidth="1.2" />
    <line x1="6" y1="22" x2="14" y2="22" stroke="#E8581A" strokeWidth="1.2" />
    <rect x="46" y="16" width="12" height="10" rx="1" stroke="#E8581A" strokeWidth="1.6" fill="none" />
    <line x1="48" y1="19" x2="56" y2="19" stroke="#E8581A" strokeWidth="1.2" />
    <line x1="48" y1="22" x2="56" y2="22" stroke="#E8581A" strokeWidth="1.2" />
    <line x1="40" y1="18" x2="46" y2="18" stroke="#E8581A" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="14" y1="21" x2="18" y2="21" stroke="#E8581A" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="29" cy="32" r="2" stroke="#E8581A" strokeWidth="1.4" fill="none" />
    <path d="M29 30 L29 22 M31 24 L29 22 L27 24" stroke="#E8581A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WebIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="4" y="10" width="56" height="36" rx="3" stroke="#E8581A" strokeWidth="2.2" fill="none" />
    <line x1="4" y1="20" x2="60" y2="20" stroke="#E8581A" strokeWidth="1.8" />
    <circle cx="11" cy="15" r="2" fill="#E8581A" />
    <circle cx="18" cy="15" r="2" fill="#E8581A" />
    <circle cx="25" cy="15" r="2" fill="#E8581A" />
    <rect x="10" y="25" width="12" height="16" rx="1.5" stroke="#E8581A" strokeWidth="1.6" fill="none" />
    <rect x="26" y="25" width="28" height="7" rx="1.5" stroke="#E8581A" strokeWidth="1.6" fill="none" />
    <rect x="26" y="34" width="28" height="7" rx="1.5" stroke="#E8581A" strokeWidth="1.6" fill="none" />
    <line x1="24" y1="46" x2="40" y2="46" stroke="#E8581A" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="32" y1="46" x2="32" y2="52" stroke="#E8581A" strokeWidth="2.2" />
    <line x1="22" y1="52" x2="42" y2="52" stroke="#E8581A" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const DesktopIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="30" r="20" stroke="#E8581A" strokeWidth="2.2" fill="none" />
    <ellipse cx="32" cy="30" rx="20" ry="8" stroke="#E8581A" strokeWidth="1.6" fill="none" />
    <path d="M32 10 Q38 20 32 30 Q26 40 32 50" stroke="#E8581A" strokeWidth="1.6" fill="none" />
    <line x1="12" y1="30" x2="52" y2="30" stroke="#E8581A" strokeWidth="1.6" />
    <line x1="32" y1="10" x2="32" y2="50" stroke="#E8581A" strokeWidth="1.6" />
    <circle cx="32" cy="30" r="3.5" stroke="#E8581A" strokeWidth="1.8" fill="none" />
    <circle cx="46" cy="18" r="5" stroke="#E8581A" strokeWidth="1.8" fill="none" />
    <path d="M44 18 L46 20 L49 16" stroke="#E8581A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── TechStack Marquee Row ─────────────────────────────────────────────────
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

export default function GISDevelopment() {
  const [caseSlide, setCaseSlide] = useState(0);

  const services = [
    {
      icon: <MobileIcon />,
      title: "GIS Mobile Application Development",
      description: "We provide GIS mobile apps that enhance field operations, offering seamless mapping, real-time data updates, and precise geotagging.",
      bullets: ["Offline Map Support", "Real-time GPS Tracking", "Field Data Collection", "Cross-platform iOS & Android", "ESRI & OpenSource Stack"],
    },
    {
      icon: <WebIcon />,
      title: "GIS Web Application Development",
      description: "We deliver geospatial web apps for data visualization, real-time monitoring, and spatial analysis.",
      bullets: ["Responsive Design", "Scalable Architecture", "Data Visualization", "Real-time Monitoring Dashboard", "Spatial Query & Reporting"],
    },
    {
      icon: <DesktopIcon />,
      title: "Desktop Customization",
      description: "We develop user-friendly GIS plugins, tools, and extensions to enhance solutions and optimize spatial data analysis.",
      bullets: ["Custom ArcGIS Plugins", "QGIS Extension Development", "Spatial Data Integration", "Workflow Automation Tools", "Legacy GIS Migration"],
    },
  ];

  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?w=600&q=80",
      tags: ["Geospatial", "India", "Public Sector", "Utility"],
      title: "Solapur Municipal Corporation",
      description: "Customized Survey Solutions for Optimizing Water Billing Operations",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      tags: ["Geospatial", "India", "Public Sector", "Utility"],
      title: "Ministry of Jalshakti, India",
      description: "Advanced Geoportal for Real-Time Water Resource Management and Data Visualization",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      tags: ["Agriculture", "Geospatial", "India", "Public Sector"],
      title: "Agriculture Dept., Maharashtra",
      description: "GIS-Based Mobile and Web Solutions for Scalable Agricultural Training and Management",
    },
    {
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
      tags: ["Geospatial", "India", "Public Sector"],
      title: "Jai Jeevan Mission",
      description: "Real-time GIS tracking and monitoring for water supply management across Maharashtra.",
    },
    {
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
      tags: ["Geospatial", "India", "Government"],
      title: "Forest Department Maharashtra",
      description: "Satellite-based forest monitoring and management system for conservation efforts.",
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
      tags: ["Agriculture", "Geospatial", "Malaysia", "Private Sector"],
      title: "Synlog",
      description: "Automated Satellite Processing for Precision Monitoring of Palm Tree Estate Management",
    },
  ];

  const stats = [
    { value: "10+", label: "Applications Developed" },
    { value: "50+", label: "Resources Involved" },
    { value: "10K+", label: "Hrs Spent" },
    { value: "100K+", label: "Active Application Users" },
  ];

  const clientLogos = [
    <img src={logo1} alt="Client 1" />,
    <img src={logo2} alt="Client 2" />,
    <img src={logo3} alt="Client 3"/>,
    <img src={logo4} alt="Client 4" />,
    <img src={logo5} alt="Client 5" />,
    <img src={logo6} alt="Client 6"/>,
    <img src={logo7} alt="Client 7" />,
    <img src={logo8} alt="Client 8" />,
    <img src={logo9} alt="Client 9" />,
    <img src={logo10} alt="Client 10" />,
    <img src={logo11} alt="Client 11" />,
    <img src={logo12} alt="Client 12" />,
    <img src={logo13} alt="Client 13" />,
  ];

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

  const maxSlide = caseStudies.length - 2;

  return (
    <ThemeProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .hero-text { animation: fadeUp 0.8s ease forwards; }
        .hero-breadcrumb { animation: fadeUp 0.6s ease forwards; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Box sx={{ fontFamily: "'Poppins', sans-serif", bgcolor: "#fff", overflow: "hidden" }}>

        {/* ── HERO ── */}
        <Box sx={{
          position: "relative", minHeight: { xs: 300, md: 380 },
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          overflow: "hidden", pb: { xs: 6, md: 8 }
        }}>
          <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Box component="img"
              src="https://coderize.in/wp-content/uploads/2024/09/geospatial-service-title.jpg"
              alt="GIS Background"
              sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <Box sx={{
              position: "absolute", inset: 0,
              background: "linear-gradient(rgba(10,25,41,0.85), rgba(10,25,41,0.85))"
            }} />
          </Box>
          <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, pt: { xs: 10, md: 12 } }}>
            <Breadcrumbs className="hero-breadcrumb"
              separator={<NavigateNextIcon fontSize="small" sx={{ color: "rgba(255,255,255,0.45)" }} />}
              sx={{ mb: 2.5 }}>
              {["Home", "Services", "Geospatial", "GIS Development"].map((c, i, arr) => (
                <Typography key={c} variant="body2" sx={{
                  color: i === arr.length - 1 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                  fontWeight: i === arr.length - 1 ? 600 : 400, fontSize: "0.85rem"
                }}>
                  {c}
                </Typography>
              ))}
            </Breadcrumbs>
            <Typography className="hero-text" variant="h3" sx={{
              color: "#fff", fontWeight: 800, maxWidth: { xs: "100%", md: 420 },
              lineHeight: 1.22, fontSize: { xs: "1.7rem", sm: "2rem", md: "2.6rem" }
            }}>
              Turn Your Vision Into Reality With Our Innovative GIS Solutions.
            </Typography>
          </Container>
        </Box>

        {/* ── NAVIGATE FUTURE ── */}
        <Box sx={{
          display: "flex", flexDirection: { xs: "column", md: "row" },
          background: "#f7f7f7", borderRadius: "4px", overflow: "hidden"
        }}>
          <Box sx={{ width: { xs: "100%", md: "48%" }, flexShrink: 0 }}>
            <Box component="img"
              src="https://coderize.in/wp-content/uploads/2024/09/gis-developement.jpg"
              alt="GIS"
              sx={{ width: "100%", height: { xs: 300, md: 500 }, objectFit: "cover", display: "block" }} />
          </Box>
          <Box sx={{
            width: { xs: "100%", md: "52%" }, display: "flex", alignItems: "center",
            px: { xs: 4, md: 6 }, py: { xs: 4, md: 0 }
          }}>
            <Box>
              <Typography sx={{
                fontSize: { xs: "2rem", md: "3rem" }, color: "#002B55",
                fontWeight: 500, lineHeight: 1.2, mb: 3
              }}>
                Navigate Your Future with our tailored Geospatial Apps
              </Typography>
              <Typography sx={{ color: "#002B55", fontSize: "1.2rem", lineHeight: 1.7 }}>
                We develop custom geospatial applications to meet specific business needs,
                leveraging the latest ESRI and open-source technologies to deliver innovative
                and efficient solutions.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ── STATS ── */}
        <Box sx={{ py: 8, background: "#fff" }}>
          <Container maxWidth="xl">
            <Box sx={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: { xs: "wrap", md: "nowrap" }, gap: { xs: 4, md: 0 }
            }}>
              {stats.map((item, index) => (
                <Box key={item.label} sx={{
                  flex: 1, textAlign: "center", position: "relative",
                  minWidth: { xs: "45%", md: "auto" }
                }}>
                  {index !== 0 && (
                    <Box sx={{
                      position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
                      width: "1px", height: "120px", bgcolor: "#F26522",
                      display: { xs: "none", md: "block" }
                    }} />
                  )}
                  <Typography sx={{
                    fontSize: { xs: "2.2rem", md: "4rem" }, fontWeight: 600,
                    color: "#002B55", lineHeight: 1, mb: 2
                  }}>
                    {item.value}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "0.95rem", md: "1.3rem" }, color: "#002B55" }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* ── WHAT DO WE DO (FLIP CARDS) ── */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#f8f9fa" }}>
          <Container maxWidth="xl">
            <Typography variant="h4" sx={{
              fontWeight: 800, mb: 0.5, color: "#1a2b3c",
              fontSize: { xs: "1.6rem", md: "2rem" }
            }}>
              What do we do?
            </Typography>
            <Divider sx={{ mb: 5, borderColor: "#ddd", mt: 1.5 }} />
            <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", md: "row" } }}>
              {services.map((s) => (
                <Box key={s.title} sx={{
                  flex: 1, minWidth: 0, height: { xs: 320, sm: 340, md: 380, lg: 400 }, perspective: "1000px",
                  "& .flip-inner": { transition: "transform 0.55s cubic-bezier(.4,0,.2,1)" },
                  "&:hover .flip-inner": { transform: "rotateY(180deg)" }
                }}>
                  <Box className="flip-inner" sx={{
                    width: "100%", height: "100%",
                    position: "relative", transformStyle: "preserve-3d"
                  }}>
                    <Box sx={{
                      position: "absolute", inset: 0, backfaceVisibility: "hidden",
                      borderRadius: 2, p: 4.5, border: "1px solid #e8edf2", bgcolor: "#fff"
                    }}>
                      <Box sx={{ mb: 3 }}>{s.icon}</Box>
                      <Typography sx={{ fontWeight: 700, color: "#1A3A5C", mb: 1.5, fontSize: "1.05rem", lineHeight: 1.35 }}>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#4a5568", lineHeight: 1.85, fontSize: "0.9rem" }}>
                        {s.description}
                      </Typography>
                    </Box>
                    <Box sx={{
                      position: "absolute", inset: 0, backfaceVisibility: "hidden",
                      borderRadius: 2, p: 4.5, bgcolor: "#0D2B45", transform: "rotateY(180deg)",
                      display: "flex", flexDirection: "column", justifyContent: "center"
                    }}>
                      <Typography sx={{ fontWeight: 700, color: "#E8581A", mb: 2.5, fontSize: "1.1rem", lineHeight: 1.3 }}>
                        {s.title}
                      </Typography>
                      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                        {s.bullets.map((b) => (
                          <Box component="li" key={b} sx={{
                            color: "rgba(255,255,255,0.88)", fontSize: "0.9rem",
                            py: 0.9, borderBottom: "1px solid rgba(255,255,255,0.1)",
                            display: "flex", alignItems: "center", gap: 1.2
                          }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#E8581A", flexShrink: 0 }} />
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

        {/* ── CLIENTS MARQUEE ── */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#fff", overflow: "hidden" }}>
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="flex-start">
              <Grid item xs={12} md={4}>
                <Typography variant="h4" sx={{
                  fontWeight: 800, mb: 1, color: "#1a2b3c",
                  fontSize: { xs: "1.6rem", md: "2rem" }
                }}>
                  Our Esteemed Clients
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography sx={{ color: "#4a5568", lineHeight: 1.8 }}>
                  Serving global clients across industries with tailored solutions, driving innovation and excellence in every project.
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4, borderColor: "#ddd" }} />
          </Container>
          <Box sx={{ overflow: "hidden" }}>
            <Box className="marquee-track" sx={{ display: "flex", gap: 0 }}>
              {[...clientLogos, ...clientLogos].map((client, i) => (
                <Box key={i} sx={{
                  flexShrink: 0, px: 5.5, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", minWidth: 160
                }}>
                  {client}
                </Box>
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
            src={GISbg}
            alt="CTA background"
            sx={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center"
            }} />
          <Box sx={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(5,13,24,0.78) 0%, rgba(10,30,53,0.72) 50%, rgba(6,15,28,0.8) 100%)"
          }} />
          <Box sx={{ position: "relative", zIndex: 1, textAlign: "center", px: 2 }}>
            <Typography variant="h4" sx={{
              color: "#fff", fontWeight: 700, mb: 4,
              fontSize: { xs: "1.5rem", md: "2.2rem" }, textShadow: "0 2px 20px rgba(0,0,0,0.5)"
            }}>
              Let's Discuss Your Requirements
            </Typography>
            <Button variant="contained" size="large" sx={{
              bgcolor: "#E8581A", color: "#fff", px: 6, py: 1.8, fontSize: "1.05rem",
              fontWeight: 700, borderRadius: 1,
              "&:hover": { bgcolor: "#cc4a0f", transform: "translateY(-2px)" },
              boxShadow: "0 6px 28px rgba(232,88,26,0.5)", transition: "all 0.2s"
            }}>
              Schedule a call
            </Button>
          </Box>
        </Box>

        {/* ── TECH STACK ── */}
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f8f9fa", overflow: "hidden" }}>
          <Container maxWidth="xl" sx={{ mb: 4 }}>
            <Grid container spacing={4} alignItems="flex-start">
              <Grid item xs={12} md={4}>
                <Typography variant="h4" sx={{
                  fontWeight: 800, mb: 2, color: "#1a2b3c",
                  fontSize: { xs: "1.6rem", md: "2rem" }
                }}>TechStack</Typography>
                <Typography sx={{ color: "#4a5568", lineHeight: 1.85 }}>
                  Our 25+ in house tech team are skilled in 20+ top technologies that
                  help us deliver smart solutions to your needs.
                </Typography>
              </Grid>
            </Grid>
          </Container>
          {/* Row 1 → left */}
          <TechMarqueeRow items={techRow1} direction="left" speed={30} />
          {/* Row 2 → right */}
          <TechMarqueeRow items={techRow2} direction="right" speed={28} />
          {/* Row 3 → left */}
          <TechMarqueeRow items={techRow3} direction="left" speed={32} />
        </Box>

        {/* ── CASE STUDIES ── */}
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
          <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="flex-start" sx={{ mb: 5 }}>
              <Grid item xs={12} md={4}>
                <Typography variant="h4" sx={{
                  fontWeight: 800, color: "#1a2b3c",
                  fontSize: { xs: "1.6rem", md: "2rem" }
                }}>
                  Case Studies
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography sx={{ color: "#4a5568", lineHeight: 1.8 }}>
                  Explore our case studies to see how we've successfully addressed complex
                  challenges with innovative solutions.
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ overflow: "hidden" }}>
              <Box sx={{
                display: "flex",
                gap: "20px",
                transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
                transform: `translateX(calc(-${caseSlide * (50 + 1.04)}%))`,
              }}>
                {caseStudies.map((cs, i) => (
                  <Box
                    key={i}
                    sx={{
                      minWidth: { xs: "100%", lg: "calc(50% - 10px)" },
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      overflow: "hidden",
                      bgcolor: "#f5f5f5",
                      height: { xs: "auto", md: 500 }, // match screenshot
                    }}
>
                    <Box
                      component="img"
                      src={cs.image}
                      alt={cs.title}
                      sx={{
                        width: { xs: "100%", md: "50%" },
                        height: { xs: 250, md: "100%" },
                        objectFit: "cover",
                        display: "block",
                        flexShrink: 0,
                      }}
                    />
                      <Box
                            sx={{
                              width: { xs: "100%", md: "50%" },
                              p: { xs: 3, md: 5 },
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              bgcolor: "#f5f5f5",
                            }}
                          >
                      <Stack direction="row" flexWrap="wrap" sx={{ mb: 1.5 }}>
                        {cs.tags.map((tag, ti) => (
                          <Typography key={tag} variant="caption"
                            sx={{ color: "#E8581A", fontWeight: 600, fontSize: "0.78rem" }}>
                            {tag}{ti < cs.tags.length - 1 ? ",\u00a0" : ""}
                          </Typography>
                        ))}
                      </Stack>
                                            <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#1a2b3c",
                          fontSize: {
                            xs: "1.4rem",
                            md: "2rem",
                          },
                          lineHeight: 1.25,
                          mb: 2,
                        }}
                      >
                        {cs.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#4a5568",
                          lineHeight: 1.8,
                          fontSize: {
                            xs: "1rem",
                            md: "1.15rem",
                          },
                          mb: 5,
                        }}
                      >
                        {cs.description}
                      </Typography>
                      <Box sx={{
                        display: "inline-flex", alignItems: "center", gap: 0.5, color: "#1a2b3c",
                        fontWeight: 600, fontSize: "0.9rem", cursor: "pointer",
                        borderBottom: "1.5px solid #1a2b3c", pb: 0.4, width: "fit-content",
                        "&:hover": { color: "#E8581A", borderColor: "#E8581A" },
                        transition: "color 0.2s, border-color 0.2s"
                      }}>
                        Read More <ArrowForwardIcon sx={{ fontSize: 15 }} />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 4 }}>
              <IconButton onClick={() => setCaseSlide((p) => Math.max(0, p - 1))} disabled={caseSlide === 0}
                sx={{
                  bgcolor: caseSlide === 0 ? "#f0f0f0" : "#1A3A5C",
                  color: caseSlide === 0 ? "#aaa" : "#fff",
                  "&:hover": { bgcolor: "#E8581A" }, width: 36, height: 36
                }}>
                <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
              </IconButton>
              {Array.from({ length: caseStudies.length - 1 }).map((_, i) => (
                <Box key={i} onClick={() => setCaseSlide(i)}
                  sx={{
                    width: i === caseSlide ? 28 : 10, height: 10, borderRadius: 5,
                    bgcolor: i === caseSlide ? "#E8581A" : "#ddd", cursor: "pointer", transition: "all 0.3s"
                  }} />
              ))}
              <IconButton onClick={() => setCaseSlide((p) => Math.min(maxSlide, p + 1))}
                disabled={caseSlide === maxSlide}
                sx={{
                  bgcolor: caseSlide === maxSlide ? "#f0f0f0" : "#1A3A5C",
                  color: caseSlide === maxSlide ? "#aaa" : "#fff",
                  "&:hover": { bgcolor: "#E8581A" }, width: 36, height: 36
                }}>
                <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}