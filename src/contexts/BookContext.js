import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "book1", author: "A book1", id: 1 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
