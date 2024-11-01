import { Col, Container, Row } from "react-bootstrap";
import Logo from "../1-Navbar/Logo";
import {
  EnvelopeAtFill,
  HeartFill,
  Instagram,
  TelephoneFill,
  Tiktok,
  Youtube,
} from "react-bootstrap-icons";
import { useState } from "react";

const Footer = () => {
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
  const [showNumber, setShowNumber] = useState(true);
  const [showMail, setShowMail] = useState(true);
  const today = new Date();
  const thisYear = today.getFullYear();
  return (
    <Container fluid className="p-0 bg-Darker">
      <div className="d-flex justify-content-center text-Dark bg-light  pt-5 pb-3">
        <div className="d-flex flex-column">
          <div className="text-start">
            <div className="text-end fs-small">
              <span className="fs-small">©{thisYear}</span>
            </div>
            <div className="small">
              <Logo />
            </div>
          </div>
          <div className="text-end d-flex flex-row align-items-center justify-content-end">
            <TelephoneFill
              className="fs-6 me-2 cursorOnHover icon-dancing"
              onClick={() => {
                setShowNumber(!showNumber);
              }}
            />
            <div className="small">
              {" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark px-1"
                style={{ textDecoration: "none" }}
              >
                +34 600539809
              </a>
            </div>
          </div>
          <div className="text-end d-flex flex-row align-items-center justify-content-end">
            <EnvelopeAtFill
              className="fs-6 me-2 cursorOnHover icon-dancing"
              onClick={() => {
                setShowMail(!showMail);
              }}
            />

            <a
              href={mailtoLink}
              className="text-dark px-1"
              style={{ textDecoration: "none" }}
            >
              andreapugliesecocina@yahoo.com
            </a>
          </div>
        </div>
      </div>
      <div className="bg-Contrast  py-3">
        <Row>
          <Col className="text-center d-none d-lg-flex align-items-center justify-content-center ">
            {/* <Globe /> */}
            <img
              src="/public/assets/img/icon.png"
              alt="icon"
              style={{ width: "25px" }}
            />
            <span className="small ">andreapugliesecocina</span>
          </Col>

          <Col className="d-flex  align-items-center justify-content-around">
            <a
              href="https://www.instagram.com/andreapugliesecocina?igsh=cXM2d2xxOXMzMW1p"
              target="_blank"
              rel="noopener"
              className="iconFooter"
            >
              <Instagram />
            </a>
            <a
              href="https://www.tiktok.com/@andreapugliesecocina?_t=8r1oOxL9Qrw&_r=1"
              target="_blank"
              rel="noopener"
              className="iconFooter"
            >
              <Tiktok />
            </a>
            <a
              href="https://youtube.com/@andreapugliesecocina?si=OnLXbFGqKFJZL4dC"
              target="_blank"
              rel="noopener"
              className="iconFooter"
            >
              <Youtube />
            </a>
          </Col>
        </Row>
      </div>
      <div className="bg-to-black py-3">
        <div className="text-Light fs-small d-flex justify-content-center align-items-center">
          Made with <HeartFill className="text-DarkLight heartbeat fs-3 mx-2" />
          for my Brother, by lessismore
        </div>
      </div>
    </Container>
  );
};
export default Footer;
