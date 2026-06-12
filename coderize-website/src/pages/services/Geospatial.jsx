import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo-1.jpg";
import logo2 from "../../assets/logo-2.jpg";
import logo3 from "../../assets/logo-3.jpg";
import logo4 from "../../assets/logo-4.jpg";
import logo5 from "../../assets/logo-5.jpg";
import logo6 from "../../assets/logo-6.jpg";
import logo7 from "../../assets/logo-7.jpg";
import logo8 from "../../assets/logo-8.jpg";
import logo9 from "../../assets/logo-9.jpg";
import logo10 from "../../assets/logo-10.jpg";
import logo11 from "../../assets/logo-11.jpg";
import logo12 from "../../assets/logo-12.jpg";
import logo13 from "../../assets/logo-13.jpg";
import goes1 from "../../assets/goes-1.png";
import goes2 from "../../assets/goes-2.jpg";
import goesslide1 from "../../assets/goes-slide-1.jpg";
import goesslide2 from "../../assets/goes-slide-2.jpg";
import goesslide3 from "../../assets/goes-slide-3.jpg";
import goesslide4 from "../../assets/goes-slide-4.webp";
import goesslide5 from "../../assets/goes-slide-5.jpg";
import goesslide6 from "../../assets/goes-slide-6.jpg";
import goesslide7 from "../../assets/goes-slide-7.jpg";
import goesslide8 from "../../assets/goes-slide-8.jpg";
import goesslide9 from "../../assets/goes-slide-9.webp";
import goes11 from "../../assets/goes11.jpg";
import goes12 from "../../assets/goes12.jpg";
import goes13 from "../../assets/goes13.jpg";
import goes14 from "../../assets/goes14.jpg";
import Dronne from "../../assets/Dronne.jpg";

const ACCENT = "#e8622a";
const DARK = "#0d1b2a";
const BLUE = "#1a3c5e";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const solutionCards = [
  {
    title: "GIS Development",
    desc: "We tailor geospatial apps with Esri and open-source tech to add value to your business.",
    img: goes11,
    path: "/GISDevelopment",
  },
  {
    title: "Location Intelligence",
    desc: "We offer location analytics, GIS Mapping and data conversion services to drive spatial trends.",
    img: goes12,
    path: "/LocationIntelligence",
  },
  {
    title: "Advisory",
    desc: "We offer consultancy that drives maximum ROI through strategic geospatial solutions.",
    img: goes13,
    path: "/Advisory",
  },
  {
    title: "Technical Support",
    desc: "We provide technical support to ensure seamless and efficient geospatial operations.",
    img: goes14,
    path: "/GeospatialTechnicalSupport",
  },
  {
    title: "Drone Services",
    desc: "We leverage satellite imagery and aerial data to provide actionable geospatial insights.",
    img: Dronne,
    path: "/DroneServices",
  },
];

const testimonials = [
  {
    text: "A technically resourceful team. CodeRize delivered what they promised. Definitely our trusted technology partner.",
    name: "Mr. Sameer Pandey",
    role: "Director, Maharashtra Knowledge Corporation Limited",
  },
  {
    text: "CodeRize Technologies has been instrumental in transforming our geospatial capabilities. Their expertise and dedication are unmatched.",
    name: "Mr. Rajesh Kumar",
    role: "Head of GIS, Forest Department Maharashtra",
  },
  {
    text: "Exceptional service and technical knowledge. The team understood our requirements perfectly and delivered beyond expectations.",
    name: "Ms. Priya Sharma",
    role: "Project Manager, GeoX Solutions",
  },
];

