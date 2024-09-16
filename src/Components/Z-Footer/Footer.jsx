import { Container } from "react-bootstrap";
import Logo from "../1-Navbar/Logo";
import {
  EnvelopeAtFill,
  HeartFill,
  TelephoneFill,
} from "react-bootstrap-icons";

const Footer = () => {
  const today = new Date();
  const thisYear = today.getFullYear();
  return (
    <Container fluid className="p-0 bg-Darker">
      <div className="d-flex justify-content-center text-Dark bg-light  py-3">
        <div className="d-flex flex-column">
          <div className="text-start">
            <div className="text-end fs-small">
              <span className="fs-small">©{thisYear}</span>
            </div>
            <Logo />
          </div>
          <div className="text-end">
            <TelephoneFill className="fs-6 me-2" /> +00 12345678910
          </div>
          <div className="text-end">
            <EnvelopeAtFill className="fs-6 me-2" />
            andreapugliesecocina@yahoo.com
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
