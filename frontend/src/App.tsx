import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import SearchPage from "./pages/Search";
import ManagePage from "./pages/Manage";
import Error404Page from "./pages/ErrorPage/404";
import LoginPage from "./pages/LogIn";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/anime/:id" element={<DetailPage />} />
      <Route path="/anime-search" element={<SearchPage />} />
      <Route path="/top-anime" element={<TopAnime />} />
      <Route path="/manage" element={<ManagePage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
