import { Container } from "react-bootstrap";

const SliderContainer = () => {
  return (
    <>
      <section id="sliderContainer">
        <Container fluid id="slide" className="p-0 position-relative">
          <div className="row1 d-flex flex-row align-items-center w-100 h-100">
            <div className="slidingbg">
              <div className="chef1 w-100 h-100"></div>
            </div>
            <div className="slidingbg">
              <div className="chef2 w-100 h-100"></div>
            </div>
            <div className="slidingbg">
              <div className="chef3 w-100 h-100"></div>
            </div>
            <div className="slidingbg">
              <div className="chef4 w-100 h-100"></div>
            </div>
          </div>

          <div className="row2 d-flex flex-row align-items-center w-100 h-100">
            <div className="slidingbg">
              <div className="chef5 w-100 h-100"></div>
            </div>
            <div className="slidingbg">
              <div className="chef2 w-100 h-100"></div>
            </div>
            <div className="slidingbg">
              <div className="chef3 w-100 h-100"></div>
            </div>
            <div className="slidingbg">
              <div className="chef4 w-100 h-100"></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default SliderContainer;
