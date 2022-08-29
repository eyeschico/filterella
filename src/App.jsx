import "./App.css";
import CustomFilter from "./components/CustomFilter";
import FilterTabs from "./components/FilterTabs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageField from "./components/ImageField";
import InstaFilter from "./components/InstaFilter";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-grid">
        <ImageField />
        <div>
          <FilterTabs />
          <InstaFilter />
          <CustomFilter />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
