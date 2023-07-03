import { Container, Typography } from "@mui/material";

const ProjectCard = ({ img, title, description }) => {
  return (
    <Container sx={{ backgroundColor: "white", margin: 1 }}>
      <Typography>{img}</Typography>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Container>
  );
};

export default ProjectCard;
