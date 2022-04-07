import React from 'react';

import TodoListItem from './todo-list-item';

import './todo-list.scss';

const TodoList = ({todos}) => {

    const elements = todos.map((item) => {
        
        const {id, ...otherProps} = item;

        return (
            <li key={id} className='list-group-item'>
                <TodoListItem {...otherProps} /> 
            </li>
        );
        
    })

    return (

        <ul className='list-group todo-list'>
           {elements}
        </ul>
    );
};

export default TodoList;