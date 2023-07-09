import { Card, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#12181F",
          marginTop: 5,
          marginBottom: 5,

          padding: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid container item xs={12} sm={12}>
            {" "}
            <Typography color={"white"} variant="h3" component="h2">
              About Me
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={12}>
            {" "}
            <Typography
              sx={{ color: "#B1B1B2", fontSize: "1rem", marginTop: 5 }}
            >
              Hello! My name is Curtis. I started my journey in the world of Web
              Development back in 2018 when I began building basic WordPress
              sites. After becoming proficient with WordPress, I naturally
              gravitated towards learning HTML, CSS and then onto
              JaveScript/React JS.{" "}
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={12}>
            <Typography sx={{ color: "#B1B1B2", fontSize: "1rem" }}>
              Now I make websites using React JS and Material UI
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default AboutMe;
