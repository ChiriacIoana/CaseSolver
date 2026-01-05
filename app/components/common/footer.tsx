"use client";
import { alpha, useTheme } from "@mui/material/styles";
import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: alpha(theme.palette.background.default, 0.1), 
        backdropFilter: "blur(12px)", 
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.15)", 
        py: 1.5,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} AXIOM. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5, alignItems: "center", fontSize: '0.875rem', color: theme.palette.text.secondary }}>
            Made with ❤️ by <Link href="https://www.instagram.com/ioana.chr9/" underline="hover" color="inherit" target="_blank" rel="noopener noreferrer">ioana</Link>
        
        </Box>
      </Container>
    </Box>
  );
}
