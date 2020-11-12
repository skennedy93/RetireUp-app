import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function TableSlider(props) {

  const min = props.min;
  const max = props.max;
  const marks = {1926:min, 2019:max};
  const sliderStyle = { marginBottom: 25};

  return (
      <div style = {sliderStyle}>
        <Range
        min={min}
        max={max}
        value={props.value}
        onChange={props.onChange}
        allowCross = {false}
        marks={marks}
        />
      </div>
    );
  }