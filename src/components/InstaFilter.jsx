import React, { useContext } from "react";
import { filterValues } from "../utils";
import { FilterContext } from "../App";
import instaPic from "../assets/instagram.jpg";
import styles from "./InstaFilter.module.css";

console.log(instaPic);
const InstaFilter = () => {
  const { filterClass, setFilterClass } = useContext(FilterContext);
  return (
    <div className={`${styles["insta-box"]}`}>
      {filterValues.map((filter) => (
        <figure
          value={filter.class}
          key={filter.class}
          className={`${styles["insta-filter"]}`}
        >
          <img
            src={instaPic}
            alt="Render"
            className={`${styles["insta-pic"]} ${filter.class}`}
          />
          <button className={`${styles["insta-name"]}`}>{filter.name}</button>
        </figure>
      ))}
    </div>
  );
};

export default InstaFilter;
