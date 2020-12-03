import React from "react";
import PropTypes from "prop-types";
import "../../styles/Cards.css";

function Cards(props) {
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
				<a href="" className="btn btn-primary">
					Learn more!
				</a>
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
	text3: PropTypes.string
};
export default Cards;
