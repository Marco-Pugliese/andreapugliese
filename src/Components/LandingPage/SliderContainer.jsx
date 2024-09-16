import { Container } from "react-bootstrap";

const SliderContainer = () => {
  return (
    <>
      <section id="sliderContainer">
        <Container fluid id="slide" className="p-0 position-relative">
          <div className="row1 d-flex flex-row">
            <div className="slidingbg">
              <div className="w-100 h-100 chef1"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 chef2"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 chef3"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 chef4"></div>
            </div>
          </div>
          <div className="row2 d-flex flex-row">
            <div className="slidingbg">
              <div className="w-100 h-100 chef5"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 chef6"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 chef3"></div>
            </div>
            <div className="slidingbg">
              <div className="w-100 h-100 chef5"></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default SliderContainer;
