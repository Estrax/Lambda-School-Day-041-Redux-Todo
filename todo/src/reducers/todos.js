import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/actionTypes';

const initialState = {
	todos: [
		{
			id: 0,
			text: "First todo",
			completed: false
		},
		{
			id: 1,
			text: "Second todo",
			completed: true
		},
	]
}

export default (state = initialState, action) => {
	switch(action.type){
		case ADD_TODO:
			if(action.payload.trim().length === 0) return state;
			return {
				...state,
				todos: [...state.todos, {
					id: state.todos.length,
					text: action.payload,
					completed: false
				}]
			};
		
		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter(elem => elem.id !== action.payload)
			};
		
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map(elem => elem.id === action.payload ? {...elem, completed: !elem.completed} : elem)
			};
			
		default:
			return state;
	}
}