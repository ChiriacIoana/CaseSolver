"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Box, Avatar, Typography } from "@mui/material";
import React from "react";

type TestimonialCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  text: string;
  glowColor?: string; 
  backgroundColor?: string; 
};

export default function TestimonialCard({
  name,
  role,
  avatarUrl,
  text,
  glowColor = "rgba(12, 0, 0, 0.71)",
  backgroundColor = "rgba(1, 1, 7, 0.89)",
}: TestimonialCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const glow = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      ${glowColor},
      transparent 40%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      style={{
        position: "relative",
        borderRadius: 14,
        overflow: "hidden",
        background: backgroundColor,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 76px 100px rgba(40, 1, 1, 0.45)",
        minHeight: 300,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: glow,
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "relative",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 1.5,
        }}
      >
        <Avatar
          src={avatarUrl}
          alt={name}
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="subtitle1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {`"${text}"`}
        </Typography>
      </Box>
    </motion.div>
  );
}
