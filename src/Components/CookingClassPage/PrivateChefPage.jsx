// import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MenuItalian from "./MenuItalian";
import MenuSpanish from "./MenuSpanish";
import MenuEnglish from "./MenuEnglish";

const PrivateChefPage = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);
  return (
    <>
      <Container id="PrivateChef" fluid className="text-center fs-3 ">
        <Row>
          <Col className="fs-1 py-5 bg-lightGrey">
            {LangInUse === "Esp" && <>Servicio de Chef privado</>}
            {LangInUse === "Ita" && <>Servizio di Chef privato</>}
            {LangInUse === "Eng" && <>Private Chef service</>}
          </Col>
        </Row>

        <Row className="fs-4 bg-menu">
          <Col className="py-5">
            {LangInUse === "Ita" && <MenuItalian />}
            {LangInUse === "Esp" && <MenuSpanish />}
            {LangInUse === "Eng" && <MenuEnglish />}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default PrivateChefPage;
