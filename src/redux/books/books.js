const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.map((b) => action.id !== b.id ?? b);

    default:
      return state;
  }
};

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBookAction = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});
