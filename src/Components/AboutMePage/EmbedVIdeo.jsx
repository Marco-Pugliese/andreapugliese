import PropTypes from "prop-types";
const EmbedVideo = ({ url }) => {
  return (
    <iframe
      height="565px"
      src={url}
      className="littleShadow m-4"
      allowFullScreen
    ></iframe>
  );
};
EmbedVideo.propTypes = {
  url: PropTypes.string.isRequired,
};
export default EmbedVideo;
