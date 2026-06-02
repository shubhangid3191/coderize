import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemText, Container,
  useMediaQuery, TextField, Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@mui/material/styles";

const menuItems = ["Services","Products","Industries","About Us","Careers","Library"];

function CoderizeLogoSVG({ dark = false }) {
  return (
    <Box sx={{ display:"flex", alignItems:"center", gap:"10px", cursor:"pointer" }}>
      <Box sx={{ width:50, height:50 }}>
        <svg width="50" height="50" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" stroke="#e8622a" strokeWidth="2" fill="none" />
          <path d="M14 12 L14 32 M14 12 L24 12 Q30 12 30 18 Q30 24 24 24 L14 24 M22 24 L30 32"
            stroke="#e8622a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </Box>
      <Box>
        <Typography sx={{ fontWeight:800, fontSize:"1.1rem", color:dark?"#1a1a1a":"#fff", lineHeight:1, letterSpacing:"1px" }}>CODERIZE</Typography>
        <Typography sx={{ fontSize:"0.48rem", color:dark?"#666":"#b9c7d3", letterSpacing:"1.5px", lineHeight:1.2 }}>TRANSINNOVATE SPATIALLY</Typography>
      </Box>
    </Box>
  );
}

function HeroSection() {
  return (
    <Box sx={{ position:"relative", width:"100%", height:{ xs:"280px", md:"360px" }, overflow:"hidden", bgcolor:"#0a2a3a" }}>
      <Box component="img" src="https://coderize.in/wp-content/uploads/2024/09/contact-banner.jpg" alt="Contact Banner" onError={(e) => { e.target.style.display="none"; }} sx={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", opacity:0.6 }} />
      <Box sx={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(10,42,58,0.85) 0%, rgba(15,80,100,0.6) 100%)" }} />
      <Container maxWidth="xl" sx={{ position:"relative", zIndex:2, height:"100%", display:"flex", alignItems:"center" }}>
        <Box sx={{ mt:{ xs:8, md:10 } }}>
          <Typography sx={{ color:"#ffffff", fontSize:"14px", fontWeight:400, mb:1.5, opacity:0.9 }}>Home &nbsp; » &nbsp; Contact Us</Typography>
          <Typography sx={{ color:"#ffffff", fontWeight:600, fontSize:{ xs:"32px", md:"42px" }, lineHeight:1.2 }}>Contact Us</Typography>
        </Box>
      </Container>
    </Box>
  );
}

function ContactInfoItem({ icon, title, detail, divider = true }) {
  return (
    <Box>
      <Box sx={{ display:"flex", alignItems:"flex-start", gap:2.5, py:3 }}>
        <Box sx={{ width:64, height:64, flexShrink:0, borderRadius:"50%", border:"2px dashed rgba(255,107,26,0.6)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <Box sx={{ width:46, height:46, borderRadius:"50%", bgcolor:"rgba(255,107,26,0.15)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            {React.cloneElement(icon, { sx: { color:"#ff6b1a", fontSize:22 } })}
          </Box>
        </Box>
        <Box sx={{ pt:0.5 }}>
          <Typography sx={{ color:"#ffffff", fontWeight:600, fontSize:"17px", mb:0.5 }}>{title}</Typography>
          {typeof detail === "string" ? (
            <Typography sx={{ color:"rgba(255,255,255,0.75)", fontSize:"15px", lineHeight:1.6 }}>{detail}</Typography>
          ) : detail}
        </Box>
      </Box>
      {divider && <Divider sx={{ bgcolor:"rgba(255,255,255,0.12)" }} />}
    </Box>
  );
}

function ContactBody() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", message:"" });
  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius:"4px", bgcolor:"#fff",
      "& fieldset":{ borderColor:"#d0d0d0" },
      "&:hover fieldset":{ borderColor:"#aaa" },
      "&.Mui-focused fieldset":{ borderColor:"#0a2a3a", borderWidth:"1.5px" },
    },
  };
  return (
    <Box sx={{ bgcolor:"#ffffff", py:{ xs:5, md:7 } }}>
      <Container maxWidth="xl">
        <Box sx={{ display:"grid", gridTemplateColumns:{ xs:"1fr", lg:"1fr 420px" }, gap:{ xs:5, lg:6 }, alignItems:"start" }}>
          <Box>
            <Box sx={{ display:"flex", alignItems:"center", justifyContent:"space-between", pb:3, mb:4, borderBottom:"1px solid #e0e0e0" }}>
              <Typography sx={{ fontSize:"16px", color:"#333", fontWeight:400 }}>CodeRize Company Profile</Typography>
              <Button variant="outlined" endIcon={<DownloadIcon />} sx={{ borderColor:"#bbb", color:"#333", textTransform:"none", fontWeight:500, px:3, py:1, borderRadius:"4px", "&:hover":{ borderColor:"#ff6b1a", color:"#ff6b1a", bgcolor:"transparent" } }}>Download</Button>
            </Box>
            <Typography sx={{ fontWeight:700, fontSize:{ xs:"26px", md:"32px" }, color:"#0a2a3a", mb:1.5 }}>Send Us A Message</Typography>
            <Typography sx={{ color:"#555", fontSize:"15px", mb:4, lineHeight:1.7, maxWidth:"600px" }}>
              Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.
            </Typography>
            <Box sx={{ display:"grid", gridTemplateColumns:{ xs:"1fr", sm:"1fr 1fr" }, gap:2.5, mb:2.5 }}>
              <TextField placeholder="Name*" value={form.name} onChange={(e) => setForm({ ...form, name:e.target.value })} fullWidth sx={inputSx} />
              <TextField placeholder="Email*" value={form.email} onChange={(e) => setForm({ ...form, email:e.target.value })} fullWidth sx={inputSx} />
              <TextField placeholder="Phone*" value={form.phone} onChange={(e) => setForm({ ...form, phone:e.target.value })} fullWidth sx={inputSx} />
              <TextField placeholder="Subject*" value={form.subject} onChange={(e) => setForm({ ...form, subject:e.target.value })} fullWidth sx={inputSx} />
            </Box>
            <TextField placeholder="Describe Your Request*" value={form.message} onChange={(e) => setForm({ ...form, message:e.target.value })} fullWidth multiline rows={5} sx={{ ...inputSx, mb:3 }} />
            <Box sx={{ display:"flex", alignItems:"center", gap:2, border:"1px solid #d0d0d0", borderRadius:"4px", px:2.5, py:1.5, mb:3, width:"fit-content", bgcolor:"#f9f9f9" }}>
              <Box sx={{ width:24, height:24, border:"2px solid #aaa", borderRadius:"3px", flexShrink:0 }} />
              <Typography sx={{ fontSize:"14px", color:"#333" }}>I'm not a robot</Typography>
              <Box sx={{ ml:2, textAlign:"center" }}>
                <Box component="img" src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" sx={{ width:32, height:32 }} onError={(e) => { e.target.style.display="none"; }} />
                <Typography sx={{ fontSize:"9px", color:"#aaa", letterSpacing:"0.5px" }}>reCAPTCHA</Typography>
              </Box>
            </Box>
            <Button variant="contained" sx={{ bgcolor:"#0a2a3a", color:"#fff", textTransform:"none", fontWeight:600, fontSize:"16px", px:6, py:1.5, borderRadius:"4px", boxShadow:"none", "&:hover":{ bgcolor:"#0d3347", boxShadow:"none" } }}>Submit</Button>
          </Box>
          <Box sx={{ bgcolor:"#0d2d42", borderRadius:"6px", px:4, py:1, position:{ lg:"sticky" }, top:{ lg:24 } }}>
            <ContactInfoItem icon={<PhoneIcon />} title="Call Us" detail="+91 9152 1911 29" />
            <ContactInfoItem icon={<EmailIcon />} title="Make a Quote" detail="support@coderize.in" />
            <ContactInfoItem icon={<LocationOnIcon />} title="Address" detail={<Typography sx={{ color:"rgba(255,255,255,0.75)", fontSize:"15px", lineHeight:1.7 }}>Office No. 404, Green Park,<br />Pune Satara Road, Katraj,<br />Opposite Bharti Vidyapeeth Main<br />Gate, Pune, Maharashtra 411046</Typography>} />
            <ContactInfoItem icon={<NearMeIcon />} title="Get Direction" detail="" divider={false} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function MapSection() {
  return (
    <Box sx={{ width:"100%", height:{ xs:350, md:480 } }}>
      <iframe title="CodeRize Technologies Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d73.8567!3d18.4529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac9e5b0b0b5%3A0x1234567890abcdef!2sCodeRize%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1234567890"
        width="100%" height="100%" style={{ border:0, display:"block" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </Box>
  );
}

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor:"#ffffff", minHeight:"100vh" }}>
      <HeroSection />
      <ContactBody />
      <MapSection />
    </Box>
  );
}