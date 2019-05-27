import './UserList.css';
import React from 'react';
import { FETCHING_USERS } from "../store/actionTypes"

const UserList = ({ users, usersStatus }) => {

  console.log('UserList - users received -> ', users);
  console.log('UserList - usersStatus NOW -> ', usersStatus);

  if (usersStatus.type === FETCHING_USERS) {
    return (
      <div>
       No Records found...maybe still fetching.......!!!
      </div>
    )
  }

  return (
    <div className="section">
      <p className="heading">User Data retrieved !!!</p>
      {users && users.map((item, index) => (
        <UserItem className="userItem"key={index} name={item.employee_name} />
      ))}
    </div>
  )
};

const UserItem = ({ name }) => {
  return (
    <li>
      <label>
        {name}
      </label>
    </li>
  );
};

export default UserList;
