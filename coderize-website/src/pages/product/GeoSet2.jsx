import { useState, useEffect, useRef, useCallback } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Set11 from "../../assets/Set11.png";
import Set12 from "../../assets/Set12.png";
import Set13 from "../../assets/Set13.png";
import Set14 from "../../assets/Set14.png";
import Set15 from "../../assets/Set15.png";

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
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 4, fontWeight: 600 },
      },
    },
  },
});

const MapCreationIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="rgba(232,88,26,0.08)" />
    <g stroke={ACCENT} strokeWidth="1.8" fill="none">
      <circle cx="38" cy="34" r="10" />
      <path d="M38,24 L38,44 M28,34 L48,34" strokeWidth="1.2" />
      <circle cx="38" cy="34" r="4" fill={ACCENT} opacity="0.3" />
      <path d="M26,22 L22,50 L36,44 L50,50 L54,22 L40,28 Z" strokeWidth="1.5" />
    </g>
  </svg>
);

const LayerStylingIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="rgba(232,88,26,0.08)" />
    <g stroke={ACCENT} strokeWidth="1.8" fill="none">
      <rect x="22" y="22" width="28" height="8" rx="1" />
      <rect x="24" y="32" width="24" height="8" rx="1" />
      <rect x="26" y="42" width="20" height="8" rx="1" />
      <circle cx="50" cy="22" r="4" fill={ACCENT} opacity="0.7" />
      <path d="M50,19 L50,25 M47,22 L53,22" strokeWidth="1.5" stroke="#fff" />
    </g>
  </svg>
);

const DashboardIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="rgba(232,88,26,0.08)" />
    <g stroke={ACCENT} strokeWidth="1.8" fill="none">
      <rect x="20" y="22" width="32" height="22" rx="2" />
      <line x1="20" y1="30" x2="52" y2="30" />
      <line x1="36" y1="30" x2="36" y2="44" />
      <rect x="22" y="32" width="10" height="4" rx="1" fill={ACCENT} opacity="0.3" />
      <rect x="22" y="38" width="7" height="4" rx="1" fill={ACCENT} opacity="0.5" />
      <rect x="38" y="34" width="11" height="8" rx="1" fill={ACCENT} opacity="0.2" />
    </g>
  </svg>
);

const DataIngestionIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="rgba(232,88,26,0.08)" />
    <g stroke={ACCENT} strokeWidth="1.8" fill="none">
      <ellipse cx="36" cy="26" rx="12" ry="5" />
      <path d="M24,26 L24,46 Q24,51 36,51 Q48,51 48,46 L48,26" />
      <path d="M24,33 Q24,38 36,38 Q48,38 48,33" />
      <path d="M24,40 Q24,45 36,45 Q48,45 48,40" />
      <circle cx="50" cy="22" r="5" fill={ACCENT} opacity="0.2" />
      <path d="M48,22 L52,22 M50,20 L50,24" strokeWidth="1.5" />
    </g>
  </svg>
);

const WebMappingIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="rgba(232,88,26,0.08)" />
    <g stroke={ACCENT} strokeWidth="1.8" fill="none">
      <rect x="18" y="22" width="36" height="26" rx="2" />
      <circle cx="32" cy="33" r="6" />
      <path d="M36,37 L44,44" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22,26 L30,26 M22,30 L26,30" strokeWidth="1.2" />
    </g>
  </svg>
);

const CatalogIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="rgba(232,88,26,0.08)" />
    <g stroke={ACCENT} strokeWidth="1.8" fill="none">
      <rect x="20" y="20" width="32" height="32" rx="3" />
      <rect x="26" y="28" width="8" height="8" rx="1" />
      <rect x="38" y="28" width="8" height="8" rx="1" />
      <rect x="26" y="40" width="8" height="8" rx="1" />
      <rect x="38" y="40" width="8" height="8" rx="1" />
      <circle cx="48" cy="48" r="6" fill="#fff" />
      <circle cx="48" cy="48" r="5" stroke={ACCENT} strokeWidth="1.5" />
      <path d="M46,48 L50,48 M48,46 L48,50" strokeWidth="1.5" />
    </g>
  </svg>
);

