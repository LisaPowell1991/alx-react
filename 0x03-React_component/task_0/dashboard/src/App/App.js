import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

// Convert App from a function to a class that extends React.Component
class App extends React.Component {
  // The constructor is where you initialize state and bind methods
  constructor(props) {
    super(props);

    // If you had state or needed to bind methods, you'd do that here
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
      ]
    };
  }

  render() {
    // Updated to use state instead of the original constants
    const updatedListNotifications = this.state.listNotifications.map((notification) => ({
      ...notification,
      id: notification.id + this.state.listNotifications.length
    }));

    return (
      <React.Fragment>
        <Notification listNotifications={updatedListNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {this.props.isLoggedIn ? <CourseList listCourses={this.state.listCourses} /> : <Login />}
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
