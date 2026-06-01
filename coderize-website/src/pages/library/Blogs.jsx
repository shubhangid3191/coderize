import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, Box, IconButton,
  Drawer, List, ListItem, ListItemText, Container,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

const menuItems = ["Services","Products","Industries","About Us","Careers","Library"];

const blogs = [
  { id:1, date:"July 15, 2024", title:"Driving Supply Chain Excellence with Geospatial Intelligence: Trends and Benefits", image:"https://coderize.in/wp-content/uploads/2024/07/Gis-in-supply-chain.jpg", fallback:"https://picsum.photos/seed/supplychain/800/500" },
  { id:2, date:"June 23, 2024", title:"KnowAge and GIS: Powering Data-Driven Decision-Making in Smart Cities", image:"https://coderize.in/wp-content/uploads/2024/06/Gis-smart-city.jpg", fallback:"https://picsum.photos/seed/smartcity/800/500" },
  { id:3, date:"May 10, 2024", title:"3D GIS for Real Estate – CodeRize's Approach to Property Development and Urban Growth", image:"https://coderize.in/wp-content/uploads/2024/05/Gis-real-estate.jpg", fallback:"https://picsum.photos/seed/realestate3d/800/500" },
  { id:4, date:"April 21, 2024", title:"From Crop Health Monitoring to Processing Crop Damage Claim – All You Need is GIS", image:"https://coderize.in/wp-content/uploads/2024/04/Gis-in-crop.jpg", fallback:"https://picsum.photos/seed/cropgis/800/500" },
];

function HeroSection() {
  return (
    <Box sx={{ position:"relative", width:"100%", height:{ xs:"280px", sm:"340px", md:"420px" }, overflow:"hidden" }}>
      <Box component="img" src="https://coderize.in/wp-content/uploads/2024/09/blog-titlebanner.jpg" alt="Blogs Banner" loading="eager" sx={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top" }} />
      <Box sx={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(0,10,20,0.75) 0%, rgba(0,15,30,0.55) 50%, rgba(0,15,30,0.2) 100%)" }} />
      <Container maxWidth="xl" sx={{ position:"relative", zIndex:2, height:"100%", display:"flex", alignItems:"center" }}>
        <Box sx={{ mt:{ xs:6, md:7 } }}>
          <Typography sx={{ color:"#ffffff", fontSize:{ xs:"13px", md:"15px" }, fontWeight:400, mb:1.5 }}>Home &nbsp; » &nbsp; Blogs</Typography>
          <Typography sx={{ color:"#ffffff", fontWeight:300, lineHeight:1.1, letterSpacing:"-1px", fontSize:{ xs:"38px", sm:"52px", md:"44px" }, maxWidth:"600px" }}>Discover Insights To Boost Your Industry Knowledge</Typography>
        </Box>
      </Container>
    </Box>
  );
}

function BlogCard({ blog }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  return (
    <Box onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      sx={{ cursor:"pointer", display:"flex", flexDirection:"column", width:"100%", height:"100%", bgcolor:"#ffffff", overflow:"hidden" }}
    >
      <Box sx={{ position:"relative", width:"100%", height:260, flexShrink:0, overflow:"hidden" }}>
        <Box component="img" src={imgError?blog.fallback:blog.image} onError={() => setImgError(true)} alt={blog.title}
          sx={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.5s ease", transform:hovered?"scale(1.04)":"scale(1)" }}
        />
      </Box>
      <Box sx={{ px:3, pt:2.5, pb:3, display:"flex", flexDirection:"column", flexGrow:1 }}>
        <Typography sx={{ color:"#888", fontSize:"14px", mb:1.5, fontWeight:400 }}>{blog.date}</Typography>
        <Box sx={{ width:"100%", height:"1px", bgcolor:"#e0dbd5", mb:2 }} />
        <Typography sx={{ color:"#111", fontWeight:700, fontSize:{ xs:"15px", sm:"16px", md:"17px" }, lineHeight:1.45, mb:2.5, flexGrow:1 }}>{blog.title}</Typography>
        <Box sx={{ display:"inline-flex", alignItems:"center", gap:0.5, color:hovered?"#ff6b1a":"#111", fontWeight:500, fontSize:"14px", borderBottom:hovered?"1px solid #ff6b1a":"1px solid #111", pb:0.3, width:"fit-content", transition:"color 0.2s, border-color 0.2s" }}>
          Read More
          <ArrowForwardIcon sx={{ fontSize:15, transition:"transform 0.2s", transform:hovered?"translateX(4px)":"translateX(0)" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default function BlogsPage() {
  return (
    <Box sx={{ bgcolor:"#f5f0eb", minHeight:"100vh" }}>
      <HeroSection />
      <Box sx={{ py:{ xs:5, md:7 }, px:{ xs:2, sm:4, md:6 } }}>
        <Container maxWidth="xl" disableGutters>
          <Box sx={{ display:"grid", gridTemplateColumns:{ xs:"1fr", sm:"1fr 1fr", md:"1fr 1fr 1fr" }, gap:{ xs:"24px", md:"28px" }, alignItems:"stretch" }}>
            {blogs.map((blog) => (
              <Box key={blog.id} sx={{ display:"flex", minHeight:0 }}>
                <BlogCard blog={blog} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}