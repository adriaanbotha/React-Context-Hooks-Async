import { FETCHING_USERS, FETCHED_USERS, ADD_USERS } from "../store/actionTypes"

export const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USERS:
      return action.data;
    default:
      return state;
  }
};


export const userStatusReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_USERS:
      return 'FETCHING_USERS';
    case FETCHED_USERS:
      return 'FETCHED_USERS';
    default:
      return state;
  }
};



