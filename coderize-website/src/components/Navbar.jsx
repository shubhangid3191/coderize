import { useState, useRef, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, Link, IconButton,
  Drawer, List, ListItem, ListItemText, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ACCENT = '#e8622a';
const NAVBAR_HEIGHT_XS = 64;
const NAVBAR_HEIGHT_MD = 72;
const SCROLL_THRESHOLD = 80;

const navItems = [
  {
    label: 'Services',
    children: [
      { label: 'Geospatial', href: '/Geospatial' },
      { label: 'Software', href: '/Software' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'GeoSphere (New Launch)', href: '/GeoSphere' },
      { label: 'GeoSet', href: '/GeoSet' },
      { label: 'GeoScan', href: '/GeoScan' },
      { label: 'GeoFlow', href: '/GeoFlow' },
    ],
  },
  { label: 'Industries', href: '/Industries' },
  {
    label: 'About Us',
    children: [
      { label: 'About Company', href: '/AboutCompany' },
      { label: 'Leadership', href: '/Leadership' },
      { label: 'Code of Conduct', href: '/CodeOfConduct' },
    ],
  },
  { label: 'Careers', href: '/career' },
  {
    label: 'Library',
    children: [
      { label: 'Blogs', href: '/Blogs' },
      { label: 'Case Studies', href: '/CaseStudies' },
    ],
  },
];

function DropdownMenu({ items, visible }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: '50%',
        minWidth: 210,
        bgcolor: '#fff',
        boxShadow: '0 12px 32px rgba(0,0,0,0.13)',
        borderRadius: '10px',
        py: 1,
        zIndex: 1300,
        border: '1px solid #f0f0f0',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
        transform: visible
          ? 'translateX(-50%) translateY(0)'
          : 'translateX(-50%) translateY(-6px)',
        transition: 'opacity 0.18s ease, transform 0.18s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 12,
          height: 12,
          bgcolor: '#fff',
          border: '1px solid #f0f0f0',
          borderRight: 'none',
          borderBottom: 'none',
          rotate: '45deg',
        },
      }}
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          underline="none"
          sx={{
            display: 'block',
            px: 2.5,
            py: 1,
            color: '#2a3a4a',
            fontSize: '0.875rem',
            fontFamily: "'Segoe UI', sans-serif",
            fontWeight: 400,
            transition: 'color 0.15s, background 0.15s',
            '&:hover': { color: ACCENT, bgcolor: '#fdf3ee' },
          }}
        >
          {item.label}
        </Link>
      ))}
    </Box>
  );
}

