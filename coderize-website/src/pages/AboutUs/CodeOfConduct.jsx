import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
    Typography,
    useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Navbar from "../../components/Navbar";

export default function CodeOfConduct() {
    const mobile = useMediaQuery("(max-width:900px)");
    const [open, setOpen] = useState(false);

    const menuItems = [
        "Services", "Products", "Industries",
        "About Us", "Careers", "Library",
    ];

    return (
        <>
            <Navbar transparentHero={true} />
            {/* Hero Banner */}
            <Box
                sx={{
                    height: { xs: 350, md: 520 },
                    backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(0,25,55,0.75), rgba(0,25,55,0.75))" ,}} />
                <Container maxWidth="lg"
                    sx={{ position: "relative", zIndex: 2, color: "#fff", pt: { xs: 18, md: 28 }, px: { xs: 2, sm: 3, md: 4 } ,marginTop: { xs: "-64px", md: "-72px" },}}
                >
                    <Typography sx={{ fontSize: { xs: "0.9rem", md: 18 }, mb: 2 }}>
                        Home » Code of Conduct
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "2.2rem", md: "4rem" }, fontWeight: 500 }}>
                        Code Of Conduct
                    </Typography>
                </Container>
            </Box>

            {/* Content */}
            <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    1. Introduction
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 1.8, mb: 3 }}>
                    At CodeRize Technologies, we are committed to conducting business with integrity, responsibility, and respect. This Code of Conduct outlines the ethical principles, values, and standards that guide our actions. It applies to all employees, contractors, vendors, partners, and anyone representing CodeRize Technologies.
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 1.8, mb: 6 }}>
                    We expect everyone associated with us to act in ways that foster trust, protect human rights, safeguard the environment, and promote sustainable growth.
                </Typography>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    2. Compliance with Laws and Regulations
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, mb: 6, pl: { xs: 2.5, md: 4 } }}>
                    <li>Follow all applicable local, national, and international laws, regulations, and industry standards.</li>
                    <li>Never act in a way that could expose CodeRize Technologies to legal penalties or reputational harm.</li>
                    <li>Ensure subcontractors, consultants, and business partners adhere to the same standards.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    3. Integrity and Ethics
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, mb: 6, pl: { xs: 2.5, md: 4 } }}>
                    <li>Conduct business with honesty, fairness, and transparency.</li>
                    <li>Bribery, corruption, facilitation payments, kickbacks, and fraudulent activities are strictly prohibited.</li>
                    <li>Gifts, hospitality, or entertainment must be modest, lawful, and must not create undue influence or conflicts of interest.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    4. Reporting Misconduct & Whistleblower Protection
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Employees and partners are encouraged to report suspected violations of this Code, policies, or laws.</li>
                    <li>Reports may be submitted confidentially or anonymously to the Ethics & Compliance Team at [Insert Reporting Email/Hotline].</li>
                    <li>CodeRize Technologies prohibits retaliation against individuals who report in good faith.</li>
                    <li>All concerns will be investigated promptly, fairly, and with confidentiality.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    5.  Human Rights and Fair Employment
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Respect and safeguard human rights in all operations.</li>
                    <li>Prohibit forced labor, child labor, human trafficking, and exploitation across the supply chain.</li>
                    <li>Ensure fair wages, reasonable working hours, and safe working conditions.</li>
                    <li>Respect employees' right to freedom of association and collective bargaining.</li>
                    <li>Foster an inclusive, respectful workplace free from harassment, discrimination, and bullying.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    5.  Human Rights and Fair Employment
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Respect and safeguard human rights in all operations.</li>
                    <li>Prohibit forced labor, child labor, human trafficking, and exploitation across the supply chain.</li>
                    <li>Ensure fair wages, reasonable working hours, and safe working conditions.</li>
                    <li>Respect employees' right to freedom of association and collective bargaining.</li>
                    <li>Foster an inclusive, respectful workplace free from harassment, discrimination, and bullying.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    6. Health, Safety, and Environment
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Prioritize the health, safety, and well-being of employees, contractors, and partners.</li>
                    <li>Provide safe working conditions and necessary protective equipment.</li>
                    <li>Follow all health, safety, and environmental regulations.</li>
                    <li>Work to minimize environmental impact, prevent pollution, and promote sustainability.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    7.  Sustainability and Social Responsibility
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Integrate environmentally responsible practices in all activities.</li>
                    <li>Strive to reduce greenhouse gas emissions, energy consumption, and waste.</li>
                    <li>Support local communities and respect Indigenous rights.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    8.  Confidentiality, Intellectual Property, and Data Protection
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Protect confidential information of CodeRize Technologies, its clients, and partners.</li>
                    <li>Only share or access information on a need-to-know basis.</li>
                    <li>Respect and safeguard intellectual property rights (both CodeRize's and third parties').</li>
                    <li>Comply with data privacy regulations (e.g., GDPR, Indian IT Act, local data protection laws).</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    9.  Use of Company Assets and Technology
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Company resources, including equipment, IT systems, software, and communication tools, must be used responsibly and only for legitimate business purposes.</li>
                    <li>Unauthorized use, theft, tampering, or misappropriation of assets is prohibited.</li>
                    <li>Personal use of company resources should be minimal and must not interfere with business operations.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    10.   Conflicts of Interest
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Avoid situations where personal interests conflict, or appear to conflict, with the interests of CodeRize Technologies.</li>
                    <li>Disclose any potential conflicts promptly to management or the Compliance Team.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    11.   Fair Competition and Anti-Money Laundering
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Compete fairly and comply with antitrust and competition laws.</li>
                    <li>Do not engage in anti-competitive practices such as price fixing, bid rigging, or market manipulation.</li>
                    <li>Prohibit money laundering, terrorism financing, and business dealings with sanctioned or restricted entities.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    12.  Record Keeping and Transparency
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>Compete fairly and comply with antitrust and competition laws.</li>
                    <li>Do not engage in anti-competitive practices such as price fixing, bid rigging, or market manipulation.</li>
                    <li>Prohibit money laundering, terrorism financing, and business dealings with sanctioned or restricted entities.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    13.  Compliance, Monitoring, and Disciplinary Actions
                </Typography>
                <Box component="ul" sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 2, pl: { xs: 2.5, md: 4 } }}>
                    <li>CodeRize Technologies may conduct audits, reviews, or investigations to ensure compliance with this Code.</li>
                    <li>Non-compliance may result in disciplinary actions, including warnings, suspension, termination of employment, or termination of business relationships.</li>
                    <li>Serious violations may lead to legal action and reporting to authorities.</li>
                </Box>

                <Typography sx={{ color: "#ff661f", fontSize: { xs: 24, md: 32 }, mb: 3 }}>
                    14.  Commitment
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: "#0b1f3a", lineHeight: 1.8, mb: 3 }}>
                    Every individual associated with CodeRize Technologies must read, understand, and comply with this Code of Conduct. Upholding these principles is vital to maintaining trust, integrity, and long-term success.
                </Typography>
            </Container>
        </>
    );
}