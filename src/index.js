import React from "react";
import {createRoot} from 'react-dom/client';

import './main.scss';

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My ToDo List</h1>;
};

const SearchPanel = () => {
    return <input placeholder="search" />;
};

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