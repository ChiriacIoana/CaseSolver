"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Box } from "@mui/material";
import React from "react";

export default function IceCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    console.log(
  "mouse:",
  e.clientX - rect.left,
  e.clientY - rect.top
);
  };

  const glow = useMotionTemplate`
  radial-gradient(
    100px circle at ${mouseX}px ${mouseY}px,
    rgba(17, 140, 197, 0.86),
    transparent 40%
  )
`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      style={{
        position: "relative",
        width: "100%",
        minHeight: 220,
        borderRadius: 14,
        overflow: "hidden",
        background: "rgba(39, 10, 11, 0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: "0 75px 90px rgba(0, 0, 0, 0.63)",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: glow,
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", p: 4 }}>
        {children}
      </Box>
    </motion.div>
  );
}
