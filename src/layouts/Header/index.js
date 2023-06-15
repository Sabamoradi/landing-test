import './style.scss'

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

const Header = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="header-items">
          <ul className="header-right">
            {menuItems.map((el) => {
              return (
                <li className='header-item' key={el.id}>
                  <p>{el.title}</p>
                </li>
              );
            })}
          </ul>
          <div className="header-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
