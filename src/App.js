import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Body from "./components/infinite-scroll/Body";
import HomePage from "./components/HomePage";
import SearchBar from "./components/autocompleteSearchBar/SearchBar";

function App() {
  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/machine-coding" element={<Body />} />
          <Route path="/autocompletesearchbar" element={<SearchBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
