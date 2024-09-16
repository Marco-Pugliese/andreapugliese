import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/1-Navbar/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Z-Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
