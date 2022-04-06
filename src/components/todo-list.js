import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => {
    // const items = ['Drinc coffi', 'Build Awesome App']
    return (
        <ul>
           <li><TodoListItem label='Drinc coffee'/></li>
           <li>
               <TodoListItem 
                    label='Build Awesome App'
                    importent
                />
            </li>
        </ul>
    );
};

export default TodoList;