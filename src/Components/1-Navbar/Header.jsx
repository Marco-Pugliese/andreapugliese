import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./Logo";
import { List, X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setLangAction } from "../Redux/Actions";

const Header = () => {
  const [clicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const [openNav, setOpenNav] = useState(false);
  const LangInUse = useSelector((state) => state.lang);
  useEffect(() => {
    console.log(LangInUse);
  }, [LangInUse]);
  return (
    <Container fluid className="text-Dark p-0" id="generalheader">
      <Row className="h-100 fs-6 d-flex align-items-center justify-content-center">
        <Col className="col-5 ms-2">
          <Logo />
        </Col>
        <Col className="d-none d-lg-flex col-5 offset-1 justify-content-between">
          <Row
            className="w-100 fs-small d-flex align-items-center justify-content-center text-center"
            id="headermenu"
          >
            <>
              {LangInUse === "Eng" ? (
                <>
                  <Col className="navElement">About me</Col>
                  <Col className="navElement">Cooking Class</Col>
                  <Col className="navElement">Info</Col>
                  <Col className="navElement">Contact</Col>
                </>
              ) : LangInUse === "Esp" ? (
                <>
                  <Col className="navElement">Sobre me</Col>
                  <Col className="navElement">Clases de Cocina</Col>
                  <Col className="navElement">Info</Col>
                  <Col className="navElement">Contacto</Col>
                </>
              ) : LangInUse === "Ita" ? (
                <>
                  <Col className="navElement">Su di me</Col>
                  <Col className="navElement">Corsi di Cucina</Col>
                  <Col className="navElement">Info</Col>
                  <Col className="navElement">Contatti</Col>
                </>
              ) : null}
            </>
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
            className="position-relative d-flex align-items-center mb-2 me-3"
          >
            <span
              className={
                clicked === false
                  ? "rotate-out-ver position-absolute end-0"
                  : "rotate-in-center position-absolute end-0"
              }
            >
              <span className="fs-1 hamburger">
                <X
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                />
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
                <List
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                />
              </span>
            </span>
          </div>
        </Col>
        <Col className="d-flex flex-column  fs-small">
          <span
            onClick={() => dispatch(setLangAction("Eng"))}
            className="flags"
          >
            🇬🇧
          </span>
          <span
            onClick={() => dispatch(setLangAction("Esp"))}
            className="flags"
          >
            🇪🇸
          </span>
          <span
            onClick={() => dispatch(setLangAction("Ita"))}
            className="flags"
          >
            🇮🇹
          </span>
        </Col>
      </Row>
      <div
        className={
          openNav === true
            ? "showMeAppear bg-smoke "
            : "showMeDisappear bg-smoke "
        }
      >
        <Row className="h-100 ">
          {LangInUse === "Eng" && (
            <>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                About me
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Cooking Class
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Info
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Contact
              </Col>
            </>
          )}
          {LangInUse === "Esp" && (
            <>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Sobre me
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Clases de Cocina
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Info
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Contacto
              </Col>
            </>
          )}

          {LangInUse === "Ita" && (
            <>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Su di me
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Corsi di Cucina
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Info
              </Col>
              <Col className="d-flex align-items-center justify-content-center navElement col-12 text-center">
                Contatti
              </Col>
            </>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default Header;
