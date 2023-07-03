import { Button, Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Typography sx={{ color: "white", fontSize: "2rem" }}>Contact</Typography>
      <Typography sx={{ color: "#B1B1B2", fontSize: "1rem", marginTop: 5 }}>
        If you have any questions or would just like to chat, please feel free
        to get in touch via the links below.
      </Typography>
      <Container sx={{ marginTop: 5 }}>
        <Button sx={{ color: "#B1B1B2" }}>E-mail</Button>
        <Button sx={{ color: "#B1B1B2" }}>LinkedIn</Button>
      </Container>
    </Container>
  );
};

export default Contact;
