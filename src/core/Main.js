import { Container } from "@mui/material";
import Jumbotron from "./main/Jumbotron";
import AboutMe from "./main/AboutMe";
import Projects from "./main/Projects";
import Contact from "./main/Contact";

const Main = () => {
  return (
    <Container>
      <Jumbotron />
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Main;
