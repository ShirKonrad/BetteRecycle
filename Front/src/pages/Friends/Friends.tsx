import React, { useContext } from "react";
import { Box, IconButton, Button } from "@mui/material";
import UserScoreCard from "../../components/UserScoreCard/UserScoreCard";
import { NotificationsActive, PersonAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

interface Props {}

const Friends: React.FC<Props> = (props: Props) => {
  const { user } = useContext(UserContext);
  
  const friendsMock = [
    {
      name: "שיר קונרד",
      points: 1054,
    },
    {
      name: "יואב קוקו",
      points: 453,
    },
    {
      name: "יהל כהן צמח",
      points: 259,
    },
    {
      name: "אדל",
      points: 61,
    },
  ];

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
  ];

  const navigate = useNavigate();

  const [shownScores, setShownScores] = React.useState<string>("friends");

  const friendCards = friendsMock.map((friend) => (
    <UserScoreCard name={friend.name} points={friend.points} isUser={false} />
  ));

  const globalCards = globalMock.map((friend) => (
    <UserScoreCard name={friend.name} points={friend.points} isUser={false} />
  ));

  return (
    <Box sx={{ py: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mx: 4 }}>
        <IconButton onClick={() => navigate("/friends/add")}>
          <PersonAdd />
        </IconButton>
        <IconButton onClick={() => navigate("/friends/requests")}>
          <NotificationsActive />
        </IconButton>
        <Button variant="contained" onClick={() => setShownScores("friends")}>
          חברים
        </Button>
        <Button variant="contained" onClick={() => setShownScores("global")}>
          עולמי
        </Button>
      </Box>
      {shownScores === "friends" && (
        <Box>
          <Box sx={{ mb: 6 }}>
            <UserScoreCard name={user.name} points={user.score} isUser={true} />
          </Box>
          <Box>{friendCards}</Box>
        </Box>
      )}
      {shownScores === "global" && (
        <Box>
          <Box sx={{ mb: 3 }}>{globalCards}</Box>
          <Box>
            <UserScoreCard name={user.name} points={user.score} isUser={true} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Friends;
