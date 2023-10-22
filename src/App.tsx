import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";
import MarketplacePage from "./components/marketplacePage";
import Navigation from "./components/navigation";
import SignupPage from "./components/signupPage";
import aboutPage from "./components/aboutPage";

function App() {
  //declaring the state variables
  var backEndServer = "https://japura-edge-server.azurewebsites.net";
  const [searchText, setSearchText] = useState("");

  //navigation button click handlers
  const updateSearchText = (text: any) => {
    setSearchText(text);
  };

  //rendering the components
  return (
    <div className="App">
      {/* Navigation bar */}
      <Navigation />

      {/* Using Routes to navigate to pages */}
      <Routes>
        <Route path="/" element={<HomePage backEndServer={backEndServer} />} />
        <Route
          path="marketplace"
          element={
            <MarketplacePage
              backEndServer={backEndServer}
              updateSearchText={updateSearchText}
              newSearchText={searchText}
            />
          }
        />
        <Route
          path="login"
          element={<LoginPage backEndServer={backEndServer} />}
        />
        <Route
          path="signup"
          element={<SignupPage backEndServer={backEndServer} />}
        />
        {/* <Route path="aboutus" element={<aboutPage />} /> */}
      </Routes>

      {/* display the footer */}
      <Footer />
    </div>
  );
}

export default App;
