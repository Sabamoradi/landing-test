import "./style.scss";
import Filter from "../../../../components/Filter";
import { filterHomeHotel,filterHomeThird } from "../../../../mock";
import { useState } from "react";
import { StarIcon } from "../../../../assets/icons";

const HomeThird = () => {
  const [selectItem, setSelecrItem] = useState(filterHomeHotel[0].category);
  const selectFilter = (val) => {
    setSelecrItem(val);
  };
  const filterData = filterHomeHotel.filter((el) => el.category === selectItem);

  const starItem = (val) => {
    const list = [];
    for (let i = 0; i < val; i++) {
      list.push(<StarIcon key={i} />);
    }
    return list;
  };

  return (
    <div className="home_t_container">
      <div className="container">
        <div className="home_t_title">هتل‌های پیشنهادی</div>
        <Filter
          items={filterHomeThird}
          selectFilter={selectFilter}
          selectItem={selectItem}
        />
        <div className="filter_result_wrapper">
          {filterData.map((el) => {
            return (
              <div key={el.id} className="result_item">
                <div className="result_wrapper">
                  <img src={el.img} />
                  <div className="result_text">
                    <p>{el.hotelName}</p>
                    {starItem(el.star)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
