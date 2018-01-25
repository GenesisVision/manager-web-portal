import { profileEditActionTypes } from "../../actions/profileActions/profileEditActions";
import { profileViewActionTypes } from "../../actions/profileActions/profileViewActions";

const initialState = {
  isFetching: false,
  errorMessage: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileEditActionTypes.request:
    case profileViewActionTypes.request:
      return {
        ...state,
        isFetching: true
      };
    case profileViewActionTypes.success:
      return {
        ...state,
        isFetching: false,
        profile: action.profile,
        errorMessage: ""
      };
    case profileViewActionTypes.failure:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      };
    case profileEditActionTypes.success:
      return {
        ...state,
        isFetching: false,
        profile: action.profile,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export default profileReducer;
