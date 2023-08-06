import React from "react"
import { Box, IconButton, Button } from "@mui/material"
import UserScoreCard from "../../components/UserScoreCard/UserScoreCard"
import { AddBox, PersonAdd } from "@mui/icons-material"

export default function Friends() {

    // Everything i write is in English instead of hebrew
    // because i can't change languages with this
    // FUCKING CHROMEBOOK
        
    
    const friendsMock = [
        {
            name: "Yoad Loko",
            points: 453,
        },
        {
            name: "Liav Bookroom",
            points: 1054,
        },
        {
            name: "Yamel Komer Tsena",
            points: 61,
        },
        {
            name: "Adla Winkers",
            points: 61,
        },
    ]

    const friendCards = friendsMock.map((friend) => (
        <UserScoreCard name={friend.name} points={friend.points} isUser={false}/>
    ))

    return (
        <Box sx={{ py: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mx: 4 }}>
                <IconButton>
                    <AddBox />
                </IconButton>
                <IconButton>
                    <PersonAdd />
                </IconButton>
                <Button variant="contained">Friends</Button>
                <Button variant="contained">Global</Button>
            </Box>
            <Box sx={{ mb: 6 }}>
                <UserScoreCard name="Avig Alog" points={831} isUser={true}/>
            </Box>
            <Box>
                {friendCards}
            </Box>
        </Box>
    )
}