import { AppBar, Button, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container sx={{ height: "5vh" }}>
      <AppBar sx={{ height: "5vh", backgroundColor: "#272838" }}>
        <Container
          sx={{ height: "5vh", display: "flex", alignItems: "center" }}
        >
          {" "}
          <Container>
            <Typography>Curtis Thomas</Typography>
          </Container>
          <Container>
            <Button sx={{ color: "#B1B1B2" }}>About</Button>
            <Button sx={{ color: "#B1B1B2" }}>Projects</Button>
            <Button sx={{ color: "#B1B1B2" }}>Contact</Button>
          </Container>
          <Container>
            <Button sx={{ color: "#B1B1B2" }}>Resume</Button>
          </Container>
        </Container>
      </AppBar>
    </Container>
  );
};

export default Header;
