import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar-menu-item";
const NavBarItem = ({ children, to }) => {
	return <NavLink to={to}>{children}</NavLink>;
};
export default NavBarItem;
