import { Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< Updated upstream

function App() {
	return (
		<div className='App'>
			app
			<Routes>
				<Route />
			</Routes>
		</div>
=======
import DetailPage from './pages/detail'
import SearchPage from './pages/search'

function App() {
	return (
		<Routes>
			<Route path='/detail' element={<DetailPage />} />
			<Route path='/search' element={<SearchPage />} />
		</Routes>
>>>>>>> Stashed changes
	)
}

export default App
