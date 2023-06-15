import "./style.scss";

const HeaderDesktop = (props) => {
  const { menuItems, menuLeftItems } = props;
  return (
    <div className="header-container desktop_header">
      <div className="container">
        <div className="header-items">
          <div className="header-logo">
          تست برنامه‌نویسی
          </div>
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

export default HeaderDesktop;
