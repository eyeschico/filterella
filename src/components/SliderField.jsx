import { Box, Slider } from "@mui/material";
import React, { useState } from "react";

const SliderField = ({ slide }) => {
  const [value, setValue] = useState(slide.defaultValue);
  const { label, defaultValue, field } = slide;

  const handleSliderValue = (e) => setValue(e.target.value);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Box sx={{ minWidth: "6rem" }}>{label}</Box>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        value={value}
        onChange={handleSliderValue}
        max={200}
      />
    </Box>
  );
};

export default SliderField;
