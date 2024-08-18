import { useParams } from "react-router-dom";
import { useBook } from "../hooks/useBook";
import styles from "../styles/components/BookDetails.module.scss";
import { addImageFallback } from "../utils/imageFallback";

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isPending, error, data, isError } = useBook(id);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Book not found</div>;
  }

  if (isError) {
    return <h3>Error:{error?.message}</h3>;
  }

  return (
    <div className={styles.bookDetails}>
      <img src={data.cover} alt={data.title} onError={addImageFallback} />
      <h2>{data.title}</h2>
      <h4>by {data.author}</h4>
      <p>{data.description}</p>
      <p>Published on: {new Date(data.publicationDate).toLocaleDateString()}</p>
    </div>
  );
};

export default BookDetails;
