import { useSelector } from "react-redux";
import SliderContainer from "./SliderContainer";

const AsideSection = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);

  return (
    <div id="Aside">
      <div className="w-100 text-center py-5 fs-3 ">
        <section>
          <div className="py-4">
            <span className="text-Light">
              {LangInUse === "Eng" && (
                <>Want to know something more? You{"'"}re just a click away!</>
              )}

              {LangInUse === "Esp" && (
                <>
                  ¿Quieres saber algo más? ¡Estás a solo un click de distancia!
                </>
              )}
              {LangInUse === "Ita" && (
                <>Vuoi saperne di più? Sei solo ad un click di distanza!</>
              )}
            </span>
          </div>
          <div className="py-4 fs-small">
            <span
              id="requestButton"
              className="bg-light text-Dark px-5 py-3 rounded-3 fs-small"
            >
              {LangInUse === "Eng" && <>Let{"'"}s get in touch</>}
              {LangInUse === "Esp" && <>Pongámonos en contacto!</>}
              {LangInUse === "Ita" && <>Mettiamoci in contatto!</>}
            </span>
          </div>
        </section>
        <SliderContainer />
      </div>
    </div>
  );
};
export default AsideSection;
