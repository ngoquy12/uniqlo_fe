import React, { useEffect } from "react";
import Logo from "../public/images/logo-header.svg";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import HomePage from "./pages/client/home";
import BackToTop from "./components/backtop";
import Login from "./pages/auth/login/index";
import Register from "./pages/auth/register";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <BackToTop />
    </>
  );
}
