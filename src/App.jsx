import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import ViewDomain from "./components/domain/ViewDomain";
import AddDomain from "./components/domain/AddDomain";
import UpdateDomain from "./components/domain/UpdateDomain";
import Login from "./components/user/Login";
import { ToastContainer } from "react-toastify";
import SignUp from "./components/user/SignUp";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      {/* <BrowserRouter basename="/lms/"> */}
      <ToastContainer position="bottom-center" />
      <Router basename="/lms/">
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />

            {/* Domain */}
            <Route path="/domain" element={<ViewDomain />} />
            <Route path="/add/domain" element={<AddDomain />} />
            <Route path="/domain/:id" element={<UpdateDomain />} />
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
