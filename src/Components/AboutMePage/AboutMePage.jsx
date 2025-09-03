import { Container } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import SliderContainer from "../LandingPage/SliderContainer";
// import CookieMessage from "./CookieMessage";

// import InstagramCarousel from "./InstagramCarousel";

const AboutMePage = () => {
  // const LangInUse = useSelector((state) => state.Lang.lang);
  // const isCookieAccepted = useSelector((state) => state.Cookie.isAccepted);

  return (
    <>
      <Container className="p-0">
        <div className="filterdark2 text-center d-flex flex-column justify-content-center align-items-center">
          <div className="p-5">
            <div className="fs-1 text-center p-5 ls-2">Ciao!</div>
            <div className="ls-1">
              Soy Andrea Pugliese, chef italiano nacido en la isla de Procida,
              una joya mediterránea en el corazón del Golfo de Nápoles. Crecí en
              una comunidad donde las familias vivían conectadas a la huerta o
              al mar: desde agricultores hasta marineros o pescadores, el
              trabajo estaba profundamente enraizado a la tierra y al agua.
              Desde pequeño, mi vida giró en torno a los ritmos de la
              naturaleza. Recuerdo con nitidez los aromas intensos de los
              tomates frescos que cosechábamos cada verano. Cortábamos los
              tomates, los embotellábamos junto a hojas de albahaca fresca y los
              almacenábamos para mantener viva la esencia durante el invierno.
              La huerta era un mosaico de colores y sabores: sus tan preciados
              limones dulces, higos, nísperos, mandarinas, clementinas,
              naranjas, granadas, uvas para el vino casero de otoño y hierbas
              aromáticas.
            </div>
          </div>
        </div>
        <div id="aboutMe"></div>
      </Container>
      <Container className="p-0">
        <div className="filterdark2 text-center d-flex flex-column justify-content-center align-items-center">
          <div className="p-5">
            <div className="ls-1">
              La huerta siempre fue un lenguaje natural para mi; también el mar.
              Navegué las aguas del mediterráneo durante ... años pero fue en
              2019 cuando dejé mis días de oficial de navegación para dedicarme
              a lo que me apasiona. Me trasladé a España para formarme en la
              Escuela de Hostelería de Sevilla. Tras esos años de estudio decidí
              formarme en cocina enlazando sabores autóctonos en Italia,
              Argentina, Irlanda y España aprendiendo de grandes chefs como Rafa
              Zafra, Ricardo Acquista y Gonzalo Villalba.
            </div>
          </div>
        </div>
        <div id="aboutMe"></div>
      </Container>{" "}
      <Container className="p-0">
        <div className="filterdark2 text-center d-flex flex-column justify-content-center align-items-center">
          <div className="p-5">
            <div className="fs-1 text-center p-5 ls-2">Ciao!</div>
            <div className="ls-1">
              Hoy, desde la Comunidad Valenciana, comparto mi cocina a través de
              experiencias auténticas, donde la técnica se encuentra con la
              emoción. Desde hace más de dos años colaboro con Pasta Garofalo
              España, con quienes he desarrollado más de 200 video-recetas que
              celebran la esencia de la gastronomía italiana.
            </div>
          </div>
        </div>
        <div id="aboutMe"></div>
      </Container>
      {/* <>
        <section id="cookieContent" className="bg-smokegray">
          <div className="p-5 ">
            <Row className="">
              <Col className="col-12 col-xl-6 d-flex d-xl-none text-center align-items-center justify-content-center">
                <a
                  href="https://www.instagram.com/andreapugliesecocina?igsh=cXM2d2xxOXMzMW1p"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src="/assets/img/logo-insta.png"
                      alt="instagram logo"
                      style={{ width: "275px" }}
                    />
                    <img
                      src="/assets/andreapugliese/bg/piatto1.jpg"
                      alt="testimonial garofalo"
                      className="p-3 rounded-5 d-none d-xl-block"
                      style={{ width: "300px" }}
                    />
                  </div>
                </a>
              </Col>
              <Col className="col-12 col-xl-6 text-center">
                <Row>
                  <Col>
                    {isCookieAccepted === "Declined" && <CookieMessage />}
                    {isCookieAccepted === "Accepted" && <InstagramCarousel />}
                  </Col>
                </Row>
              </Col>
              <Col className="col-12 col-xl-6 d-none d-xl-flex text-center align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="/assets/img/logo-insta.png"
                    alt="instagram logo"
                    style={{ width: "275px" }}
                  />
                  <img
                    src="/assets/andreapugliese/bg/piatto1.jpg"
                    alt="testimonial garofalo"
                    className="p-3 rounded-5 d-none d-xl-block"
                    style={{ width: "300px" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </> */}
      {/* <div className="filterdark">
        <SliderContainer />
      </div> */}
    </>
  );
};
export default AboutMePage;
