import React from "react";
import {createRoot} from 'react-dom/client';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";

import './main.scss';

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


const container = document.getElementById('root');
const root = createRoot(document.getElementById('root'));

root.render(<App />);