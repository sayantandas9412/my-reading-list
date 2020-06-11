import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <li
      className="BookDetails"
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
    >
      <div className="Title">{book.title}</div>
      <div className="Author">{book.author}</div>

      <span className="TrashIcon">
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
};

export default BookDetails;
