import React, { useEffect } from "react";
import BookItem from "./BookItem";
import { useBook } from "../hooks/useBook";
import { Book } from "../types/book";
import usePagination from "../hooks/usePagination";



const BookList: React.FC = () => {
    const { isPending, error, data, isError,favorites,toggleFavorite,bookList } = useBook('')

    const {currentData} = usePagination(data)
    if(isPending) return <h2>Loading...</h2>

    if(isError) return <h3>Error{error?.message}</h3>
    
        
        console.log('renderrList',currentData())
        return <>
                {
                currentData().map((book: Book) => (<BookItem key={book.id} book={book} isFavorite={favorites.includes(book.id)}
                    toggleFavorite={toggleFavorite} />))
                }
            </>
    
   
    
}

export default BookList