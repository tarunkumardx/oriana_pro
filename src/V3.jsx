import { oriana } from "./assets";
import Header from "./components/header";
// import LandingPageVideo from "./components/landingPageVideo";
import LandingPageVideoSlider2 from "./components/landingPageVideoSlider2";

function V3() {
  return (
    <>
      <div>
        <Header />
        <LandingPageVideoSlider2 bg={"rgb(12 12 12 / 55%)"} />
        <img src={oriana} alt="okd" width="100%" />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default V3;
