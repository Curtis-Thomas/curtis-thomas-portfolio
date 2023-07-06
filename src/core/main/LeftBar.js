import { Typography, Grid, Box } from "@mui/material";

const LeftBar = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={8}>
          <Box sx={{ height: "100%", width: "100%" }}></Box>
        </Grid>
        <Grid container item xs={12} sm={4}>
          <Box sx={{ height: "100%", width: "100%" }}>
            {" "}
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ height: "100vh" }}
              paddingTop={"60vh"}
            >
              <Grid item>
                <Typography
                  color="white"
                  variant="h1"
                  style={{
                    fontSize: "7rem",
                    transform: "rotate(-90deg)",
                    transformOrigin: "left",
                    whiteSpace: "nowrap",
                  }}
                >
                  Curtis Thomas
                </Typography>
              </Grid>
            </Grid>
          </Box>{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftBar;
