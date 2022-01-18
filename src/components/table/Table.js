import React from "react";
import { TableHeader } from "../table/TableHeader";
import { TableBody } from "../table/TableBody";

export const Table = ({ page, items, removeItem }) => {
  return (
    <table>
      <TableHeader page={page} />
      <TableBody items={items} removeItem={removeItem} />
    </table>
  );
}