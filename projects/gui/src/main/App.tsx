import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ApplicationContainer from './ApplicationContainer';
import configureStore from '../configureAppStore';

const App = () => {
	return (
		<Provider store={configureStore()}>
			<BrowserRouter>
				<ApplicationContainer />
			</BrowserRouter>
		</Provider>
	)
}

export default App;
