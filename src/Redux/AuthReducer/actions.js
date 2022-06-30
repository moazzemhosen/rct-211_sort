import axios from "axios";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
} from "./actions.Types";

export const login = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGIN_LOADING });
  return axios({
    method: "POST",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((res) => dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data }))
    .catch((er) => dispatch({ type: USER_LOGIN_ERROR }));
};
