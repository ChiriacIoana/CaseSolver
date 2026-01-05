"use client";

import React from "react";
import { Box, Container, Typography, Paper, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import Link from "next/link";

export default function LearnMore() {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
     
      <Paper sx={{ p: 4, mb: 4, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to AXIOM
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your assistant for solving murder mysteries.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          What AXIOM does
        </Typography>
        <Typography variant="body1" paragraph>
          AXIOM helps you organize, analyze, and solve murder mystery cases. Whether you're a detective, mystery enthusiast, or student working on logic puzzles, AXIOM provides tools to make solving cases faster and smarter.
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Organize suspects"
              secondary="Add suspects, their motives, alibis, and access to evidence in an easy-to-use form."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Track evidence"
              secondary="Log evidence, its type, reliability, and whether it contradicts alibis or points to a suspect."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Analyze cases"
              secondary="Use our unique logic-based algorithms to evaluate clues and suggest likely suspects."
            />
          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          How to Use AXIOM
        </Typography>
        <Typography variant="body1" paragraph>
          1. Fill out the <strong>Case Form</strong> with case details, suspects, and evidence. <br />
          2. Submit the form to organize the case and start analyzing it. <br />
          3. AXIOM will help you evaluate clues and rank suspects logically. <br />
          4. Use the insights to solve your murder mystery faster.
        </Typography>
      </Paper>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link href="/case" passHref>
          <Button variant="contained" color="primary" size="large">
            Start a New Case
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
