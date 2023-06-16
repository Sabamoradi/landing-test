import "./style.scss";
import { useState } from "react";
import HomeSecond from "./container/HomeSecond";
import HomeThird from "./container/HomeThird";
import HomeFourth from "./container/HomeFourth";
import HomeFifth from "./container/HomeFifth";
import AllFilter from "../../components/container/AllFilter";
import Filter from "../../components/Filter";
import { filterHome } from "../../configs/data";

const homeImage = require("../../assets/images/home/home-header.png");

const Home = () => {
  const [selectItem, setSelecrItem] = useState(filterHome[0].category);
  const selectFilter = (val) => {
    setSelecrItem(val);
  };
  return (
    <div className="home-page">
      <div className="home-header_container">
        <img src={homeImage} />
        <div className="container home_white_card">
          <Filter
            items={filterHome}
            selectFilter={selectFilter}
            selectItem={selectItem}
          />
          {selectItem === "in" || selectItem === "out" ? <AllFilter /> : ""}
        </div>
      </div>
      <div className="gray-bg">
        <HomeSecond />
        <HomeThird />
      </div>
      <HomeFourth />
      <div className="gray-bg">
        <HomeFifth />
      </div>
    </div>
  );
};

export default Home;
