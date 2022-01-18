import React from "react";

export const TableHeader = ({ page }) => {
  let row;
  if (page === "contacts") {
    row = (
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Remove</th>
      </tr>
    );
  } else if (page === "appointments") {
    row = (
      <tr>
        <th>Title</th>
        <th>Contact</th>
        <th>Date</th>
        <th>Time</th>
        <th>Remove</th>
      </tr>
    );
  }

  return (
    <thead>{row}</thead>
  );
}