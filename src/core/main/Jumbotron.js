import { Avatar, Card, Grid, Typography } from "@mui/material";
import JumbotronImg from "./jumbotron.png";

import BadgeIcon from "@mui/icons-material/Badge";
import PlaceIcon from "@mui/icons-material/Place";
import TranslateIcon from "@mui/icons-material/Translate";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Jumbotron = () => {
  return (
    <Card sx={{ backgroundColor: "#12181F", padding: 2 }}>
      <Grid container spacing={1} p={5}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar src={JumbotronImg} sx={{ width: 132, height: 132 }} />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            color={"white"}
            p={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <BadgeIcon sx={{ marginRight: 2 }} /> Curtis Thomas - he/him
          </Typography>
          <Typography
            p={1}
            color={"white"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <PlaceIcon sx={{ marginRight: 2 }} /> Finland, Pori
          </Typography>
          <Typography
            color={"white"}
            sx={{ display: "flex", alignItems: "center" }}
            p={1}
          >
            <TranslateIcon sx={{ marginRight: 2 }} />
            English, Native
          </Typography>
          <Typography
            p={1}
            color={"white"}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <AccessTimeIcon sx={{ marginRight: 2 }} />
            (UTC +03:00)
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Jumbotron;
