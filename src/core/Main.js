import { Box, Container, Grid, useMediaQuery } from "@mui/material";
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
      <Grid container spacing={5}>
        {isDesktop && (
          <Grid item xs={12} sm={2}>
            <LeftBar />
          </Grid>
        )}
        <Grid item xs={12} sm={isDesktop ? 8 : 12}>
          <Container
            sx={{
              borderLeft: "solid 1px white",
              borderRight: "solid 1px white",
              padding: 4,
              // paddingTop: 5,
              // paddingBottom: 1,
            }}
          >
            <Jumbotron />
            <Skills />

            <Connect />
            <AboutMe />
            <Projects />
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