// ✅ CLIENT LOGOS — replace src values with your actual image URLs
const clientLogos = [
  { src: logo1 },
  { src: logo2 },
  { src: logo3 },
  { src: logo4 },
  { src: logo5 },
  { src: logo6 },
  { src: logo7 },
  { src: logo8 },
  { src: logo9 },
  { src: logo10 },
  { src: logo11 },
  { src: logo12 },
  { src: logo13 },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #fff8f5 0%, #fdf0ea 40%, #fde8dc 70%, #f5e0d8 100%)",
        minHeight: { xs: "auto", md: "520px" },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: "40px", md: "60px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          left: { xs: "60%", md: "48%" },
          width: "180px",
          height: "120px",
          backgroundImage:
            "radial-gradient(circle, #b0c4d8 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "200px",
          left: { xs: "45%", md: "38%" },
          width: "65px",
          height: "65px",
          bgcolor: "#f5c9b0",
          borderRadius: "10px",
          opacity: 0.55,
          transform: "rotate(15deg)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "24px", md: "48px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              flex: { xs: "unset", md: "0 0 42%" },
              maxWidth: { xs: "100%", md: "42%" },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.93rem",
                color: "#6a8090",
                mb: 2.5,
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              Home » Services » Geospatial
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.7rem" },
                color: BLUE,
                mb: 2.5,
                lineHeight: 1.15,
              }}
            >
              Geospatial Solution For Your Business.
            </Typography>
            <Typography
              sx={{
                color: "#4a6070",
                fontSize: "1rem",
                lineHeight: 1.8,
                fontFamily: "'Segoe UI', sans-serif",
              }}
            >
              Enhance your business with advanced geo-location technology and
              deliver high-quality, cost-effective, and timely services.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              width: "100%",
            }}
          >
            <Box
              component="img"
              src="https://coderize.in/wp-content/uploads/2024/08/geospatial-hero.png"
              alt="Geospatial devices"
              sx={{
                width: "100%",
                maxWidth: { xs: 340, md: 560 },
                objectFit: "contain",
              }}
              onError={(e) => {
                e.target.src = goes1;
                e.target.style.borderRadius = "18px";
                e.target.style.maxHeight = "500px";
                e.target.style.objectFit = "cover";
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// ─── SOLUTION IN ACTION ───────────────────────────────────────────────────────

function SolutionInAction() {
  return (
    <Box sx={{ py: { xs: "48px", md: "80px" }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: BLUE,
            mb: 1,
          }}
        >
          Geospatial Solution in Action
        </Typography>
        <Box sx={{ height: "1px", bgcolor: "#dde5ec", mb: 5 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {solutionCards.map((card) => (
            <Box
              key={card.title}
              sx={{
                flex: {
                  xs: "0 0 100%",
                  sm: "0 0 calc(50% - 12px)",
                  md: "0 0 calc(33.333% - 16px)",
                },
                minWidth: 0,
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
                height: 380,
                cursor: "pointer",
                "&:hover .card-overlay": { bgcolor: "rgba(0,0,0,0.55)" },
              }}
            >
              <Box
                component="img"
                src={card.img}
                alt={card.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                className="card-overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "rgba(0,0,0,0.40)",
                  transition: "background-color 0.3s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    fontFamily: "'Segoe UI', sans-serif",
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.88)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    fontFamily: "'Segoe UI', sans-serif",
                    mb: 2,
                  }}
                >
                  {card.desc}
                </Typography>
                <Button
                  component={Link}
                  to={card.path}
                  variant="contained"
                  sx={{
                    bgcolor: ACCENT,
                    color: "#fff",
                    fontFamily: "'Segoe UI', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    textTransform: "none",
                    borderRadius: "6px",
                    px: 3,
                    py: "8px",
                    "&:hover": { bgcolor: "#d4541f" },
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ─── LOGO ITEM — simple image ─────────────────────────────────────────────────

function LogoItem({ logo }) {
  return (
    <Box
      component="img"
      src={logo.src}
      alt={logo.alt}
      sx={{
        height: 150,
        maxWidth: 300,
        objectFit: "contain",
        mx: 4,
        flexShrink: 0,
        opacity: 0.7,
        transition: "filter 0.3s ease, opacity 0.3s ease",
        "&:hover": { filter: "grayscale(0%)", opacity: 1 },
      }}
    />
  );
}

// ─── CLIENT LOGOS — infinite auto-scroll carousel ────────────────────────────

function ClientLogos() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <Box sx={{ py: "72px", bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "16px", md: "48px" },
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: BLUE,
              flexShrink: 0,
            }}
          >
            Our Esteemed Clients
          </Typography>
          <Typography
            sx={{
              color: "#4a6070",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              fontFamily: "'Segoe UI', sans-serif",
              pt: { md: "6px" },
            }}
          >
            Serving global clients across industries with tailored solutions,
            driving innovation and excellence in every project.
          </Typography>
        </Box>
        <Box sx={{ height: "1px", bgcolor: "#dde5ec", mb: 6 }} />
      </Container>
      <Box sx={{ overflow: "hidden", position: "relative", width: "100%" }}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            zIndex: 2,
            background: "linear-gradient(to right, #fff, transparent)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            zIndex: 2,
            background: "linear-gradient(to left, #fff, transparent)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            "@keyframes marquee": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
            animation: "marquee 18s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {doubled.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  return (
    <Box sx={{ bgcolor: "#c8d8e8", py: { xs: "48px", md: "80px" } }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          sx={{
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: BLUE,
            mb: 5,
          }}
        >
          Our Clients Say
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "16px", md: "32px" },
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: "4rem", md: "5.5rem" },
                color: ACCENT,
                lineHeight: 1,
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                mt: "-10px",
              }}
            >
              "
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "'Segoe UI', sans-serif",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                color: BLUE,
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 900,
              }}
            >
              {t.text}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: DARK,
              }}
            >
              {t.name}
            </Typography>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: "0.9rem",
                fontFamily: "'Segoe UI', sans-serif",
                mt: "4px",
              }}
            >
              {t.role}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            mt: "32px",
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          {[
            { fn: prev, Icon: ArrowBackIcon },
            { fn: next, Icon: ArrowForwardIcon },
          ].map(({ fn, Icon }, i) => (
            <Box
              key={i}
              component="button"
              onClick={fn}
              sx={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "1.5px solid #8aaabb",
                bgcolor: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s",
                "&:hover": { borderColor: ACCENT },
              }}
            >
              <Icon sx={{ fontSize: 17, color: "#4a6070" }} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ─── CONTACT SECTION ──────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          minHeight: { md: 600 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: { md: "0 0 42%" },
            maxWidth: { md: "42%" },
            p: { xs: "24px", md: "48px" },
            bgcolor: "#fff",
            borderRight: { md: "1px solid #eef1f4" },
            borderBottom: { xs: "1px solid #eef1f4", md: "none" },
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              overflow: "hidden",
              mb: 3,
              bgcolor: "#0d1b2a",
              position: "relative",
              height: { xs: 280, md: 600 },
            }}
          >
            <Box
              component="img"
              src={goes2}
              alt="Company Profile"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.65,
                display: "block",
              }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: ACCENT,
              color: "#fff",
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              textTransform: "none",
              borderRadius: "8px",
              px: 4,
              py: "10px",
              "&:hover": { bgcolor: "#d4541f" },
            }}
          >
            Download
          </Button>
        </Box>
        <Box sx={{ flex: 1, p: { xs: "24px", md: "48px" } }}>
          <Typography
            sx={{
              color: "#4a6070",
              fontSize: "0.95rem",
              fontFamily: "'Segoe UI', sans-serif",
              mb: 1,
            }}
          >
            Let's Discuss your next big idea
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "1.4rem", md: "1.85rem" },
              color: BLUE,
              mb: 4,
              lineHeight: 1.25,
            }}
          >
            Looking to transform your projects with geospatial innovation?
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <TextField
              placeholder="Full Name*"
              variant="standard"
              fullWidth
              sx={{
                "& .MuiInput-root": {
                  fontSize: "0.95rem",
                  color: "#4a6070",
                  fontFamily: "'Segoe UI', sans-serif",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#c0ccd4",
                },
              }}
            />
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                placeholder="Phone Number*"
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInput-root": {
                    fontSize: "0.95rem",
                    color: "#4a6070",
                    fontFamily: "'Segoe UI', sans-serif",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#c0ccd4",
                  },
                }}
              />
              <TextField
                placeholder="Email Address*"
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInput-root": {
                    fontSize: "0.95rem",
                    color: "#4a6070",
                    fontFamily: "'Segoe UI', sans-serif",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#c0ccd4",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                placeholder="Date"
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInput-root": {
                    fontSize: "0.95rem",
                    color: "#4a6070",
                    fontFamily: "'Segoe UI', sans-serif",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#c0ccd4",
                  },
                }}
              />
              <TextField
                placeholder="Time (IST Zone)"
                variant="standard"
                fullWidth
                sx={{
                  "& .MuiInput-root": {
                    fontSize: "0.95rem",
                    color: "#4a6070",
                    fontFamily: "'Segoe UI', sans-serif",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#c0ccd4",
                  },
                }}
              />
            </Box>
            <TextField
              placeholder="Tell us about your project"
              variant="standard"
              fullWidth
              multiline
              rows={4}
              sx={{
                "& .MuiInput-root": {
                  fontSize: "0.95rem",
                  color: "#4a6070",
                  fontFamily: "'Segoe UI', sans-serif",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#c0ccd4",
                },
              }}
            />
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                border: "1px solid #c0ccd4",
                borderRadius: "4px",
                p: "12px 16px",
                maxWidth: 300,
                bgcolor: "#f9fafb",
              }}
            >
              <Checkbox size="small" sx={{ p: 0, color: "#4a6070" }} />
              <Typography
                sx={{
                  fontSize: "0.88rem",
                  color: "#4a6070",
                  fontFamily: "'Segoe UI', sans-serif",
                }}
              >
                I'm not a robot
              </Typography>
              <Box sx={{ ml: "auto", pl: 1 }}>
                <Typography
                  sx={{
                    fontSize: "0.58rem",
                    color: "#9e9e9e",
                    lineHeight: 1.3,
                    textAlign: "right",
                  }}
                >
                  reCAPTCHA
                  <br />
                  Privacy · Terms
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: ACCENT,
                  color: "#fff",
                  fontFamily: "'Segoe UI', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 5,
                  py: "11px",
                  "&:hover": { bgcolor: "#d4541f" },
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// ─── ALL SERVICES DATA (8 total, 3 per page) ──────────────────────────────────

