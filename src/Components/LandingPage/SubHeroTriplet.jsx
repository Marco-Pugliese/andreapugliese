import { Col, Row } from "react-bootstrap";
import SubHeroTripletMD from "./SubHeroTripletMD";
import SubHeroTripletSM from "./SubHeroTripletSM";

const SubHeroTriplet = () => {
  return (
    <Row className="text-center text-Dark p-0 m-0">
      <Col className="col-12 d-none d-lg-flex m-o p-o">
        <SubHeroTripletMD />
      </Col>
      <Col className="col-12 d-flex d-lg-none m-o p-o">
        <SubHeroTripletSM />
      </Col>
    </Row>
  );
};

export default SubHeroTriplet;
