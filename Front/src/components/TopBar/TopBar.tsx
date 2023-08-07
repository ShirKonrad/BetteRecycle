import { AppBar, Box, Typography, Toolbar as MuiToolbar } from "@mui/material"
import { MilitaryTech, Toll } from "@mui/icons-material"
import React from "react"

export default function TopBar () {
    return (
        <Box>
        <AppBar position="sticky" sx={{backgroundColor: "var(--primary-bg-color2)"}}>
            <Box sx={{ 
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems: "center",
                    p: 1,
                }}>
                <Box>
                    <Box sx={{ display:"flex" }}>
                        <MilitaryTech />
                        <Typography>152</Typography>
                    </Box>
                    <Box sx={{ display:"flex" }}>
                        <Toll />
                        <Typography>38</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>BetteRecycle</Typography>
                </Box>
            </Box>
        </AppBar>
        <MuiToolbar  sx={{ marginBottom: "1vh" }} />
        </Box>
    )
}