import "./style.scss";
const homeImage = require("../../assets/images/home/home-header.png");

const Home = () => {
  return (
    <div className="home-header_container">
      <img src={homeImage} />
      <div className="container home_white_card">
        
      </div>
    </div>
  );
};

export default Home;
