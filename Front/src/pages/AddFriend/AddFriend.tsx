import { Box, TextField, Typography, Button } from "@mui/material"
import React from "react"

export default function AddFriend() {

    const [userId, setUserId] = React.useState<string>("")

    return(
        <Box sx={{ my: 16 }}>
            <Typography variant="h2" sx={{ mb: 2, textAlign: "center" }}>Add a friend</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <TextField label="Friend's user ID" value={userId} onChange={(event) => setUserId(event.target.value)}/>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" onClick={() => setUserId("")}>Send Request</Button>
            </Box>
        </Box>
    )
}