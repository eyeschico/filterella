import { useState } from "react";

import "./App.css";
import FilterTabs from "./components/FilterTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageField from "./components/ImageField";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-grid">
        <ImageField />
        <FilterTabs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
