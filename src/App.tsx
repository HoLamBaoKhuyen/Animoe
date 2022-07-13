import { Route, Routes } from 'react-router-dom'
import './App.css'
import DetailPage from './pages/detail'
import TopAnime from './pages/TopAnime'

function App() {
	return (
		<Routes>
			<Route path='/detail' element={<DetailPage />} />
			<Route path='/top-anime' element={<TopAnime />} />
		</Routes>
	)
}

export default App
