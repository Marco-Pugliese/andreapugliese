import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SubHeroTripletSM = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);

  return (
    <div className="p-0 m-0">
      <Row className="justify-content-center">
        <Col className="imgbg1sm m-0 p-0 col-10 mt-2">
          <div className="filterdark px-5 d-flex align-items-center justify-content-center flex-column">
            <div className="darkHover px-3 text-Light">
              {LangInUse === "Eng" && (
                <>
                  Group cooking classes where participants learn to make Italian
                  dishes, enjoy socializing, and share fun culinary experiences.
                </>
              )}
              {LangInUse === "Esp" && (
                <>
                  Clases de cocina en grupo donde los participantes aprenden a
                  preparar platos italianos, socializan y disfrutan experiencias
                  culinarias divertidas.
                </>
              )}
              {LangInUse === "Ita" && (
                <>
                  Corsi di cucina di gruppo dove i partecipanti imparano a
                  cucinare piatti italiani, socializzano e condividono
                  divertenti esperienze culinarie.
                </>
              )}
            </div>
          </div>
        </Col>
        <Col className="imgbg2sm m-0 p-0 col-10 mt-2">
          <div className="filterdark px-5 d-flex align-items-center justify-content-center flex-column">
            <div className="darkHover px-3 text-Light">
              {LangInUse === "Eng" && (
                <>
                  Private cooking classes offer personalized attention, allowing
                  you to choose the menu and pace based on your preferences.
                </>
              )}
              {LangInUse === "Esp" && (
                <>
                  Las clases de cocina privadas con atención personalizada,
                  permitiéndote elegir el menú y el ritmo según tus
                  preferencias.
                </>
              )}
              {LangInUse === "Ita" && (
                <>
                  Le lezioni di cucina private con un{"'"}attenzione
                  personalizzata, permettendoti di scegliere il menu e il ritmo
                  in base alle tue preferenze.
                </>
              )}
            </div>
          </div>
        </Col>
        <Col className="imgbg3sm m-0 p-0 col-10 mt-2">
          <div className="filterdark px-5 d-flex align-items-center justify-content-center flex-column">
            <div className="darkHover px-3 text-Light">
              {LangInUse === "Eng" && (
                <>
                  Team-building workshops use cooking to foster collaboration
                  and creativity, helping teams bond while preparing Italian
                  dishes.
                </>
              )}
              {LangInUse === "Esp" && (
                <>
                  Los talleres de team building utilizan la cocina para fomentar
                  la colaboración y la creatividad, ayudando a los equipos a
                  unirse mientras preparan platos italianos.
                </>
              )}
              {LangInUse === "Ita" && (
                <>
                  I workshop di team building utilizzano la cucina per
                  promuovere la collaborazione e la creatività, aiutando i team
                  a rafforzare i legami mentre preparano piatti italiani.
                </>
              )}
            </div>
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default SubHeroTripletSM;
