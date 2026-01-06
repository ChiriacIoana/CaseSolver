"use client";

import React from "react";
import { Paper, TextField, MenuItem, IconButton } from "@mui/material";
import { Remove } from "@mui/icons-material";

import { Suspect } from "./types"; 
import IceCard from "../common/IceCard";

type Props = {
  suspect: Suspect;
  index: number;
  onChange: <K extends keyof Suspect>(index: number, field: K, value: Suspect[K]) => void;
  onRemove: (index: number) => void;
};

export default function SuspectForm({ suspect, index, onChange, onRemove }: Props) {
  return (
    <IceCard >
      <IconButton
        onClick={() => onRemove(index)}
        sx={{ position: "absolute", top: 2, right: 8 }}
        color="error"
        size="small"
      >
        <Remove />
      </IconButton>
      <TextField
        label="Name"
        value={suspect.name}
        onChange={(e) => onChange(index, "name", e.target.value)}
        fullWidth
        sx={{ mb: 1, mt: 4 }}
      />
      <TextField
        label="Motive"
        value={suspect.motive}
        onChange={(e) => onChange(index, "motive", e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        label="Alibi"
        value={suspect.alibi}
        onChange={(e) => onChange(index, "alibi", e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        select
        label="Alibi Verified"
        value={suspect.alibiVerified ? "yes" : "no"}
        onChange={(e) => onChange(index, "alibiVerified", e.target.value === "yes")}
        fullWidth
        sx={{ mb: 1 }}
      >
        <MenuItem value="yes">Yes</MenuItem>
        <MenuItem value="no">No</MenuItem>
      </TextField>
      <TextField
        select
        label="Access to Weapon"
        value={suspect.accessToWeapon ? "yes" : "no"}
        onChange={(e) => onChange(index, "accessToWeapon", e.target.value === "yes")}
        fullWidth
      >
        <MenuItem value="yes">Yes</MenuItem>
        <MenuItem value="no">No</MenuItem>
      </TextField>
    </IceCard>
  );
}
