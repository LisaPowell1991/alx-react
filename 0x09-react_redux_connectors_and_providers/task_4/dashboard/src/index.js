import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import App from "./App/App";
import rootReducer from "./reducers/rootReducer";
import { Map } from "immutable";

// Use compose to combine applyMiddleware and the Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with rootReducer and apply the middleware
const store = createStore(rootReducer, Map(), composeEnhancers(applyMiddleware(thunk)));

const root = document.getElementById('root');

if (!root) {
	throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);