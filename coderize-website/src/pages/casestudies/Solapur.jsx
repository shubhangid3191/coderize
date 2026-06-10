import React from "react";
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import casestudiesbg from "../../assets/casestudiesbg.png";
import Solhapur from "../../assets/Solhapur.jpg";

const MAP_IMAGE = Solhapur;

const sections = [
  {
    id: "problem",
    label: "Problem",
    icon: <EmojiObjectsOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Absence of a comprehensive water tap connection survey system",
      "Inability to analyze property usage variations and identify properties without connections.",
      "Excessive survey expenditures",
      "Inadequate resource management",
    ],
  },
  {
    id: "solution",
    label: "Solution",
    icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Customized GeoSet Collector for efficient data collection with geo-coordinates and photos.",
      "Developed GeoSet Viewer for real-time data approval and report generation.",
    ],
  },
  {
    id: "impact",
    label: "Impact",
    icon: <TrackChangesOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Comprehensive data visualization monitoring",
      "Actionable insights",
      "Streamlined planning of periodic surveys",
      "Rapid survey execution",
      "Substantial cost savings",
      "Informed decision-making and resource optimization."
    ],
  },
];

export default function Solapur() {
  return (
    <Box sx={{ background: "#fff", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero Section ───────────────────────────────────────────────────── */}
      <Box sx={{ background: "#f7f8fa", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Map screenshot */}
            <Box
              sx={{
                flex: "0 0 auto",
                width: { xs: "100%", md: "48%" },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
                border: "1px solid #e0e0e0",
              }}
            >
              <Box
                component="img"
                src={MAP_IMAGE}
                alt="GIS Smart Portal Dashboard"
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: 340, md: 380 },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            {/* Title + description */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.4rem" },
                  color: "#1a1a2e",
                  lineHeight: 1.3,
                  mb: 3,
                }}
              >
                Optimizing Water Billing through Customized Survey Solutions
              </Typography>
              <Typography
                sx={{
                  color: "#444",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.85,
                }}
              >
                The Solapur Municipal Corporation (SMC) manages infrastructure and public utilities in Solapur, Maharashtra. It faces challenges in accurately assessing and billing water connections. The absence of an efficient water tap connection survey system has hindered the identification of unassessed properties and analysis of land use patterns. This has led to inefficiencies in water billing, poor resource allocation, and difficulties in revenue generation and water resource management.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Problem / Solution / Impact Section ────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #fff 60%, #fff5f2 100%)",
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Background wave image — mixBlendMode:multiply makes black bg transparent */}
        <Box
          component="img"
          src={casestudiesbg}
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "-15%", md: "0%" },
            transform: "translateY(-50%)",
            width: { xs: "50%", md: "80%" },
            opacity: 0.85,
            mixBlendMode: "multiply",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {sections.map((section, idx) => (
            <Box key={section.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "flex-start",
                  gap: { xs: 2, sm: 5 },
                  py: { xs: 4, md: 5 },
                }}
              >
                {/* Icon + Label */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", sm: "column" },
                    alignItems: "center",
                    gap: { xs: 1.5, sm: 1 },
                    minWidth: { sm: 120 },
                  }}
                >
                  {section.icon}
                  <Typography
                    sx={{ color: "#1a1a2e", fontWeight: 600, fontSize: "1rem", mt: { sm: 1 } }}
                  >
                    {section.label}
                  </Typography>
                </Box>

                {/* Bullet list */}
                <List disablePadding sx={{ flex: 1 }}>
                  {section.points.map((point, i) => (
                    <ListItem key={i} disableGutters sx={{ alignItems: "flex-start", py: 0.4 }}>
                      <ListItemIcon sx={{ minWidth: 24, mt: "6px" }}>
                        <FiberManualRecordIcon sx={{ fontSize: 8, color: "#555" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={point}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: { xs: "0.92rem", md: "1rem" },
                            color: "#333",
                            lineHeight: 1.7,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Divider — not after last item */}
              {idx < sections.length - 1 && (
                <Box sx={{ borderTop: "1px solid #ddd" }} />
              )}
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
}