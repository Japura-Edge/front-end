import "../assets/navigation.css";

const Navigation = ({
  onMarketClick,
  onHomeClick,
  onLoginClick,
  onSignUpClick,
  isInSignupPage,
  isInLoginPage,
  onAboutClick,
}: any) => {
  // rendering the navigation bar
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
        <a href="#about" className="nav-btn" onClick={onAboutClick}>
          About Us
        </a>
      </div>
      <div className="user-nav row">
        {isInLoginPage !== 1 ? (
          <a href="#" className="nav-login" onClick={onLoginClick}>
            Login
          </a>
        ) : null}
        {isInSignupPage !== 1 ? (
          <a href="#" className="nav-signup" onClick={onSignUpClick}>
            Sign Up
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default Navigation;
