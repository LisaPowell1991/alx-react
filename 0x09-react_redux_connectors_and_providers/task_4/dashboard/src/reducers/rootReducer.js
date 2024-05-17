import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
    course: courseReducer,
    notification: notificationReducer,
    ui: uiReducer
});

export default rootReducer;