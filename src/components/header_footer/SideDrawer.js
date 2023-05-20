import React from "react";

import { Drawer, List, ListItem } from "@material-ui/core";
import { render } from "@testing-library/react";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venueinfo", value: "Venue INFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "location" },
  ];

  const renderItem = (item) => {
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

  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;
