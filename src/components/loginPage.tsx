import axios from "axios";
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../assets/loginPage.css";
import SearchBox from "./searchBox";

const LoginPage = ({ backEndServer }: any) => {

  const navigate = useNavigate();
  console.log(backEndServer);
  const [userData, setUserData] = useState({
    userName: "",
    password: ""
  })
  
  const [outputMessage, setoutputMessage] = useState('');

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value
    }))
  }

  const handlelogin = async () => {
    try { const res = await axios.post(`https://japura-edge-server.azurewebsites.net/user/login`, userData)

      if (res.data.message) {
        const { message } = res.data;      
        // setoutputMessage(message)
        console.log("output "+outputMessage);
        
        if (message.userName) {
          console.log('Login successful:', message.userName);
          navigate('/');
        }
      } else {
        console.log('Unexpected response from the server');
      }
    }
    catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        const message = err.response.data.message;
    
        if (message === 'Incorrect password') {
          console.log('Incorrect password');
          setoutputMessage('Incorrect password');
        } else if (message === 'User not found') {
          console.log('User not found');
          setoutputMessage('User not found');
        } else {
          console.log('Incorrect username or password');
        }
      } else {
        console.log('Unexpected error:', err);
      }
    }
  }

  console.log(backEndServer);
  return (
    <div className="login-page row">
      <div className="login-image-section column">
        <h2>Login to</h2>
        <img src="./images/logo-horizontal.png" alt="login" />
        <SearchBox />
      </div>
      <div className="login-form-section column">
        <div className="username-section column">
          <label>User Name</label>
          <input type="text" autoComplete="off" onChange={handleChange} name='userName' />
        </div>
        {outputMessage === 'User not found' && <p>User name incorrect</p>}
        <div className="password-section column">
          <label>Password</label>
          <input type="password" onChange={handleChange} name='password' />
        </div>
        {outputMessage === 'Incorrect password' && <p>Incorrect password</p>}
        <button className="login-button" onClick={handlelogin} >Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
