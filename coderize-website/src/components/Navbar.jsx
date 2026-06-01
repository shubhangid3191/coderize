import { useState, useRef, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Button, Link, IconButton,
  Drawer, List, ListItem, ListItemText, Collapse, Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ACCENT = '#e8622a';
const NAV_BG = '#ffffff';

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
      { label: 'About Company', href: '#' },
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
        transform: 'translateX(-50%)',
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [hovered, setHovered] = useState(null);
  const timerRef = useRef({});

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
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: NAV_BG,
          borderBottom: '1px solid #e8ecf0',
          zIndex: 1200,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            maxWidth: '1280px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4, lg: 5 },
            py: { xs: 0.5, md: 1 },
            minHeight: { xs: 64, md: 72 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Box
              component="img"
              src="https://coderize.in/wp-content/uploads/2024/08/logo.svg"
              alt="Coderize"
              sx={{
                height: { xs: 40, md: 52 },
                width: 'auto',
                display: 'block',
              }}
            />
          </Link>

          {/* ── Desktop Nav ── */}
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
                          transform:
                            hovered === item.label
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                          color: 'inherit',
                        }}
                      />
                    }
                    sx={{
                      color: '#1a2a3a',
                      fontFamily: "'Segoe UI', sans-serif",
                      fontWeight: 500,
                      fontSize: { md: '0.9rem', lg: '1rem' },
                      textTransform: 'none',
                      px: { md: 1, lg: 1.5 },
                      py: 1,
                      borderRadius: '6px',
                      bgcolor: 'transparent',
                      '&:hover': {
                        color: ACCENT,
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
                      color: item.label === 'Careers' ? ACCENT : '#1a2a3a',
                      fontFamily: "'Segoe UI', sans-serif",
                      fontWeight: item.label === 'Careers' ? 700 : 500,
                      fontSize: { md: '0.9rem', lg: '1rem' },
                      textTransform: 'none',
                      px: { md: 1, lg: 1.5 },
                      py: 1,
                      borderRadius: '6px',
                      bgcolor: 'transparent',
                      '&:hover': {
                        color: ACCENT,
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )}
                {item.children && (
                  <DropdownMenu
                    items={item.children}
                    visible={hovered === item.label}
                  />
                )}
              </Box>
            ))}
          </Box>

          {/* ── Contact Us button (desktop) ── */}
          <Button
            href="#"
            variant="contained"
            disableElevation
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              bgcolor: ACCENT,
              color: '#fff',
              fontFamily: "'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: { md: '0.9rem', lg: '1rem' },
              textTransform: 'none',
              px: { md: 3, lg: 4 },
              py: { md: 1.2, lg: 1.5 },
              borderRadius: '8px',
              flexShrink: 0,
              letterSpacing: 0.3,
              '&:hover': { bgcolor: '#c94f1c' },
            }}
          >
            Contact Us
          </Button>

          {/* ── Mobile hamburger ── */}
          <IconButton
            sx={{
              display: { md: 'none' },
              color: '#1a2a3a',
              ml: 'auto',
            }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ── Mobile Drawer ── */}
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
        {/* Drawer header */}
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
            src="https://coderize.in/wp-content/uploads/2025/03/cropped-coderize-logo.png"
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
                onClick={() =>
                  item.children
                    ? toggleMobileMenu(item.label)
                    : setMobileOpen(false)
                }
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
                      transform: openMenus[item.label]
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
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

          {/* Contact Us in drawer */}
          <Box sx={{ px: 1, pt: 2, pb: 2 }}>
            <Button
              fullWidth
              href="#"
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