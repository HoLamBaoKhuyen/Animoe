import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/detail";

function App() {
  return (
    <Routes>
      <Route path="/detail" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
