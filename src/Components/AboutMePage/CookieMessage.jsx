import { useDispatch, useSelector } from "react-redux";
import { SetCookieAction } from "../Redux/Actions";

const CookieMessage = () => {
  const LangInUse = useSelector((state) => state.Lang.lang);
  const dispatch = useDispatch();
  return (
    <div className="h-100 d-flex aling-items-center justify-content-center flex-column">
      <div>
        {LangInUse === "Ita" &&
          "Per visualizzare i video, è necessario accettare i cookies."}
        {LangInUse === "Eng" &&
          "To view the videos, cookies need to be accepted."}
        {LangInUse === "Esp" &&
          "Para ver los videos, es necesario aceptar las cookies."}
      </div>
      <div onClick={() => dispatch(SetCookieAction("waitingToBeAccepted"))}>
        {LangInUse === "Ita" && "Clicca"}
        {LangInUse === "Eng" && "Click"}
        {LangInUse === "Esp" && "Haz clic en"}
        <span className="bg-warning text-dark px-2 py-1 mx-2 rounded-2 Qui">
          {LangInUse === "Ita" && "QUI"}
          {LangInUse === "Eng" && "HERE"}
          {LangInUse === "Esp" && "AQUI'"}
        </span>
        {LangInUse === "Ita" && "per accettarli"}
        {LangInUse === "Eng" && "to accept them"}
        {LangInUse === "Esp" && "para aceptarlas"}
      </div>
    </div>
  );
};
export default CookieMessage;
