import { AppBar, Box, Button, Container, Grid } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ minHeight: "5vh" }}>
      <Box sx={{ textAlign: "center" }}>
        <AppBar
          sx={{
            height: "5vh",
            backgroundColor: "#060B10",
            borderBottom: "1px solid white",
          }}
          elevation={0}
        >
          <Container
            sx={{ display: "flex", justifyContent: "center", height: "5vh" }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              sx={{ alignItems: "center" }}
            >
              <Grid item xs={12} sm={3} justifyContent="center"></Grid>
              <Grid container item xs={12} sm={6} justifyContent="center">
                <Grid item xs={12} sm={3}>
                  <Button sx={{ color: "#B1B1B2" }}>About</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button sx={{ color: "#B1B1B2" }}>Projects</Button>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Button sx={{ color: "#B1B1B2" }}>Connect</Button>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3} justifyContent="center">
                <Button sx={{ color: "#B1B1B2" }}>Resume</Button>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
