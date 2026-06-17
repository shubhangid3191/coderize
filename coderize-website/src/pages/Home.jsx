import React, { useEffect, useState, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { href, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "swiper/css";
import "swiper/css/pagination";

import gisBanner from "../assets/gis-banner1.png";
import appDev from "../assets/Application-Development-Services-2.png";
import azureCloud from "../assets/Azure-Cloud-Services-3.png";
import droneServices from "../assets/Drone-Services-4.png";

import gisdevelopemt from "../assets/gis-developemt.png";
import locationIntelligence from "../assets/location-intelligence.jpg";
import advisory from "../assets/Advisory.png";
import technicalSupport from "../assets/TechnicalSupport.jpg";
import droneservices from "../assets/Drone-Services.png";
import applicationdevelopment from "../assets/Application-Development.png";
import azure from "../assets/azure.png";

import logo01 from "../assets/logos-01.png";
import logo02 from "../assets/logos-02.png";
import logo03 from "../assets/logos-03.png";
import logo04 from "../assets/logos-04.png";
import logo05 from "../assets/logos-05.png";
import logo06 from "../assets/logos-06.png";
import logo07 from "../assets/logos-07.png";
import logo08 from "../assets/logos-08.png";
import logo09 from "../assets/logos-09.png";
import logo10 from "../assets/logos-10.png";
import logo11 from "../assets/logos-11.png";
import logo12 from "../assets/logos-12.png";
import logo13 from "../assets/logos-13.png";
import logo14 from "../assets/logos-14.png";
import logo15 from "../assets/logos-15.png";
import logo16 from "../assets/logos-16.png";
import logo17 from "../assets/logos-17.png";
import logo18 from "../assets/logos-18.png";
import logo19 from "../assets/logos-19.png";
import logo20 from "../assets/logos-20.png";
import logo21 from "../assets/logos-21.png";
import logo22 from "../assets/logos-22.png";

import Client01 from "../assets/Client-01.png";
import Client02 from "../assets/Client-02.png";
import Client04 from "../assets/Client-04.png";
import Client05 from "../assets/Client-05.png";
import Client06 from "../assets/Client-06.png";
import Client07 from "../assets/Client-07.png";
import Client08 from "../assets/Client-08.png";
import Client09 from "../assets/Client-09.png";
import Client10 from "../assets/Client-10.png";
import Client11 from "../assets/Client-11.png";
import Client12 from "../assets/Client-12.png";
import Client13 from "../assets/Client-13.png";
import Client14 from "../assets/Client-14.png";
import Client15 from "../assets/Client-15.png";
import Client16 from "../assets/Client-16.png";

import Partner01 from "../assets/Social-Bay-logo-01.png";
import Partner02 from "../assets/black-logo-2.png";

import CaseStudy1 from "../assets/Casestudies1.png";
import CaseStudy2 from "../assets/Casestudies2.png";
import CaseStudy3 from "../assets/Casestudies3.png";
import CaseStudy4 from "../assets/Casestudies4.png";
import CaseStudy5 from "../assets/Casestudies5.png";
import CaseStudy6 from "../assets/Casestudies6.png";
import CaseStudy7 from "../assets/Casestudies7.png";
import CaseStudy8 from "../assets/Casestudies8.png";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";

const slides = [
  {
    image: gisBanner,
    title: "Equip Your Business With\nAdvanced Geo-Tech Solutions",
    name: "GEOSPATIAL SERVICES",
    href: "Geospatial",
  },
  {
    image: appDev,
    title: "Build Future-Ready\nApplications With CodeRize",
    name: "APPLICATION DEVELOPMENT",
    href: "/ApplicationDevelopment",
  },
  {
    image: azureCloud,
    title: "Maximize Cloud Efficiency With \n Expert Azure Solutions",
    name: "AZURE CONSULTING SERVICES",
    href: "/AzureConsulting",
  },
  {
    image: droneServices,
    title: "Boost Efficiency With \n Drone-Driven Innovations",
    name: "DRONE SERVICES",
    href: "/drone-services",
  },
];

const items = [
  "EX-ESRI Professionals",
  "Custom Software Developers",
  "GIS Consultants",
  "Drone Mapping Specialists",
  "EX-ESRI Professionals",
  "Custom Software Developers",
  "GIS Consultants",
  "Drone Mapping Specialists",
];

const Counter = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "2.5rem",
          fontWeight: 400,
          lineHeight: 2.0,
        }}
      >
        {end % 1 === 0 ? Math.round(count) : count.toFixed(1)}
        {suffix}
      </Typography>

      <Typography
        sx={{
          fontSize: "1.3rem",
          color: "#232728",
          whiteSpace: "pre-line",
          lineHeight: 1.5,
          textAlign: "center",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const logos = [
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
  logo09,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
];

const row1 = logos.slice(0, 8);
const row2 = logos.slice(8, 15);
const row3 = logos.slice(15, 22);

const clients = [
  { id: 1, src: Client01, alt: "Client 01" },
  { id: 2, src: Client02, alt: "Client 02" },
  { id: 4, src: Client04, alt: "Client 04" },
  { id: 5, src: Client05, alt: "Client 05" },
  { id: 6, src: Client06, alt: "Client 06" },
  { id: 7, src: Client07, alt: "Client 07" },
  { id: 8, src: Client08, alt: "Client 08" },
  { id: 9, src: Client09, alt: "Client 09" },
  { id: 10, src: Client10, alt: "Client 10" },
  { id: 11, src: Client11, alt: "Client 11" },
  { id: 12, src: Client12, alt: "Client 12" },
  { id: 13, src: Client13, alt: "Client 13" },
  { id: 14, src: Client14, alt: "Client 14" },
  { id: 15, src: Client15, alt: "Client 15" },
  { id: 16, src: Client16, alt: "Client 16" },
];

const allClients = [...clients, ...clients];

const partners = [Partner01, Partner02];

const caseStudies = [
  {
    id: 1,
    image: CaseStudy1,
    tags: ["Agriculture", "Geospatial", "Malaysia", "Private Sector"],
    title: "Synlog",
    description:
      "Automated Satellite Processing for Precision Monitoring of Palm Tree Estate Management",
    href: "/synlog",
  },
  {
    id: 2,
    image: CaseStudy2,
    tags: ["Geospatial", "India", "Public Sector", "Utility"],
    title: "Solapur Municipal Corporation",
    description:
      "Customized Survey Solutions for Optimizing Water Billing Operations",
    href: "/Solapur",
  },
  {
    id: 3,
    image: CaseStudy3,
    tags: ["Agriculture", "Geospatial", "Malaysia", "Private Sector"],
    title: "Synlog",
    description:
      "Automated Satellite Processing for Precision Monitoring of Palm Tree Estate Management",
    href: "/Ministry",
  },
  {
    id: 4,
    image: CaseStudy4,
    tags: ["Education", "Geospatial", "India", "Public Sector"],
    title: "Maharashtra Knowledge Corporation Ltd.",
    description:
      "WMS Service Development for Forest Encroachment Detection and Monitoring",
    href: "/Maharashtra",
  },
  {
    id: 5,
    image: CaseStudy5,
    tags: ["Forestry", "Geospatial", "India", "Public Sector"],
    title: "Thane Forest Dept., Maharashtra",
    description:
      "Digitizing Forest Stock from Handwritten Maps for Enhanced Geospatial Data Management",
    href: "/Thane",
  },
  {
    id: 6,
    image: CaseStudy6,
    tags: ["Agriculture", "Geospatial", "India", "Public Sector"],
    title: "Agriculture Dept., Maharashtra",
    description:
      "GIS-Based Mobile and Web Solutions for Scalable Agricultural Training and Management",
    href: "/Agriculture",
  },
  {
    id: 7,
    image: CaseStudy7,
    tags: ["Geospatial", "India", "Public Sector", "Utility"],
    title: "Soil & Water Conservation Dept., Maharashtra",
    description:
      "GIS-Driven Dashboard for Asset Optimization and Cost Reduction in Water Conservation",
    href: "/Soil",
  },
  {
    id: 8,
    image: CaseStudy8,
    tags: ["Agriculture", "Geospatial", "India", "Public Sector"],
    title: "Agriculture Department, Maharashtra",
    description:
      "GeoSets Collector for Post-Monsoon Crop Damage Assessment in Maharashtra",
    href: "/ADepartment",
  },
];

const testimonials = [
  {
    id: 1,
    initials: "DM",
    quote:
      "CodeRize's abilities and commitment to our project are highly commendable. The project was delivered within the stipulated time frame. We also appreciate the support that we received even after the completion of the project.",
    name: "Dr. Pritam Wanjari",
    role: "GIS Expert, Soil and Water Conservation Dept. of Maharashtra",
  },
  {
    id: 2,
    initials: "RS",
    quote:
      "A technically resourceful team. CodeRize delivered what they promised. Definitely our trusted technology partners.",
    name: "Mr. Sameer Pandey",
    role: "Director, Maharashtra Knowledge Corporation Limited",
  },
  {
    id: 3,
    initials: "AP",
    quote:
      "The CodeRize team exceeded expectations by delivering a seamless and highly experiential virtual training. Their knowledgeable mentors were prompt in addressing all queries, ensuring a thorough understanding of the material. I highly recommend their services for any training needs.",
    name: "Mrs. Daya Makhwana",
    role: "HR Leader, TomTom India Pvt. Ltd.",
  },
  {
    id: 4,
    initials: "RS",
    quote:
      "Working with CodeRize Technologies has been a game-changer for our organization. Their innovative OCR and automation solution streamlined our document processing and significantly enhanced our operational efficiency. I commend their team's professionalism and commitment to delivering a tailored solution that truly meets our needs.",
    name: "Mr. Mohsin Panhalkar",
    role: "Executive Director, Blessedtree Softwares Pvt. Ltd.",
  },
  {
    id: 5,
    initials: "AP",
    quote:
      "CodeRize provided exceptional technical consultancy and developed an innovative GIS solution for one of our esteemed clients. This significantly reduced valuable man-hours. This solution has led to a marked improvement in operational processes, enabling the team to focus more on strategic initiatives. We highly recommend CodeRize for their professionalism, outstanding expertise, and look forward to collaborating with them again.",
    name: "Mr. Arvind Sharma",
    role: "Synergy Log-In Systems Sdn Bhd",
  },
];

const blogs = [
  {
    id: 1,
    date: "July 15, 2024",
    title:
      "Driving Supply Chain Excellence with Geospatial Intelligence: Trends and Benefits",
    image: blog1,
    href: "Blog1",
  },
  {
    id: 2,
    date: "June 23, 2024",
    title:
      "KnowAge and GIS: Powering Data-Driven Decision-Making in Smart Cities",
    image: blog2,
    href: "Blog2",
  },
  {
    id: 3,
    date: "May 10, 2024",
    title:
      "3D GIS for Real Estate – CodeRize's Approach to Property Development and Urban Growth",
    image: blog3,
    href: "Blog3",
  },
  {
    id: 4,
    date: "April 5, 2024",
    title:
      "How GIS Analytics is Transforming Urban Planning and Infrastructure",
    image: blog4,
    href: "Blog4",
  },
];

function Home() {
  const [activeMenu, setActiveMenu] = useState("Geospatial");
  const [activeServiceItem, setActiveServiceItem] = useState("GIS Development");

  const geospatialItems = [
    "GIS Development",
    "Location Intelligence",
    "Advisory",
    "Technical Support",
    "Drone Services",
  ];

  const softwareItems = [
    "Application Development",
    "Azure Consulting",
    "Advisory",
    "Technical Support",
  ];

  const trackRef = useRef(null);

  const [paused, setPaused] = useState(false);
  const [caseActiveIndex, setCaseActiveIndex] = useState(0);

  // Testimonial states
  const [activeT, setActiveT] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const navigate = (dir) => {
    if (animating) return;

    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setActiveT((prev) =>
        dir === "next"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length,
      );

      setAnimating(false);
    }, 350);
  };

  const t = testimonials[activeT];

  useEffect(() => {
    const timer = setInterval(() => {
      setCaseActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 30000);

    return () => clearInterval(timer);
  }, []);

  const visibleStudies = [
    caseStudies[caseActiveIndex % caseStudies.length],
    caseStudies[(caseActiveIndex + 1) % caseStudies.length],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveT((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        sx={{
          "& .hero-name, & .hero-title, & .hero-btn": {
            opacity: 0,
          },

          "& .swiper-pagination": {
            bottom: "40px !important",
          },

          "& .swiper-pagination-bullet": {
            width: "60px",
            height: "3px",
            borderRadius: 0,
            backgroundColor: "rgba(255,255,255,0.4)",
            opacity: 1,
            margin: "0 6px !important",
          },

          "& .swiper-pagination-bullet-active": {
            backgroundColor: "#e8622a",
            width: "80px",
          },

          "& .swiper-slide-active .hero-name": {
            animation: "slideUp 1.5s ease forwards",
          },

          "& .swiper-slide-active .hero-title": {
            animation: "slideUp 2.5s ease forwards",
            animationDelay: "0.50s",
          },

          "& .swiper-slide-active .hero-btn": {
            animation: "slideUp 1.8s ease forwards",
            animationDelay: "2s",
          },

          "@keyframes slideUp": {
            from: {
              opacity: 0,
              transform: "translateY(80px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0)",
            },
          },
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 90000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: "100vh",
                  backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "1400px",
                    width: "90%",
                  }}
                >
                  {/* Category Name */}
                  <Box
                    className="hero-name"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        border: "2px solid #e8622a",
                        backgroundColor: "transparent",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#e8622a",
                        fontWeight: 500,
                        fontSize: {
                          xs: "0.8rem",
                          md: "1rem",
                        },
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      {slide.name}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    className="hero-title"
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      whiteSpace: "pre-line",
                      mb: 4,
                      lineHeight: 1.2,
                      fontSize: {
                        xs: "1.8rem",
                        sm: "2.5rem",
                        md: "3.2rem",
                        lg: "3.8rem",
                      },
                    }}
                  >
                    {slide.title}
                  </Typography>

                  {/* Button */}
                  <Button
                    className="hero-btn"
                    component={Link}
                    to={slide.href}
                    variant="contained"
                    sx={{
                      bgcolor: "#e8622a",
                      px: 4,
                      py: 1.5,
                      borderRadius: "6px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      "&:hover": {
                        bgcolor: "#c94f1c",
                      },
                    }}
                  >
                    READ MORE
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Text Scroll Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#efefef",
          height: "80px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          borderTop: "1px solid #e5e5e5",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            animation: "marquee 50s linear infinite",

            "@keyframes marquee": {
              "0%": {
                transform: "translateX(0)",
              },
              "100%": {
                transform: "translateX(-50%)",
              },
            },
          }}
        >
          {[...items, ...items].map((item, index) => (
            <React.Fragment key={index}>
              <Typography
                sx={{
                  color: "#444",
                  fontSize: {
                    xs: "1.2rem",
                    md: "1.4rem",
                  },
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  mx: 4,
                }}
              >
                {item}
              </Typography>

              <Typography
                sx={{
                  color: "#444",
                  fontSize: "1.2rem",
                  fontWeight: 400,
                }}
              >
                ⊙
              </Typography>
            </React.Fragment>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          py: 8,
          bgcolor: "#fff",
          "@keyframes slideLeft": {
            from: {
              opacity: 0,
              transform: "translateX(-120px)",
            },
            to: {
              opacity: 1,
              transform: "translateX(0)",
            },
          },

          "@keyframes slideRight": {
            from: {
              opacity: 0,
              transform: "translateX(120px)",
            },
            to: {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
      >
        <Box sx={{ maxWidth: "1420px", mx: "auto", px: 6 }}>
          {/* Top Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 6,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                color: "#00335b",
                fontSize: "3rem",
              }}
            >
              Services
            </Typography>

            <Typography
              sx={{
                maxWidth: "950px",
                fontSize: "1.4rem",
                color: "#00335b",
                lineHeight: 1.5,
              }}
            >
              Your trusted partner, offering expertise and cutting-edge
              technology for exceptional GIS services, including application
              development and specialized software solutions.
            </Typography>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              bgcolor: "#d8d8d8",
              mb: 6,
            }}
          />

          <Box sx={{ display: "flex", gap: 8, mb: 8 }}>
            <Typography
              onClick={() => {
                setActiveMenu("Geospatial");
                setActiveServiceItem("GIS Development");
              }}
              sx={{
                fontSize: "1.3rem",
                color: activeMenu === "Geospatial" ? "#e8622a" : "#00335b",
                borderBottom:
                  activeMenu === "Geospatial"
                    ? "2px solid #e8622a"
                    : "1px solid #000",
                pb: 1,
                cursor: "pointer",
                display: "inline-block",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#e8622a",
                  borderBottom: "2px solid #e8622a",
                },
              }}
            >
              Geospatial
            </Typography>

            <Typography
              onClick={() => {
                setActiveMenu("Software");
                setActiveServiceItem("Application Development");
              }}
              sx={{
                fontSize: "1.3rem",
                color: activeMenu === "Software" ? "#e8622a" : "#00335b",
                borderBottom:
                  activeMenu === "Software"
                    ? "2px solid #e8622a"
                    : "1px solid #000",
                pb: 1,
                cursor: "pointer",
                display: "inline-block",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#e8622a",
                  borderBottom: "2px solid #e8622a",
                },
              }}
            >
              Software
            </Typography>
          </Box>

          {/* Content */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "400px 1fr",
              },
              gap: 8,
            }}
          >
            {/* Left Menu */}
            <Box sx={{ animation: "slideLeft 1s ease forwards" }}>
              {(activeMenu === "Geospatial"
                ? geospatialItems
                : softwareItems
              ).map((item, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveServiceItem(item)}
                  //onMouseEnter={() => setActiveServiceItem(item)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 0,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Vertical orange line */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "1px",
                      height: activeServiceItem === item ? "100%" : "0%",
                      bgcolor: "#e8622a",
                      transition: "height 0.3s ease",
                    }}
                  />

                  {/* Text */}
                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      py: 2.5,
                      pl: activeServiceItem === item ? "20px" : "12px",
                      flex: 1,
                      color: activeServiceItem === item ? "#e8622a" : null,
                      fontWeight: activeServiceItem === item ? 500 : 400,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Right Image Card */}
            {(() => {
              const menuData = {
                Geospatial: [
                  {
                    key: "GIS Development",
                    image: gisdevelopemt,
                    title: "GIS Development",
                    description:
                      "We create custom geospatial applications tailored to meet specific business needs, leveraging the latest Esri and open-source technologies.",
                    link: "/GISDevelopment",
                  },
                  {
                    key: "Location Intelligence",
                    image: locationIntelligence,
                    title: "Location Intelligence",
                    description:
                      "Transform raw location data into actionable business insights using advanced spatial analytics and mapping platforms.",
                    link: "/LocationIntelligence",
                  },
                  {
                    key: "Advisory",
                    image: advisory,
                    title: "Advisory",
                    description:
                      "Strategic GIS consulting to help organizations define, implement, and optimize their geospatial technology roadmap.",
                    link: "/Advisory",
                  },
                  {
                    key: "Technical Support",
                    image: technicalSupport,
                    title: "Technical Support",
                    description:
                      "Dedicated expert support to keep your GIS infrastructure running smoothly, from troubleshooting to system upgrades.",
                    link: "/GeospatialTechnicalSupport",
                  },
                  {
                    key: "Drone Services",
                    image: droneservices,
                    title: "Drone Services",
                    description:
                      "High-precision aerial mapping and drone surveys delivering accurate geospatial data for diverse industry applications.",
                    link: "/drone-services",
                  },
                ],
                Software: [
                  {
                    key: "Application Development",
                    image: applicationdevelopment,
                    title: "Application Development",
                    description:
                      "Build future-ready, scalable applications tailored to your business workflows using modern development frameworks.",
                    link: "/ApplicationDevelopment",
                  },
                  {
                    key: "Azure Consulting",
                    image: azure,
                    title: "Azure Consulting",
                    description:
                      "Maximize cloud efficiency with expert Azure architecture, migration, and managed services for enterprise needs.",
                    link: "/AzureConsulting",
                  },
                  {
                    key: "Advisory",
                    image: advisory,
                    title: "Advisory",
                    description:
                      "Technology advisory services to align your software strategy with business goals and future growth.",
                    link: "/SoftwareAdvisory",
                  },
                  {
                    key: "Technical Support",
                    image: technicalSupport,
                    title: "Technical Support",
                    description:
                      "Round-the-clock technical assistance ensuring your software systems stay reliable, secure, and performant.",
                    link: "/SoftwareTechnicalSupport",
                  },
                ],
              };

              const currentItems = menuData[activeMenu];
              const activeItem =
                currentItems.find((i) => i.key === activeServiceItem) ||
                currentItems[0];

              return (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1000px",
                    height: { xs: "220px", md: "460px" },
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  {/* Background Image — key forces remount on change */}
                  <Box
                    key={activeItem.key}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${activeItem.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: "scale(1.05)",
                      transition: "transform 0.5s ease",
                      "@keyframes fadeIn": {
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                      },
                      animation: "fadeIn 0.4s ease forwards",
                      "&:hover": { transform: "scale(1.08)" },
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(0,0,0,0.45)",
                      zIndex: 1,
                    }}
                  />

                  {/* Text Content */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: "50px",
                      bottom: "50px",
                      color: "#fff",
                      zIndex: 2,
                      maxWidth: "700px",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "2.2rem", fontWeight: 700, mb: 2 }}
                    >
                      {activeItem.title}
                    </Typography>

                    <Typography
                      sx={{ fontSize: "1.4rem", lineHeight: 1.4, mb: 4 }}
                    >
                      {activeItem.description}
                    </Typography>

                    <Button
                      component={Link}
                      to={activeItem.link}
                      variant="contained"
                      sx={{
                        bgcolor: "#e8622a",
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        "&:hover": { bgcolor: "#d4511d" },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              );
            })()}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background: "#fff",
          py: 12,
        }}
      >
        {/* First Row */}
        <Box
          sx={{
            maxWidth: "1700px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(5,1fr)",
            },
          }}
        >
          {[
            { end: 3, suffix: "M+", label: "Parcels\nDigitized" },
            { end: 500, suffix: "K+", label: "Assets\nMapped" },
            { end: 100, suffix: "K+", label: "Acres Forests\nDigitized" },
            { end: 2.5, suffix: "K+", label: "Sq. KM Urban\nArea Digitized" },
            { end: 500, suffix: "+", label: "Satellite Images\nProcessed" },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                minHeight: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderBottom: {
                  xs: "1px solid #F26A21",
                  md: "none",
                  fontFamily:
                    "var(--e-global-typography-text-font-family), Sans-serif",
                },

                borderLeft: {
                  md: index === 0 ? "1px solid #F26A21" : "none",
                },

                borderRight: {
                  md: "1px solid #F26A21",
                },
              }}
            >
              <Counter {...item} />
            </Box>
          ))}
        </Box>

        {/* Second Row */}
        <Box
          sx={{
            maxWidth: "1700px",
            mx: "auto",
            mt: 8,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(5,1fr)",
            },
          }}
        >
          {[
            { end: 10, suffix: "+", label: "Industries\nCatered" },
            { end: 15, suffix: "+", label: "Applications\nDeveloped" },
            { end: 20, suffix: "+", label: "Clients\nServed" },
            { end: 95, suffix: "%", label: "Client\nSatisfaction" },
            { end: 100, suffix: "K+", label: "Engaged Active\nUsers" },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                minHeight: "170px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderBottom: {
                  xs: "1px solid #F26A21",
                  md: "none",
                  fontFamily:
                    "var(--e-global-typography-text-font-family), Sans-serif",
                },

                borderLeft: {
                  md: index === 0 ? "1px solid #F26A21" : "none",
                },

                borderRight: {
                  md: "1px solid #F26A21",
                },
              }}
            >
              <Counter {...item} />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          background: "#f5f5f5",
          py: 12,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            maxWidth: "1700px",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6, lg: 10 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "35% 65%",
            },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },
                color: "#000",
                fontWeight: 500,
                mb: 3,
              }}
            >
              TechStack
            </Typography>

            <Typography
              sx={{
                color: "#00335b",
                fontSize: {
                  xs: "1rem",
                  sm: "1.1rem",
                  md: "1.3rem",
                },
                lineHeight: 1.6,
                maxWidth: "550px",
              }}
            >
              Our 25+ in house tech team are skilled in 20+ top technologies
              that help us deliver smart solutions to your needs.
            </Typography>
          </Box>

          {/* RIGHT LOGOS */}
          <Box sx={{ overflow: "hidden" }}>
            {/* ROW 1 */}
            <Box
              sx={{
                display: "flex",
                width: "max-content",
                animation: "scrollLeft 30s linear infinite",
                mb: 10,

                "@keyframes scrollLeft": {
                  from: { transform: "translateX(0)" },
                  to: { transform: "translateX(-50%)" },
                },
              }}
            >
              {[...row1, ...row1].map((logo, i) => (
                <Box
                  key={i}
                  sx={{
                    width: {
                      xs: 90,
                      sm: 110,
                      md: 130,
                      lg: 150,
                    },
                    height: {
                      xs: 40,
                      sm: 45,
                      md: 55,
                    },
                    mx: {
                      xs: 0.5,
                      sm: 1,
                      md: 2,
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{
                      width: "100%",
                      maxWidth: "180px",
                      maxHeight: "100px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* ROW 2 */}
            <Box
              sx={{
                display: "flex",
                width: "max-content",
                animation: "scrollRight 35s linear infinite",
                mb: 10,

                "@keyframes scrollRight": {
                  from: {
                    transform: "translateX(-50%)",
                  },
                  to: {
                    transform: "translateX(0)",
                  },
                },
              }}
            >
              {[...row2, ...row2].map((logo, i) => (
                <Box
                  key={i}
                  sx={{
                    width: {
                      xs: 90,
                      sm: 110,
                      md: 130,
                      lg: 150,
                    },
                    height: {
                      xs: 40,
                      sm: 45,
                      md: 55,
                    },
                    mx: {
                      xs: 0.5,
                      sm: 1,
                      md: 2,
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{
                      width: "100%",
                      maxWidth: "180px",
                      maxHeight: "100px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* ROW 3 */}
            <Box
              sx={{
                display: "flex",
                width: "max-content",
                animation: "scrollLeft 40s linear infinite",
                mb: 10,
              }}
            >
              {[...row3, ...row3].map((logo, i) => (
                <Box
                  key={i}
                  sx={{
                    width: {
                      xs: 90,
                      sm: 110,
                      md: 130,
                      lg: 150,
                    },
                    height: {
                      xs: 40,
                      sm: 45,
                      md: 55,
                    },
                    mx: {
                      xs: 0.5,
                      sm: 1,
                      md: 2,
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{
                      width: "100%",
                      maxWidth: "180px",
                      maxHeight: "100px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/*About us section  */}
      <Box
        sx={{
          background: "linear-gradient(to right, #F6E3D8 40%, #F5F5F5 40%)",
          py: 10,
          borderBottom: "1px solid #cfd8dc",
        }}
      >
        <Box
          sx={{
            maxWidth: "1700px",
            mx: "auto",
            px: { xs: 3, md: 8 },
          }}
        >
          {/* TOP SECTION */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 6, md: 10 },
              alignItems: "start",
            }}
          >
            {/* LEFT */}
            <Box>
              <Typography
                sx={{
                  color: "#f26522",
                  fontSize: "1.5rem",
                  fontFamily:
                    "var(--e-global-typography-secondary-font-family), Sans-serif",
                  mb: 3,
                }}
              >
                ○ About Us
              </Typography>

              <Typography
                sx={{
                  color: "#000",
                  fontSize: {
                    xs: "1rem",
                    md: "2.5rem",
                  },
                  lineHeight: 1.15,
                  fontWeight: 500,
                  maxWidth: "650px",
                  whiteSpace: "pre-line",
                  fontFamily:
                    "var(--e-global-typography-secondary-font-family), Sans-serif",
                }}
              >
                {`Transinnovating businesses
globally with Location
Intelligence`}
              </Typography>
            </Box>

            {/* RIGHT */}
            <Box
              sx={{
                ml: { md: -5 },
              }}
            >
              <Typography
                sx={{
                  color: "#002F5B",
                  fontSize: {
                    xs: "1.2rem",
                    md: "1.4rem",
                  },
                  lineHeight: 1.2,
                  maxWidth: "1150px",
                  fontFamily:
                    "var(--e-global-typography-secondary-font-family), Sans-serif",
                }}
              >
                We deliver services that keep you ahead in technology, turning
                your business intelligence into actionable insights. With over
                15 years of industry experience, our dedicated geospatial
                experts deliver top-tier GIS services using ESRI and open-source
                technologies. We excel in software development, geospatial
                consulting, and system integration for a global clientele.
              </Typography>

              <Button
                component={Link}
                to="/AboutCompany"
                variant="contained"
                sx={{
                  mt: 3,
                  px: 4,
                  py: 1.2,
                  minWidth: "170px",
                  height: "52px",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "4px",
                  backgroundColor: "#F26522",
                  color: "#fff",
                  fontFamily:
                    "var(--e-global-typography-secondary-font-family), sans-serif",
                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#E55A17",
                    boxShadow: "none",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Box>

          {/* SPACER */}
          <Box sx={{ height: { xs: 80, md: 180 } }} />

          {/* CLIENT SECTION */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              alignItems: "center",
              gap: 4,
              pb: 5,
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: {
                  xs: "1rem",
                  md: "2.5rem",
                },
                lineHeight: 1.15,
                fontWeight: 500,
                maxWidth: "650px",
                whiteSpace: "pre-line",
                fontFamily:
                  "var(--e-global-typography-secondary-font-family), Sans-serif",
              }}
            >
              Our Esteemed Clients
            </Typography>

            <Typography
              sx={{
                color: "#002F5B",
                fontSize: {
                  xs: "1.2rem",
                  md: "1.4rem",
                },
                lineHeight: 1.2,
                maxWidth: "1150px",
                fontFamily:
                  "var(--e-global-typography-secondary-font-family), Sans-serif",
              }}
            >
              Serving global clients across industries with tailored solutions,
              driving innovation and excellence in every project.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*Our Clients logos */}
      <Box
        sx={{
          py: 8,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            mt: 10,
            mb: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              animation: "clientScroll 35s linear infinite",

              "@keyframes clientScroll": {
                from: {
                  transform: "translateX(0)",
                },
                to: {
                  transform: "translateX(-50%)",
                },
              },
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <Box
                key={index}
                sx={{
                  flexShrink: 0,
                  width: {
                    xs: 120,
                    md: 180,
                  },
                  height: {
                    xs: 70,
                    md: 100,
                  },
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  //border: "1px solid #eaeaea",
                  borderRadius: "10px",
                  //backgroundColor: "#f8f9fb",
                }}
              >
                <Box
                  component="img"
                  src={client.src}
                  alt={client.alt}
                  sx={{
                    width: "240px",
                    height: "140px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background:
            "linear-gradient(135deg, #c9d6df 0%, #d6e0e8 50%, #b8cdd8 100%)",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 5, md: 8 },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: "0 0 45%",
              maxWidth: "750px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "2.5rem",
                },
                fontWeight: 520,
                color: "#0d2d3e",
                mb: 3,
                fontFamily:
                  "var(--e-global-typography-secondary-font-family), Sans-serif",
              }}
            >
              Our Partners
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  md: "1.3rem",
                },
                color: "#1a3341",
                lineHeight: 1.5,
                fontWeight: 500,
                fontFamily:
                  "var(--e-global-typography-secondary-font-family), Sans-serif",
              }}
            >
              We are proud to collaborate with esteemed partners who share our
              vision for innovation, quality, and excellence. These partnerships
              strengthen our ability to deliver high-impact solutions and foster
              long-term growth. By working together, we aim to unlock new
              opportunities, expand our reach, and create meaningful value. Our
              combined efforts are focused on driving positive change across
              industries and communities we serve.
            </Typography>
          </Box>

          {/* Partner Logos */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-end",
              },
              gap: { xs: 2, md: 3 },
              flexWrap: "wrap",
            }}
          >
            {partners.map((partner, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: 220, md: 250 },
                  height: { xs: 170, md: 250 },
                  //backgroundColor: "#fff",
                  // borderRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ bgcolor: "#fff", py: 10, px: { xs: 2, md: 6 } }}>
        {/* Header */}
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 700,
              color: "#0d2d3e",
            }}
          >
            Case Studies
          </Typography>
          <Typography
            sx={{
              maxWidth: "700px",
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#2c4a5a",
              lineHeight: 1.6,
            }}
          >
            Discover our success stories and see how our geospatial solutions
            turn challenges into business success.
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            bgcolor: "#e0e0e0",
            maxWidth: "1400px",
            mx: "auto",
            mb: 6,
          }}
        />

        {/* Cards — 2 visible, swap on dot click */}
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 3,
          }}
        >
          {visibleStudies.map((study, i) => (
            <Box
              key={`${study.id}-${caseActiveIndex}-${i}`}
              sx={{
                display: "flex",
                bgcolor: "#f5f0ec",
                overflow: "hidden",
                transition: "opacity 0.4s ease",
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={study.image}
                alt={study.title}
                sx={{
                  width: "320px",
                  minWidth: "260px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 1.5,
                }}
              >
                <Typography
                  sx={{
                    color: "#e8622a",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {study.tags}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "#0d2d3e",
                    lineHeight: 1.3,
                  }}
                >
                  {study.title}
                </Typography>

                <Typography
                  sx={{ fontSize: "1rem", color: "#3a4a55", lineHeight: 1.6 }}
                >
                  {study.description}
                </Typography>

                <Typography
                  component={Link}
                  to={study.href}
                  //variant="contained"
                  sx={{
                    color: "#e8622a",
                    // fontWeight: 500,
                    // transition: "0.3s",
                    // position: "relative",

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: "35%",
                      height: "1px",
                      backgroundColor: "#e8622a",
                      transition: "0.3s",
                    },

                    "&:hover": {
                      color: "#e8622a",
                    },

                    "&:hover::after": {
                      width: 0, // line disappears on hover
                    },
                  }}
                >
                  Read More →
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            mt: 5,
          }}
        >
          {caseStudies.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCaseActiveIndex(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "2px solid #e8622a80",
                cursor: "pointer",
                bgcolor:
                  index === caseActiveIndex
                    ? "#e8622a" // Active dot color
                    : "transparent", // Inactive dot color

                transition: "background 0.2s",

                "&:hover": {
                  bgcolor: "#e8622a80",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ── Our Clients Say ── */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #c9d6df 0%, #d6e0e8 50%, #b8cdd8 100%)",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 8 },
        }}
      >
        <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 500,
              color: "#0d2d3e",
              mb: 4,
            }}
          >
            Our Clients Say
          </Typography>

          {/* Big Quote Mark */}
          <Box
            sx={{
              flexShrink: 0,
              mt: 0,
              fontSize: "9rem",
              lineHeight: 1,
              color: "#e8622a",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 900,
              userSelect: "none",
              letterSpacing: "-8px",
            }}
          >
            ❝
          </Box>

          <Box
            sx={{
              p: 4,
              mt: -15,
              ml: 15,
              px: { xs: 3, md: 8 },
              minHeight: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              animation: "slideInRight 0.8s ease",

              "@keyframes slideInRight": {
                from: {
                  opacity: 0,
                  transform: "translateX(150px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },

              // "@keyframes slideInLeft": {
              //   from: {
              //     opacity: 0,
              //     transform: "translateX(-120px)",
              //   },
              //   to: {
              //     opacity: 1,
              //     transform: "translateX(0)",
              //   },
              // },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                color: "#0d2d3e",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              {t.quote}
            </Typography>

            <Typography
              sx={{
                fontWeight: 500,
                color: "#0d2d3e",
                fontSize: "1.1rem",
              }}
            >
              {t.name}
            </Typography>

            <Typography
              sx={{
                color: "#e8622a",
                fontSize: "1rem",
                fontWeight: 500,
                mb: 4,
              }}
            >
              {t.role}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4,
            }}
          >
            {/* Previous Arrow */}
            <Box
              onClick={() => navigate("prev")}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "2px solid #0d2d3e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#0d2d3e",
                fontSize: "1.5rem",
                fontWeight: 700,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#c94f1c",
                  color: "#fff",
                  border: "2px solid #c94f1c",
                },
              }}
            >
              ←
            </Box>

            {/* Next Arrow */}
            <Box
              onClick={() => navigate("next")}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                //bgcolor: "#e8622a",
                border: "2px solid #0d2d3e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#0d2d3e",
                fontSize: "1.5rem",
                fontWeight: 700,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#c94f1c",
                  color: "#fff",
                  borderColor: "#c94f1c",
                },
              }}
            >
              →
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#fff",
          py: 10,
          px: { xs: 2, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 4,
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 500,
              color: "#0d2d3e",
            }}
          >
            Blogs
          </Typography>

          <Typography
            sx={{
              maxWidth: "650px",
              fontSize: "1.1rem",
              color: "#2c4a5a",
              lineHeight: 1.6,
            }}
          >
            Explore the latest trends, insights, and innovations in IT and
            geospatial technology through our expert-driven blogs.
          </Typography>
        </Box>

        <Box
          sx={{
            height: "1px",
            bgcolor: "#e0e0e0",
            mb: 5,
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: 3,
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {blogs.map((blog) => (
            <Box
              key={blog.id}
              sx={{
                border: "1px solid #e5e5e5",
                overflow: "hidden",
                transition: "0.3s",

                // "&:hover": {
                //   transform: "translateY(-5px)",
                //   boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                // },
              }}
            >
              <Box
                component="img"
                src={blog.image}
                alt={blog.title}
                sx={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  transition: "0.4s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              />

              <Box sx={{ p: 3 }}>
                <Typography
                  sx={{
                    color: "#666",
                    fontSize: "0.95rem",
                    mb: 1,
                  }}
                >
                  {blog.date}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "#0d2d3e",
                    lineHeight: 1.5,
                    mb: 2,
                  }}
                >
                  {blog.title}
                </Typography>

                <Link to={`/${blog.href}`} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      transition: "0.3s",
                      position: "relative",

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: -4,
                        width: "35%",
                        height: "1px",
                        backgroundColor: "#e8622a",
                        transition: "0.3s",
                      },

                      "&:hover": {
                        color: "#e8622a",
                      },

                      "&:hover::after": {
                        width: 0, // line disappears on hover
                      },
                    }}
                  >
                    Read More →
                  </Typography>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Home;
