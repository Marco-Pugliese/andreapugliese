import { useSelector } from "react-redux";

const HeroSection = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);
  return (
    <div id="generalHero" className="p-0 position-relative filterSwap">
      <div className="h-100 filterblue">
        <div className="opacityChange position-absolute top-50 p-0 w-100 h-100 translate-middle-y">
          <div className="position-absolute top-50 p-0 w-100 bg-effect1 translate-middle-y d-flex justify-content-center align-items-center">
            <div className="phraseContainer">
              <span className="puff-in-center1 shadow-Light">
                ANDREA PUGLIESE - CHEF
              </span>
              <span className="puff-in-center2 text-Italy">
                {LangInUse === "Ita" && <>TRADIZIONE ITALIANA</>}
                {LangInUse === "Esp" && <>TRADICIÓN ITALIANA</>}
                {LangInUse === "Eng" && <>ITALIAN TRADITION</>}
              </span>
              <span className="puff-in-center3 text-Argentina">
                {LangInUse === "Ita" && <>ANIMA ARGENTINA</>}
                {LangInUse === "Esp" && <>ALMA ARGENTINA</>}
                {LangInUse === "Eng" && <>ARGENTINE SOUL</>}
              </span>
              <span className="puff-in-center4 text-Spain">
                {LangInUse === "Ita" && <>PASSIONE SPAGNOLA</>}
                {LangInUse === "Esp" && <>PASIÓN ESPAÑOLA</>}
                {LangInUse === "Eng" && <>SPANISH PASSION</>}
              </span>

              <span className="puff-in-center5 ">
                <div className="d-flex flex-column justify-content-center align-items-around shadow-Light">
                  <>
                    {LangInUse === "Ita" && (
                      <>
                        <span className="mb-1 ">TRE RADICI.</span>

                        <span className="mt-1">UN SOLO CUORE.</span>
                      </>
                    )}
                    {LangInUse === "Esp" && (
                      <>
                        <span className="mb-1 ">TRES RAÍCES.</span>

                        <span className="mt-1">UN SOLO CORAZÓN.</span>
                      </>
                    )}
                    {LangInUse === "Eng" && (
                      <>
                        <span className="mb-1 ">THREE ROOTS.</span>

                        <span className="mt-1">ONE HEART</span>
                      </>
                    )}
                  </>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
