"use client";
import { alpha, useTheme } from "@mui/material/styles";
import { theme } from "../../utils/theme";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { use, useState } from "react";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path?: string) => {
    setAnchorEl(null);
    if (path) window.location.href = path;
  };

  const menuItemStyles = {
    borderRadius: 2,
    mx: 1,
    my: 0.5,
    px: 2,
    py: 1.2,
    fontWeight: 500,
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "scale(1.05)",
      bgcolor: "secondary.main",
      color: "secondary.contrastText",
    },
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: alpha(theme.palette.background.default, 0.1),
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
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

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button color="inherit" onClick={() => handleMenuClose("/welcome")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => handleMenuClose("/case")}>
              Solve
            </Button>
            <Button color="inherit" onClick={() => handleMenuClose("/docss")}>
              Docs
            </Button>
          </Box>

          <Box
            sx={{
              ml: "auto",
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            <Button
              color="primary"
              variant="outlined"
              onClick={() => handleMenuClose("/testimonials")}
            >
              Testimonials
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleMenuClose("/how")}
            >
              How it works
            </Button>
          </Box>

          <Box sx={{ ml: "auto", display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleMenuClose()}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                bgcolor: "rgba(37, 4, 22, 0.32)",
                backdropFilter: "blur(18px) saturate(160%)",
                WebkitBackdropFilter: "blur(18px) saturate(160%)",

                borderRadius: 0.8,
                border: "1px solid rgba(21, 8, 28, 0.15)",

                boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(7, 1, 1, 0.08)
    `,

                mt: 0,
                minWidth: 120,
                overflow: "hidden",
              },
            }}
          >
            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuClose("/welcome")}
            >
              Home
            </MenuItem>

            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuClose("/case")}
            >
              Solve
            </MenuItem>

            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuClose("/docss")}
            >
              Docs
            </MenuItem>

            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuClose("/testimonials")}
            >
              Testimonials
            </MenuItem>

            <MenuItem
              sx={menuItemStyles}
              onClick={() => handleMenuClose("/how")}
            >
              How it works
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