export default function Navbar({ transparentHero = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timerRef = useRef({});

  useEffect(() => {
    // Remove MUI's default body padding-top that causes white gap
    document.body.style.paddingTop = '0px';

    if (!transparentHero) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentHero]);

  const isTransparent = transparentHero && !scrolled;

  const handleMouseEnter = (label) => {
    clearTimeout(timerRef.current[label]);
    setHovered(label);
  };
  const handleMouseLeave = (label) => {
    timerRef.current[label] = setTimeout(() => {
      setHovered((prev) => (prev === label ? null : prev));
    }, 120);
  };
  const toggleMobileMenu = (label) =>
    setOpenMenus((p) => ({ ...p, [label]: !p[label] }));

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          bgcolor: isTransparent ? 'transparent' : 'transparent',
          borderBottom: isTransparent ? 'none' : '1px solid #e8ecf0',
          boxShadow: isTransparent ? 'none' : '0 2px 12px rgba(0,0,0,0.07)',
          transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
          zIndex: 1200,
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            maxWidth: '1280px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4, lg: 5 },
            minHeight: { xs: `${NAVBAR_HEIGHT_XS}px !important`, md: `${NAVBAR_HEIGHT_MD}px !important` },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link href="/" sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Box
              component="img"
              src="https://coderize.in/wp-content/uploads/2024/08/logo.svg"
              alt="Coderize"
              sx={{
                height: { xs: 40, md: 52 },
                width: 'auto',
                display: 'block',
                filter: isTransparent ? 'brightness(0) invert(1)' : 'none',
                transition: 'filter 0.4s ease',
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { md: 0.5, lg: 1 },
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                sx={{ position: 'relative' }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave(item.label)}
              >
                {item.children ? (
                  <Button
                    disableRipple
                    endIcon={
                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: '16px !important',
                          transition: 'transform 0.2s',
                          transform: hovered === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: 'inherit',
                        }}
                      />
                    }
                    sx={{
                      color: isTransparent ? '#ffffff' : '#1a2a3a',
                      fontFamily: "'Segoe UI', sans-serif",
                      fontWeight: 500,
                      fontSize: { md: '0.9rem', lg: '1rem' },
                      textTransform: 'none',
                      px: { md: 1, lg: 1.5 },
                      py: 1,
                      borderRadius: '6px',
                      bgcolor: 'transparent',
                      transition: 'color 0.4s ease',
                      '&:hover': {
                        color: isTransparent ? 'rgba(255,255,255,0.75)' : ACCENT,
                        bgcolor: 'transparent',
                      },
                      '& .MuiButton-endIcon': { ml: 0.3 },
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    href={item.href}
                    disableRipple
                    sx={{
                      color: isTransparent ? '#ffffff' : '#1a2a3a',
                      fontFamily: "'Segoe UI', sans-serif",
                      fontWeight: 500,
                      fontSize: { md: '0.9rem', lg: '1rem' },
                      textTransform: 'none',
                      px: { md: 1, lg: 1.5 },
                      py: 1,
                      borderRadius: '6px',
                      bgcolor: 'transparent',
                      transition: 'color 0.4s ease',
                      '&:hover': {
                        color: isTransparent ? 'rgba(255,255,255,0.75)' : ACCENT,
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )}

                {item.children && (
                  <DropdownMenu items={item.children} visible={hovered === item.label} />
                )}
              </Box>
            ))}
          </Box>

          {/* Contact Us Button */}
          <Button
            href="/contact"
            variant="contained"
            disableElevation
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              bgcolor: isTransparent ? 'rgba(255,255,255,0.15)' : ACCENT,
              color: '#fff',
              border: isTransparent ? '1.5px solid rgba(255,255,255,0.6)' : '1.5px solid transparent',
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: { md: '0.9rem', lg: '1rem' },
              textTransform: 'none',
              px: { md: 3, lg: 4 },
              py: { md: 1.2, lg: 1.5 },
              borderRadius: '8px',
              flexShrink: 0,
              letterSpacing: 0.3,
              backdropFilter: isTransparent ? 'blur(4px)' : 'none',
              transition: 'all 0.4s ease',
              '&:hover': {
                bgcolor: isTransparent ? 'rgba(255,255,255,0.25)' : '#c94f1c',
                borderColor: isTransparent ? 'rgba(255,255,255,0.9)' : 'transparent',
              },
            }}
          >
            Contact Us
          </Button>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{
              display: { md: 'none' },
              color: isTransparent ? '#ffffff' : '#1a2a3a',
              ml: 'auto',
              transition: 'color 0.4s ease',
            }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer — only on non-hero pages */}
      {!transparentHero && (
        <Box sx={{ height: { xs: `${NAVBAR_HEIGHT_XS}px`, md: `${NAVBAR_HEIGHT_MD}px` } }} />
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '80vw', sm: 300 },
            bgcolor: '#fff',
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1.5,
            borderBottom: '1px solid #f0f0f0',
          }}
        >
          <Box
            component="img"
            src="https://coderize.in/wp-content/uploads/2024/08/logo.svg"
            alt="Coderize"
            sx={{ height: 36, width: 'auto' }}
          />
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#1a2a3a' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1.5, pt: 1 }}>
          {navItems.map((item) => (
            <Box key={item.label}>
              <ListItem
                button
                onClick={() => (item.children ? toggleMobileMenu(item.label) : setMobileOpen(false))}
                component={item.children ? 'div' : 'a'}
                href={item.children ? undefined : item.href}
                sx={{
                  borderRadius: '8px',
                  mb: 0.5,
                  py: 1.1,
                  '&:hover': { bgcolor: '#fdf3ee' },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: "'Segoe UI', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: item.label === 'Careers' ? 700 : 500,
                    color: item.label === 'Careers' ? ACCENT : '#1a2a3a',
                  }}
                />
                {item.children && (
                  <KeyboardArrowDownIcon
                    sx={{
                      color: '#aaa',
                      fontSize: 20,
                      transition: 'transform 0.2s',
                      transform: openMenus[item.label] ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                )}
              </ListItem>

              {item.children && (
                <Collapse in={openMenus[item.label]}>
                  <List sx={{ pl: 2, pb: 0.5 }}>
                    {item.children.map((c) => (
                      <ListItem
                        key={c.label}
                        button
                        component="a"
                        href={c.href}
                        sx={{
                          borderRadius: '8px',
                          py: 0.8,
                          '&:hover': { bgcolor: '#fdf3ee' },
                        }}
                      >
                        <ListItemText
                          primary={c.label}
                          primaryTypographyProps={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontSize: '0.875rem',
                            color: '#4a6070',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}

          <Box sx={{ px: 1, pt: 2, pb: 2 }}>
            <Button
              fullWidth
              href="/contact-us"
              variant="contained"
              disableElevation
              sx={{
                bgcolor: ACCENT,
                color: '#fff',
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: 700,
                textTransform: 'none',
                borderRadius: '8px',
                py: 1.3,
                fontSize: '0.95rem',
                '&:hover': { bgcolor: '#c94f1c' },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}