import { Box, Card, Grid, Typography } from "@mui/material";
import ProjectCard from "./projects/ProjectCard";
import mealsync from "./projects/mealsync.webp";

const Projects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#12181F",
        marginTop: 5,
        marginBottom: 5,

        padding: 5,
      }}
    >
      <Grid container spacing={3} marginBottom={15}>
        <Grid container item xs={12} sm={12}>
          {" "}
          <Typography color={"white"}>Projects</Typography>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid container item xs={12} sm={12}>
            <ProjectCard
              img={mealsync}
              title="MealSync"
              description="Meal Planning online app which uses React JS and Material UI."
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
