import styled from 'styled-components';

export const AppDiv = styled.div`
    min-width: 380px;
    max-width: 50%;
	min-height: 200px;
	max-height: 60%;
	background: #fafafa;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	border-radius: 5px;
	box-shadow: 0 0 5px rgba(25,25,25,.25);
    padding: 3rem;
`;

export const TodoTitle = styled.h1`
    margin-top: 0;
    margin-bottom: auto;
    line-height: 1;
`;

export const TodoList = styled.div`
    list-style: none;
    width: 100%;
    overflow-x: hidden;
    margin-top: 2rem;
`;

export const TodoAddForm = styled.form`
    width: 100%;
    position: relative;
    margin: 2rem 0;
`;

export const TodoAddInput = styled.input`
    width: 100%;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
    margin-top: 2rem;
    color: black;
    background: none;
`;

export const TodoAddBtn = styled.input`
    width: 100%;
    border: 2px solid black;
    border-radius: 5px;
    margin: 1rem auto;
    color: black;
    background: none;

    &:hover {
        background: black;
        color: white;
    }
`;

export const TodoText = styled.p`
    font-size: 2rem;
    width: 90%;
    max-width: 90%;
    display: inline-block;
`;

export const TodoBtn = styled.button`
    display: inline-block;
    width: 10%;
    max-width: 10%;
    background: none;
    border: 1px solid black;
    border-radius: 15px;
    
    &:hover {
        background: black;
        color: white;
    }
`;

export const TodoDiv = styled.div`
    width: 100%;
    border-bottom: 1px solid #666;
`;