import React, { Component } from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

import './app.scss';



export default class App extends Component {

    state = {
        todoData: [
            {label:'Drinc coffee', importent: false, id: 1 },
            {label:'React forever', importent: false, id: 2 },
            {label:'Build Awesome App', importent: true, id: 3 },
        ]
    }
    
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const ind = todoData.findIndex((el) => el.id === id)
            const newTodoData = [...todoData.slice(0, ind),
                                 ...todoData.slice(ind + 1)]
            
            return {
                todoData: newTodoData
            }
        })
        
    }

    render () {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos = {this.state.todoData}
                    onDeleted = {this.deleteItem}
                 />
            </div>
        );
    }
};