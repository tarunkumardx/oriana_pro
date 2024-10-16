import { useState } from "react";
import { oriana } from "./assets";
import Header from "./components/header";
import LandingPageVideo from "./components/landingPageVideo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <LandingPageVideo />
        <img src={oriana} alt="okd" width="100%" />
      </div>
    </>
  );
}

export default App;