const allServices = [
  {
    title: "Location Intelligence",
    desc: "Empower decision-making with our cutting-edge geospatial intelligence solutions, offering superior analytics and actionable data.",
    img: goesslide1,
    path: "/LocationIntelligence",
  },
  {
    title: "Geospatial Advisory",
    desc: "Leverage our geospatial consultation to refine your strategy, maximize efficiency, and drive impactful decisions with precision insights.",
    img: goesslide2,
    path: "/Advisory",
  },
  {
    title: "Geospatial Technical Support",
    desc: "Overcome geospatial challenges with our expert support, ensuring seamless operations and enhanced efficiency.",
    img: goesslide3,
    path: "/GeospatialTechnicalSupport",
  },
  {
    title: "GIS Development",
    desc: "We tailor geospatial applications with Esri and open-source technology to add measurable value to your business.",
    img: goesslide4,
    path: "/GISDevelopment",
  },
  {
    title: "Drone Service",
    desc: "We leverage satellite imagery and aerial data to provide actionable geospatial insights for smarter decisions.",
    img: goesslide5,
    path: "/DroneServices",
  },
  {
    title: "Application Development",
    desc: "Efficiently manage, store, and retrieve large-scale spatial datasets with our robust geospatial data solutions.",
    img: goesslide6,
    path: "/ApplicationDevelopment",
  },
  {
    title: "Azure Consulting",
    desc: "Deploy interactive, browser-based mapping applications that make geospatial data accessible to all stakeholders.",
    img: goesslide6,
    path: "/AzureConsulting",
  },
  {
    title: "Software Advisory",
    desc: "Streamline on-the-ground data gathering with mobile GIS tools that sync seamlessly with your enterprise systems.",
    img: goesslide8,
    path: "/SoftwareAdvisory",
  },
  {
    title: "Software Technical Support",
    desc: "Streamline on-the-ground data gathering with mobile GIS tools that sync seamlessly with your enterprise systems.",
    img: goesslide9,
    path: "/SoftwareTechnicalSupport",
  },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(allServices.length / CARDS_PER_PAGE);

function ServiceCard({ svc }) {
  return (
    <Box
      sx={{
        flex: { xs: "0 0 100%", sm: "0 0 calc(50% - 12px)", md: "1 1 0" },
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          height: { xs: 200, md: 220 },
          mb: 2.5,
        }}
      >
        <Box
          component="img"
          src={svc.img}
          alt={svc.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.04)" },
          }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: 700,
          fontSize: "1.15rem",
          color: ACCENT,
          mb: 1.5,
        }}
      >
        {svc.title}
      </Typography>
      <Typography
        sx={{
          color: "#4a6070",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          fontFamily: "'Segoe UI', sans-serif",
          mb: 2,
        }}
      >
        {svc.desc}
      </Typography>
      <Button
        component={Link}
        to={svc.path}
        endIcon={<ArrowForwardIcon sx={{ fontSize: "14px !important" }} />}
        sx={{
          color: DARK,
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: 600,
          fontSize: "0.88rem",
          textTransform: "none",
          borderBottom: `1.5px solid ${ACCENT}`,
          borderRadius: 0,
          pb: "2px",
          px: 0,
          minWidth: 0,
          "&:hover": { bgcolor: "transparent", color: ACCENT },
        }}
      >
        Read More
      </Button>
    </Box>
  );
}

