import { Button, Container, Typography } from "@mui/material";

const Jumbotron = () => {
  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Typography sx={{ color: "#B1B1B2", fontSize: "1.5rem" }}>
        Hi, my name is
      </Typography>
      <Typography sx={{ color: "white", fontSize: "4rem", marginTop: 5 }}>
        Curtis Thomas
      </Typography>
      <Typography sx={{ color: "#B1B1B2", fontSize: "3rem", marginTop: 5 }}>
        I'm a Front-End Developer.
      </Typography>
      <Typography sx={{ color: "#B1B1B2", fontSize: "1.5rem", marginTop: 5 }}>
        I build Websites using React JS and Material UI
      </Typography>
      <Button
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          border: "solid 1px #B1B1B2",
          color: "#B1B1B2",
          marginTop: 5,
        }}
      >
        Get in Touch
      </Button>
    </Container>
  );
};

export default Jumbotron;
