import { SearchIcon } from "../../assets/icons";
import "./style.scss";

const Input = (props) => {
  const { placeHolder,haveButton , btnTitle , searchIcon } = props;
  return (
    <div className="input_wrapper">
      {
        searchIcon && <SearchIcon/>
      }
      <input placeholder={placeHolder} />
      {
        haveButton && <button className="btn_input" style={{color:'#1773dc'}}>{btnTitle}</button>
      }
    </div>
  );
};

export default Input;
