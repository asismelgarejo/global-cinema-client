// App.js
import {
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./SignInPage";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";

const theme = createTheme();

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignInPage/>} />
          <Route path="/main" element={<MainPage/>} />
          {/* <Route path="/signup" element={SignUp} /> */}
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>

     
    </ThemeProvider>
  );
};

export default App;
