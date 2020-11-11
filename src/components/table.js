import React from 'react';

export default function Table(props){

// setting the minimum and maximum numbers on the range by subtracting years from the selected numbers on the slider
// this will allow me to use the slice method on those selected years to filter out anything that is not in between the 
// two selected years on the slider

    let max = props.range[1]-1925; 
    let min = props.range[0]-1926;
    let info = props.data.slice(min, max);

    return(
        <table>
            <tbody>
            <tr>
                <th>Year</th>
                <th>Total Return</th>
            </tr>
                {
                    info.map(data => (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{data.totalReturn}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

