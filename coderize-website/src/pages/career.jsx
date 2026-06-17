import React, { useState } from 'react';
import { Box, Typography, Stack, Divider, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import career1 from "../assets/career1.png";
import career3 from "../assets/career3.png";

const NAVY = '#102A43';
const ORANGE = '#E07A36';
const ICON_BG = '#AFC4DD';

const Wrap = ({ children, sx }) => (
  <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, sm: 4, md: 5 }, ...sx }}>
    {children}
  </Box>
);

/* ---------------- Inline SVG Icons ---------------- */

const StepsIcon = () => (
  <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="80" width="26" height="20" rx="3" fill="#9FB8D6" />
    <rect x="42" y="60" width="26" height="40" rx="3" fill="#B8CBE3" />
    <rect x="74" y="40" width="26" height="60" rx="3" fill="#CFDCEE" />
    <circle cx="95" cy="22" r="18" fill="#1B3A5C" />
    <circle cx="95" cy="16" r="5" fill="#fff" />
    <path d="M87 30c2-5 6-7 8-7s6 2 8 7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const PersonPhotoIcon = () => (
  <svg width="40%" height="40%" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.4">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

const DotIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="6.5" fill="none" stroke="#444" strokeWidth="1.2" />
    <circle cx="8" cy="8" r="2" fill="#444" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.6">
    <rect x="4" y="3" width="10" height="18" />
    <rect x="14" y="9" width="6" height="12" />
    <line x1="7" y1="6" x2="7" y2="6.2" strokeLinecap="round" />
    <line x1="11" y1="6" x2="11" y2="6.2" strokeLinecap="round" />
    <line x1="7" y1="10" x2="7" y2="10.2" strokeLinecap="round" />
    <line x1="11" y1="10" x2="11" y2="10.2" strokeLinecap="round" />
    <line x1="7" y1="14" x2="7" y2="14.2" strokeLinecap="round" />
    <line x1="11" y1="14" x2="11" y2="14.2" strokeLinecap="round" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.6">
    <circle cx="8" cy="8" r="2.6" />
    <circle cx="16" cy="8" r="2.6" />
    <path d="M3 19c0-3 2.5-5 5-5s5 2 5 5" />
    <path d="M11 19c0-3 2.5-5 5-5s5 2 5 5" />
  </svg>
);

const PerksIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="1.6">
    <rect x="3" y="13" width="6" height="8" />
    <rect x="9" y="8" width="6" height="13" />
    <rect x="15" y="3" width="6" height="18" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="46" height="38" viewBox="0 0 48 40" fill="none">
    <path d="M14 0C6.3 0 0 6.3 0 14c0 7 5 12.7 11.6 13.8L8 40h8L20 26V14C20 6.3 21.7 0 14 0z" fill={ORANGE} />
    <path d="M38 0c-7.7 0-14 6.3-14 14 0 7 5 12.7 11.6 13.8L32 40h8l4-14V14C44 6.3 45.7 0 38 0z" fill={ORANGE} />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3A5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ClockSwirlIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WaveDecoration = () => (
  <svg viewBox="0 0 500 500" width="100%" height="100%" style={{ opacity: 0.5 }}>
    {[...Array(8)].map((_, i) => (
      <path
        key={i}
        d={`M ${20 + i * 8} 0 C ${250 + i * 10} ${150 + i * 10}, ${150 - i * 10} ${300 - i * 5}, ${400 + i * 6} 500`}
        stroke="#C9B8E8"
        strokeWidth="1"
        fill="none"
      />
    ))}
  </svg>
);

const SafeImage = ({ src, alt, sx }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <Box sx={{ ...sx, bgcolor: '#E7EDF5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <PersonPhotoIcon />
      </Box>
    );
  }

  return <Box component="img" src={src} alt={alt} sx={sx} onError={() => setFailed(true)} />;
};

/* ---------------- Static Content ---------------- */

