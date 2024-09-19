import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "./Logo";
import { List, X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { SetPageAction, setLangAction } from "../Redux/Actions";
import { Link } from "react-router-dom";

const Header = () => {
  const [isClosed, setIsClosed] = useState(false);
  const dispatch = useDispatch();
  const [openNav, setOpenNav] = useState(false);
  const LangInUse = useSelector((state) => state.Lang.lang);
  const SelectedPage = useSelector((state) => state.Page.page);
  useEffect(() => {
    console.log("Lang In Use: " + LangInUse);
  }, [LangInUse]);
  useEffect(() => {
    console.log("Selected Page: " + SelectedPage);
  }, [SelectedPage]);

  return (
    <Container fluid className="text-Dark p-0" id="generalheader">
      <Row className="h-100 fs-6 d-flex align-items-center justify-content-center">
        <Col className="col-4 col-xl-5 ms-2">
          <Link
            to={"/"}
            className="nav-link"
            onClick={() => {
              dispatch(SetPageAction("Home"));
            }}
          >
            <Logo />
          </Link>
        </Col>
        <Col className="d-none d-lg-flex col-5 offset-1 justify-content-between">
          <Row
            className="w-100 fs-small d-flex align-items-center justify-content-center text-center"
            id="headermenu"
          >
            <>
              {LangInUse === "Eng" ? (
                <>
                  <Col>
                    <Link
                      to={"/aboutMe"}
                      onClick={() => {
                        dispatch(SetPageAction("AboutMe"));
                      }}
                      className="nav-link"
                    >
                      About me
                    </Link>
                  </Col>

                  <Col>
                    <Link
                      to={"/cookingClass"}
                      onClick={() => {
                        dispatch(SetPageAction("CookingClass"));
                      }}
                      className="nav-link"
                    >
                      Cooking Class
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to={"/info"}
                      onClick={() => {
                        dispatch(SetPageAction("Info"));
                      }}
                      className="nav-link"
                    >
                      Info
                    </Link>
                  </Col>
                  <Col>
                    {" "}
                    <Link
                      to={"/contacts"}
                      onClick={() => {
                        dispatch(SetPageAction("Contacts"));
                      }}
                      className="nav-link"
                    >
                      Contact
                    </Link>
                  </Col>
                </>
              ) : LangInUse === "Esp" ? (
                <>
                  <Col>
                    <Link
                      to={"/aboutMe"}
                      onClick={() => {
                        dispatch(SetPageAction("AboutMe"));
                      }}
                      className="nav-link"
                    >
                      Sobre me
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to={"/cookingClass"}
                      onClick={() => {
                        dispatch(SetPageAction("CookingClass"));
                      }}
                      className="nav-link"
                    >
                      Clases de Cocina
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to={"/info"}
                      onClick={() => {
                        dispatch(SetPageAction("Info"));
                      }}
                      className="nav-link"
                    >
                      Info
                    </Link>
                  </Col>
                  <Col>
                    {" "}
                    <Link
                      to={"/contacts"}
                      onClick={() => {
                        dispatch(SetPageAction("Contacts"));
                      }}
                      className="nav-link"
                    >
                      Contacto
                    </Link>
                  </Col>
                </>
              ) : LangInUse === "Ita" ? (
                <>
                  <Col>
                    <Link
                      to={"/aboutMe"}
                      onClick={() => {
                        dispatch(SetPageAction("AboutMe"));
                      }}
                      className="nav-link"
                    >
                      Su di me
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to={"/cookingClass"}
                      onClick={() => {
                        dispatch(SetPageAction("CookingClass"));
                      }}
                      className="nav-link"
                    >
                      Corsi di Cucina
                    </Link>
                  </Col>
                  <Col>
                    <Link
                      to={"/info"}
                      onClick={() => {
                        dispatch(SetPageAction("Info"));
                      }}
                      className="nav-link"
                    >
                      Info
                    </Link>
                  </Col>
                  <Col>
                    {" "}
                    <Link
                      to={"/contacts"}
                      onClick={() => {
                        dispatch(SetPageAction("Contacts"));
                      }}
                      className="nav-link"
                    >
                      Contatti
                    </Link>
                  </Col>
                </>
              ) : null}
            </>
          </Row>
        </Col>
        <Col
          onClick={() => {
            setIsClosed(!isClosed);
            console.log("is hamburger closed? " + isClosed);
          }}
          className="d-block d-lg-none col-5 offset-1 fw-bold"
        >
          <div
            id="hamburger"
            className="position-relative d-flex align-items-center mb-2 me-3"
          >
            <span
              className={
                isClosed === false
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
                isClosed === true
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
            ? "showMeAppear bg-smoke d-lg-none"
            : "showMeDisappear bg-smoke d-lg-none"
        }
      >
        <Row className="h-100">
          {LangInUse === "Eng" && (
            <>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/aboutMe"}
                  onClick={() => {
                    dispatch(SetPageAction("AboutMe"));
                  }}
                  className="nav-link"
                >
                  About me
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/cookingClass"}
                  onClick={() => {
                    dispatch(SetPageAction("CookingClass"));
                  }}
                  className="nav-link"
                >
                  Cooking Class
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/info"}
                  onClick={() => {
                    dispatch(SetPageAction("Info"));
                  }}
                  className="nav-link"
                >
                  Info
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/contacts"}
                  onClick={() => {
                    dispatch(SetPageAction("Contacts"));
                  }}
                  className="nav-link"
                >
                  Contacts
                </Link>
              </Col>
            </>
          )}
          {LangInUse === "Esp" && (
            <>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/aboutMe"}
                  onClick={() => {
                    dispatch(SetPageAction("AboutMe"));
                  }}
                  className="nav-link"
                >
                  Sobre me
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/cookingClass"}
                  onClick={() => {
                    dispatch(SetPageAction("CookingClass"));
                  }}
                  className="nav-link"
                >
                  Clases de Cocina
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/info"}
                  onClick={() => {
                    dispatch(SetPageAction("Info"));
                  }}
                  className="nav-link"
                >
                  Info
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/contacts"}
                  onClick={() => {
                    dispatch(SetPageAction("Contacts"));
                  }}
                  className="nav-link"
                >
                  Contacto
                </Link>
              </Col>
            </>
          )}

          {LangInUse === "Ita" && (
            <>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/aboutMe"}
                  onClick={() => {
                    dispatch(SetPageAction("AboutMe"));
                  }}
                  className="nav-link"
                >
                  Su di me
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/cookingClass"}
                  onClick={() => {
                    dispatch(SetPageAction("CookingClass"));
                  }}
                  className="nav-link"
                >
                  Corsi di Cucina
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/info"}
                  onClick={() => {
                    dispatch(SetPageAction("Info"));
                  }}
                  className="nav-link"
                >
                  Info
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/contacts"}
                  onClick={() => {
                    dispatch(SetPageAction("Contacts"));
                  }}
                  className="nav-link"
                >
                  Contatti
                </Link>
              </Col>
            </>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default Header;
