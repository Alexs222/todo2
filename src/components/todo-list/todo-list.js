import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.scss';

const TodoList = ({todos, onDeleted}) => {

    const elements = todos.map((item) => {
        
        const {id, ...otherProps} = item;

        return (
            <li key={id} className='list-group-item '>
                <TodoListItem {...otherProps} 
                onDeleted ={() => onDeleted(id)}
                /> 
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