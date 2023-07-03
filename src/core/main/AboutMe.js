import { Container, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Typography sx={{ color: "white", fontSize: "2rem" }}>
        About Me
      </Typography>
      <Typography sx={{ color: "#B1B1B2", fontSize: "1rem", marginTop: 5 }}>
        Hello! My name is Curtis. I started my journey in the world of Web
        Development back in 2018 when I began building basic WordPress sites.
        After becoming proficient with WordPress, I naturally gravitated towards
        learning HTML and CSS.{" "}
      </Typography>
      <Typography sx={{ color: "#B1B1B2", fontSize: "1rem" }}>
        More recently I started developing using vanilla JavaScript. Using
        online learning resources and exploring all the different areas and
        possibilities of the language I continued building my skillset.
      </Typography>
    </Container>
  );
};

export default AboutMe;
