import React from "react";
import PropTypes from "prop-types";

function LearnMore(props) {
	return (
		<div className="conten">
			<img
				src="https://pyxis.nymag.com/v1/imgs/85a/11a/63a0198b595da412cbd22ccf93ed410766-12---.rhorizontal.w600.jpg?cropType=horizontal"
				className="image"
				alt="Star War"
			/>
			<h1>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus aliquam voluptate quos et, molestiae
				fuga error asperiores nisi quaerat sed similique deserunt magni saepe quis pariatur eaque tenetur.
				Possimus, quibusdam est aliquam id sapiente sunt harum architecto ab fugiat, magni consequuntur rerum?
				Architecto, obcaecati, mollitia illum corporis fugiat voluptatem dolorum et ratione velit quisquam
				nesciunt, sapiente iste maxime libero totam!
			</h1>
		</div>
	);
}
LearnMore.propTypes = {
	enlace: PropTypes.link
};
export default LearnMore;
