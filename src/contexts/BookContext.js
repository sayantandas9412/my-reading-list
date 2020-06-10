import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The Way Of The Kings", author: "Dan Loven", id: uuidv4() },
    { title: "Harry Potter", author: "J K Rowling", id: uuidv4() },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { author, title, id: uuidv4() }]);
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
