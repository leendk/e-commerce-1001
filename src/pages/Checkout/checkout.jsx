import { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Checkbox,
} from "@mui/material";

const Checkout = () => {
  const cartItems = [
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/assets/products/monitor.jpg" },
    { id: 2, name: "HI Gamepad", price: 1100, quantity: 1, image: "/assets/products/gamepad.jpg" },
  ];

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [coupon, setCoupon] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "30px",
          lineHeight: "30px",
          mb: 4,
          ml: { md: 6 }, // ← تمت إضافة هذه السطر لتحريك العنوان لليمين
        }}
      >
        Billing Details
      </Typography>


      <form onSubmit={handleSubmit}>
        <Grid container spacing={5}>
          {/* LEFT FORM */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 6 } }}>
              <Box display="flex" flexDirection="column" gap={3}>
                {[
                  { label: "First Name *" },
                  { label: "Company Name" },
                  { label: "Street Address *" },
                  { label: "Apartment, floor, etc. (optional)" },
                  { label: "Town/City *" },
                  { label: "Phone Number *" },
                  { label: "Email Address *" },
                ].map((field, index) => (
                  <Box key={index}>
                    <Typography
                      sx={{
                        mb: 1,
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#7D7D7D",
                      }}
                    >
                      {field.label.includes("*") ? (
                        <>
                          {field.label.split("*")[0]}
                          <span style={{ color: "#DB4444" }}>*</span>
                        </>
                      ) : (
                        field.label
                      )}
                    </Typography>

                    <TextField
                      variant="outlined"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#F5F5F5",
                          borderRadius: "4px",
                          height: "45px",
                          alignItems: "center",
                          "& fieldset": { border: "none" },
                          "& input": { outline: "none" },
                          "& input:focus": { outline: "none", boxShadow: "none" },
                        },
                      }}
                    />
                  </Box>
                ))}

                {/* Save Info Checkbox */}
                <Box mt={1}>
                  <Box display="flex" alignItems="flex-start">
                    <Checkbox
                      checked={saveInfo}
                      onChange={(e) => setSaveInfo(e.target.checked)}
                      sx={{
                        color: "#DB4444",
                        "&.Mui-checked": { color: "#DB4444" },
                        padding: "0 8px 0 0",
                        mt: "2px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "24px",
                        color: "#7D7D7D",
                        mt: "2px",
                      }}
                    >
                      Save this information for faster check-out next time
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SUMMARY */}
          <Grid item xs={12} md={6}>
            {/* تم إزاحة القسم نحو اليمين قليلاً */}
            <Box sx={{ pl: { md: 12 }, pt: 3, ml: { md: 8 } }}>
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      style={{ borderRadius: 8 }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    ${item.price}
                  </Typography>
                </Box>
              ))}

              {/* PRICE SUMMARY */}
              <Box mt={4}>
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                  <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                    Subtotal:
                  </Typography>
                  <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                    ${subtotal}
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: "rgba(0,0,0,0.2)", mb: 2 }} />

                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                    Shipping:
                  </Typography>
                  <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                    Free
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: "rgba(0,0,0,0.2)", mb: 2 }} />

                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
                  <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400}}>Total:</Typography>
                  <Typography sx={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}>
                    ${total}
                  </Typography>
                </Box>
              </Box>

              {/* PAYMENT METHOD */}
              <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <FormControlLabel
                    value="bank"
                    control={<Radio sx={{ color: "#000", "&.Mui-checked": { color: "#000" } }} />}
                    label={<Typography sx={{ fontFamily: "Poppins, sans-serif" }}>Bank</Typography>}
                  />
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src="./images/checkout/Bkash.svg" alt="bKash" width={35} />
                    <img src="./images/checkout/Visa.svg" alt="Visa" width={35} />
                    <img src="./images/checkout/Mastercard.svg" alt="MasterCard" width={35} />
                    <img src="./images/checkout/Nagad.svg" alt="Nagad" width={35} />
                  </Box>
                </Box>

                <FormControlLabel
                  value="cash"
                  control={<Radio sx={{ color: "#000", "&.Mui-checked": { color: "#000" } }} />}
                  label={<Typography sx={{ fontFamily: "Poppins, sans-serif" }}>Cash on delivery</Typography>}
                />
              </RadioGroup>

              {/* Coupon + Apply + Place Order */}
              <Box display="flex" flexDirection="column" gap={2} mt={2}>
                {/* Coupon + Apply row */}
                <Box display="flex" gap={2} alignItems="center">
                  <TextField
                    placeholder="Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    variant="outlined"
                    sx={{
                      flex: 1,
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#F5F5F5",
                        borderRadius: "4px",
                        height: "45px",
                        "& fieldset": { border: "1px solid #000" },
                        "&:hover fieldset": { border: "1px solid #000" },
                        "&.Mui-focused fieldset": { border: "1px solid #000" },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      width: 170,
                      height: "48px",
                      backgroundColor: "#DB4444",
                      borderRadius: "4px",
                      textTransform: "none",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      "&:hover": { backgroundColor: "#d13c3c" },
                      boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    Apply Coupon
                  </Button>
                </Box>

                {/* Place Order under coupon field */}
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: 170,
                      height: "48px",
                      backgroundColor: "#DB4444",
                      borderRadius: "4px",
                      textTransform: "none",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      "&:hover": { backgroundColor: "#d13c3c" },
                      boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    Place Order
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Checkout;
