import React, {useState, useEffect}  from 'react'
import Header from './Header';
import Config from './Config';
import axios from 'axios'

function Hello() {
  const [token, setToken] = useState('');
  const [datas, setDatas] = useState( );
  const [errorMsg, setErrorMsg] = useState( );


  useEffect(() => {
    // Retrieve token from sessionStorage
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const fetchData = () => {
    axios.get(`${Config.API_BASE_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.status !== 200) {
        const errorMessage ='Your previous session has expired. Please login again to continue.';
                  setErrorMsg(errorMessage)
        // Handle non-successful response status here
        throw new Error('Network response was not ok');
      }
      return response.data; // Parse the JSON response
    })
    .then(data => {
      // Extract the value of the description key
      console.log(data);
      const description = data.fullName;
      setDatas(data);
      console.log('Description:', description);
    })
    .catch(error => {
      const errorMessage ='Your previous session has expired. Please login again to continue.';
      setDatas();
            setErrorMsg(errorMessage);
      console.error('Error fetching data:', error);
    });
  }
    


  return (
    <div>
      <Header/>
         {/* <h1 className='datas'>{JSON.stringify(datas)}</h1> */}
     <p className='datas'>{errorMsg}</p>
     <ul>
        {datas && datas.map(user => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Full Name: {user.fullName}</p>
            <p>Email: {user.email}</p>
            <p>createdAt: {user.createdAt}</p>
            <p>username: {user.username}</p>
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default Hello