import "./style.scss";
import HomeSecond from "./container/HomeSecond";

const homeImage = require("../../assets/images/home/home-header.png");

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-header_container">
        <img src={homeImage} />
        <div className="container home_white_card"></div>
      </div>
      <HomeSecond />
    </div>
  );
};

export default Home;
