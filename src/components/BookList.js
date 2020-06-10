import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  const bookList = books.length ? (
    <ul className="BookList">
      {books.map((book) => {
        return <BookDetails book={book} key={book.id} />;
      })}
    </ul>
  ) : (
    <div className="Empty"> You have nothing to read as of now...</div>
  );

  return <div className="BookList">{bookList}</div>;
};

export default BookList;
