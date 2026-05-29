import { useState } from 'react';
import {
  AppBar, Toolbar, Box, Button, Link, IconButton,
  Drawer, List, ListItem, ListItemText, Collapse, Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      { label: 'Leadership', href: '#' },
      { label: 'Code of Conduct', href: '#' },
    ],
  },
  { label: 'Careers', href: '/career' },
  {
    label: 'Library',
    children: [
      { label: 'Blogs', href: '#' },
      { label: 'Case Studies', href: '#' },
    ],
  },
];

const CoderizeLogoSVG = () => (
  <svg width="130" height="50" viewBox="0 0 210 72" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 44 10 C 24 10 8 26 8 46 C 8 61 18 71 31 71 C 21 64 16 56 18 44 C 21 26 36 18 51 21 C 64 24 71 36 66 51 C 62 62 51 68 40 66"
      stroke={ACCENT} strokeWidth="5" fill="none" strokeLinecap="round"
    />
    <path
      d="M 26 46 C 26 38 32 32 40 32 C 46 32 51 36 52 42"
      stroke={ACCENT} strokeWidth="4" fill="none" strokeLinecap="round"
    />
    <text x="76" y="39" fontFamily="'Segoe UI',Arial,sans-serif" fontWeight="800" fontSize="20" fill="#0d1b2a" letterSpacing="1.5">CODERIZE</text>
    <text x="76" y="54" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="6" fill="#6a8099" letterSpacing="2.5">TRANS·INNOVATE SPATIALLY</text>
  </svg>
);

function DropdownMenu({ items }) {
  return (
    <Box sx={{
      position: 'absolute', top: '100%', left: 0, minWidth: 200,
      bgcolor: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      borderRadius: '8px', py: 1, zIndex: 1300,
      border: '1px solid #edf0f4',
    }}>
      {items.map((item) => (
        <Link key={item.label} href={item.href} underline="none"
          sx={{
            display: 'block', px: 2.5, py: 1,
            color: '#2a3a4a', fontSize: '0.875rem',
            fontFamily: "'Segoe UI', sans-serif",
            transition: 'color 0.15s, background 0.15s',
            '&:hover': { color: ACCENT, bgcolor: '#fdf3ee' },
          }}>
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

  const toggleMobileMenu = (label) =>
    setOpenMenus((p) => ({ ...p, [label]: !p[label] }));

  return (
    <>
      <AppBar position="sticky" elevation={0}
        sx={{ bgcolor: NAV_BG, borderBottom: '1px solid #edf0f4', zIndex: 1200 }}>
        <Toolbar sx={{
          maxWidth: '1200px', width: '100%', mx: 'auto',
          px: { xs: 2, md: 4 }, py: 0.5, justifyContent: 'space-between',
        }}>
          <Link href="#"><CoderizeLogoSVG /></Link>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => (
              <Box key={item.label} sx={{ position: 'relative' }}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}>
                {item.children ? (
                  <Button
                    endIcon={
                      <ExpandMoreIcon sx={{
                        fontSize: '14px !important',
                        transition: 'transform 0.2s',
                        transform: hovered === item.label ? 'rotate(180deg)' : 'none',
                      }} />
                    }
                    sx={{
                      color: item.label === 'Careers' ? ACCENT : '#2a3a4a',
                      fontFamily: "'Segoe UI', sans-serif", fontWeight: 500,
                      fontSize: '0.875rem', textTransform: 'none', px: 1.5,
                      '&:hover': { color: ACCENT, bgcolor: 'transparent' },
                    }}>
                    {item.label}
                  </Button>
                ) : (
                  <Button href={item.href}
                    sx={{
                      color: item.label === 'Careers' ? ACCENT : '#2a3a4a',
                      fontFamily: "'Segoe UI', sans-serif",
                      fontWeight: item.label === 'Careers' ? 600 : 500,
                      fontSize: '0.875rem', textTransform: 'none', px: 1.5,
                      '&:hover': { color: ACCENT, bgcolor: 'transparent' },
                    }}>
                    {item.label}
                  </Button>
                )}
                {item.children && hovered === item.label && (
                  <DropdownMenu items={item.children} />
                )}
              </Box>
            ))}
            <Button href="#" variant="contained"
              sx={{
                ml: 1.5, bgcolor: ACCENT, color: '#fff',
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: 600, fontSize: '0.875rem',
                textTransform: 'none', px: 2.5, py: 1,
                borderRadius: '6px', boxShadow: 'none',
                '&:hover': { bgcolor: '#c94f1c', boxShadow: 'none' },
              }}>
              Contact Us
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { md: 'none' }, color: '#2a3a4a' }}
            onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: '#fff' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton onClick={() => setMobileOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <Divider />
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <Box key={item.label}>
              <ListItem
                button
                onClick={() => item.children ? toggleMobileMenu(item.label) : null}
                sx={{ borderRadius: '6px', '&:hover': { bgcolor: '#fdf3ee' } }}>
                <ListItemText primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: "'Segoe UI', sans-serif", fontSize: '0.9rem',
                    fontWeight: item.label === 'Careers' ? 600 : 400,
                    color: item.label === 'Careers' ? ACCENT : '#2a3a4a',
                  }} />
                {item.children && <ExpandMoreIcon sx={{ color: '#aaa', fontSize: 18 }} />}
              </ListItem>
              {item.children && (
                <Collapse in={openMenus[item.label]}>
                  <List sx={{ pl: 2 }}>
                    {item.children.map((c) => (
                      <ListItem key={c.label} button component="a" href={c.href}
                        sx={{ borderRadius: '6px', '&:hover': { bgcolor: '#fdf3ee' } }}>
                        <ListItemText primary={c.label}
                          primaryTypographyProps={{
                            fontFamily: "'Segoe UI', sans-serif",
                            fontSize: '0.85rem', color: '#4a6070',
                          }} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
          <Box sx={{ px: 2, pt: 2 }}>
            <Button fullWidth href="#" variant="contained"
              sx={{
                bgcolor: ACCENT, color: '#fff',
                fontFamily: "'Segoe UI', sans-serif",
                fontWeight: 600, textTransform: 'none',
                borderRadius: '6px', boxShadow: 'none',
                '&:hover': { bgcolor: '#c94f1c', boxShadow: 'none' },
              }}>
              Contact Us
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}