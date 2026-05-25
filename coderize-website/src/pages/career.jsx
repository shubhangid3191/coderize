import { useState } from "react";
import {
  Box, Container, Typography, Grid, Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import careerImg1 from "../assets/career-img1.jpg";
import careerImg2 from "../assets/career-img2.jpg";
import careerGrowth from "../assets/career-growth.jpg";

const ACCENT = "#e8622a";
const DARK = "#0d1b2a";

const jobListings = [
  { title: "Python Developer Intern", desc: "We are looking for a Python Developer Intern to join our team" },
  { title: "Digital Marketing Intern", desc: "We are looking for a Digital Marketing Intern to join our team" },
  { title: "Graphic Design Intern", desc: "We are looking for a Graphic Design Intern to join our team" },
  { title: "Software Tester Intern", desc: "We are looking for a Software Tester Intern to join our team" },
  { title: "Sales Intern", desc: "We are looking for a Sales Intern to join our team" },
  { title: "Marketing Intern", desc: "We are looking for a Marketing Intern to join our team" },
  { title: "Sales Executive", desc: "We are looking for a Sales Executive to join our team" },
  { title: "E-Mail Marketing Specialist", desc: "We are looking for a E-Mail Marketing Specialist to join our team" },
];

const testimonials = [
  {
    name: "Amey Ranjane", role: "Business Analyst",
    text: "Working here has been a game-changer for me. The flexible working hours allow me to maintain a great work-life balance. The management team goes above and beyond to ensure a supportive and collaborative working environment.",
  },
  {
    name: "Dipika Gote", role: "Project Lead Intern",
    text: "CodeRize Technologies offers a dynamic and professional work culture that encourages collaboration and innovation. The supportive and skilled team ensures a productive environment with excellent opportunities for career development.",
  },
  {
    name: "Swapna Bhide", role: "Project Manager",
    text: "CodeRize Technologies fosters a supportive and collaborative work environment where we get the opportunity to focus on what we're passionate about and excel in our core interests. The culture here encourages continuous learning, with colleagues who are always ready to help. It's an ideal place to grow both personally and professionally through meaningful experiences.",
  },
  {
    name: "Sanket Lodhe", role: "Software Engineer Intern",
    text: "Working at CodeRize Technologies has been a great experience. The team is supportive, and there are plenty of opportunities to learn and grow. I'm grateful for the positive environment.",
  },
];

const whyUs = [
  {
    title: "Company Values",
    desc: "We are committed to innovation, collaboration, and excellence in everything we do.",
    icon: (
      <Box component="svg" width={44} height={44} viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="#c8d8e8" />
        <path d="M22 12 L30 17 L30 27 L22 32 L14 27 L14 17 Z" stroke={ACCENT} strokeWidth="1.5" fill="none" />
        <path d="M18 22 L21 25 L27 19" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    title: "Culture & Environment",
    desc: "We foster a dynamic, supportive, and collaborative workspace where creativity and growth thrive.",
    icon: (
      <Box component="svg" width={44} height={44} viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="#c8d8e8" />
        <circle cx="17" cy="18" r="3" stroke={ACCENT} strokeWidth="1.5" />
        <circle cx="27" cy="18" r="3" stroke={ACCENT} strokeWidth="1.5" />
        <circle cx="22" cy="26" r="3" stroke={ACCENT} strokeWidth="1.5" />
        <path d="M14 32 Q17 26 22 27 Q27 26 30 32" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    title: "Benefits & Perks",
    desc: "We offer competitive salaries, flexible hours, and ongoing professional development opportunities.",
    icon: (
      <Box component="svg" width={44} height={44} viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="22" fill="#c8d8e8" />
        <rect x="13" y="20" width="18" height="11" rx="2" stroke={ACCENT} strokeWidth="1.5" />
        <path d="M17 20 V17 Q17 13 22 13 Q27 13 27 17 V20" stroke={ACCENT} strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="25.5" r="1.5" fill={ACCENT} />
      </Box>
    ),
  },
];

const tickerTags = [
  "Mapping Specialists", "Azure Cloud Experts.", "EX-ESRI Professionals",
  "Custom Software Developers", "GIS Consultants", "Drone Mapping Specialists",
];

const TickerDot = () => (
  <Box component="svg" width={16} height={16} viewBox="0 0 16 16" fill="none" sx={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="5.5" stroke={ACCENT} strokeWidth="1.5" />
    <circle cx="8" cy="8" r="2" fill={ACCENT} />
  </Box>
);

function TickerBar() {
  const doubled = [...tickerTags, ...tickerTags];
  return (
    <Box sx={{ overflow: "hidden", bgcolor: "#fff", borderTop: "1px solid #e8edf2", borderBottom: "1px solid #e8edf2", py: "14px" }}>
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-inner { display: flex; width: max-content; animation: ticker 28s linear infinite; }
        .ticker-inner:hover { animation-play-state: paused; }
      `}</style>
      <Box className="ticker-inner">
        {doubled.map((tag, i) => (
          <Box key={i} component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 1, px: "24px", whiteSpace: "nowrap", fontSize: "0.88rem", color: "#3a5068", fontFamily: "'Segoe UI', sans-serif" }}>
            <TickerDot />
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function TestimonialSlider() {
  const [idx, setIdx] = useState(2);
  const t = testimonials[idx];
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <Box sx={{ bgcolor: "#cdd9e3", py: { xs: 6, md: "72px" }, pb: { xs: 8, md: "88px" } }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography variant="h4" sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.9rem" }, color: DARK, mb: 5.5 }}>
          What Our Employee Say
        </Typography>
        <Box sx={{ display: "flex", gap: 3.5, alignItems: "flex-start" }}>
          <Box component="svg" width={56} height={44} viewBox="0 0 56 44" sx={{ flexShrink: 0 }}>
            <text x="0" y="42" fontSize="68" fill={ACCENT} fontFamily="Georgia, serif" opacity="0.85">"</text>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'Segoe UI', sans-serif", fontSize: "1rem", color: "#1e3347", lineHeight: 1.85, mb: 3.5, maxWidth: 860 }}>
              {t.text}
            </Typography>
            <Typography sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: DARK }}>
              {t.name}
            </Typography>
            <Typography sx={{ color: ACCENT, fontSize: "0.875rem", fontFamily: "'Segoe UI', sans-serif", mt: "3px" }}>
              {t.role}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1.5, position: "absolute", right: { xs: 16, md: 24 }, bottom: { xs: -48, md: -52 } }}>
          {[{ fn: prev, icon: <ArrowBackIcon sx={{ fontSize: 16, color: "#4a6070" }} /> },
            { fn: next, icon: <ArrowForwardIcon sx={{ fontSize: 16, color: "#4a6070" }} /> }
          ].map(({ fn, icon }, i) => (
            <Box key={i} component="button" onClick={fn} sx={{ width: 42, height: 42, borderRadius: "50%", border: "1.5px solid #8aaabb", bgcolor: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.2s", "&:hover": { borderColor: ACCENT } }}>
              {icon}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default function CareerPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* HERO */}
      <Box sx={{ background: "linear-gradient(160deg, #f9ede6 0%, #f5e0d3 30%, #eeddd8 55%, #e8dbd8 75%, #e0dce0 100%)", pt: { xs: 5, md: "56px" }, overflow: "hidden" }}>
        <Container maxWidth="lg" sx={{ pb: { xs: 6, md: "64px" } }}>
          <Typography sx={{ fontSize: "0.82rem", color: "#6a8090", mb: 4, fontFamily: "'Segoe UI', sans-serif" }}>
            Home » Career
          </Typography>
          <Grid container spacing={7} alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <Typography variant="h1" sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 800, fontSize: { xs: "2rem", md: "2.6rem" }, color: DARK, mb: 2.5, lineHeight: 1.2 }}>
                Grow With Us!!
              </Typography>
              <Typography sx={{ color: "#3a5068", fontSize: "0.96rem", lineHeight: 1.85, mb: 1.5, maxWidth: 500, fontFamily: "'Segoe UI', sans-serif" }}>
                At CodeRize Technologies, we drive innovation and excellence in geospatial and IT solutions.
                Our dynamic team values creativity and collaboration. We provide exciting career opportunities
                through internships. Exploratory programs and entry-level roles are also available. These positions
                provide valuable training for students and recent graduates eager to start their careers.
              </Typography>
              <Typography sx={{ color: "#3a5068", fontSize: "0.93rem", fontFamily: "'Segoe UI', sans-serif" }}>
                Share your CV with us at{" "}
                <Box component="a" href="mailto:ctplhr@coderize.in" sx={{ color: ACCENT, fontWeight: 700, textDecoration: "none" }}>
                  ctplhr@coderize.in
                </Box>
                {" "}and discover how you can contribute to our mission.
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ position: "relative", height: { xs: 280, md: 400 } }}>
                <Box sx={{ position: "absolute", top: 0, left: 0, width: "57%", height: { xs: 160, md: 250 }, borderRadius: "10px", overflow: "hidden", bgcolor: "#b8c8d4", zIndex: 1 }}>
                  <Box component="img" src={careerImg2} alt="team" sx={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} />
                </Box>
                <Box sx={{ position: "absolute", top: 0, right: 0, width: "46%", height: { xs: 270, md: 390 }, borderRadius: "10px", overflow: "hidden", bgcolor: "#c8d8e0", zIndex: 2 }}>
                  <Box component="img" src={careerImg1} alt="career" sx={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} />
                </Box>
                <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "62%", height: { xs: 130, md: 180 }, borderRadius: "10px", overflow: "hidden", bgcolor: "#d0dadf", zIndex: 3 }}>
                  <Box component="img" src={careerGrowth} alt="growth" sx={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.display = "none"; }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <TickerBar />

      {/* WHY WORK WITH US */}
      <Box sx={{ py: { xs: 6, md: "80px" }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={10} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.9rem" }, color: DARK, mb: 2.5 }}>
                Why Work With Us?
              </Typography>
              <Typography sx={{ color: "#4a6070", fontSize: "0.95rem", lineHeight: 1.9, fontFamily: "'Segoe UI', sans-serif" }}>
                At CodeRize, we foster a culture of innovation, collaboration, and continuous learning.
                Our team is committed to tackling real-world challenges while providing opportunities to
                work on exciting projects that align with your skills and passions. Join us to grow
                professionally in a supportive and dynamic environment.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {whyUs.map((item) => (
                  <Box key={item.title} sx={{ display: "flex", gap: 2.5, alignItems: "flex-start" }}>
                    <Box sx={{ flexShrink: 0 }}>{item.icon}</Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: "0.98rem", color: ACCENT, mb: 0.75, fontFamily: "'Segoe UI', sans-serif" }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ color: "#4a6070", fontSize: "0.875rem", lineHeight: 1.75, fontFamily: "'Segoe UI', sans-serif" }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <TestimonialSlider />

      {/* JOB LISTINGS */}
      <Box sx={{ py: { xs: 6, md: "80px" }, pb: { xs: 8, md: "100px" }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={7} sx={{ mb: 5 }} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700, fontSize: { xs: "1.5rem", md: "1.9rem" }, color: DARK }}>
                Our Job Offers
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: "#4a6070", fontSize: "0.93rem", lineHeight: 1.8, fontFamily: "'Segoe UI', sans-serif" }}>
                We offer you a unique opportunity to learn, grow, and be part of an exciting team and experience.
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ height: 1, bgcolor: "#dde5ec" }} />
          {jobListings.map((job) => (
            <Box key={job.title} sx={{ borderBottom: "1px solid #dde5ec", py: "30px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: DARK, mb: 0.75 }}>
                  {job.title}
                </Typography>
                <Typography sx={{ color: "#4a6070", fontSize: "0.88rem", mb: 1.75, fontFamily: "'Segoe UI', sans-serif" }}>
                  {job.desc}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {["Full Time", "Intern", "Work From Office"].map((tag, i) => (
                    <Box key={tag} component="span" sx={{ display: "inline-flex", alignItems: "center" }}>
                      <Typography component="span" sx={{ color: "#4a6070", fontSize: "0.86rem", fontFamily: "'Segoe UI', sans-serif" }}>
                        {tag}
                      </Typography>
                      {i < 2 && (
                        <Typography component="span" sx={{ color: "#b0bec8", mx: "12px", fontSize: "1rem", fontWeight: 300 }}>|</Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Button
                href="#"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "15px !important" }} />}
                sx={{ color: DARK, fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: "0.88rem", textTransform: "none", flexShrink: 0, borderBottom: `1.5px solid ${ACCENT}`, borderRadius: 0, pb: "2px", px: 0, minWidth: 0, "&:hover": { bgcolor: "transparent", color: ACCENT } }}
              >
                View Details
              </Button>
            </Box>
          ))}
        </Container>
      </Box>

    </Box>
  );
}