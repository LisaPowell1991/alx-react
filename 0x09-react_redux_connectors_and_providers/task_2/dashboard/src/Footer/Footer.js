import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from "react-redux";

function Footer({ user }) {
	return (
		<>
			<div className="App-footer">
				{user.isLoggedIn && (
					<p>
						<a href="#">Contact us</a>
					</p>
				)}
				<p>
					Copyright {getFullYear()} - {getFooterCopy()}
				</p>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	user: state.get("user"),
});

export default connect(mapStateToProps)(Footer);