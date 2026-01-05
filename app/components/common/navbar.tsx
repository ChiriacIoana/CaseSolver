"use client";
import { alpha } from "@mui/material/styles";
import { theme } from "../../utils/theme";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: alpha(theme.palette.background.default, 0.1),
        backdropFilter: "blur(12px)", 
        borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`, 
        px: 0,
        py: 0, 
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 52 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.05em",
              mr: 4,
            }}
          >
            AXIOM
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" onClick={() => window.location.href = "/welcome"}>Home</Button>
            <Button color="inherit">Solve</Button>
            <Button color="inherit">Docs</Button>
          </Box>

          <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
            <Button color="primary" variant="outlined">
              vienna yey
            </Button>
            <Button color="primary" variant="contained">
              midnight
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
