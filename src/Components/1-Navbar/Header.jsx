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
  // const SelectedPage = useSelector((state) => state.Page.page);

  //

  const [hide, setIsToBeHidden] = useState(true);
  const changedLoadedTrue = () => {
    setIsToBeHidden(true);
    console.log("do i have to hide this part?" + hide);
  };
  const changedLoadedFalse = () => {
    setIsToBeHidden(false);
    console.log("do i have to hide this part?" + hide);
  };
  const changeStatusTrue = () => {
    setTimeout(changedLoadedTrue, 500);
  };
  const changeStatusFalse = () => {
    setTimeout(changedLoadedFalse, 500);
  };
  useEffect(() => {
    openNav === false ? changeStatusFalse() : null;
    openNav === true ? changeStatusTrue() : null;
  }, [openNav]);
  //

  return (
    <Container fluid className="text-Dark p-0" id="generalheader">
      <Row className="fs-4 d-flex align-items-center mh-10">
        <Col className="col-4 col-xl-5 ms-2">
          <Link
            to={"/"}
            onClick={() => {
              dispatch(SetPageAction("Home"));
              {
                openNav === true
                  ? () => {
                      setOpenNav(!openNav);
                      setIsClosed(!isClosed);
                    }
                  : null;
              }
            }}
            className="nav-link w-100"
          >
            <Logo />
          </Link>
        </Col>
        <Col className="d-none d-lg-flex col-5 offset-1 justify-content-between">
          <Row
            className="w-100 fs-small d-flex align-items-center justify-content-center text-center"
            id="headermenu"
          >
            {/* FISARMONICA */}
            <>
              {LangInUse === "Eng" ? (
                <>
                  <Col>
                    <Link
                      to={"/aboutMe"}
                      onClick={() => {
                        dispatch(SetPageAction("AboutMe"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
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
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Cooking Class & Private Chef
                    </Link>
                  </Col>

                  <Col>
                    {" "}
                    <Link
                      to={"/contacts"}
                      onClick={() => {
                        dispatch(SetPageAction("Contacts"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Info & Contact
                    </Link>
                  </Col>
                </>
              ) : LangInUse === "Esp" ? (
                <>
                  <Col
                    className={
                      hide === false
                        ? "d-none"
                        : "d-flex align-items-center justify-content-center col-12 text-center"
                    }
                  >
                    <Link
                      to={"/aboutMe"}
                      onClick={() => {
                        dispatch(SetPageAction("AboutMe"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Sobre me
                    </Link>
                  </Col>
                  <Col
                    className={
                      hide === false
                        ? "d-none"
                        : "d-flex align-items-center justify-content-center col-12 text-center"
                    }
                  >
                    <Link
                      to={"/cookingClass"}
                      onClick={() => {
                        dispatch(SetPageAction("CookingClass"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Clases de Cocina Y Chef Privado
                    </Link>
                  </Col>

                  <Col
                    className={
                      hide === false
                        ? "d-none"
                        : "d-flex align-items-center justify-content-center col-12 text-center"
                    }
                  >
                    {" "}
                    <Link
                      to={"/contacts"}
                      onClick={() => {
                        dispatch(SetPageAction("Contacts"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Info & Contacto
                    </Link>
                  </Col>
                </>
              ) : LangInUse === "Ita" ? (
                <>
                  <Col
                    className={
                      hide === false
                        ? "d-none"
                        : "d-flex align-items-center justify-content-center col-12 text-center"
                    }
                  >
                    <Link
                      to={"/aboutMe"}
                      onClick={() => {
                        dispatch(SetPageAction("AboutMe"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Su di me
                    </Link>
                  </Col>
                  <Col
                    className={
                      hide === false
                        ? "d-none"
                        : "d-flex align-items-center justify-content-center col-12 text-center"
                    }
                  >
                    <Link
                      to={"/cookingClass"}
                      onClick={() => {
                        dispatch(SetPageAction("CookingClass"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Corsi di Cucina & Chef Privato
                    </Link>
                  </Col>

                  <Col
                    className={
                      hide === false
                        ? "d-none"
                        : "d-flex align-items-center justify-content-center col-12 text-center"
                    }
                  >
                    {" "}
                    <Link
                      to={"/contacts"}
                      onClick={() => {
                        dispatch(SetPageAction("Contacts"));
                        {
                          openNav === true
                            ? () => {
                                setOpenNav(!openNav);
                                setIsClosed(!isClosed);
                              }
                            : null;
                        }
                      }}
                      className="nav-link"
                    >
                      Info & Contatti
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
        <Col className="d-flex flex-column align-items-center fs-6">
          <span
            onClick={() => dispatch(setLangAction("Eng"))}
            className="flags "
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
              <Col
                className={
                  hide === false
                    ? "d-none"
                    : "d-flex align-items-center justify-content-center col-12 text-center"
                }
              >
                <Link
                  to={"/aboutMe"}
                  onClick={() => {
                    dispatch(SetPageAction("AboutMe"));
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
                  }}
                  className="nav-link"
                >
                  About me
                </Link>
              </Col>
              <Col
                className={
                  hide === false
                    ? "d-none"
                    : "d-flex align-items-center justify-content-center col-12 text-center"
                }
              >
                <Link
                  to={"/cookingClass"}
                  onClick={() => {
                    dispatch(SetPageAction("CookingClass"));
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
                  }}
                  className="nav-link"
                >
                  Cooking Class & Private Chef
                </Link>
              </Col>

              <Col
                className={
                  hide === false
                    ? "d-none"
                    : "d-flex align-items-center justify-content-center col-12 text-center"
                }
              >
                <Link
                  to={"/contacts"}
                  onClick={() => {
                    dispatch(SetPageAction("Contacts"));
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
                  }}
                  className="nav-link"
                >
                  Info & Contacts
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
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
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
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
                  }}
                  className="nav-link"
                >
                  Clases de Cocina Y Chef Privado
                </Link>
              </Col>

              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/contacts"}
                  onClick={() => {
                    dispatch(SetPageAction("Contacts"));
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
                  }}
                  className="nav-link"
                >
                  Info & Contacto
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
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
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
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
                  }}
                  className="nav-link"
                >
                  Corsi di Cucina & Chef Privato
                </Link>
              </Col>

              <Col className="d-flex align-items-center justify-content-center col-12 text-center">
                <Link
                  to={"/contacts"}
                  onClick={() => {
                    dispatch(SetPageAction("Contacts"));
                    setOpenNav(!openNav);
                    setIsClosed(!isClosed);
                  }}
                  className="nav-link"
                >
                  Info & Contatti
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
