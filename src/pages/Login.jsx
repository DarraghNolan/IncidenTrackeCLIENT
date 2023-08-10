import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [loginStatus, setLogInStatus] = useState("");

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(
      //  --  Standard LocalHost Connection
      // "http://localhost:8800/login"

      //  --  Heroku Connection
      "https://incidentracker.herokuapp.com/login"
      , {
      Name: name,
      Password: password,
    }).then((response) => {

      if(response.data.message){
        console.log(response);
        setError(response.data.message);
        setLogInStatus("login failed");
        setIsLoggedIn(false); // Set isLoggedIn to false for incorrect credentials
      }else{
        console.log(response);
        setLogInStatus("Welcome " + response.data.Name + "!");
        setError("");
        setIsLoggedIn(true); // Set isLoggedIn to true for correct credentials
        navigate("/driveoffs");
      }
    })
    .catch((error) => {
      console.log(error);
      setError("Invalid username or password");
      setLogInStatus("");
      //setIsLoggedIn(false); // Set isLoggedIn to false for error
    });
  }

  return (
    <div className="auth">
      <h1>This is the Login Page</h1>
      <form>
        <input 
          required type="text" 
          placeholder='Name' 
          name="Name" 
          onChange={(e) =>{
            setName(e.target.value);
          }}
        />
        <input 
          required type="text" 
          placeholder='Password' 
          name="Password" 
          onChange={(e) =>{
            setPassword(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Login</button>
      </form>
      <h2>{loginStatus}</h2>
    </div>
  );
};

export default Login;