import "./style.scss";
import { FooterData } from "../../mock";
import Input from "../../components/Input";
import { ChevronDown } from "../../assets/icons";
import { useState } from "react";

const footerImg = [
  {
    id: 1,
    img: require("../../assets/images/footer/1.png"),
  },
  {
    id: 2,
    img: require("../../assets/images/footer/2.png"),
  },
  {
    id: 3,
    img: require("../../assets/images/footer/3.png"),
  },
  {
    id: 4,
    img: require("../../assets/images/footer/4.png"),
  },
];

const Footer = () => {
  const [toggleItem, setToggleItem] = useState(-1);

  const toggleClick = (val) => {
    if (toggleItem === val) {
      setToggleItem(-1);
    } else {
      setToggleItem(val);
    }
  };

  return (
    <footer>
      <div className="container footer_wrapper">
        <ul className="footer_right">
          {FooterData.map((el, index) => {
            return (
              <li
                key={`${index}-footerTitle`}
                className={`${toggleItem === el.id ? "show_item" : ""}`}
              >
                <p className="footer_title" onClick={() => toggleClick(el.id)}>
                  {el.category}
                  <ChevronDown />
                </p>
                {el.items.map((element, index) => {
                  return (
                    <div key={element.id} className="footer_item">
                      {element.title}
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
        <div className="footer_left">
          <div className="footer_left-title">همراه ما باشید</div>
          <Input
            placeHolder="ایمیل خود را برای خبرنامه وارد کنید"
            haveButton={true}
            btnTitle={"ثبت"}
          />
          <ul className="img_footer_wrapper">
            {footerImg.map((el, index) => {
              return (
                <li className="img_item" key={`${index}-footerimg`}>
                  <img src={el.img} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
