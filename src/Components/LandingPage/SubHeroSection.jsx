import { Col, Container, Row } from 'react-bootstrap';

const SubHeroSection = () => {
  return (
    <div
      id="subHero"
      className="text-light"
    >
      <div className="w-100 h-100">
        <Container>
          <Row className="py-5">
            <Col className="text-end col-12 col-lg-4 col-list">
              <div className="py-2 mb-3 fs-5">Seated Dinners</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur,
                iste, eius illo est rem ab fuga esse voluptas reiciendis culpa veniam
                deserunt officiis similique soluta at molestiae amet cupiditate!
              </div>
              <div
                id="chef1"
                className="w-100 mt-4 rounded-3"
              ></div>
            </Col>
            <Col className="text-end col-12 col-lg-4 col-list">
              <div className="py-2 mb-3 fs-5">Cocktail Parties</div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi corrupti
                doloribus totam beatae, quod at veritatis aperiam explicabo tempora
                voluptas illo reprehenderit quia cum repudiandae! Sequi in quo nihil cum?
              </div>
              <div
                id="chef2"
                className="w-100 mt-4 rounded-3"
              ></div>
            </Col>
            <Col className="text-end col-12 col-lg-4 col-list">
              <div className="py-2 mb-3 fs-5">Personal Chef</div>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel veniam
                dolore aperiam distinctio ipsa quas necessitatibus sapiente eveniet
                dolorum! Ullam autem enim ipsam minus nemo sequi, provident consectetur
                consequatur praesentium.
              </div>
              <div
                id="chef3"
                className="w-100 mt-4 rounded-3"
              ></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default SubHeroSection;
