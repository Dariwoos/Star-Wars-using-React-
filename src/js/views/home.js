import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";
// Componentes

import Cards from "../component/Cards.jsx";
import LearnMore from "../component/LearnMore.jsx";
// Funciones
function Home() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData("people");
		actions.loadingData("planets");
	}, []);

	return (
		<div className="wholeContain">
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
			<h1>Characters</h1>
			<div className="row container fluid firstCard">
				{store.people.map((characters, index) => {
					return (
						<Cards
							key={index}
							name={characters.name}
							text1={characters.eye_color}
							text2={characters.hair_color}
							text3={characters.gender}
						/>
					);
				})}
			</div>
			<h1>Planets</h1>
			<div className="row seconCard">
				{store.planets.map((planet, index) => {
					return <Cards key={index} name={planet.name} text1={planet.population} text2={planet.terrain} />;
				})}
			</div>
		</div>
	);
}

export default Home;
