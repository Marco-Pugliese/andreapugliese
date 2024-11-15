import { useSelector } from "react-redux";
import { useState } from "react";

import { Button, Container, Modal } from "react-bootstrap";
import {
  EnvelopeAtFill,
  Instagram,
  Tiktok,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

const AsideSection = () => {
  const phoneNumber = "34600539809"; // Numero senza simboli e spazi
  const message = "Hello! I'm intrested in your services";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const email = "andreapugliesecocina@yahoo.com";
  const subject = "Info request";
  const body = "Hello! I'd like to know more about your services.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const LangInUse = useSelector((state) => state.Lang.lang);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="Aside" className="bg-dark">
      <div className="w-100 text-center py-5 fs-3 px-1">
        <section className="my-5 py-5 ">
          <div className="py-4">
            <span className="text-changing">
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
              onClick={handleShow}
            >
              {LangInUse === "Eng" && <>Let{"'"}s get in touch</>}
              {LangInUse === "Esp" && <>Pongámonos en contacto!</>}
              {LangInUse === "Ita" && <>Mettiamoci in contatto!</>}
            </span>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            id="contactInfoContainer"
            className="d-flex justify-content-center"
          >
            <Container>
              <Modal.Header closeButton>
                <Modal.Title>Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div id="contactInfo">
                  <div className="d-flex small justify-content-between align-items-center my-2">
                    <EnvelopeAtFill className="fs-6 ms-4" />
                    <div className="small">
                      {" "}
                      <a
                        href={mailtoLink}
                        className="text-dark px-3"
                        style={{ textDecoration: "none" }}
                      >
                        andreapugliesecocina@yahoo.com
                      </a>
                    </div>
                    <EnvelopeAtFill className="fs-6 me-4" />
                  </div>
                  <div className="d-flex small justify-content-between align-items-center my-2">
                    <Whatsapp className="fs-6 ms-4" />

                    <div className="small">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark px-3"
                        style={{ textDecoration: "none" }}
                      >
                        +34 600539809
                      </a>
                    </div>
                    <Whatsapp className="fs-6 me-4" />
                  </div>
                  <div className="d-flex small justify-content-between align-items-center my-2">
                    <Instagram className="fs-6 ms-4" />
                    <a
                      href="https://www.instagram.com/andreapugliesecocina?igsh=cXM2d2xxOXMzMW1p"
                      target="_blank"
                      className="text-black text-decoration-none"
                    >
                      <div className="small"> @andreapugliesecocina</div>
                    </a>
                    <Instagram className="fs-6 me-4" />
                  </div>

                  {/* //////////////////////////////////////////////////////////////////////////////////// */}
                  <div className="d-flex small justify-content-between align-items-center my-2">
                    <Youtube className="fs-6 ms-4" />
                    <a
                      href="https://youtube.com/@andreapugliesecocina?si=OnLXbFGqKFJZL4dC"
                      target="_blank"
                      className="text-black text-decoration-none"
                    >
                      <div className="small"> @andreapugliesecocina</div>
                    </a>
                    <Youtube className="fs-6 me-4" />
                  </div>
                  <div className="d-flex small justify-content-between align-items-center my-2">
                    <Tiktok className="fs-6 ms-4" />
                    <a
                      href="https://www.tiktok.com/@andreapugliesecocina?_t=8r1oOxL9Qrw&_r=1"
                      target="_blank"
                      className="text-black text-decoration-none"
                    >
                      <div className="small"> @andreapugliesecocina</div>
                    </a>
                    <Tiktok className="fs-6 me-4" />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Container>
          </Modal>
        </section>
        {/* <SliderContainer /> */}
      </div>
    </div>
  );
};
export default AsideSection;
