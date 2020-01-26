import React from 'react';

export const TableHeader = ({seatsColumns})=> (
  <tr>
    <td/>
    {seatsColumns.map((column, index) => <td key={index}>{column}</td>)}
  </tr>
)
