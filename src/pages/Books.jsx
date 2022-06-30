import React from 'react'
import FilterSort from "../components/FilterSort";
import BookLists from "../components/BookLists";
import styled from "styled-components"

 export const Books = () => {
 
  return (
    <div>
      <h2>Books</h2>
      <BookapageWrapper>
         <FilterSortWrapper>
                <FilterSort />
         </FilterSortWrapper>
         <BookListsWrapper>
                 <BookLists  />
         </BookListsWrapper>
      </BookapageWrapper>
    </div>
  );
}



const BookapageWrapper=styled.div`
  display:flex;
`
const FilterSortWrapper=styled.div`
  width:300px;
  border:1px solid red; 
`
const BookListsWrapper = styled.div`
width:100%;
  border: 1px solid black;
  display:gird;
  grid-template-columns:repeat(auto-fit,minmax(310px, max-content));
  grid-gap:15px;
  justify-content:center;
  padding:initial;
`;