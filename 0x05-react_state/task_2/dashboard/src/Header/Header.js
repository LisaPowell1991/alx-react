import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

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

})

class Header extends React.Component {
	static contextType = AppContext;

	render() {
		const { user, logOut } = this.context;
		return (
			<div className={css(styles.AppHeader)}>
				<img src={logo} alt='Holberton' className={css(styles.AppHeaderImg)} />
				<h1>School dashboard</h1>
				{user && user.isLoggedIn && (
					<div className={css(styles.logoutSection)} id="logoutSection">
						Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
					</div>
				)}
			</div>
		);
	}
}
export default Header;
