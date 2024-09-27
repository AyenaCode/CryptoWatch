import { SET_STABLE_STATE } from "../action/stable.action";

const initialState = { showStable: true };

const stableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STABLE_STATE:
      return { ...state, showStable: action.payload };
    default:
      return state;
  }
};

export default stableReducer;
