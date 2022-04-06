import React from "react";
import {createRoot} from 'react-dom/client';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

import './main.scss';


const App = () => {

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};


const container = document.getElementById('root');
const root = createRoot(document.getElementById('root'));

root.render(<App />);