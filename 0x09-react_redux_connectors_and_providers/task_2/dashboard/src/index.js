import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk';
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

// Create the store with uiReducer and apply the thunk middleware
const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);