import "./style.scss";
import Input from "../../../components/Input";
import Button from "../../Button";

const AllFilter = () => {
  return (
    <div className="filter_wrapper">
      <ul className="white_card_top">
        <li className="white-top_item">
          <span></span>
          <p>یک طرفه</p>
        </li>
        <li className="white-top_item">
          <span></span>
          <p>رفت و برگشت</p>
        </li>
      </ul>
      <div className="white_card-bottom">
        <div className="input-card">
          <Input hasLabel={true} labelText="مبدا" />
        </div>
        <div className="input-card">
          <Input hasLabel={true} labelText="مقصد" />
        </div>
        <div className="input-card">
          <Input hasLabel={true} labelText="تاریخ رفت" />
        </div>
        <div className="input-card">
          <Input hasLabel={true} labelText="مسافران و کلاس" />
        </div>
        <div className="input-card">
          <Button text="جستجو" backgroundColor={"#ff7913"} textColor="#fff" height="42" />
        </div>
      </div>
    </div>
  );
};

export default AllFilter;
