import { Box, Card, Grid, Typography } from "@mui/material";
import JumbotronImg from "./jumbotron.png";

const Jumbotron = () => {
  return (
    <Card sx={{ backgroundColor: "#12181F" }}>
      <Grid container spacing={1} padding={5}>
        <Grid item xs={12} sm={8}>
          <Grid item xs={12} sm={12}>
            <Typography color={"white"}>Curtis Thomas</Typography>
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid item xs={12} sm={12}>
            <Box sx={{ maxWidth: "100%" }}>
              <img
                src={JumbotronImg}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Jumbotron;
