import { hamburgerMenu, logo } from "../assets";

const HeaderWhite = () => {
  return (
    <>
      <div className="navBar" style={{background: 'linear-gradient(67deg, rgb(255 255 255 / 80%) 0%, rgb(255 255 255 / 80%) 100%)', borderBottom: '1px solid black'}}>
        <nav style={
          {height: '70px', paddingTop: '0'}
        }>
          <a href="/" style={{ cursor: "pointer" }}>
            <img src={logo} alt="" style={{height: '100%'}} />
          </a>
          <ul className="list">
            <li>
              <strong>Home</strong>
            </li>
            <li style={{ textAlign: "center" }}>
              About <sup>⌄</sup>
            </li>
            <li style={{ textAlign: "center" }}>
              What We Do <sup>⌄</sup>
            </li>
            <li>Portfolio</li>
            <li>Investors</li>
          </ul>
          <div className="center">
            <div className="navCard">
              <div className="btn">
                <div>
                  <strong>Oriana Power Ltd.</strong>
                </div>
                <span>NSE</span>
              </div>
              <div className="btn">
                <div>
                  <strong style={{ fontSize: "14px" }}>₹ 2,367</strong>
                </div>
                <span>+48.45(4.40%)</span>
                <div className="headline">18 May . close price</div>
              </div>
            </div>

            <img
              src={hamburgerMenu}
              alt=""
              height={25}
              style={{ padding: "20px" }}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderWhite;
