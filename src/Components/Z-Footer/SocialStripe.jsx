import { Col, Row } from "react-bootstrap";
import { Instagram, Tiktok, Youtube } from "react-bootstrap-icons";

const SocialStripe = () => {
  return (
    <div className="bg-Contrast  py-3">
      <Row>
        <Col className="text-center d-none d-lg-flex align-items-center justify-content-center ">
          <img
            src="/public/assets/img/icon.png"
            alt="icon"
            style={{ width: "25px" }}
          />
          <span className="small ">andreapugliesecocina</span>
        </Col>

        <Col className="d-flex  align-items-center justify-content-around">
          <a
            href="https://www.instagram.com/andreapugliesecocina?igsh=cXM2d2xxOXMzMW1p"
            target="_blank"
            rel="noopener"
            className="iconFooter"
          >
            <Instagram />
          </a>
          <a
            href="https://www.tiktok.com/@andreapugliesecocina?_t=8r1oOxL9Qrw&_r=1"
            target="_blank"
            rel="noopener"
            className="iconFooter"
          >
            <Tiktok />
          </a>
          <a
            href="https://youtube.com/@andreapugliesecocina?si=OnLXbFGqKFJZL4dC"
            target="_blank"
            rel="noopener"
            className="iconFooter"
          >
            <Youtube />
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default SocialStripe;
