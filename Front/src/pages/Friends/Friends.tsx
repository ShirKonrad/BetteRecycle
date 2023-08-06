import React from "react"
import { Box } from "@mui/material"
import UserScoreCard from "../../components/UserScoreCard/UserScoreCard"

export default function Friends() {
    return (
        <Box sx={{ py: 4 }}>
            <Box sx={{ mb: 6 }}>
                <UserScoreCard isUser={true}/>
            </Box>
            <Box>
                <UserScoreCard isUser={false} />
                <UserScoreCard isUser={false} />
                <UserScoreCard isUser={false} />
            </Box>
        </Box>
    )
}