const tickerItems = [
  'Drone Mapping Specialists',
  'Azure Cloud Experts.',
  'EX-ESRI Professionals',
  'Custom Software Developers',
  'GIS Consultants',
];

const features = [
  {
    icon: <BuildingIcon />,
    title: 'Company Values',
    desc: 'We are committed to innovation, collaboration, and excellence in everything we do.',
  },
  {
    icon: <PeopleIcon />,
    title: 'Culture & Environment',
    desc: 'We foster a dynamic, supportive, and collaborative workspace where creativity and growth thrive.',
  },
  {
    icon: <PerksIcon />,
    title: 'Benefits & Perks',
    desc: 'We offer competitive salaries, flexible hours, and ongoing professional development opportunities.',
  },
];

// NOTE: only the first testimonial's text has been confirmed against your
// live-site screenshot and corrected to match exactly. Replace the other
// two with your real copy whenever you have it — they're placeholders so
// the arrow navigation has something to cycle through.
const testimonials = [
  {
    quote:
      'I am overwhelmed to share my experience with CodeRize Technologies Pvt. Ltd which offers a dynamic and professional work culture that encourages collaboration and innovation. The supportive and skilled team ensures a productive environment with excellent opportunities for career development.',
    name: 'Dipika Gote',
    role: 'Project Lead Intern',
    
  },
  {
    quote:
      'Working here helped me maintain a great work-life balance. We have a supportive and friendly team that is incredibly insightful and helps you grow every single day.',
    name: 'Rohit Sharma',
    role: 'GIS Developer Intern',
  },
  {
    quote:
      'The mentorship and hands-on project exposure at CodeRize gave me the confidence to take on real client work within my first few months here.',
    name: 'Ananya Patil',
    role: 'Software Developer Intern',
  },
];

