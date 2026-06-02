import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Grid,
  Card,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Leadership() {
  const mobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);

  const leaders = [
    {
      name: "Mr. Ritesh Verma",
      role: "Mentor",
      description:
        "An accomplished investor and entrepreneur with over 20 years of IT experience, having held senior leadership roles at renowned firms such as Capgemini, Accenture, Deloitte, KPMG, and Tata. As a mentor at IIT and India Accelerator, he excels in guiding startups, fostering strategic relationships, and driving growth.",
    },
    {
      name: "Mr. Prashant Singh",
      role: "CEO",
      description:
        "Leads Corporate Strategy, playing a key role in business leadership. Develops long-term strategic plans and objectives. Identifies strategic issues and opportunities to drive business growth and profitability. He holds MSc. in Geoinformatics from Symbiosis, Pune.",
    },
    {
      name: "Mr. Nilesh Shinolikar",
      role: "CTO",
      description:
        "MCS and MBA professional with nearly 14 years of experience. Expert in enterprise GIS, open-source solutions, and large-scale technology implementations for government and international clients.",
    },
    {
      name: "Mrs. Swapna Bhide",
      role: "Sr. Manager",
      description:
        "Senior Manager with 13 years of GIS domain expertise. Skilled in project management, client engagement, delivery oversight, and business development.",
    },
  ];

  const menuItems = [
    "Services",
    "Products",
    "Industries",
    "About Us",
    "Careers",
    "Library",
  ];

  return (
    <>
      {/* HERO SECTION */}

      <Box
        sx={{
          height: { xs: 450, md: 470 },
          backgroundImage:
            "url('https://coderize.in/wp-content/uploads/2024/09/leadership-title.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,40,70,.75), rgba(0,40,70,.75))",
          }}
        />

        {/* Hero Content */}

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            pt: { xs: 20, md: 30 },
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Home » Leadership
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "2.2rem",
                md: "3rem",
              },
              fontWeight: 200,
              maxWidth: "700px",
            }}
          >
            Inspiring Vision And Empowering Others To Excel
          </Typography>
        </Container>
      </Box>

      {/* LEADERSHIP SECTION */}

      <Box
        sx={{
          background:
            "linear-gradient(90deg,#f9eff8,#ffffff,#fff4ea)",
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "3.2rem",
                  },
                  color: "#012c5b",
                }}
              >
                Our Leadership
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "#012c5b",
                }}
              >
                Our leadership is driven by innovation,
                integrity and collaboration, fostering
                a culture that empowers our team to
                achieve shared goals.
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              borderBottom: "1px solid #d9d9d9",
              my: 4,
            }}
          />

          <Grid container spacing={4}>
            {leaders.map((leader) => (
              <Grid
                key={leader.name}
                size={{ xs: 12, md: 6 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    p: 5,
                    borderRadius: "8px",
                    minHeight: "340px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      color: "#012c5b",
                      mb: 1,
                    }}
                  >
                    {leader.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#ff661f",
                      fontSize: "1.8rem",
                      mb: 3,
                    }}
                  >
                    {leader.role}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#012c5b",
                      lineHeight: 2,
                      fontSize: "1.2rem",
                    }}
                  >
                    {leader.description}
                  </Typography>

                  <Box
                    sx={{
                      mt: 4,
                      width: 42,
                      height: 42,
                      border: "1px solid #ff661f",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ff661f",
                    }}
                  >
                    <LinkedInIcon />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}