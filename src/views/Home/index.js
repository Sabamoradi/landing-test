import "./style.scss";
import HomeSecond from "./container/HomeSecond";
import HomeThird from "./container/HomeThird";
import HomeFourth from "./container/HomeFourth";
import HomeFifth from "./container/HomeFifth";

const homeImage = require("../../assets/images/home/home-header.png");

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-header_container">
        <img src={homeImage} />
        <div className="container home_white_card"></div>
      </div>
      <div className="gray-bg">
        <HomeSecond />
        <HomeThird />
      </div>
      <HomeFourth />
      <div className="gray-bg">
        <HomeFifth/>
      </div>
    </div>
  );
};

export default Home;
