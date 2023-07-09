import { Card, Grid, Typography } from "@mui/material";

import html5 from "./assets/html5-colored.svg";
import css3 from "./assets/css3-colored.svg";
import javascript from "./assets/javascript-colored.svg";
import reactImg from "./assets/react-original-wordmark.svg";
import mui from "./assets/materialui.svg";
import node from "./assets/nodejs-colored.svg";
import mongo from "./assets/mongodb-colored.svg";

const Skills = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#12181F",
        marginTop: 5,
        marginBottom: 5,

        padding: 1,
      }}
    >
      <Grid container xs={12} sm={12}>
        <Grid container item xs={12} sm={12}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              textAlign: "center",
            }}
            p={1}
          >
            <Typography color={"white"} variant="h2" component="h2">
              Skills
            </Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12}>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={6} sm={2}>
              <img
                src={html5}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <Typography color={"white"}>HTML 5</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              <img
                src={css3}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <Typography color={"white"}>CSS 3</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              {" "}
              <img
                src={javascript}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <Typography color={"white"}>JavaScript</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              {" "}
              <img
                src={reactImg}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <Typography color={"white"}>Rect JS</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={6} sm={2}>
              {" "}
              <img
                src={mui}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <Typography color={"white"}>Material UI</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              {" "}
              <img
                src={node}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <Typography color={"white"}>Node JS</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              {" "}
              <img
                src={mongo}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={10}>
              <Typography color={"white"}>Mongo DB</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Skills;
