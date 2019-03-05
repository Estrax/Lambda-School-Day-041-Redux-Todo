import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/actionTypes';
import { save, load } from '../helpers/storage';

const initialState = load();

export default (state = initialState, action) => {
	switch(action.type){
		case ADD_TODO:
			if(action.payload.trim().length === 0) return state;
			save({
				...state,
				todos: [...state.todos, {
					id: state.todos.length,
					text: action.payload,
					completed: false
				}]
			});
			return load();
		
		case REMOVE_TODO:
			save({
				...state,
				todos: state.todos.filter(elem => elem.id !== action.payload)
			});
			return load();
		
		case TOGGLE_TODO:
			save({
				...state,
				todos: state.todos.map(elem => elem.id === action.payload ? {...elem, completed: !elem.completed} : elem)
			});
			return load();
			
		default:
			return load();
	}
}