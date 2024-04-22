import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	AppBody: {
		fontSize: '1.4em',
		padding: '1.2em',
		height: '45%',
	},
	formInputs: {
		display: 'flex',
		gap: '1.5em',
		alignItems: 'center',
		'@media (max-width: 900px)': {
			flexDirection: 'column',
			gap: '0.25em',
			alignItems: 'flex-start',

		},
		'@media (min-width: 901px)': {
			flexDirection: 'row',
		},
	},
	input: {
		height: '1.4em',
		marginLeft: '0.75em',
	},
	buttonContainer: {
		width: '20%',
	}
});

const Login = () => {
	return (
		<>
			<div className={css(styles.AppBody)}>
				<p>Login to access the full dashboard</p>
				<section className={css(styles.formInputs)}>
					<section className='input'>
						<label htmlFor='email'>Email:</label>
						<input type='email' name='email' id='email' className={css(styles.input)} />
					</section>
					<section className='input'>
						<label htmlFor='password'>Password: </label>
						<input type='password' name='password' id='password' className={css(styles.input)} />
					</section>
					<div className={css(styles.buttonContainer)}>
						<button>OK</button>
					</div>
				</section>
			</div>
		</>
	);
};

export default Login;
