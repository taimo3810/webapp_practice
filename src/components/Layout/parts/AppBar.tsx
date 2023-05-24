import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { drawerWidth } from "../Layout";

export const AppBar: React.FC = () => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <Typography variant="h6">Github リポジトリ検索</Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
