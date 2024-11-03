import PropTypes from "prop-types";
const EmbedInstaVideo = ({ postUrl, lastPart }) => {
  const lastPartInside = lastPart.toString();
  const embedUrl = postUrl.replace(lastPartInside, "embed");

  return (
    <iframe
      height="565px"
      src={embedUrl}
      allowFullScreen
      className="m-4 littleShadow"
    ></iframe>
  );
};
EmbedInstaVideo.propTypes = {
  postUrl: PropTypes.string.isRequired,
  lastPart: PropTypes.string.isRequired,
};
export default EmbedInstaVideo;
