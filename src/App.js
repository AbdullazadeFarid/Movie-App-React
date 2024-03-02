import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./shared/header/header";

import logo from "./assets/image/logo.png";
import Home from "./page/home/home";
import Popularity from "./page/popularity/popularity";
import Movie_Info from "./page/movie_info/movieInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Header logo={logo} title="Movie Site" subtitle="The best movie site" />
        <div className="all_products_app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/populary" element={<Popularity />} />
            <Route path="/movie/:id" element={<Movie_Info/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
