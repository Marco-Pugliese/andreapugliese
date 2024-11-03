import { Carousel } from "react-bootstrap";
import EmbedVideo from "./EmbedVIdeo";
import { useState } from "react";
const YouTubeCarousel = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [isTouched, setIsTouched] = useState(false);

  const REEL_ID1 =
    "https://www.youtube.com/embed/Ol-8F-oZkqw?si=F82MjwaIoP3Q9ClY";
  const REEL_ID2 = "https://youtube.com/embed/tBqat_qAdL4?si=2yi_SqHNKCgLJkds";
  const REEL_ID3 = "https://youtube.com/embed/2zC8EcR5zVs?si=1Lu5qmjz1A32h-5A";
  const AllReels = [REEL_ID1, REEL_ID2, REEL_ID3];
  return (
    <Carousel className="MyCarousels">
      {AllReels.map((singleReel, index) => {
        return (
          <Carousel.Item
            key={index}
            interval={isClicked === true ? 60000 : 6000}
          >
            <div
              onTouchEnd={() => {
                setIsClicked(true);
                console.log("interval set to 60000ms");
              }}
              onMouseEnter={() => {
                setIsClicked(true);
                console.log("interval set to 60000ms");
              }}
              onMouseLeave={() => {
                console.log("interval set back at 6000");
                setIsClicked(false);
              }}
            >
              <EmbedVideo url={singleReel} />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default YouTubeCarousel;
