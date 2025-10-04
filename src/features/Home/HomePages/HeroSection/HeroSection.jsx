import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// ✅ العبارات المتحركة
const phrases = [
  "Up to 10% off Voucher",
  "Free Shipping on orders over $100",
  "Today Only: Flash Sale up to 50%",
  "New Arrival: iPhone 15 Pro Available",
  "Best Prices Guaranteed",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // تغيير النصوص كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        pt: 4,
        pb: 4,
        position: "relative",
      }}
    >
      {/* Left Sidebar */}
      <Box
        sx={{
          color: "text.primary",
          width: 217,
          flexShrink: 0,
          display: { xs: "none", md: "block" },
          pl: 7,
        }}
      >
        <nav>
          <List sx={{ py: 0 }}>
            {[
              "Woman's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((text, i) => (
              <ListItem
                key={i}
                sx={{
                  px: 0,
                  py: 1,
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontStyle: "Regular",
                  lineHeight: "22px",
                  textAlign: "center",
                  "&:hover": {
                    textDecoration: "underline",
                    textUnderlineOffset: "8px",
                  },
                }}
              >
                {text}
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>

      {/* Vertical Divider */}
      <Divider
        orientation="vertical"
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: 0,
          height: 375,
          left: 280,
          borderColor: "rgba(0,0,0,0.12)",
        }}
      />

      {/* Container for Banner */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {/* Hero Banner */}
        <Box
          display="flex"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            bgcolor: "black",
            color: "white",
            width: "100%",
            maxWidth: 875,
            height: 340,
            px: { xs: 3, md: 10 },
            py: { xs: 4, md: 0 },
            position: "relative",
            mr: { md: 4 },
          }}
        >
          {/* Text Content */}
          <Box
            display="flex"
            flexDirection="column"
            gap={2.5}
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent="center"
            sx={{
              maxWidth: 350,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <img
                src="./images/hero-section/apple-logo.svg"
                alt="apple"
                style={{ width: 40, height: 49 }}
              />
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "16px", fontWeight: 400 }}
              >
                iPhone 14 Series
              </Typography>
            </Box>

            {/* ✅ النصوص المتغيرة */}
            <AnimatePresence mode="wait">
              <motion.div
                key={phrases[index]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "32px", md: "48px" },
                    lineHeight: { xs: "42px", md: "60px" },
                    letterSpacing: "0.04em",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {phrases[index]}
                </Typography>
              </motion.div>
            </AnimatePresence>

            <Button
              variant="text"
              sx={{
                color: "white",
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                fontSize: "16px",
                fontWeight: 500,
                px: 0,
                textTransform: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateX(8px)",
                  textDecorationThickness: "2px",
                },
              }}
              endIcon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 12H20M20 12L13 5M20 12L13 19"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              Shop Now
            </Button>
          </Box>

          {/* Image Content */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              maxWidth: { xs: "100%", md: 496 },
              height: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                transition: "transform 0.3s",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src="./images/hero-section/iphone-background.svg"
                alt="iPhone"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  transform: "scale(1.1) translateX(12px)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Box>
          </Box>

          {/* ✅ Slider indicators */}
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 1.5,
              alignItems: "center",
            }}
          >
            {phrases.map((_, idx) => (
              <motion.div
                key={idx}
                onClick={() => setIndex(idx)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor:
                    idx === index
                      ? "#DB4444"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                animate={{
                  scale: idx === index ? 1.4 : 1,
                  opacity: idx === index ? 1 : 0.6,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
