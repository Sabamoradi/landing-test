import "./style.scss";
import { ChevronDown } from "../../../../assets/icons";
import { useState } from "react";
import { HelpData } from "../../../../mock";

const HomeFifth = () => {
  const [toggleItem, setToggleItem] = useState(-1);

  const checkToggle = (val) => {
    if (val === toggleItem) {
      setToggleItem(-1);
    } else {
      setToggleItem(val);
    }
  };
  return (
    <div className="home_fi_container">
      <div className="container">
        <p className="fi_title">پرسش‌های متداول</p>
        <div className="fi_data_wrapper">
          {HelpData.map((el) => {
            return (
              <div key={el.id} className="fi_data">
                <div className="fi_data_top" onClick={() => checkToggle(el.id)}>
                  <p>{el.title}</p>
                  <ChevronDown />
                </div>
                <div
                  className={`fi_data_bottom ${
                    toggleItem === el.id ? "openItem" : ""
                  }`}
                >
                  {el.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeFifth;
