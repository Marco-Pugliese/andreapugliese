import PropTypes from "prop-types";
const EmbedInstaVideo = ({ postUrl, lastPart }) => {
  const lastPartInside = lastPart.toString();
  const embedUrl = postUrl.replace(lastPartInside, "embed");

  return (
    <iframe
      style={{ width: "100%", minHeight: "67vh" }}
      src={embedUrl}
      allowFullScreen
    ></iframe>
  );
};
EmbedInstaVideo.propTypes = {
  postUrl: PropTypes.string.isRequired,
  lastPart: PropTypes.string.isRequired,
};
export default EmbedInstaVideo;
