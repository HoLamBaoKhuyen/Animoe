import { Route, Routes } from 'react-router-dom'
import './App.css'
import DetailPage from './pages/Detail'
import HomePage from './pages/Home'
import TopAnime from './pages/TopAnime'
import TopManga from './pages/TopManga'
import SearchPage from './pages/Search';
import RecommendationsPage from "./pages/Recommendation";
import ManagePage from './pages/Manage'
import DetailMangaPage from "pages/DetailManga";


function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/anime/:id' element={<DetailPage />} />
			<Route path='/anime-search' element={<SearchPage type="anime"/>} />
			<Route path='/manga-search' element={<SearchPage type="manga"/>} />
			<Route path="/anime/:id" element={<DetailPage />} />
			<Route path="/manga/:id" element={<DetailMangaPage />} />
			<Route path='/top-anime' element={<TopAnime />} />
			<Route path='/top-manga' element={<TopManga />} />
			<Route path='/manage' element={<ManagePage />} />
			<Route path="/anime-recommendations" element={<RecommendationsPage type="anime"/>} />
			<Route path="/manga-recommendations" element={<RecommendationsPage type="manga"/>} />
		</Routes >
	)
}

export default App
