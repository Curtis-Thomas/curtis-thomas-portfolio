import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const Header = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: "#060B10",
        borderBottom: "1px solid white",
      }}
    >
      <ResponsiveAppBar />
    </Box>
  );
};

export default Header;
