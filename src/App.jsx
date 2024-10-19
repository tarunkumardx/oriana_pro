import { oriana } from "./assets";
import Header from "./components/header";
// import LandingPageVideo from "./components/landingPageVideo";
import LandingPageVideoSlider from "./components/landingPageVideoSlider";

function App() {
  return (
    <>
      <div>
        <Header />
        <LandingPageVideoSlider />
        <img src={oriana} alt="okd" width="100%" />
      </div>
    </>
  );
}

export default App;
