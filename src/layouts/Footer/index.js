import "./style.scss";
import { FooterData } from "../../mock";
import Input from "../../components/Input";
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
  return (
    <footer>
      <div className="container footer_wrapper">
        <ul className="footer_right">
          {FooterData.map((el) => {
            return (
              <li key={el.id}>
                <p className="footer_title">{el.category}</p>
                {el.items.map((element) => {
                  return (
                    <div id={element.id} className="footer_item">
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
            {footerImg.map((el) => {
              return <li className="img_item" key={el.id}>
                <img src={el.img} />
              </li>;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
