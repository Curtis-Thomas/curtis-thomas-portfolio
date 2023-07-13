import { Button, Card, Grid, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Connect = () => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#12181F",
          marginTop: 5,
          marginBottom: 5,

          padding: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} marginBottom={3}>
            <Typography color={"white"} variant="h3" component="h2">
              Connect
            </Typography>
          </Grid>

          <Grid container item xs={12} sm={12} backgroundColor={"#191F26"}>
            <Grid item xs={1} sm={1}>
              <Typography color={"white"}>
                <EmailIcon />
              </Typography>
            </Grid>
            <Grid item xs={11} sm={6}>
              <Button
                sx={{ color: "#B1B1B2" }}
                target="_top"
                rel="noopener noreferrer"
                href={`mailto:curtisthomas08@hotmail.co.uk`}
              >
                CurtisThomas08@hotmail.co.uk
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={12}>
            <Grid item xs={1} sm={1}>
              <Typography color={"white"}>
                <LinkedInIcon />
              </Typography>
            </Grid>
            <Grid item xs={11} sm={11}>
              <Button
                sx={{ color: "#B1B1B2" }}
                target="_blank"
                href="https://www.linkedin.com/in/curtisthomas92/"
              >
                curtisthomas92
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} backgroundColor={"#191F26"}>
            <Grid item xs={1} sm={1}>
              {" "}
              <Typography color={"white"}>
                <GitHubIcon />
              </Typography>
            </Grid>
            <Grid item xs={11} sm={11}>
              {" "}
              <Button
                sx={{ color: "#B1B1B2" }}
                target="_blank"
                href="https://github.com/Curtis-Thomas"
              >
                Curtis-Thomas
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Connect;
