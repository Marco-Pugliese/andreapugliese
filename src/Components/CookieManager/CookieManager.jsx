import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SetCookieAction } from "../Redux/Actions";

const CookieManager = () => {
  const [show, setShow] = useState(true);
  // const LangInUse = useSelector((state) => state.Lang.lang);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal id="CookieModal" show={show} onHide={handleClose}>
        <Modal.Body>
          <Row className="d-flex justify-content-center align-items-center ">
            <Col className="text-center">
              Utilizamos cookies para ofrecerte la mejor experiencia en nuestra
              web. Pueder aprender mas sobre qué cookies utilizamos o
              desactivarlas en los ajustes
            </Col>
            <Col className="d-flex justify-content-evenly">
              <Row>
                <Col>
                  {" "}
                  <Button
                    variant="dark"
                    className="rounded-5"
                    onClick={() => {
                      dispatch(SetCookieAction("Accepted"));
                      handleClose;
                    }}
                  >
                    Aceptar
                  </Button>
                </Col>
                <Col>
                  {" "}
                  <Button
                    variant="dark"
                    className="rounded-5"
                    onClick={() => {
                      dispatch(SetCookieAction("Declined"));
                      handleClose;
                    }}
                  >
                    Rechezar
                  </Button>
                </Col>
                <Col>
                  {" "}
                  <Button variant="outline-dark bg-none" className="rounded-5">
                    Ajustes
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <div>
            <ul className="list">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  className="nav-privacy-link"
                >
                  YouTube Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href=" https://about.instagram.com/it-it/blog/announcements/instagram-community-data-policy"
                  className="nav-privacy-link"
                >
                  Instagram Privacy Policy
                </a>
              </li>
            </ul>
          </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default CookieManager;
