import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import industriesbg from "../assets/industriesbg.jpg";
import ind1 from "../assets/ind1.jpeg";
import ind2 from "../assets/ind2.jpg";
import ind3 from "../assets/ind3.jpeg";
import ind4 from "../assets/ind4.jpeg";
import ind5 from "../assets/ind5.jpeg";
import ind6 from "../assets/ind6.jpeg";
import ind7 from "../assets/ind7.jpeg";
import ind8 from "../assets/ind8.jpeg";
import ind9 from "../assets/ind9.jpeg";
import ind10 from "../assets/ind10.jpeg";
import ind11 from "../assets/ind11.jpeg";
import ind12 from "../assets/ind12.jpeg";
import ind13 from "../assets/ind13.jpeg";
import ind14 from "../assets/ind14.jpeg";
import ind15 from "../assets/ind15.jpeg";
import ind16 from "../assets/ind16.jpeg";
import ind17 from "../assets/ind17.jpeg";
import ind18 from "../assets/ind18.jpeg";
import ind19 from "../assets/ind19.jpeg";
import ind20 from "../assets/ind20.jpeg";

const menuItems = [
  "Services",
  "Products",
  "Industries",
  "About Us",
  "Careers",
  "Library",
];

const industries = [
  {
    title: "Government",
    image:
      ind1,
  },
  {
    title: "Environment",
    image:
      ind2,
  },
  {
    title: "Real Estate",
    image:
      ind3,
  },
  {
    title: "Financial Services",
    image:
      ind4,
  },
  {
    title: "FMCG",
    image:
      ind5,
  },
  {
    title: "Marketing",
    image:
      ind6,
  },
  {
    title: "Utility",
    image:
      ind7,
  },
  {
    title: "Transport",
    image:
      ind8,
  },
  {
    title: "Health",
    image:
      ind9,
  },
  {
    title: "Logistics",
    image:
      ind10,
  },
  {
    title: "Entertainment",
    image:
      ind11,
  },
  {
    title: "Telecommunication",
    image:
      ind12,
  },
   {
    title: "Insurance",
    image:
      ind13,
  },
   {
    title: "Tourism",
    image:
      ind14,
  },
   {
    title: "Education",
    image:
      ind15,
  },
   {
    title: "Manifacturing",
    image:
      ind16,
  },
    {
    title: "Enery",
    image:
      ind17,
  },
    {
    title: "National Agencies",
    image:
      ind18,
  },
    {
    title: "Public Saftey",
    image:
      ind19,
  },
    {
    title: "Agriculture",
    image:
      ind20,
  },
];

function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "280px",
          sm: "340px",
          md: "420px",
        },
        overflow: "hidden",
        marginTop: { xs: "-64px", md: "-72px" }, 
      }}
    >
      <Box
        component="img"
        src={industriesbg }
        alt="Industries Banner"
        loading="eager"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,10,20,0.75) 0%, rgba(0,15,30,0.55) 50%, rgba(0,15,30,0.2) 100%)",
        }}
      />


      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: { xs: 2, md: 2 } }}>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: {
                xs: "13px",
                md: "15px",
              },
              fontWeight: 400,
              mb: 1.5,
            }}
          >
            Home &nbsp; » &nbsp; Industries
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              fontSize: {
                xs: "38px",
                sm: "52px",
                md: "64px",
              },
              maxWidth: "600px",
            }}
          >
            Empowering Industries With Tailored Solutions
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function IndustryCard({ industry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        width: "100%",
        paddingTop: "66%",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "4px",
        backgroundColor: "#ddd",
      }}
    >
      <Box
        component="img"
        src={industry.image}
        alt={industry.title}
        loading="lazy"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/800x600?text=Image";
        }}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
          transform: hovered
            ? "scale(1.06)"
            : "scale(1)",

          filter: hovered
            ? "brightness(0.7)"
            : "brightness(0.85)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,10,25,0.88) 0%, rgba(0,10,25,0.3) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      <Typography
        sx={{
          position: "absolute",
          bottom: { xs: 14, md: 22 },
          left: { xs: 14, md: 22 },
          color: hovered ? "#ff6b1a" : "#fff",
          fontWeight: 400,
          fontSize: {
            xs: "18px",
            sm: "20px",
            md: "24px",
          },
          letterSpacing: "0.3px",
          lineHeight: 1.2,
          transition: "color 0.3s",
        }}
      >
        {industry.title}
      </Typography>
    </Box>
  );
}

function IndustriesGrid() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={2}>
          {industries.map((industry) => (
            <Grid
              key={industry.title}
              size={{
                xs: 6,
                sm: 4,
                md: 3,
              }}
            >
              <IndustryCard industry={industry} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default function IndustriesPage() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
      }}
    >
      <Navbar transparentHero={true} />
      <HeroSection />
      <IndustriesGrid />
    </Box>
  );
}