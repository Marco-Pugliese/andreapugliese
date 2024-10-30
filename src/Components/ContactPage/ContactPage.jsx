import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  EnvelopeAtFill,
  Instagram,
  TelephoneFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ContactPage = () => {
  const [instagramIsHovered, setInstasgramIsHovered] = useState(false);
  const [phoneIsHovered, setPhoneIsHovered] = useState(false);
  const [mailIsHovered, setMailIsHovered] = useState(false);
  const LangInUse = useSelector((state) => state.Lang.lang);
  return (
    <div id="ContactPage" className="d-flex align-items-center h-100">
      <div>
        <div className="minh35"></div>
        <div className="minh10">
          <Row className="w-100">
            <Col className="fs-2 text-center col-12 col-xl-4 mb-5">
              {LangInUse === "Eng" ? (
                <> Want to get in Touch?!</>
              ) : LangInUse === "Ita" ? (
                <> Vuoi metterti in contatto?!</>
              ) : LangInUse === "Esp" ? (
                <>¿Quieres ponerte en contacto conmigo?</>
              ) : null}
            </Col>
            <Col className="col-lg-2 d-none d-lg-flex"></Col>

            {/* <Col className="col-12 offset-md-1 col-md-10 col-xl-5 offset-xl-0 d-flex flex-column align-items-center justify-content-center"> */}
            <Col>
              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2"
                  onMouseEnter={() => {
                    setMailIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setMailIsHovered(false);
                  }}
                >
                  <div className="small">
                    <EnvelopeAtFill
                      className={
                        mailIsHovered === true
                          ? "icon-fixed-size icon-dancing"
                          : "icon-fixed-size"
                      }
                    />
                    <span className="px-2">andreapugliesecocina@yahoo.com</span>
                    <EnvelopeAtFill
                      className={
                        mailIsHovered === true
                          ? "icon-fixed-size icon-dancing"
                          : "icon-fixed-size"
                      }
                    />
                  </div>
                </div>
              </>
              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2"
                  onMouseEnter={() => {
                    setPhoneIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setPhoneIsHovered(false);
                  }}
                >
                  <div className="small">
                    <TelephoneFill
                      className={
                        phoneIsHovered === true
                          ? "icon-fixed-size icon-dancing"
                          : "icon-fixed-size"
                      }
                    />
                    <span className="px-2">+39 3341445233</span>
                    <TelephoneFill
                      className={
                        phoneIsHovered === true
                          ? "icon-fixed-size icon-dancing"
                          : "icon-fixed-size"
                      }
                    />
                  </div>
                </div>
              </>
              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2"
                  onMouseEnter={() => {
                    setInstasgramIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setInstasgramIsHovered(false);
                  }}
                >
                  <Instagram
                    className={
                      instagramIsHovered === true
                        ? "icon-fixed-size icon-dancing"
                        : "icon-fixed-size"
                    }
                  />

                  <div className="small px-2">
                    <a
                      href="https://www.instagram.com/andreapugliesecocina?igsh=cXM2d2xxOXMzMW1p"
                      target="_blank"
                      rel="noopener"
                      className={
                        instagramIsHovered === true
                          ? "changeColor2"
                          : "text-Dark2"
                      }
                    >
                      @andreapugliesecocina
                    </a>
                  </div>
                  <Instagram
                    className={
                      instagramIsHovered === true
                        ? "icon-fixed-size icon-dancing"
                        : "icon-fixed-size"
                    }
                  />
                </div>
              </>
            </Col>
            <Col className="col-lg-1 d-none d-lg-flex"></Col>
          </Row>
        </div>
        <div className="minh35"></div>
      </div>
    </div>
  );
};
export default ContactPage;
