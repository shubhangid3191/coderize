import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box, Container, Typography, Divider, List, ListItem,
  ListItemText, Paper, Link, Button,
  Dialog, DialogTitle, DialogContent, IconButton, TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CloseIcon from "@mui/icons-material/Close";

// ─── Job Data ─────────────────────────────────────────────────────────────────

const jobs = {

  "python-developer-intern": {
    title: "Python Developer Intern",
    location: "Pune, India",
    period: "6 months",
    jobType: "Full Time (From Office)",
    qualifications: [
      "Should have master's degree BCA, MCA, MCS, BE, ME",
      "Basic Understanding of Object Oriented Programming",
      "Knowledge of Django, Flask or similar Python frameworks",
      "Familiarity with the libraries like pandas, geopandas, GDAL/OGR, numpy, etc.",
      "Familiarity with front-end technologies, such as JavaScript, HTML5, and CSS3",
      "Knowledge of Relational Databases & SQL concepts",
    ],
    responsibilities: [
      "Writing effective and scalable Python codes",
      "Designing and implementing robust applications",
      "Debugging applications to ensure low latency and high-availability",
      "Integrating user-facing elements with server-side logic",
      "Implementing security and data protection",
      "Accommodating various data storage solutions",
      "Analysing and customizing the source code as per business requirements",
      "Integrating and developing code with a version control tool (we use Git and GitHub)",
      "Coordinating in development and deployment activities",
    ],
  },
  "email-marketing-specialist": {
    title: "E-Mail Marketing Specialist",
    location: "Pune, India",
    period: "6 months",
    jobType: "Full Time (From Office)",
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "Experience with email marketing platforms (Mailchimp, HubSpot, etc.)",
      "Strong copywriting and editing skills",
      "Understanding of email marketing metrics and KPIs",
      "Knowledge of HTML/CSS for email templates",
    ],
    responsibilities: [
      "Plan and execute email marketing campaigns",
      "Manage email lists and segmentation",
      "Design and write compelling email content",
      "Analyse campaign performance metrics",
      "A/B test subject lines and email content",
      "Ensure compliance with email marketing regulations",
    ],
  },
  "sales-executive": {
    title: "Sales Executive",
    location: "Pune, India",
    period: "Full Time",
    jobType: "Full Time (From Office)",
    qualifications: [
      "Bachelor's degree in Business or related field",
      "Proven track record in sales",
      "Excellent communication and negotiation skills",
      "Experience with CRM tools",
      "Self-motivated and target-driven",
    ],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Achieve monthly and quarterly sales targets",
      "Prepare and deliver sales presentations",
      "Collaborate with internal teams to meet client needs",
      "Maintain accurate records in CRM",
    ],
  },
  "marketing-intern": {
    title: "Marketing Intern",
    location: "Pune, India",
    period: "3 months",
    jobType: "Full Time (From Office)",
    qualifications: [
      "Pursuing or completed a degree in Marketing or related field",
      "Familiarity with social media platforms",
      "Basic knowledge of SEO and content marketing",
      "Good communication and writing skills",
      "Creative thinking and attention to detail",
    ],
    responsibilities: [
      "Assist in planning and executing marketing campaigns",
      "Create content for social media channels",
      "Conduct market research and competitor analysis",
      "Support the team with administrative tasks",
      "Track and report on campaign metrics",
    ],
  },
  "sales-intern": {
    title: "Sales Intern",
    location: "Pune, India",
    period: "3 months",
    jobType: "Full Time (From Office)",
    qualifications: [
      "Pursuing or completed a degree in Business, Marketing, or related field",
      "Strong interpersonal and communication skills",
      "Eagerness to learn and grow in a sales environment",
      "Basic understanding of sales processes",
    ],
    responsibilities: [
      "Support the sales team with lead generation",
      "Assist in preparing sales presentations and proposals",
      "Conduct outreach to potential clients",
      "Maintain records in CRM systems",
      "Participate in team meetings and training sessions",
    ],
  },
  "software-tester-intern": {
    title: "Software Tester Intern",
    location: "Pune, India",
    period: "6 months",
    jobType: "Full Time (From Office)",
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "Basic knowledge of software testing methodologies",
      "Familiarity with bug tracking tools like JIRA",
      "Understanding of SDLC and STLC",
      "Good analytical and problem-solving skills",
    ],
    responsibilities: [
      "Execute test cases (manual and automated)",
      "Identify, record, document, and track bugs",
      "Perform regression testing when bugs are resolved",
      "Coordinate with developers to understand requirements",
      "Prepare detailed test reports",
      "Ensure product quality meets standards before release",
    ],
  },
  "graphic-design-intern": {
    title: "Graphic Design Intern",
    location: "Pune, India",
    period: "3 months",
    jobType: "Full Time (From Office)",
    qualifications: [
      "Pursuing or completed a degree in Graphic Design or related field",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.)",
      "Strong portfolio demonstrating design skills",
      "Understanding of design principles and typography",
      "Ability to work under tight deadlines",
    ],
    responsibilities: [
      "Create visual content for digital and print media",
      "Collaborate with marketing and development teams",
      "Design UI mockups and prototypes",
      "Maintain brand consistency across all materials",
      "Incorporate feedback into revised designs",
    ],
  },

};

