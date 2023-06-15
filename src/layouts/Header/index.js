import "./style.scss";
import { ShopIcon, UserIcon } from "../../assets/icons";

const menuItems = [
  {
    id: 1,
    title: "تست برنامه‌نویسی",
  },
  {
    id: 2,
    title: "بلیط هواپیما",
  },
  {
    id: 3,
    title: "رزرو هتل",
  },
];
const menuLeftItems = [
  {
    id: 1,
    icon: <ShopIcon />,
    title: "پیگیری خرید",
  },
  {
    id: 2,
    icon: <UserIcon />,
    title: "ورود / ثبت‌ نام",
  },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="header-items">
          <ul className="header-right">
            {menuItems.map((el) => {
              return (
                <li className="header-item" key={el.id}>
                  <p>{el.title}</p>
                </li>
              );
            })}
          </ul>
          <ul className="header-left">
            {menuLeftItems.map((element) => {
              return (
                <li key={element.id} className="left-item_wrapper">
                  <div className="left-item">
                    {element.icon}
                    <p>{element.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
