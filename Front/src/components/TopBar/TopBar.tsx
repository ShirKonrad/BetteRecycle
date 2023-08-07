import { AppBar, Box, Typography, Toolbar as MuiToolbar } from "@mui/material";
import { MilitaryTech, Toll } from "@mui/icons-material";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export default function TopBar() {
  const {user} = useContext(UserContext);
  return (
    <>
      <AppBar position="sticky" sx={{backgroundColor: "var(--primary-bg-color2)"}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box>
            <Box sx={{ display: "flex" }}>
              <MilitaryTech />
              <Typography>{user.score}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Toll />
              <Typography>{user.credit}</Typography>
            </Box>
          </Box>
          <Box>
            <Typography>BetteRecycle</Typography>
          </Box>
        </Box>
      </AppBar>
      {/* <MuiToolbar sx={{ marginBottom: "1vh" }} /> */}
    </>
  );
}
