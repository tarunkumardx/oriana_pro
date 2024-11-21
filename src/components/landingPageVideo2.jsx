import { TypeAnimation } from "react-type-animation";
import { mainBannerCombined1 } from "../assets";
import { FaArrowRight } from "react-icons/fa";

const LandingPageVideo2 = () => {

  return (
 <div className="video-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <video className="background-video" autoPlay muted loop>
        <source src={mainBannerCombined1} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
      <TypeAnimation
      sequence={[
        'Goal - Expand REnewable Energy capacity to 10 GW by 2030', 
        5000,
        'Goal - Expand REnewable Energy capacity to 10 GW by 2030', 
        5000,
        'Goal - Expand REnewable Energy capacity to 10 GW by 2030', 
        5000,
        'Goal - Expand REnewable Energy capacity to 10 GW by 2030', 
        5000,
      ]}
      deletionSpeed={100}
      speed={60}
      wrapper="h2"
      cursor={true}
      repeat={Infinity}
      style={{ maxWidth: '900px', display: 'inline-block' }}
    />
    {/* <p>India’s Leading Manufacturer of Power Generation & Power Distribution Equipment’s with over 50 years of Trust & Reliability</p> */}

    <button className="viewMore"> View More <div className="arrow">
    <FaArrowRight /></div></button>
      </div>
    </div>
  );
};

export default LandingPageVideo2;

// video source

// https://www.shutterstock.com/video/clip-3445162319-solar-panels-on-farm-rooftop-display-power
