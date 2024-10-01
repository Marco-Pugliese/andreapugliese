import Logo from "../1-Navbar/Logo";

const Loading = () => {
  return (
    <div id="loader">
      <div className="slide-in-blurred-top ">
        <div className="slide-out-blurred-bottom">
          <Logo />
        </div>
      </div>
    </div>
  );
};
export default Loading;
