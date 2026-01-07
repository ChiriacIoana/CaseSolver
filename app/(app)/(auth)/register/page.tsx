"use client";

import { useState } from "react";
import { supabase } from "@/app/libs/supabaseClient";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function register() {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created. Go to login.");
    window.location.href = "/login";
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(circle at top, rgba(255, 255, 255, 0.07), transparent)",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 420,
          width: "100%",
          backdropFilter: "blur(1px)",
          border: "0.3px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 10px rgba(183, 59, 67, 0.25)",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 3 }}
          color="text.secondary"
        >
          Join AXIOM and start solving mysteries 
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Email"
            type="email"
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={register}
            disabled={loading}
            fullWidth
          >
            {loading ? "Registering..." : "Create account"}
          </Button>
        </Stack>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2 }}
          color="text.secondary"
        >
          Already have an account? <a href="/login" style={{ color: "white" }}>Login</a>
        </Typography>
      </Paper>
    </Box>
  );
}
