import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/HomePage/LandingPage";
import CallToAction from "./components/CTA/cta";
import FanTVNetwork from "./components/HomeNetwork/FanTVNetwork";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <FanTVNetwork />
      <CallToAction />
    </div>
  );
}

export default App;
