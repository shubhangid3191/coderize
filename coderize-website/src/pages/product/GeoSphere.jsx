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
    title: "GeoSphere",
    image:
      "https://coderize.in/wp-content/uploads/2026/01/geospace.jpeg",
    description:
      "GeoSphere is a secure, web-based geospatial platform that enables organizations to manage spatial data, create interactive maps, build dashboards, and collaborate securely all from a single, trusted system.",
  },
];

function CoderizeLogoSVG() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <Box sx={{ position: "relative", width: 50, height: 50 }}>
        <svg
          width="50"
          height="50"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22"
            cy="22"
            r="21"
            stroke="#e8622a"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M14 12 L14 32 M14 12 L24 12 Q30 12 30 18 Q30 24 24 24 L14 24 M22 24 L30 32"
            stroke="#e8622a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </Box>

      <Box>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "1px",
          }}
        >
          CODERIZE
        </Typography>

        <Typography
          sx={{
            fontSize: "0.48rem",
            color: "#b9c7d3",
            letterSpacing: "1.5px",
            lineHeight: 1.2,
          }}
        >
          TRANSINNOVATE SPATIALLY
        </Typography>
      </Box>
    </Box>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          background: "transparent",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          zIndex: 20,
        }}
      >
        <Toolbar
          sx={{
            height: { xs: "74px", md: "86px" },
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, md: 5 },
          }}
        >
          <CoderizeLogoSVG />

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "0.3s",

                    "&:hover": {
                      color: "#ff6b1a",
                    },
                  }}
                >
                  {item}

                  {item !== "Careers" && (
                    <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
                  )}
                </Typography>
              ))}
            </Box>
          )}

          {isMobile ? (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: "#fff", fontSize: 30 }} />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              sx={{
                bgcolor: "#ff6b1a",
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.1,
                borderRadius: "8px",
                boxShadow: "none",

                "&:hover": {
                  bgcolor: "#e85d10",
                  boxShadow: "none",
                },
              }}
            >
              Contact Us
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 260,
            height: "100%",
            bgcolor: "#031b2d",
            color: "#fff",
            pt: 4,
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontWeight: 500,
                  }}
                />
              </ListItem>
            ))}

            <Box sx={{ px: 2, mt: 2 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#ff6b1a",
                  textTransform: "none",

                  "&:hover": {
                    bgcolor: "#e85d10",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "280px", sm: "320px", md: "380px" },
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src="https://coderize.in/wp-content/uploads/2024/10/product-title-banner.jpg"
        alt="GeoSphere Banner"
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

      {/* NAVBAR */}
      <Navbar />

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
            Home &nbsp; » &nbsp; Products &nbsp; » &nbsp; GeoSphere
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
            GeoSphere
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

export default function GeoSpherePage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
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