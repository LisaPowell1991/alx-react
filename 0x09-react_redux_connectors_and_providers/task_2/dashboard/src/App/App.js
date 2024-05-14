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
});

class App extends React.Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress = (e) => {
		if (e.ctrlKey && e.key === 'h') {
			alert('Logging you out');
			this.logOut();
		}
	};

	listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];

	markNotificationAsRead = (id) => {
		// Dispatch an action to mark notification as read in Redux store
	};

	render() {
		const { user, listNotifications, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;
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
								<Login login={login} />
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
	login: PropTypes.func.isRequired,
};

// Define mapStateToProps and export the connected component
export const mapStateToProps = (state) => ({
	isLoggedIn: state.get('isUserLoggedIn'),
	displayDrawer: state.get('isNotificationDrawerVisible'),
});

// Define mapDispatchToProps and export the connected component
const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
	login: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
