import React from "react";

export const TableBody = ({ items, removeItem }) => {
  const rows = items.map((item, index) => {
    const properties = Object.values(item);

    return (
      <tr key={index}>
        {properties.map((property, index) => <td key={index}>{property}</td>)}
        <td key="remove">
          <button onClick={() => removeItem(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}