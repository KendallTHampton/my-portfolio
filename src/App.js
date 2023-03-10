import {CssBaseline, ThemeProvider} from "@mui/material";
import {useMemo} from "react";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "./theme.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Resume from './pages/resume/Resume.jsx';
import AllProjects from './pages/allProjects/AllProjects.jsx';

function App() {
  const mode = useSelector(state => state.theme.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/contact" element={<Navigate to="/contact" />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div >
  );
}

export default App;