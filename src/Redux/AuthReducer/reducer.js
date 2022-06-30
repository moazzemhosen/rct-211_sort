import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
} from "./actions.Types";

const initialState = {
  isAuth: false,
  token: "",
  loading: false,
  error: false,
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_LOADING:
      return { ...state, loading: true, error: false };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
        isAuth: true,
      };
    case USER_LOGIN_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
