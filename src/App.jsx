import React from "react";
import Logo from "../public/images/logo-header.svg";
import { Route, Routes } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import HomePage from "./pages/client/home";
import BackToTop from "./components/backtop";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      <BackToTop />
    </>
  );
}
