import React from "react";
import styles from '../styles/components/BookItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { addImageFallback } from "../utils/imageFallback";
import { Book } from "../types/book";



interface BookProps {
    book: Book
    isFavorite: boolean;
    toggleFavorite: (e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>, id: string) => void;
}


const BookItem: React.FC<BookProps> = ({ book, isFavorite, toggleFavorite }) => {
    const navigate = useNavigate();

    const bookClick = () => {
        navigate(`/books/${book.id}`);
    };


    const { title, author, cover, publicationDate, id } = book

    return <div className={styles.bookItem} onClick={bookClick}>
        <img src={cover} alt="book_cover" onError={addImageFallback} />
        <div >
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{new Date(publicationDate).toLocaleDateString()}</p>
            <button onClick={(e) => toggleFavorite(e, id)}>
                {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
            </button>
        </div>
    </div>
}

const MemoBookItem = React.memo(BookItem)

export default MemoBookItem