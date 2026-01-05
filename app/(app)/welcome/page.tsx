"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Divider,
} from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Box
            sx={{
              width: 80,
              height: 6,
              bgcolor: "primary.main",
              borderRadius: 3,
            }}
          />

          <Typography variant="h1">
            Welcome.
          </Typography>

          <Typography variant="h5" color="text.secondary">
           Give us the details and we'll give you the solution.
          </Typography>
          <Typography variant="h5" color="text.secondary" >
            Solve a mistery. A murder mistery.
          </Typography>

          <Divider
            sx={{
              borderColor: "secondary.main",
              width: 180,
            }}
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              size="large"
              variant="contained"
              color="primary"
            >
              Get Started
            </Button>

            <Button
              size="large"
              variant="outlined"
              color="primary"
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
