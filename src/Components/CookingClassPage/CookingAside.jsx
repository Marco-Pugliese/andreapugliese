import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CookingAside = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);
  return (
    <div id="cookingAside" className="w-100">
      <div className="py-5 d-flex justify-content-center">
        <Row className="m-0">
          {LangInUse === "Ita" && (
            <>
              <Col className="pb-5 fs-5 text-center col-12">
                Perché scegliere me?
              </Col>
              <Col className="px-3 col-12">
                Con la mia esperienza come chef italiano e la mia passione per
                la cucina, ti guiderò in ogni fase del processo, assicurandomi
                che tu possa divertirti e imparare allo stesso tempo.
                <br />
                <br /> Inoltre, tutti i corsi si svolgono in un ambiente caldo e
                accogliente, dove il buon cibo e la buona compagnia sono sempre
                benvenuti.
                <br />
                <br />
                Non aspettare piu! Unisciti a me e scopri il vero sapore dell
                {"'"}Italia. Per ulteriori informazioni e prenotazioni, non
                esitare a contattarmi. <br />
                <br /> Ti aspetto a braccia aperte e con una tavola pronta per
                condividere!
              </Col>
            </>
          )}
        </Row>
        <Row className="m-0">
          {LangInUse === "Eng" && (
            <>
              <Col className="pb-5 fs-5 text-center col-12">Why choose me?</Col>
              <Col className="px-3 col-12">
                With my experience as an Italian chef and my passion for
                cooking, I will guide you through every step of the process,
                ensuring you enjoy and learn at the same time. <br />
                <br />
                Additionally, all courses take place in a warm and welcoming
                environment, where good food and good company are always
                appreciated. <br />
                <br /> Don’t wait any longer! Join me and discover the true
                taste of Italy. For more information and reservations, feel free
                to contact me. <br />
                <br /> I look forward to welcoming you with open arms and a
                table ready to share!
              </Col>
            </>
          )}
        </Row>
        <Row className="m-0">
          {LangInUse === "Esp" && (
            <>
              <Col className="pb-5 fs-5 text-center col-12">
                {" "}
                ¿Por qué elegirme?
              </Col>
              <Col className="px-3 col-12">
                Con mi experiencia como chef italiano y mi pasión por la cocina,
                te guiaré en cada paso del proceso, asegurando que disfrutes y
                aprendas al mismo tiempo.
                <br />
                <br />
                Además, todos los cursos se llevan a cabo en un ambiente cálido
                y acogedor, donde la buena comida y la buena compañía son
                siempre bienvenidas. <br />
                <br /> ¡No esperes más! Únete a mí y descubre el verdadero sabor
                de Italia. Para más información y reservas, no dudes en
                contactarme. <br />
                <br />
                ¡Te espero con los brazos abiertos y una mesa lista para
                compartir!
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
};
export default CookingAside;
