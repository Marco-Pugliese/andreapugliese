import PropTypes from "prop-types";
const EmbedVideo = ({ url }) => {
  return (
    <div className="littleShadow m-4">
      <iframe
        height="565px"
        src={url}
        allowFullScreen
        className="w-100"
      ></iframe>
    </div>
  );
};
EmbedVideo.propTypes = {
  url: PropTypes.string.isRequired,
};
export default EmbedVideo;
