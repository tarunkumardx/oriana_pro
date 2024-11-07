import { oriana2 } from "./assets";
import HeaderWhite from "./components/headerWhite";
import LandingPageVideo from "./components/landingPageVideo";

function V4() {
  return (
    <>
      <div>
        <HeaderWhite />
        <LandingPageVideo/>
        <img src={oriana2} alt="okd" width="100%" />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default V4;
