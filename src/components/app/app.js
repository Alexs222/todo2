import React from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import './app.scss';

const todoData = [
    {label:'Drinc coffee', importent: false, id: 1 },
    {label:'React forever', importent: false, id: 2 },
    {label:'Build Awesome App', importent: true, id: 3 },
]


const App = () => {

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;