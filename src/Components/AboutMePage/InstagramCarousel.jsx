import { Carousel } from "react-bootstrap";
import EmbedInstaVideo from "./EmbedInstaVideo";
import { useState } from "react";

const InstagramCarousel = () => {
  const [isClicked, setIsClicked] = useState(false);
  const finalPart = "?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
  const Video1 = {
    url: "https://www.instagram.com/reel/CuCn0hNISYo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  };
  const Video2 = {
    url: "https://www.instagram.com/reel/C2Dm12nx8oL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  };

  const Video3 = {
    url: "https://www.instagram.com/reel/C92IfrNohUU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  };
  const Video4 = {
    url: "https://www.instagram.com/reel/CzUFTppodcX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  };
  const Video5 = {
    url: "https://www.instagram.com/reel/CnUtLAoK_Cr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  };
  const AllVideo = [Video1, Video2, Video3, Video4, Video5];

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
            interval={isClicked === true ? 60000 : 6000}
          >
            <div
              onMouseEnter={() => {
                setIsClicked(true);
                console.log("interval set to 60000ms");
              }}
              onMouseLeave={() => {
                console.log("interval set back at 6000");
                setIsClicked(false);
              }}
              onTouchEnd={() => {
                setIsClicked(true);
                console.log("end from instagram carousel.item");
              }}
            >
              <EmbedInstaVideo postUrl={singleVideo.url} lastPart={finalPart} />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default InstagramCarousel;
