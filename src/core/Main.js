import { Box, Container, Divider, Grid, useMediaQuery } from "@mui/material";
import Jumbotron from "./main/Jumbotron";
import AboutMe from "./main/AboutMe";
import Projects from "./main/Projects";
import Connect from "./main/Connect";
import LeftBar from "./main/LeftBar";
import Skills from "./main/jumbotron/Skills";

const Main = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <Box>
      <div id="home"></div>
      <Grid container sx={{ width: "100%" }}>
        {isDesktop && (
          <Grid item xs={12} sm={2}>
            <LeftBar />
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={isDesktop ? 8 : 12}
          sx={{
            borderLeft: "solid 1px white",
            borderRight: "solid 1px white",
          }}
        >
          <Container
            sx={{
              padding: 4,
            }}
          >
            <Grid item xs={12} sm={12}>
              <Divider id="home"></Divider>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Jumbotron />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider id="skills"></Divider>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Skills />
            </Grid>
            <Divider id="connect"> </Divider>
            <Grid item xs={12} sm={12}>
              <Connect />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider id="about"> </Divider>
            </Grid>
            <Grid item xs={12} sm={12}>
              <AboutMe />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Divider id="projects"></Divider>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Projects />
            </Grid>
          </Container>
        </Grid>
        {isDesktop && (
          <Grid item xs={12} sm={2}>
            <></>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Main;
