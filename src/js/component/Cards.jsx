import React, { useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/Cards.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function Cards(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="carde">
			<img
				src="https://pyxis.nymag.com/v1/imgs/85a/11a/63a0198b595da412cbd22ccf93ed410766-12---.rhorizontal.w600.jpg?cropType=horizontal"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-bodys">
				<h5 className="card-titl">
					{props.subtitel}
					{props.name}
				</h5>
				<p className="card-text">
					{props.subtitel}
					{props.text1}
				</p>
				<p className="card-text">
					{props.subtitel}
					{props.text2}
				</p>
				<p className="card-text">
					{props.subtitel}
					{props.text3}
				</p>
				<Link
					to={props.url}
					onClick={() => actions.addUrl(props.info.replace("http", "https"))}
					className="btn btn-primary">
					Learn more!
				</Link>
				<button type="button" className="btn btn-warning">
					❤
				</button>
			</div>
		</div>
	);
}
Cards.propTypes = {
	name: PropTypes.string,
	subtitel: PropTypes.string,
	subtitel2: PropTypes.string,
	subtitel3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string,
	url: PropTypes.string,
	info: PropTypes.string
};
export default Cards;
