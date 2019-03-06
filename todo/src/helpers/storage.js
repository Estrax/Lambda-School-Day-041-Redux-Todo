import initialState from "./initialState";

export const save = (state) => {
    localStorage.setItem('todos', encode(state));
}

export const load = () => {
    if(localStorage.getItem('todos') === undefined || localStorage.getItem('todos') === null){
        return initialState();
    }
    if(localStorage.getItem('todos').length === 0){
        return initialState();
    }

    return decode(localStorage.getItem('todos'));
}

function encode(str) {
    return JSON.stringify(str);
}

function decode(str) {
    return JSON.parse(str);
}