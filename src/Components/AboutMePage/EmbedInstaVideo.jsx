import PropTypes from "prop-types";
const EmbedInstaVideo = ({ postUrl, lastPart }) => {
  const lastPartInside = lastPart.toString();
  const embedUrl = postUrl.replace(lastPartInside, "embed");

  return (
    <div className="littleShadow m-4">
      <iframe
        height="565px"
        src={embedUrl}
        allowFullScreen
        className="w-100"
      ></iframe>
    </div>
  );
};
EmbedInstaVideo.propTypes = {
  postUrl: PropTypes.string.isRequired,
  lastPart: PropTypes.string.isRequired,
};
export default EmbedInstaVideo;
