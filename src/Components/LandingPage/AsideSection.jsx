import { Col, Container, Row } from "react-bootstrap";

const AsideSection = () => {
  return (
    <div id="Aside">
      <div className="w-100 text-center pt-5 fs-3 ">
        <section>
          <div className="py-4">
            <span className="text-light">
              Looking to book your next event? I am just a click away!
            </span>
          </div>
          <div className="my-4 fs-small">
            <span
              id="requestButton"
              className="bg-white px-5 py-3 rounded-3 fs-small"
            >
              Request a quote Now!
            </span>
          </div>
        </section>
        <section>
          <Container fluid>
            <Row className="mt-5">
              <Col className=" col-4 col-lg-3 col-xxl-2">
                <div className="chef1 p-4 same-size"></div>
              </Col>

              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef2 p-4 same-size"></div>
              </Col>

              <Col className="same-size  col-4 col-lg-3 col-xxl-2">
                <div className="chef3 p-4 same-size"></div>
              </Col>

              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef4 p-4 same-size"></div>
              </Col>
              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef5 p-4 same-size"></div>
              </Col>
              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef6 p-4 same-size"></div>
              </Col>

              <Col className=" col-4 col-lg-3 col-xxl-2">
                <div className="chef1 p-4 same-size"></div>
              </Col>

              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef2 p-4 same-size"></div>
              </Col>

              <Col className="same-size  col-4 col-lg-3 col-xxl-2">
                <div className="chef3 p-4 same-size"></div>
              </Col>

              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef4 p-4 same-size"></div>
              </Col>
              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef5 p-4 same-size"></div>
              </Col>
              <Col className="same-size col-4 col-lg-3 col-xxl-2">
                <div className="chef6 p-4 same-size"></div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};
export default AsideSection;
