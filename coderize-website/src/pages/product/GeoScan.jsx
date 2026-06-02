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

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/material/styles";
import Navbar from "../../components/Navbar";

const menuItems = [
  "Services",
  "Products",
  "Industries",
  "About Us",
  "Careers",
  "Library",
];

const products = [
  {
    title: "GeoScanner",
    image:
      "https://coderize.in/wp-content/uploads/2024/10/Geoscan-mockup-img.jpg",
    description:
      "A data collection app for mobile, makes it easy to scan accurate spatial data and send it to the office in real time...",
  },
  {
    title: "GeoScan Reviewer",
    image:
      "https://coderize.in/wp-content/uploads/2024/10/Geoflow-mockup-img.jpg",
    description:
      "A Geo-Enabled web dashboard , makes it easy for visualization and geo-analytics for a real-time operational view...",
  },
];

function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "280px", sm: "320px", md: "380px" },
        overflow: "hidden",
        marginTop: { xs: "-64px", md: "-72px" },
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src="https://coderize.in/wp-content/uploads/2024/10/product-title-banner.jpg"
        alt="GeoScan Banner"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,10,20,0.92) 0%, rgba(0,15,30,0.82) 45%, rgba(0,15,30,0.35) 100%)",
        }}
      />

      {/* HERO CONTENT */}
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
              fontSize: { xs: "13px", md: "16px" },
              fontWeight: 400,
              mb: 1,
            }}
          >
            Home &nbsp; » &nbsp; Products &nbsp; » &nbsp; GeoScan
          </Typography>

          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-2px",
              fontSize: { xs: "52px", sm: "64px", md: "78px" },
            }}
          >
            GeoScan
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

function FlipCard({ product }) {
  return (
    <Box
      sx={{
        perspective: "1500px",
        width: "100%",
        height: { xs: "340px", sm: "410px", md: "500px" }, // 20% SMALLER
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.8s",
          transformStyle: "preserve-3d",

          "&:hover": {
            transform: "rotateY(180deg)",
          },
        }}
      >
        {/* FRONT */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,15,30,0.95) 0%, rgba(0,15,30,0.45) 40%, rgba(0,0,0,0.05) 100%)",
            }}
          />

          <Typography
            sx={{
              position: "absolute",
              bottom: { xs: 20, md: 30 },
              left: { xs: 18, md: 30 },
              color: "#fff",
              fontWeight: 300,
              lineHeight: 1.1,
              fontSize: { xs: "28px", md: "46px" },
            }}
          >
            {product.title}
          </Typography>
        </Box>

        {/* BACK */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "#031b2d",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            borderRadius: "4px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",

            px: { xs: 2.5, md: 5 },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#ff6b1a",
                fontWeight: 300,
                lineHeight: 1,
                mb: 3,
                fontSize: { xs: "30px", md: "48px" },
              }}
            >
              {product.title}
            </Typography>

            <Typography
              sx={{
                color: "#d7e4ec",
                lineHeight: 1.8,
                mb: 3,
                fontSize: { xs: "13px", md: "16px" },
              }}
            >
              {product.description}
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#ff6b1a",
                textTransform: "none",
                fontWeight: 600,
                px: 3.5,
                py: 1.1,
                borderRadius: "6px",
                boxShadow: "none",

                "&:hover": {
                  bgcolor: "#e85d10",
                  boxShadow: "none",
                },
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function GeoScanPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <Navbar transparentHero={true} />
      {/* HERO SECTION */}
      <HeroSection />

      {/* SMALLER FLIP CARDS */}
      <Box
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 2, md: 3 },
            }}
          >
            {products.map((product) => (
              <FlipCard key={product.title} product={product} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}