const KeyFeaturesIcon = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <circle cx="36" cy="36" r="36" fill="rgba(232,88,26,0.08)" />
    <g stroke={ACCENT} strokeWidth="1.8" fill="none">
      <circle cx="36" cy="30" r="8" />
      <path d="M36,38 L36,52" strokeWidth="2" />
      <path d="M30,44 L36,50 L42,44" strokeWidth="1.5" />
      <path d="M26,24 Q20,30 22,38" strokeWidth="1.4" strokeDasharray="2 2" />
      <path d="M46,24 Q52,30 50,38" strokeWidth="1.4" strokeDasharray="2 2" />
    </g>
  </svg>
);

const flipFeatures = [
  { icon: <KeyFeaturesIcon />, title: "Role Based Access", description: "Role Based AccessRole-based access control (RBAC) manages permissions by assigning roles to users in GeoSet Viewer.", bullets: ["Granular Access Control", "Enhanced Security", "Establish Role Hierarchy"] },
  { icon: <MapCreationIcon />, title:"Geo-fencing ", description: "Geo-fencing enhances user experience by providing location-based functionalities and contextual information.", bullets: ["Create Boundary & Define Rules", "Real-Time Monitoring", "Notifications & Alerts"] },
  { icon: <LayerStylingIcon />, title: "Data Visualization", description: "Visualization aids data exploration and decision-making through engaging, clear geospatial representation.", bullets: ["Map composition", "Cartographic design & Thematic Maps", "Layer styling & Labelling"] },
  { icon: <DataIngestionIcon />, title: "Geo-Analytics", description: "Monitoring analytics involves tracking metrics derived from geospatial data for effective visualization and interaction.", bullets: ["Data Acquisition", "Real-Time Data Processing", "Spatial & Temporal Analysis"] },
  { icon: <WebMappingIcon />, title: "Custom Reports", description: "GeoSet Viewers enable users to generate tailored analyses and summaries from spatial data.", bullets: ["Report Template Creation", "Report Configuration", "Tabular Data & Statistics"] },
  { icon: <CatalogIcon />, title: "Export Reports", description: "The GeoSet Viewer simplifies exporting detailed reports for enhanced analysis and visualization of geospatial", bullets: ["File Formats", "Interactive Elements", "Data Inclusion"] },
];

const slides = [
  { title: "Common Gateway", bullets: ["Single Gateway", "Reduce Cost & Efforts", "Centralized KPI view"], imgSrc: Set12, imgAlt: "Grant Work Approvals" },
  { title: "Visualization & Data Monitoring", bullets: ["Data Visualization", "Real-time monitoring", "Enhances Decision making"], imgSrc: Set13, imgAlt: "Beyond Auditing" },
  { title: "Geo Analytics Reports", bullets: ["Data Analysis", "GEnerate Reports", "Extract valuable"], imgSrc: Set14, imgAlt: "Spatial Monitoring" },
  { title: "User Management", bullets: ["Hierarchy Managenment", "Geographical Settings", "Foster interdepartmental synergy"], imgSrc: Set15, imgAlt: "Collaborative Workflows" },
];

