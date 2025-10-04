import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";
import { validatePassword, validateEmail } from "../../../utils/validation";

const GoogleLogo = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
    alt="Google"
    width={20}
    height={20}
    style={{ marginRight: 8 }}
  />
);

const SignUpPage = () => {
  const navigate = useNavigate();
  const { register, isLoading, error, clearError } = useAuthStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) validateField(name, value);
    if (error) clearError();
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const errors = { ...validationErrors };
    switch (name) {
      case "name":
        if (!value.trim()) errors.name = "Name is required";
        else delete errors.name;
        break;
      case "email":
        if (!validateEmail(value)) errors.email = "Invalid email";
        else delete errors.email;
        break;
      case "password":
        if (!validatePassword(value))
          errors.password = "Password does not meet requirements";
        else delete errors.password;
        break;
      default:
        break;
    }
    setValidationErrors(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(
      formData.name,
      formData.email,
      formData.password
    );
    if (result.success) navigate("/");
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          maxWidth: "1500px",
          mx: "auto",
          height: { xs: "auto", md: "90vh" },
        }}
      >
        {/* الصورة في اليسار */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#F5F5F5",
            position: "relative",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <Box
            component="img"
            src="./images/LoginAndSignup/SignImg.png"
            alt="Sign up illustration"
            sx={{
              width: "115%", // ← تكبير العرض قليلاً
              height: "115%", // ← رفع الصورة للأعلى قليلاً
              objectFit: "cover",
              objectPosition: "center top", // ← يجعل الصورة تظهر من الأعلى أكثر
              transform: "translateY(-3%)", // ← تحريك بسيط للأعلى
            }}
          />
        </Grid>

        {/* الفورم في اليمين */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            px: { xs: 3, md: 12 }, // ← جعل الفورم أقرب لليمين
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-end" }, // ← محاذاة لليمين
            height: "100%",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mb: 1, textAlign: { xs: "center", md: "right" } }}
            >
              Create an account
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, textAlign: { xs: "center", md: "right" } }}
            >
              Enter your details below
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }} onClose={clearError}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && !!validationErrors.name}
                helperText={touched.name && validationErrors.name}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email or Phone Number"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && !!validationErrors.email}
                helperText={touched.email && validationErrors.email}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && !!validationErrors.password}
                helperText={touched.password && validationErrors.password}
                margin="normal"
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "#DB4444",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#c23939" },
                }}
                disabled={isLoading}
              >
                {isLoading ? "Creating..." : "Create Account"}
              </Button>

              <Button
                fullWidth
                variant="outlined"
                sx={{
                  mb: 2,
                  textTransform: "none",
                  color: "black",
                  borderColor: "#E0E0E0",
                  "&:hover": { borderColor: "#BDBDBD", bgcolor: "#fafafa" },
                }}
                startIcon={<GoogleLogo />}
              >
                Sign up with Google
              </Button>

              <Divider sx={{ my: 3 }} />

              <Typography
                variant="body2"
                align="center"
                sx={{ color: "text.primary" }}
              >
                Already have an account?{" "}
                <MuiLink
                  component={Link}
                  to="/login"
                  underline="hover"
                  sx={{ color: "#000", fontWeight: 500 }}
                >
                  Log in
                </MuiLink>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpPage;
