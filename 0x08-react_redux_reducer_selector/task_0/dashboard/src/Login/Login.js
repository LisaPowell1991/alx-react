import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	AppBody: {
		fontSize: '1.4em',
		height: '45%',
	},
	formInputs: {
		display: 'flex',
		gap: '1em',
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		'@media (min-width: 900px)': {
			flexDirection: 'row',
			alignItems: 'flex-start',
		},
	},
	input: {
		height: '1.4em',
		marginLeft: '0.75em',
	},
	button: {
		marginTop: '1em',
		'@media (min-width: 900px)': {
			marginTop: '0',
		},
	},
});

const Login = ({ logIn }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [enableSubmit, setEnableSubmit] = useState(false);

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		logIn(email, password);
	};

	const updateEnableSubmit = () => {
		// Check if both email and password fields are not empty
		if (email.length > 0 && password.length > 0) {
			setEnableSubmit(true);
		} else {
			setEnableSubmit(false);
		}
	};

	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
		updateEnableSubmit();
	};

	const handleChangePassword = (event) => {
		setPassword(event.target.value);
		updateEnableSubmit();
	};

	useEffect(() => {
		updateEnableSubmit();
	}, [email, password]);

	return (
		<>
			<div className={css(styles.AppBody)}>
				<p>Login to access the full dashboard</p>
				<form onSubmit={handleLoginSubmit} className={css(styles.formInputs)}>
					<section className='input'>
						<label htmlFor='email'>Email:</label>
						<input type='email' name='email' id='email' className={css(styles.input)}
							value={email} onChange={handleChangeEmail} />
					</section>
					<section className='input'>
						<label htmlFor='password'>Password:</label>
						<input type='password' name='password' id='password' className={css(styles.input)}
							value={password} onChange={handleChangePassword} />
					</section>
					<input type="submit" value="OK" className={css(styles.button)}
						disabled={!enableSubmit} />
				</form>
			</div>
		</>
	);
};

export default Login;
