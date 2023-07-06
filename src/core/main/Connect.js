import { Button, Card, Divider, Grid, Typography } from "@mui/material";
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
          marginRight: 5,
          padding: 5,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} marginBottom={3}>
            <Typography sx={{ color: "white", fontSize: "2rem" }}>
              Connect
            </Typography>
            <Divider color="#191F26" />
          </Grid>

          <Grid container item xs={12} sm={12} backgroundColor={"#191F26"}>
            <Grid item xs={12} sm={1}>
              <Typography color={"white"}>
                <EmailIcon />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button sx={{ color: "#B1B1B2" }}>
                CurtisThomas08@hotmail.co.uk
              </Button>
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={12}>
            <Grid item xs={12} sm={1}>
              <Typography color={"white"}>
                <LinkedInIcon />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={11}>
              <Button sx={{ color: "#B1B1B2" }}>curtisthomas92</Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} backgroundColor={"#191F26"}>
            <Grid item xs={12} sm={1}>
              {" "}
              <Typography color={"white"}>
                <GitHubIcon />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={11}>
              {" "}
              <Button sx={{ color: "#B1B1B2" }}>Curtis-Thomas</Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Connect;
