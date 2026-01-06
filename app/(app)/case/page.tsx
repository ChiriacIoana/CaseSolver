"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import { Add } from "@mui/icons-material";

import { Suspect, Evidence } from "../../components/forms/types";
import SuspectForm from "../../components/forms/suspectForm";
import EvidenceForm from "../../components/forms/evidenceForm";
import CaseInfo from "@/app/components/forms/caseInfo";
import { supabase } from "../../libs/supabaseClient";
import caseInfo from "@/app/components/forms/caseInfo";


export default function CaseForm() {
  const [caseTitle, setCaseTitle] = useState("");
  const [victimName, setVictimName] = useState("");
  const [timeOfDeath, setTimeOfDeath] = useState("");
  const [location, setLocation] = useState("");

  const [suspects, setSuspects] = useState<Suspect[]>([]);
  const [evidences, setEvidences] = useState<Evidence[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState("");

  const addSuspect = () => {
    setSuspects((prev) => [
      ...prev,
      {
        name: "",
        motive: "",
        alibi: "",
        alibiVerified: false,
        accessToWeapon: false,
      },
    ]);
  };

  const removeSuspect = (index: number) => {
    setSuspects((prev) => prev.filter((_, i) => i !== index));
  };

  const updateSuspect = <K extends keyof Suspect>(
    index: number,
    field: K,
    value: Suspect[K]
  ) => {
    setSuspects((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const addEvidence = () => {
    setEvidences((prev) => [
      ...prev,
      {
        description: "",
        type: "",
        reliability: 1,
        contradictsAlibi: false,
        pointsTo: "",
      },
    ]);
  };

  const removeEvidence = (index: number) => {
    setEvidences((prev) => prev.filter((_, i) => i !== index));
  };

  const updateEvidence = <K extends keyof Evidence>(
    index: number,
    field: K,
    value: Evidence[K]
  ) => {
    setEvidences((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const analyzeCase = async () => {
    try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        caseInfo: {
            title: caseTitle,
            victim: victimName,
            timeOfDeath,
            location,
          },
          suspects,
          evidence: evidences,
    }),    
    });
  
    const data = await res.json();
    setAiAnalysis(data.analysis);
    console.log("RAWW AI Analysis:",  JSON.stringify(data, null, 2));
    } catch (err){
      console.error("Error analyzing case:", err);
      setAiAnalysis("Error generating analysis.");
    }
    
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const { data: caseData, error: caseError } = await supabase
      .from("cases")
      .insert({
        title: caseTitle,
        victim: victimName,
        location,
        time_of_death: timeOfDeath || null,
      })
      .select()
      .single();

    if (caseError) throw caseError;

    const caseId = caseData.id;

    if (suspects.length > 0) {
      const { error: suspectsError } = await supabase.from("suspects").insert(
        suspects.map((s) => ({
          case_id: caseId,
          name: s.name,
          motive: s.motive,
          alibi: s.alibi,
        }))
        );

      if (suspectsError) throw suspectsError;
    }

    if (evidences.length > 0) {
      const { error: evidenceError } = await supabase.from("evidence").insert(
        evidences.map((e) => ({
          case_id: caseId,
          type: e.type,
          description: e.description,
          reliability: e.reliability,
          contradicts_alibi: e.contradictsAlibi,
          }))
        );

      if (evidenceError) throw evidenceError;
    }
    //call the ai analysis
    await analyzeCase();

    alert("Case submitted successfully!");

    //reset the forms
    setCaseTitle("");
    setVictimName("");
    setTimeOfDeath("");
    setLocation("");
    setSuspects([]);
    setEvidences([]);

  } catch (err) {
    console.error(err);
    alert(" Failed to submit case. Check console.");
  }
};


  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4}}>
        <Typography variant="h4" gutterBottom>
          Murder Mystery Case Form
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          
          <CaseInfo
            caseTitle={caseTitle}
            setCaseTitle={setCaseTitle}
            victimName={victimName}
            setVictimName={setVictimName}
            timeOfDeath={timeOfDeath}
            setTimeOfDeath={setTimeOfDeath}
            location={location}
            setLocation={setLocation}
          />

          
          <Box>
            <Typography variant="h5" gutterBottom mt={2}>
              Suspects
              <IconButton onClick={addSuspect} color="primary" size="small">
                <Add />
              </IconButton>
            </Typography>
            {suspects.map((suspect, idx) => (
              <SuspectForm
                key={idx}
                suspect={suspect}
                index={idx}
                onChange={updateSuspect}
                onRemove={removeSuspect}
              />
            ))}
          </Box>

       
          <Box>
            <Typography variant="h5" gutterBottom mt={2}>
              Evidence
              <IconButton onClick={addEvidence} color="primary" size="small">
                <Add />
              </IconButton>
            </Typography>
            {evidences.map((ev, idx) => (
              <EvidenceForm
                key={idx}
                evidence={ev}
                index={idx}
                onChange={updateEvidence}
                onRemove={removeEvidence}
              />
            ))}
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Submit Case
          </Button>
        </Box>
      </Paper>
      {aiAnalysis && (
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6">AI Insight of your case</Typography>
        <Typography sx={{mt: 1}}>{aiAnalysis}</Typography>
      </Paper>
      )}
    </Container>
  );
}
