import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
const BookDetail = ({ book: { title, author }, bookId }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li>
      <div>Title : {title}</div>
      <div>Author : {author}</div>
      <button
        onClick={() => {
          removeBook(bookId);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default BookDetail;
