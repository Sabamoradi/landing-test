import "./style.scss";
import { PlaneFill } from "../../../../assets/icons";
import { suggestedFlight } from "../../../../mock";

const HomeSecond = () => {
  return (
    <div className="h_second_container">
      <div className="container">
        <h5>پروازهای پیشنهادی</h5>

        <ul className="h_second_data">
          {suggestedFlight.map((element) => {
            return (
              <li className="second_data_wrapper" key={element.id}>
                <div className="second_data_item">
                  <div className="second_data_right">
                    {element.special && (
                      <div className="second_special">فروش ویژه</div>
                    )}
                    <div className="second_text">
                      <div className="second_text_top">
                        <p>{element.origin}</p>
                        <PlaneFill />
                        <p>{element.destination}</p>
                      </div>
                      <div className="second_text_bottom">
                        <p>{element.lowerBound}</p>
                        <p>تا {element.upperBound}</p>
                      </div>
                    </div>
                  </div>
                  <div className="second_data_left">
                    <p className={element.special && 'second_data_line'}>{element.special ? element.exactPrice : "قیمت از"}</p>
                    <p>
                      <strong>{element.priceWithSale}</strong>
                      تومان
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomeSecond;
