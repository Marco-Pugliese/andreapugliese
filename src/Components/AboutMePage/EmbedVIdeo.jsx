import PropTypes from "prop-types";
const EmbedVideo = ({ url }) => {
  return (
    <iframe
      height="500"
      style={{ width: "100%" }}
      src={url}
      className="py-1"
      allowFullScreen
    ></iframe>
  );
};
EmbedVideo.propTypes = {
  url: PropTypes.string.isRequired,
};
export default EmbedVideo;
