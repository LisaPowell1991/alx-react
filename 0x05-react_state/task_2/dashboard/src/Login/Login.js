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
		gap: '2em',
		alignItems: 'center',
	},
	input: {
		height: '1.4em',
		marginLeft: '0.75em',
	},
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
					<button>OK</button>
				</section>
			</div>
		</>
	);
};

export default Login;
