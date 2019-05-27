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
    <div>
      <label>User Data retrieved !!!</label>
      {users && users.map((item, index) => (
        <ArticleItem key={index} name={item.employee_name} />
      ))}
    </div>
  )
};

const ArticleItem = ({ name }) => {
  return (
    <li>
      <label>
        {name}
      </label>
    </li>
  );
};

export default UserList;
