import { Carousel, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CookingAside from "./CookingAside";

const CookingClassPage = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);
  return (
    <>
      <div id="cookingClass">
        <div className="filterdark2 text-Light h-100 d-flex align-items-around justify-content-center px-5">
          {LangInUse === "Esp" && (
            <Row className="d-flex align-items-center justify-content-center">
              <Col className="col-12 col-xl-10 col-xxl-8 ls-2">
                ¡Descubre la Cocina Italiana Conmigo! ¿Te gustaría aprender a
                preparar auténticos platos italianos en un ambiente divertido y
                acogedor? ¡Estás en el lugar correcto! Ofrezco cursos de cocina
                italiana diseñados para grupos, sesiones privadas y actividades
                de team building para empresas.
              </Col>

              <Col className="col-12 small">
                <Row>
                  <Col className="col-12 text-center fs-5 mb-4 ">
                    <span className="border-bottom px-5">¿Qué ofrezco?</span>
                  </Col>
                </Row>
                <Row className="d-none d-md-flex">
                  <Col className="col-1 d-none d-xl-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4 py-2">
                      ••Cursos Grupales••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        Mis clases grupales son abiertas al público, lo que
                        significa que cualquier persona puede inscribirse.
                      </div>
                      <div className="small">
                        Únete a la experiencia y conoce gente nueva mientras
                        disfrutas de una experiencia culinaria única y
                        divertida! Aprenderás a cocinar recetas tradicionales
                        italianas, desde pastas frescas hasta deliciosos
                        postres, todo mientras compartes risas y buenos momentos
                        con otros amantes de la cocina.
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-md-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Clases Privadas••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        Si prefieres una atención más personalizada, mis clases
                        privadas son perfectas para ti.
                      </div>
                      <div className="small">
                        Podrás elegir el menú y el ritmo de la clase,
                        adaptándola a tus necesidades y preferencias.
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-md-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Team Building para Empresas••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        Fortalece los lazos de tu equipo a través de la cocina.
                      </div>
                      <div className="small">
                        Mis talleres de team building fomentan la colaboración y
                        la creatividad, mientras aprenden a preparar platos
                        italianos juntos. ¡Una forma deliciosa de construir
                        relaciones!
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-xl-block"></Col>
                </Row>
                <Row className="d-flex d-md-none px-5">
                  <Carousel controls={false} indicators={false} fade>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Clases Privadas••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Si prefieres una atención más personalizada, mis
                          clases privadas son perfectas para ti.
                        </div>
                        <div className="small">
                          Podrás elegir el menú y el ritmo de la clase,
                          adaptándola a tus necesidades y preferencias.
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Team Building para Empresas••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Fortalece los lazos de tu equipo a través de la
                          cocina.
                        </div>
                        <div className="small">
                          Mis talleres de team building fomentan la colaboración
                          y la creatividad, mientras aprenden a preparar platos
                          italianos juntos. ¡Una forma deliciosa de construir
                          relaciones!
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-2 py-4">
                        ••Cursos Grupales••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Mis clases grupales son abiertas al público, lo que
                          significa que cualquier persona puede inscribirse.
                        </div>
                        <div className="small">
                          Únete a la experiencia y conoce gente nueva mientras
                          disfrutas de una experiencia culinaria única y
                          divertida! Aprenderás a cocinar recetas tradicionales
                          italianas, desde pastas frescas hasta deliciosos
                          postres, todo mientras compartes risas y buenos
                          momentos con otros amantes de la cocina.
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </Row>
              </Col>
            </Row>
          )}

          {LangInUse === "Eng" && (
            <Row className="d-flex align-items-center justify-content-center">
              <Col className="col-12 col-xl-10 col-xxl-8 ls-2">
                Discover Italian Cuisine with Me! Would you like to learn how to
                prepare authentic Italian dishes in a fun and welcoming
                environment? You’re in the right place! I offer Italian cooking
                courses designed for groups, private sessions, and team-building
                activities for companies.
              </Col>

              <Col className="col-12 small mt-5">
                <Row>
                  <Col className="col-12 d-flex justify-content-center text-center fs-5 mt-5 mb-3">
                    <span className="border-bottom d-block w-50">
                      What do I offer?
                    </span>
                  </Col>
                </Row>
                <Row className="d-none d-md-flex">
                  <Col className="col-1 d-none d-xl-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Group Courses••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        My group classes are open to the public, which means
                        anyone can sign up.
                      </div>
                      <div className="small">
                        Join the experience and meet new people while enjoying a
                        unique and fun culinary adventure! You will learn to
                        cook traditional Italian recipes, from fresh pasta to
                        delicious desserts, all while sharing laughs and good
                        times with other food lovers.
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-md-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Private Classes••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        If you prefer more personalized attention, my private
                        classes are perfect for you.
                      </div>
                      <div className="small">
                        You can choose the menu and the pace of the class,
                        tailoring it to your needs and preferences.
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-md-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Team Building for Companies••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        Strengthen your team’s bonds through cooking
                      </div>
                      <div className="small">
                        My team-building workshops encourage collaboration and
                        creativity while learning to prepare Italian dishes
                        together. A delicious way to build relationships!
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-xl-block"></Col>
                </Row>
                <Row className="d-flex d-md-none px-5">
                  <Carousel controls={false} indicators={false} fade>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Private Classes••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          If you prefer more personalized attention, my private
                          classes are perfect for you.
                        </div>
                        <div className="small">
                          You can choose the menu and the pace of the class,
                          tailoring it to your needs and preferences.
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Team Building for Companies••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Strengthen your team’s bonds through cooking
                        </div>
                        <div className="small">
                          My team-building workshops encourage collaboration and
                          creativity while learning to prepare Italian dishes
                          together. A delicious way to build relationships!
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Group Courses••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          group classes are open to the public, which means
                          anyone can sign up.
                        </div>
                        <div className="small">
                          Join the experience and meet new people while enjoying
                          a unique and fun culinary adventure! You will learn to
                          cook traditional Italian recipes, from fresh pasta to
                          delicious desserts, all while sharing laughs and good
                          times with other food lovers.
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </Row>
              </Col>
            </Row>
          )}

          {LangInUse === "Ita" && (
            <Row className="d-flex align-items-center justify-content-center">
              <Col className="col-12 col-xl-10 col-xxl-8 ls-2">
                Scopri la Cucina Italiana con Me! Ti piacerebbe imparare a
                preparare autentici piatti italiani in un ambiente divertente e
                accogliente? Sei nel posto giusto! Offro corsi di cucina
                italiana progettati per gruppi, sessioni private e attività di
                team building per aziende.
              </Col>

              <Col className="col-12 small">
                <Row>
                  <Col className="col-12 text-center fs-5 mb-4 ">
                    <span className="border-bottom px-5">Cosa offro?</span>
                  </Col>
                </Row>
                <Row className="d-none d-md-flex">
                  <Col className="col-1 d-none d-xl-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Corsi di Gruppo••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        Le mie lezioni di gruppo sono aperte al pubblico, il che
                        significa che chiunque può iscriversi.
                      </div>
                      <div className="small">
                        Unisciti all
                        {"'"}esperienza e conosci nuove persone mentre ti godi
                        un
                        {"'"}
                        avventura culinaria unica e divertente! Imparerai a
                        cucinare ricette tradizionali italiane, dalla pasta
                        fresca ai deliziosi dessert, tutto mentre condividi
                        risate e bei momenti con altri amanti della cucina.
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-md-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Lezioni Private••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        Se preferisci un{"'"}attenzione più personalizzata, le
                        mie lezioni private sono perfette per te.
                      </div>
                      <div className="small">
                        Potrai scegliere il menu e il ritmo della lezione,
                        adattandola alle tue esigenze e preferenze.
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-md-block"></Col>
                  <Col className="border rounded-4 p-4 brightonhover">
                    <div className="text-center ls-2 mb-4">
                      ••Team Building per Aziende••{" "}
                    </div>
                    <div className="text-center small">
                      <div className="small mb-3">
                        Rafforza i legami del tuo team attraverso la cucina.
                      </div>
                      <div className="small">
                        I miei laboratori di team building incoraggiano la
                        collaborazione e la creatività mentre imparano a
                        preparare piatti italiani insieme. Un modo delizioso per
                        costruire relazioni!
                      </div>
                    </div>
                  </Col>
                  <Col className="col-1 d-none d-xl-block"></Col>
                </Row>
                <Row className="d-block d-md-none">
                  <Carousel controls={false} indicators={false} fade>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Lezioni Private••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Se preferisci un{"'"}attenzione più personalizzata, le
                          mie lezioni private sono perfette per te.
                        </div>
                        <div className="small">
                          Potrai scegliere il menu e il ritmo della lezione,
                          adattandola alle tue esigenze e preferenze.
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Team Building per Aziende••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Rafforza i legami del tuo team attraverso la cucina.
                        </div>
                        <div className="small">
                          I miei laboratori di team building incoraggiano la
                          collaborazione e la creatività mentre imparano a
                          preparare piatti italiani insieme. Un modo delizioso
                          per costruire relazioni!
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="text-center ls-2 mb-4 py-4">
                        ••Corsi di Gruppo••{" "}
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Le mie lezioni di gruppo sono aperte al pubblico, il
                          che significa che chiunque può iscriversi.
                        </div>
                        <div className="small">
                          Unisciti all
                          {"'"}esperienza e conosci nuove persone mentre ti godi
                          un
                          {"'"}
                          avventura culinaria unica e divertente! Imparerai a
                          cucinare ricette tradizionali italiane, dalla pasta
                          fresca ai deliziosi dessert, tutto mentre condividi
                          risate e bei momenti con altri amanti della cucina.
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </Row>
              </Col>
            </Row>
          )}
        </div>
      </div>

      <CookingAside />
    </>
  );
};
export default CookingClassPage;
