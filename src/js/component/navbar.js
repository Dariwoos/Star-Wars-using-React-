import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navLine">
			<div className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Default
				</a>
				<button
					className="btn btn-outline-secondary dropdown-toggle"
					type="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown
				</button>
				<div className="dropdown-menu">
					<a className="dropdown-item" href="#">
						Action
					</a>
				</div>
			</div>
		</div>
	);
};
