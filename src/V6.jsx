import { header, oriana4 } from "./assets";
// import HeaderWhite from "./components/headerWhite";
import LandingPageVideo2 from "./components/landingPageVideo2";

function V6() {
  return (
    <>
      <div>
        {/* <HeaderWhite /> */}
        <img src={header} alt="okd" width="100%" className="headerImg"/>
        <LandingPageVideo2/>
        <img src={oriana4} alt="okd" width="100%" />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default V6;
