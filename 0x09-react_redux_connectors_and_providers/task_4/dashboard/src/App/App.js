import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
	App: {
		height: '100vh',
		maxWidth: '100vw',
	},
	headingSection: {
		borderBottom: '4px solid red',
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row-reverse',
	},
})

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			},
			listNotifications: [
				{ id: 1, type: 'default', value: 'New course available' },
				{ id: 2, type: 'urgent', value: 'New resume available' },
				{ id: 3, type: 'urgent', html: getLatestNotification() },
			]
		};

		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
	}

	logIn(email, password) {
		this.setState({
			user: {
				email: email,
				password: password,
				isLoggedIn: true
			}
		});
	}

	logOut() {
		this.setState({
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			}
		});
	}

	listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];

	handleKeyPress(e) {
		if (e.ctrlKey && e.key === 'h') {
			alert('Logging you out');
			this.logOut();
		}
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	markNotificationAsRead(id) {
		this.setState(prevState => ({
			listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
		}));
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	render() {
		const { user, listNotifications } = this.state;
		const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;
		return (
			<AppContext.Provider value={{ user, logOut: this.logOut }}>
				<React.Fragment>
					<div className={css(styles.App)}>
						<div className={css(styles.headingSection)}>
							<Notifications
								displayDrawer={displayDrawer}
								handleDisplayDrawer={displayNotificationDrawer}
								handleHideDrawer={hideNotificationDrawer}
								listNotifications={listNotifications}
								markNotificationAsRead={this.markNotificationAsRead}
							/>
							<Header />
						</div>
						{user.isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={this.listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login logIn={this.logIn} />
							</BodySectionWithMarginBottom>
						)}
						<BodySection title='News from the school'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Perspiciatis at tempora odio, necessitatibus repudiandae
								reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
								ipsa iste vero dolor voluptates.
							</p>
						</BodySection>
						<Footer />
					</div>
				</React.Fragment>
			</AppContext.Provider>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	displayDrawer: false,
	displayNotificationDrawer: () => { },
	hideNotificationDrawer: () => { },
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func,
	hideNotificationDrawer: PropTypes.func,
	login: PropTypes.func,
};

// Define mapStateToProps and export the connected component
export const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.ui.get("isUserLoggedIn"),
		displayDrawer: state.ui.get("isNotificationDrawerVisible"),
	};
};

// Define mapDispatchToProps and export the connected component
const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
	login: loginRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);