import React from "react";
import { Link } from "react-router-dom";
import NavBarItem from "../navbar-menu-item/navbar-menu-item";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navbar.scss";
const Navbar = () => {
	return (
		<navbar>
			<Link className="logo-container" to="/">
				<Logo className="logo"></Logo>
			</Link>
			<div className="options">
				<NavBarItem to="/">home</NavBarItem>
				<NavBarItem to="/shop">shop</NavBarItem>
				<NavBarItem to="/contact">contact</NavBarItem>
			</div>
		</navbar>
	);
};
export default Navbar;
