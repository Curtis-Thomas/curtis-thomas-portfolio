import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ borderTop: "1px solid white" }}>
      <Container>
        {" "}
        <Typography sx={{ color: "#B1B1B2" }}>
          Copyright © 2023 Curtis Thomas
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
