import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookForm />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
