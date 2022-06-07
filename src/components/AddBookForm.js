import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(addBookAction({ title, author }));
  };

  return (
    <form className="p-2" onSubmit={submitHandler}>
      <input type="text" name="title" placeholder="Book title" onChange={changeTitle} value={title} />
      <input type="text" name="author" placeholder="Book author" onChange={changeAuthor} value={author} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
