import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/1-Navbar/Header";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Z-Footer/Footer";
import AboutMePage from "./Components/AboutMePage/AboutMePage";
import CookingClassPage from "./Components/CookingClassPage/CookingClassPage";
import { useEffect, useState } from "react";
import Loading from "./Components/LoadingPage/Loading";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
  const [loaded, setIsLoaded] = useState(false);
  const changedLoaded = () => {
    setIsLoaded(true);
  };
  const changeStatus = () => {
    setTimeout(changedLoaded, 5000);
  };
  useEffect(() => {
    changeStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log("the page is loaded?:" + loaded);
  }, [loaded]);
  return (
    <>
      {loaded === false ? (
        <Loading />
      ) : (
        <>
          <Header />

          <div className="mtNeces">
            <Routes>
              <Route path="/aboutMe" element={<AboutMePage />} />
              <Route path="/cookingClass" element={<CookingClassPage />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
