import { useSelector } from "react-redux";
import { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import {
  EnvelopeAtFill,
  Instagram,
  TelephoneFill,
} from "react-bootstrap-icons";

const AsideSection = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="Aside">
      <div className="w-100 text-center py-5 fs-3 px-4">
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

          <Modal show={show} onHide={handleClose} id="contactInfoContainer">
            <Modal.Header closeButton>
              <Modal.Title>Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div id="contactInfo">
                <div className="d-flex justify-content-between align-items-center my-2">
                  <EnvelopeAtFill className="fs-6 ms-4" />
                  andreapugliesecocina@yahoo.com
                  <EnvelopeAtFill className="fs-6 me-4" />
                </div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <TelephoneFill className="fs-6 ms-4" />
                  +39 3341445233
                  <TelephoneFill className="fs-6 me-4" />
                </div>
                <div className="d-flex justify-content-between align-items-center my-2">
                  <Instagram className="fs-6 ms-4" />
                  <a
                    href="https://www.instagram.com/andreapugliesecocina"
                    target="_blank"
                    className="text-black text-decoration-none"
                  >
                    @andreapugliesecocina
                  </a>
                  <Instagram className="fs-6 me-4" />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
        {/* <SliderContainer /> */}
      </div>
    </div>
  );
};
export default AsideSection;
