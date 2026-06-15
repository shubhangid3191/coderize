import React from "react";
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import casestudiesbg from "../../assets/casestudiesbg.png";
import Plant from "../../assets/Plant.jpg";

const MAP_IMAGE = Plant;

const sections = [
  {
    id: "problem",
    label: "Problem",
    icon: <EmojiObjectsOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Unavailability of real-time data",
      "Visiting areas hit by the unseasonal rain – a daunting, cost & labor intensive task.",
      "No easy and handy process for claiming crop insurance",
      "Critical situation demanding quick assessment",
      "Development of mobile app within very short time span of 48 hrs",
    ],
  },
  {
    id: "solution",
    label: "Solution",
    icon: <SettingsSuggestOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Time-stamped photos of damaged crop",
      "Easy gathering of required information through mobile app",
      "Easy claims via mobile application",
      "Crop damage visualization",
    ],
  },
  {
    id: "impact",
    label: "Impact",
    icon: <TrackChangesOutlinedIcon sx={{ fontSize: 44, color: "#E8531E" }} />,
    points: [
      "Easy assessment",
      "Reduce cost and effort",
      "Efficient claim handling",
      "Accelerate the process of crop damage assessment",
      "Informed and actionable decision making",
    ],
  },
];

export default function ADepartment() {
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
                
                Optimizing Agricultural Recovery Leveraging GeoSets Collector for Post-Monsoon Crop Damage in Maharashtra
              </Typography>
              <Typography
                sx={{
                  color: "#444",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.85,
                }}
              >
              The Agriculture Department of Maharashtra plays a pivotal role in implementing agricultural schemes and initiatives by adopting the latest technologies. To support their efforts, CodeRizers developed Peek Panchnama, a mission-critical mobile application designed specifically for the department. This app simplifies and accelerates the process of assessing crop damage caused by unseasonal post-monsoon rains.
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