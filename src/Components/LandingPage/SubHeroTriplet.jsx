import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const SubHeroTriplet = () => {
  const LangInUse = useSelector((state) => state.lang);
  useEffect(() => {
    console.log(LangInUse);
  }, [LangInUse]);
  return (
    <Row className="text-center text-Dark p-0 m-0">
      <div className="p-0 m-0">
        <Row className=" m-0 p-0 bluebordertop">
          <Col className="p-0 m-0">
            <div className="imgbg1"></div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center p-0 m-0 ">
            <div className="p-5">
              {/* Group Courses: My group classes are open to the public, which
            means anyone can sign up. Join the experience and meet new
            people while enjoying a unique and fun culinary adventure! You
            will learn to cook traditional Italian recipes, from fresh
            pasta to delicious desserts, all while sharing laughs and good
            times with other food lovers. */}
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
            <div>
              <div className="rounded-3 px-3 py-1 mt-4 btnLanding">
                {LangInUse === "Eng" && <>Hello</>}
                {LangInUse === "Esp" && <>Hola</>}
                {LangInUse === "Ita" && <>Ciao</>}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="m-0 p-0 bluebordertop">
          <Col className="d-flex flex-column justify-content-center align-items-center p-0 m-0 ">
            <div className="p-5">
              {/* Private Classes: If you prefer more personalized attention, my
            private classes are perfect for you. You can choose the menu
            and the pace of the class, tailoring it to your needs and
            preferences. */}

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
            <div>
              <div className="rounded-3 px-3 py-1 mt-4 btnLanding">
                {" "}
                {LangInUse === "Eng" && <>Hello</>}
                {LangInUse === "Esp" && <>Hola</>}
                {LangInUse === "Ita" && <>Ciao</>}
              </div>
            </div>
          </Col>
          <Col className="p-0 m-0 ">
            <div className="imgbg2"></div>
          </Col>
        </Row>
        <Row className=" m-0 p-0 bluebordertop blueborderbottom">
          <Col className="p-0 m-0 ">
            <div className="imgbg3"></div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center p-0 m-0 ">
            <>
              <div className="p-5">
                {/* Team Building for Companies: Strengthen your team’s bonds
            through cooking. My team-building workshops encourage
            collaboration and creativity while learning to prepare Italian
            dishes together. A delicious way to build relationships! */}

                {LangInUse === "Eng" && (
                  <>
                    Team-building workshops use cooking to foster collaboration
                    and creativity, helping teams bond while preparing Italian
                    dishes.
                  </>
                )}
                {LangInUse === "Esp" && (
                  <>
                    Los talleres de team building utilizan la cocina para
                    fomentar la colaboración y la creatividad, ayudando a los
                    equipos a unirse mientras preparan platos italianos.
                  </>
                )}
                {LangInUse === "Ita" && (
                  <>
                    I workshop di team building utilizzano la cucina per
                    promuovere la collaborazione e la creatività, aiutando i
                    team a rafforzare i legami mentre preparano piatti italiani.
                  </>
                )}
              </div>
              <div>
                <div className="rounded-3 px-3 py-1 mt-4 btnLanding">
                  {" "}
                  {LangInUse === "Eng" && <>Hello</>}
                  {LangInUse === "Esp" && <>Hola</>}
                  {LangInUse === "Ita" && <>Ciao</>}
                </div>
              </div>
            </>
          </Col>
        </Row>
      </div>
    </Row>
  );
};

export default SubHeroTriplet;
