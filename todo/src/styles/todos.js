import styled from 'styled-components';

export const AppDiv = styled.div`
    min-width: 380px;
    max-width: 50%;
	min-height: 480px;
	max-height: 100%;
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
    border-radius: 5px;
    padding: 10px;
    margin-top: 2rem;
`;

export const TodoAddBtn = styled.input`
    width: 100%;
    border-radius: 5px;
    margin: 1rem auto;
`;