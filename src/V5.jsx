import { header, oriana3 } from "./assets";
// import HeaderWhite from "./components/headerWhite";
import LandingPageVideo2 from "./components/landingPageVideo2";

function V5() {
  return (
    <>
      <div>
        {/* <HeaderWhite /> */}
        <img src={header} alt="okd" width="100%" className="headerImg"/>
        <LandingPageVideo2/>
        <img src={oriana3} alt="okd" width="100%" />
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default V5;
