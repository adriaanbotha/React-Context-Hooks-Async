import React, {
  useReducer, useEffect
} from 'react';
import './App.css';
import useCombinedReducers from 'use-combined-reducers';
import DispatchContext from "./store/dispatch";
import UserList from "./conponents/UserList";
import { fetchAllUsers } from "./store/usersSelectors";
import { userReducer, userStatusReducer } from "./store/userReducer";
import { FETCHING_USERS, FETCHED_USERS, ADD_USERS } from "./store/actionTypes";

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    users: useReducer(userReducer, []),
    usersStatus: useReducer(userStatusReducer, FETCHING_USERS)
  });

  const { users, usersStatus } = state;

  useEffect(() => {
    dispatch({ type: FETCHING_USERS });

    fetchAllUsers()
      .then((data) => {
        dispatch({ type: ADD_USERS, data });
        dispatch({ type: FETCHED_USERS });
      })
      .catch((error) => {
        console.log('error ->', error);
      });
  }, []);   //This line is IMPORTANT since the [] makes sure it is also called only once !!!!


  return (
    <DispatchContext.Provider value={dispatch}>
      <UserList users={users} usersStatus={usersStatus}/>
    </DispatchContext.Provider>
  );
};

export default App;
