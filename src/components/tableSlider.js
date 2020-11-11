import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default function TableSlider(props) {

  const Container = styled.table`
  width: 75%; 
  margin: auto;
  `

  const min = props.min;
  const max = props.max;

  return (
      <div>
        <Container>
        <Range
        min={min}
        max={max}
        value={props.value}
        onChange={props.onChange}
        allowCross = {false}
        />
        </Container>
      </div>
    );
  }