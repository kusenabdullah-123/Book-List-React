import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading Books</h1>
      <p>Books : {books.length}</p>
    </div>
  );
};
export default Navbar;
