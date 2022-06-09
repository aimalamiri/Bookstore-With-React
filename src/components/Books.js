import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './AddBookForm';
import { getBooksAction } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction());
  }, []);

  return (
    <div>
      {Object.keys(books).map((book) => (
        <Book key={Math.random() * 100} book={books[book][0]} />
      ))}
      <AddBookForm />
    </div>
  );
};

export default Books;
