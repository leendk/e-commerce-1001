import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// 🔎 Search style
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 4,
  backgroundColor: "#F5F5F5",
  marginLeft: theme.spacing(1),
  width: "280px",
  height: "40px",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#555",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  width: "100%",
  paddingLeft: theme.spacing(2),
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function Navbar() {
  // 👇 state لتحديد الرابط النشط
  const [active, setActive] = useState("");

  const links = ["Home", "Contact", "About", "Sign Up"];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        px: 6,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", height: "70px" }}>
        {/* Logo */}
        <Box
          component="img"
          src="./images/hero-section/Exclusive-logo.svg"
          alt="Exclusive Logo"
          sx={{
            height: 23,
            width: "auto",
            cursor: "pointer",
          }}
        />

        {/* Menu Links (centered) */}
        <Box sx={{ display: "flex", gap: 3, mr: 5 }}>
          {links.map((link) => (
            <Button
              key={link}
              onClick={() => setActive(link)} // 👈 يحدد الرابط النشط
              sx={{
                color: "#000", // النص يفضل أسود فقط
                fontSize: "16px",
                textTransform: "none",
                borderBottom: active === link ? "2px solid #000" : "none", // 👈 خط تحت النشط فقط
                "&:hover": { borderBottom: "2px solid #000" }, // hover خط برضو
                borderRadius: 0, // إزالة الحواف
              }}
            >
              {link}
            </Button>
          ))}
        </Box>

        {/* Search + Icons (right side) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mr: 8 }}>
          <Search>
            <StyledInputBase placeholder="What are you looking for?" />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
