import "./style.scss";
import Filter from "../../../../components/Filter";
import { filterHomeHotel } from "../../../../mock";
import { useState } from "react";

const HomeThird = () => {
  const [selectItem, setSelecrItem] = useState("");
  const selectFilter = (val) => {
    setSelecrItem(val);
  };

  return (
    <div className="home_t_container">
      <div className="container">
        <div className="home_t_title">هتل‌های پیشنهادی</div>
        <Filter
          items={filterHomeHotel}
          selectFilter={selectFilter}
          selectItem={selectItem}
        />
      </div>
    </div>
  );
};

export default HomeThird;
