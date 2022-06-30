import axios from "axios"
import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actions.Types"


 export const getBooks = (params) => (dispatch) => {
    dispatch({ type: GET_BOOKS_REQUEST })
     axios
       .get("/books",params)
       .then((res) => dispatch({ type: GET_BOOKS_SUCCESS,payload:res.data }))
       .catch((e) => dispatch({ type: GET_BOOKS_FAILURE }));
}