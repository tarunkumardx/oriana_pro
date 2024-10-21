import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  mainBannerVid1,
  mainBannerVid2,
  mainBannerVid3,
  mainBannerVid4,
} from "../assets";
// eslint-disable-next-line react/prop-types
const LandingPageVideoSlider2 = ({ bg }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      style={{
        "--swiper-navigation-color": "#fff",
      }}
    >
      <SwiperSlide>
        <video
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          preload="metadata"
          autoPlay
          muted
          loop
        >
          <source
            // src="https://www.shutterstock.com/shutterstock/videos/1100685529/preview/stock-footage-close-up-on-hand-of-professional-maintenance-engineer-touching-industrial-solar-panel-generating.webm"
            src={mainBannerVid1}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="mainBannerText" style={{ background: bg }}>
          Goal - <span> Expand REnewable</span>
          <br />
          <span>Energy </span>capacity to <strong>10 GW by 2030.</strong>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <video
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
        >
          <source
            // src="https://video-previews.elements.envatousercontent.com/73028670-9bdc-44f0-b28e-c2332651d66f/watermarked_preview/watermarked_preview.mp4"
            src={mainBannerVid2}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="mainBannerText" style={{ background: bg }}>
          <span> Revolutionizing Energy Storage</span>
          <br />
          for a Greener Tomorrow.
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <video
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
        >
          <source
            // src="https://www.shutterstock.com/shutterstock/videos/1084910053/preview/stock-footage-filling-tanks-with-biofuel-renewable-energy-production-factory-plant-motion-graphics-concept-of.webm"
            src={mainBannerVid3}
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <div className="mainBannerText" style={{ background: bg }}>
          <span> Fueling the Future</span> with
          <br />
          <strong>Compressed Biogas Solutions</strong>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <video
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
        >
          <source
            // src="https://www.shutterstock.com/shutterstock/videos/1102103721/preview/stock-footage-white-tanks-with-liquid-hydrogen-and-oxygen-in-factory-yard-d-animation.webm"
            src={
              "https://www.shutterstock.com/shutterstock/videos/1102103721/preview/stock-footage-white-tanks-with-liquid-hydrogen-and-oxygen-in-factory-yard-d-animation.webm"
            }
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <div className="mainBannerText" style={{ background: bg }}>
          Empowering Tomorrow with
          <br />
          <span>Sustainable Green Hydrogen Energy</span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default LandingPageVideoSlider2;

// video source

// https://www.shutterstock.com/video/clip-3445162319-solar-panels-on-farm-rooftop-display-power
