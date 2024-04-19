import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	AppHeader: {
		fontSize: '1.4rem',
		color: 'red',
		display: 'flex',
		alignItems: 'center',
		padding: '1.2em',
	},
	AppHeaderImg: {
		width: '200px',
		height: '200px',
	},

})

function Header() {
	return (
		<div className={css(styles.AppHeader)}>
			<img src={logo} alt='Holberton' className={css(styles.AppHeaderImg)} />
			<h1>School dashboard</h1>
		</div>
	);
};

export default Header;
