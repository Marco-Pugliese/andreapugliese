const HeroSection = () => {
  return (
    <div id="generalHero">
      <div className="h-100 w-100 d-flex align-items-center justify-content-center">
        <div
          id="heroLine"
          className="w-100 text-center p-2"
        >
          <div className="fw-bold fs-2">PRIVATE CHEF ANDREA PUGLIESE</div>
          <div className="fs-6">
            authenticity and Italian elegance for an unparalleled culinary experience.
          </div>
          <span
            className="fs-small rounded-4 px-4 py-2"
            id="learnmoreButton"
          >
            LEARN MORE
          </span>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
