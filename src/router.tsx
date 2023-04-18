import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/index";
import { Projects } from "./pages/Projects/";

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/project" element={<Projects />} />
    </Routes>
  );
}
