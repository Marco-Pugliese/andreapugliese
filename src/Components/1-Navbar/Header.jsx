import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  const [clicked, setIsClicked] = useState(false);

  return (
    <Container fluid className="bg-light text-dark" id="generalheader">
      <Row className="h-100 fs-6 d-flex align-items-center justify-content-center">
        <Col className="col-6">
          <img
            src="./assets/img/logo-andreapugliesecocina.png"
            alt=""
            id="img-logo"
          />
        </Col>
        <Col className="d-none d-lg-flex col-5 offset-1">
          <Row className="w-100 fs-small">
            <Col>About Me</Col>
            <Col>Menu</Col>
            <Col>Info & Pricing</Col>
            <Col>Get In Touch</Col>
            <Col>InstaICON</Col>
          </Row>
        </Col>
        <Col
          onClick={() => {
            setIsClicked(!clicked);
            console.log(clicked);
          }}
          className="d-block d-lg-none text-end fw-bold"
        >
          <div className="position-relative me-5 zoomIt">
            <span
              className={
                clicked === true
                  ? "rotate-out-ver position-absolute"
                  : "rotate-in-center position-absolute"
              }
            >
              <span className="fs-2">X</span>
            </span>
            <span
              className={
                clicked === false
                  ? "rotate-out-ver position-absolute"
                  : "rotate-in-center2 position-absolute"
              }
            >
              <span className="fs-2 rotate-90">lll</span>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
