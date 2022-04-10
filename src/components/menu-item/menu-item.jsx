import React from "react";
import "./menu-item.scss";
const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={size ? `${size} menu-item` : `menu-item`}>
			<img src={imageUrl} />
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">shop now</span>
			</div>
		</div>
	);
};
export default MenuItem;
