// api.js
import axios from "axios";
import Config from "./Config.jsx";

export function fetchUserData(endpoint, method, body) {
  const config = {
    method,
    url: `${Config.API_BASE_URL}/${endpoint}`,
    headers: {
      Authorization: `Bearer ${Config.token}`,
      "Content-Type": "application/json",
    },
    data: body? JSON.stringify(body) : undefined,
  };

  return axios(config)
  .then((response) => {
      // console.log("User data:", response.data);  // To get the response  in console log uncomment this line and comment the
      return response;
    })
  .catch((error) => {
    // console.log(error.response.data.description) // To get the  detailed error message
    //   console.error("Error fetching user data:", error);
      return error.response.data.description;
    });
}