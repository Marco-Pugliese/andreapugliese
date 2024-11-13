import { SET_LANG } from "../Actions";

const initialState = {
  lang: "Esp",
};

const Lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return {
        lang: action.payload,
      };

    default:
      return state;
  }
};
export default Lang;
