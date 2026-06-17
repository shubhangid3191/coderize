import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const DARK_BG = "#012B43";
const ACCENT = '#e8622a';

const CoderizeLogoSVG = () => (
  <svg width="160" height="65" viewBox="0 0 210 75" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 44 10 C 24 10 8 26 8 46 C 8 61 18 71 31 71 C 21 64 16 56 18 44 C 21 26 36 18 51 21 C 64 24 71 36 66 51 C 62 62 51 68 40 66"
      stroke={ACCENT} strokeWidth="5" fill="none" strokeLinecap="round"
    />
    <path
      d="M 26 46 C 26 38 32 32 40 32 C 46 32 51 36 52 42"
      stroke={ACCENT} strokeWidth="4" fill="none" strokeLinecap="round"
    />
    <text x="76" y="40" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="800" fontSize="22" fill="white" letterSpacing="1.5">CODERIZE</text>
    <text x="76" y="56" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="6.5" fill="#6a8099" letterSpacing="2.5">TRANS·INNOVATE SPATIALLY</text>
  </svg>
);

const geospatialLinks = [
  { label: 'GIS Development', href: '/GISDevelopment' },
  { label: 'Location Intelligence', href: '/LocationIntelligence' },
  { label: 'Advisory', href: '/Advisory' },
  { label: 'Technical Support', href: '/GeospatialTechnicalSupport' },
  { label: 'Drone Services', href: '/drone-services' },
];

const softwareLinks = [
  { label: 'Application Development', href: '/ApplicationDevelopment' },
  { label: 'Azure Consulting', href: '/AzureConsulting' },
  { label: 'Advisory', href: '/SoftwareAdvisory' },
  { label: 'Technical Support', href: '/SoftwareTechnicalSupport' },
];

const quickLinks = [
  { label: 'Industries', href: '/Industries' },
  { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '/Contact' },
  { label: 'About Us', href: '/AboutCompany' },
  { label: 'Privacy Policy', href: 'PrivacyPolicy' },
  { label: 'Terms & Conditions', href: 'TermsConditions' },
];

const LinkItem = ({ label, href }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 1.4 }}>
    <FiberManualRecordIcon sx={{ fontSize: 8, color: '#5a7a96', flexShrink: 0 }} />
    <Link
      href={href}
      underline="none"
      sx={{
        color: '#b8cfe0',
        fontSize: '1.2rem',
        fontFamily: "'Segoe UI', sans-serif",
        transition: 'color 0.2s',
        '&:hover': { color: ACCENT },
      }}
    >
      {label}
    </Link>
  </Box>
);

const SocialBtn = ({ icon, href }) => (
  <IconButton
    href={href}
    target="_blank"
    sx={{
      border: '1.5px solid #2e4560',
      borderRadius: '8px',
      p: '8px',
      color: '#b8cfe0',
      width: 40,
      height: 40,
      transition: 'all 0.2s',
      '&:hover': {
        borderColor: ACCENT,
        color: ACCENT,
        bgcolor: 'rgba(232,98,42,0.08)',
      },
    }}
  >
    {icon}
  </IconButton>
);

const CTAButton = ({ children, href }) => (
  <Button
    href={href}
    variant="contained"
    sx={{
      bgcolor: ACCENT,
      color: '#fff',
      fontFamily: "'Segoe UI', sans-serif",
      fontWeight: 600,
      fontSize: { xs: '0.85rem', sm: '0.95rem' },
      px: { xs: 3, sm: 4 },
      py: 1.4,
      borderRadius: '6px',
      textTransform: 'none',
      boxShadow: 'none',
      '&:hover': {
        bgcolor: '#d4541f',
        boxShadow: 'none',
      },
    }}
  >
    {children}
  </Button>
);

export default function Footer() {
  
  return (
    <Box sx={{ bgcolor: DARK_BG, color: 'white' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>

        {/* CTA Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 3, sm: 2 },
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 500,
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.1rem' },
              color: '#b2b9cc',
            }}
          >
            Ready to supercharge your business?
          </Typography>
          <Stack direction="row" spacing={2} sx={{ flexShrink: 0 }}>
            <CTAButton href="#">Write To Us</CTAButton>
            <CTAButton href="#">Schedule</CTAButton>
          </Stack>
        </Box>

        <Divider sx={{ mb: 5, borderColor: '#e7eaed' }} />

        {/* Main Grid */}
        <Grid container spacing={{ xs: 4, md: 10 }}>

          {/* Brand */}
          <Grid item xs={12} sm={6} md={3}>
            <CoderizeLogoSVG />
            <Typography
              sx={{
                color: '#7a96ae',
                fontSize: '0.875rem',
                lineHeight: 1.75,
                fontFamily: "'Segoe UI', sans-serif",
                mt: 1.5,
                mb: 2.5,
                maxWidth: 290,
              }}
            >
              We are Ex-ESRI Experts with 15+ years industry experience. We
              excel in government and private projects, leveraging our expertise
              in ESRI and Open-source GIS technologies.
            </Typography>
            <Stack direction="row" gap={1}>
              <SocialBtn icon={<FacebookIcon sx={{ fontSize: 18 }} />} href="#" />
              <SocialBtn icon={<InstagramIcon sx={{ fontSize: 18 }} />} href="#" />
              <SocialBtn icon={<LinkedInIcon sx={{ fontSize: 18 }} />} href="#" />
              <SocialBtn icon={<YouTubeIcon sx={{ fontSize: 18 }} />} href="#" />
            </Stack>
          </Grid>

          {/* Geospatial */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: '1.5rem', color: 'white', mb: 2.5 }}>
              Geospatial
            </Typography>
            {geospatialLinks.map((l) => <LinkItem key={l.label} {...l} />)}
          </Grid>

          {/* Software */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: '1.5rem', color: 'white', mb: 2.5 }}>
              Software
            </Typography>
            {softwareLinks.map((l) => <LinkItem key={l.label} {...l} />)}
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography sx={{ fontFamily: "'Segoe UI', sans-serif", fontWeight: 600, fontSize: '1.5rem', color: 'white', mb: 2.5 }}>
              Quick Links
            </Typography>
            {quickLinks.map((l) => <LinkItem key={l.label} {...l} />)}
          </Grid>

        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ mt: 6, mb: 3, borderColor: '#e5eaf1' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              color: '#5a7388',
              fontSize: '0.98rem',
              fontFamily: "'Segoe UI', sans-serif",
              letterSpacing: 0.4,
              textTransform: 'uppercase',
            }}
          >
            COPYRIGHT © 2026, ALL RIGHTS RESERVED TO CODERIZE TECHNOLOGIES.
          </Typography>
          <Typography sx={{ color: '#5a7388', fontSize: '0.98rem', fontFamily: "'Segoe UI', sans-serif" }}>
            Design and Developed by{' '}
            <Link href="#" underline="hover" sx={{ color: '#7a96ae', '&:hover': { color: ACCENT } }}>
              RGB Design
            </Link>
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}