import React, { Component } from "react";

import TodoList from "../todo-list";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.scss";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drinc coffee'),
      this.createTodoItem('React forever'),
      this.createTodoItem('Build Awesome App')
    ],
  };

  createTodoItem(label) {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
  } 

  toggleProperty(arr, id, propName) {
    const ind = arr.findIndex((el) => el.id === id);
    const oldItem = arr[ind];
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, ind),
      newItem,
      ...arr.slice(ind + 1),
    ];      

  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const ind = todoData.findIndex((el) => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, ind),
        ...todoData.slice(ind + 1),
      ];

      return {
        todoData: newTodoData
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      const newAddedArrey = [...todoData, newItem];

      return {
        todoData: newAddedArrey
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {

      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onChangeAll = () => {
    console.log('onChangeAll')
  }

  onChangeActive = () => {
    console.log('onChangeActive')
  }

  onChangeDone = () => {
    console.log('onChangeDone')
    this.setState(({ todoData }) => {
      const newDoneArrey = todoData.filter((item)=> item.done);
      console.log(todoData);
      console.log(newDoneArrey);

      return {
        todoData: newDoneArrey
      }
    })
  }

  onChangeActive = () => {
    console.log('onChangeDone')
    this.setState(({ todoData }) => {
      const newActiveArrey = todoData.filter((item) => !item.done);
      console.log(todoData);
      console.log(newActiveArrey);

      return {
        todoData: newActiveArrey
      }
    })
  }

  render() {
    const {todoData} = this.state
    const countDone = todoData.filter((el)=>el.done).length
    const countNotDone = todoData.length - countDone;

    return (
      <div className="todo-app">
        <AppHeader toDo={countNotDone} done={countDone} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter
            onChangeAll={this.onChangeAll}
            onChangeActive={this.onChangeActive}
            onChangeDone={this.onChangeDone} 
            />
        </div>
        <TodoList todos={todoData} 
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
