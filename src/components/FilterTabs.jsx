import "./FilterTabs.css";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#ff5c00",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#ff3162",
    },
  },
});

const FilterTabs = () => {
  const [tabFilter, setTabFilter] = useState("instaFilter");

  const handleChange = (event, newValue) => {
    setTabFilter(newValue);
  };

  const classes = useStyles();

  return (
    <div className="filter-tabs">
      <Tabs
        value={tabFilter}
        onChange={handleChange}
        variant="fullWidth"
        className={classes.tabs}
      >
        <Tab value="instaFilter" label="Instagram Filter" />
        {/* <Tab value="customFilter" label="Custom Filter" /> */}
      </Tabs>
    </div>
  );
};

export default FilterTabs;
