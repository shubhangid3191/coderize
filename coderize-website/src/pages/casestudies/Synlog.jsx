import React from "react";
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import casestudiesbg from "../assets/casestudiesbg.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const MAP_IMAGE = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80";

const sections = [
  {
    id: "problem",
    label: "Problem",
    icon: <EmojiObjectsOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Time-consuming, tedious, and manual procedures in obtaining satellite images",
      "Cloud cover hinders periodic monitoring of crop health",
      "Increased frequency of field visits and manual crop health inspections",
      "Lack of a crop health monitoring platform",
    ],
  },
  {
    id: "solution",
    label: "Solution",
    icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Developed an Automated Monitoring System",
      "Automated Image downloading",
      "Enhancement of Satellite Images (Cloud Cover removal)",
      "Calculating NDVI (Crop health)",
      "Integrating Image Service into Live Web Application",
    ],
  },
  {
    id: "impact",
    label: "Impact",
    icon: <TrackChangesOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Saved thousands of man hours",
      "Enhanced operational efficiency",
      "Regular updates about Crop Health",
      "Reduced costs",
    ],
  },
];

export default function Synlog() {
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
                Elevating Palm Tree Estate Management With Automated Satellite
                Processing For Accurate And Efficient Monitoring
              </Typography>
              <Typography
                sx={{
                  color: "#444",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.85,
                }}
              >
                To improve the monitoring of Palm Tree Estates for a client
                specializing in crop management and health monitoring, we developed
                a robust geospatial solution. This solution tackles inefficiencies
                in satellite image processing and crop health assessment, enabling
                precise and timely analysis. By integrating advanced geospatial
                tools and workflows, it streamlines the processing of satellite
                imagery, ensuring accurate crop health insights. This comprehensive
                approach enhances decision-making, optimizes resource allocation,
                and supports sustainable estate management.
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
        {/* Background wave image */}
        <Box
          component="img"
          src={casestudiesbg}
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "-20%", md: "-5%" },
            transform: "translateY(-50%)",
            width: { xs: "80%", md: "45%" },
            opacity: 0.13,
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
                    alignItems: { xs: "center", sm: "center" },
                    gap: { xs: 1.5, sm: 1 },
                    minWidth: { sm: 120 },
                  }}
                >
                  {section.icon}
                  <Typography sx={{ color: "#1a1a2e", fontWeight: 600, fontSize: "1rem", mt: { sm: 1 } }}>
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
                          sx: { fontSize: { xs: "0.92rem", md: "1rem" }, color: "#333", lineHeight: 1.7 },
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