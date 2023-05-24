import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Sidebar } from "./parts/Sidebar";
import { AppBar } from "./parts/AppBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <AppBar />

      <Box
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export const drawerWidth = 240;
