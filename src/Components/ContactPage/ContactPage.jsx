import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  EnvelopeAtFill,
  Instagram,
  TelephoneFill,
} from "react-bootstrap-icons";

const ContactPage = () => {
  const [showNumber, setShowNumber] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [showInstagram, setShowInstagram] = useState(false);
  const [instagramIsHovered, setInstasgramIsHovered] = useState(false);

  return (
    <div id="ContactPage" className="d-flex align-items-center h-100">
      <div className="filterdark minh80"></div>
      <div className>
        <div className=" filterdark minh35"></div>
        <div className="minh10">
          <Row className="w-100">
            <Col className="fs-2 text-center col-12 col-xl-4 mb-5">
              Want to get in Touch?!
            </Col>
            <Col className="col-lg-2 d-none d-lg-flex"></Col>

            <Col className="col-12 offset-md-1 col-md-10 col-xl-5 offset-xl-0 d-flex flex-column align-items-center justify-content-center">
              <>
                <div className="d-flex align-items-center justify-content-between w-100 py-2 cursorOnHover2">
                  <EnvelopeAtFill
                    className="icon-fixed-size"
                    onClick={() => {
                      setShowMail(!showMail);
                    }}
                  />
                  {showMail && (
                    <div className="small">andreapugliesecocina@yahoo.com</div>
                  )}
                </div>
              </>
              <>
                <div className="d-flex align-items-center justify-content-between w-100 py-2 cursorOnHover2">
                  <TelephoneFill
                    className="icon-fixed-size"
                    onClick={() => {
                      setShowNumber(!showNumber);
                    }}
                  />
                  {showNumber && <div className="small">+39 3341445233</div>}
                </div>
              </>
              <>
                <div
                  className="d-flex align-items-center justify-content-between w-100 py-2 cursorOnHover2"
                  onMouseEnter={() => {
                    setInstasgramIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setInstasgramIsHovered(false);
                  }}
                >
                  <Instagram
                    className="icon-fixed-size"
                    onClick={() => {
                      setShowInstagram(!showInstagram);
                    }}
                  />
                  {showInstagram && (
                    <div className="small">
                      <a
                        href="https://www.instagram.com/andreapugliesecocina?igsh=cXM2d2xxOXMzMW1p"
                        target="_blank"
                        className={
                          instagramIsHovered === true
                            ? "changeColor2"
                            : "text-Dark2"
                        }
                      >
                        @andreapugliesecocina
                      </a>
                    </div>
                  )}
                </div>
              </>
            </Col>
            <Col className="col-lg-1 d-none d-lg-flex"></Col>
          </Row>
        </div>
        <div className="filterdark minh35"></div>
      </div>
      <div className="filterdark minh80"></div>
    </div>
  );
};
export default ContactPage;
