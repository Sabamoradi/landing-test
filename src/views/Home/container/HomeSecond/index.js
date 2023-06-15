import "./style.scss";
import { PlaneFill } from "../../../../assets/icons";

const HomeSecond = () => {
  return (
    <div className="h_second_container">
      <div className="container">
        <h5>پروازهای پیشنهادی</h5>

        <ul className="h_second_data">
          <li className="second_data_wrapper">
            <div className="second_data_item">
              <div className="second_data_right">
                <div className="second_special">فروش ویژه</div>
                <div className="second_text">
                  <div className="second_text_top">
                    <p>تهران</p>
                    <PlaneFill />
                    <p>مشهد</p>
                  </div>
                </div>
              </div>
              <div className="second_data_left"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeSecond;
