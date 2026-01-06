"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

type IceCardProps = {
  children: ReactNode;
  glowColor?: string;
  backgroundColor?: string;
  minHeight?: number | string;
};

export default function TestimonialCard({
  children,
  glowColor = "rgba(12, 0, 0, 0.71)",
  backgroundColor = "rgba(1, 1, 7, 0.89)",
  minHeight = 300,
}: IceCardProps) {
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
        borderRadius: 16,
        overflow: "hidden",
        background: backgroundColor,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 25px 60px rgba(57, 0, 0, 0.53)",
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          gap: 0.8,
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
}
