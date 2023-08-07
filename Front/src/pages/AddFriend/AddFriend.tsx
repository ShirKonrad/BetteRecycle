import { Box, TextField, Typography, Button, IconButton } from "@mui/material"
import React from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";

export default function AddFriend() {

    const [userId, setUserId] = React.useState<string>("")

    const navigate = useNavigate();

    return(
        <Box>
            <IconButton onClick={() => navigate("/friends")}>
                <ArrowForwardIosIcon />
            </IconButton>
            <Box sx={{ my: 10 }}>
                <Typography variant="h2" sx={{ mb: 2, textAlign: "center" }}>Add a friend</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <TextField label="Friend's user ID" value={userId} onChange={(event) => setUserId(event.target.value)}/>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained" onClick={() => setUserId("")}>Send Request</Button>
                </Box>
            </Box>
        </Box>
    )
}