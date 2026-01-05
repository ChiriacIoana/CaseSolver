"use client";

import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";

type Testimonial = {
  name: string;
  role: string;
  avatarUrl: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Elon Musk",
    role: "Mystery Enthusiast",
    avatarUrl: "/pic.1.jpg",
    text: "AXIOM made organizing my murder mystery cases so easy. I can track suspects and clues in one place!",
  },
  {
    name: "Mark Zuckerberg",
    role: "Student Detective",
    avatarUrl: "/pic.2.jpg",
    text: "I love how AXIOM helps me analyze evidence logically. Solving puzzles has never been this fun.",
  },
  {
    name: "Geoffrey Hinton",
    role: "Board Game Fan",
    avatarUrl: "/pic.3.jpg",
    text: "Finally, a tool that helps me keep track of suspects, alibis, and clues. It feels like I have a detective assistant!",
  },
  {
    name: "Linus Torvalds",
    role: "Logic Puzzle Lover",
    avatarUrl: "/pic.4.jpeg",
    text: "AXIOM turns complex murder mysteries into clear, structured cases. Highly recommend for any mystery fan.",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Users Say
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 4,
          mt: 2,
          p: 4
        }}
      >
        {testimonials.map((user, idx) => (
          <Paper key={idx} sx={{ p: 3, textAlign: "center", height: "100%" }}>
            <Avatar
              src={user.avatarUrl}
              alt={user.name}
              sx={{ width: 120, height: 120, margin: "0 auto", mb: 2 }}
            />
            <Typography variant="subtitle1" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {user.role}
            </Typography>
            <Typography variant="body2">{`"${user.text}"`}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
