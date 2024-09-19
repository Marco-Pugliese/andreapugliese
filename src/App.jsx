import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/1-Navbar/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Z-Footer/Footer";
import AboutMePage from "./Components/AboutMePage/AboutMePage";

function App() {
  return (
    <>
      <Header />
      <div className="mtNeces">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutMe" element={<AboutMePage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
