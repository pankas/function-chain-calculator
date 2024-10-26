import { SET_SEARCH_TERM } from "./home-screen.constant";

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
