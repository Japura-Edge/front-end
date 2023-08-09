import "../assets/navigation.css";

const Navigation = ({ onMarketClick, onHomeClick }: any) => {
  return (
    <div className="nav-bar row">
      <div className="main-nav row">
        <a href="#" className="row" onClick={onHomeClick}>
          <img src="./images/logo-horizontal-nav.png" alt="logo" />
        </a>
        <a href="#" className="nav-btn" onClick={onHomeClick}>
          Home
        </a>
        <a href="#" className="nav-btn" onClick={onMarketClick}>
          Marketplace
        </a>
        <a href="#about" className="nav-btn">
          About Us
        </a>
      </div>
      <div className="user-nav row">
        <a href="#login" className="nav-login">
          Login
        </a>
        <a href="#signup" className="nav-signup">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navigation;
