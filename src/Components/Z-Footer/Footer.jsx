import { Container } from "react-bootstrap";
import Logo from "../1-Navbar/Logo";
import { EnvelopeAtFill, Whatsapp } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetPageAction } from "../Redux/Actions";
import SocialStripe from "./SocialStripe";
import DedicateTo from "./DedicateTo";

const Footer = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);
  const phoneNumber = "34600539809";

  const messageEng = "Hello! I'm intrested in your services";
  const whatsappLinkEng = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    messageEng
  )}`;
  const messageEsp = "¡Hola! Me gustaría saber más sobre sus servicios.";
  const whatsappLinkEsp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    messageEsp
  )}`;
  const messageIta = "Ciao! Mi piacerebbe sapere di più sui servizi che offri";
  const whatsappLinkIta = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    messageIta
  )}`;
  //
  const email = "andreapugliesecocina@yahoo.com";
  // English mail
  const subjectEng = "Info request";
  const bodyEng = "Hello! I'd like to know more about your services.";
  const mailtoLinkEng = `mailto:${email}?subject=${encodeURIComponent(
    subjectEng
  )}&body=${encodeURIComponent(bodyEng)}`;
  // Spanish mail
  const subjectEsp = "Solicitud de información";
  const bodyEsp = "¡Hola! Me gustaría saber más sobre sus servicios.";
  const mailtoLinkEsp = `mailto:${email}?subject=${encodeURIComponent(
    subjectEsp
  )}&body=${encodeURIComponent(bodyEsp)}`;
  // Italian mail
  const subjectIta = "Richiesta Informazioni";
  const bodyIta = "Ciao! Mi piacerebbe sapere di più sui servizi che offri";
  const mailtoLinkIta = `mailto:${email}?subject=${encodeURIComponent(
    subjectIta
  )}&body=${encodeURIComponent(bodyIta)}`;
  //
  const [showNumber, setShowNumber] = useState(true);
  const [showMail, setShowMail] = useState(true);
  const today = new Date();
  const thisYear = today.getFullYear();
  const dispatch = useDispatch();
  return (
    <Container fluid className="p-0 bg-dark">
      <div className="ShadowEffectTop py-2">
        <SocialStripe />
      </div>

      <div className="d-flex text-Dark bg-smoke ShadowLightEffect">
        <div className="d-flex flex-lg-row flex-column w-100 justify-content-around">
          <div className="p-2">
            <div className="text-end fs-small">
              <span className="fs-small">©{thisYear}</span>
            </div>
            <div className="small">
              <Link
                to={"/"}
                onClick={() => {
                  dispatch(SetPageAction("Home"));
                }}
                className="nav-link"
              >
                <Logo />
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column h-100 justify-content-center">
            <div className="d-flex align-items-center p-2">
              <Whatsapp
                className="fs-6 me-2 cursorOnHover icon-dancing"
                onClick={() => {
                  setShowNumber(!showNumber);
                }}
              />
              <div className="small">
                {" "}
                <a
                  href={
                    LangInUse === "Eng"
                      ? whatsappLinkEng
                      : LangInUse === "Ita"
                      ? whatsappLinkIta
                      : LangInUse === "Esp"
                      ? whatsappLinkEsp
                      : null
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark px-1"
                  style={{ textDecoration: "none" }}
                >
                  +34 600539809
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center p-2">
              <EnvelopeAtFill
                className="fs-6 me-2 cursorOnHover icon-dancing"
                onClick={() => {
                  setShowMail(!showMail);
                }}
              />

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
                className="text-dark px-1"
                style={{ textDecoration: "none" }}
              >
                andreapugliesecocina@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="ShadowEffectBott {
"
      >
        <DedicateTo />
      </div>
    </Container>
  );
};
export default Footer;
