import React from "react";
import {createRoot} from 'react-dom/client';

import './main.scss';

const el = (
    <div>
        <h1>My ToDo List</h1>
        <input placeholder="search" />
        <ul>
            <li>Learn React</li>
            <li>Build Awesome App</li>
        </ul>
    </div>
);



const container = document.getElementById('root');
const root = createRoot(document.getElementById('root'));

root.render(el);