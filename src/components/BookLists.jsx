import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BookCard from './BookCard'
import styled from "styled-components";
import { getBooks } from '../Redux/AppReducer/actions';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const BookLists = () => {
   const dispatch = useDispatch();
  const books = useSelector((state) => state.AppReducer.books);
  console.log(books);
  const [searchParams] = useSearchParams();
  const location = useLocation()
  
   useEffect(() => {
     if (books.length === 0 || location.search) {
      
       const sortBy = searchParams.get('sortBy')
        const getBooksParams = {
          params: {
            category: searchParams.getAll("category"),
            _sort: sortBy && "release_year",
            _order: sortBy,
          },
       };
        dispatch(getBooks(getBooksParams));
     }
   }, [location.search ]);
  return (
      <>
          {books.length > 0 && books.map((singleBook) => {
              return (
                <BookCardWrapper key={singleBook.id}>

                  <Link to={`/books/${singleBook.id}`}>
                    <BookCard  singleBook={singleBook} />
                  </Link>
                </BookCardWrapper>
              );
          })}
      </>
  )
}

export default BookLists

const BookCardWrapper=styled.div`
    border: 1px solid blue;
    padding: 5px;
    width: 310px;
`