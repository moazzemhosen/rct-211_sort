import React from 'react'

const BookCard = ({ singleBook }) => {
    // console.log(singleBook.id);
    return (
      <div key={singleBook.id}>
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
         width="100%" alt=""
        />
        <div>{singleBook.name}</div>
        <div>{singleBook.release_year}</div>
        <div>{singleBook.category}</div>
      </div>
    );
}

export default BookCard