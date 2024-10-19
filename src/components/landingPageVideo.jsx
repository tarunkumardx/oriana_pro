const LandingPageVideo = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <video
        style={{
          width: "100%",
          height: "100vh", // or "100vh" for full height
          objectFit: "cover",
        }}
        autoPlay
        muted
        loop
      >
        {/* <source
          src="https://www.shutterstock.com/shutterstock/videos/1090773539/preview/stock-footage-ecology-solar-power-station-panels-in-the-fields-green-energy-at-sunset-landscape-electrical.webm"
          type="video/webm"
        /> */}
        <source
          src="https://www.shutterstock.com/shutterstock/videos/3445162319/preview/stock-footage-solar-panels-on-a-farm-rooftop-display-power-levels-harnessing-energy-sustainably-in-the-usa.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      <div className="mainBannerText">
        Goal - <span> Expand REnewable</span>
        <br />
        <span>Energy </span>capacity to <strong>10 GW by 2030.</strong>
      </div>
    </div>
  );
};

export default LandingPageVideo;

// video source

// https://www.shutterstock.com/video/clip-3445162319-solar-panels-on-farm-rooftop-display-power
