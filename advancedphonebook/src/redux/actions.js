export const ADD_ENTRY = "ADD_ENTRY";

export const addEntryToPhoneBook = (entry) => ({
  type: ADD_ENTRY,
  payload: entry,
});
