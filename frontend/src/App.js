import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About";
import SignIn from "./Components/SignIn";
import Contact from "./Components/ContactUs";
import SuccessPage from "./Components/SuccessPage";
import Hello from "./Components/Hello";
import Home from "./Components/Home";
import NotFound from './Components/NotFound'
import Header from "./Components/Header";
import ListOfUsers from "./Components/ListOfUsers";
import SignUp from "./Components/SignUp";
import Registration from "./Components/Registration";

function App() {
  const errorMessage ='Your previous session has expired. Please login again to continue.';
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/success" element={<SuccessPage />} />
        <Route exact path="/hello" element={<Hello />} />
        <Route exact path="/menu" element={<Header />} />
        <Route exact path="/listOfUser" element={<ListOfUsers />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route path='*' element={<NotFound errorMessage={errorMessage} />}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
