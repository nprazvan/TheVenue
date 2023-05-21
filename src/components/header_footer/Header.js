import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";

//AppBar = a menu lookalike from the MUI library

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(true);

  const sideDrawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderShow(false);
    } else {
      setHeaderShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerShow ? "transparent" : "#2f2f2f",
        boxShadow: "none",
        padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The venue</div>
          <div className="header_logo_title">MUSICAL EVENTS</div>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={sideDrawerHandler}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer open={drawerOpen} onClose={sideDrawerHandler} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
