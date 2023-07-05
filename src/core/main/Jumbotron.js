import { Button, Grid, Typography } from "@mui/material";

const Jumbotron = () => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} sm={12}>
        {" "}
        <Typography sx={{ color: "#B1B1B2", fontSize: "1.5rem" }}>
          Hi, my name is
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={12}>
        {" "}
        <Typography sx={{ color: "white", fontSize: "4rem", marginTop: 5 }}>
          Curtis Thomas
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={12}>
        {" "}
        <Typography sx={{ color: "#B1B1B2", fontSize: "3rem", marginTop: 5 }}>
          I'm a Front-End Developer.
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={12}>
        {" "}
        <Typography sx={{ color: "#B1B1B2", fontSize: "1.5rem", marginTop: 5 }}>
          I build Websites using React JS and Material UI
        </Typography>
      </Grid>
      <Grid container item xs={12} sm={12}>
        {" "}
        <Button
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "solid 1px #B1B1B2",
            color: "#B1B1B2",
            marginTop: 5,
          }}
        >
          Get in Touch
        </Button>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
