"use client";

import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { Assignment, People, Search, CheckCircle } from "@mui/icons-material";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import TestimonialCard from "@/app/components/common/TestimonialCard";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. how the magic happens",
      icon: <Sparkles color="#b73b43ff" size={40} />,
      description:
        "AXIOM collects structured inputs from the user, sending it to Hack Club’s GPT-5.1 API via the Responses endpoint and returning the AI-generated analysis to your frontend",
    },
    {
      title: "2. the structure behind",
      icon: <People sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />,
      description:
        "The application uses a serverless architecture. Supabase provides the database, while all analytical logic is executed using AI.",
    },
    {
      title: "3. why elon musk loveees using this application",
      icon: <Search sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />,
      description:
        "Elon Musk loves using AXIOM because it streamlines the process of analyzing complex cases with AI-powered insights.",
    },
    {
      title: "4. what makes axiom different",
      icon: <CheckCircle sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />,
      description:
        "AXIOM stands out due to its user-friendly interface, robust AI integration, and focus on cautious, non-definitive analysis, making it a reliable tool",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        How AXIOM Works
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        align="center"
        sx={{ mb: 4 }}
      >
        Follow these simple steps to organize and solve your murder mystery
        cases efficiently.
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
          <TestimonialCard
            glowColor="rgba(0, 0, 0, 0.38)"
            backgroundColor="rgba(0, 9, 15, 0.46)"
          >
            {step.icon}
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              {step.title}
            </Typography>
            <Typography color="text.secondary">{step.description}</Typography>
          </TestimonialCard>
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