// ─── Slide Card ───────────────────────────────────────────────────────────
function SlideCard({ slide, animating, animDir }) {
  return (
    <Box
      sx={{
        flex: "0 0 50%",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        minWidth: 0,
        animation: animating
          ? `${animDir === "left" ? "slideOutLeft" : "slideOutRight"} 0.35s ease forwards`
          : `${animDir === "left" ? "slideInLeft" : "slideInRight"} 0.35s ease forwards`,
      }}
    >
      {/* Image panel — white bg, full image, no cropping */}
      <Box
        sx={{
          flex: "0 0 50%",
          maxWidth: "50%",
          bgcolor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: 220, md: 380 },
          overflow: "hidden",
          p: { xs: 1.5, md: 3 },
        }}
      >
        <Box
          component="img"
          src={slide.imgSrc}
          alt={slide.imgAlt}
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: { xs: 200, md: 340 },
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>

      {/* Text panel */}
      <Box sx={{ flex: 1, minWidth: 0, bgcolor: "#e4edf5", display: "flex", alignItems: "center", p: { xs: 3, md: 5 } }}>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: "1.1rem", md: "1.35rem" }, color: ACCENT, mb: 2.5, lineHeight: 1.3 }}>
            {slide.title}
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {slide.bullets.map((b) => (
              <Box component="li" key={b} sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#2d3d4e", fontSize: { xs: "0.9rem", md: "0.95rem" }, py: 1, borderBottom: "1px solid rgba(0,43,85,0.12)", "&:last-child": { borderBottom: "none" } }}>
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: ACCENT, flexShrink: 0 }} />
                {b}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─── 2-Up Slideshow ───────────────────────────────────────────────────────
function ValueSlideshow() {
  const pairs = [];
  for (let i = 0; i < slides.length; i += 2) {
    if (slides[i + 1]) pairs.push([slides[i], slides[i + 1]]);
    else pairs.push([slides[i], slides[0]]);
  }

  const [activePair, setActivePair] = useState(0);
  const [animDir, setAnimDir] = useState("left");
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((nextPair) => {
    if (animating || nextPair === activePair) return;
    setAnimDir(nextPair > activePair ? "left" : "right");
    setAnimating(true);
    setTimeout(() => { setActivePair(nextPair); setAnimating(false); }, 350);
  }, [activePair, animating]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActivePair((prev) => {
        const next = (prev + 1) % pairs.length;
        setAnimDir("left");
        setAnimating(true);
        setTimeout(() => setAnimating(false), 350);
        return next;
      });
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [pairs.length]);

  const currentPair = pairs[activePair];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <style>{`
        @keyframes slideInLeft  { from { opacity:0; transform:translateX(40px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-40px); } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(40px); } }
      `}</style>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, width: "100%", overflow: "hidden", minHeight: { xs: "auto", md: 380 } }}>
        {currentPair.map((slide, idx) => (
          <SlideCard key={`${activePair}-${idx}`} slide={slide} animating={animating} animDir={animDir} />
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, py: 3, bgcolor: "#e4edf5" }}>
        {pairs.map((_, i) => (
          <Box key={i} onClick={() => go(i)} sx={{ width: i === activePair ? 24 : 10, height: 10, borderRadius: 5, bgcolor: i === activePair ? ACCENT : "rgba(0,43,85,0.25)", cursor: "pointer", transition: "all 0.3s ease" }} />
        ))}
      </Box>
    </Box>
  );
}

