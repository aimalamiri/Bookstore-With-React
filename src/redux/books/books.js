import axios from '../../services/axios';

const LIST_BOOKS = 'bookstore/books/LIST_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_BOOKS:
      return action.books;

    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [...state.filter((b) => b.id !== action.bookId)];

    default:
      return state;
  }
};

export const getBooksAction = () => async (dispatch) => {
  const response = await axios.get('books');
  const data = Object.keys(response.data).map((book) => ({
    item_id: book,
    ...response.data[book][0],
  }));
  dispatch({ type: LIST_BOOKS, books: data });
};

export const addBookAction = (book) => async (dispatch) => {
  const request = await axios.post('books', book);
  if (request.data === 'Created') {
    dispatch({ type: ADD_BOOK, book });
  }
};

export const removeBookAction = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});
