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
	greeting: {
		margin: '1rem',
		fontSize: '1rem',
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
				{user.isLoggedIn && (
					<section className={css(styles.greeting)} id="logoutSection">
						Welcome<strong> {user.email} </strong>
						<em>
							<a href="#" onClick={logOut}>
								(logout)
							</a>
						</em>
					</section>
				)}
			</div>
		);
	}
}
export default Header;
