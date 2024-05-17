import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from "../actions/uiActionCreators";

const styles = StyleSheet.create({
	AppHeader: {
		fontSize: '1.25rem',
		color: 'red',
		display: 'flex',
		alignItems: 'center',
		padding: '1.2em',
		width: '100%',
	},
	AppHeaderImg: {
		width: '150px',
		height: '150px',
	},
	greeting: {
		margin: '1rem',
		fontSize: '1rem',
	},

})

export class Header extends React.Component {
	render() {
		const { user, logout } = this.props;
		return (
			<div className={css(styles.AppHeader)}>
				<img src={logo} alt='Holberton' className={css(styles.AppHeaderImg)} />
				<h1>School dashboard</h1>
				{user.isLoggedIn && (
					<section className={css(styles.greeting)} id="logoutSection">
						Welcome<strong> {user.email} </strong>
						<em>
							<a href="#" onClick={logout}>
								(logout)
							</a>
						</em>
					</section>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user || { isLoggedIn: false },
});

const mapDispatchToProps = {
	logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);