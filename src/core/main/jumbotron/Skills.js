import { Card, Grid, Typography } from "@mui/material";
import html5 from "./assets/html5-colored.svg";
import css3 from "./assets/css3-colored.svg";
import javascript from "./assets/javascript-colored.svg";
import reactImg from "./assets/react-original-wordmark.svg";
import mui from "./assets/materialui.svg";
import node from "./assets/nodejs-colored.svg";

const Skills = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#12181F",
        marginTop: 5,
        marginBottom: 5,
        padding: 2,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} marginBottom={3}>
          <Typography color={"white"} variant="h3" component="h2">
            Skills
          </Typography>
        </Grid>

        <Grid container spacing={1} p={1}>
          <Grid item xs={6} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img
                  src={html5}
                  alt="HTML5"
                  style={{ objectFit: "contain", width: "50%" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="white">HTML5</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img
                  src={css3}
                  alt="CSS3"
                  style={{ objectFit: "contain", width: "50%" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="white">CSS3</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img
                  src={javascript}
                  alt="JavaScript"
                  style={{ objectFit: "contain", width: "50%" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="white">JavaScript</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img
                  src={reactImg}
                  alt="React"
                  style={{ objectFit: "contain", width: "50%" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="white">React JS</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img
                  src={mui}
                  alt="Material UI"
                  style={{ objectFit: "contain", width: "50%" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="white">Material UI</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} sm={6}>
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <img
                  src={node}
                  alt="Node.js"
                  style={{ objectFit: "contain", width: "50%" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography color="white">Node.js</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Skills;
