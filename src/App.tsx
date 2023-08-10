import "./assets/App.css";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";
import MarketplacePage from "./components/marketplacePage";
import Navigation from "./components/navigation";
import { useState } from "react";
import SignupPage from "./components/signupPage";

function App() {
  //declaring the state variables
  var backEndServer = "https://japura-edge-server.azurewebsites.net";
  const [isInHomePage, setIsInHomePage] = useState(1);
  const [isInMarketplacePage, setIsInMarketplacePage] = useState(0);
  const [isInAboutPage, setIsInAboutPage] = useState(0);
  const [isInLoginPage, setIsInLoginPage] = useState(0);
  const [isInSignupPage, setIsInSignupPage] = useState(0);
  const [searchText, setSearchText] = useState("");

  console.log(isInAboutPage);

  //navigation button click handlers
  const handleHomeClick = () => {
    setIsInHomePage(1);
    setIsInMarketplacePage(0);
    setIsInLoginPage(0);
    setIsInSignupPage(0);
    setIsInAboutPage(0);
  };
  const handleMarketClick = () => {
    setIsInHomePage(0);
    setIsInMarketplacePage(1);
    setIsInLoginPage(0);
    setIsInSignupPage(0);
    setIsInAboutPage(0);
  };
  const updateSearchText = (text: any) => {
    setSearchText(text);
  };
  const handleLoginClick = () => {
    setIsInLoginPage(1);
    setIsInSignupPage(0);
    setIsInHomePage(0);
    setIsInMarketplacePage(0);
    setIsInAboutPage(0);
  };
  const handleSignupClick = () => {
    setIsInLoginPage(0);
    setIsInSignupPage(1);
    setIsInHomePage(0);
    setIsInMarketplacePage(0);
    setIsInAboutPage(0);
  };
  const handleAboutClick = () => {
    setIsInLoginPage(0);
    setIsInSignupPage(0);
    setIsInHomePage(0);
    setIsInMarketplacePage(0);
    setIsInAboutPage(1);
  };

  //rendering the components
  return (
    <div className="App">
      {/* Navigation bar */}
      <Navigation
        onHomeClick={handleHomeClick}
        onMarketClick={handleMarketClick}
        onSignUpClick={handleSignupClick}
        onLoginClick={handleLoginClick}
        onAboutClick={handleAboutClick}
        isInLoginPage={isInLoginPage}
        isInSignupPage={isInSignupPage}
      />

      {/* webpage body */}
      {isInHomePage ? <HomePage backEndServer={backEndServer} /> : null}
      {isInMarketplacePage ? (
        <MarketplacePage
          backEndServer={backEndServer}
          updateSearchText={updateSearchText}
          newSearchText={searchText}
        />
      ) : null}
      {/* handle login and signup */}
      {isInLoginPage ? <LoginPage backEndServer={backEndServer} /> : null}
      {isInSignupPage ? <SignupPage backEndServer={backEndServer} /> : null}
      {/* {isInAboutPage ? <aboutPage /> : null} */}

      {/* display the footer */}
      <Footer />
    </div>
  );
}

export default App;
