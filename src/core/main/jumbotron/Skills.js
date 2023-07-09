import { Box, Grid, Typography } from "@mui/material";

import codeGif from "./assets/code gif.gif";
import html5 from "./assets/html5-colored.svg";
import css3 from "./assets/css3-colored.svg";
import javascript from "./assets/javascript-colored.svg";
import reactImg from "./assets/react-original-wordmark.svg";
import mui from "./assets/materialui.svg";
import node from "./assets/nodejs-colored.svg";
import mongo from "./assets/mongodb-colored.svg";

const Skills = () => {
  return (
    <Box>
      <Grid container xs={12} sm={12}>
        <Grid container item xs={12} sm={12}>
          <Grid item xs={6} sm={6}>
            <Box>
              <img
                src={codeGif}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography color={"white"}> Skills</Typography>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={12}>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={6} sm={6}>
              <img
                src={html5}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography color={"white"}>HTML 5</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <img
                src={css3}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography color={"white"}>CSS 3</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              {" "}
              <img
                src={javascript}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography color={"white"}>JavaScript</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              {" "}
              <img
                src={reactImg}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography color={"white"}>Rect JS</Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={6} sm={6}>
              {" "}
              <img
                src={mui}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography color={"white"}>Material UI</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              {" "}
              <img
                src={node}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography color={"white"}>Node JS</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              {" "}
              <img
                src={mongo}
                alt="Jumbotron"
                style={{ objectFit: "contain", width: "50%" }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography color={"white"}>Mongo DB</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
