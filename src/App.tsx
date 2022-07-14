import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import TopAnime from "./pages/TopAnime";
import SearchPage from './pages/search';

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/detail" element={<DetailPage />} />
			<Route path='/search' element={<SearchPage />} />
			<Route path='/top-anime' element={<TopAnime />} />
		</Routes>
	);
}

export default App;