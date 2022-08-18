import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/Detail";
import DetailMangaPage from "./pages/DetailManga";
import HomePage from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import TopManga from "./pages/TopManga";
import SearchPage from "./pages/Search";
import ManagePage from "./pages/Manage";
import RecommendationsPage from "./pages/Recommendation";
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
      <Route path="/manga/:id" element={<DetailMangaPage />} />
      <Route path="/anime-search" element={<SearchPage type="anime" />} />
      <Route path="/manga-search" element={<SearchPage type="manga" />} />
      <Route path="/top-anime" element={<TopAnime />} />
      <Route path="/top-manga" element={<TopManga />} />
      <Route path="/anime-list" element={<ManagePage />} />
      <Route
        path="/anime-recommendations"
        element={<RecommendationsPage type="anime" />}
      />
      <Route
        path="/manga-recommendations"
        element={<RecommendationsPage type="manga" />}
      />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}

export default App;
