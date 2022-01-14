import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const itemList = props.items.map((item, index) => {
    return <Tile key={index} item={item} />;
  });

  return (
    <div>
      <ol>{itemList}</ol>
    </div>
  );
};
