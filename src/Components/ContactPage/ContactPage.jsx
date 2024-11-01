import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  EnvelopeAtFill,
  Instagram,
  TelephoneFill,
  Tiktok,
  Youtube,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ContactPage = () => {
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
  const [instagramIsHovered, setInstasgramIsHovered] = useState(false);
  const [phoneIsHovered, setPhoneIsHovered] = useState(false);
  const [youtubeIsHovered, setYoutubeIsHovered] = useState(false);
  const [tikTokIsHovered, setTikTokIsHovered] = useState(false);
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
              {/* ---------MAIL------------- */}
              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2 miniscale"
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
                    <a
                      href={mailtoLink}
                      className={
                        mailIsHovered === true
                          ? "changeColor2 px-1"
                          : "text-Dark2 px-1"
                      }
                    >
                      andreapugliesecocina@yahoo.com
                    </a>

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
              {/* ---------PHONE------------- */}
              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2 miniscale"
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
                    <span className="px-2">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          phoneIsHovered === true
                            ? "changeColor2"
                            : "text-Dark2"
                        }
                      >
                        +34 600539809
                      </a>
                    </span>
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
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2 miniscale"
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
              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2 miniscale"
                  onMouseEnter={() => {
                    setYoutubeIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setYoutubeIsHovered(false);
                  }}
                >
                  <Youtube
                    className={
                      youtubeIsHovered === true
                        ? "icon-fixed-size icon-dancing"
                        : "icon-fixed-size"
                    }
                  />

                  <div className="small px-2">
                    <a
                      href="https://youtube.com/@andreapugliesecocina?si=OnLXbFGqKFJZL4dC"
                      target="_blank"
                      rel="noopener"
                      className={
                        youtubeIsHovered === true
                          ? "changeColor2"
                          : "text-Dark2"
                      }
                    >
                      @andreapugliesecocina
                    </a>
                  </div>
                  <Youtube
                    className={
                      youtubeIsHovered === true
                        ? "icon-fixed-size icon-dancing"
                        : "icon-fixed-size"
                    }
                  />
                </div>
              </>

              <>
                <div
                  className="d-flex align-items-center justify-content-center w-100 py-2 cursorOnHover2 miniscale"
                  onMouseEnter={() => {
                    setTikTokIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setTikTokIsHovered(false);
                  }}
                >
                  <Tiktok
                    className={
                      tikTokIsHovered === true
                        ? "icon-fixed-size icon-dancing"
                        : "icon-fixed-size"
                    }
                  />

                  <div className="small px-2">
                    <a
                      href="https://www.tiktok.com/@andreapugliesecocina?_t=8r1oOxL9Qrw&_r=1"
                      target="_blank"
                      rel="noopener"
                      className={
                        tikTokIsHovered === true ? "changeColor2" : "text-Dark2"
                      }
                    >
                      @andreapugliesecocina
                    </a>
                  </div>
                  <Tiktok
                    className={
                      tikTokIsHovered === true
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
