import "./style.scss";
import { ChevronDown, MarkIcon } from "../../../../assets/icons";

const HotelCard = (props) => {
  const { hotelData } = props;
  return (
    <div className="hotel_card-container">
      <div className="card_wrapper">
        <div className="card_right">
          <div className="card_right_wrapper">
            <img src={hotelData.img} alt={hotelData.hotelName} />
            <div className="card-text">
              <div className="card_top">
                <p className="name">{hotelData.hotelName}</p>
                <div className="card-right-icon">
                  <MarkIcon />
                </div>
              </div>
              <div className="card_bottom">
                <p className="address">{hotelData.address}</p>
                <p className="link">
                  نمایش روی نقشه <ChevronDown />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card_left">
          <div className="text_wrapper">
            <p className="card_left-price">قیمت {hotelData.days} شب از</p>
            <p className="card_exact_price">
              <strong>{hotelData.price}</strong>
              تومان
            </p>
          </div>
          <div className="card_left_btn">جزئیات و رزرو</div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
