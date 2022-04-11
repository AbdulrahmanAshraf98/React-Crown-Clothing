import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.scss";
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const navigate = useNavigate();
	return (
		<div
			className={size ? `${size} menu-item` : `menu-item`}
			onClick={() => {
				navigate(`${linkUrl}`);
			}}>
			<img src={imageUrl} />
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">shop now</span>
			</div>
		</div>
	);
};
export default MenuItem;
