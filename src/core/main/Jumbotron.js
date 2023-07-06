import { Button, Card, Grid, Typography } from "@mui/material";
import JumbotronImg from "./jumbotron.png";

const Jumbotron = () => {
  return (
    <Card sx={{ backgroundColor: "#12181F", marginRight: 5 }}>
      <Grid container spacing={1} padding={5}>
        <Grid item xs={12} sm={8}>
          <Grid item xs={12} sm={12}>
            <Typography color={"white"}>Curtis Thomas</Typography>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={12} sm={12}>
            <Button>Get in Touch</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid item xs={12} sm={12}>
            <img
              src={JumbotronImg}
              alt="Jumbotron"
              style={{ objectFit: "fill", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Jumbotron;
