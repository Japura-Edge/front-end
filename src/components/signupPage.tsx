import { useState } from "react";
import "../assets/signupPage.css";
import SearchBox from "./searchBox";

const SignupPage = ({ backEndServer }: any) => {
  console.log(backEndServer);

  const [signupData, setsignupData] = useState({
    userName: "",
    firstName: "",
    profilePic: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    favorites: "",
    seller: true,
    registrationNo: "",
    faculty: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setsignupData((prevsetsignupData) => ({
      ...prevsetsignupData,
      [name]: value,
    }));
    console.log(signupData);
  };

  const handlelogin = () => {};

  return (
    <div className="login-page row">
      <div className="signup-image-section column">
        <h2>Sign into</h2>
        <img src="./images/logo-horizontal.png" alt="login" />
        <SearchBox />
      </div>
      <div className="signup-form-section column">
        <div className="row input-split">
          <div className="sign-email-section column">
            <label className="signp-lable">First Name</label>
            <input
              type="text"
              autoComplete="off"
              className="signup-input input-split"
              onChange={handleChange}
              name="firstName:"
            />
          </div>
          <div className="sign-email-section column">
            <label className="signp-lable">Last Name</label>
            <input
              type="text"
              autoComplete="off"
              className="signup-input input-split"
              onChange={handleChange}
              name="lastName"
            />
          </div>
        </div>
        <div className="row input-split">
          <div className="sign-email-section column">
            <label className="signp-lable">Email</label>
            <input
              type="text"
              autoComplete="off"
              className="signup-input input-split"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="sign-email-section column">
            <label className="signp-lable">Mobile No</label>
            <input
              type="text"
              autoComplete="off"
              className="signup-input input-split"
              onChange={handleChange}
              name="phoneNumber"
            />
          </div>
        </div>
        <div className="sign-password-section column">
          <label className="signp-lable">Username</label>
          <input
            className="signup-input"
            type="text"
            onChange={handleChange}
            name="userName"
          />
        </div>
        <div className="row input-split">
          <div className="sign-email-section column">
            <label className="signp-lable">Password</label>
            <input
              type="password"
              autoComplete="off"
              className="signup-input input-split"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="sign-email-section column">
            <label className="signp-lable">Re-type Password</label>
            <input
              type="password"
              autoComplete="off"
              className="signup-input input-split"
            />
          </div>
        </div>
        <button className="login-button" onClick={handlelogin}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
