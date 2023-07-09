import {  Card, Grid, Typography } from "@mui/material";
import JumbotronImg from "./jumbotron.png";
import Skills from "./jumbotron/Skills";

const Jumbotron = () => {
  return (
    <Card sx={{ backgroundColor: "#12181F" }}>
      <Grid container spacing={1} p={5}>
        <Grid item xs={12} sm={9}>
          <Typography color={"white"}>Curtis Thomas</Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <img
            src={JumbotronImg}
            alt="Jumbotron"
            style={{ objectFit: "contain", width: "50%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Skills />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Jumbotron;
