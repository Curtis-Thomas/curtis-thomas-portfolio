import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Jumbotron from "./main/Jumbotron";
import AboutMe from "./main/AboutMe";
import Projects from "./main/Projects";
import Connect from "./main/Connect";
import LeftBar from "./main/LeftBar";
import Skills from "./main/jumbotron/Skills";
import { Link } from "react-scroll";

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
            }}
          >
            <div id="home"></div>
            <Link to="jumbotron" smooth={true}>
              <div id="jumbotron">
                <Jumbotron />
              </div>
            </Link>
            <Link to="skills" smooth={true}>
              <div id="skills">
                <Skills />
              </div>
            </Link>
            <Link to="connect" smooth={true}>
              <div id="connect">
                <Connect />
              </div>
            </Link>
            <Link to="about" smooth={true}>
              <div id="about">
                <AboutMe />
              </div>
            </Link>
            <Link to="projects" smooth={true}>
              <div id="projects">
                <Projects />
              </div>
            </Link>
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
