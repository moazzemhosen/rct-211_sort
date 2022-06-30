import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBooks } from '../Redux/AppReducer/actions'
import { Link } from "react-router-dom";

 export const SingleBook = () => {
  const dispatch=useDispatch()
  const { id } = useParams()
  const books = useSelector(state => state.AppReducer.books)
  const [currentBook ,setCurrentBook]=useState({})


  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks())
    }
  }, [books?.length, dispatch])

  useEffect(() => {
    if (id) {
      const temp = books.find((book) => book.id === Number(id));
      temp && setCurrentBook(temp)
    }
  }, [books, id]);
  console.log(currentBook);
  return (
    <div>
      <h1>{currentBook.id}</h1>
      <h2>{currentBook.book_name}</h2>
      <h3>{currentBook.author}</h3>
      <Link to={`/books/${currentBook.id}/edit`}>
        <button>Edit</button>{" "}
      </Link>
    </div>
  );
}

