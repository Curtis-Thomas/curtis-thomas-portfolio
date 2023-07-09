import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import ProjectCard from "./projects/ProjectCard";
import mealsync from "./projects/mealsync.webp";
import weblinkki from "./projects/weblinkki.webp";
import far from "./projects/far.webp";

const Projects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#12181F",
        marginTop: 5,
        marginBottom: 5,

        padding: 2,
      }}
    >
      <Grid container spacing={3} marginBottom={15}>
        <Grid container item xs={12} sm={12}>
          {" "}
          <Typography color={"white"}>Projects</Typography>
        </Grid>
        <Grid container item xs={12} sm={12} spacing={2}>
          <Grid container item xs={12} sm={6}>
            <CardActionArea href="https://mealsync.io/" target="_blank">
              <ProjectCard
                img={mealsync}
                title="MealSync"
                description="Meal Planning online app which uses React JS and Material UI."
              />
            </CardActionArea>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <CardActionArea
              href="https://frolicking-smakager-46d386.netlify.app/"
              target="_blank"
            >
              <ProjectCard
                img={weblinkki}
                title="WebLinkki"
                description="Storefront for my web design/development/fix services."
              />
            </CardActionArea>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <CardActionArea
              href="https://curtis-thomas.github.io/free-api-list-with-react/"
              target="_blank"
            >
              <ProjectCard
                img={far}
                title="Free API List With React "
                description="Open Source API List and Testing Tools. "
              />
            </CardActionArea>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
