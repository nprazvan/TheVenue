import { ListItem } from "@material-ui/core";

import React from "react";

export const renderItem = (item) => {
  return (
    <ListItem
      button
      onClick={() => {
        alert(item.where);
      }}
      key={item.where}
    >
      {item.value}
    </ListItem>
  );
};
