import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import SearchPage from './pages/Search';
import ManagePage from "./pages/Manage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/anime/:id" element={<DetailPage />} />
			<Route path="/anime-search" element={<SearchPage />} />
			<Route path='/top-anime' element={<TopAnime />} />
			<Route path='/manage' element={<ManagePage />} />
		</Routes>
	);
}

export default App;
