import React from 'react';
import styled from 'styled-components'

export default function Table(props){
    const Table = styled.table`
    width: 100%; 
    border-collapse: collapse; 
    `
    const TableHeader = styled.th`
    background: #333; 
    color: white; 
    font-weight: bold; 
    `
    const TableData = styled.td`
    padding: 5px; 
    border: 1px solid #ccc; 
    `

// setting the minimum and maximum numbers on the range by subtracting years from the selected numbers on the slider
// this will allow me to use the slice method on those selected years to filter out anything that is not in between the 
// two selected years on the slider

    let max = props.range[1]-1925; 
    let min = props.range[0]-1926;
    let info = props.data.slice(min, max);
    

// going through every total return filtered by the slider and adding or subtracting to the total amount depending on if the
// number is positive or negative. toFixed will give us the 2 digits after the decimal.
    const cumulativeReturns = (num) => {
        let count = 0;
        let sum = 0;
        for(let i = 0; i <= num; i++){
          count += Number(info[i].totalReturn)
          sum = count.toFixed(2)
        }
        return sum
      }

    return(
        <Table>
            <tbody>
            <tr>
                <TableHeader>Year</TableHeader>
                <TableHeader>Total Return</TableHeader>
                <TableHeader>Cumulative Returns</TableHeader>
            </tr>
                {
                    info.map((data, index) => (
                        <tr key={data.year}>
                            <TableData>{data.year}</TableData>
                            <TableData>{data.totalReturn}</TableData>
                            <TableData>{cumulativeReturns(index)}</TableData>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

