// import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import { EnvelopeAtFill, Whatsapp } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

const PrivateChefPage = () => {
  const [body, setBody] = useState("Hello! Hola! Ciao!");

  const phoneNumber = "34600539809";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    body
  )}`;
  const email = "andreapugliesecocina@yahoo.com";
  ////////////////////////////// ////////////////////////////// English mail
  const subjectEng = "Info request";
  const bodyEng3Course =
    "Hello! I'd like to know more about your Private Chef 3-Course Menu service.";
  const bodyEng4Course =
    "Hello! I'd like to know more about your Private Chef 4-Course Menu service.";
  const bodyEng5Course =
    "Hello! I'd like to know more about your Private Chef 5-Course Menu service.";
  const bodyEngAperitivo =
    "Hello! I'd like to know more about your Private Chef Aperitivo Menu service.";

  const mailtoLinkEng = `mailto:${email}?subject=${encodeURIComponent(
    subjectEng
  )}&body=${encodeURIComponent(body)}`;

  ////////////////////////////// //////////////////////////// Spanish mail
  const subjectEsp = "Solicitud de información";
  const bodyEsp3Course =
    "¡Hola! Me gustaría saber más sobre su servicio de Menú Privado de 3 Platos.";
  const bodyEsp4Course =
    "¡Hola! Me gustaría saber más sobre su servicio de Menú Privado de 4 Platos.";
  const bodyEsp5Course =
    "¡Hola! Me gustaría saber más sobre su servicio de Menú Privado de 5 Platos.";
  const bodyEspAperitivo =
    "¡Hola! Me gustaría saber más sobre su servicio de Menú Privado de Aperitivo.";

  const mailtoLinkEsp = `mailto:${email}?subject=${encodeURIComponent(
    subjectEsp
  )}&body=${encodeURIComponent(body)}`;

  ////////////////////////////// //////////////////////////// Italian mail
  const subjectIta = "Richiesta Informazioni";
  const bodyIta3Course =
    "Ciao! Vorrei sapere di più sul servizio di Menu Chef Privato di 3 Portate.";
  const bodyIta4Course =
    "Ciao! Vorrei sapere di più sul servizio di Menu Chef Privato di 4 Portate.";
  const bodyIta5Course =
    "Ciao! Vorrei sapere di più sul servizio di Menu Chef Privato di 5 Portate.";
  const bodyItaAperitivo =
    "Ciao! Vorrei sapere di più sul servizio di Menu Chef Privato - Aperitivo.";

  const mailtoLinkIta = `mailto:${email}?subject=${encodeURIComponent(
    subjectIta
  )}&body=${encodeURIComponent(body)}`;
  //
  const [isDiv1Hovered, setIsDiv1Hovered] = useState(false);
  const [isDiv2Hovered, setIsDiv2Hovered] = useState(false);
  const [threecourseMenuSelected, set3CourseMenuSelected] = useState(false);
  const [fourcourseMenuSelected, set4CourseMenuSelected] = useState(false);
  const [fivecourseMenuSelected, set5CourseMenuSelected] = useState(false);
  const [aperitivocourseMenuSelected, setAperitivoMenuSelected] =
    useState(false);
  const [whatIsSelected, setWhatIsSelected] = useState("hello");
  const LangInUse = useSelector((state) => state.Lang.lang);
  const clearSelection = () => {
    set3CourseMenuSelected(false);
    set4CourseMenuSelected(false);
    set5CourseMenuSelected(false);
    setAperitivoMenuSelected(false);
  };
  useEffect(() => {
    console.log(whatIsSelected);
  }, [whatIsSelected]);
  useEffect(() => {
    threecourseMenuSelected === true
      ? setWhatIsSelected("3Course")
      : fourcourseMenuSelected === true
      ? setWhatIsSelected("4Course")
      : fivecourseMenuSelected === true
      ? setWhatIsSelected("5Course")
      : aperitivocourseMenuSelected === true
      ? setWhatIsSelected("Aperitivo")
      : null;
  }, [
    threecourseMenuSelected,
    fourcourseMenuSelected,
    fivecourseMenuSelected,
    aperitivocourseMenuSelected,
  ]);
  useEffect(() => {
    whatIsSelected === "3Course" && LangInUse === "Esp"
      ? setBody(bodyEsp3Course)
      : whatIsSelected === "4Course" && LangInUse === "Esp"
      ? setBody(bodyEsp4Course)
      : whatIsSelected === "5Course" && LangInUse === "Esp"
      ? setBody(bodyEsp5Course)
      : whatIsSelected === "Aperitivo" && LangInUse === "Esp"
      ? setBody(bodyEspAperitivo)
      : null;
  }, [whatIsSelected, LangInUse, body]);
  useEffect(() => {
    whatIsSelected === "3Course" && LangInUse === "Eng"
      ? setBody(bodyEng3Course)
      : whatIsSelected === "4Course" && LangInUse === "Eng"
      ? setBody(bodyEng4Course)
      : whatIsSelected === "5Course" && LangInUse === "Eng"
      ? setBody(bodyEng5Course)
      : whatIsSelected === "Aperitivo" && LangInUse === "Eng"
      ? setBody(bodyEngAperitivo)
      : null;
  }, [whatIsSelected, LangInUse, body]);
  useEffect(() => {
    whatIsSelected === "3Course" && LangInUse === "Ita"
      ? setBody(bodyIta3Course)
      : whatIsSelected === "4Course" && LangInUse === "Ita"
      ? setBody(bodyIta4Course)
      : whatIsSelected === "5Course" && LangInUse === "Ita"
      ? setBody(bodyIta5Course)
      : whatIsSelected === "Aperitivo" && LangInUse === "Ita"
      ? setBody(bodyItaAperitivo)
      : null;
  }, [whatIsSelected, LangInUse, body]);
  return (
    <>
      <Container id="PrivateChef" fluid className="text-center fs-3 p-0">
        <Row>
          <Col className="fs-1 py-5 bg-lightGrey">
            {LangInUse === "Esp" && <>Servicio de Chef privado</>}
            {LangInUse === "Ita" && <>Servizio di Chef privato</>}
            {LangInUse === "Eng" && <>Private Chef service</>}
          </Col>
        </Row>

        <Row className="fs-4 bg-menu">
          <Col className="py-5">
            {/* MENU ITALIANO */}
            {LangInUse === "Ita" && (
              <>
                <div className="d-flex flex-column">
                  <>
                    <div className="d-flex flex-column notHover">
                      <div className="fs-3">OPZIONI MENU DEGUSTAZIONE</div>
                      <div className="fs-5 mb-5">
                        Scegli il numero desiderato di portate e seleziona
                        quelle che preferisci
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "3Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set3CourseMenuSelected(!threecourseMenuSelected);
                      }}
                    >
                      <div>
                        MENU 3 PORTATE
                        <span className="px-2">
                          Disponibile per 2 a 6 persone
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - PRIMO o SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "4Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set4CourseMenuSelected(!fourcourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        MENU 4 PORTATE{" "}
                        <span className="px-2">
                          Disponibile per 2 a 6 persone
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - PRIMO - SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "5Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set5CourseMenuSelected(!fivecourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        MENU 5 PORTATE{" "}
                        <span className="px-2">
                          Disponibile per 2 a 6 persone
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - APERITIVO - PRIMO - SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "Aperitivo"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        setAperitivoMenuSelected(!aperitivocourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        SOLO APERITIVO E FINGER FOOD
                        <span className="px-2">
                          Disponibile per 6 a 20 persone
                        </span>
                      </div>
                      <div className="fs-6">
                        Tutti gli aperitivi sono serviti su deliziosi canapè
                        fatti in casa.
                      </div>
                    </div>
                  </>
                </div>
              </>
            )}
            {/* MENU SPAGNOLO */}
            {LangInUse === "Esp" && (
              <>
                <div className="d-flex flex-column notHover">
                  <>
                    <div className="d-flex flex-column mb-5">
                      <div className="fs-3">OPCIONES DE MENÚ DEGUSTACIÓN</div>
                      <div className="fs-6">
                        Elije la cantidad deseada de platos y selecciona los que
                        más te gusten
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "3Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set3CourseMenuSelected(!threecourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        MENÚ DE 3 PLATOS{" "}
                        <span className="px-2">
                          Disponible para 2 a 6 personas
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - PRIMO o SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "4Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set4CourseMenuSelected(!fourcourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        MENÚ DE 4 PLATOS{" "}
                        <span className="px-2">
                          Disponible para 2 a 6 personas
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - PRIMO - SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "5Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set5CourseMenuSelected(!fivecourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        MENÚ DE 5 PLATOS{" "}
                        <span className="px-2">
                          Disponible para 2 a 6 personas
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - APERITIVO - PRIMO - SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "Aperitivo"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        setAperitivoMenuSelected(!aperitivocourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        SOLO APERITIVO Y FINGER FOOD
                        <span className="px-2">
                          Disponible para 6 a 20 personas
                        </span>
                      </div>
                      <div className="fs-6">
                        Todos los aperitivos se sirven sobre deliciosos canapés
                        caseros.
                      </div>
                    </div>
                  </>
                </div>
              </>
            )}
            {/* MENU INGLESE */}
            {LangInUse === "Eng" && (
              <>
                <div className="d-flex flex-column">
                  <>
                    <div className="d-flex flex-column notHover">
                      <div className="fs-3">TASTING MENU OPTIONS</div>
                      <div className="fs-5 mb-5">
                        Choose the desired number of courses and select your
                        favorites
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "3Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set3CourseMenuSelected(!threecourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        3-COURSE MENU{" "}
                        <span className="px-2">
                          Available for 2 to 6 people
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - PRIMO or SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "4Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set4CourseMenuSelected(!fourcourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        4-COURSE MENU{" "}
                        <span className="px-2">
                          Available for 2 to 6 people
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - PRIMO - SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className={
                        whatIsSelected === "5Course"
                          ? "py-2 selectedSection d-flex flex-column"
                          : "py-2 d-flex flex-column"
                      }
                      onClick={() => {
                        clearSelection();
                        set5CourseMenuSelected(!fivecourseMenuSelected);
                      }}
                    >
                      <div className="fs-4">
                        5-COURSE MENU{" "}
                        <span className="px-2">
                          Available for 2 to 6 people
                        </span>
                      </div>
                      <div className="fs-6">
                        ANTIPASTO - APERITIVO - PRIMO - SECONDO - DOLCE
                      </div>
                    </div>
                  </>
                  <>
                    <div
                      className="d-flex flex-column"
                      onClick={() => {
                        clearSelection();
                        setAperitivoMenuSelected(true);
                      }}
                    >
                      <div className="fs-4">
                        APERITIVO AND FINGER FOOD ONLY
                        <span className="px-2">
                          Available for 6 to 20 people
                        </span>
                      </div>
                      <div className="fs-6">
                        All aperitifs are served on delicious homemade canapés.
                      </div>
                    </div>
                  </>
                </div>
              </>
            )}
          </Col>
        </Row>
        <div className="bg-menu d-flex align-items-center justify-content-between flex-column">
          <div
            className={
              threecourseMenuSelected === true ||
              fourcourseMenuSelected === true ||
              fivecourseMenuSelected === true ||
              aperitivocourseMenuSelected === true
                ? " d-none p-0 m-0 d-md-flex justify-content-around appear py-4"
                : " d-none d-md-flex p-0 m-0 justify-content-around disappear py-4"
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
                <Whatsapp
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
      </Container>
    </>
  );
};
export default PrivateChefPage;
