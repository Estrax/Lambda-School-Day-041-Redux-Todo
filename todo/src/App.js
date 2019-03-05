import React, { Component } from 'react';
import Todos from './containers/todos';
import TodoForm from './components/todoForm';
import Header from './components/header';
import Footer from './components/footer';

import { AppDiv } from './styles';

class App extends Component {
	render() {
		return (
			<AppDiv>
				<Header />
				<Todos />
				<TodoForm />
				<Footer />
			</AppDiv>
		);
	}
}

export default App;
