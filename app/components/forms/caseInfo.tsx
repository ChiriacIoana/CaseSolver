"use client";

import React from "react";
import { Box, TextField } from "@mui/material";

type Props = {
  caseTitle: string;
  setCaseTitle: (value: string) => void;
  victimName: string;
  setVictimName: (value: string) => void;
  timeOfDeath: string;
  setTimeOfDeath: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
};

export default function CaseInfo({
  caseTitle,
  setCaseTitle,
  victimName,
  setVictimName,
  timeOfDeath,
  setTimeOfDeath,
  location,
  setLocation,
}: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 2 columns on tablet+, 1 on mobile
        gap: 2,
        mb: 3,
      }}
    >
      <TextField
        label="Case Title"
        value={caseTitle}
        onChange={(e) => setCaseTitle(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Victim Name"
        value={victimName}
        onChange={(e) => setVictimName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Time of Death"
        type="datetime-local"
        value={timeOfDeath}
        onChange={(e) => setTimeOfDeath(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        required
      />
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        required
      />
    </Box>
  );
}
