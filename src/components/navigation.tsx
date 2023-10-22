import "../assets/navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = ({}) => {
  // rendering the navigation bar
  return (
    <div className="nav-bar row">
      <div className="main-nav row">
        <NavLink className="row" to="/">
          <img src="./images/logo-horizontal-nav.png" alt="logo" />
        </NavLink>
        <NavLink className="nav-btn" to="/">
          Home
        </NavLink>
        <NavLink className="nav-btn" to="/marketplace">
          Marketplace
        </NavLink>
        <NavLink className="nav-btn" to="/aboutus">
          About Us
        </NavLink>
      </div>
      <div className="user-nav row">
        <NavLink className="nav-login" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-signup" to="/signup">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
