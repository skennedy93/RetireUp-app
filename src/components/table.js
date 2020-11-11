import React from 'react';

export default function Table(props){

    let min = props.range[1]-1925;
    let max = props.range[0]-1926;
    let info = props.data.slice(max, min);

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

