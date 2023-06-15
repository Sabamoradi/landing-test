import { ShopIcon, UserIcon } from "../../assets/icons";
import HeaderDesktop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeadeMobile";

const menuItems = [
  {
    id: 1,
    title: "بلیط هواپیما",
  },
  {
    id: 2,
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
    <>
      <HeaderDesktop menuItems={menuItems} menuLeftItems={menuLeftItems} />
      <HeaderMobile menuLeftItems={menuLeftItems} menuItems={menuItems} />
    </>
  );
};

export default Header;
