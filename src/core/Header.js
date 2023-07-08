import { Box } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const Header = () => {
  return (
    <Box sx={{ minHeight: "5vh" }}>
      <ResponsiveAppBar />
    </Box>
  );
};

export default Header;
