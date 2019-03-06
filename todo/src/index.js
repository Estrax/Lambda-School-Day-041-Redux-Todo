import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Product Sans';
		font-style: normal;
		font-weight: 400;
		src: local('Open Sans'), local('OpenSans'), url(https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');
	}

	html {
		overflow: hidden;
		font-size: 62.5%;
		margin: 0;
		padding: 0;
	}

	* {
		box-sizing: border-box;
	}

	body {
		width: 100vw;
		height: 100vh;
		font-size: 1.8rem;
		line-height: 1.5;
		font-family: 'Product Sans';
	}

	#root {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #3A2D3B;
		background: linear-gradient(45deg, #3A2D3B, #3A9D9B);
		height: 100%;
	}
`;

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyles />
		<App />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
