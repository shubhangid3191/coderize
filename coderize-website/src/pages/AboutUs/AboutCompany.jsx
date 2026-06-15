import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useState } from "react";
import { IconButton, Dialog } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import GeospatialAdvisoryConsultancy from "../../assets/Geospatial-Advisory-Consultancy.jpg";

import img1 from "../../assets/Event-Gallery_1.png";
import img2 from "../../assets/Event-Gallery_2.png";
import img3 from "../../assets/Event-Gallery_3.png";
import img4 from "../../assets/Event-Gallery_4.png";
import img5 from "../../assets/Event-Gallery_5.png";
import img6 from "../../assets/Event-Gallery_6.png";

// ADD THIS COMPLETE CODE HERE 👇
const cards = [
  {
    title: "Every day of meaning",
    description:
      "We deliver innovative solutions that shape the industry while providing opportunities to give back.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
      >
        <rect
          x="8"
          y="12"
          width="48"
          height="44"
          rx="4"
          stroke="#C85A1A"
          strokeWidth="2.5"
        />
        <line
          x1="8"
          y1="24"
          x2="56"
          y2="24"
          stroke="#C85A1A"
          strokeWidth="2.5"
        />
        <line
          x1="20"
          y1="8"
          x2="20"
          y2="18"
          stroke="#C85A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="8"
          x2="44"
          y2="18"
          stroke="#C85A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="40" r="10" stroke="#C85A1A" strokeWidth="2" />
        <path
          d="M28 40 L31 43 L37 37"
          stroke="#C85A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: "Career Development",
    description:
      "We hire talent, offering impactful projects and personalized development for continuous growth.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
        <circle cx="32" cy="14" r="6" stroke="#C85A1A" strokeWidth="2.5" />
        <line
          x1="32"
          y1="20"
          x2="32"
          y2="34"
          stroke="#C85A1A"
          strokeWidth="2.5"
        />
        <rect
          x="10"
          y="40"
          width="10"
          height="16"
          rx="1"
          stroke="#C85A1A"
          strokeWidth="2"
        />
        <rect
          x="27"
          y="32"
          width="10"
          height="24"
          rx="1"
          stroke="#C85A1A"
          strokeWidth="2"
        />
        <rect
          x="44"
          y="24"
          width="10"
          height="32"
          rx="1"
          stroke="#C85A1A"
          strokeWidth="2"
        />
      </svg>
    ),
  },

  {
    title: "Activate Potential",
    description:
      "Diversity and inclusion drive innovation, empowering our team to succeed and create breakthroughs.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
        <circle cx="26" cy="28" r="14" stroke="#C85A1A" strokeWidth="2.5" />
        <circle cx="26" cy="22" r="5" stroke="#C85A1A" strokeWidth="2" />
        <circle cx="48" cy="22" r="8" stroke="#C85A1A" strokeWidth="2" />
      </svg>
    ),
  },

  {
    title: "A Culture of Openness",
    description:
      "We foster an open environment where questions are encouraged, and contributions matter more than titles.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width="64" height="64">
        <circle cx="32" cy="32" r="10" stroke="#C85A1A" strokeWidth="2.5" />
        <circle cx="12" cy="20" r="5" stroke="#C85A1A" strokeWidth="2" />
        <circle cx="52" cy="20" r="5" stroke="#C85A1A" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function AboutCompany() {
  const coreValues = [
    {
      id: 1,
      title: "Ownership Mentality",
      description: "We act as partners, driving shared success.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
          {/* Left person head */}
          <circle cx="13" cy="9" r="3" stroke="#E8682A" strokeWidth="1.6" />
          {/* Right person head */}
          <circle cx="27" cy="9" r="3" stroke="#E8682A" strokeWidth="1.6" />

          {/* Left person body */}
          <path
            d="M13 12.5v10"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Right person body */}
          <path
            d="M27 12.5v10"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Left person left arm */}
          <path
            d="M13 15.5l-4 3"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Left person right arm reaching to center */}
          <path
            d="M13 15.5l4.5 3"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Right person right arm */}
          <path
            d="M27 15.5l4 3"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Right person left arm reaching to center */}
          <path
            d="M27 15.5l-4.5 3"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Hands meeting at center */}
          <path
            d="M17.5 18.5l5 0"
            stroke="#E8682A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Left person left leg */}
          <path
            d="M13 22.5l-3 7"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Left person right leg */}
          <path
            d="M13 22.5l3 7"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Right person left leg */}
          <path
            d="M27 22.5l-3 7"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Right person right leg */}
          <path
            d="M27 22.5l3 7"
            stroke="#E8682A"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
      col: "left",
    },
    {
      id: 2,
      title: "Innovation",
      description: "Fearless problem-solving for groundbreaking results",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
          <rect
            x="6"
            y="8"
            width="24"
            height="18"
            rx="2"
            stroke="#E8682A"
            strokeWidth="1.8"
          />
          <path d="M6 22h28" stroke="#E8682A" strokeWidth="1.8" />
          <path d="M15 30h10M20 26v4" stroke="#E8682A" strokeWidth="1.8" />
        </svg>
      ),
      col: "left",
    },
    {
      id: 3,
      title: "Client Focus",
      description: "Empowering clients to achieve peak performance.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
          <circle cx="20" cy="16" r="6" stroke="#E8682A" strokeWidth="1.8" />
          <path
            d="M10 34c0-5.5 4.5-10 10-10s10 4.5 10 10"
            stroke="#E8682A"
            strokeWidth="1.8"
          />
        </svg>
      ),
      col: "left",
    },
    {
      id: 4,
      title: "Integrity",
      description: "Building trust through honesty and transparency.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
          <path
            d="M20 6l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
            stroke="#E8682A"
            strokeWidth="1.8"
          />
        </svg>
      ),
      col: "left",
    },
    {
      id: 5,
      title: "Growth",
      description: "Continuous learning and development for growth.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
          <circle cx="20" cy="14" r="5" stroke="#E8682A" strokeWidth="1.8" />
          <path
            d="M12 32c0-4 3.6-7 8-7s8 3 8 7"
            stroke="#E8682A"
            strokeWidth="1.8"
          />
        </svg>
      ),
      col: "right",
    },
    {
      id: 6,
      title: "People-First",
      description: "Prioritizing well-being for a thriving team.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
          <circle cx="12" cy="14" r="4" stroke="#E8682A" />
          <circle cx="28" cy="14" r="4" stroke="#E8682A" />
          <circle cx="20" cy="12" r="4" stroke="#E8682A" />
        </svg>
      ),
      col: "right",
    },
    {
      id: 7,
      title: "Collaboration",
      description: "Fostering teamwork and a fun environment.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
          {/* People */}
          <circle cx="14" cy="11" r="3" stroke="#E8682A" strokeWidth="1.5" />
          <circle cx="20" cy="8.5" r="3" stroke="#E8682A" strokeWidth="1.5" />
          <circle cx="26" cy="11" r="3" stroke="#E8682A" strokeWidth="1.5" />

          {/* Group body */}
          <path
            d="M10 21c0-3 2.5-5 5-5h10c2.5 0 5 2 5 5"
            stroke="#E8682A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Handshake */}
          <path
            d="M14 24l3 2.5c1 .8 2.2.8 3.2 0L23 24"
            stroke="#E8682A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M12 23l3 2M28 23l-3 2"
            stroke="#E8682A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Left hand */}
          <path
            d="M10 22l3 2.5"
            stroke="#E8682A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Right hand */}
          <path
            d="M30 22l-3 2.5"
            stroke="#E8682A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      col: "right",
    },
  ];

  //section 5
  const [openGallery, setOpenGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [img1, img2, img3, img4, img5, img6];

  const handleOpenGallery = (index) => {
    setSelectedImage(index);
    setOpenGallery(true);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, #0b2d45, #7d96a5)",
          minHeight: "70vh",
          color: "white",
          textAlign: "center",
          pt: {
            xs: 14,
            md: 18,
          },
          pb: {
            xs: 0.2,
            md: 32,
          },
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Heading Container */}
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              fontFamily: "Poppins, sans-serif",
              mb: 3,
              letterSpacing: "1px",
            }}
          >
            THE CUSTOMER IS OUR FIRST PRIORITY
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "42px",
                md: "52px",
              },
              fontWeight: 300,
              lineHeight: 1.1,
              fontFamily: "Poppins, sans-serif",
              maxWidth: "1100px",
              mx: "auto",
            }}
          >
            Empowering Organizations with
            <br />
            Cutting-Edge GIS Technology
          </Typography>
        </Container>

        {/* BIG IMAGE */}
        <Box
          component="img"
          src={GeospatialAdvisoryConsultancy}
          alt="About Company"
          sx={{
            width: {
              xs: "85%",
              md: "80%",
            },

            /* BIG WIDTH */
            maxWidth: "1600px",

            /* Full image visible */
            height: "auto",
            objectFit: "contain",

            borderRadius: "18px",
            boxShadow: "0 15px 45px rgba(0,0,0,0.25)",

            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",

            /* 70% top section + 30% bottom section */
            bottom: {
              xs: "-90px",
              md: "-180px",
            },

            zIndex: 10,

            animation: "moveUp 1.2s ease forwards",

            "@keyframes moveUp": {
              from: {
                transform: "translateX(-50%) translateY(100px)",
                opacity: 0,
              },
              to: {
                transform: "translateX(-50%) translateY(0px)",
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          pt: {
            xs: 18,
            md: 30,
          },
          pb: 12,
          px: {
            xs: 3,
            md: 8,
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "85%", md: "80%" },
            maxWidth: "1600px",
            mx: "auto",

            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: {
              xs: 8,
              md: 10,
            },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1 }}>
            {/* Vision */}
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column", // mobile
                  sm: "row", // ipad/tablet
                  lg: "row", // desktop
                },
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
                alignItems: {
                  xs: "center",
                  sm: "flex-start",
                },
                gap: 3,
                pb: 5,
              }}
            >
              {/* Vision Icon */}
              <Box
                sx={{
                  width: { xs: 95, md: 115 },
                  height: { xs: 95, md: 115 },
                  minWidth: { xs: 95, md: 115 },
                  borderRadius: "50%",
                  border: "2px solid #f15a22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent", // removes black bg
                }}
              >
                <svg
                  viewBox="0 0 120 120"
                  width="155"
                  height="155"
                  fill="none"
                  style={{ background: "transparent" }}
                >
                  <path d="M38 42V32H48" stroke="#f15a22" strokeWidth="2.5" />
                  <path d="M72 32H82V42" stroke="#f15a22" strokeWidth="2.5" />
                  <path d="M82 78V88H72" stroke="#f15a22" strokeWidth="2.5" />
                  <path d="M48 88H38V78" stroke="#f15a22" strokeWidth="2.5" />

                  <circle
                    cx="60"
                    cy="60"
                    r="18"
                    stroke="#f15a22"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M43 60C47 52 54 48 60 48C66 48 73 52 77 60C73 68 66 72 60 72C54 72 47 68 43 60Z"
                    stroke="#f15a22"
                    strokeWidth="2.5"
                  />

                  <circle
                    cx="60"
                    cy="60"
                    r="5"
                    stroke="#f15a22"
                    strokeWidth="2.5"
                  />
                </svg>
              </Box>

              {/* Vision Text */}
              <Box>
                <Typography
                  sx={{
                    color: "#f15a22",
                    fontSize: { xs: "20px", md: "30px" },
                    fontWeight: 300,
                    fontFamily: "Poppins, sans-serif",
                    mb: 2,
                  }}
                >
                  Vision
                </Typography>

                <Typography
                  sx={{
                    color: "#052b4f",
                    fontSize: { xs: "14px", md: "18px" },
                    lineHeight: 1.7,
                    fontFamily: "Poppins, sans-serif",
                    maxWidth: "600px",
                  }}
                >
                  To Accelerate using the power of Location intelligence and
                  Transinnovate every organization across the globe.
                </Typography>
              </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ borderBottom: "1px solid #d6d6d6", my: 5 }} />

            {/* Mission */}
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column", // mobile
                  sm: "row", // ipad/tablet
                  lg: "row", // desktop
                },
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
                alignItems: {
                  xs: "center",
                  sm: "flex-start",
                },
                gap: 3,
              }}
            >
              {/* Mission Icon */}
              <Box
                sx={{
                  width: { xs: 95, md: 115 },
                  height: { xs: 95, md: 115 },
                  minWidth: { xs: 95, md: 115 },
                  borderRadius: "50%",
                  border: "2px solid #f15a22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent", // removes black bg
                }}
              >
                <svg
                  viewBox="0 0 120 120"
                  width="155"
                  height="155"
                  fill="none"
                  style={{ background: "transparent" }}
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="18"
                    stroke="#f15a22"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="10"
                    stroke="#f15a22"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="60"
                    y1="38"
                    x2="60"
                    y2="82"
                    stroke="#f15a22"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="38"
                    y1="60"
                    x2="82"
                    y2="60"
                    stroke="#f15a22"
                    strokeWidth="2.5"
                  />
                  <path d="M52 68L73 47" stroke="#f15a22" strokeWidth="3" />
                  <path d="M66 47H74V55" stroke="#f15a22" strokeWidth="3" />
                  <circle cx="60" cy="60" r="3" fill="#f15a22" />
                </svg>
              </Box>

              {/* Mission Text */}
              <Box>
                <Typography
                  sx={{
                    color: "#f15a22",
                    fontSize: { xs: "20px", md: "30px" },
                    fontWeight: 300,
                    fontFamily: "Poppins, sans-serif",
                    mb: 2,
                  }}
                >
                  Mission
                </Typography>

                <Typography
                  sx={{
                    color: "#052b4f",
                    fontSize: { xs: "14px", md: "18px" },
                    lineHeight: 1.7,
                    fontFamily: "Poppins, sans-serif",
                    maxWidth: "600px",
                  }}
                >
                  Delivering exceptional software solutions through innovation,
                  partnership, and a relentless pursuit of excellence.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              flex: 1,
              pt: {
                lg: 2,
              },
            }}
          >
            <Typography
              sx={{
                color: "#052b4f",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                lineHeight: 1.9,
                fontFamily: "Poppins, sans-serif",
                mb: 5,
              }}
            >
              Founded in December 2015, CodeRize Technologies has established
              itself as a leading provider in the{" "}
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                GIS
              </Box>{" "}
              industry. We offer innovative geospatial products and services to
              both public and private sector clients, including several esteemed
              organizations. Headquartered in Pune, India, our dedicated team of
              GIS Developers, and Consultants is committed to transforming
              businesses through advanced spatial solutions.
            </Typography>

            <Typography
              sx={{
                color: "#052b4f",
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                lineHeight: 1.9,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              At CodeRize, we are driven by a passion for discovering better,
              more valuable ways to address real-world challenges.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Section 3 */}
      <Box
        sx={{
          bgcolor: "#0b2d45",
          py: 4,
          px: { xs: 2, md: 6 },
          fontFamily: "Poppins, sans-serif",

          "@keyframes fadeClear": {
            from: {
              opacity: 0,
              filter: "blur(12px)",
              transform: "translateY(40px)",
            },
            to: {
              opacity: 1,
              filter: "blur(0px)",
              transform: "translateY(0px)",
            },
          },

          "@keyframes lineGrow": {
            from: {
              height: 0,
            },
            to: {
              height: "85px", // increase/decrease line between diamonds
            },
          },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            color: "#E8682A",
            fontWeight: 400,
            textAlign: "center",
            mb: 8,
            letterSpacing: 1,
          }}
        >
          Core Values
        </Typography>

        {/* Two Columns */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 10 },
            maxWidth: "1100px",
            mx: "auto",
            width: "100%",
          }}
        >
          {/* LEFT COLUMN */}
          <Box sx={{ flex: 1 }}>
            {coreValues
              .filter((v) => v.col === "left")
              .map((v, index, arr) => (
                <Box
                  key={v.id}
                  sx={{
                    display: "flex",
                    gap: 3,
                    mb: 8, // spacing between diamonds

                    opacity: 0,
                    filter: "blur(12px)",
                    transform: "translateY(40px)",
                    animation: "fadeClear 0.8s ease forwards",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {/* Diamond + Animated Line */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 64,
                      display: "flex",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {/* Diamond */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: "black",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        transform: "rotate(45deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      <Box sx={{ transform: "rotate(-45deg)" }}>{v.icon}</Box>
                    </Box>

                    {/* Line under diamond */}
                    {index !== arr.length - 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 64,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "1px",
                          height: 0,
                          bgcolor: "white",

                          animation: "lineGrow 0.4s ease forwards",
                          animationDelay: `${index * 0.5 + 0.35}s`,
                        }}
                      />
                    )}
                  </Box>

                  {/* Text */}
                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      {v.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        maxWidth: 340,
                      }}
                    >
                      {v.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>

          {/* RIGHT COLUMN */}
          <Box sx={{ flex: 1 }}>
            {coreValues
              .filter((v) => v.col === "right")
              .map((v, index, arr) => (
                <Box
                  key={v.id}
                  sx={{
                    display: "flex",
                    gap: 3,
                    mb: 8,

                    opacity: 0,
                    filter: "blur(12px)",
                    transform: "translateY(40px)",
                    animation: "fadeClear 0.8s ease forwards",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {/* Diamond + Animated Line */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 64,
                      display: "flex",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {/* Diamond */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        bgcolor: "black",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        transform: "rotate(45deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      <Box sx={{ transform: "rotate(-45deg)" }}>{v.icon}</Box>
                    </Box>

                    {/* Line under diamond */}
                    {index !== arr.length - 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 64,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "1px",
                          height: 0,
                          bgcolor: "white",

                          animation: "lineGrow 0.4s ease forwards",
                          animationDelay: `${index * 0.5 + 0.35}s`,
                        }}
                      />
                    )}
                  </Box>

                  {/* Text */}
                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {v.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14.5,
                        lineHeight: 1.6,
                        maxWidth: 340,
                      }}
                    >
                      {v.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>

      {/* Section 4 */}
      <Box
        sx={{
          backgroundColor: "#f0f2f5",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 6 },
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 3,
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "42px" },
              fontWeight: 700,
              color: "#1a2c4e",
              fontFamily: "Inter, sans-serif",
            }}
          >
            How We Work
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#4a5568",
              maxWidth: "480px",
              lineHeight: 1.8,
              textAlign: { xs: "left", md: "right" },
              fontFamily: "Inter, sans-serif",
            }}
          >
            We align strategies with your goals, ensuring collaboration and
            allowing you to focus on priorities.
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            borderTop: "1px solid #c8d0dc",
            mb: 5,
            maxWidth: "1400px",
            mx: "auto",
          }}
        />

        {/* Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: 3,
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {cards.map((card, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",

                "&:hover": {
                  boxShadow: "0 8px 32px rgba(200,90,26,0.15)",

                  /* Increase line width on hover */
                  "& .accent-line": {
                    width: "70px",
                  },
                },
              }}
            >
              {/* Icon */}
              <Box sx={{ mb: 2 }}>{card.icon}</Box>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1a2c4e",
                  mb: 1.5,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {card.title}
              </Typography>

              {/* Accent Line */}
              <Box
                className="accent-line"
                sx={{
                  width: "36px",
                  height: "3px",
                  backgroundColor: "#C85A1A",
                  borderRadius: "2px",
                  mb: 2,
                  transition: "width 0.35s ease",
                }}
              />

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#5a6577",
                  lineHeight: 1.8,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {card.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Section 5 - Life @ Coderize */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 5 },
          maxWidth: "1400px",
          mx: "auto",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "30px", md: "42px" },
            fontWeight: 500,
            color: "#1a2c4e",
            mb: 3,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Life @ Coderize
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "18.5px",
            color: "#1a2c4e",
            lineHeight: 1.5,
            maxWidth: "1100px",
            mx: "auto",
            mb: 5,
            fontFamily: "Inter, sans-serif",
          }}
        >
          At Coderize, we believe that a thriving team is built on a strong
          foundation of work-life balance. By prioritizing self-care and
          flexible work arrangements, we empower our employees to excel in both
          their personal and professional lives. This commitment to well-being
          translates into increased job satisfaction, productivity, and
          creativity, ultimately delivering exceptional results for our clients.
          When our team is happy and healthy, they are better equipped to tackle
          complex challenges and deliver innovative solutions.
        </Typography>

        {/* Photo Grid */}
        <Box
          sx={{
            width: "100%",
          }}
        >
          {/* Desktop View */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },
              gridTemplateColumns: "1fr 1.15fr 1.15fr 1fr",
              gap: "10px",
              width: "100%",
              alignItems: "stretch",
            }}
          >
            {/* Column 1 */}
            <Box
              sx={{
                height: 500,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={img1}
                onClick={() => handleOpenGallery(0)}
                alt="event 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s ease",
                  animation: "slideFront 1s ease",

                  "&:hover": {
                    filter: "brightness(0.7)",
                  },
                }}
              />
            </Box>

            {/* Column 2 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                height: 620,
              }}
            >
              <Box
                component="img"
                src={img6}
                onClick={() => handleOpenGallery(5)}
                alt="event 6"
                sx={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  transition: "0.5s ease",

                  "&:hover": {
                    filter: "brightness(0.7)",
                  },
                }}
              />

              <Box
                component="img"
                src={img4}
                onClick={() => handleOpenGallery(3)}
                alt="event 4"
                sx={{
                  width: "100%",
                  height: "50%",
                  // objectFit: "cover",
                  transition: "0.5s ease",

                  "&:hover": {
                    filter: "brightness(0.7)",
                  },
                }}
              />
            </Box>

            {/* Column 3 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                height: 620,
              }}
            >
              <Box
                component="img"
                component="img"
                src={img5}
                onClick={() => handleOpenGallery(4)}
                sx={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  transition: "0.5s ease",

                  "&:hover": {
                    filter: "brightness(0.7)",
                  },
                }}
              />

              <Box
                component="img"
                component="img"
                src={img2}
                onClick={() => handleOpenGallery(1)}
                sx={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  transition: "0.5s ease",

                  "&:hover": {
                    filter: "brightness(0.7)",
                  },
                }}
              />
            </Box>

            {/* Column 4 */}
            <Box
              sx={{
                height: 500,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                component="img"
                src={img3}
                onClick={() => handleOpenGallery(2)}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s ease",

                  "&:hover": {
                    filter: "brightness(0.7)",
                  },
                }}
              />
            </Box>
          </Box>

          {/* iPad + Mobile View */}
          <Box
            sx={{
              display: {
                xs: "grid",
                md: "none",
              },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: "10px",
              width: "100%",
            }}
          >
            {/* Column 1 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[img1, img3].map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`left-${index}`}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 220,
                      sm: 415,
                    },
                    objectFit: "cover",
                    transition: "0.5s ease",
                    animation: "slideFront 1s ease",

                    "&:hover": {
                      filter: "brightness(0.7)",
                    },
                  }}
                />
              ))}
            </Box>

            {/* Column 2 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {[img6, img5, img4, img2].map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  alt={`right-${index}`}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 105,
                      sm: 230,
                    },
                    objectFit: "cover",
                    transition: "0.5s ease",
                    animation: "slideFront 1s ease",

                    "&:hover": {
                      filter: "brightness(0.7)",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Animation */}
          <style>
            {`
      @keyframes slideFront {
        from {
          transform: translateY(70px);
          opacity: 0;
        }
        to {
          transform: translateY(0px);
          opacity: 1;
        }
      }
    `}
          </style>
        </Box>
      </Box>

      {/* Image Gallery Modal */}
      <Dialog
        open={openGallery}
        onClose={handleCloseGallery}
        fullScreen
        sx={{
          "& .MuiDialog-paper": {
            background: "rgba(0,0,0,0.95)",
            overflow: "hidden",
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleCloseGallery}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 20,
            color: "#fff",
          }}
        >
          <CloseIcon sx={{ fontSize: 35 }} />
        </IconButton>

        {/* Previous */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 15,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            zIndex: 20,
            background: "rgba(255,255,255,0.1)",

            "&:hover": {
              background: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 50 }} />
        </IconButton>

        {/* Image */}
        <Box
          sx={{
            width: "100%",
            height: "900px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <Box
            component="img"
            src={galleryImages[selectedImage]}
            alt="gallery"
            sx={{
              maxWidth: "95%",
              maxHeight: "90vh",
              objectFit: "contain",
              animation: "fadeImage 0.3s ease",
            }}
          />
        </Box>

        {/* Next */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 15,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            zIndex: 20,
            background: "rgba(255,255,255,0.1)",

            "&:hover": {
              background: "rgba(255,255,255,0.2)",
            },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 50 }} />
        </IconButton>

        <style>
          {`
      @keyframes fadeImage {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `}
        </style>
      </Dialog>
    </>
  );
}
