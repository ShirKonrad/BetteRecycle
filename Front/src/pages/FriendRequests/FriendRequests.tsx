import { Box, TextField, Typography, Button, IconButton } from "@mui/material"
import React from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FriendRequestCard from "../../components/FriendRequestCard/FriendRequestCard";

export default function FriendRequests() {
    const [names, setNames] = React.useState<string[]>(["Billy", "Joe", "Cooper"])
    
    // Filler just to make things look like they work
    const removeRequest = (name: string) => {
        setNames(prev => prev.filter(arrName => arrName !== name))
    }

    const requestCards = names.map(name => (
        <FriendRequestCard name={name} accept={() => removeRequest(name)} reject={() => removeRequest(name)} />
    ))

    return(
        <Box sx={{ my: 1 }}>
            <IconButton>
                <ArrowForwardIosIcon />
            </IconButton>
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4" sx={{ textAlign:"center", mb: 2 }}>Friend Requests</Typography>
                <Box>
                    {requestCards}
                </Box>
            </Box>
        </Box>
    )
}