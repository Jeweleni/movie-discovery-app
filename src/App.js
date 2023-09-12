import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import HomePage from "./pages/HomePage";
import FeaturedMovie from "./pages/FeaturedMovie";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <HomePage/>
        <FeaturedMovie/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
