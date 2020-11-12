import React, { Component } from "react";
import './App.css';
import data from './data.json'
import Table from "./components/table";
import TableSlider from "./components/tableSlider";


class App extends Component {

  constructor(props){
    
//ordered will sort the data ascending instead of descending.
//min and max will set our starting points for the slider by selecting the first and last year in the data provided.
    let ordered = data.sort((x,y) => x.year - y.year); 
    let min = ordered[0]["year"];
    let max = ordered[data.length-1]["year"];

    super(props);

    this.state = {
      data: ordered,
      min: min,
      max: max,
      range: [min, max]
    }; 
  }

  handleSlider = range => {
    this.setState({ range });
  };

  render() {
    const { range } = this.state;
  return (
    <div className="App">
          <TableSlider
            min={this.state.min}
            max={this.state.max}
            value={range}
            onChange={this.handleSlider}
            />
          <Table
            data={this.state.data}
            range={range}
          />
        </div>
  );
}
}

export default App;
