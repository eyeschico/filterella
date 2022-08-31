import { createContext } from "react";
import "./App.css";
import CustomFilter from "./components/CustomFilter";
import FilterTabs from "./components/FilterTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageField from "./components/ImageField";
import InstaFilter from "./components/InstaFilter";
import { useState } from "react";

export const FilterContext = createContext();

function App() {
  const [tabFilter, setTabFilter] = useState("instaFilter");
  const [filterClass, setFilterClass] = useState("");
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });

  //console.log(customFilter);

  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter,
  };

  return (
    <FilterContext.Provider value={value}>
      <div className="container">
        <Header />
        <div className="main-grid">
          <ImageField />
          <div>
            <FilterTabs />
            {tabFilter === "instaFilter" ? <InstaFilter /> : <CustomFilter />}
          </div>
        </div>
        <Footer />
      </div>
    </FilterContext.Provider>
  );
}

export default App;
