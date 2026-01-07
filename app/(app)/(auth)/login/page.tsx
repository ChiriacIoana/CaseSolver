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
  Divider,
} from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/welcome";
  }

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/welcome`,
      },
    });
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
          Login
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 3 }}
          color="text.secondary"
        >
          Welcome back to AXIOM 
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
            onClick={signIn}
            fullWidth
          >
            Login
          </Button>
        </Stack>

        <Divider sx={{ my: 3 }}>or</Divider>

        <Button
          variant="outlined"
          onClick={signInWithGoogle}
          fullWidth
          sx={{
            fontWeight: 600,
            borderColor: "#b73b43ff",
            "&:hover": {
              borderColor: "#ff8d92",
              backgroundColor: "rgba(183,59,67,0.12)",
            },
          }}
        >
          Continue with Google
        </Button>
      </Paper>
    </Box>
  );
}
