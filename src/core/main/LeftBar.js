import { Typography, Grid } from "@mui/material";

const LeftBar = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh", marginLeft: "-9vh", marginTop: "10vh" }}
      position={"fixed"}
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
  );
};

export default LeftBar;