// ─── Flip Feature Card ────────────────────────────────────────────────────
function FlipFeatureCard({ icon, title, description, bullets }) {
  return (
    <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 12px)", md: "1 1 calc(33.33% - 16px)" }, minWidth: 0, height: { xs: 320, md: 360 }, perspective: "1000px", cursor: "pointer", "& .flip-inner": { transition: "transform 0.55s cubic-bezier(.4,0,.2,1)" }, "&:hover .flip-inner": { transform: "rotateY(180deg)" } }}>
      <Box className="flip-inner" sx={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}>
        {/* FRONT */}
        <Box sx={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", borderRadius: 2, p: { xs: 3, md: 4 }, border: "1px solid #e8edf2", bgcolor: "#fff", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          <Box sx={{ mb: 2.5 }}>{icon}</Box>
          <Typography sx={{ fontWeight: 700, color: "#1A3A5C", fontSize: { xs: "1rem", md: "1.05rem" }, mb: 1.5, lineHeight: 1.3 }}>{title}</Typography>
          <Typography sx={{ color: "#4a5568", lineHeight: 1.85, fontSize: { xs: "0.88rem", md: "0.9rem" } }}>{description}</Typography>
        </Box>
        {/* BACK */}
        <Box sx={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", borderRadius: 2, p: { xs: 3, md: 4 }, bgcolor: "#0D2B45", transform: "rotateY(180deg)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography sx={{ fontWeight: 700, color: ACCENT, mb: 2.5, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.3 }}>{title}</Typography>
          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {bullets.map((b) => (
              <Box component="li" key={b} sx={{ color: "rgba(255,255,255,0.88)", fontSize: "0.9rem", py: 0.9, borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 1.2, "&:last-child": { borderBottom: "none" } }}>
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: ACCENT, flexShrink: 0 }} />
                {b}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────
export default function GeoSet2() {
  return (
    <ThemeProvider theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <Box sx={{ bgcolor: "#fff", overflow: "hidden", fontFamily: "'Poppins', sans-serif" }}>

        {/* 1. VALUE PROPOSITION */}
        <Box sx={{ background: "linear-gradient(135deg, #fde8d8 0%, #fce0cc 40%, #f9d4bc 100%)", py: { xs: 8, md: 10 }, position: "relative", overflow: "hidden" }}>
          <Box sx={{ position: "absolute", top: "15%", left: "42%", width: 80, height: 80, bgcolor: "rgba(232,88,26,0.15)", borderRadius: 2, transform: "rotate(15deg)" }} />
          <Box sx={{ position: "absolute", top: "10%", right: "5%", width: "35%", height: "80%", backgroundImage: "radial-gradient(circle, rgba(232,88,26,0.12) 1.5px, transparent 1.5px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: { xs: 6, md: 8 } }}>
              <Box sx={{ flex: 1, minWidth: 0, zIndex: 1 }}>
                <Typography sx={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" }, color: NAVY, lineHeight: 1.2, mb: 3 }}>
                 GeoSet Viewer
                </Typography>
                <Typography sx={{ color: "#2d3d4e", fontSize: { xs: "0.95rem", md: "1rem" }, lineHeight: 1.8, mb: 2 }}>
                  A powerful web app providing real-time operational insights into spatial data collection.
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {["Streamlines workflows with real-time monitoring.", "Enhances decision-making and resource management.", "Reduces manual work, costs, and paper reliance.",].map((item) => (
                    <Box component="li" key={item} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5, color: "#2d3d4e", fontSize: { xs: "0.9rem", md: "0.95rem" }, lineHeight: 1.6 }}>
                      <Box sx={{ mt: "6px", flexShrink: 0, color: ACCENT, fontWeight: 700, fontSize: "1.1rem", lineHeight: 1 }}>»</Box>
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ flex: { xs: "none", md: "0 0 45%" }, width: { xs: "100%", md: "45%" }, maxWidth: { xs: "100%", md: 520 }, overflow: "hidden", borderRadius: 2, zIndex: 1 }}>
                <Box component="img" src={Set11} alt="GeoSphere platform" sx={{ width: "100%", height: "auto", display: "block", maxHeight: { xs: 400, md: 480 }, objectFit: "contain", objectPosition: "center" }} />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* 2. PRODUCT FEATURES */}
        <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#f8f9fa" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}>
            <Typography sx={{ fontFamily: '"Sora", sans-serif', fontWeight: 700, fontSize: { xs: "1.8rem", md: "2.2rem" }, color: NAVY, textAlign: "center", mb: { xs: 5, md: 7 } }}>
              Product Features
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mb: 3 }}>
              {flipFeatures.slice(0, 3).map((f) => <FlipFeatureCard key={f.title} {...f} />)}
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
              {flipFeatures.slice(3).map((f) => <FlipFeatureCard key={f.title} {...f} />)}
            </Box>
          </Container>
        </Box>

        {/* 3. CTA */}
        <Box sx={{ position: "relative", py: { xs: 8, md: 10 }, overflow: "hidden", backgroundImage: `url(${Set11})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0, 43, 85, 0.82)", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 }, position: "relative", zIndex: 1 }}>
            <Typography sx={{ fontFamily: '"Sora", sans-serif', fontWeight: 600, fontSize: { xs: "1.6rem", md: "2rem" }, color: "#fff", mb: 4 }}>
              Let&apos;s Connect With Us
            </Typography>
            <Button component={Link} to="/contact" variant="contained" size="large" sx={{ bgcolor: ACCENT, color: "#fff", px: 5, py: 1.6, fontSize: "1rem", fontWeight: 700, borderRadius: 1, "&:hover": { bgcolor: "#cc4a0f", transform: "translateY(-2px)" }, boxShadow: "0 6px 24px rgba(232,88,26,0.45)", transition: "all 0.2s" }}>
              Contact Us
            </Button>
          </Container>
        </Box>

        {/* 4. SLIDESHOW */}
        <ValueSlideshow />

      </Box>
    </ThemeProvider>
  );
}