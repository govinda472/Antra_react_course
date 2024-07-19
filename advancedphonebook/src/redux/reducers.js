import { ADD_ENTRY } from './actions';

const initialState = {
  books: [],
};

const phoneBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default phoneBookReducer;
