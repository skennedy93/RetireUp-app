import React from 'react';
import styled from 'styled-components'

export default function Table(props){
    const Table = styled.table`
    width: 75%; 
    border-collapse: collapse; 
    margin: auto;
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

    return(
        <Table>
            <tbody>
            <tr>
                <TableHeader>Year</TableHeader>
                <TableHeader>Total Return</TableHeader>
                <TableHeader>Cumulative Returns</TableHeader>
            </tr>
                {
                    info.map(data => (
                        <tr key={data.year}>
                            <TableData>{data.year}</TableData>
                            <TableData>{data.totalReturn}</TableData>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

