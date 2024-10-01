import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const AboutMePage = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);

  return (
    <div id="aboutMe" className="">
      <Row className="filterdark2 p-5 justify-content-center align-items-around">
        {LangInUse === "Eng" && (
          <>
            <Col className="col-12 col-lg-9 col-xxl-7 d-flex flex-column d-flex justify-content-center">
              <div className="fs-1 text-center  ls-2">
                From Naples to Valencia
              </div>
              <div className="ls-1">
                I am Andrea Pugliese, a passionate Italian chef who was born and
                raised on the beautiful Island of Procida, in the Gulf of
                Naples. My adventure in Spain began in 2019, and since then I
                have been excited to share my love for cooking. In my service,
                you will find authentic Italian cuisine, enriched by my
                experiences in Spain and Argentina. All of this is served with a
                touch of elegance, in the comfort of your home. I have been
                fortunate to work in various places, from Italy to Ireland and
                Spain. I trained at the Escuela de Hosteleria de Sevilla, one of
                the best in Spain, and I have had the privilege of learning from
                renowned chefs such as Rafa Zafra, Ricardo Acquista, and Gonzalo
                Villalba. I have also been collaborating with Pasta Garófalo
                Spain, creating recipes and videos for the past two years,
                having made over 150 video-recipes. I am thrilled to bring my
                knowledge and passion to all of you in the Valencian Community
                and, why not, throughout Spain. I hope to share the true flavor
                of Italian cuisine with you.
              </div>
            </Col>
          </>
        )}
        {LangInUse === "Esp" && (
          <>
            <Col className="col-12 col-lg-9 col-xxl-7 d-flex flex-column d-flex justify-content-center">
              <div className="fs-1 text-center py-5 ls-2">
                Desde Nápoles a Valencia
              </div>
              <div className="ls-1">
                Soy Andrea Pugliese, un apasionado chef italiano que nació y
                creció en la hermosa Isla de Procida, en el Golfo de Nápoles. Mi
                aventura en España comenzó en 2019, y desde entonces he estado
                emocionado de compartir mi amor por la cocina. En mi servicio,
                encontrarás la auténtica cocina italiana, enriquecida por mi
                experiencia en España y Argentina. Todo esto, servido con un
                toque de elegancia, en la comodidad de tu hogar. He tenido la
                fortuna de trabajar en diversos lugares, desde Italia hasta
                Irlanda y España. Me formé en la Escuela de Hostelería de
                Sevilla, una de las mejores de España, y he tenido el privilegio
                de aprender de chefs de renombre como Rafa Zafra, Ricardo
                Acquista y Gonzalo Villalba. También con Pasta Garófalo España
                generando recetas y videos desde hace dos años, habiendo hecho
                más de 150 video-recetas. Me llena de ilusión llevar mis
                conocimientos y mi pasión a todos ustedes en la Comunidad
                Valenciana y, ¿por qué no?, en toda España. Espero poder
                compartir el verdadero sabor de la cocina italiana contigo.
              </div>
            </Col>
          </>
        )}
        {LangInUse === "Ita" && (
          <>
            <Col className="col-12 col-lg-9 col-xxl-7 d-flex flex-column d-flex justify-content-center">
              <div className="fs-1 text-center py-5 ls-2">
                Da Napoli a Valencia
              </div>
              <div className="ls-1">
                Sono Andrea Pugliese, un appassionato chef italiano nato e
                cresciuto nella bellissima Isola di Procida, nel Golfo di
                Napoli. La mia avventura in Spagna è iniziata nel 2019 e da
                allora sono entusiasta di condividere la mía passione per la
                cucina. Nel mio servizio troverai la vera cucina italiana,
                arricchita dalla mia esperienza in Spagna e Argentina. Tutto
                questo è servito con un tocco di eleganza, nel comfort della tua
                casa. Ho avuto la fortuna di lavorare in diversi luoghi, dall
                {"'"}
                Italia all{"'"}Irlanda e alla Spagna. Mi sono formato presso la
                Escuela de Hosteleria de Sevilla, una delle migliori in Spagna,
                e ho avuto il privilegio di imparare da chef rinomati come Rafa
                Zafra, Ricardo Acquista e Gonzalo Villalba. Collaboro anche con
                Pasta Garófalo Spagna, creando ricette e video da due anni,
                avendo realizzato oltre 150 video-ricette. Sono entusiasta di
                portare le mie conoscenze e la mia passione a tutti voi nella
                Comunità Valenciana e, perché no, in tutta la Spagna. Spero di
                poter condividere il vero sapore della cucina italiana con te.
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};
export default AboutMePage;
