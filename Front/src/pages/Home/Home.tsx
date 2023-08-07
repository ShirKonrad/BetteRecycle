import { Typography, Box, Paper } from "@mui/material";
import QrScanner from "../../components/QR/QrScanner";
import "./Home.css";

interface Props {}

const Home = function () {
  return (
    <Box>
      <Typography variant="h2" sx={{ textAlign: "center", mt: 8 }}>
        שלום, אביב!
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 2,
            mt: 4,
          }}>
          <Paper elevation={8} sx={{ mx: 2, p: 1 }}>
            <Typography variant="h3">4</Typography>
            <Typography variant="h6">מספר הקופונים שברשותך</Typography>
          </Paper>
          <Paper elevation={8} sx={{ mx: 2, p: 1 }}>
            <Typography variant="h3">פנטה</Typography>
            <Typography variant="h6">המשקה הממוחזר ביותר שלך</Typography>
          </Paper>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Paper elevation={8} sx={{ mx: 2, p: 1 }}>
            <Typography variant="h3">27</Typography>
            <Typography variant="h6">הממוצע העולמי של מחזור לחודש</Typography>
          </Paper>
          <Paper elevation={8} sx={{ mx: 2, p: 1 }}>
            <Typography variant="h3">29</Typography>
            <Typography variant="h6">מספר הבקבוקים שמחזרת החודש</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
