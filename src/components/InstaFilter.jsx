import React, { useContext } from "react";
import { filterValues } from "../utils";
import { FilterContext } from "../App";
import instaPic from "../assets/instagram.jpg";
import styles from "./InstaFilter.module.css";
import "../App.css";

//console.log(instaPic);
const InstaFilter = () => {
  const { filterClass, setFilterClass } = useContext(FilterContext);

  const handleChange = (event) => {
    setFilterClass(event.target.value);
  };

  return (
    <div className={`${styles["insta-box"]}`}>
      {filterValues.map((filter) => (
        <figure
          value={filterClass}
          label="Filter"
          key={filter.class}
          className={`${styles["insta-filter"]}`}
        >
          <img
            src={instaPic}
            alt="Render"
            className={`${styles["insta-pic"]} ${filter.class}`}
          />
          <button
            onClick={handleChange}
            value={filter.class}
            className={`${styles["insta-name"] && "button"}`}
          >
            {filter.name}
          </button>
        </figure>
      ))}
    </div>
  );
};

export default InstaFilter;
