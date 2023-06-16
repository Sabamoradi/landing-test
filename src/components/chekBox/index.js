import "./style.scss";

const CheckBox = (props) => {
  const { checkBoxId , checkBoxSelected, checkItem } = props;
  return (
    <div
      className={`check-box_container ${checkBoxSelected ? "checked" : ""}`}
      onClick={() => checkItem(checkBoxId)}
    ></div>
  );
};

export default CheckBox;
