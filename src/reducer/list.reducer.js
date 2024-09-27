import { SET_LIST_DISPLAY } from "../action/list.action";

const initialState = { showList: true };

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_DISPLAY:
      return { ...state, showList: action.payload };
    default:
      return state;
  }
};

export default listReducer;
