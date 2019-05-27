import axios from 'axios';
import apiURL from '../../src/config/APIUrls';

export const fetchAllUsers = () => {
    return fetchAllUsersAsync()
      .then((data) => {
        console.log("Recieved data from USERS API.......Yay!!!!!!!", data);
        return data.data;
      })
      .catch((error) => {
        console.log('error 1->', error);
      });
  };

async function fetchAllUsersAsync() {
  try {
    const response = await axios.get(apiURL.users_feed);
    const body = await response;
    return body;
  } catch (error) {
    return error;
  }
}

