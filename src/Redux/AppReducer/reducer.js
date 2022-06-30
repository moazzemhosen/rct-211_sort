import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actions.Types";

const init = {
    books: [],
    isLoading: false,
    isError:false

}
export const AppReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
        isLoading: false,
        isError: false,
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};