const relatedJobs = [
    { label: "Python Developer Intern",     key: "python-developer-intern" },
  { label: "E-Mail Marketing Specialist", key: "email-marketing-specialist" },
  { label: "Sales Executive",             key: "sales-executive" },
  { label: "Marketing Intern",            key: "marketing-intern" },
  { label: "Sales Intern",                key: "sales-intern" },
  { label: "Software Tester Intern",      key: "software-tester-intern" },
  { label: "Graphic Design Intern",       key: "graphic-design-intern" },
  { label: "Digital Marketing Intern",    key: "digital-marketing-intern" },
];

// ─── Apply Modal ──────────────────────────────────────────────────────────────

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",
    bgcolor: "#fff",
    fontSize: "0.9rem",
    "& fieldset": { borderColor: "#d0d0d0" },
    "&:hover fieldset": { borderColor: "#999" },
    "&.Mui-focused fieldset": { borderColor: "#1a3a5c", borderWidth: "1.5px" },
  },
  "& .MuiInputBase-input::placeholder": { color: "#aaa", opacity: 1 },
};

function ApplyModal({ open, onClose, jobTitle }) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    linkedin: "", intro: "",
  });
  const [resumeLabel, setResumeLabel] = useState("No file chosen");
  const [resumeFile, setResumeFile] = useState(null);
  const [checked, setChecked] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) { setResumeFile(file); setResumeLabel(file.name); }
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email || !form.intro || !resumeFile) {
      alert("Please fill all required fields."); return;
    }
    if (!checked) { alert("Please confirm you are not a robot."); return; }
    alert(`Application for "${jobTitle}" submitted successfully!`);
    onClose();
  };

  // reset form when closed
  const handleClose = () => {
    setForm({ name: "", phone: "", email: "", linkedin: "", intro: "" });
    setResumeLabel("No file chosen");
    setResumeFile(null);
    setChecked(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: "10px",
          m: { xs: 1.5, sm: 3 },
          width: "100%",
          maxWidth: 560,
        },
      }}
    >
      {/* Title */}
      <DialogTitle
        sx={{
          textAlign: "center",
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: 600,
          fontSize: { xs: "1.2rem", sm: "1.45rem" },
          color: "#1a1a2e",
          pt: 3, pb: 2,
          borderBottom: "1px solid #eee",
          position: "relative",
        }}
      >
        Job Application Form
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            position: "absolute", top: 10, right: 10,
            color: "#666", "&:hover": { color: "#b5451b" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      {/* Scrollable body */}
      <DialogContent sx={{ px: { xs: 2.5, sm: 3.5 }, py: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

          {/* Name */}
          <TextField
            name="name" placeholder="Name*"
            value={form.name} onChange={handle}
            fullWidth size="small" sx={inputSx}
          />

          {/* Phone + Email row */}
          <Box sx={{ display: "flex", gap: 1.5, flexDirection: { xs: "column", sm: "row" } }}>
            <TextField
              name="phone" placeholder="Phone*"
              value={form.phone} onChange={handle}
              fullWidth size="small" sx={inputSx}
            />
            <TextField
              name="email" placeholder="Email*"
              value={form.email} onChange={handle}
              fullWidth size="small" sx={inputSx}
            />
          </Box>

          {/* LinkedIn */}
          <Box>
            <Typography sx={{
              fontSize: "0.88rem", fontWeight: 700,
              color: "#c0541e", mb: 0.6,
              fontFamily: "'Segoe UI', sans-serif",
            }}>
              LinkedIn Profile
            </Typography>
            <TextField
              name="linkedin"
              placeholder="https://www.linkedin.com/in/profile-name/"
              value={form.linkedin} onChange={handle}
              fullWidth size="small" sx={inputSx}
            />
          </Box>

          {/* Resume */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <Typography sx={{
              fontSize: "0.88rem", fontWeight: 700,
              color: "#c0541e", fontFamily: "'Segoe UI', sans-serif",
              whiteSpace: "nowrap",
            }}>
              Resume*
            </Typography>
            <Box component="label" sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer" }}>
              <Box
                component="span"
                sx={{
                  px: 2, py: "5px",
                  border: "1px solid #bbb",
                  borderRadius: "4px",
                  fontSize: "0.82rem",
                  bgcolor: "#efefef",
                  color: "#333",
                  fontFamily: "'Segoe UI', sans-serif",
                  userSelect: "none",
                  "&:hover": { bgcolor: "#e2e2e2" },
                }}
              >
                Choose Files
              </Box>
              <Typography sx={{ fontSize: "0.82rem", color: "#666", fontFamily: "'Segoe UI', sans-serif" }}>
                {resumeLabel}
              </Typography>
              <input type="file" accept=".pdf,.doc,.docx" style={{ display: "none" }} onChange={handleFile} />
            </Box>
          </Box>

          {/* Short Introduction */}
          <TextField
            name="intro" placeholder="Short Introduction*"
            value={form.intro} onChange={handle}
            fullWidth multiline rows={4} sx={inputSx}
          />

          {/* reCAPTCHA row */}
          <Box
            sx={{
              display: "flex", alignItems: "center", gap: 2,
              border: "1px solid #d0d0d0",
              borderRadius: "4px",
              px: 2, py: 1.5,
              bgcolor: "#f9f9f9",
              width: "fit-content",
              minWidth: 280,
            }}
          >
            {/* checkbox */}
            <Box
              onClick={() => setChecked((c) => !c)}
              sx={{
                width: 22, height: 22, flexShrink: 0,
                border: `2px solid ${checked ? "#4a90d9" : "#c0c0c0"}`,
                borderRadius: "3px",
                bgcolor: checked ? "#4a90d9" : "#fff",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}
            >
              {checked && (
                <Box component="svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5L5 9.5L11 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
              )}
            </Box>

            <Typography sx={{ fontSize: "0.88rem", color: "#333", fontFamily: "'Segoe UI', sans-serif", userSelect: "none" }}>
              I'm not a robot
            </Typography>

            {/* reCAPTCHA logo block */}
            <Box sx={{ ml: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
              <Box component="svg" width={38} height={38} viewBox="0 0 38 38" fill="none">
                <rect width="38" height="38" rx="3" fill="#f0f0f0" />
                {/* circular arrow icon */}
                <path d="M19 9 A10 10 0 1 1 9 19" stroke="#4a90d9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M14 9 L19 9 L19 14" stroke="#e8622a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </Box>
              <Typography sx={{ fontSize: "0.58rem", color: "#555", fontFamily: "'Segoe UI', sans-serif", fontWeight: 600 }}>
                reCAPTCHA
              </Typography>
              <Typography sx={{ fontSize: "0.5rem", color: "#999", fontFamily: "'Segoe UI', sans-serif" }}>
                Privacy - Terms
              </Typography>
            </Box>
          </Box>

          {/* Submit button */}
          <Button
            onClick={handleSubmit}
            fullWidth
            disableElevation
            sx={{
              bgcolor: "#1a3a5c",
              color: "#fff",
              py: 1.6,
              borderRadius: "6px",
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "none",
              fontFamily: "'Segoe UI', sans-serif",
              mt: 0.5,
              "&:hover": { bgcolor: "#14304f" },
            }}
          >
            Submit
          </Button>

        </Box>
      </DialogContent>
    </Dialog>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function BulletList({ items }) {
  return (
    <List dense disablePadding>
      {items.map((item, i) => (
        <ListItem key={i} disableGutters sx={{ alignItems: "flex-start", py: 0.4 }}>
          <FiberManualRecordIcon sx={{ fontSize: 8, mt: "7px", mr: 1.5, color: "text.primary", flexShrink: 0 }} />
          <ListItemText
            primary={item}
            primaryTypographyProps={{ variant: "body2", color: "text.primary", lineHeight: 1.7 }}
          />
        </ListItem>
      ))}
    </List>
  );
}

function DetailRow({ label, value, isHighlight }) {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 0.5, sm: 2 },
        py: 2.5,
      }}>
        <Typography variant="body1" sx={{
          minWidth: { sm: 220 },
          color: isHighlight ? "#b5451b" : "text.primary",
          fontWeight: isHighlight ? 600 : 400,
          flexShrink: 0,
        }}>
          {label}
        </Typography>
        {typeof value === "string"
          ? <Typography variant="body1" color="text.primary">{value}</Typography>
          : <Box sx={{ flex: 1 }}>{value}</Box>
        }
      </Box>
      <Divider />
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function JobDetailPage() {
  // If using React Router, swap these two lines:
  // const { jobKey } = useParams();
  // const navigate  = useNavigate();
  // and replace activeJob → jobKey, setActiveJob(k) → navigate(`/career/${k}`)

  const [activeJob, setActiveJob]   = useState("python-developer-intern");
  const [prevJob,   setPrevJob]     = useState(null);   // ← tracks previous job
  const [applyOpen, setApplyOpen]   = useState(false);
  const job = jobs[activeJob];

  // Switch job and remember where we came from
  const switchJob = (key) => {
    if (key === activeJob) return;
    setPrevJob(activeJob);          // save current before switching
    setActiveJob(key);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Go back to previous job
  const goBack = () => {
    if (!prevJob) return;
    setActiveJob(prevJob);
    setPrevJob(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>

        {/* ── Back link (shows only after navigating to a related job) ── */}
        {prevJob && (
          <Box
            onClick={goBack}
            sx={{
              display: "inline-flex", alignItems: "center", gap: 0.6,
              mb: 2.5, cursor: "pointer", color: "#b5451b",
              fontSize: "0.88rem", fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 15 }} />
            Back to {jobs[prevJob].title}
          </Box>
        )}

        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}>

          {/* ── Main Content ── */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 1, mb: 1,
            }}>
              <Typography variant="h4" sx={{
                fontWeight: 400,
                fontSize: { xs: "1.6rem", md: "2rem" },
                color: "#1a1a1a",
              }}>
                {job.title}
              </Typography>

              <Link
                component="button"
                underline="none"
                onClick={() => setApplyOpen(true)}
                sx={{
                  display: "flex", alignItems: "center", gap: 0.5,
                  color: "#1a1a1a", fontWeight: 400, fontSize: "0.95rem",
                  whiteSpace: "nowrap", background: "none", border: "none",
                  cursor: "pointer",
                  "&:hover": { color: "#b5451b" },
                  borderBottom: "1px solid #1a1a1a", pb: 0.2,
                }}
              >
                Apply Now <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Link>
            </Box>

            <Divider />

            <DetailRow label="Job Location:"       value={job.location} />
            <DetailRow label="Internship Period:"   value={job.period} />
            <DetailRow
              label="Qualifications & Skills:"
              value={<BulletList items={job.qualifications} />}
              isHighlight
            />
            <DetailRow
              label="Responsibilities:"
              value={<BulletList items={job.responsibilities} />}
              isHighlight
            />
            <DetailRow label="Job Type:" value={job.jobType} />
          </Box>

          {/* ── Related Jobs Sidebar ── */}
          <Box sx={{ width: { xs: "100%", md: 280 }, flexShrink: 0 }}>
            <Typography variant="h6" sx={{
              fontWeight: 500, mb: 1, fontSize: "1.05rem", color: "#1a1a1a",
            }}>
              Related Jobs
            </Typography>
            <Paper elevation={0} sx={{ bgcolor: "#dde3ea", borderRadius: 1, overflow: "hidden" }}>
              {relatedJobs
                // ✅ Hide the currently active job from sidebar
                .filter((rj) => rj.key !== activeJob)
                .map((rj, i, arr) => (
                  <Box key={rj.key}>
                    <Box
                      onClick={() => switchJob(rj.key)}
                      sx={{
                        px: 2.5, py: 2, cursor: "pointer",
                        bgcolor: "transparent",
                        "&:hover": { bgcolor: "#cdd4dc" },
                        transition: "background 0.15s",
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#1a1a1a" }}>
                        {rj.label}
                      </Typography>
                    </Box>
                    {i < arr.length - 1 && (
                      <Divider sx={{ borderColor: "#b5451b", mx: 2.5 }} />
                    )}
                  </Box>
                ))}
            </Paper>
          </Box>

        </Box>
      </Container>

      {/* Apply Modal */}
      <ApplyModal
        open={applyOpen}
        onClose={() => setApplyOpen(false)}
        jobTitle={job.title}
      />
    </Box>
  );
}