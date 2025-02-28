const HeroSection = () => {
  return (
    <div id="generalHero" className="p-0 position-relative filterSwap">
      <div className="h-100 filterblue">
        <div className="opacityChange position-absolute top-50 p-0 w-100 h-100 translate-middle-y">
          <div className="position-absolute top-50 p-0 w-100 translate-middle-y d-flex justify-content-center align-items-center">
            <div className="phraseContainer">
              <span className="puff-in-center1 shadow-Light">
                ANDREA PUGLIESE - CHEF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
