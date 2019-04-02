import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';
import './index.css';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
const store = createStore(
  reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.querySelector('#root')
);
>>>>>>> fef839c832e38a43500add964907efb5f0fa65f7
