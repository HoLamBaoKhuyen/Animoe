import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
