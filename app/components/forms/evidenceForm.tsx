"use client";

import React from "react";
import { Paper, TextField, MenuItem, IconButton } from "@mui/material";
import { Remove } from "@mui/icons-material";

import { Evidence } from "./types";
import IceCard from "../common/IceCard";

type Props = {
  evidence: Evidence;
  index: number;
  onChange: <K extends keyof Evidence>(index: number, field: K, value: Evidence[K]) => void;
  onRemove: (index: number) => void;
};

export default function EvidenceForm({ evidence, index, onChange, onRemove }: Props) {
  return (
    <IceCard>
      <IconButton
        onClick={() => onRemove(index)}
        sx={{ position: "absolute", top: 8, right: 8 }}
        color="error"
        size="small"
      >
        <Remove />
      </IconButton>
      <TextField
        label="Description"
        value={evidence.description}
        onChange={(e) => onChange(index, "description", e.target.value)}
        fullWidth
        sx={{ mb: 1, mt: 4 }}
      />
      <TextField
        label="Type (physical, testimonial, digital)"
        value={evidence.type}
        onChange={(e) => onChange(index, "type", e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        label="Reliability (1-5)"
        type="number"
        inputProps={{ min: 1, max: 5 }}
        value={evidence.reliability}
        onChange={(e) => onChange(index, "reliability", Number(e.target.value))}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        select
        label="Contradicts Alibi"
        value={evidence.contradictsAlibi ? "yes" : "no"}
        onChange={(e) => onChange(index, "contradictsAlibi", e.target.value === "yes")}
        fullWidth
      >
        <MenuItem value="yes">Yes</MenuItem>
        <MenuItem value="no">No</MenuItem>
      </TextField>
    </IceCard>
  );
}
