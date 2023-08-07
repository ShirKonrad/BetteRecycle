import { Paper, Typography } from "@mui/material"
import React from "react"

export default function UserScoreCard(props: any) {

    return (
        <Paper sx={{
            display: "flex",
            justifyContent: "space-between",
            width: props. isUser ? 7/8 : 3/4,
            mx: "auto",
            px: 1,
            py:  props.isUser ? 3 : 2 ,
            my: 1,
            bgColor: "primary.main"
        }}>
            <Typography>{ props.name }</Typography>
            <Typography>{ props.points }</Typography>
        </Paper>
    )
}