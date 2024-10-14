import { Container } from "react-bootstrap";
import Logo from "../1-Navbar/Logo";
import {
  EnvelopeAtFill,
  HeartFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { useState } from "react";

const Footer = () => {
  const [showNumber, setShowNumber] = useState(false);
  const [showMail, setShowMail] = useState(false);
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
              className="fs-6 me-2 cursorOnHover shake-left "
              onClick={() => {
                setShowNumber(!showNumber);
              }}
            />
            {showNumber && <div className="small"> +00112233112233</div>}
          </div>
          <div className="text-end d-flex flex-row align-items-center justify-content-end">
            <EnvelopeAtFill
              className="fs-6 me-2 cursorOnHover jello-horizontal"
              onClick={() => {
                setShowMail(!showMail);
              }}
            />
            {showMail && (
              <div className="small">andreapugliesecocina@yahoo.com</div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-to-black py-3">
        <div className="text-Light fs-small d-flex justify-content-center align-items-center">
          Made with <HeartFill className="text-DarkLight heartbeat fs-3 mx-2" />{" "}
          for my Brother, by lessismore
        </div>
      </div>
    </Container>
  );
};
export default Footer;
