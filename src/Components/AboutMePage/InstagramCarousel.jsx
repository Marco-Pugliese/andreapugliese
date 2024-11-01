import { Carousel } from "react-bootstrap";
import EmbedInstaVideo from "./EmbedInstaVideo";
import { useState } from "react";

const InstagramCarousel = () => {
  const [isClicked, setIsClicked] = useState(false);
  const Video1 = {
    url: "https://www.instagram.com/reel/CuCn0hNISYo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    finalPart: "?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  };
  const Video2 = {
    url: "https://www.instagram.com/reel/CuCn0hNISYo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    finalPart: "?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  };
  const AllVideo = [Video1, Video2];

  return (
    <Carousel className="MyCarousels">
      {AllVideo.map((singleVideo, index) => {
        return (
          <Carousel.Item
            key={index}
            onMouseEnter={() => {
              setIsClicked(true);
            }}
            onMouseLeave={() => setIsClicked(false)}
            interval={isClicked === true ? null : 5000}
          >
            <EmbedInstaVideo
              postUrl={singleVideo.url}
              lastPart={singleVideo.finalPart}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default InstagramCarousel;
