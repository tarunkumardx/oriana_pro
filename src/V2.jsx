import { oriana } from "./assets";
import Header from "./components/header";
// import LandingPageVideo from "./components/landingPageVideo";
import LandingPageVideoSlider from "./components/landingPageVideoSlider";

function V2() {
  return (
    <>
      <div>
        <Header />
        <LandingPageVideoSlider bg={"rgb(12 12 12 / 55%)"} />
        <img src={oriana} alt="okd" width="100%" />
      </div>
    </>
  );
}

export default V2;
