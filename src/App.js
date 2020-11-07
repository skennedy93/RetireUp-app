import React, { Component } from "react";
import './App.css';
import data from './data.json'

class App extends Component {
  render() {
  return (
    <div className="App">
      <table>
        <tbody>
        <tr>
          <th>Year</th>
          <th>Total Return</th>
          <th>Cumulative Returns</th>
        </tr>
          {data.map(data => {
                  return (
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{data.totalReturn}</td>
                </tr>
                 );
                })}
        </tbody>
      </table>
    </div>
  );
}
}

export default App;
