import { useState, useEffect } from "react";
import { Box, Typography, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import scheduleBg from "../assets/shedulefrom.jpeg";

const DARK = "#0d1b2a";

const inputSx = {
  "& .MuiInput-root": {
    fontSize: "1rem",
    color: DARK,
    "&:before": { borderBottomColor: "#ccc" },
    "&:hover:not(.Mui-disabled):before": { borderBottomColor: "#888" },
    "&:after": { borderBottomColor: DARK },
  },
  "& .MuiInputBase-input": {
    color: DARK,
    fontSize: "1rem",
    pb: "10px",
    "&::placeholder": { color: "#aaa", opacity: 1 },
  },
  "& label": { color: "#aaa", fontSize: "0.9rem" },
};

export default function ScheduleForm({ open, onClose }) {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    date: "", time: "", project: "",
  });
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setVisible(false);
    }
  }, [open]);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  const handleSend = () => {
    if (!form.name || !form.phone || !form.email || !form.project) {
      alert("Please fill all required fields.");
      return;
    }
    alert("Message sent successfully!");
    handleClose();
  };

  if (!open) return null;

  return (
    /* ── Full-screen backdrop ── */
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 1300,
        bgcolor: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      {/* ── Full-screen modal ── */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          bgcolor: "#fff",
          position: "relative",
          overflow: "hidden",
          transform: visible ? "translateY(0)" : "translateY(-40px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
        }}
      >
        {/* ── CLOSE BUTTON ── */}
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            right: 16,
            zIndex: 10,
            color: "#555",
            "&:hover": { color: "#b5451b" },
          }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>

        {/* ══════════════════════════════════════
            LEFT PANEL — background image + text
        ══════════════════════════════════════ */}
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "45%" },
            minHeight: { xs: 220, md: "100%" },
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {/* Background image */}
          <Box
            component="img"
            src={scheduleBg}
            alt=""
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />

          {/* White wash overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(255,255,255,0.50)",
            }}
          />

          {/* Left panel content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              p: { xs: 4, sm: 5, md: "72px 56px" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top: heading + subtext */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem", lg: "4rem" },
                  color: DARK,
                  lineHeight: 1.1,
                  mb: { xs: 2, md: 4 },
                  letterSpacing: "-0.5px",
                }}
              >
                Send a{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: 300 }}>
                  message.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#3a5068",
                  fontSize: { xs: "0.9rem", md: "0.95rem" },
                  fontFamily: "'Segoe UI', sans-serif",
                  lineHeight: 1.6,
                  maxWidth: 340,
                }}
              >
                We're here to answer any question you may have.
              </Typography>
            </Box>

            {/* Bottom: Careers + Contact Us (desktop only) */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: { md: 5, lg: 7 },
                mt: 4,
              }}
            >
              {/* CAREERS */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: DARK,
                    letterSpacing: "0.1em",
                    mb: 1,
                    fontFamily: "'Segoe UI', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  Careers
                </Typography>
                <Typography
                  sx={{
                    color: "#4a6070",
                    fontSize: "0.85rem",
                    fontFamily: "'Segoe UI', sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  Would you like to join our growing team?
                </Typography>
                <Typography
                  sx={{
                    color: "#4a6070",
                    fontSize: "0.85rem",
                    fontFamily: "'Segoe UI', sans-serif",
                  }}
                >
                  ctplhr@coderize.in
                </Typography>
              </Box>

              {/* CONTACT US */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: DARK,
                    letterSpacing: "0.1em",
                    mb: 1,
                    fontFamily: "'Segoe UI', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  sx={{
                    color: "#4a6070",
                    fontSize: "0.85rem",
                    fontFamily: "'Segoe UI', sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  Have a project in mind? Send a message.
                </Typography>
                <Typography
                  sx={{
                    color: "#4a6070",
                    fontSize: "0.85rem",
                    fontFamily: "'Segoe UI', sans-serif",
                  }}
                >
                  info@coderize.in
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ══════════════════════════════════════
            RIGHT PANEL — form
        ══════════════════════════════════════ */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, sm: 5, md: "72px", lg: "96px" },
            py: { xs: 4, md: "56px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, md: 3.5 },
              maxWidth: 620,
              width: "100%",
            }}
          >
            {/* Full Name */}
            <TextField
              name="name"
              placeholder="Full Name*"
              value={form.name}
              onChange={handle}
              fullWidth
              variant="standard"
              sx={inputSx}
            />

            {/* Phone Number */}
            <TextField
              name="phone"
              placeholder="Phone Number*"
              value={form.phone}
              onChange={handle}
              fullWidth
              variant="standard"
              sx={inputSx}
            />

            {/* Email Address */}
            <TextField
              name="email"
              placeholder="Email Address*"
              value={form.email}
              onChange={handle}
              fullWidth
              variant="standard"
              sx={inputSx}
            />

            {/* Date + Time row */}
            <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", sm: "row" } }}>
              <TextField
                name="date"
                placeholder="Date*"
                type="date"
                value={form.date}
                onChange={handle}
                fullWidth
                variant="standard"
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...inputSx,
                  "& .MuiInputBase-input": {
                    color: form.date ? DARK : "#aaa",
                    fontSize: "1rem",
                    pb: "10px",
                  },
                }}
              />
              <TextField
                name="time"
                placeholder="Time (IST Zone)*"
                type="time"
                value={form.time}
                onChange={handle}
                fullWidth
                variant="standard"
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...inputSx,
                  "& .MuiInputBase-input": {
                    color: form.time ? DARK : "#aaa",
                    fontSize: "1rem",
                    pb: "10px",
                  },
                }}
              />
            </Box>

            {/* Tell us about your project */}
            <TextField
              name="project"
              placeholder="Tell us about your project*"
              value={form.project}
              onChange={handle}
              fullWidth
              multiline
              rows={4}
              variant="standard"
              sx={inputSx}
            />

            {/* reCAPTCHA widget */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: "1px solid #d0d0d0",
                borderRadius: "4px",
                px: 2,
                py: 1.5,
                bgcolor: "#f9f9f9",
                width: "fit-content",
                minWidth: 270,
              }}
            >
              {/* Checkbox */}
              <Box
                onClick={() => setChecked((c) => !c)}
                sx={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  border: `2px solid ${checked ? "#4a90d9" : "#c0c0c0"}`,
                  borderRadius: "3px",
                  bgcolor: checked ? "#4a90d9" : "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.15s",
                }}
              >
                {checked && (
                  <Box component="svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7L5.5 10.5L12 3"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Box>
                )}
              </Box>

              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "#333",
                  fontFamily: "'Segoe UI', sans-serif",
                  userSelect: "none",
                }}
              >
                I'm not a robot
              </Typography>

              {/* reCAPTCHA logo */}
              <Box
                sx={{
                  ml: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <Box component="svg" width={40} height={40} viewBox="0 0 38 38" fill="none">
                  <rect width="38" height="38" rx="3" fill="#f0f0f0" />
                  <path
                    d="M19 8 A11 11 0 1 1 8 19"
                    stroke="#4a90d9"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 8 L19 8 L19 14"
                    stroke="#e8622a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    color: "#555",
                    fontFamily: "'Segoe UI', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  reCAPTCHA
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.52rem",
                    color: "#999",
                    fontFamily: "'Segoe UI', sans-serif",
                  }}
                >
                  Privacy - Terms
                </Typography>
              </Box>
            </Box>

            {/* Send button */}
            <Box
              onClick={handleSend}
              sx={{
                bgcolor: "#0f2d4a",
                color: "#fff",
                py: { xs: 1.8, md: 2 },
                borderRadius: "6px",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: 500,
                fontFamily: "'Segoe UI', sans-serif",
                cursor: "pointer",
                letterSpacing: "0.02em",
                transition: "background 0.2s",
                "&:hover": { bgcolor: "#0a2238" },
                userSelect: "none",
                maxWidth: 620,
                width: "100%",
              }}
            >
              Send
            </Box>

            {/* Mobile — Careers + Contact */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                gap: 4,
                flexWrap: "wrap",
                pt: 1,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    color: DARK,
                    letterSpacing: "0.1em",
                    mb: 0.5,
                    fontFamily: "'Segoe UI', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  Careers
                </Typography>
                <Typography
                  sx={{
                    color: "#4a6070",
                    fontSize: "0.82rem",
                    fontFamily: "'Segoe UI', sans-serif",
                  }}
                >
                  ctplhr@coderize.in
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    color: DARK,
                    letterSpacing: "0.1em",
                    mb: 0.5,
                    fontFamily: "'Segoe UI', sans-serif",
                    textTransform: "uppercase",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  sx={{
                    color: "#4a6070",
                    fontSize: "0.82rem",
                    fontFamily: "'Segoe UI', sans-serif",
                  }}
                >
                  info@coderize.in
                </Typography>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}