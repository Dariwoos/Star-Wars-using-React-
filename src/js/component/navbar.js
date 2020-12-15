import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="navLine">
			<div className="navbar navbar-light bg-light cole">
				<Link className="navbar-brand" to="">
					<img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png" />
				</Link>
				<DropdownButton id="dropdown-item-button-Warning " title={" Favorite " + store.favorites.length}>
					{store.favorites.length > 0 ? (
						store.favorites.map((fav, index) => {
							return (
								<Dropdown.Item key={index}>
									<p>{fav}</p>
									<i
										className="far fa-trash-alt"
										onClick={() => {
											actions.deleteItem(index);
										}}
									/>
								</Dropdown.Item>
							);
						})
					) : (
						<Dropdown.Item>Empty</Dropdown.Item>
					)}
				</DropdownButton>
			</div>
		</div>
	);
};

/*{store.favorites.map((fav, index) => {
						return <Dropdown.Item key={index}>{fav}</Dropdown.Item>;
					})}*/
