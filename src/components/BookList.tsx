import React from "react";
import BookItem from "./BookItem";
import { useBook } from "../hooks/useBook";
import { Book } from "../types/book";
import usePagination from "../hooks/usePagination";
import Pagination from "./Pagination";

const BookList: React.FC = () => {
  const { isPending, error, data, isError, favorites, toggleFavorite } =
    useBook("");
  const { currentData, maxPage, jump, currentPage } = usePagination({
    data,
    itemsPerPage: 5,
    route: "/",
  });
 
  if (isPending) return <h2>Loading...</h2>;

  if (isError) return <h3>Error{error?.message}</h3>;

  return (
    <>
      {currentData().map((book: Book) => (
        <BookItem
          key={book.id}
          book={book}
          isFavorite={favorites.includes(book.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
      <Pagination currentPage={currentPage} maxPage={maxPage} jump={jump} />
    </>
  );
};

export default BookList;
