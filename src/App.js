import { Box, CssBaseline } from "@mui/material";
import Main from "./core/Main";
import Header from "./core/Header";
import Footer from "./core/Footer";

function App() {
  return (
    <Box sx={{ backgroundColor: "#060B10" }}>
      <CssBaseline />

      <Header />

      <Main />
      <Footer />
    </Box>
  );
}

export default App;
