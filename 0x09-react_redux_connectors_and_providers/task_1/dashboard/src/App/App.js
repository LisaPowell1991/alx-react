import React, { Component } from "react";
import { connect } from "react-redux";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import AppContext from "./AppContext";
import {
	displayNotificationDrawer,
	hideNotificationDrawer,
} from "../actions/uiActionCreators";

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
	static defaultProps = {
		isLoggedIn: false,
		displayDrawer: false,
		displayNotificationDrawer: () => { },
		hideNotificationDrawer: () => { },
	};

	static propTypes = {
		isLoggedIn: PropTypes.bool,
		displayDrawer: PropTypes.bool,
		displayNotificationDrawer: PropTypes.func,
		hideNotificationDrawer: PropTypes.func,
	};

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

		this.handleKeyPress = this.handleKeyPress.bind(this);
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

		const {
			isLoggedIn,
			displayDrawer,
			displayNotificationDrawer,
			hideNotificationDrawer,
		} = this.props;

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
						{isLoggedIn ? (
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

// Define mapStateToProps to pass isLoggedIn and displayDrawer from Redux state to props
export const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.get('isUserLoggedIn'),
		displayDrawer: state.get('isNotificationDrawerVisible')
	};
};

// Define mapDispatchToProps to pass the action creators to props
const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
};

// Connect mapStateToProps to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);