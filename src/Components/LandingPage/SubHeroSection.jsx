import { Container } from "react-bootstrap";
import SubHeroTriplet from "./SubHeroTriplet";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SubHeroSection = () => {
  const LangInUse = useSelector((state) => state.lang);
  useEffect(() => {
    console.log(LangInUse);
  }, [LangInUse]);
  return (
    <Container id="subHero" className="text-light mb-5">
      <div className="h-100 w-100">
        <div className="text-Dark w-100 text-center  mb-3">
          <span className="fs-2 fw-bold bluebordertop1 px-5 ">
            {" "}
            {LangInUse === "Eng" && <>HAVE A LOOK!</>}
            {LangInUse === "Esp" && <>ECHA UN VISTAZO!</>}
            {LangInUse === "Ita" && <>DAI UN{"'"}OCCHIATA!</>}
          </span>
        </div>
        <SubHeroTriplet />
      </div>
    </Container>
  );
};
export default SubHeroSection;
