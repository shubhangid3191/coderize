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
      "https://coderize.in/wp-content/uploads/2024/09/gov-public-administration.jpeg",
  },
  {
    title: "Environment",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/environment-and-ecosystem-image.jpg",
  },
  {
    title: "Real Estate",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/real-estate-img.jpeg",
  },
  {
    title: "Financial Services",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/financial-and-services-image.jpeg",
  },
  {
    title: "FMCG",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/retail.jpeg",
  },
  {
    title: "Marketing",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/marketing-and-advertisement.jpeg",
  },
  {
    title: "Utility",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/utility-image.jpeg",
  },
  {
    title: "Transport",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/transport-image.jpeg",
  },
  {
    title: "Health",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/health.jpeg",
  },
  {
    title: "Logistics",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/logistics.jpeg",
  },
  {
    title: "Entertainment",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/sport-and-entertainment.jpeg",
  },
  {
    title: "Telecommunication",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/telecommunication-img.jpeg",
  },
   {
    title: "Insurance",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/insurance-and-assessment.jpeg",
  },
   {
    title: "Tourism",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/tourism-and-hospitality.jpeg",
  },
   {
    title: "Education",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/education-and-academic-research.jpeg",
  },
   {
    title: "Manifacturing",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/Manufacturing-and-trial-operations.jpeg",
  },
    {
    title: "Enery",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/national-resources-and-energy.jpeg",
  },
    {
    title: "National Agencies",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/Nationsl-goverment-or-agencies.jpeg",
  },
    {
    title: "Public Saftey",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/public-safety.jpeg",
  },
    {
    title: "Agriculture",
    image:
      "https://coderize.in/wp-content/uploads/2024/09/Manufacturing-and-trial-operations.jpeg",
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
      }}
    >
      <Box
        component="img"
        src="https://coderize.in/wp-content/uploads/2024/09/industries-title-banner.jpg"
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
        <Box sx={{ mt: { xs: 6, md: 7 } }}>
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
      <HeroSection />
      <IndustriesGrid />
    </Box>
  );
}