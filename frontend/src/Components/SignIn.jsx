import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Config from './Config';
import CryptoJS from "crypto-js";
import { fetchUserData } from "./API";


const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : false,
  isLoading: false,
  isRegistered: false,
};

function SignInDemo(state = initialState) {
  // var encryptedBase64Key = "aU5wRHVMajJET1p1MVpBag==";

  // var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Email and password are required");
      return;
    }

    const detail = {
      // email: encrypt(email).toString(),
      email:encryptAES(email, Config.SECRET_KEY),
      // password: encrypt(password).toString(),
      password:encryptAES(password, Config.SECRET_KEY),
    };
   
    // console.log(encryptAES(JSON.stringify(detail), Config.SECRET_KEY).toString())

    // const encrypted = encryptAES(email, encryptedBase64Key);
    // const encrypted = CryptoJS.AES.encrypt(email, encryptedBase64Key).toString();
    // const decrypted = decryptAES(encrypted,encryptedBase64Key)

      //   fetch(`${Config.API_BASE_URL}/auth/login`, {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },

      //     body: JSON.stringify(detail),
      //   })
      //     .then((res) => {
      //       if (res.status === 200) {
      //         return res.json(); // Parse the response body as JSON
      //       } else  if (res.status === 401)  {
      //         res.json().then((data) => {
      //          // alert(JSON.stringify(data.description));
      //           setErrorMessage(JSON.stringify(data.description));
      //         });
      //       }else{
      //         throw new Error("Invalid email or password");
      //       }
      //     })
      //     .then((data) => {
      //       const token = data.token; // Retrieve the token from the response data
      //       console.log("RES:::: " + token);
      //       console.log("JWT TOKEN:::: " + token);
      //       Config.token=token;
      //       sessionStorage.setItem("token", data.token);
      //       navigate(`/menu`); // Redirect to the desired location
      //       console.log("AFTER JWT TOKEN:::: " + sessionStorage.getItem("token"));
      //     })
      //     .catch((err) => {
      //    setErrorMessage("An error occurred. Please try again later.");
      //     });
      // };

      fetchUserData("auth/login","POST",detail).then((response) => {
        // alert(response.status);
        if(response.status === 200) {
            console.log("User data:", response.data);
        let token=response.data.token;
        Config.token=token;
        sessionStorage.setItem("token", response.data.token);
        console.log("Config.token:", Config.token);
        navigate(`/menu`); // Redirect to the desired location
          // return response.json(); // Parse the response body as JSON
        } else {
          setErrorMessage(response);
        }
        })
      .catch((error) => {
       alert("FHDF");
        // console.log(error); // Log the error to the console
        // console.error("Error fetching user data:", error);
        setErrorMessage("response not found!");
      });
  };
  


// AES  DATA ENCRYPTION AND DECRYPTION
  const encryptAES = (data, key) => {
    return CryptoJS.AES.encrypt(data, CryptoJS.enc.Base64.parse(key), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
  };
  const decryptAES = (encryptedData, key) => {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Base64.parse(key), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  };

  // Crypto JS DATA ENCRYPTION AND DECRYPTION
  // function encrypt(plaintText) {
  //   // this is Base64-encoded encrypted data
  //   let encryptedData = CryptoJS.AES.encrypt(plaintText, parsedBase64Key, {
  //     mode: CryptoJS.mode.ECB,
  //     padding: CryptoJS.pad.Pkcs7,
  //   });
  //   return encryptedData;
  // }
  // function decrypt() {
  //   let encryptedCipherText = "MxhyNGUa1CHEm1ewmXALfH2tYGgbX5D0jJdLZimnycA="; // or encryptedData;
  //   // var encryptedCipherText = encryptedData;
  //   let decryptedData = CryptoJS.AES.decrypt(
  //     encryptedCipherText,
  //     parsedBase64Key,
  //     { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
  //   );
  //   // this is the decrypted data as a string
  //   let decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
  //   }
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* <Header /> */}
      <section className="vh-100" style={{ marginTop: "-55px" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src={
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                }
                className="img-fluid"
                alt=" "
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign In
              </p>
              <form onSubmit={handleClick}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>
                {errorMessage && (
                  <div className="alert alert-danger">{errorMessage}</div>
                )}
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <a href="#!">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    OR
                  </p>
                </div>
                <Link
                  className="btn btn-primary btn-lg btn-block"
                  style={{ backgroundColor: "#3b5998" }}
                  to="/SignUp"
                  role="button"
                >
                  <i className="fab  me-2"></i>SignUp
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignInDemo;
