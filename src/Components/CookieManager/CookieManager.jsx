import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Check, X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { SetCookieAction } from "../Redux/Actions";

const CookieManager = () => {
  const [show, setShow] = useState(true);
  const LangInUse = useSelector((state) => state.Lang.lang);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal id="CookieModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {LangInUse === "Eng" && <>Cookie Manager</>}
            {LangInUse === "Esp" && <>Gestión de Cookies</>}
            {LangInUse === "Ita" && <>Gestione Cookie</>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {LangInUse === "Ita" && (
            <>
              Questo sito utilizza cookie di terze parti per caricare contenuti
              da piattaforme esterne come YouTube e Instagram. Accettando il
              banner dei cookie, l{"'"}utente presta il proprio consenso all
              {"'"}uso di tali cookie. Per maggiori informazioni su come questi
              servizi trattano i dati, si invita a consultare le rispettive
              informative sulla privacy:
              <div>
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
                      href="https://privacy.meta.com/policies/privacy-policy/"
                      className="nav-privacy-link"
                    >
                      Instagram Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              È possibile modificare le preferenze sui cookie in qualsiasi
              momento attraverso l{"'"}icona in basso.
            </>
          )}
          {LangInUse === "Esp" && (
            <>
              Este website utiliza cookies de terceros para cargar contenido de
              plataformas externas como YouTube e Instagram. Al aceptar el
              banner de cookies, el usuario da su consentimiento para el uso de
              dichas cookies. Para obtener más información sobre cómo estos
              servicios procesan los datos, se invita a consultar sus
              respectivas políticas de privacidad.
              <div>
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
                      href="https://privacy.meta.com/policies/privacy-policy/"
                      className="nav-privacy-link"
                    >
                      Instagram Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              Es posible modificar las preferencias de cookies en cualquier
              momento a través del icono en la parte inferior.
            </>
          )}
          {LangInUse === "Eng" && (
            <>
              This website uses third-party cookies to load content from
              external platforms like YouTube and Instagram. By accepting the
              cookie banner, the user consents to the use of these cookies. For
              more information on how these services handle data, please refer
              to their respective privacy policies.
              <div>
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
                      href="https://privacy.meta.com/policies/privacy-policy/"
                      className="nav-privacy-link"
                    >
                      Instagram Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              You can modify your cookie preferences at any time through the
              icon at the bottom.
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              dispatch(SetCookieAction("Accepted"));
              handleClose;
            }}
          >
            <Check className="fs-2 p-0" />
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(SetCookieAction("Declined"));
              handleClose;
            }}
          >
            <X className="fs-2 p-0" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CookieManager;
