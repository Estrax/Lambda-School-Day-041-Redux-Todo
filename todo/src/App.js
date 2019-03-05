import React, { Component } from 'react';
import Todos from './containers/todos';
import TodoForm from './components/todoForm';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Todos />
				<TodoForm />
				<Footer />
			</>
		);
	}
}

export default App;
