import { Carousel, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CookingAside from "./CookingAside";
import PrivateChefPage from "./PrivateChefPage";
import { useEffect, useState } from "react";
import { EnvelopeAtFill, TelephoneFill } from "react-bootstrap-icons";

const CookingClassPage = () => {
  const [isDiv1Hovered, setIsDiv1Hovered] = useState(false);
  const [isDiv2Hovered, setIsDiv2Hovered] = useState(false);
  const LangInUse = useSelector((state) => state.Lang.lang);
  const [body, setBody] = useState("Hello! Hola! Ciao!");
  const [showButtonForGroupClass, setShowButtonForGroupClass] = useState(false);
  const [showButtonForPrivateClass, setShowButtonForPrivateClass] =
    useState(false);
  const [showButtonForTeamClass, setShowButtonForTeamClass] = useState(false);
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  // // // // // // // // // // // // // // // // // // //WHATSAPP // // // // // // // // // // // // // // // // // // // //
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  const phoneNumber = "34600539809";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    body
  )}`;

  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  // // // // // // // // // // // // // // // // // // //EMAIL // // // // // // // // // // // // // // // // // // // //
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

  const email = "andreapugliesecocina@yahoo.com";
  // English mail
  const subjectEng = "Info request";
  const bodyEngGroup =
    "Hello! I'd like to know more about your Group Course services.";
  const bodyEngPrivate =
    "Hello! I'd like to know more about your Private Classes services.";
  const bodyEngTeam =
    "Hello! I'd like to know more about your Team Building for company services.";
  const mailtoLinkEng = `mailto:${email}?subject=${encodeURIComponent(
    subjectEng
  )}&body=${encodeURIComponent(body)}`;
  // Spanish mail
  const subjectEsp = "Solicitud de información";
  const bodyEspGroup =
    "¡Hola! Me gustaría saber más sobre sus servicios de Cursos Grupales.";
  const bodyEspPrivate =
    "¡Hola! Me gustaría saber más sobre sus servicios de Clases Privadas.";
  const bodyEspTeam =
    "¡Hola! Me gustaría saber más sobre sus servicios de Team Building para Empresas.";
  const mailtoLinkEsp = `mailto:${email}?subject=${encodeURIComponent(
    subjectEsp
  )}&body=${encodeURIComponent(body)}`;

  // Italian mail
  const subjectIta = "Richiesta Informazioni";
  const bodyItaGroup =
    "Ciao! Mi piacerebbe sapere di più sui servizi di Corsi per Gruppo";
  const bodyItaPrivate =
    "Ciao! Mi piacerebbe sapere di più sui servizi di Corsi per Privati";
  const bodyItaTeam =
    "Ciao! Mi piacerebbe sapere di più sui servizi di Corsi per Team Aziendale";
  const mailtoLinkIta = `mailto:${email}?subject=${encodeURIComponent(
    subjectIta
  )}&body=${encodeURIComponent(body)}`;
  //
  const [whatIsSelected, setWhatIsSelected] = useState("none");

  useEffect(() => {
    showButtonForGroupClass === true && setWhatIsSelected("Group Class");
    showButtonForPrivateClass === true && setWhatIsSelected("Private Class");
    showButtonForTeamClass === true && setWhatIsSelected("Team Class");
  }, [
    showButtonForGroupClass,
    showButtonForPrivateClass,
    showButtonForTeamClass,
  ]);
  useEffect(() => {
    whatIsSelected === "Group Class" && LangInUse === "Ita"
      ? setBody(bodyItaGroup)
      : whatIsSelected === "Private Class" && LangInUse === "Ita"
      ? setBody(bodyItaPrivate)
      : whatIsSelected === "Team Class" && LangInUse === "Ita"
      ? setBody(bodyItaTeam)
      : null;
  }, [LangInUse, whatIsSelected]);
  useEffect(() => {
    whatIsSelected === "Group Class" && LangInUse === "Esp"
      ? setBody(bodyEspGroup)
      : whatIsSelected === "Private Class" && LangInUse === "Esp"
      ? setBody(bodyEspPrivate)
      : whatIsSelected === "Team Class" && LangInUse === "Esp"
      ? setBody(bodyEspTeam)
      : null;
  }, [LangInUse, whatIsSelected]);
  useEffect(() => {
    whatIsSelected === "Group Class" && LangInUse === "Eng"
      ? setBody(bodyEngGroup)
      : whatIsSelected === "Private Class" && LangInUse === "Eng"
      ? setBody(bodyEngPrivate)
      : whatIsSelected === "Team Class" && LangInUse === "Eng"
      ? setBody(bodyEngTeam)
      : null;
  }, [LangInUse, whatIsSelected]);

  return (
    <>
      <div id="cookingClass">
        <div className="filterdark2 text-Light h-100 d-flex flex-column align-items-center justify-content-between px-5 ">
          {LangInUse === "Esp" && (
            <Row className="d-flex align-items-center justify-content-center flex-grow-1">
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
                  <Col
                    onClick={() => {
                      setShowButtonForGroupClass(!showButtonForGroupClass);
                      setShowButtonForPrivateClass(false);
                      setShowButtonForTeamClass(false);
                    }}
                    className={
                      whatIsSelected === "Group Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                  >
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
                  <Col
                    onClick={() => {
                      setShowButtonForGroupClass(false);
                      setShowButtonForPrivateClass(!showButtonForPrivateClass);
                      setShowButtonForTeamClass(false);
                    }}
                    className={
                      whatIsSelected === "Private Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                  >
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
                  <Col
                    className={
                      whatIsSelected === "Team Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                    onClick={() => {
                      setShowButtonForGroupClass(false);
                      setShowButtonForPrivateClass(false);
                      setShowButtonForTeamClass(!showButtonForTeamClass);
                    }}
                  >
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
            <Row className="d-flex align-items-center justify-content-center flex-grow-1">
              <Col className="col-12 col-xl-10 col-xxl-8 ls-2">
                Discover Italian Cuisine with Me! Would you like to learn how to
                prepare authentic Italian dishes in a fun and welcoming
                environment? You’re in the right place! I offer Italian cooking
                courses designed for groups, private sessions, and team-building
                activities for companies.
              </Col>

              <Col className="col-12 small">
                <Row>
                  <Col className="col-12 text-center fs-5 mb-4 ">
                    <span className="border-bottom px-5">What do I offer?</span>
                  </Col>
                </Row>
                <Row className="d-none d-md-flex">
                  <Col className="col-1 d-none d-xl-block"></Col>
                  <Col
                    className={
                      whatIsSelected === "Group Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                    onClick={() => {
                      setShowButtonForGroupClass(!showButtonForGroupClass);
                      setShowButtonForPrivateClass(false);
                      setShowButtonForTeamClass(false);
                    }}
                  >
                    <div className="text-center ls-2 mb-4 py-2">
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
                  <Col
                    className={
                      whatIsSelected === "Private Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                    onClick={() => {
                      setShowButtonForGroupClass(false);
                      setShowButtonForPrivateClass(!showButtonForPrivateClass);
                      setShowButtonForTeamClass(false);
                    }}
                  >
                    <div className="text-center ls-2 mb-4 py-2">
                      ••Private Classes••
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
                  <Col
                    className={
                      whatIsSelected === "Team Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                    onClick={() => {
                      setShowButtonForGroupClass(false);
                      setShowButtonForPrivateClass(false);
                      setShowButtonForTeamClass(!showButtonForTeamClass);
                    }}
                  >
                    <div className="text-center ls-2 mb-4 py-2">
                      ••Team Building for Companies••
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
                        ••Private Classes••
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
                        ••Team Building for Companies••
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
                      <div className="text-center ls-2 mb-4 py-2 py-4">
                        ••Group Courses••
                      </div>
                      <div className="text-center">
                        <div className="small mb-3">
                          Group classes are open to the public, which means
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
            <Row className="d-flex align-items-center justify-content-center flex-grow-1">
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
                  <Col
                    className={
                      whatIsSelected === "Group Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                    onClick={() => {
                      setShowButtonForGroupClass(!showButtonForGroupClass);
                      setShowButtonForPrivateClass(false);
                      setShowButtonForTeamClass(false);
                    }}
                  >
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
                  <Col
                    className={
                      whatIsSelected === "Private Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                    onClick={() => {
                      setShowButtonForGroupClass(false);
                      setShowButtonForPrivateClass(!showButtonForPrivateClass);
                      setShowButtonForTeamClass(false);
                    }}
                  >
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
                  <Col
                    className={
                      whatIsSelected === "Team Class"
                        ? "border rounded-4 p-4 brightonhover selectedSection"
                        : "border rounded-4 p-4 brightonhover"
                    }
                    onClick={() => {
                      setShowButtonForGroupClass(false);
                      setShowButtonForPrivateClass(false);
                      setShowButtonForTeamClass(!showButtonForTeamClass);
                    }}
                  >
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
          <div
            className={
              showButtonForGroupClass === true ||
              showButtonForPrivateClass === true ||
              showButtonForTeamClass === true
                ? "d-flex justify-content-around appear"
                : "d-flex justify-content-around disappear"
            }
          >
            <div
              onMouseEnter={() => {
                setIsDiv1Hovered(true);
              }}
              onMouseLeave={() => {
                setIsDiv1Hovered(false);
              }}
              className="py-4 fs-4 text-center w-100 darker-1 rounded-3 mx-3  textIconDancing"
            >
              <a
                href={
                  LangInUse === "Eng"
                    ? mailtoLinkEng
                    : LangInUse === "Ita"
                    ? mailtoLinkIta
                    : LangInUse === "Esp"
                    ? mailtoLinkEsp
                    : null
                }
                style={{ textDecoration: "none" }}
              >
                <EnvelopeAtFill
                  className={
                    isDiv1Hovered === true
                      ? "cursorOnHover icon-dancing text-Contrast"
                      : "cursorOnHover icon-dancing"
                  }
                />
              </a>
            </div>
            <div
              onMouseEnter={() => {
                setIsDiv2Hovered(true);
              }}
              onMouseLeave={() => {
                setIsDiv2Hovered(false);
              }}
              className="py-4 fs-4 text-center w-100 darker-1 rounded-3 mx-3  textIconDancing"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <TelephoneFill
                  className={
                    isDiv2Hovered === true
                      ? "cursorOnHover icon-dancing text-Contrast"
                      : "cursorOnHover icon-dancing"
                  }
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <CookingAside />
      <PrivateChefPage />
    </>
  );
};
export default CookingClassPage;