function OurServices() {
  const [page, setPage] = useState(0);
  const intervalRef = useRef(null);

  const startAuto = () => {
    intervalRef.current = setInterval(
      () => setPage((p) => (p + 1) % TOTAL_PAGES),
      4000,
    );
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDot = (i) => {
    clearInterval(intervalRef.current);
    setPage(i);
    startAuto();
  };

  const visibleServices = allServices.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  return (
    <Box
      sx={{
        py: { xs: "48px", md: "80px" },
        bgcolor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: -80,
          top: 0,
          bottom: 0,
          width: "50%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Ccircle cx='350' cy='300' r='280' fill='none' stroke='%23e8edf5' stroke-width='1.5'/%3E%3Ccircle cx='350' cy='300' r='220' fill='none' stroke='%23e8edf5' stroke-width='1.5'/%3E%3Ccircle cx='350' cy='300' r='160' fill='none' stroke='%23e8edf5' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          opacity: 0.7,
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "16px", md: "48px" },
            mb: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", md: "2rem" },
              color: BLUE,
              flexShrink: 0,
            }}
          >
            Our Services
          </Typography>
          <Typography
            sx={{
              color: "#4a6070",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              fontFamily: "'Segoe UI', sans-serif",
              pt: { md: "8px" },
            }}
          >
            In a rapidly evolving technological landscape, our experts are
            dedicated to unlocking the full potential of integrated business
            solutions for our clients.
          </Typography>
        </Box>
        <Box sx={{ height: "1px", bgcolor: "#dde5ec", mb: 5 }} />
        <Box
          key={page}
          sx={{
            display: "flex",
            gap: "24px",
            mb: 5,
            flexWrap: { xs: "wrap", md: "nowrap" },
            "@keyframes fadeSlideIn": {
              from: { opacity: 0, transform: "translateY(14px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            animation: "fadeSlideIn 0.45s ease both",
          }}
        >
          {visibleServices.map((svc) => (
            <ServiceCard key={svc.title} svc={svc} />
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          {[...Array(TOTAL_PAGES)].map((_, i) => (
            <Box
              key={i}
              onClick={() => handleDot(i)}
              sx={{
                width: i === page ? 28 : 10,
                height: 10,
                borderRadius: "5px",
                bgcolor: i === page ? ACCENT : "#c0ccd4",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SoftwarePage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Hero />
      <SolutionInAction />
      <ClientLogos />
      <Testimonials />
      <ContactSection />
      <OurServices />
    </Box>
  );
}
