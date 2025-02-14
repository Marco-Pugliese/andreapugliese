import { SET_COOKIE } from "../Actions";

const initialState = {
  isAccepted: false,
};

const Lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return {
        isAccepted: action.payload,
      };

    default:
      return state;
  }
};
export default Lang;
