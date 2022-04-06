import React from 'react';

    const TodoListItem = ({ label, importent = false }) => {

        const style = {
            color: importent ? 'tomato' : 'black'
        }

        return(
            <span style={style}>
                {label}
            </span>
        );
    };

export default TodoListItem;