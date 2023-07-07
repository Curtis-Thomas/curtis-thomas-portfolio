import { Box } from "@mui/material";
import leftBarImg from "./leftBarImg.webp";

const LeftBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={leftBarImg}
        alt={"#"}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default LeftBar;
