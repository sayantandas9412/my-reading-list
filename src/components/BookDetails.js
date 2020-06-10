import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li className="BookDetails" onClick={() => removeBook(book.id)}>
      <div className="Title">{book.title}</div>
      <div className="Author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
