import { FETCHING_ARTICLES, FETCHED_ARTICLES, ADD_ARTICLES } from "../store/actionTypes"

export const articleReducer = (state, action) => {
  switch (action.type) {
    case ADD_ARTICLES:
      return action.data;
    default:
      return state;
  }
};


export const articleStatusReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_ARTICLES:
      return 'FETCHING_ARTICLES';
    case FETCHED_ARTICLES:
      return 'FETCHED_ARTICLES';
    default:
      return state;
  }
};



