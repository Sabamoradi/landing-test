import "./style.scss";
import { MenuIcon } from "../../assets/icons";
import { useState } from "react";

const HeaderMobile = (props) => {
  const { menuLeftItems, menuItems } = props;
  const [openItem, setOpenItem] = useState(false);
  const OpenMenu = () => {
    setOpenItem(true);
  };
  return (
    <div className="header_mobile">
      <div className="header_mobile_wrapper">
        <MenuIcon onClick={() => OpenMenu()} />
        <div className="header-logo">تست برنامه‌نویسی</div>

        <ul className="header-left">
          {menuLeftItems.map((element) => {
            return (
              <li key={element.id} className="left-item_wrapper">
                <div className="left-item">{element.icon}</div>
              </li>
            );
          })}
        </ul>
        <div className={`header_mobile_item ${openItem ? "show_menu" : ""}`}>
          <div className="close-icon" onClick={()=>setOpenItem(false)}>
            <i>x</i>
          </div>
          <ul className="header-right">
            {menuItems.map((el) => {
              return (
                <li className="header-item_m" key={el.id}>
                  <p>{el.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