const jobs = [
  {
    title: 'Python Developer Intern',
    desc: 'We are looking for a Python Developer Intern to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
  {
    title: 'Digital Marketing Intern',
    desc: 'We are looking for a Digital Marketing Intern to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
  {
    title: 'Graphic Design Intern',
    desc: 'We are looking for a Graphic Design Intern to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
    {
    title: 'Software Tester Intern',
    desc: 'We are looking for a Software Tester Intern to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
  {
    title: 'Sales Intern',
    desc: 'We are looking for a Sales Intern to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
    {
    title: 'Marketing Intern',
    desc: 'We are looking for a Marketing Intern to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
   {
    title: 'Sales Executive',
    desc: 'We are looking for a Sales Executive to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
  {
    title: 'E-Mail Marketing Specialist',
    desc: 'We are looking for a E-Mail Marketing Specialist to join our team',
    tags: ['Full Time', 'Intern', 'Work From Office'],
    path: "/JobDetailPage",
  },
];

/* ---------------- Page Component ---------------- */

const Careers = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const maxIndex = testimonials.length - 1;

  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const baseUnit = [...tickerItems, ...tickerItems, ...tickerItems];
  const loopItems = [...baseUnit, ...baseUnit];

  return (
    <Box sx={{ position: 'relative' }}>
      {/* ---------- HERO ---------- */}
      <Box
        sx={{
          background: 'linear-gradient(120deg, #FBE3CF 0%, #FCEFE2 35%, #FFFFFF 75%)',
          pt: { xs: 12, sm: 13, md: 15 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Wrap>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 5, md: 6 } }}>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography variant="body2" sx={{ color: '#8a8f98', mb: 2, fontSize: '0.95rem' }}>
                <Box component="span" sx={{ color: NAVY, fontWeight: 700 }}>Home</Box>
                {'  »  '}
                <Box component="span" sx={{ color: '#8a8f98' }}>Career</Box>
              </Typography>

              <Typography
                variant="h2"
                sx={{ color: NAVY, fontWeight: 800, mb: 3, fontSize: { xs: '2.2rem', sm: '2.6rem', md: '3rem' } }}
              >
                Grow With Us!!
              </Typography>

              <Typography sx={{ color: '#3c3c3c', fontSize: '1.05rem', lineHeight: 1.8, mb: 3 }}>
                At CodeRize Technologies, we drive innovation and excellence in geospatial
                and IT solutions. Our dynamic team values creativity and collaboration. We
                provide exciting career opportunities through internships. Exploratory
                programs and entry-level roles are also available. These positions provide
                valuable training for students and recent graduates eager to start their
                careers.
              </Typography>

              <Typography sx={{ color: '#3c3c3c', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Share your CV with us at{' '}
                <Box component="span" sx={{ fontWeight: 700, color: '#222' }}>
                  ctplhr@coderize.in
                </Box>{' '}
                and discover how you can contribute to our mission.
              </Typography>
            </Box>

            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 300, sm: 380, md: 460 },
                  width: '100%',
                  maxWidth: 520,
                  mx: { xs: 'auto', md: 0 },
                  ml: { md: 'auto' },
                }}
              >
                <SafeImage
                  src={career1}
                  alt="Team member working at desk"
                  sx={{
                    position: 'absolute', top: 0, left: 0,
                    width: { xs: '70%', sm: '65%' }, height: { xs: '60%', sm: '62%' },
                    objectFit: 'cover', borderRadius: 2, boxShadow: 4,
                  }}
                />
                <SafeImage
                  src={career3}
                  alt="Team member working on laptop"
                  sx={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: { xs: '62%', sm: '58%' }, height: { xs: '58%', sm: '60%' },
                    objectFit: 'cover', borderRadius: 2, boxShadow: 4,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute', left: '20%', bottom: '12%',
                    width: { xs: 100, sm: 130 }, height: { xs: 100, sm: 130 },
                    bgcolor: '#E7EDF5', borderRadius: 2, boxShadow: 4, p: 1.5,
                  }}
                >
                  <StepsIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Wrap>
      </Box>

      {/* ---------- TICKER ---------- */}
      <Box sx={{ bgcolor: '#EFEFEF', overflow: 'hidden', py: 2.5, whiteSpace: 'nowrap' }}>
        <Box
          sx={{
            display: 'inline-flex', alignItems: 'center', gap: 2,
            animation: 'ticker-scroll 35s linear infinite',
            '@keyframes ticker-scroll': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
          }}
        >
          {loopItems.map((item, idx) => (
            <Box key={idx} sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontSize: { xs: '0.95rem', md: '1.1rem' }, color: '#2b2b2b', fontWeight: 500 }}>
              <DotIcon />
              <span>{item}</span>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ---------- WHY WORK WITH US ---------- */}
      <Box sx={{ bgcolor: '#fff', py: { xs: 6, md: 10 } }}>
        <Wrap>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 5, md: 8 } }}>
            <Box sx={{ width: { xs: '100%', md: '42%' } }}>
              <Typography variant="h3" sx={{ color: NAVY, fontWeight: 800, mb: 3, fontSize: { xs: '1.9rem', md: '2.3rem' } }}>
                Why Work With Us?
              </Typography>
              <Typography sx={{ color: '#3c3c3c', fontSize: '1.05rem', lineHeight: 1.8 }}>
                At CodeRize, we foster a culture of innovation, collaboration, and
                continuous learning. Our team is committed to tackling real-world
                challenges while providing opportunities to work on exciting projects
                that align with your skills and passions. Join us to grow professionally
                in a supportive and dynamic environment.
              </Typography>
            </Box>

            <Box sx={{ width: { xs: '100%', md: '58%' } }}>
              <Stack spacing={4}>
                {features.map((f, idx) => (
                  <Stack key={idx} direction="row" spacing={3} alignItems="flex-start">
                    <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: ICON_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {f.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ color: ORANGE, fontWeight: 700, fontSize: '1.2rem', mb: 0.5 }}>{f.title}</Typography>
                      <Typography sx={{ color: '#3c3c3c', fontSize: '1rem', lineHeight: 1.7 }}>{f.desc}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Wrap>
      </Box>

      {/* ---------- TESTIMONIALS ---------- */}
      <Box
        sx={{
          bgcolor: "#C7D4E3",
          py: { xs: 6, md: 8 },
        }}
      >
        <Wrap>
          <Typography
            sx={{
              color: NAVY,
              fontSize: { xs: "2rem", md: "2.1rem" },
              fontWeight: 500,
              mb: { xs: 4, md: 5 },
            }}
          >
            What Our Employee Say
          </Typography>

          <Box sx={{ display: "flex", gap: { xs: 2, md: 5 } }}>
            {/* Quote Icon */}
            <Box
              sx={{
                color: ORANGE,
                fontSize: { xs: "4rem", md: "5rem" },
                lineHeight: 1,
                fontWeight: 700,
                flexShrink: 0,
                mt: 1,
              }}
            >
              ❝
            </Box>

            {/* Testimonial Content */}
            <Box sx={{ flex: 1, maxWidth: "950px" }}>
              <Typography
                sx={{
                  color: "#17324D",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.7,
                  mb: 4,
                }}
              >
                {testimonials[index].quote}
              </Typography>

              <Typography
                sx={{
                  color: NAVY,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 500,
                }}
              >
                {testimonials[index].name}
              </Typography>

              <Typography
                sx={{
                  color: ORANGE,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 500,
                  mt: 0.5,
                }}
              >
                {testimonials[index].role}
              </Typography>
            </Box>
          </Box>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1.5,
              mt: { xs: 4, md: 5 },
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                width: 46,
                height: 46,
                border: `1px solid ${NAVY}`,
                color: NAVY,
              }}
            >
              <ArrowLeftIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                width: 46,
                height: 46,
                border: `1px solid ${NAVY}`,
                color: NAVY,
              }}
            >
              <ArrowRightIcon fontSize="small" />
            </IconButton>
          </Box>
        </Wrap>
      </Box>
  
    {/* ---------- JOB OFFERS ---------- */}
    <Box
      sx={{
        bgcolor: "#fff",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: { xs: -100, md: -40 },
          top: 0,
          width: { xs: 320, md: 480 },
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <WaveDecoration />
      </Box>

      <Wrap sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: NAVY,
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Our Job Offers
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 500,
              }}
            >
              We offer you a unique opportunity to learn, grow, and be part
              of an exciting team and experience.
            </Typography>
          </Box>
        </Box>

        {/* Jobs List */}
        <Stack divider={<Divider sx={{ borderColor: "#E0E0E0" }} />} spacing={4}>
          {jobs.map((job, idx) => (
            <Box key={idx} sx={{ py: 1 }}>
              {/* Title + View Details */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: 1.5,
                }}
              >
                <Typography
                  sx={{
                    color: NAVY,
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                  }}
                >
                  {job.title}
                </Typography>

                <Box
                onClick={() => navigate(job.path)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    cursor: "pointer",
                    color: ORANGE,
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: ORANGE,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      borderBottom: `2px solid ${ORANGE}`,
                      pb: 0.2,
                    }}
                  >
                    View Details
                  </Typography>

                  <Typography
                    sx={{
                      color: ORANGE,
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    →
                  </Typography>
                </Box>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  color: "#555",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  mb: 2,
                  maxWidth: "85%",
                }}
              >
                {job.desc}
              </Typography>

              {/* Tags */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                flexWrap="wrap"
                sx={{ color: "#6b6b6b" }}
              >
                {job.tags.map((tag, tIdx) => (
                  <React.Fragment key={tIdx}>
                    {tIdx > 0 && (
                      <Box
                        sx={{
                          width: "1px",
                          height: 16,
                          bgcolor: "#ccc",
                        }}
                      />
                    )}

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "#777",
                      }}
                    >
                      {tag}
                    </Typography>
                  </React.Fragment>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Wrap>
    </Box>
    </Box>
  );
};

export default Careers;