import React from "react"
import { Box, IconButton, Button } from "@mui/material"
import UserScoreCard from "../../components/UserScoreCard/UserScoreCard"
import { NotificationsActive, PersonAdd } from "@mui/icons-material"

export default function Friends() {

    // Everything i write is in English instead of hebrew
    // because i can't change languages with this
    // FUCKING CHROMEBOOK
        
    
    const friendsMock = [
        {
            name: "Liav Bookroom",
            points: 1054,
        },
        {
            name: "Yoad Loko",
            points: 453,
        },
        {
            name: "Yamel Komer Tsena",
            points: 259,
        },
        {
            name: "Adla Winkers",
            points: 61,
        },
    ]

    const globalMock = [
        {
            name: "John Doe",
            points: 123694,
        },
        {
            name: "Joey Bing",
            points: 101456,
        },
        {
            name: "Owen Billing",
            points: 80954,
        },
        {
            name: "Avi Budagov",
            points: 79562,
        },
        {
            name: "Johnny B Goode",
            points: 70295,
        },
        {
            name: "Gregory Estate",
            points: 65234,
        },
        {
            name: "Grimace",
            points: 57026,
        },
        {
            name: "Yossi Mario",
            points: 55555,
        },
        {
            name: "Yuki Tsunoda",
            points: 52223,
        },
        {
            name: "Dan Richard",
            points: 50405,
        },
    ]

    const [shownScores, setShownScores] = React.useState<string>("friends")

    const friendCards = friendsMock.map((friend) => (
        <UserScoreCard name={friend.name} points={friend.points} isUser={false}/>
    ))

    const globalCards = globalMock.map((friend) => (
        <UserScoreCard name={friend.name} points={friend.points} isUser={false}/>
    ))

    return (
        <Box sx={{ py: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mx: 4 }}>
                <IconButton>
                    <PersonAdd />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <Button variant="contained" onClick={() => setShownScores("friends")}>Friends</Button>
                <Button variant="contained" onClick={() => setShownScores("global")}>Global</Button>
            </Box>
            {shownScores === "friends" && 
            <Box>
                <Box sx={{ mb: 6 }}>
                    <UserScoreCard name="Avig Alog" points={831} isUser={true}/>
                </Box>
                <Box>
                    {friendCards}
                </Box>
            </Box>
            }
            {shownScores === "global" && 
            <Box>
                <Box sx={{ mb: 3 }}>
                    {globalCards}
                </Box>
                <Box>
                    <UserScoreCard name="Avig Alog" points={831} isUser={true}/>
                </Box>
            </Box>
            }
        </Box>
    )
}