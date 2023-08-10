import "../assets/loginPage.css";
import SearchBox from "./searchBox";

const LoginPage = ({ backEndServer }: any) => {
  return (
    <div className="login-page row">
      <div className="login-image-section column">
        <h2>Login to</h2>
        <img src="./images/logo-horizontal.png" alt="login" />
        <SearchBox />
      </div>
      <div className="login-form-section column">
        <div className="email-section column">
          <label>Email</label>
          <input type="text" autoComplete="off" />
        </div>
        <div className="password-section column">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
