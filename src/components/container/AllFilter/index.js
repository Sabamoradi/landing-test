import "./style.scss";
import Input from "../../../components/Input";
import Button from "../../Button";
import { useState } from "react";

const AllFilter = (props) => {
  const { showItem } = props;
  const [radioBox, setRadioBox] = useState(-1);
  const clickRadio = (val) => {
    if (radioBox === val) {
      setRadioBox(-1);
    } else {
      setRadioBox(val);
    }
  };
  return (
    <div className="filter_wrapper">
      <ul className="white_card_top">
        <li className="white-top_item" onClick={() => clickRadio(1)}>
          <span className={`${radioBox === 1 ? "checked" : ""}`}></span>
          <p>یک طرفه</p>
        </li>
        <li className="white-top_item" onClick={() => clickRadio(2)}>
          <span className={`${radioBox === 2 ? "checked" : ""}`}></span>
          <p>رفت و برگشت</p>
        </li>
      </ul>
      <div className="white_card-bottom">
        {showItem && (
          <div className="input-card">
            <Input hasLabel={true} labelText="مبدا" />
          </div>
        )}
        <div className="input-card" style={{width: !showItem ? '25%':'20%'}}>
          <Input hasLabel={true} labelText="مقصد" />
        </div>
        <div className="input-card" style={{width: !showItem ? '25%':'20%'}}>
          <Input hasLabel={true} labelText="تاریخ رفت" />
        </div>
        <div className="input-card" style={{width: !showItem ? '25%':'20%'}}>
          <Input hasLabel={true} labelText="مسافران و کلاس" />
        </div>
        <div className="input-card" style={{width: !showItem ? '25%':'20%'}}>
          <Button
            text="جستجو"
            backgroundColor={"#ff7913"}
            textColor="#fff"
            height="42"
          />
        </div>
      </div>
    </div>
  );
};

export default AllFilter;
