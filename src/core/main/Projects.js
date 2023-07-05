import { Grid, Typography } from "@mui/material";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  return (
    <Grid container spacing={3} marginBottom={15}>
      <Grid container item xs={12} sm={12}>
        {" "}
        <Typography color={"white"}>Projects</Typography>
      </Grid>
      <Grid container item xs={12} sm={12}>
        <Grid container item xs={12} sm={6}>
          <ProjectCard img="img" title="title" description="description" />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <ProjectCard img="img" title="title" description="description" />
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={12}>
        <Grid container item xs={12} sm={6}>
          <ProjectCard img="img" title="title" description="description" />
        </Grid>
        <Grid container item xs={12} sm={6}>
          <ProjectCard img="img" title="title" description="description" />
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={12}>
        <Grid container item xs={12} sm={6}>
          {" "}
          <ProjectCard img="img" title="title" description="description" />
        </Grid>
        <Grid container item xs={12} sm={6}>
          {" "}
          <ProjectCard img="img" title="title" description="description" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
