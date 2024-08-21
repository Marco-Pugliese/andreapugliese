import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./Logo";
import { Instagram, List, X } from "react-bootstrap-icons";

const Header = () => {
  const [clicked, setIsClicked] = useState(false);

  return (
    <Container fluid className="bg-light text-dark" id="generalheader">
      <Row className="h-100 fs-6 d-flex align-items-center justify-content-center">
        <Col className="col-6">
          <Logo />
        </Col>
        <Col className="d-none d-lg-flex col-5 offset-1 justify-content-between">
          <Row
            className="w-100 fs-small d-flex align-items-center justify-content-center text-center"
            id="headermenu"
          >
            <Col>About Me</Col>
            <Col>Menu</Col>
            <Col>Info & Pricing</Col>
            <Col>Get In Touch</Col>
            <Col>
              <Instagram />
            </Col>
          </Row>
        </Col>
        <Col
          onClick={() => {
            setIsClicked(!clicked);
            console.log(clicked);
          }}
          className="d-block d-lg-none col-5 offset-1 fw-bold"
        >
          <div
            id="hamburger"
            className="position-relative d-flex align-items-center me-5"
          >
            <span
              className={
                clicked === false
                  ? "rotate-out-ver position-absolute end-0"
                  : "rotate-in-center position-absolute end-0"
              }
            >
              <span className="fs-1 hamburger">
                <X />
              </span>
            </span>
            <span
              className={
                clicked === true
                  ? "rotate-out-ver position-absolute end-0"
                  : "rotate-in-center position-absolute end-0"
              }
            >
              <span className="fs-2 hamburger">
                <List className="" />
              </span>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
