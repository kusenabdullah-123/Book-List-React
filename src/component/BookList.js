import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetail";
const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length > 0 ? (
    <div>
      <ul>
        {books.map((item, index) => {
          return <BookDetail book={item} bookId={item.id} key={index} />;
        })}
      </ul>
    </div>
  ) : (
    <div>Books : Null</div>
  );
};
export default BookList;
