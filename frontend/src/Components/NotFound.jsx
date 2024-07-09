import React from 'react'
import  './CSS/error-page.css'
import Header from './Header';

const NotFound = ({ errorMessage }) => {
    return (
      <div >
        <Header/>
        {/* <img id='errorImg' src="../Assests/404_page_cover.jpg" alt="Error" /> */}
        {/* <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="Error" height={'400'} width={'9000'}/> */}
        <h1>Oops! Something went wrong</h1>
        <p>{errorMessage}</p>
        {/* <button id='reloadBtn' onClick={() => window.location.reload()}>Reload Page</button> */}
      </div>
    );
  };
  

export default NotFound
