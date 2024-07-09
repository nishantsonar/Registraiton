import React,{useState} from 'react'
import Header from './Header'
import Config from './Config';
function ListOfUsers() {
    const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");


    const handleClick = (e) => {
        e.preventDefault();
    // alert(sessionStorage.getItem("token"))
        fetch(`${Config.API_BASE_URL}/users`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json(); // Parse the response body as JSON
            } else  if (res.status === 401)  {
              setErrorMessage("Invalid email or password");
            }else{
              throw new Error("Invalid email or password");
            }
          })
          .then((data) => {
            // const token = data.token; // Retrieve the token from the response data
            // console.log("RES:::: " + token);
            // console.log("JWT TOKEN:::: " + token);
            // console.log(data);
            setUsers(data);
            // console.log("AFTER JWT TOKEN:::: " + sessionStorage.getItem("token"));
          })
          .catch((err) => {
            setErrorMessage("An error occurred. Please try again later.");
            setErrorMessage("Invalid email or password.");
          });
      };
  return (
    <div>
        <Header/>
        <button onClick={handleClick}>Fetch Data</button>
        <br/>
        <p>{errorMessage}</p>
        <br/>
        <table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Updated At</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.updatedAt}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
  )
}

export default ListOfUsers