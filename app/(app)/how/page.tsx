"use client";

import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { Assignment, People, Search, CheckCircle } from "@mui/icons-material";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. ble ble write algotithm 1 used",
      icon: <Assignment sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />,
      description:
        "Enter the details of the murder mystery, including the case title, victim, location, and time of death.",
    },
    {
      title: "2. numero dos",
      icon: <People sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />,
      description:
        "List all suspects with their motives, alibis, and access to potential weapons.",
    },
    {
      title: "3. de ce ii place lui elon musk sa foloseasca site ul asta",
      icon: <Search sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />,
      description:
        "Input evidence details including type, reliability, and whether it contradicts any alibis.",
    },
    {
      title: "4. ce fel am fct baza de date idk",
      icon: <CheckCircle sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />,
      description:
        "AXIOM will help you logically evaluate suspects and evidence to narrow down the likely culprit.",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
    
      <Typography variant="h3" align="center" gutterBottom>
        How AXIOM Works
      </Typography>

      <Typography variant="h6" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Follow these simple steps to organize and solve your murder mystery cases efficiently.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
          gap: 4,
        }}
      >
        {steps.map((step, idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              p: 4,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            {step.icon}
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {step.title}
            </Typography>
            <Typography color="text.secondary">
              {step.description}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Link href="/case" style={{ textDecoration: "none" }}>
          <Paper
            sx={{
              display: "inline-block",
              px: 6,
              py: 3,
              bgcolor: "primary.main",
              color: "#fff",
              borderRadius: 2,
              cursor: "pointer",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Start Your First Case
          </Paper>
        </Link>
      </Box>
    </Container>
  );
}
