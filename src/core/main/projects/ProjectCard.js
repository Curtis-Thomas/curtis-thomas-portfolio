import { Box, Grid, Typography } from "@mui/material";

const ProjectCard = ({ img, title, description }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#3B434C", width: "90%" }}>
        <Grid container spacing={2}>
          <Grid container item xs={11} sm={11}>
            {" "}
            <Typography color={"white"}>{img}</Typography>
          </Grid>
          <Grid container item xs={11} sm={11}>
            {" "}
            <Typography color={"white"}>{title}</Typography>
          </Grid>
          <Grid container item xs={11} sm={11}>
            {" "}
            <Typography color={"white"}>{description}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectCard;
