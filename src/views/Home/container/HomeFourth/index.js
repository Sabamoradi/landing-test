import "./style.scss";
import { HighTrafficDestinations } from "../../../../mock";

const HomeFourth = () => {
  return (
    <div className="home_f_container">
      <div className="container">
        <div className="home_f_title">مقاصد پرتردد</div>
        <ul className="home_f_items">
          {HighTrafficDestinations.map((el) => {
            return (
              <li key={el.id} className="home_f_item">
                <div className="home_f_wrapper">
                    <img src={el.img} />
                    <p>{el.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomeFourth;
