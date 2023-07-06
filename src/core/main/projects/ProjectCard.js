import { Box, Card, Grid, Typography } from "@mui/material";

const ProjectCard = ({ img, title, description }) => {
  return (
    <Card
      sx={{ backgroundColor: "#3B434C", padding: 4, marginTop: 5 }}
      className="imageContainer"
    >
      <Grid container spacing={2} sx={{ color: "white" }}>
        <Grid container item xs={12} sm={12}>
          <Grid container item xs={12} sm={12}>
            {" "}
            <Card
              sx={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={img}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid container item xs={12} sm={12}>
          <Typography>{description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
