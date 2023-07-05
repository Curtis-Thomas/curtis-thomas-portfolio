import { AppBar, Box, Button, Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ minHeight: "5vh" }}>
      <AppBar sx={{ height: "5vh", backgroundColor: "#272838" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Typography>Curtis Thomas</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button sx={{ color: "#B1B1B2" }}>About</Button>
            <Button sx={{ color: "#B1B1B2" }}>Projects</Button>
            <Button sx={{ color: "#B1B1B2" }}>Contact</Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button sx={{ color: "#B1B1B2" }}>Resume</Button>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Header;
