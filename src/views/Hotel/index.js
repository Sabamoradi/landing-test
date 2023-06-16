import "./style.scss";
import { HotelData } from "../../mock";
import HotelCard from "./container/HotelCard";
import { ChevronDown } from "../../assets/icons";
import Input from "../../components/Input";
import { useState } from "react";
import CheckBox from "../../components/chekBox";
import { hotelStarFilter, hotelType } from "../../configs/enum";
import AllFilter from "../../components/container/AllFilter";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const [toggleItem, setToggleItem] = useState(-1);
  const [toggleMenu, setToggleMenu] = useState(false);
  let userId = useLocation()
  console.log(userId);
  

  const checkToggle = (val) => {
    if (val === toggleItem) {
      setToggleItem(-1);
    } else {
      setToggleItem(val);
    }
  };
  return (
    <div className="hotel_container">
      <div className="hotel_filter_top">
        <div className="container">
          <AllFilter showItem={userId.search ? false : true} />
        </div>
      </div>
      <div className="container">
        <div className="hotel_wrapper">
          <div className={`hotel_right ${toggleMenu ? "open-filter" : ""}`}>
            <div className="hotel_right-wrapper">
              <div className="hotel_right-title-m">
                <h6>فیلتر کردن نتایج</h6>
                <span onClick={() => setToggleMenu(false)}>X</span>
              </div>
              <div className="hotel_right-title">
                <h5>فیلتر ها</h5>
                <p>حذف فیلترها</p>
              </div>
              <div className="divider"></div>
              <div
                className={`hotel_filter-first ${
                  toggleItem === 1 ? "open" : ""
                }`}
              >
                <div className="title" onClick={() => checkToggle(1)}>
                  <p>نام هتل</p>
                  <ChevronDown />
                </div>
                <div className="hotel_filter-item">
                  <Input
                    placeHolder="نام هتل را جستجو کنید"
                    haveButton={false}
                    searchIcon={true}
                  />
                </div>
              </div>
              <div className="divider"></div>
              <div
                className={`hotel_filter-first ${
                  toggleItem === 2 ? "open" : ""
                }`}
              >
                <div className="title" onClick={() => checkToggle(2)}>
                  <p>کلاس هتل</p>
                  <ChevronDown />
                </div>
                <div className="hotel_filter-item">
                  {hotelStarFilter.map((el) => {
                    return (
                      <div className="filter-item_data" key={el.id}>
                        <CheckBox
                          checkItem={() => (el.selected = true)}
                          checkBoxSelected={el.selected}
                          checkBoxId={el.id}
                        />
                        <p>{el.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="divider"></div>
              <div
                className={`hotel_filter-first ${
                  toggleItem === 3 ? "open" : ""
                }`}
              >
                <div className="title" onClick={() => checkToggle(3)}>
                  <p>نوع اقامتگاه</p>
                  <ChevronDown />
                </div>
                <div className="hotel_filter-item">
                  {hotelType.map((el) => {
                    return (
                      <div className="filter-item_data" key={el.id}>
                        <CheckBox
                          checkItem={() => (el.selected = true)}
                          checkBoxSelected={el.selected}
                          checkBoxId={el.id}
                        />
                        <p>{el.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="divider"></div>
              <div
                className={`hotel_filter-first ${
                  toggleItem === 4 ? "open" : ""
                }`}
              >
                <div className="title" onClick={() => checkToggle(4)}>
                  <p>نوع غذا</p>
                  <ChevronDown />
                </div>
                <div className="hotel_filter-item">
                  {hotelType.map((el) => {
                    return (
                      <div className="filter-item_data" key={el.id}>
                        <CheckBox
                          checkItem={() => (el.selected = true)}
                          checkBoxSelected={el.selected}
                          checkBoxId={el.id}
                        />
                        <p>{el.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="hotel_left">
            <ul className="hotel_left-filter">
              <li onClick={() => setToggleMenu(true)}>فیلتر کردن</li>
              <li>مرتب‌سازی</li>
            </ul>
            <h2 className="hotel_left_title">هتل‌های مشهد</h2>
            <div className="hotel_left_result">
              <div className="hotel-result_right">
                <p>27 هتل یافت شد</p>
                <p>.4 شب</p>
              </div>
            </div>
            <div className="hotel_data-wrapper">
              {HotelData.map((el) => {
                return <HotelCard key={el.id} hotelData={el} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
