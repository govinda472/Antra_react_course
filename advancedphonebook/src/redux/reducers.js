import { ADD_ENTRY } from "./actions";

export const phoneBookReducer = (state = { books: [] }, action) => {
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
