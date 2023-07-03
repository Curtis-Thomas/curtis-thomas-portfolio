import { Container, Typography } from "@mui/material";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Typography sx={{ color: "white", fontSize: "2rem" }}>
        Projects
      </Typography>
      <Container sx={{ display: "flex" }}>
        <ProjectCard img="img" title="title" description="description" />
        <ProjectCard img="img" title="title" description="description" />
      </Container>
      <Container sx={{ display: "flex" }}>
        <ProjectCard img="img" title="title" description="description" />
        <ProjectCard img="img" title="title" description="description" />
      </Container>
      <Container sx={{ display: "flex" }}>
        <ProjectCard img="img" title="title" description="description" />
        <ProjectCard img="img" title="title" description="description" />
      </Container>
    </Container>
  );
};

export default Projects;
