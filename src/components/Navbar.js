import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const p = books.length > 1 ? "books" : "book";
  return (
    <div className="Navbar">
      <h1>My Reading List</h1>
      {books.length ? (
        <p>
          Currently you have {books.length} {p} to go through . . .
        </p>
      ) : null}
    </div>
  );
};

export default Navbar;
