import { useState } from "react";
import "./style.scss";

const Filter = (props) => {
  const { items , selectItem , selectFilter } = props;
  return (
    <div className="filter_container">
      <ul className="filter_categories">
        {items.map((element) => {
          return (
            <li
              key={element.id}
              onClick={() => selectFilter(element.category)}
              className={`filter_item ${
                selectItem === element.category ? "selected" : ""
              }`}
            >
              {element.title}
            </li>
          );
        })}
      </ul>
      
    </div>
  );
};

export default Filter;
