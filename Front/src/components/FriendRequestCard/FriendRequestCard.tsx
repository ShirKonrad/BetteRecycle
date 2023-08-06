import { Box, IconButton, Paper, Typography } from "@mui/material"
import React from "react"
import { Clear, Check } from '@mui/icons-material';

export default function FriendRequestCard (props: any) {
    return (
        <Paper sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            width: 3/4,
            m: "auto",
            my: 2,
        }}>
            <Typography variant="h5">{props.name}</Typography>
            <Box>
                <IconButton onClick={props.accept} color="primary">
                    <Check />
                </IconButton>
                <IconButton onClick={props.reject} color="warning">
                    <Clear />
                </IconButton>
            </Box>
        </Paper>
    )
}