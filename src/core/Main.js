import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Jumbotron from "./main/Jumbotron";
import AboutMe from "./main/AboutMe";
import Projects from "./main/Projects";
import Connect from "./main/Connect";
import LeftBar from "./main/LeftBar";

const Main = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <Box>
      <Grid container spacing={3}>
        {isDesktop && (
          <Grid item xs={12} sm={2}>
            <Box sx={{ height: "100%", width: "100%" }}>
              <LeftBar />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} sm={isDesktop ? 10 : 12}>
          <Container
            sx={{
              borderLeft: "solid 1px white",
              paddingTop: 5,
              paddingBottom: 1,
            }}
          >
            <Jumbotron />
            <Connect />
            <AboutMe />
            <Projects />
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
