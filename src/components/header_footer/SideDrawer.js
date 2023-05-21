import React from "react";

import { Drawer, List } from "@material-ui/core";

import { renderItem } from "./RenderItem";

const SideDrawer = (props) => {
  const links = [
    { where: "featured", value: "To top" },
    { where: "venueinfo", value: "Venue INFO" },
    { where: "highlights", value: "Highlights" },
    { where: "pricing", value: "Pricing" },
    { where: "location", value: "Location" },
  ];

  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;
