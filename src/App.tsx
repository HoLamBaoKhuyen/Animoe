import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import {AnimeSearchPage,MangaSearchPage} from './pages/Search';
import ManagePage from "./pages/Manage";
import RecommendationsPage from "./pages/Recommendation";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/anime/:id" element={<DetailPage />} />
			<Route path="/anime-search" element={<AnimeSearchPage />} />
			<Route path="/manga-search" element={<MangaSearchPage />} />
			<Route path='/top-anime' element={<TopAnime />} />
			<Route path='/manage' element={<ManagePage />} />
			<Route path="/recommendations" element={<RecommendationsPage />} />
		</Routes>
	);
}

export default App;
