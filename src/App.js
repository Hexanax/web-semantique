import Browser from "./components/Browser";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "./themes/lightTheme";
import * as React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Books from "./components/Books";
import Editor from "./components/Editor";
import Results from "./components/Results";


export default function App() {
  const theme = createTheme(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
            <div>
                <Routes>
                    <React.Fragment>
                        <Route path="/" element={<Browser/>}>
                        </Route>
                        <Route path="/bookSearch/:searchInput" element={<Results/>}>
                        </Route>
                        <Route path="/bookInfo/:bookURI" element={<Books/>}>
                        </Route>
                        <Route path="/editorInfo/:editorURI" element={<Editor/>}>
                        </Route>
                    </React.Fragment>
                </Routes>
            </div>
        </Router>
    </ThemeProvider>
  );
}
