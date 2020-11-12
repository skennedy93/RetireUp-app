import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function TableSlider(props) {

  const min = props.min;
  const max = props.max;

  return (
      <div>
        <Range
        min={min}
        max={max}
        value={props.value}
        onChange={props.onChange}
        allowCross = {false}
        />
      </div>
    );
  }