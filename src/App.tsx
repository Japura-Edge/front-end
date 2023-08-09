import "./assets/App.css";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import MarketplacePage from "./components/marketplacePage";
import Navigation from "./components/navigation";
import { useState } from "react";

function App() {
  //declaring the state variables
  var backEndServer = "https://japura-edge-server.azurewebsites.net";
  const [isInHomePage, setIsInHomePage] = useState(0);
  const [isInMarketplacePage, setIsInMarketplacePage] = useState(1);

  //navigation button click handlers
  const handleHomeClick = () => {
    setIsInHomePage(1);
    setIsInMarketplacePage(0);
  };
  const handleMarketClick = () => {
    setIsInHomePage(0);
    setIsInMarketplacePage(1);
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
        <MarketplacePage backEndServer={backEndServer} />
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
