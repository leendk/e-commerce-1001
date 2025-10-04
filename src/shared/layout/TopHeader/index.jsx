import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

export default function TopNavbar() {
  return (
    <Box
      sx={{
        width: "100%",            
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",           
        position: "relative",
        margin: 0,
        padding: 0,
      }}
    >
      {/* النص في المنتصف */}
      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",       
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
        <span style={{ fontWeight: 600, textDecoration: "underline" }}>
          ShopNow
        </span>
      </Typography>

      {/* اللغة على اليمين */}
      <Box
        sx={{
          position: "absolute",
          right: "120px",           
        }}
      >
        <Select
          defaultValue="English"
          variant="standard"
          disableUnderline
          sx={{
            color: "#fff",
            fontSize: "14px",
            "& .MuiSvgIcon-root": { color: "#fff" },
          }}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="Arabic">Arabic</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
