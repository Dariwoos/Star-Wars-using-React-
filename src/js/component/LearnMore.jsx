import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/LearnMore.css";
import { Context } from "../store/appContext";

function LearnMore(props) {
	const { store, actions } = useContext(Context);
	const getingInfo = props.location.state.iteam;
	console.log(props);
	useEffect(() => {
		actions.getDetail(store.path);
	}, []);
	return (
		<div className="conten">
			<header className="head">
				<img
					clas
					src="https://pyxis.nymag.com/v1/imgs/85a/11a/63a0198b595da412cbd22ccf93ed410766-12---.rhorizontal.w600.jpg?cropType=horizontal"
					className="image"
					alt="Star War"
				/>
				<p className="letters">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aliquam voluptate quos et,
					molestiae fuga error asperiores nisi quaerat sed similique deserunt magni saepe quis pariatur eaque
					tenetur. Possimus, quibusdam est aliquam id sapiente sunt harum architecto ab fugiat, magni
					consequuntur rerum? Architecto, obcaecati, mollitia illum corporis fugiat voluptatem dolorum et
					ratione velit quisquam nesciunt, sapiente iste maxime libero totam! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Nobis voluptates ut officia praesentium culpa, veniam pariatur porro
					reprehenderit at, libero alias in magnam et, asperiores odit harum? Sunt quo, ipsum nihil nobis
					optio odit? Maxime inventore excepturi natus, mollitia alias, dolore eaque possimus iste, explicabo
					vero perspiciatis magnam expedita architecto.
				</p>
			</header>
			<div className="line" />
			<footer className="redInfo">
				<p>{getingInfo.name}</p>
				<p>
					{getingInfo.subtitel2}
					{getingInfo.text1}
				</p>
				<p>{getingInfo.hair_color}</p>
				<p>{getingInfo.gender}</p>
				<p>
					{getingInfo.subtitel}
					{getingInfo.text2}
				</p>
			</footer>
		</div>
	);
}
LearnMore.propTypes = {
	location: PropTypes.object
};

export default LearnMore;
