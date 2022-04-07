import React from "react";
import {createRoot} from 'react-dom/client';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

import './main.scss';

const todoData = [
    {label:'Drinc coffee', importent: false},
    {label:'React forever', importent: false},
    {label:'Build Awesome App', importent: true},
]


const App = () => {

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};


const container = document.getElementById('root');
const root = createRoot(document.getElementById('root'));

root.render(<App />);