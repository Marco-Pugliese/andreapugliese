import { useState } from "react";
import { Cookie } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { SetCookieAction } from "../Redux/Actions";

const CookieIcon = () => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      id="CookieIcon"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Cookie
        onClick={() => dispatch(SetCookieAction("waitingToBeAccepted"))}
        className={
          isHover === false
            ? "display-5 bg-cookie rounded-5 jump"
            : "display-5 bg-cookie rounded-5 rotate"
        }
      />
    </div>
  );
};
export default CookieIcon;
