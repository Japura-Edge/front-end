import "./assets/App.css";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import MarketplacePage from "./components/marketplacePage";
import Navigation from "./components/navigation";
import { useState } from "react";

function App() {
  //declaring the state variables
  var backEndServer = "https://japura-edge-server.azurewebsites.net";
  const [isInHomePage, setIsInHomePage] = useState(1);
  const [isInMarketplacePage, setIsInMarketplacePage] = useState(0);
  const [searchText, setSearchText] = useState("");

  //navigation button click handlers
  const handleHomeClick = () => {
    setIsInHomePage(1);
    setIsInMarketplacePage(0);
  };
  const handleMarketClick = () => {
    setIsInHomePage(0);
    setIsInMarketplacePage(1);
  };
  const updateSearchText = (text: any) => {
    setSearchText(text);
  };

  //rendering the components
  return (
    <div className="App">
      <Navigation
        onHomeClick={handleHomeClick}
        onMarketClick={handleMarketClick}
      />
      {isInHomePage ? <HomePage backEndServer={backEndServer} /> : null}
      {isInMarketplacePage ? (
        <MarketplacePage
          backEndServer={backEndServer}
          updateSearchText={updateSearchText}
          newSearchText={searchText}
        />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
